import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';
import Script from 'next/script';
import { LATITUDE, LONGITUDE } from '@/data/constants';
import type { Metadata } from 'next';
import {
  Bot,
  Brain,
  Brush,
  CalendarDays,
  CheckCircle2,
  Clock,
  Palette,
  Sparkles,
  Trees,
  Users
} from 'lucide-react';
import FlyerPreview from '@/components/FlyerPreview';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanlearn.com'),

  title: '2026 Langley Summer Camp | Art, AI Robotics & Chess | VanLearn Education',
  description:
    'Registration is open for VanLearn International Education 2026 Summer Camp in Langley. Choose Art Camp, AI Robotics Camp, or Chess Camp with outdoor activities, small classes, and weekly themes.',

  keywords: [
    '2026 langley summer camp',
    'vanlearn summer camp',
    'langley art camp',
    'langley robotics camp',
    'langley chess camp',
    'ai robotics camp langley',
    'kids summer camp langley',
    'willoughby summer camp',
    'walnut grove summer camp',
    'summer art camp langley',
    'chess classes langley',
    'stem camp langley',
    'outdoor activities camp langley',
    'vanlearn international education'
  ],

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://vanlearn.com/camp',
    siteName: 'VanLearn Education',
    title: '2026 Langley Summer Camp | Art, AI Robotics & Chess | VanLearn Education',
    description:
      'Join VanLearn’s 2026 Summer Camp in Langley. Full-day and half-day options include Art, AI Robotics, Chess, and outdoor activities.',
    images: [
      {
        url: '/images/20251109142647_239_1.jpg',
        width: 1200,
        height: 630,
        alt: '2026 Summer Camp in Langley - VanLearn Education'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: '2026 Langley Summer Camp | VanLearn Education',
    description:
      'Art, AI Robotics, Chess, and outdoor activities for VanLearn International Education 2026 Summer Camp.',
    images: ['/images/20251109142647_239_1.jpg']
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

const CAMP_FLYERS = [
  {
    src: '/images/5181778650381_.pic.webp',
    title: 'July Art Camp',
    alt: 'VanLearn July full-day and half-day art summer camp flyer',
    hideAfter: '2026-07-26'
  },
  {
    src: '/images/5051778649291_.pic_hd.webp',
    title: 'August English & Art Camp',
    alt: 'VanLearn August all-day English and art summer camp flyer'
  },
  {
    src: '/images/5061778649293_.pic_hd.webp',
    title: 'AI Robot Summer Camp',
    alt: 'VanLearn AI robot summer camp flyer'
  },
  {
    src: '/images/5151778649896_.pic_hd.webp',
    title: 'Summer Chess Camp',
    alt: 'VanLearn summer chess camp flyer'
  }
];

const COURSE_HIGHLIGHTS = [
  {
    icon: Users,
    title: 'Small Class Sizes',
    desc: 'Personalized and patient guidance from our instructors.',
    tone: 'border-[#f5cfc4] bg-[#fff0e8] text-[#b35042] shadow-sm'
  },
  {
    icon: Brain,
    title: 'Practice Meets Logic',
    desc: 'A balanced mix of hands-on crafting, mental training, and focused problem solving.',
    tone: 'border-[#dccdec] bg-[#ede5f5] text-[#6b5aa8] shadow-sm'
  },
  {
    icon: Sparkles,
    title: 'Holistic Growth',
    desc: 'Designed to build concentration, confidence, creativity, and stronger self-expression.',
    tone: 'border-[#cfe2ec] bg-[#e6f1fa] text-[#3a7991] shadow-sm'
  },
  {
    icon: CalendarDays,
    title: 'Daily Freshness',
    desc: 'New themes every week keep camp active, varied, and full of discovery.',
    tone: 'border-[#f2dfb1] bg-[#fff2d6] text-[#8b6c2e] shadow-sm'
  },
  {
    icon: CheckCircle2,
    title: 'Inclusive Learning',
    desc: 'Programs are tailored for children of different ages, skill levels, and learning styles.',
    tone: 'border-[#cfe5d3] bg-[#e6f1e9] text-[#3d7b58] shadow-sm'
  },
  {
    icon: Trees,
    title: 'Healthy Balance',
    desc: 'Outdoor activities are built in to balance learning, rest, movement, and play.',
    tone: 'border-[#f5cfc4] bg-[#fff0e8] text-[#b35042] shadow-sm'
  }
];

const CAMP_PROGRAMS = [
  {
    icon: Palette,
    flyers: [CAMP_FLYERS[0], CAMP_FLYERS[1]],
    title: 'Full-Day/Half-Day Art Camp + Outdoor Activities',
    subtitle: 'Unleash creativity and explore the world of aesthetics.',
    accent: 'text-[#b35042]',
    iconTone: 'bg-white text-[#b35042] border border-[#f5cfc4]',
    borderTone: 'border-[#f5cfc4]',
    cardTone: 'bg-[#fff7f3]',
    topTone: 'bg-[#f0a89a]',
    details: [
      ['Activities', 'Painting / Crafting / Design / DIY'],
      ['Weekly Themes', 'A fresh and exciting experience every week'],
      ['Goal', 'Small class sizes to enhance aesthetic sense and self-expression']
    ],
    times: ['Class Time: 9:00 AM - 3:00 PM', 'Paid Extended Care: 3:00 PM - 5:00 PM'],
    dates: ['July Art Camp: July 6 - July 31, 2026', 'August English & Art: August 10 - August 28, 2026']
  },
  {
    icon: Bot,
    flyers: [CAMP_FLYERS[2]],
    title: 'AI Robotics Camp + Outdoor Activities',
    subtitle: 'Explore the fascinating world of mechanics, power, and AI.',
    accent: 'text-[#3a7991]',
    iconTone: 'bg-white text-[#3a7991] border border-[#cfe2ec]',
    borderTone: 'border-[#cfe2ec]',
    cardTone: 'bg-[#f3f8fc]',
    topTone: 'bg-[#a8cee0]',
    details: [
      ['Hands-on Building', 'Construct your very own robots'],
      ['Critical Thinking', 'Learn mechanical structures and logical reasoning'],
      ['STEM Focus', 'Spark creativity and a lifelong interest in technology']
    ],
    times: ['Class Time: 9:30 AM - 12:30 PM', 'Morning Session'],
    dates: ['Weekly sessions: July 6 - August 14, 2026']
  },
  {
    icon: Brain,
    flyers: [CAMP_FLYERS[3]],
    title: 'Chess Camp',
    subtitle: 'From basic rules to advanced tactics, students improve logic, focus, and judgment.',
    accent: 'text-[#3d7b58]',
    iconTone: 'bg-white text-[#3d7b58] border border-[#cfe5d3]',
    borderTone: 'border-[#cfe5d3]',
    cardTone: 'bg-[#f3f9f4]',
    topTone: 'bg-[#b1d8be]',
    details: [
      ['Foundational Class', 'Perfect for beginners'],
      ['Advanced Class', 'Strategic improvement for intermediate players'],
      ['Expert Coaching', 'Professional guidance plus fun tournaments']
    ],
    times: ['Class Time: 1:30 PM - 3:30 PM', 'Afternoon Session'],
    dates: ['Weekly sessions: July 6 - August 14, 2026']
  }
];

const QUICK_FACTS = [
  {
    label: 'Camp Season',
    value: 'July 6 - August 28, 2026',
    tone: 'border-[#f2dfb1] bg-[#fff2d6] text-[#8b6c2e]'
  },
  {
    label: 'Core Skills',
    value: 'Concentration, logical reasoning, strategic thinking',
    tone: 'border-[#cfe2ec] bg-[#e6f1fa] text-[#3a7991]'
  },
  {
    label: 'Program Options',
    value: 'Art, AI Robotics, Chess, outdoor activities',
    tone: 'border-[#f5cfc4] bg-[#fff0e8] text-[#b35042]'
  },
  {
    label: 'Location',
    value: 'VanLearn International Education, Langley',
    tone: 'border-[#cfe5d3] bg-[#e6f1e9] text-[#3d7b58]'
  }
];

const HERO_TRACKS = [
  { label: 'Creative Art', icon: Palette },
  { label: 'AI Robotics', icon: Bot },
  { label: 'Chess Strategy', icon: Brain }
];

const EXPERIENCE_ITEMS = [
  {
    title: 'Art + Design',
    icon: Brush,
    text: 'Painting, crafting, design, and DIY projects.',
    border: 'border-[#f5cfc4]',
    background: 'bg-[#fff0e8]',
    iconColor: 'text-[#b35042]'
  },
  {
    title: 'Logic + STEM',
    icon: Bot,
    text: 'Mechanical structures, AI thinking, and robotics builds.',
    border: 'border-[#cfe2ec]',
    background: 'bg-[#e6f1fa]',
    iconColor: 'text-[#3a7991]'
  },
  {
    title: 'Strategy + Focus',
    icon: Brain,
    text: 'Chess fundamentals, tactics, judgment, and tournaments.',
    border: 'border-[#cfe5d3]',
    background: 'bg-[#e6f1e9]',
    iconColor: 'text-[#3d7b58]'
  }
];

export default function Camp() {
  return (
    <div className="min-h-screen bg-[#fff9f4]">
      <Header />

      <section className="relative min-h-[610px] w-full overflow-hidden">
        <Image
          src="/images/20251109142647_239_1.jpg"
          alt="2026 VanLearn International Education Summer Camp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3a89b]/55 via-[#fad9b0]/25 to-[#cfe2ec]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55" />
        <div className="absolute right-[12%] top-24 hidden rotate-6 rounded-full bg-[#fff4f0] px-5 py-2 text-sm font-bold text-[#b35042] shadow-sm md:block">
          Art
        </div>
        <div className="absolute bottom-32 left-[12%] hidden -rotate-3 rounded-full bg-[#eaf3fb] px-5 py-2 text-sm font-bold text-[#3a7991] shadow-sm md:block">
          Robotics
        </div>
        <div className="absolute bottom-20 right-[20%] hidden rotate-2 rounded-full bg-[#eaf3ec] px-5 py-2 text-sm font-bold text-[#3d7b58] shadow-sm md:block">
          Chess
        </div>
        <div className="relative z-10 flex min-h-[610px] flex-col justify-center px-6 py-24 text-white">
          <div className="mx-auto w-full max-w-[1120px]">
            <p className="mb-4 inline-flex rounded-full bg-[#ffe9dc] px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-[#b35042] shadow-sm">
              Registration Now Open
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight drop-shadow md:text-6xl">
              2026 VanLearn International Education Summer Camp
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
              Enhance concentration, logical reasoning, and strategic thinking through hands-on camp experiences.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              This summer, let your child do more than just play. Give them the chance to grow through their interests
              and build confidence through guided practice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff4f0]"
              >
                View Camp Options
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-[#d9695c] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#c45648]"
              >
                Register Now
              </a>
            </div>
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {HERO_TRACKS.map((track, idx) => {
                const Icon = track.icon;
                const iconTones = [
                  'bg-[#fff4f0] text-[#b35042]',
                  'bg-[#eaf3fb] text-[#3a7991]',
                  'bg-[#eaf3ec] text-[#3d7b58]'
                ];

                return (
                  <div
                    key={track.label}
                    className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 text-slate-950 shadow-sm"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconTones[idx]}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold">{track.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-6 px-6 py-12 md:grid-cols-4">
          {QUICK_FACTS.map(item => (
            <div key={item.label} className={`rounded-2xl border p-5 shadow-sm ${item.tone}`}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-75">{item.label}</p>
              <p className="mt-2 text-base font-bold leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b35042]">Course Highlights</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Built for active learning and steady growth
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Each camp combines interest-based learning with patient instruction, giving students room to explore,
              practice, and build confidence in a supportive environment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {COURSE_HIGHLIGHTS.map(highlight => {
              const Icon = highlight.icon;

              return (
                <div key={highlight.title} className={`rounded-2xl border p-5 ${highlight.tone}`}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{highlight.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b35042]">3 Popular Themed Camps</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Choose the camp path that fits your child
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAMP_PROGRAMS.map(program => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className={`overflow-hidden rounded-2xl border text-slate-900 shadow-sm ${program.borderTone} ${program.cardTone}`}
                >
                  <div className={`h-2 ${program.topTone}`} />
                  <div className="p-6">
                    <FlyerPreview flyers={program.flyers} />
                    <div className={`mt-5 flex h-12 w-12 items-center justify-center rounded-lg ${program.iconTone}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className={`mt-5 text-xl font-bold leading-tight ${program.accent}`}>{program.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.subtitle}</p>

                    <dl className="mt-6 space-y-4">
                      {program.details.map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-sm font-semibold text-slate-950">{label}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-slate-600">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 border-t border-slate-200 pt-5">
                      <div className="flex items-start gap-3 text-sm text-slate-700">
                        <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" aria-hidden="true" />
                        <div>
                          {program.times.map(item => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex items-start gap-3 text-sm text-slate-700">
                        <CalendarDays className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" aria-hidden="true" />
                        <div>
                          {program.dates.map(item => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b35042]">Camp Experience</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                Hands-on projects with room to move
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                Students practice creative work, technology thinking, and strategic decision making while staying active
                through outdoor activities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {EXPERIENCE_ITEMS.map(item => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className={`rounded-2xl border ${item.border} ${item.background} p-5 shadow-sm`}>
                    <Icon className={`h-7 w-7 ${item.iconColor}`} aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Summer Camp Moments</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            A look at VanLearn’s creative learning environment and student activities.
          </p>
          <div className="mt-10">
            <Gallery gallery={GALLERY} />
          </div>
        </div>
      </section>

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="mx-auto max-w-[1120px] px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
        </div>
      </div>

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
              name: 'VanLearn International Education 2026 Summer Camp',
              url: 'https://vanlearn.com/camp',
              logo: 'https://vanlearn.com/images/logo.png',
              description:
                'VanLearn International Education offers 2026 Summer Camp programs in Langley, including Art Camp, AI Robotics Camp, Chess Camp, and outdoor activities.',
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
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: '2026 Summer Camp Programs',
                itemListElement: CAMP_PROGRAMS.map(program => ({
                  '@type': 'Course',
                  name: program.title,
                  description: program.subtitle,
                  provider: {
                    '@type': 'EducationalOrganization',
                    name: 'VanLearn Education'
                  }
                }))
              }
            }
          ]
        })}
      </Script>
    </div>
  );
}
