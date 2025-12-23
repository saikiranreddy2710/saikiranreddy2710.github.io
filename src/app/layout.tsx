import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-sf-pro',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saikiran Reddy J - Portfolio',
  description: 'Software Developer & Engineer specializing in modern web technologies. Explore my projects, skills, and professional journey.',
  keywords: 'Saikiran Reddy J, Software Developer, React, Next.js, TypeScript, Portfolio, Web Development',
  authors: [{ name: 'Saikiran Reddy J' }],
  creator: 'Saikiran Reddy J',
  openGraph: {
    title: 'Saikiran Reddy J - Portfolio',
    description: 'Software Developer & Engineer specializing in modern web technologies',
    url: 'https://saikiranreddyj.github.io',
    siteName: 'Saikiran Reddy J Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c59af8b-cc69-44cb-8e5c-aa7254212651.png',
        width: 1200,
        height: 630,
        alt: 'Saikiran Reddy J - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saikiran Reddy J - Portfolio',
    description: 'Software Developer & Engineer specializing in modern web technologies',
    images: ['https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/331ae85f-6941-4e17-a93b-486edb6ccf74.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-inter antialiased bg-black min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
