import type { Metadata } from 'next'
import { WarmupProjectServers } from '@/components/v1/warmup-project-servers'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Jiss Joy',
  description: 'Full-stack web developer',
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
