import "../styles/global.css";
import { NewPasswordSchema } from "../schemas/User";
import type { NewPasswordInput } from "../schemas/User";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordInput>({
    resolver: zodResolver(NewPasswordSchema),
  });

  const onSubmit: SubmitHandler<NewPasswordInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Reset Password
      </h2>
      {/* Current Password*/}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Current Password
        </label>
        <input
          type="password"
          {...register("currentPassword", { required: true })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
        />
        {errors.currentPassword && (
          <span className="text-red-500 text-sm">
            {errors.currentPassword.message}
          </span>
        )}
      </div>

      {/* New Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          type="password"
          {...register("newPassword", { required: true })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
        />
        {errors.newPassword && (
          <span className="text-red-500 text-sm">
            {errors.newPassword.message}
          </span>
        )}
      </div>

      {/* Confirm New Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          {...register("newPasswordConfirm", { required: true })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
        />
        {errors.newPasswordConfirm && (
          <span className="text-red-500 text-sm">
            {errors.newPasswordConfirm.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Reset Password
      </button>
    </form>
  );
}
