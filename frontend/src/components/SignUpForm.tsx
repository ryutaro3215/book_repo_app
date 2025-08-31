import "../styles/global.css";
import { SignUpSchema } from "../schemas/User";
import type { SignUpInput } from "../schemas/User";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router"; // ← dom に統一
import { MdMail, MdPerson, MdLock } from "react-icons/md";
import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { session, loading, signup } = useAuth();

  useEffect(() => {
    if (!loading && session) navigate("/", { replace: true });
  }, [loading, session, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpInput> = async (values) => {
    try {
      await signup({
        email: values.email,
        password: values.password,
        username: values.username,
      });
      navigate("/auth/signup/authcheckemail", { replace: true });
    } catch (e: any) {
      alert(e.message ?? "Sign up failed");
    }
  };

  if (loading) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      {/* 見出し（Homeと同系の淡色バッジ + 見出し） */}
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
          ✍️ Create your account
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
          Join Book <span className="text-indigo-600">Repository</span>
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          メール認証リンクを送ります。完了後にサインインできます。
        </p>
      </div>

      {/* カード（Homeのカードと統一感） */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 space-y-6"
      >
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            User Name
          </label>
          <div className="relative mt-1">
            <MdPerson className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              id="username"
              type="text"
              {...register("username", { required: true })}
              className="w-full rounded-md border border-neutral-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              placeholder="ex) book repo"
            />
          </div>
          {errors.username && (
            <p className="mt-1 text-xs text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Email
          </label>
          <div className="relative mt-1">
            <MdMail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="w-full rounded-md border border-neutral-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Password
          </label>
          <div className="relative mt-1">
            <MdLock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              className="w-full rounded-md border border-neutral-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              placeholder="••••••••"
            />
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Register"}
        </button>

        {/* Links */}
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
          If you already have your account,{" "}
          <Link
            to="/auth/signin"
            className="font-medium text-indigo-600 hover:text-indigo-700 underline dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Sign In
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
