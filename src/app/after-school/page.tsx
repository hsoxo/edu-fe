import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';
import { BookOpen, Heart, Lightbulb, Palette, Users } from 'lucide-react';
import { PenTool, Languages, Calculator, Bus } from 'lucide-react';
import Script from 'next/script';
import { LATITUDE, LONGITUDE } from '@/data/constants';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanlearn.ca'),

  title: 'After School Programs in Langley | Willoughby & Walnut Grove | VanLearn Education',
  description:
    'VanLearn Education offers structured after-school programs in Langley, serving families near Josette Dandurand, Donna Gabriel Robins, and Lynn Fripps Elementary Schools. Academic tutoring, homework help, and enrichment activities for Willoughby and Walnut Grove students.',

  keywords: [
    'after school langley',
    'after school willoughby',
    'after school walnut grove',
    'after school josette dandurand',
    'after school donna gabriel robins',
    'after school lynn fripps',
    'homework tutoring langley',
    'english and math after school',
    'after school activities for kids',
    'vanlearn after school program',
    'tutoring center langley willoughby',
    'tutoring center langley walnut grove',
    'after school care near willoughby town centre',
    'langley after school tutoring',
    'after school pickup and homework support langley',
    'chinese and french language tutoring willoughby',
    'chinese and french language tutoring walnut grove'
  ],

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://vanlearn.com/after-school',
    siteName: 'VanLearn Education',
    title: 'After School Programs in Langley | Willoughby & Walnut Grove | VanLearn Education',
    description:
      'VanLearn provides after-school programs for students near Josette Dandurand, Donna Gabriel Robins, and Lynn Fripps Elementary Schools in Willoughby. Academic support and enrichment activities for Langley families.',
    images: [
      {
        url: '/images/after-school-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'After School Program near Josette Dandurand, Donna Gabriel Robins, Lynn Fripps Schools - Langley'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'After School Programs in Langley | Willoughby & Walnut Grove | VanLearn Education',
    description:
      'Personalized after-school tutoring in Willoughby and Walnut Grove. Serving students from Josette Dandurand, Donna Gabriel Robins, and Lynn Fripps Elementary Schools.',
    images: ['/images/after-school-hero.jpg']
  },

  alternates: {
    canonical: 'https://vanlearn.com/after-school'
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

export default function AfterSchool() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <title>After School Programs in Willoughby & Walnut Grove | Langley | VanLearn Education</title>

      <Header />

      <div className="bg-gray-50 text-gray-800">
        {/* ===== Hero Section ===== */}
        <section className="relative h-[520px] w-full">
          <Image
            src="/images/afterschool-banner.jpg"
            alt="After School Programs in Langley, Willoughby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">After School Programs in Langley</h1>

            <p className="max-w-3xl text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
              Proudly serving families in <strong>Willoughby</strong> and <strong>Walnut Grove</strong> — supporting
              students from nearby schools like <strong> Josette Dandurand</strong>,{' '}
              <strong>Donna Gabriel Robins</strong>, and
              <strong> Lynn Fripps Elementary</strong> with structured learning, homework tutoring, and enrichment
              activities.
            </p>

            <a
              href="#contact"
              className="bg-[#E23E3E] text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#c92d2d] transition shadow-md"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* ===== Overview Section ===== */}
        <section className="max-w-6xl mx-auto py-16 px-6 bg-gray-50">
          {/* Section 标题 */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#B71C1C] mb-4">Comprehensive After-School Learning</h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
              Our after-school programs help students grow in a supportive, structured, and fun environment beyond
              regular school hours.
            </p>
          </div>
          {/* 文字要点 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12">
            {[
              {
                icon: <BookOpen className="w-7 h-7 text-[#B71C1C]" />,
                title: 'Homework Tutoring',
                bg: 'bg-[#FFF4F4]'
              },
              {
                icon: <PenTool className="w-7 h-7 text-[#1565C0]" />,
                title: 'Reading Support',
                bg: 'bg-[#EAF3FF]'
              },
              {
                icon: <Languages className="w-7 h-7 text-[#2E7D32]" />,
                title: 'Chinese Learning',
                bg: 'bg-[#E9F6EC]'
              },
              {
                icon: <Calculator className="w-7 h-7 text-[#F57C00]" />,
                title: 'Fun Math Activities',
                bg: 'bg-[#FFF6E5]'
              },
              {
                icon: <Palette className="w-7 h-7 text-[#9C27B0]" />,
                title: 'Arts & Crafts',
                bg: 'bg-[#F8E9FF]'
              },
              {
                icon: <Bus className="w-7 h-7 text-[#00838F]" />,
                title: 'Pick-Up & Supervision',
                bg: 'bg-[#E0F7FA]'
              }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 pl-2 group">
                <div
                  className={`flex-shrink-0 ${item.bg} p-3 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#B71C1C] transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          {/* 图片图册 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/afterschool1.jpg',
              '/images/afterschool2.jpg',
              '/images/afterschool3.jpg',
              '/images/afterschool4.jpg',
              '/images/afterschool5.jpg',
              '/images/afterschool6.jpg'
            ].map((src, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 aspect-[4/3]"
              >
                <Image
                  src={src}
                  alt={`After school classroom ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  priority={i < 2} // ✅ 优先加载前两张图
                />
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Section 标题 */}
            <h2 className="text-4xl font-bold text-[#B71C1C] mb-12">Why Choose VanLearn After School?</h2>

            {/* 四个亮点 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8 text-[#B71C1C]" />,
                  bg: 'bg-[#FFF4F4]',
                  title: 'Academic Growth',
                  desc: 'Reinforce classroom learning with personalized tutoring and structured study time.'
                },
                {
                  icon: <Heart className="w-8 h-8 text-[#E91E63]" />,
                  bg: 'bg-[#FFF0F6]',
                  title: 'Safe & Caring Environment',
                  desc: 'Students thrive in a supervised, positive, and nurturing setting.'
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-[#1565C0]" />,
                  bg: 'bg-[#EAF3FF]',
                  title: 'Lifelong Study Habits',
                  desc: 'We help children build independence, discipline, and a love for learning.'
                },
                {
                  icon: <Users className="w-8 h-8 text-[#2E7D32]" />,
                  bg: 'bg-[#E9F6EC]',
                  title: 'Peace of Mind for Parents',
                  desc: 'Reliable pickup make your after-school logistics worry-free.'
                }
              ].map((b, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E53935]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl ${b.bg} transform transition-transform duration-300 group-hover:rotate-6`}
                  >
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#B71C1C] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Teachers Section ===== */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#B71C1C] mb-12">Meet Our Teachers</h2>

            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Our dedicated and experienced educators provide personalized guidance, ensuring every student feels
              supported, confident, and motivated to learn beyond the classroom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {[
                {
                  name: 'Ms. Zoey Wang',
                  image: '/images/zoey.jpg',
                  desc: 'McGill University graduate with a degree in Psychology. She loves working with children and creating a warm, engaging environment where they can learn and grow with confidence. Her lessons combine creativity, play, and discovery to make every day fun and meaningful.'
                },
                {
                  name: 'Ms. Hera Yu',
                  image: '/images/hera.jpg',
                  desc: `With over 10 years of experience, Ms. Yu specializes in watercolor, anime illustration, and
                      creative design. She teaches children aged 4–15 and leads the After School Program, inspiring
                      young artists to explore creativity and confidence through art.`
                }
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image src={t.image} alt={t.name} width={400} height={400} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                    {/* <p className="text-sm text-slate-600 font-medium mb-2">{t.title}</p> */}
                    <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="py-14 text-center">
          <h2 className="text-2xl font-bold mb-3 text-[#B71C1C]">Ready to experience VanLearn After School Support?</h2>
          <p className="text-sm mb-6">
            Give your child a supportive, enriching environment that builds confidence and lifelong learning habits.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold text-sm transition bg-red-600 hover:bg-red-700 text-white"
          >
            Contact Us
          </a>
        </section>
      </div>
      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
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
              name: 'VanLearn Education After-School Programs',
              url: 'https://vanlearn.com/after-school',
              logo: 'https://vanlearn.com/images/logo.png',
              description:
                'After-school tutoring and enrichment programs serving families near Josette Dandurand, Donna Gabriel Robins, and Lynn Fripps Elementary Schools in Willoughby, Langley.',
              areaServed: [
                { '@type': 'Place', name: 'Willoughby, Langley, BC' },
                { '@type': 'Place', name: 'Josette Dandurand Elementary School' },
                { '@type': 'Place', name: 'Donna Gabriel Robins Elementary School' },
                { '@type': 'Place', name: 'Lynn Fripps Elementary School' }
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
