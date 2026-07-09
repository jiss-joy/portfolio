import { concertOne, montserrat } from '@/styles/fonts';
import { ThemeProvider } from '@/lib/providers/theme-provider';

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${concertOne.variable} ${montserrat.variable} min-h-dvh`}>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
      >
        {children}
      </ThemeProvider>
    </div>
  );
}
