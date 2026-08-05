import { getProjectServerUrls } from '@/config/project-server-urls'

const DEFAULT_TIMEOUT_MS = 15_000

async function ping(url: string): Promise<void> {
  try {
    await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
    })
  }
  catch {
    // Ping must never affect the portfolio.
  }
}

/** Fire-and-forget GET to every URL in PROJECT_SERVER_URLS. Never throws. */
export async function pingProjectServers(): Promise<void> {
  const urls = getProjectServerUrls()
  if (urls.length === 0) {
    return
  }

  await Promise.all(urls.map(async url => ping(url)))
}
