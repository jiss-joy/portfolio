import ruby from "@public/icons/ruby.svg";
import typescript from "@public/icons/typescript.svg";
import figma from "@public/icons/figma.svg";
import nextjs from "@public/icons/nextjs.svg";
import react from "@public/icons/react.svg";
import rails from "@public/icons/rails.svg";
import tailwind from "@public/icons/tailwind.svg";
import aws from "@public/icons/aws.svg";
import redux from "@public/icons/redux.svg";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

const skills = [
  {
    title: "Typescript",
    description: "Programming Language",
    icon: typescript,
  },
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby,
  },
  {
    title: "React",
    description: "JavaScript Library",
    icon: react,
  },
  {
    title: "Next.js",
    description: "React Framework",
    icon: nextjs,
  },
  {
    title: "Ruby on Rails",
    description: "Programming Language",
    icon: rails,
  },
  {
    title: "Figma",
    description: "Programming Language",
    icon: figma,
  },
  {
    title: "Tailwind CSS",
    description: "Programming Language",
    icon: tailwind,
  },
  {
    title: "Redux",
    description: "Web Server",
    icon: redux,
  },
  {
    title: "AWS",
    description: "Programming Language",
    icon: aws,
  },
];

const Skills = () => {
  return (
    <section className="leading-snug">
      <div className="flex flex-row gap-2 bg-primary w-fit rounded-full px-4 py-1 items-center justify-center">
        <FaCode />
        <h5 className="h4">Skills</h5>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex bg-white dark:bg-transparent items-center hover:border-accent hover:transition-all justify-start gap-2 dark:border dark:border-white/20 rounded-xl px-4 w-[200px] lg:w-[220px] h-[50px]"
          >
            <Image
              src={skill.icon}
              alt="Tech"
              className="w-6 lg:w-8 h-6 lg:h-8"
            />
            <div className="px-2 py-2">
              <h5 className="title lg:h5">{skill.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
