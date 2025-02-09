"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  function onClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button size="icon" onClick={onClick}>
      {theme == "dark" ? (
        <FiSun className="text-[32px]" />
      ) : (
        <FiMoon className="text-[32px]" />
      )}
    </Button>
  );
};

export default ThemeButton;
