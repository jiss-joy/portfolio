import aws from '@public/icons/aws.svg';
import django from '@public/icons/django.svg';
import docker from '@public/icons/docker.svg';
import figma from '@public/icons/figma.svg';
import flutter from '@public/icons/flutter.svg';
import javascript from '@public/icons/javascript.svg';
import mysql from '@public/icons/mysql.svg';
import nextjs from '@public/icons/nextjs.svg';
import postgresql from '@public/icons/postgresql.svg';
import python from '@public/icons/python.svg';
import rails from '@public/icons/rails.svg';
import react from '@public/icons/react.svg';
import redux from '@public/icons/redux.svg';
import ruby from '@public/icons/ruby.svg';
import tailwind from '@public/icons/tailwind.svg';
import typescript from '@public/icons/typescript.svg';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa';

type SkillsType = {
  title: string;
  icon: string;
};

const programmingLanguages: SkillsType[] = [
  {
    title: 'Javascript',
    icon: javascript as string,
  },
  {
    title: 'Typescript',
    icon: typescript as string,
  },
  {
    title: 'Ruby',
    icon: ruby as string,
  },
  {
    title: 'Python',
    icon: python as string,
  },
];

const frameworks: SkillsType[] = [
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
    title: 'Flutter',
    icon: flutter as string,
  },
  {
    title: 'Django',
    icon: django as string,
  },
];

const otherTools: SkillsType[] = [
  {
    title: 'Figma',
    icon: figma as string,
  },
  {
    title: 'MySQL',
    icon: mysql as string,
  },
  {
    title: 'PostgreSQL',
    icon: postgresql as string,
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
    title: 'Docker',
    icon: docker as string,
  },
  {
    title: 'AWS',
    icon: aws as string,
  },
];

const skills = programmingLanguages.concat(frameworks, otherTools);

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
