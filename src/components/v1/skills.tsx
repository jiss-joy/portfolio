import Image from 'next/image'
import { FaCode } from 'react-icons/fa'
import { getSkills } from '@/lib/content'

const Skills = async () => {
  const { languages, frameworks, tools } = await getSkills()
  const skills = [...languages, ...frameworks, ...tools]

  return (
    <section className="mt-8 leading-snug">
      <div className="flex w-fit flex-row items-center justify-center gap-2 rounded-full bg-primary px-4 py-1">
        <FaCode />
        <h5 className="h4">Skills</h5>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-center gap-2 lg:justify-start">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex h-[50px] w-[180px] items-center justify-start gap-2 rounded-xl bg-white px-4 hover:border-accent hover:transition-all dark:border dark:border-white/20 dark:bg-transparent lg:w-[220px]"
          >
            {icon
              ? (
                  <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-6 w-6 lg:h-8 lg:w-8"
                  />
                )
              : <FaCode className="h-6 w-6 lg:h-8 lg:w-8" />}
            <div className="px-2 py-2">
              <h5 className="title lg:h5">{name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
