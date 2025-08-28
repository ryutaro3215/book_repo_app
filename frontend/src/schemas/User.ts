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
    .min(8, { message: "more than 5 letters" })
    .regex(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      "Please input letter mixing small letter and number",
    ),
});

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
