import "../styles/global.css";
import { SignInSchema } from "../schemas/User";
import type { SignInInput } from "../schemas/User";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Login
      </h2>
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Login
      </button>
      {/* navigating to SingUp page */}
      <p className="text-sm text-center text-gray-600">
        If you don't have your account, please{" "}
        <Link
          to="/signup"
          className="font-medium text-indigo-600 hover:text-indigo-500 underline"
        >
          Sign Up
        </Link>
        .
      </p>

      {/* Navigating to Password Reset page */}
      <p className="text-sm text-center text-gray-600">
        If you forget your password, please{" "}
        <Link
          to="/resetpassword"
          className="font-medium text-indigo-600 hover:text-indigo-500 underline"
        >
          Reset your Password
        </Link>
        .
      </p>
    </form>
  );
}
