import { useState } from "react";
import { supabase } from "../api/SupabaseAuth";

export default function SendPassResetMail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/resetpassword`,
      // ↑ このURLは自分の環境に合わせて調整
    });

    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage("✅ パスワードリセット用のリンクをメールに送信しました。");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white dark:bg-neutral-900 rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        パスワードリセット
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            登録済みのメールアドレス
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50"
        >
          {loading ? "送信中..." : "リセット用メールを送信"}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-sm text-center text-neutral-700 dark:text-neutral-300">
          {message}
        </p>
      )}
    </div>
  );
}
