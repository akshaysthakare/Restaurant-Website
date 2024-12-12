import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//there are 2 types to define the type for variable 1) interface 2)type
//we use interface when we use class component
// interface LoginInputState {
//   email:string;
//   password:string;
// }

// //we extend interface when we want all the feild along with some0 additional field
// interface LoginInputWithAge extends LoginInputState{
//   email:string;
//   password:string;
// }


// //when makeing validation using the zod we dont need to add the type (refer userSchema)
// type LoginInputState = {
//   email: string;
//   password: string;
// }

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<Partial<LoginInputState>>({})
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input)
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>)
      return;
    }
    console.log(input)
  }

  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4 ">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Thakare Eats</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input type="email" placeholder="Email" name="email" value={input.email} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-sm text-red-500">{errors.email}</span>
            }
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input type="password" placeholder="Password" name="password" value={input.password} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-sm text-red-500">{errors.password}</span>
            }
          </div>
        </div>
        <div className="mb-10">
          {
            loading ?
              <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-2 w-4 animate-spin" /> Please Wait</Button>
              :
              (<Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Login</Button>)
          }
          <div className="mt-5">
            <Link to="/forgot-password" className="hover:text-blue-500 hover:underline"> Forgot Password</Link>
          </div>
        </div>
        <Separator />
        <p className="mt-2">Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default Login;