"use client";
import Link from "next/link";

import { NavigationMenuLink } from "@/app/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <>
      <div className="l-0 r-0 z-50 sticky top-0 md:top-4 m-auto md:mt-4 flex max-md:w-full w-[80%] justify-between items-center md:rounded-lg border border-[#343434] bg-[#0a0a0a] bg-opacity-50 max-md:px-4  px-10 py-3 text-xl backdrop-blur-lg backdrop-filter">
        <Link href="/" className="text-2xl cursor-pointer text-white">
          ReachOut
        </Link>
        <div className="space-x-5 flex flex-row text-white text-md">
          <Link href={"/ride-sharing"}>Ride Sharing</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Navbar;
