'use client'

import { useEffect } from 'react'

/**
 * Triggers server-side health pings for project servers once per page load.
 * Goes through /api/warmup so browser CORS does not block production.
 */
export function WarmupProjectServers() {
  useEffect(() => {
    const controller = new AbortController()

    void fetch('/api/warmup', {
      method: 'GET',
      signal: controller.signal,
    }).catch(() => {
      // Abort or network errors are irrelevant for warmup.
    })

    return () => controller.abort()
  }, [])

  return null
}
