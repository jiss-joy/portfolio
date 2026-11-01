import type { Metadata } from 'next'
import { WarmupProjectServers } from '@/components/v1/warmup-project-servers'
import { getProfile } from '@/lib/content'
import '@/styles/globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const { name, designation, description } = await getProfile()

  return {
    title: `${name} — ${designation}`,
    // First paragraph of the bio (paragraphs come out of the YAML separated by a single newline); the full text is too long for search result snippets
    description: description.split('\n')[0],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <WarmupProjectServers />
        {children}
      </body>
    </html>
  )
}
