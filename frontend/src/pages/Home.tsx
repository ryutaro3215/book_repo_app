// Home.tsx
import { Link } from "react-router";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto grid min-h-[52vh] place-items-center py-14 sm:py-20">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              📚 Personal Library Manager
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50">
              Organize your <span className="text-indigo-600">books</span>{" "}
              beautifully
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              Book Repository は、個人の蔵書をすばやく登録・整理・検索するための
              ミニマルな蔵書管理アプリです。ISBN でも手入力でも、あなたの本棚を
              クリーンにキープ。
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                to="/auth/signup"
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                はじめる
              </Link>
              <Link
                to="/profile"
                className="rounded-xl border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                マイページ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip (static placeholders) */}
      <section className="border-y bg-white/60 py-8 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
          {[
            { label: "登録冊数", value: "1,248" },
            { label: "読了冊数", value: "732" },
            { label: "積読冊数", value: "210" },
            { label: "タグ数", value: "58" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="ワンクリック登録"
            desc="ISBN・バーコードから素早く登録。シリーズも自動でまとまります。"
            emoji="⚡"
          />
          <FeatureCard
            title="タグ & メモ"
            desc="ジャンルや読み心地をタグで管理。メモで感想や引用も保存。"
            emoji="🏷️"
          />
          <FeatureCard
            title="読みたい/読了の管理"
            desc="ステータスを切り替えて進捗を可視化。積読を賢く解消。"
            emoji="✅"
          />
          <FeatureCard
            title="本棚ビュー"
            desc="表紙を並べた本棚ビューで眺めるだけでも楽しい。"
            emoji="🗂️"
          />
          <FeatureCard
            title="エクスポート"
            desc="CSV/JSONでバックアップ。引っ越しも安心。"
            emoji="⬇️"
          />
          <FeatureCard
            title="プライバシー優先"
            desc="あなたの蔵書はあなたのもの。RLSで安全に保護。"
            emoji="🔒"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8 text-center shadow-sm dark:border-indigo-800 dark:bg-indigo-900/30">
          <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
            さっそく本棚を作りましょう
          </h3>
          <p className="mt-2 text-sm text-indigo-900/80 dark:text-indigo-200/80">
            アカウントを作成して、初めての1冊を登録。
          </p>
          <div className="mt-6">
            <Link
              to="/auth/signup"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              無料で始める
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  desc,
  emoji,
}: {
  title: string;
  desc: string;
  emoji: string;
}) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors hover:border-indigo-300 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="text-3xl">{emoji}</div>
      <h4 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h4>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        {desc}
      </p>
    </div>
  );
}
