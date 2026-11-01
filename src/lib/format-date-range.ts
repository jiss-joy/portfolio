// UTC so ISO dates (YYYY-MM-DD) never shift to the previous month/year in negative-offset timezones
const formatters = {
  month: new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }),
  year: new Intl.DateTimeFormat('en-US', { year: 'numeric', timeZone: 'UTC' }),
}

/**
 * Formats ISO date strings as a range, with "Present" when there's no end date.
 * - month: "Nov 2021 — Oct 2025"
 * - year: "2021 — 2025"
 */
export function formatDateRange(startDate: string, endDate: string | null, precision: 'month' | 'year' = 'month') {
  const formatter = formatters[precision]
  const start = formatter.format(new Date(startDate))
  const end = endDate ? formatter.format(new Date(endDate)) : 'Present'
  return `${start} — ${end}`
}
