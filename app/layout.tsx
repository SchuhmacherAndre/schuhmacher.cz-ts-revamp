import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";
import { ny } from '@/lib/utils'

import "./globals.css";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "Schuhmacher Projektservice",
  description: "made by André Schuhmacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={ny(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
