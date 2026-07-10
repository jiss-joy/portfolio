import { Experiences } from './experiences'
import { PersonalCard } from './personal-card'
import { Projects } from './projects'

export const RightSection = () => {
  return (
    <section className="v2-scrollbar w-full lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:scroll-smooth">
      <div className="flex w-full flex-col gap-10 px-6 py-8 pb-20 sm:px-8 lg:gap-14 lg:px-0 lg:py-24 lg:pb-16 lg:pe-10 lg:ps-6 xl:max-w-3xl xl:pe-24 xl:ps-8 2xl:pe-32">
        <PersonalCard />
        <Experiences />
        <Projects />
      </div>
    </section>
  )
}
