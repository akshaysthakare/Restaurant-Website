//time stamp 1.47 min

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {  userResetPasswordSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom";

type ResetPasswordInputState = {
  password: string;
}

const ResetPassword = () => {
  const [input, setInput] = useState<ResetPasswordInputState>({
    password: ""
  })

  const loading = false;

  const [errors, setErrors] = useState<Partial<ResetPasswordInputState>>({})
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  const ResetPasswordSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userResetPasswordSchema.safeParse(input)
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<ResetPasswordInputState>)
      return;
    }
    console.log(input)
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form onSubmit={ResetPasswordSubmitHandler} className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-600"> Enter Your New Password to reset old password</p>
        </div>
        <div className="relative w-full">
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Enter Your New Password"
            className="pl-10"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
        </div>
        {
          errors && <span className="text-sm text-red-500">{errors.password}</span>
        }
        {
          loading ? (
            <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait </Button>
          ) : (
            <Button className="bg-orange hover:bg-hoverOrange"> Reset Password</Button>
          )
        }

        <span className="text-center">
          Back to{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default ResetPassword