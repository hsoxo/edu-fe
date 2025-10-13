import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Header from '@/components/Header';
import { Lightbulb, GraduationCap, Target, FileText, Users, Compass } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <section className="relative bg-gradient-to-r from-slate-50 to-slate-100 py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Plan Your Future with Confidence</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            In Canada, academic success begins with clear direction. Our Education Planning Service provides
            personalized guidance for students from elementary to university, helping them design the best path for
            academic and personal growth.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-700 text-center mb-6">Our Services Include</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FileText className="w-8 h-8 text-slate-700" />,
              title: 'Course Selection & Academic Planning',
              desc: 'Strategic subject and program choices to align with future goals.'
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-slate-700" />,
              title: 'University Application & Essay Guidance',
              desc: 'Personalized assistance with applications, essays, and statements.'
            },
            {
              icon: <Compass className="w-8 h-8 text-slate-700" />,
              title: 'Interest & Career Path Assessment',
              desc: 'Identify strengths and align studies with long-term ambitions.'
            },
            {
              icon: <Users className="w-8 h-8 text-slate-700" />,
              title: 'Extracurricular & Volunteer Planning',
              desc: 'Build well-rounded profiles through meaningful activities.'
            },
            {
              icon: <Target className="w-8 h-8 text-slate-700" />,
              title: 'Interview & Language Test Preparation',
              desc: 'Coaching and preparation for English tests and admissions interviews.'
            }
          ].map(item => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
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
      <section className="bg-gray-50 pb-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-slate-700" />,
                title: 'Expert Knowledge',
                desc: 'In-depth understanding of the Canadian education system.'
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-slate-700" />,
                title: 'Tailored Strategies',
                desc: 'Customized plans that highlight each student’s unique strengths.'
              },
              {
                icon: <Users className="w-8 h-8 text-slate-700" />,
                title: 'Holistic Development',
                desc: 'We focus on both academic excellence and personal growth.'
              }
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
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

      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-6">Our Students Have Been Admitted To</h2>
          <p className="text-gray-600 mb-10">
            Many of our students have successfully entered top universities and colleges across North America.
          </p>

          {/* Logo grid */}
          <div className="flex justify-center">
            <Image src="/images/schools.png" alt="Schools" width={1000} height={1000} />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">Start Planning Your Future Today</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether your goal is to enter a top university or discover the right path for your future, our expert
            advisors are here to help you build a clear plan and the confidence to achieve it.
          </p>
          <p className="text-2xl font-semibold text-slate-800 mb-10">
            Professional guidance makes a brighter future possible.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-block bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-slate-800 transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* 背景装饰图案 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
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
