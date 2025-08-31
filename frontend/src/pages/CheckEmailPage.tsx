export default function CheckEmailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Check your email
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          We’ve sent a confirmation link to your email address. <br />
          Please click the link to verify your account and complete your signup.
        </p>
      </div>
    </main>
  );
}
