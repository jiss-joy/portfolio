// NEXT_PUBLIC_ so the admin UI (client) and the API route (server) agree on the mode
export const isGitHubStorage = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === 'github'

// Local mode has no sign-in and writes straight to disk, so outside dev the admin is only served once GitHub mode
// (GitHub sign-in, commits as you) is configured
export const isKeystaticAdminEnabled = isGitHubStorage || process.env.NODE_ENV === 'development'
