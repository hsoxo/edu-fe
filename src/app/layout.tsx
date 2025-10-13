import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: 'VanLearn Education 温学国际 | Academic Success in Canada',
    template: '%s | VanLearn Education 温学国际'
  },
  description:
    'VanLearn International Education helps students in Canada achieve academic success through personalized education planning, after-school programs, language learning, and test preparation.',
  keywords: [
    'VanLearn Education',
    'Education Planning',
    'Study in Canada',
    'IELTS TOEFL Prep',
    'After-School Programs',
    'University Application Guidance',
    'Academic Tutoring',
    'Langley Education',
    'Vancouver Tutoring',
    '温学国际'
  ],
  metadataBase: new URL('https://www.vanlearn.com'),
  openGraph: {
    title: 'VanLearn International Education | Academic Success in Canada',
    description:
      'Providing personalized academic guidance, after-school programs, and education planning for students from elementary to university in Canada.',
    url: 'https://www.vanlearn.com',
    siteName: 'VanLearn Education',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'VanLearn International Education'
      }
    ],
    locale: 'en_CA',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="VanLearn International Education" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
