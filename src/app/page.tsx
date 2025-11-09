import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CourseSection';
import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AfterSchoolSection from '@/components/AfterSchoolSection';
import { LATITUDE, LONGITUDE } from '@/data/constants';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <HeroSection />

      <CoursesSection />

      <AfterSchoolSection />

      <AboutSection />

      <TestimonialsSection />

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} VanLearn International. All rights reserved.
        </div>
      </div>

      <Script id="after-school-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://vanlearn.com/#website',
              url: 'https://vanlearn.com/',
              name: 'VanLearn Education',
              alternateName: 'VanLearn'
            },
            {
              '@type': 'EducationalOrganization',
              '@id': 'https://vanlearn.com/#organization',
              name: 'VanLearn Education',
              url: 'https://vanlearn.com/',
              logo: 'https://vanlearn.com/images/logo.png',
              description:
                'VanLearn Education offers after-school tutoring, enrichment programs, and educational support for students in Langley, BC.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '20378 88 Ave',
                addressLocality: 'Langley Twp',
                addressRegion: 'BC',
                postalCode: 'V1M 2Y4',
                addressCountry: 'CA'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-236-989-1968',
                contactType: 'Customer Service'
              },
              areaServed: [
                { '@type': 'Place', name: 'Langley, BC' },
                { '@type': 'Place', name: 'Willoughby' },
                { '@type': 'Place', name: 'Walnut Grove' }
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: LATITUDE,
                longitude: LONGITUDE
              }
            }
          ]
        })}
      </Script>
    </div>
  );
}
