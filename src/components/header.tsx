import Link from "next/link";
import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="py-8 container mx-auto px-4 lg:px-0">
      <div className="flex flex-row mx-auto justify-between items-center">
        <Link href="/" className="flex flex-row">
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
