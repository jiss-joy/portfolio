'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import SNSButtons from './sns-buttons'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
] as const

type NavId = (typeof navLinks)[number]['id']

function getHashId(): NavId {
  const hash = window.location.hash.replace('#', '')
  return navLinks.some(link => link.id === hash) ? (hash as NavId) : 'about'
}

export const LeftSection = () => {
  const [activeId, setActiveId] = useState<NavId>('about')

  useEffect(() => {
    setActiveId(getHashId())

    const syncHash = () => setActiveId(getHashId())
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', syncHash)
    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', syncHash)
    }
  }, [])

  return (
    <section className="flex w-full max-w-md flex-col gap-10 px-6 py-12 sm:px-8 lg:h-full lg:max-w-xl lg:justify-between lg:gap-14 lg:px-12 lg:py-28 xl:px-14">
      <div className="flex flex-col gap-8 lg:gap-14">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>
          <h1 className="font-primary text-5xl font-extrabold leading-[0.95] tracking-tight text-secondary lg:text-6xl xl:text-7xl">
            JISS
            <span className="ml-3 text-primary">JOY</span>
          </h1>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary/55">
            Building thoughtful interfaces and reliable systems.
          </p>
        </div>

        <nav
          aria-label="Page sections"
          className="flex flex-row flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-3"
        >
          {navLinks.map(({ id, label }) => {
            const isActive = activeId === id

            return (
              <Link
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  history.pushState(null, '', `#${id}`)
                  setActiveId(id)
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`group flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-primary' : 'text-primary/70 hover:text-primary'
                }`}
              >
                <span
                  className={`hidden h-px transition-all duration-200 lg:block ${
                    isActive
                      ? 'w-14 bg-primary'
                      : 'w-8 bg-primary/50 group-hover:w-14 group-hover:bg-primary'
                  }`}
                />
                {label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <SNSButtons />
      </div>
    </section>
  )
}
