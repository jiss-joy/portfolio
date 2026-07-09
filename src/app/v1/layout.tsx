import Footer from '@/components/v1/footer'
import Header from '@/components/v1/header'
import { ThemeProvider } from '@/lib/providers/theme-provider'
import { concertOne, nunito } from '@/styles/fonts'

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${nunito.variable} ${concertOne.variable} min-h-dvh font-primary`}>
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
