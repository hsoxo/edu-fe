import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, Medal, Sparkles, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanlearn.com'),

  title: 'Awards & Achievements | VanLearn International Education',
  description:
    'Art contests, speech competitions, and IELTS results — see the awards and achievements earned by VanLearn International Education students and programs.',

  keywords: [
    'vanlearn awards',
    'vanlearn international education achievements',
    'student art contest winners langley',
    'power speaking contest winners',
    'ielts score improvement langley',
    'vancouver stone painting contest',
    'fish art contest winner',
    'canada youth visual art contest'
  ],

  alternates: {
    canonical: '/awards'
  },

  openGraph: {
    title: 'Awards & Achievements | VanLearn International Education',
    description:
      'Recognized for excellence in education, innovation, and community service — the awards our students and programs have earned.',
    url: '/awards',
    type: 'website'
  }
};

const AWARDS = [
  {
    image: '/images/organization-award.jpg',
    title: 'Vancouver Stone Painting Contest',
    desc: 'We received the Organization Award, and our students received the 2nd, 5th, and 7th place prizes.'
  },
  {
    image: '/images/award2.jpg',
    title: 'Fish Art Contest',
    desc: 'One of our students won 1st place in the Fish Art Contest.'
  },
  {
    image: '/images/award3.jpg',
    title: 'Canada Youth Visual Art Contest',
    desc: 'One of our students received the Outstanding Artwork Award in the Canada Youth Visual Art Contest.'
  },
  {
    image: '/images/award4.jpg',
    title: 'Power Speaking Contest',
    desc: 'Our students achieved 1st, 2nd, and 3rd place in the Power Speaking Contest.'
  },
  {
    image: '/images/award5.jpg',
    title: 'Leaders of Tomorrow: Impromptu Speech Competition',
    desc: 'One of our students from our program won 1st place. One of our students was invited to speak at the TEDx Youth event.'
  },
  {
    image: '/images/award6.png',
    title: 'IELTS',
    desc: 'Our students made significant progress after studying for 10-20 lessons.'
  }
];

const HIGHLIGHTS = [
  {
    icon: <Trophy className="w-7 h-7 text-[#E53935]" />,
    bg: 'bg-[#FFF0F0]',
    title: 'Art & Design Contests',
    desc: 'Provincial and national art competitions where our young artists place year after year.'
  },
  {
    icon: <Medal className="w-7 h-7 text-[#E53935]" />,
    bg: 'bg-[#FFF6E8]',
    title: 'Public Speaking',
    desc: 'Podium finishes in speech competitions, plus an invitation to speak at a TEDx Youth event.'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#E53935]" />,
    bg: 'bg-[#F0F7FF]',
    title: 'Test Preparation',
    desc: 'Measurable IELTS score gains for students after just 10–20 lessons.'
  }
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-b from-[#FFF8F7] via-white to-[#F9FBFF] py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] text-[#B71C1C] text-sm font-semibold px-4 py-1.5 mb-6">
            <Award className="w-4 h-4" />
            Recognized Excellence
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#B71C1C] mb-5">Our Awards &amp; Achievements</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Vanlearn International has been recognized for excellence in education, innovation, and community service.
            Each award represents our commitment to helping students reach their full potential.
          </p>
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section className="pb-4">
        <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map(h => (
            <div key={h.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl ${h.bg}`}>
                {h.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{h.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Coach Spotlight ===== */}
      <section className="pt-12">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="bg-white rounded-2xl border border-[#FFE5E5] shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto lg:min-h-[420px] bg-gray-900">
                <Image
                  src="/images/nick-ni.jpg"
                  alt="Nick Ni speaking on stage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] text-[#B71C1C] text-xs font-semibold uppercase tracking-wide px-3 py-1 mb-4">
                  Behind the Results
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#B71C1C] mb-1">Nick Ni</h2>
                <p className="text-gray-500 font-medium mb-5">IELTS Speaking &amp; Listening Instructor</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['IELTS Academic 8.0 (C1)', 'Listening 9.0', 'Reading 8.5', 'Speaking 8.0'].map(stat => (
                    <span
                      key={stat}
                      className="rounded-full bg-[#F9FBFF] border border-gray-200 text-sm text-gray-700 px-3 py-1"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
                  <p>
                    Nick Ni is an IB Diploma graduate with a strong passion for public speaking, leadership, and
                    education. He achieved an overall IELTS Academic score of 8.0 (C1), with 8.5 in Reading, 9.0 in
                    Listening, and 8.0 in Speaking. As the Founder and President of his school’s Public Speaking Club,
                    he has helped students build confidence and develop strong communication skills.
                  </p>
                  <p>
                    With more than 3 years of teaching experience, Nick has worked with students ranging from young
                    learners to teenagers, with a particular focus on IELTS Speaking / Listening. His leadership
                    experience as Marketing Director of the Business Club and Vice President of the Car Club has further
                    developed his communication and ability to connect with students even beyond academics.
                  </p>
                  <p>
                    Nick aims to create a supportive and engaging learning environment where students feel comfortable
                    expressing themselves. He believes every student has a unique voice and strives to help them
                    strengthen their English while developing the confidence to communicate clearly and effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Awards Grid ===== */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-md border border-[#FFE5E5] overflow-hidden transition-all"
              >
                <div className="relative w-full h-56 bg-gray-100">
                  <Image src={award.image} alt={award.title} fill className="object-cover" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold text-[#B71C1C] mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-[#B71C1C] to-[#E53935] px-8 py-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Your child could be next</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Our teachers help every student find the stage that fits them — art, public speaking, or academic English.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#B71C1C] font-semibold px-8 py-3 hover:bg-[#FFF0F0] transition-colors"
              >
                Book a Trial
              </Link>
              <Link
                href="/course-overview"
                className="inline-flex items-center justify-center rounded-full border border-white/70 text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors"
              >
                View Our Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
        </div>
      </div>
    </div>
  );
}
