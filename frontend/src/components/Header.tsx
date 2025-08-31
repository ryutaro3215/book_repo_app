import "../styles/global.css";
import { Link } from "react-router";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router";

export default function Header() {
  const { session, signout } = useAuth();
  const navigate = useNavigate();
  const isLogin = !!session;

  const handleSignOut = async () => {
    try {
      await signout();
      navigate("/", { replace: true });
    } catch (e: any) {
      alert(e.message ?? "Sign out failed");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur dark:bg-neutral-900/70 dark:border-neutral-800">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <h1 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          <Link to="/">
            Book <span className="text-indigo-600">Repository</span>
          </Link>
        </h1>

        {!isLogin ? (
          <nav className="flex items-center gap-3" aria-label="Header actions">
            <Link
              to="/auth/signin"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Sign in
            </Link>
            <Link
              to="/auth/signup"
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Create account
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-3" aria-label="Header actions">
            <Link
              to="/profile"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Profile
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Sign out
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
