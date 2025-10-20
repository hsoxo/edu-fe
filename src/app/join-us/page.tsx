'use client';
import React from 'react';
import { Heart, Users, Target, Lightbulb, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

const culture = [
  {
    icon: <Heart className="w-8 h-8 text-[#E91E63]" />,
    bg: 'bg-[#FFF0F6]',
    title: 'Passion for Education',
    desc: 'We believe in inspiring every student with care, creativity, and purpose.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#1565C0]" />,
    bg: 'bg-[#EAF3FF]',
    title: 'Team Collaboration',
    desc: 'We grow together as educators, sharing insights and building success collectively.'
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#F57F17]" />,
    bg: 'bg-[#FFF9E6]',
    title: 'Innovation in Teaching',
    desc: 'We encourage continuous learning and the use of innovative methods to empower students.'
  },
  {
    icon: <Target className="w-8 h-8 text-[#2E7D32]" />,
    bg: 'bg-[#E9F6EC]',
    title: 'Commitment to Excellence',
    desc: 'We set high standards for both teaching and student outcomes, always striving to improve.'
  }
];

const jobs = [
  {
    title: 'English instructor',
    location: 'Langley, BC',
    desc: 'Equipped with a Bachelor’s degree in Education or Social Sciences and TESL certification, supported by more than one year of practical teaching experience.'
  },
  {
    title: 'Science instructor',
    location: 'Langley, BC',
    desc: 'Equipped with a Bachelor’s degree in Science or a related field（chemistry, physics, biology） and certified in education, with over one year of hands-on experience inspiring students through engaging science instruction.'
  },
  {
    title: 'French instructor',
    location: 'Langley, BC',
    desc: 'Equipped with a Bachelor’s degree in French or Education and certified in language instruction, with over one year of experience inspiring students to achieve excellence in French communication and culture.'
  },
  {
    title: 'Spanish instructor',
    location: 'Langley, BC',
    desc: 'Equipped with a Bachelor’s degree in Spanish or Education and certified in language instruction, with over one year of experience engaging students in dynamic and culturally rich Spanish learning.'
  }
];

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="bg-white text-gray-800">
        {/* --- Hero Section --- */}
        <section className="relative py-32 text-center text-white overflow-hidden">
          {/* 背景图 */}
          <div className="absolute inset-0">
            <img
              src="/images/schoolinside.jpg"
              alt="VanLearn Education Team"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50" /> {/* 半透明遮罩层 */}
          </div>

          {/* 内容 */}
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Join Our Team</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              At <span className="font-semibold text-white">VanLearn Education</span>, we believe that great teaching
              changes lives. We are always looking for passionate, talented educators and professionals to join our
              growing community.
            </p>
          </div>
        </section>

        {/* --- Culture Section --- */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#B71C1C] mb-3">Our Culture</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are more than instructors; we are architects of confidence and guides on the path to excellence.
              <br /> Our culture is built on a foundation of Collaborative Excellence. We see parents as essential
              allies. We communicate with transparency and empathy, ensuring the learning journey is a true partnership
              built on trust. We actively support and encourage our colleagues.
            </p>
          </div>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#B71C1C] mb-3">Our Promise</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To create a vibrant ecosystem where students are known, supported, and inspired to reach their full
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {culture.map((c, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E53935]/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl ${c.bg} transform transition-transform duration-300 group-hover:rotate-6`}
                >
                  {c.icon}
                </div>
                <h3 className="text-lg text-center font-semibold text-gray-900 mb-3 group-hover:text-[#B71C1C] transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-center text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Job Section --- */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-center mb-10 gap-2">
              <Briefcase className="w-6 h-6 text-[#B71C1C]" />
              <h2 className="text-3xl font-bold text-[#B71C1C]">Career Opportunities</h2>
            </div>

            <div className="space-y-6">
              {jobs.map((job, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-slate-400 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                  <p className="text-gray-600 text-[15px] mb-4">{job.desc}</p>
                  <a
                    href="mailto:vanlearnedu@gmail.com"
                    className="inline-block text-slate-700 font-medium hover:text-slate-900 transition-colors"
                  >
                    Contact us →
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-10">
              Don’t see a position that fits your background? We’d still love to hear from you at{' '}
              <a href="mailto:vanlearnedu@gmail.com" className="underline hover:text-slate-700">
                vanlearnedu@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
        </div>
      </div>
    </div>
  );
}
