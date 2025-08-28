import "../styles/global.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:bg-neutral-900/80 dark:border-neutral-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-14 md:h-16">
        <div className="flex h-full items-center justify-between gap-3 md:gap-6">
          <h1 className="text-base md:text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            <Link
              to="/"
              className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Book Repository
            </Link>
          </h1>

          <nav aria-label="Header actions">
            <Link
              to="/signin"
              className="rounded-md px-2 py-1 md:px-3 md:py-1.5 text-sm font-medium
                     text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                     dark:text-blue-400 dark:hover:text-blue-300"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
