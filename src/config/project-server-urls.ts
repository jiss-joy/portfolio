/**
 * Backend health endpoints pinged once when the portfolio loads (cold-start warmup).
 * Set PROJECT_SERVER_URLS as a comma-separated list of full URLs.
 * Leave unset/empty locally so deployed servers are not pinged during dev.
 *
 * Example: PROJECT_SERVER_URLS=https://aegis.example.com/api/healthz,https://other.example.com/healthz
 */
export function getProjectServerUrls(): string[] {
  const raw = process.env.PROJECT_SERVER_URLS
  if (!raw?.trim()) {
    return []
  }

  return raw
    .split(',')
    .map(url => url.trim())
    .filter(Boolean)
}
