'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

type ThemeButtonProps = {
  classname?: string
}

const ThemeButton = ({ classname }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme()

  function onClick() {
    if (theme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }

  return (
    <Button
      size="icon"
      onClick={onClick}
      variant="ghost"
      className={cn(classname)}
    >
      {theme === 'dark' ? <FiSun className="text-[32px]" /> : <FiMoon className="text-[32px]" />}
    </Button>
  )
}

export default ThemeButton
