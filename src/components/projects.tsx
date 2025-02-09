'use client';

import React, { useRef, useState } from 'react';
import { CardSpotlight } from './ui/card-spotlight';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Heart from './heart';
import MedillaProjectCard from './project-cards/medilla-project-card';

// Projects
// 1. Robot Spider
// 2. Benri Yoyaku
// 3. Medilla

const projects = [
  {
    title: 'Robot Spider',
    description:
      "Led the development of a bio-mimicking, eight-legged spider robot for rough terrain navigation, focusing on the project's programming and control systems, with integrated surveillance capabilities.",
  },
  {
    title: 'Benri Yoyaku',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum diam eu ultricies dictum. Maecenas leo est, scelerisque id eleifend vel, varius eget eros. ',
  },
  {
    title: 'Medilla',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum diam eu ultricies dictum. Maecenas leo est, scelerisque id eleifend vel, varius eget eros. Quisque congue finibus justo, a pharetra orci egestas ac. Fusce eget magna congue turpis lacinia iaculis cursus vitae neque. ',
  },
];

const Projects = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <MedillaProjectCard />
    </div>
  );
};

export default Projects;
