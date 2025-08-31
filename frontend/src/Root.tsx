import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
      <Header />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
