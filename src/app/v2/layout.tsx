import { ThemeProvider } from '@/lib/providers/theme-provider';
import { concertOne, dmMono, montserrat } from '@/styles/fonts';

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`theme-v2 ${montserrat.variable} ${concertOne.variable} ${dmMono.variable} min-h-dvh bg-background font-primary dark:bg-background-dark`}
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
      >
        {children}
      </ThemeProvider>
    </div>
  );
}
