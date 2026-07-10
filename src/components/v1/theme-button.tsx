'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

type ThemeButtonProps = {
  classname?: string
}

const ThemeButton = ({ classname }: ThemeButtonProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function onClick() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      size="icon"
      onClick={onClick}
      variant="ghost"
      className={cn(classname)}
      aria-label="Toggle theme"
      disabled={!mounted}
    >
      {!mounted
        ? (
            <span className="size-8" />
          )
        : resolvedTheme === 'dark'
          ? (
              <FiSun className="text-[32px]" />
            )
          : (
              <FiMoon className="text-[32px]" />
            )}
    </Button>
  )
}

export default ThemeButton
