import { existsSync } from 'node:fs'
import path from 'node:path'
import { createReader } from '@keystatic/core/reader'

import { cache } from 'react'
import keystaticConfig from '../../keystatic.config'
import 'server-only'

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

export const getProjects = cache(async () => {
  const entries = await reader.collections.projects.all()
  return entries.sort(byStartDateDesc)
})

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000

// Years of experience sums each job's duration (gaps between jobs don't count; an ongoing job counts up to the build date)
export const getStats = cache(async () => {
  const [experience, projects] = await Promise.all([getExperience(), getProjects()])
  const experienceMs = experience.reduce((total, { entry }) => {
    const end = entry.endDate ? Date.parse(entry.endDate) : Date.now()
    return total + end - Date.parse(entry.startDate)
  }, 0)

  return {
    yearsOfExperience: Math.floor(experienceMs / MS_PER_YEAR),
    projectCount: projects.length,
  }
})

// icon becomes the public URL of public/icons/<icon>.svg, or null when that file doesn't exist,
// so a skill added without an icon renders a fallback instead of a broken image.
function withIconPath(skill: { name: string, icon: string }) {
  const iconExists = skill.icon !== '' && existsSync(path.join(process.cwd(), 'public/icons', `${skill.icon}.svg`))
  return { name: skill.name, icon: iconExists ? `/icons/${skill.icon}.svg` : null }
}

// Groups and the skills within them keep the order set in the CMS
export const getSkills = cache(async () => {
  const { languages, frameworks, tools } = await reader.singletons.skills.readOrThrow()
  return {
    languages: languages.map(withIconPath),
    frameworks: frameworks.map(withIconPath),
    tools: tools.map(withIconPath),
  }
})
