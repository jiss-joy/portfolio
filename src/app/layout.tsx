import type { Metadata } from "next";
import "../styles/globals.css";
import { dmMono } from "@/styles/fonts";
import Header from "@/components/header";
import { ThemeProvider } from "@/lib/providers/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmMono.variable} ${dmMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
