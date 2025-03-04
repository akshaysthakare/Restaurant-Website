import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "@radix-ui/react-separator";

const Navbar = () => {
  const admin = true;
  const loading = false;
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <h1 className="font-bold text-white text-3xl hover:text-gray-200 transition-colors duration-300">Thakare's Eats</h1>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <div className="hidden md:flex items-center gap-6 text-white">
                <Link to="/" className="text-gray-100 hover:text-gray-200 transition-colors duration-300">Home</Link>
                <Link to="/profile" className="text-gray-100 hover:text-gray-200 transition-colors duration-300">Profile</Link>
                <Link to="/order/status" className="text-gray-100 hover:text-gray-200 transition-colors duration-300">Order</Link>

                {admin && (
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className="hover:text-gray-200 transition-colors duration-300">Dashboard</MenubarTrigger>
                      <MenubarContent>
                        <Link to="/admin/restaurant">
                          <MenubarItem>Restaurant</MenubarItem>
                        </Link>
                        <Link to="/admin/menu">
                          <MenubarItem>Menu</MenubarItem>
                        </Link>
                        <Link to="/admin/orders">
                          <MenubarItem>Orders</MenubarItem>
                        </Link>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                )}
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="text-black  border-white">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Dark
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Link to="/cart" className="relative cursor-pointer text-white hover:text-gray-200 transition-colors duration-300">
                  <ShoppingCart />
                  {/* <Button size={'icon'} className="absolute -insit-y-3 left-2 botton-4 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500">5</Button> */}
                </Link>
                <div>
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>
                      CN
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  {
                    loading ? (
                      <Button disabled className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please Wait
                      </Button>
                    ) : (
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Logout</Button>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="md:hidden lg:hidden">
              {/* Mobile responsive */}
              <MobileNavBar />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {/* This div adds space between the navbar and the content */}
      </div>
    </>
  );
};

export default Navbar;

const MobileNavBar = () => {
  const loading = false;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="rounded-full bg-gray-200 text-black hover:bg-gray-300"
          variant="outline"
        >
          <Menu size={"18"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>Thakare's Eats</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="text-black border-white">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />

        <SheetDescription className="flex-1">
          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer text-gray-900 hover:text-gray-900 font-medium"
          >
            <User />
            <span>Profile</span>
          </Link>

          <Link
            to="/order/status"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer text-gray-900 hover:text-gray-900 font-medium"
          >
            <HandPlatter />
            <span>Order</span>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer text-gray-900 hover:text-gray-900 font-medium"
          >
            <ShoppingCart />
            <span>Cart (0)</span>
          </Link>

          <Link
            to="/admin/menu"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer text-gray-900 hover:text-gray-900 font-medium"
          >
            <SquareMenu />
            <span>Menu</span>
          </Link>

          <Link
            to="/admin/restaurant"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer text-gray-900 hover:text-gray-900 font-medium"
          >
            <UtensilsCrossed />
            <span>Restaurant</span>
          </Link>

          <Link
            to="/admin/orders"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer text-gray-900 hover:text-gray-900 font-medium"
          >
            <PackageCheck />
            <span>Restaurant Orders</span>
          </Link>
        </SheetDescription>

        <SheetFooter className="flex flex-col gap-4">
          <div className="flex flex-row text-gray-900 items-center gap-3">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="font-bold">Thakare Mernstack</h3>
          </div>
          <SheetClose asChild>
            {loading ? (
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button
                // onClick={logout}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Logout
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};