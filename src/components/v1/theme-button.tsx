'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { cn } from '@/lib/utils'

type ThemeButtonProps = {
  classname?: string
}

const ThemeButton = ({ classname }: ThemeButtonProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span
        className={cn('inline-flex size-10 shrink-0', classname)}
        aria-hidden
      />
    )
  }

  return (
    <AnimatedThemeToggler
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      onThemeChange={setTheme}
      className={cn(
        'inline-flex size-5 shrink-0 items-center justify-center rounded-md text-secondary transition-colors hover:bg-primary/10 hover:text-primary dark:text-white',
        '[&_svg]:size-8',
        classname,
      )}
    />
  )
}

export default ThemeButton
