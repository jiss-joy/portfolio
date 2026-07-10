export const VERSIONS = ['v1', 'v2'] as const

export type SiteVersion = (typeof VERSIONS)[number]

/**
 * Served for:
 * - apex / www (jissjoy.com)
 * - any subdomain not listed in VERSIONS (wildcard catch-all)
 * Flip when promoting a new default.
 */
export const DEFAULT_VERSION: SiteVersion = 'v1'

export function isSiteVersion(value: string): value is SiteVersion {
  return (VERSIONS as readonly string[]).includes(value)
}
