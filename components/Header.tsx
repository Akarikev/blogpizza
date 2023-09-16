"use client";
import React, { useMemo } from "react";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { MenuIcon, MenuSquareIcon, PizzaIcon, SearchIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "News",
        active: pathname === "/news" || pathname === "/news/",
        href: "/news/",
      },
      {
        label: "Sports",
        active: pathname === "/sports" || pathname === "/news/",
        href: "/sports/",
      },
      {
        label: "Entertainment",
        active: pathname === "/ent" || pathname === "/ent/",
        href: "/ent/",
      },
      {
        label: "Life",
        active: pathname === "/life" || pathname === "/life/",
        href: "/life/",
      },
      {
        label: "Tech",
        active: pathname === "/tech" || pathname === "/tech/",
        href: "/tech/",
      },
    ],
    [pathname]
  );
  return (
    <div className="p-6" suppressHydrationWarning>
      <div className="flex justify-between flex-1 px-4 md:px-20 lg:px-44">
        <div>
          <h1 className="flex gap-2 font-bold text-pink-600 text-2xl">
            blogpizza
            <PizzaIcon className="" />
          </h1>
        </div>

        <div className="md:flex justify-between gap-x-4 hidden">
          {routes.map((item) => {
            return (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={twMerge(
                    `
                    hover:text-pink-600 text-muted-foreground
            `,
                    item.active && "text-pink-600 font-bold"
                  )}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="md:flex hidden">
          <SearchIcon className="text-pink-700 cursor-pointer hover:text-muted-foreground" />
        </div>
        {/* Mobile view */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon width={60} height={40} className="text-pink-600" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="underline">Discover</SheetTitle>
                <SheetDescription className="flex flex-col ">
                  {routes.map((item) => {
                    return (
                      <div key={item.label}>
                        <Link
                          href={item.href}
                          className={twMerge(
                            `
                    hover:text-pink-600 text-muted-foreground flex flex-initial text-2xl mt-3 font-bold
            `,
                            item.active && "text-pink-600 font-bold"
                          )}
                        >
                          {item.label}
                        </Link>
                      </div>
                    );
                  })}

                  <div className="mt-3">
                    <SearchIcon className="text-pink-700  cursor-pointer hover:text-muted-foreground" />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Header;
