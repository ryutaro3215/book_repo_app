// WelcomePage.tsx
import { Link } from "react-router";

export default function WelcomePage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <section className="w-full max-w-3xl text-center">
        <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Welcome to <span className="text-indigo-600">Book Repository</span>{" "}
            App!!
          </h2>
          <p className="mt-4 text-gray-600">
            Your account has been created. You can now visit your profile page.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/profile"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Go to Profile
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
