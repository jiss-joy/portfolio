'use client';

import { useRef } from 'react';
import MedillaProjectCard from './project-cards/medilla-project-card';
import RobotSpiderProjectCard from './project-cards/robot-spider-project-card';
import BenriYoyakuProjectCard from './project-cards/benri-yoyaku-project-card';

// Projects
// 1. Robot Spider
// 2. Benri Yoyaku
// 3. Medilla

const Projects = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  return (
    <div className='grid grid-cols-2 gap-4'>
      <BenriYoyakuProjectCard cardRef={ref3} />
      <RobotSpiderProjectCard cardRef={ref2} />
      <MedillaProjectCard cardRef={ref1} />
    </div>
  );
};

export default Projects;
