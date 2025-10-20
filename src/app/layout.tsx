import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from 'sonner';
import { LATITUDE, LONGITUDE } from '@/data/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanlearn.com'),

  title: {
    default: 'VanLearn Education | Academic & Language Programs in Langley & Burnaby',
    template: '%s | VanLearn Education'
  },

  description:
    'VanLearn Education offers English, Math, Science, Language, and After-School programs in Langley and Burnaby. Learn from certified instructors with proven results and personalized learning paths.',

  keywords: [
    'vanlearn education',
    'tutoring langley',
    'tutoring burnaby',
    'english tutoring',
    'ielts preparation',
    'reading and writing classes',
    'toefl prep course',
    'math tutoring',
    'ap ib math',
    'computer programming for kids',
    'chess club langley',
    'piano lessons for kids',
    'art classes for children',
    'after school langley',
    'french language course',
    'chinese language program',
    'japanese class canada',
    'teaching jobs langley',
    'education careers canada',
    'personalized learning',
    'student success'
  ],

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://vanlearn.com',
    siteName: 'VanLearn Education',
    title: 'VanLearn Education | Academic, Language & After-School Programs',
    description:
      'Empowering students in Langley and Burnaby through English, Math, Science, and Language programs. Certified teachers. Proven results.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'VanLearn Education classroom and students'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'VanLearn Education | Academic & Language Excellence',
    description:
      'High-quality tutoring and after-school programs in Langley and Burnaby. Join VanLearn to learn English, Math, Science, and Arts.',
    images: ['/images/logo.png']
  },

  alternates: {
    canonical: 'https://vanlearn.com'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },

  icons: {
    icon: '/images/logo.ico',
    apple: '/images/logo.png'
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
        <link rel="icon" href="/images/logo.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="VanLearn International Education" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'VanLearn Education',
            url: 'https://vanlearn.com',
            logo: 'https://vanlearn.com/images/logo.png',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '20378 88 Ave',
              addressLocality: 'Langley Twp',
              addressRegion: 'BC',
              postalCode: 'V1M 2Y4',
              addressCountry: 'CA'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: LATITUDE,
              longitude: LONGITUDE
            },
            openingHours: 'Mo-Fr 09:00-19:00',
            description:
              'VanLearn Education offers English, Math, Science, Language, and After-School programs for K–12 students in Langley and Burnaby.',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-236-989-1968',
              contactType: 'Customer Service'
            }
          })}
        </script>
        <meta name="google-site-verification" content="2EWT4Y55LmBkyM92LoaGXjbjq7h01o-OP6LWD8m2yzk" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
