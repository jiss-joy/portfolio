import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const sns = [
  {
    name: "linkedin",
    url: "https://linkedin.com/in/jiss-joy",
    icon: <FaLinkedinIn />,
  },
  { name: "github", url: "https://github.com/jiss-joy", icon: <FaGithub /> },
  { name: "instagram", url: "https://instagram.com", icon: <FaInstagram /> },
];

const SNSButtons = () => {
  return (
    <div className="flex gap-2">
      {sns.map((e, index) => {
        return (
          <Link
            key={index}
            href={e.url}
            className="w-9 h-9 flex text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 items-center justify-center rounded-full border border-accent"
          >
            {e.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SNSButtons;
