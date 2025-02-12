import type { Metadata } from 'next';
import '../styles/globals.css';
import { concertOne, nunito } from '@/styles/fonts';
import Header from '@/components/header';
import { ThemeProvider } from '@/lib/providers/theme-provider';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Jiss Joy',
  description: 'Full-stack web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${nunito.variable} ${nunito.variable} ${concertOne.variable} ${concertOne.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
