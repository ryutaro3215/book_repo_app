import "../styles/global.css";

export default function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        © {new Date().getFullYear()} Book Repository. All rights reserved.
      </div>
    </footer>
  );
}
