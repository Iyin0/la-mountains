import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const oswald = Oswald({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Los Angeles Mountains',
//   description: '',
// }

export const metadata: Metadata = {
  title: 'Los Angeles Mountains',
  description: 'Exploring the heights and wonders of nature in Los Angeles',
  openGraph: {
    title: 'Los Angeles Mountains',
    description: 'Exploring the heights and wonders of nature in Los Angeles',
    url: 'https://la-mountains-flax.vercel.app/',
    siteName: 'Los Angeles Mountains',
    images: [
      {
        url: './assets/FooterLogo.png',
        width: 800,
        height: 600,
      },
      {
        url: './assets/Logo-text.png',
        width: 1800,
        height: 1600,
        alt: 'Los Angeles Mountains',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'app',
    title: 'Los Angeles Mountains',
    description: 'Exploring the heights and wonders of nature in Los Angeles',
    site: '@iyin___',
    creator: '@iyin___',
    images: {
      url: './assets/FooterLogo.png',
      alt: 'Los Angeles Mountains',
    },
    app: {
      name: 'Los Angeles Mountains',
      id: {
        iphone: '',
        ipad: '',
        googleplay: '',
      },
      url: {
        iphone: '',
        ipad: '',
      },
    },
  },
  alternates: {
    canonical: 'https://la-mountains-flax.vercel.app/',
  },
  appLinks: {
    web: {
      url: 'https://la-mountains-flax.vercel.app/',
      should_fallback: true,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
