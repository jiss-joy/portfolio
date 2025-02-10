import Skills from '@/components/skills';

import SNSButtons from '@/components/sns-buttons';
import RolesTypingText from '@/components/roles-typing-text';
import Photo from '@/components/photo';
import Stats from '@/components/stats';
import ExperienceEducationTimeline from '@/components/experience-education-timeline';
import Projects from '@/components/projects';
import DownloadCVButton from '@/components/download-cv-button';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container h-full items-center justify-center px-4 md:px-8 lg:mx-auto lg:px-0'>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:pb-8 lg:pt-8'>
          <div className='lg:hidden'>
            <Photo />
          </div>
          <div
            id='#'
            className='text-center lg:text-left'
          >
            <h2 className='h2 mb-6'>
              Hi, It&apos;s <span className='text-primary'>Jiss Joy</span>
            </h2>
            <RolesTypingText />
            <p className='mb-9 mt-5 max-w-[500px] text-lg'>
              Committed to building beautiful applications and writing clean, well-tested code
              focused on performance, scalability, and security.
            </p>
            {/* Resume and SNS */}
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <DownloadCVButton />
              <div className='mb-8 lg:mb-0'>
                <SNSButtons />
              </div>
            </div>
          </div>
          <div className='hidden lg:flex'>
            <Photo />
          </div>
        </div>
        <Stats />
        <div className=' mt-16 h-[1px] w-full rounded-full bg-slate-900/10 dark:bg-white/10 lg:my-14' />
        {/* About */}
        <div
          id='about'
          className='mt-16 w-full items-center justify-center space-y-8 lg:my-14'
        >
          <h3 className='h3'>About Me</h3>
          <Skills />
          <ExperienceEducationTimeline />
        </div>
        {/* Projects */}
        <div
          id='projects'
          className='mt-16 space-y-8 lg:my-14'
        >
          <h3 className='h3'>Projects</h3>
          <Projects />
        </div>
        {/* Contact */}
        <div
          id='contact'
          className='mt-16 space-y-8 lg:my-14'
        >
          <h3 className='h3'>Contact</h3>
          <Contact />
        </div>
      </div>
    </section>
  );
}
