
import { z } from "zod"

export const userSignupSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atlest 6 character"),
  contact: z.string().min(10, "Contact No must be 10 digit")
})

export type SignupInputState = z.infer<typeof userSignupSchema>

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atlest 6 character"),

})

export type LoginInputState = z.infer<typeof userLoginSchema>


export const userForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export type ForgotPasswordInputState = z.infer<typeof userForgotPasswordSchema>


export const userResetPasswordSchema = z.object({
  password: z.string().min(6, "Password must be atlest 6 character"),
})

// export type ResetPasswordInputState = z.infer<typeof userForgotPasswordSchema>