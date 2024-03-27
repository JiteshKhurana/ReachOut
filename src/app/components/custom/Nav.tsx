"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "../../../components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../../../components/ui/navigation-menu";
import { cn } from "../../../lib/utils";
import React from "react";

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
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  return (
    <>
      <div className="l-0 r-0 z-50 sticky top-0 md:top-4 m-auto md:mt-4 flex max-md:w-full w-[80%] justify-between items-center md:rounded-lg border border-[#343434] bg-[#0a0a0a] bg-opacity-50 max-md:px-4  px-10 py-3 text-xl backdrop-blur-lg backdrop-filter">
        <Link href="/" className="text-2xl cursor-pointer">
          ReachOut
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[350px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          ReachOut
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          ReachOut is an innovative web platform designed to
                          streamline the way students connect with each other.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/ride-sharing" title="Ride Sharing">
                    Ride Together, Save Together - Shared Journeys, Shared
                    Savings
                  </ListItem>
                  <ListItem href="/mock-interview" title="Mock Interview">
                    Practice Makes Perfect - Ace Your Interviews with Peer Power
                  </ListItem>
                  <ListItem href="/hackathon-peers" title="Hackathon Peers">
                    Team Up to Triumph - Hackathons Made Hassle-Free
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {user ? (
              <NavigationMenuItem>
                <Link
                  href={{
                    pathname: "/" + user?.nickname,
                  }}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Hi {user?.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <Button asChild>
                <a href="/api/auth/login">Sign in</a>
              </Button>
            )}
            <a href="https://github.com/JiteshKhurana/ReachOut" target="_blank">
              <FaGithub className="mx-2" />
            </a>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
