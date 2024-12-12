import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { ForgotPasswordInputState, userForgotPasswordSchema } from "@/schema/userSchema";
import { Loader2, Mail } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [input, setInput] = useState<ForgotPasswordInputState>({
    email: ""
  })

  const loading = false;


  const [errors, setErrors] = useState<Partial<ForgotPasswordInputState>>({})
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  const forgotPasswordSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userForgotPasswordSchema.safeParse(input)
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<ForgotPasswordInputState>)
      return;
    }
    console.log(input)
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form onSubmit={forgotPasswordSubmitHandler} className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600"> Enter Your Email Address to reset your password</p>
        </div>
        <div className="relative w-full">
          <Input
            type="text"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="Enter Your email"
            className="pl-10"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
        </div>
        {
          errors && <span className="text-sm text-red-500">{errors.email}</span>
        }
        {
          loading ? (
            <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait </Button>
          ) : (
            <Button className="bg-orange hover:bg-hoverOrange"> Send Reset Link</Button>
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

export default ForgotPassword