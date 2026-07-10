import Image from 'next/image'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

const RESUME_PATH = '/resume.pdf'

export const PersonalCard = () => {
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-8 flex-col gap-6 rounded-2xl bg-primary/15 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
    >
      <div className="flex shrink-0 flex-col items-center gap-3 sm:w-44">
        <div className="relative size-36 overflow-hidden rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-background sm:size-40">
          <Image
            src="/photo-sakura.jpg"
            alt="Jiss Joy"
            fill
            quality={90}
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-secondary">Frontend Engineer</p>
          <p className="mt-1 text-xs text-secondary/60">Tokyo, Japan</p>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-secondary/75">
          With over 4 years of experience, I focus on building beautiful applications with clean,
          well-tested code — always with performance, scalability, and security in mind. Outside of
          work you&apos;ll usually find me on a football pitch, behind the wheel, or somewhere near
          the beach, and I cook and draw when I need a slower pace.
        </p>

        <div className="flex flex-col gap-2">
          <a
            href="mailto:jissjoy1@gmail.com"
            className="w-fit text-sm font-medium text-primary transition-colors hover:text-accent-hover"
          >
            jissjoy1@gmail.com
          </a>
          <Link
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-secondary/70 transition-colors hover:text-primary"
          >
            View resume
            <HiArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
