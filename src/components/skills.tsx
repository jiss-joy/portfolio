import ruby from "@public/icons/ruby.svg";
import Image from "next/image";
// import logo from '@public/brand/logo-black.svg';

const skills = [
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby,
  },
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby,
  },
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby,
  },
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby,
  },
  {
    title: "Ruby",
    description: "Programming Language",
    icon: ruby,
  },
];

const Skills = () => {
  return (
    <section>
      <h3 className="h3">My skill set</h3>
      <p>Areas where my expertise lies.</p>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 border border-white/20 rounded-xl px-4 w-fit"
          >
            <Image src={skill.icon} alt="Ruby" width={36} height={36} />
            <div className="">
              <h4 className="h4">{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
