'use client'

import CountUp from 'react-countup'

type StatsProps = {
  stats: { label: string, value: number }[]
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <section className="pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map(({ label, value }) => {
            return (
              <div
                key={label}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-center"
              >
                <CountUp
                  end={value}
                  duration={6}
                  enableScrollSpy
                  scrollSpyOnce
                  className="text-5xl font-semibold"
                />
                <p
                  className={`${
                    label.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug`}
                >
                  {label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
