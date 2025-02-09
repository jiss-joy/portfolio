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

type SkillsType = {
  title: string;
  description: string;
  icon: string;
}

const skills:SkillsType[] = [
  {
    title: "Typescript",
    description: "Programming Language",
    icon: typescript as string,
  },
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby as string,
  },
  {
    title: "React",
    description: "JavaScript Library",
    icon: react as string,
  },
  {
    title: "Next.js",
    description: "React Framework",
    icon: nextjs as string,
  },
  {
    title: "Ruby on Rails",
    description: "Programming Language",
    icon: rails as string,
  },
  {
    title: "Figma",
    description: "Programming Language",
    icon: figma as string,
  },
  {
    title: "Tailwind CSS",
    description: "Programming Language",
    icon: tailwind as string,
  },
  {
    title: "Redux",
    description: "Web Server",
    icon: redux as string,
  },
  {
    title: "AWS",
    description: "Programming Language",
    icon: aws as string,
  },
];

const Skills = () => {
  return (
    <section className="leading-snug">
      <h3 className="h3">My skill set</h3>
      <p>Areas where my expertise lies.</p>
      <div className="flex flex-wrap gap-4 mt-4 items-center justify-stretch">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center hover:border-accent hover:transition-all justify-start gap-2 border border-white/20 rounded-xl px-4 w-[220px] xl:w-[240] h-[50px]"
          >
            <Image src={skill.icon} alt="Ruby" width={36} height={36} />
            <div className="px-2 py-2">
              <h5 className="h5">{skill.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
