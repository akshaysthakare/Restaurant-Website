import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4 ">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Thakare Eats</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input type="email" placeholder="Email" className="pl-10 focus-visible:ring-1" />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input type="password" placeholder="Password" className="pl-10 focus-visible:ring-1" />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-10">
          {
            loading ?
              <Button className="w-full bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-2 w-4 animate-spin" /> Please Wait</Button>
              :
              (<Button className="w-full bg-orange hover:bg-hoverOrange">Login</Button>)
          }
        </div>
        <Separator />

      </form>
    </div>
  )
}

export default Login;