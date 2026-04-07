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
  title: {
    default: 'Saikiran Reddy Jakka | Software Engineer & Researcher',
    template: '%s | Saikiran Reddy Jakka'
  },
  description: 'Graduate Researcher & Software Engineer at Stony Brook University. Specializing in Distributed Systems, applied Machine Learning, and scalable cloud infrastructures.',
  keywords: [
    'Saikiran Reddy Jakka', 'Software Engineer', 'Distributed Systems', 'Machine Learning', 
    'Stony Brook University', 'Backend Developer', 'Rust', 'Go', 'Python', 'Next.js', 'React'
  ],
  authors: [{ name: 'Saikiran Reddy Jakka', url: 'https://saikiranreddyj.github.io' }],
  creator: 'Saikiran Reddy Jakka',
  metadataBase: new URL('https://saikiranreddyj.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saikiran Reddy Jakka | Software Engineer',
    description: 'Graduate Researcher & Software Engineer at Stony Brook University. Exploring the intersection of Distributed Systems and AI.',
    url: 'https://saikiranreddyj.github.io',
    siteName: 'Saikiran Reddy Jakka Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c59af8b-cc69-44cb-8e5c-aa7254212651.png',
        width: 1200,
        height: 630,
        alt: 'Saikiran Reddy Jakka - Professional Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saikiran Reddy Jakka | Software Engineer',
    description: 'Graduate Researcher & Software Engineer specializing in Distributed Systems and applied ML.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-inter antialiased bg-[#f5f5f7] dark:bg-black min-h-screen transition-colors duration-700">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
