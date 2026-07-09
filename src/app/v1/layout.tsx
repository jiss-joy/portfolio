import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/lib/providers/theme-provider'
import { concertOne, nunito } from '@/styles/fonts'

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${nunito.variable} ${concertOne.variable} font-primary min-h-dvh`}>
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
