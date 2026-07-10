import Image from 'next/image'

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

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <p className="text-sm leading-relaxed text-secondary/75">
          Love football and driving. Beach lover. Building stuff. Cooking. Drawing. Committed to
          building beautiful applications and writing clean, well-tested code focused on
          performance, scalability, and security.
        </p>
        <a
          href="mailto:jissjoy1@gmail.com"
          className="w-fit text-sm font-medium text-primary transition-colors hover:text-accent-hover"
        >
          jissjoy1@gmail.com
        </a>
      </div>
    </section>
  )
}
