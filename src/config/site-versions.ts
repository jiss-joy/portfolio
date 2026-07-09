export const VERSIONS = ['v1', 'v2'] as const

export type SiteVersion = (typeof VERSIONS)[number]

/** Apex domain (jissjoy.com) serves this version. Flip when promoting. */
export const DEFAULT_VERSION: SiteVersion = 'v1'

export function isSiteVersion(value: string): value is SiteVersion {
  return (VERSIONS as readonly string[]).includes(value)
}
