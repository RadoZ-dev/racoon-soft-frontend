import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Header } from './components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { PortfolioFooter } from './components/portfolio-footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'raccoonSoft - WordPress Development Studio',
    template: '%s | raccoonSoft',
  },
  description: 'WordPress development and custom web solutions for agencies and growing businesses.',
  openGraph: {
    title: 'raccoonSoft - WordPress Development Studio',
    description: 'WordPress development and custom web solutions for agencies and growing businesses.',
    url: baseUrl,
    siteName: 'raccoonSoft',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <div className="min-h-screen bg-white text-black">
          <Header />
          {children}
          <PortfolioFooter />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
