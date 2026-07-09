import type { Metadata } from 'next';
import '../../styles/globals.css';
import { concertOne, montserrat } from '@/styles/fonts';
import { ThemeProvider } from '@/lib/providers/theme-provider';

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
        className={`${concertOne.variable}  ${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
