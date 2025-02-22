import ruby from '@public/icons/ruby.svg';
import typescript from '@public/icons/typescript.svg';
import figma from '@public/icons/figma.svg';
import nextjs from '@public/icons/nextjs.svg';
import react from '@public/icons/react.svg';
import rails from '@public/icons/rails.svg';
import tailwind from '@public/icons/tailwind.svg';
import aws from '@public/icons/aws.svg';
import redux from '@public/icons/redux.svg';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa';

type SkillsType = {
  title: string;
  icon: string;
};

const skills: SkillsType[] = [
  {
    title: 'Typescript',
    icon: typescript as string,
  },
  {
    title: 'Ruby',
    icon: ruby as string,
  },
  {
    title: 'React',
    icon: react as string,
  },
  {
    title: 'Next.js',
    icon: nextjs as string,
  },
  {
    title: 'Ruby on Rails',
    icon: rails as string,
  },
  {
    title: 'Figma',
    icon: figma as string,
  },
  {
    title: 'Tailwind CSS',
    icon: tailwind as string,
  },
  {
    title: 'Redux',
    icon: redux as string,
  },
  {
    title: 'AWS',
    icon: aws as string,
  },
];

const Skills = () => {
  return (
    <section className='mt-8 leading-snug'>
      <div className='flex w-fit flex-row items-center justify-center gap-2 rounded-full bg-primary px-4 py-1'>
        <FaCode />
        <h5 className='h4'>Skills</h5>
      </div>
      <div className='mt-4 flex flex-wrap items-end justify-center gap-2 lg:justify-start'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex h-[50px] w-[180px] items-center justify-start gap-2 rounded-xl bg-white px-4 hover:border-accent hover:transition-all dark:border dark:border-white/20 dark:bg-transparent lg:w-[220px]'
          >
            <Image
              src={skill.icon}
              alt='Tech'
              className='h-6 w-6 lg:h-8 lg:w-8'
            />
            <div className='px-2 py-2'>
              <h5 className='title lg:h5'>{skill.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
