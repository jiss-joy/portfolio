import Link from 'next/link';
import SNSButtons from './sns-buttons';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const LeftSection = () => {
  return (
    <section className='flex h-full w-[42%] shrink-0 flex-col justify-between px-16 py-24 lg:px-24 lg:py-28 xl:px-32'>
      <div className='flex flex-col gap-14'>
        <div>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary'>
            Portfolio
          </p>
          <h1 className='font-primary text-6xl font-extrabold leading-[0.95] tracking-tight text-secondary xl:text-7xl'>
            JISS
            <span className='ml-3 text-primary'>JOY</span>
          </h1>
          <p className='mt-4 max-w-xs text-sm leading-relaxed text-secondary/55'>
            Building thoughtful interfaces and reliable systems.
          </p>
        </div>

        <nav
          aria-label='Page sections'
          className='flex flex-col gap-3'
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className='group flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70 transition-colors hover:text-primary'
            >
              <span className='h-px w-8 bg-primary/50 transition-all duration-200 group-hover:w-14 group-hover:bg-primary' />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <SNSButtons />
    </section>
  );
};
