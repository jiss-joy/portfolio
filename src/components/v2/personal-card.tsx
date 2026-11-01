import Image from 'next/image'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'
import { getProfile } from '@/lib/content'

export const PersonalCard = async () => {
  const profile = await getProfile()
  const { name, designation, description, email, address, resume } = profile
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-8 flex-col gap-6 rounded-2xl bg-primary/15 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
    >
      <div className="flex shrink-0 flex-col items-center gap-3 sm:w-44">
        <div className="relative size-36 overflow-hidden rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-background sm:size-40">
          <Image
            src="/photo-sakura.jpg"
            alt={name}
            fill
            quality={90}
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-secondary">{designation}</p>
          <p className="mt-1 text-xs text-secondary/60">{address}</p>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-secondary/75">
          {description}
        </p>

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${email}`}
            className="w-fit text-sm font-medium text-primary transition-colors hover:text-accent-hover"
          >
            {email}
          </a>
          <Link
            href={resume}
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
