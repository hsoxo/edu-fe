import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';
import Script from 'next/script';
import { LATITUDE, LONGITUDE } from '@/data/constants';
import type { Metadata } from 'next';
import { Brush, BookOpen, Clock, Apple, Palette, Trees } from 'lucide-react';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanlearn.com'),

  title: 'Langley Spring & Summer Camps | Willoughby & Walnut Grove | VanLearn Education',
  description:
    'VanLearn Education offers exciting Spring and Summer Camps in Langley for kids aged 5–12. Creative learning, science exploration, and outdoor adventures for students in Willoughby and Walnut Grove.',

  keywords: [
    'langley summer camp',
    'willoughby summer camp',
    'walnut grove camp',
    'langley spring camp',
    'creative camp langley',
    'kids camp langley',
    'art camp langley',
    'science camp langley',
    'vanlearn camp',
    'vanlearn summer camp',
    'langley kids enrichment camp',
    'after school camp langley',
    'academic camp langley',
    'summer programs for kids langley',
    'day camp near willoughby town centre',
    'education camp langley',
    'steam camp langley'
  ],

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://vanlearn.com/camp',
    siteName: 'VanLearn Education',
    title: 'Langley Spring & Summer Camps | Willoughby & Walnut Grove | VanLearn Education',
    description:
      'Join VanLearn’s creative and academic Spring & Summer Camps in Langley. Serving families near Willoughby and Walnut Grove with art, science, and fun learning adventures.',
    images: [
      {
        url: '/images/camp-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Summer Camp in Langley - VanLearn Education'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Langley Spring & Summer Camps | VanLearn Education',
    description:
      'Fun, creative, and educational Spring & Summer Camps in Willoughby and Walnut Grove. Explore art, science, and teamwork with VanLearn.',
    images: ['/images/camp-hero.jpg']
  },

  alternates: {
    canonical: 'https://vanlearn.com/camp'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  }
};

const GALLERY = [
  '/images/20251109145159_245_1-min.jpg',
  '/images/20251109145211_246_1-min.jpg',
  '/images/20251109145557_248_1-min.jpg',
  '/images/20251109145602_249_1-min.jpg',
  '/images/20251109145614_250_1-min.jpg',
  '/images/20251109145648_251_1-min.jpg',
  '/images/20251109145751_252_1-min.jpg',
  '/images/20251109145948_253_1-min.jpg',
  '/images/20251109153024_256_1-min.jpg'
];

export default function Camp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative h-[520px] w-full">
        <Image
          src="/images/20251109142647_239_1.jpg"
          alt="Langley Summer Camp for Kids"
          fill
          className="object-cover"
          priority
        />
        <div
          className={
            `absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6` +
            ` bg-gradient-to-b from-black/0 via-black/10 to-black/20`
          }
        >
          <h1
            className={
              'text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]' +
              ' transition-transform duration-500 hover:scale-[1.03]'
            }
          >
            Winter & Spring & Summer Art Camp
          </h1>

          <p className="relative text-xl font-bold md:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            <span className="inline-block border-t border-gray-300 w-10 mr-3 align-middle"></span>
            Next Session: Dec 29, 2025 - Jan 2, 2026
            <span className="inline-block border-t border-gray-300 w-10 ml-3 align-middle"></span>
          </p>

          <a
            href="#contact"
            className={
              'bg-[#E23E3E] text-white px-10 py-3 rounded-full text-sm md:text-base font-semibold ' +
              'hover:bg-[#c92d2d] hover:shadow-[0_0_20px_rgba(226,62,62,0.5)] transition-all duration-300'
            }
          >
            Register Now
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        {/* Section 主标题 */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#B71C1C] mb-12 tracking-tight">
          🎄 Winter Art Camp 2025
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Join one week or both! Each week features a unique art theme — perfect for children who love creativity,
          colors, and festive fun.
        </p>

        {/* Week 1 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#B71C1C] mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#E57373]" />
            Week 1 · Christmas Art Camp (Dec 22 - Dec 26)
            <span className="w-8 h-[2px] bg-[#E57373]" />
          </h3>

          <div className="overflow-x-auto shadow-lg rounded-2xl border border-red-100 bg-gradient-to-b from-[#fff8f8] to-white">
            <table className="min-w-full text-sm md:text-base text-gray-800">
              <thead className="bg-gradient-to-r from-[#B71C1C] via-[#D32F2F] to-[#C62828] text-white">
                <tr>
                  <th className="py-4 px-4 text-left font-semibold text-center w-24">📅 Date</th>
                  <th className="py-4 px-4 text-left font-semibold text-center">🎨 Theme</th>
                  <th className="py-4 px-4 text-left font-semibold text-center">✨ Activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                {[
                  {
                    date: 'Dec 22',
                    theme: 'Christmas Colors & Patterns',
                    bg: 'bg-[#FFF4F4]',
                    desc: 'Color exploration painting and festive Christmas paper crafts to celebrate the season.'
                  },
                  {
                    date: 'Dec 23',
                    theme: 'Resin Sand Christmas Tree',
                    bg: 'bg-[#EAF3FF]',
                    desc: 'Material experiment and 3D textured Christmas tree creation using resin sand.'
                  },
                  {
                    date: 'Dec 24',
                    theme: 'Gingerbread House Design',
                    bg: 'bg-[#FFF8E1]',
                    desc: 'Design, decorate, and create sweet gingerbread-inspired holiday crafts.'
                  },
                  {
                    date: 'Dec 25',
                    theme: 'Winter Landscape Painting',
                    bg: 'bg-[#E9F6EC]',
                    desc: 'Observation and color study — painting a serene “Snowy Christmas” winter scene.'
                  },
                  {
                    date: 'Dec 26',
                    theme: 'Winter Animal Collage Art',
                    bg: 'bg-[#FFF0F6]',
                    desc: 'Animal-themed collage design with creative layering and festive textures.'
                  }
                ].map((item, i) => (
                  <tr key={i} className={`${item.bg} hover:bg-red-50 transition-all duration-300`}>
                    <td className="py-4 px-4 font-semibold text-[#B71C1C]">{item.date}</td>
                    <td className="py-4 px-4 font-medium text-[#1E88E5] italic">{item.theme}</td>
                    <td className="py-4 px-4 text-gray-700 leading-relaxed">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Week 2 */}
        <div>
          <h3 className="text-2xl font-bold text-[#B71C1C] mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#E57373]" />
            Week 2 · New Year Art Camp (Dec 29 - Jan 2)
            <span className="w-8 h-[2px] bg-[#E57373]" />
          </h3>

          <div className="overflow-x-auto shadow-lg rounded-2xl border border-red-100 bg-gradient-to-b from-[#fff8f8] to-white">
            <table className="min-w-full text-sm md:text-base text-gray-800">
              <thead className="bg-gradient-to-r from-[#B71C1C] via-[#D32F2F] to-[#C62828] text-white">
                <tr>
                  <th className="py-4 px-4 text-left font-semibold text-center w-24">📅 Date</th>
                  <th className="py-4 px-4 text-left font-semibold text-center">🎨 Theme</th>
                  <th className="py-4 px-4 text-left font-semibold text-center">✨ Activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-50">
                {[
                  {
                    date: 'Dec 29',
                    theme: 'Blessing Printmaking',
                    bg: 'bg-[#FFF4F4]',
                    desc: '“Hundred Blessings” — traditional woodblock printmaking of the Chinese character Fu (福) for “Fortune.”'
                  },
                  {
                    date: 'Dec 30',
                    theme: 'Blue-and-White Porcelain Painting',
                    bg: 'bg-[#EAF3FF]',
                    desc: 'Decorative ceramic-style art featuring Fu (福) and “Success Arrives with the Horse” motifs.'
                  },
                  {
                    date: 'Dec 31',
                    theme: 'New Year Creative Art',
                    bg: 'bg-[#FFF8E1]',
                    desc: 'Festive crafts — fireworks collage, Chinese knots, and joyful New Year themes.'
                  },
                  {
                    date: 'Jan 1',
                    theme: '3D Creative Art',
                    bg: 'bg-[#E9F6EC]',
                    desc: 'Sculpted flowers, clay lion mascots, and Lunar New Year decorations.'
                  },
                  {
                    date: 'Jan 2',
                    theme: '“Persimmons for Good Luck” Crafts',
                    bg: 'bg-[#FFF0F6]',
                    desc: 'DIY twist-stick persimmon trees and lucky hanging ornaments symbolizing good fortune.'
                  }
                ].map((item, i) => (
                  <tr key={i} className={`${item.bg} hover:bg-red-50 transition-all duration-300`}>
                    <td className="py-4 px-4 font-semibold text-[#B71C1C]">{item.date}</td>
                    <td className="py-4 px-4 font-medium text-[#1E88E5] italic">{item.theme}</td>
                    <td className="py-4 px-4 text-gray-700 leading-relaxed">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-sm text-gray-500 italic">
          ❄️ *Each day includes story time, snack breaks, and supervised creative play.*
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 text-center rounded-3xl">
        <h2 className="text-4xl font-extrabold text-[#B71C1C] mb-12 tracking-tight">🌟 Our Camp Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* 🎨 Creative & Inspiring */}
          <div className="p-6 rounded-2xl bg-[#FFF4F4] hover:bg-[#FFEAEA] transition duration-300 shadow-sm">
            <h3 className="text-2xl font-bold text-[#B71C1C] mb-3 flex items-center gap-3">
              <Brush className="w-7 h-7 text-[#B71C1C]" />
              Creative & Inspiring
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Art + Outdoor Sketching — Students enjoy both indoor painting and outdoor sketching sessions under the
              winter sun.
              <span className="block mt-2 text-[#2E7D32] font-semibold">
                🎁 All art materials are provided free of charge!
              </span>
            </p>
          </div>

          {/* 📚 Academic Enrichment */}
          <div className="p-6 rounded-2xl bg-[#EAF3FF] hover:bg-[#DDEEFF] transition duration-300 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1565C0] mb-3 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-[#1565C0]" />
              Academic Enrichment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              English Reading & Writing — Fun, age-appropriate language lessons that build confidence, creativity, and
              expression.
            </p>
          </div>

          {/* 🕕 Flexible Schedule */}
          <div className="p-6 rounded-2xl bg-[#FFF6E5] hover:bg-[#FFF1D4] transition duration-300 shadow-sm">
            <h3 className="text-2xl font-bold text-[#F57C00] mb-3 flex items-center gap-3">
              <Clock className="w-7 h-7 text-[#F57C00]" />
              Flexible Schedule
            </h3>
            <p className="text-gray-700 leading-relaxed">
              6 Hours a Day — A full-day learning experience with an optional <em>extended care program</em> (available
              for an extra fee).
            </p>
          </div>

          {/* 🍎 Healthy Snacks */}
          <div className="p-6 rounded-2xl bg-[#E9F6EC] hover:bg-[#DCF1DF] transition duration-300 shadow-sm">
            <h3 className="text-2xl font-bold text-[#2E7D32] mb-3 flex items-center gap-3">
              <Apple className="w-7 h-7 text-[#2E7D32]" />
              Healthy Snacks
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Free Snacks Provided — Nutritious and delicious treats to keep kids energized and happy throughout the
              day.
            </p>
          </div>

          {/* 👩‍🎨 Professional Teachers */}
          <div className="p-6 rounded-2xl bg-[#F8E9FF] hover:bg-[#F2D8FF] transition duration-300 shadow-sm">
            <h3 className="text-2xl font-bold text-[#9C27B0] mb-3 flex items-center gap-3">
              <Palette className="w-7 h-7 text-[#9C27B0]" />
              Professional Teachers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Taught by Art School Graduates — Our instructors are passionate, professional art educators with years of
              experience guiding young learners.
            </p>
          </div>

          {/* 🌳 Active & Engaging */}
          <div className="p-6 rounded-2xl bg-[#E0F7FA] hover:bg-[#CFF3F7] transition duration-300 shadow-sm">
            <h3 className="text-2xl font-bold text-[#00838F] mb-3 flex items-center gap-3">
              <Trees className="w-7 h-7 text-[#00838F]" />
              Active & Engaging
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Outdoor Activities Included — A joyful balance of art creation and active play, keeping children inspired,
              social, and refreshed.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 mb-16 text-center bg-gradient-to-b from-[#fff9f9] to-white rounded-3xl">
        <h2 className="text-4xl font-extrabold text-[#B71C1C] mb-12 tracking-tight">✨ Moments of Joy</h2>
        <Gallery gallery={GALLERY} />
      </section>

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
        </div>
      </div>

      {/* ===== JSON-LD ===== */}
      <Script id="camp-jsonld" type="application/ld+json">
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
              name: 'VanLearn Education Camp Programs',
              url: 'https://vanlearn.com/camp',
              logo: 'https://vanlearn.com/images/logo.png',
              description:
                'VanLearn Education offers fun, creative, and educational Spring and Summer Camps for students in Willoughby and Walnut Grove, Langley.',
              areaServed: [
                { '@type': 'Place', name: 'Langley, BC' },
                { '@type': 'Place', name: 'Willoughby' },
                { '@type': 'Place', name: 'Walnut Grove' }
              ],
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
