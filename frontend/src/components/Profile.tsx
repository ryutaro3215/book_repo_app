import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../providers/AuthProvider";

export default function Profile() {
  const navigate = useNavigate();
  const { session, loading, signout } = useAuth();

  useEffect(() => {
    if (!loading && !session) {
      navigate("/auth/signin", { replace: true });
    }
  }, [loading, session, navigate]);

  const handleSignOut = async () => {
    try {
      await signout();
      navigate("/", { replace: true });
    } catch (e: any) {
      alert(e.message ?? "Sign out failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="animate-pulse text-gray-500">Loading profile…</div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account information
          </p>

          <ul className="mt-6 divide-y divide-gray-200">
            <li className="py-4 flex items-center justify-between">
              <span className="text-sm text-gray-600">Email</span>
              <span className="text-sm font-medium text-gray-900">
                {session?.user.email}
              </span>
            </li>
            {/* 追加の項目があればここに li を増やす */}
          </ul>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Back to Home
            </button>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
