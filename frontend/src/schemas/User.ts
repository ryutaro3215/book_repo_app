import * as z from "zod";

export const SignInSchema = z.object({
  email: z.email({ message: "change to Valid address" }),
  password: z
    .string()
    .min(8, { message: "more than 5 letters" })
    .regex(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      "Please input letter mixing small letter and number",
    ),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: "more than 2 letters" })
    .max(30, { message: "less than 30" }),
  email: z.email({ message: "change to valid address" }),
  password: z
    .string()
    .min(8, { message: "more than 8 letters" })
    .regex(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      "Please input letter mixing small letter and number",
    ),
});

export const NewPasswordSchema = z
  .object({
    currentPassword: z.string().min(1, { message: "Please input password" }),
    newPassword: z
      .string()
      .min(8, { message: "more than 8 letters" })
      .regex(
        /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
        "パスワードは半角英数字混合で入力してください",
      ),
    newPasswordConfirm: z
      .string()
      .min(1, { message: "Please input new password again" }),
  })
  .superRefine(({ currentPassword, newPassword, newPasswordConfirm }, ctx) => {
    if (newPassword !== newPasswordConfirm) {
      ctx.addIssue({
        path: ["newPasswordConfirm"],
        code: "custom",
        message: "Not match new password",
      });
    }
    if (currentPassword === newPassword) {
      ctx.addIssue({
        path: ["newPassword"],
        code: "custom",
        message: "Can't set current password to new password",
      });
    }
  });

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type NewPasswordInput = z.infer<typeof NewPasswordSchema>;
