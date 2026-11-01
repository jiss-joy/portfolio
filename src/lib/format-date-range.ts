// UTC so ISO dates (YYYY-MM-DD) never shift to the previous month in negative-offset timezones
const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/** Formats ISO date strings as "Nov 2021 — Oct 2025", or "Oct 2025 — Present" when there's no end date. */
export function formatDateRange(startDate: string, endDate: string | null) {
  const start = monthYear.format(new Date(startDate))
  const end = endDate ? monthYear.format(new Date(endDate)) : 'Present'
  return `${start} — ${end}`
}
