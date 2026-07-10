import { Experiences } from './experiences';
import { Projects } from './projects';
import { PersonalCard } from './personal-card';
import { Contact } from './contact';

export const RightSection = () => {
  return (
    <section className='h-full w-[55%] overflow-y-auto overscroll-contain scroll-smooth py-32 pe-24 ps-16'>
      <div className='flex w-full flex-col items-center gap-8'>
        <PersonalCard />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </section>
  );
};
