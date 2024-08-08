import type { Metadata } from 'next';
import { MuseoModerno } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

// i18n Provider
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { siteConfig } from '@/config/site';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={museoModerno.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="relative flex flex-col">
              <Navbar />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
