import { createReader } from '@keystatic/core/reader'
import { cache } from 'react'
import keystaticConfig from '../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

// readOrThrow fails the build if a singleton file is missing, instead of silently rendering blanks.
// cache dedupes reads across components within a single render (e.g. page + footer).
export const getProfile = cache(async () => {
  return reader.singletons.profile.readOrThrow()
})

export const getSkills = cache(async () => {
  return reader.collections.skills.all()
})
