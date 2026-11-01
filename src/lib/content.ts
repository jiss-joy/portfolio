'server-only'

import { createReader } from '@keystatic/core/reader'
import { cache } from 'react'
import keystaticConfig from '../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

// readOrThrow fails the build if a singleton file is missing, instead of silently rendering blanks.
// cache dedupes reads across components within a single render (e.g. page + footer).
export const getProfile = cache(async () => {
  return reader.singletons.profile.readOrThrow()
})

// ISO date strings (YYYY-MM-DD) sort correctly as plain strings
const byStartDateDesc = (a: { entry: { startDate: string } }, b: { entry: { startDate: string } }) =>
  b.entry.startDate.localeCompare(a.entry.startDate)

export const getExperience = cache(async () => {
  const entries = await reader.collections.experience.all()
  return entries.sort(byStartDateDesc)
})

export const getEducation = cache(async () => {
  const entries = await reader.collections.education.all()
  return entries.sort(byStartDateDesc)
})
