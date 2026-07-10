import Footer from '@/components/v1/footer'
import Header from '@/components/v1/header'
import { ThemeProvider } from '@/lib/providers/theme-provider'
import { concertOne, dmMono, nunito } from '@/styles/fonts'

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={`theme-v1 ${nunito.variable} ${concertOne.variable} ${dmMono.variable} min-h-dvh bg-background font-primary dark:bg-background-dark`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
      >
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  )
}
