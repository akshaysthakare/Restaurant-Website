import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HereImage from "@/assets/hero_pizza.png";

const HereSection = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food anytime & anywhere
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicios food is waiting for you, we are always near to
            you.
          </p>
        </div>
        <div className="relative flex items-center gap-2">

          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 rounded-lg shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />

          <Button className="bg-orange hover:bg-hoverOrange"> Search </Button>
        </div>
      </div>
      <div>
        <img src={HereImage} 
        alt=""
        className="object-cover w-full max-h-[400px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default HereSection;