import "../styles/global.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="border-t border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="py-6 text-center text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
          © {year} Book Repository. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
