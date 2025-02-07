import Link from "next/link";
import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="py-8 container mx-auto">
      <div className="flex flex-row mx-auto justify-between items-center">
        <Link href="/" className="flex flex-row">
          <h1 className="text-4xl">Jiss</h1>
          <h1 className="text-4xl text-accent">J</h1>
          <h1 className="text-4xl">oy</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
