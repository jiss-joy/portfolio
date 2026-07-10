import Link from 'next/link';

interface Experience {
  title: string;
  company: string;
  url?: string;
  date: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Full-Stack Engineer',
    company: 'Cybereason',
    url: 'https://www.cybereason.com/',
    date: '2025 ー PRESENT',
    description:
      'Add and maintain features and components to the core portal. Standout features include a tool that visualizes the attack path of a malware, using Next.js and Rust.',
    technologies: ['Typescript', 'Rust', 'Next.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Canbright',
    url: 'https://canbright.co.jp',
    date: '2022 ー 2025',
    description:
      'Designed and implemented multiple front-end features using Nextjs, ensuring seamless integration with the backend. Designed and implemented key backend features using Ruby on Rails, while refactoring existing code to address database performance bottlenecks, resulting in a 40% decrease in application response time.',
    technologies: ['Javascript', 'Typescript', 'Ruby on Rails', 'Next.js', 'AWS'],
  },
  {
    title: 'Android Developer Intern',
    company: 'Smartech Brain Technologies',
    url: undefined,
    date: '2020 ー 2021',
    description:
      'Designed, built, and deployed 3 Android e-commerce applications, leveraging various Firebase products to enhance functionality and user experience.',
    technologies: ['Java', 'Firebase'],
  },
];

const outerCardStyling = 'transition-all duration-100 hover:bg-pink-600/20 rounded-lg p-4';

export const Experiences = () => {
  return (
    <div className='flex w-full flex-col gap-8'>
      {experiences.map((experience) =>
        experience.url ? (
          <Link
            href={experience.url}
            target='_blank'
            className={outerCardStyling}
          >
            <div className='flex w-full flex-col gap-8'>
              <div className='flex w-full flex-row items-start gap-8'>
                <div className='w-1/6 pt-1 text-xs font-medium text-slate-400'>
                  {experience.date}
                </div>
                <div className='flex w-4/6 flex-col gap-2'>
                  <div className='text-md font-semibold leading-none tracking-tight'>
                    {experience.title}&nbsp;&nbsp;•&nbsp;&nbsp;{experience.company}
                  </div>
                  <div className='text-sm text-pink-600/50'>{experience.description}</div>
                  <div className='mt-2 flex w-full flex-row gap-2'>
                    <div className='flex flex-row gap-2'>
                      {experience.technologies.map((technology) => {
                        return (
                          <div className='w-fit rounded-full bg-primary px-2 py-1 text-xs font-medium text-slate-200'>
                            {technology}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className={`flex w-full flex-row items-start gap-8 ${outerCardStyling}`}>
            <div className='w-1/6 pt-1 text-xs font-medium text-slate-400'>{experience.date}</div>
            <div className='flex w-5/6 flex-col gap-2'>
              <div className='text-md font-semibold leading-none tracking-tight'>
                {experience.title}&nbsp;&nbsp;•&nbsp;&nbsp;{experience.company}
              </div>
              <div className='text-sm text-pink-600/50 text-slate-200 transition-all duration-100'>
                {experience.description}
              </div>
              <div className='mt-2 flex w-full flex-row gap-2'>
                <div className='flex flex-row gap-2'>
                  {experience.technologies.map((technology) => {
                    return (
                      <div className='w-fit rounded-full bg-primary px-2 py-1 text-xs font-medium text-slate-200'>
                        {technology}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
