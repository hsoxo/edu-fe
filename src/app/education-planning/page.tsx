import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Header from '@/components/Header';
import { Lightbulb, GraduationCap, Target, FileText, Users, Compass } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F7] via-white to-[#F9FBFF]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFF3F3] via-[#FFF8F7] to-[#F9FBFF] py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Plan Your Future with Confidence</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            In Canada, academic success begins with clear direction. Our Education Planning Service provides
            personalized guidance for students from elementary to university, helping them design the best path for
            academic and personal growth.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-block bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-3 rounded-lg font-semibold shadow transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* subtle gradient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-72 bg-[radial-gradient(ellipse_at_center,_rgba(229,57,53,0.1)_0%,_transparent_70%)]" />
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#B71C1C]">Our Services Include</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FileText className="w-8 h-8 text-[#E53935]" />,
              title: 'Course Selection & Academic Planning',
              desc: 'Strategic subject and program choices to align with future goals.'
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-[#E53935]" />,
              title: 'University Application & Essay Guidance',
              desc: 'Personalized assistance with applications, essays, and statements.'
            },
            {
              icon: <Compass className="w-8 h-8 text-[#E53935]" />,
              title: 'Interest & Career Path Assessment',
              desc: 'Identify strengths and align studies with long-term ambitions.'
            },
            {
              icon: <Users className="w-8 h-8 text-[#E53935]" />,
              title: 'Extracurricular & Volunteer Planning',
              desc: 'Build well-rounded profiles through meaningful activities.'
            },
            {
              icon: <Target className="w-8 h-8 text-[#E53935]" />,
              title: 'Interview & Language Test Preparation',
              desc: 'Coaching and preparation for English tests and admissions interviews.'
            }
          ].map(item => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-[#FFE5E5] hover:border-[#FFCDD2] hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-[#F9FBFF] to-[#FFF8F7] pb-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1976D2] mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-[#1976D2]" />,
                title: 'Expert Knowledge',
                desc: 'In-depth understanding of the Canadian education system.'
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-[#1976D2]" />,
                title: 'Tailored Strategies',
                desc: 'Customized plans that highlight each student’s unique strengths.'
              },
              {
                icon: <Users className="w-8 h-8 text-[#1976D2]" />,
                title: 'Holistic Development',
                desc: 'We focus on both academic excellence and personal growth.'
              }
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-[#E3F2FD] hover:border-[#BBDEFB] hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admitted Section */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#B71C1C] mb-6">Our Students Have Been Admitted To</h2>
          <p className="text-gray-600 mb-10">
            Many of our students have successfully entered top universities and colleges across North America.
          </p>
          <div className="flex justify-center">
            <Image src="/images/schools.png" alt="Schools" width={1000} height={1000} />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative bg-gradient-to-br from-[#FFF3F3] via-white to-[#E3F2FD] py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B71C1C] mb-6">Start Planning Your Future Today</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether your goal is to enter a top university or discover the right path for your future, our expert
            advisors are here to help you build a clear plan and the confidence to achieve it.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-block bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-3 rounded-lg font-semibold shadow transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Decorative radial light */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-[radial-gradient(ellipse_at_center,_rgba(25,118,210,0.15)_0%,_transparent_70%)]" />
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
