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

export const NewPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: "more than 8 letters" })
    .max(100, { message: "Password must be at most 100 characters" })
    .regex(/[a-z]/i, { message: "Password must contain at least one letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/^[a-z\d]+$/i, {
      message: "Password can only contain letters and numbers",
    }),
  newPasswordConfirm: z
    .string()
    .min(1, { message: "Please input new password again" }),
});

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type NewPasswordInput = z.infer<typeof NewPasswordSchema>;
