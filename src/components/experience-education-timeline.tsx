import { LiaToolsSolid } from 'react-icons/lia';
import { Timeline } from './ui/timeline';

const educationData = [
  {
    title: 'Fullstack Developer',
    content: (
      <div>
        <h3 className='h4'>Canbright Co. Ltd.</h3>
        <p>May 2022 - Present</p>
        <p>
          Designed and implemented multiple front-end features using Nextjs, ensuring seamless
          integration with the backend. Designed and implemented key backend features using Ruby on
          Rails, while refactoring existing code to address database performance bottlenecks,
          resulting in a 40% decrease in application response time.
        </p>
      </div>
    ),
  },
  {
    title: 'Software Developer Trainee',
    content: (
      <div>
        <h3 className='h4'>Canbright Co. Ltd.</h3>
        <p>November 2021 - May 2022</p>
        <p>
          Developed and implemented an in-house scrum point estimation system, improving team sprint
          planning. Designed and built the UI with Figma and React. CHECK Contributed innovative
          ideas to the mobile team, resulting in the improvement of the UI/UX on mobile devices.
        </p>
      </div>
    ),
  },
  {
    title: 'Android Developer Intern',
    content: (
      <div>
        <h3 className='h4'>Smartech Brain Technologies</h3>
        <p>August 2020 - January 2021</p>
        <p>
          Designed, built, and deployed 3 Android e-commerce applications, leveraging various
          Firebase products to enhance functionality and user experience.
        </p>
      </div>
    ),
  },
  {
    title: 'Undergraduate',
    content: (
      <div>
        <h3 className='h4'>M.S.Ramaiah University of Applied Sciences</h3>
        <p>August 2017 - August 2021</p>
      </div>
    ),
  },
  {
    title: 'School',
    content: (
      <div>
        <h3 className='h4'>Devamatha CMI Public School</h3>
        <p>August 2017 - August 2021</p>
      </div>
    ),
  },
];

const ExperienceEducationTimeline = () => {
  return (
    <section className='mt-16'>
      <div className='flex w-fit flex-row items-center justify-center gap-2 rounded-full bg-primary px-4 py-1'>
        <LiaToolsSolid />
        <h4 className='h4'>Experience and Academic qualifications</h4>
      </div>
      <Timeline data={educationData} />
    </section>
  );
};

export default ExperienceEducationTimeline;
