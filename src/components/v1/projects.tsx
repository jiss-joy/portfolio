'use client'

import BenriYoyakuProjectCard from '@/components/v1/benri-yoyaku-project-card'
import ForumsAppProjectCard from '@/components/v1/forums-app-project-card'
import MedillaProjectCard from '@/components/v1/medilla-project-card'
import RobotSpiderProjectCard from '@/components/v1/robot-spider-project-card'

const Projects = () => {
  return (
    <div className="grid gap-4 px-4 lg:grid-cols-2">
      <BenriYoyakuProjectCard />
      <MedillaProjectCard />
      <RobotSpiderProjectCard />
      <ForumsAppProjectCard />
    </div>
  )
}

export default Projects
