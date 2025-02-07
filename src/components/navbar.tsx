"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

type LinkType = {
  path: string;
  label: string;
};

const Navbar = () => {
  const links: LinkType[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "#about",
      label: "About",
    },
    {
      path: "/projects",
      label: "Projects",
    },
  ];

  const pathname = usePathname();
  return (
    <div>
      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-4 items-center justify-between">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path == pathname && "text-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact">
          <Button className="bg-accent">Contact Me</Button>
        </Link>
      </div>
      {/* Mobile Nav */}
      <div className="lg:hidden"></div>
    </div>
  );
};

export default Navbar;
