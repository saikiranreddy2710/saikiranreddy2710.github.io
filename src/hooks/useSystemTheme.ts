"use client"

import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

export function useSystemTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') return

    // Get initial theme from system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(mediaQuery.matches ? 'dark' : 'light')

    // Listen for system theme changes
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    } 
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [])

  return theme
}
