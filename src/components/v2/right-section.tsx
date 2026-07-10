import { Experiences } from './experiences'
import { PersonalCard } from './personal-card'
import { Projects } from './projects'

export const RightSection = () => {
  return (
    <section className="v2-scrollbar h-full w-full overflow-y-auto overscroll-contain scroll-smooth">
      <div className="flex w-full flex-col gap-14 py-24 pb-16 pe-6 ps-0 lg:pe-10 lg:ps-6 xl:max-w-3xl xl:pe-24 xl:ps-8 2xl:pe-32">
        <PersonalCard />
        <Experiences />
        <Projects />
      </div>
    </section>
  )
}
