import type { Metadata } from 'next';
import { MuseoModerno } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

import { siteConfig } from '@/config/site';

import { Navbar } from '@/components/Navbar';

const museoModerno = MuseoModerno({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={museoModerno.className}>
        <Providers>
          <div className="relative flex flex-col">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
