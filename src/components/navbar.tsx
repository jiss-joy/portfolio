"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { TbMenu4 } from "react-icons/tb";
import ThemeButton from "./theme-button";
import Logo from "./logo";

type LinkType = {
  path: string;
  label: string;
};

const Navbar = () => {
  const links: LinkType[] = [
    {
      path: "/#about",
      label: "About Me",
    },
    {
      path: "/#projects",
      label: "Projects",
    },
  ];

  const pathname = usePathname();
  const point = `/#${pathname}`;
  
  return (
    <div>
      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-6 items-center justify-between">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path == point && "text-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact">
          <Button className="bg-accent">Contact Me</Button>
        </Link>
        <ThemeButton classname="hidden lg:flex" />
      </div>
      {/* Mobile Nav */}
      <div className="lg:hidden flex flex-row gap-4">
        <ThemeButton classname="lg:hidden" />
        <Sheet>
          <SheetTrigger className="flex justify-center items-center">
            <TbMenu4 className="text-[32px] text-accent" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center">
            <div className="mt-32 mb-20 text-center text-xl">
              <Link href="/" className="flex flex-row">
                <Logo />
              </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  scroll={false}
                  className={`${
                    link.path == pathname && "text-accent"
                  } capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
