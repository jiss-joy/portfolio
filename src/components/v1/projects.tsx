'use client';

import MedillaProjectCard from './project-cards/medilla-project-card';
import RobotSpiderProjectCard from './project-cards/robot-spider-project-card';
import BenriYoyakuProjectCard from './project-cards/benri-yoyaku-project-card';
import ForumsAppProjectCard from './project-cards/forums-app-project-card';

const Projects = () => {
  return (
    <div className='grid gap-4 px-4 lg:grid-cols-2'>
      <BenriYoyakuProjectCard />
      <MedillaProjectCard />
      <RobotSpiderProjectCard />
      <ForumsAppProjectCard />
    </div>
  );
};

export default Projects;
