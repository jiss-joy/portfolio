import { Experiences } from './experiences'
import { PersonalCard } from './personal-card'

export const RightSection = () => {
  return (
    <section className="h-full w-[58%] overflow-y-auto overscroll-contain scroll-smooth px-10 py-24 pe-16 lg:px-14 lg:py-28 lg:pe-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-14 pb-16">
        <PersonalCard />
        <Experiences />
      </div>
    </section>
  )
}
