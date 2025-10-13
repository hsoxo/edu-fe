import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';
import { BookOpen, Heart, Lightbulb, Palette, Users } from 'lucide-react';
import { PenTool, Brain, Calculator, Bus } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <div className="bg-gray-50 text-gray-800">
        {/* ===== Hero Section ===== */}
        <section className="relative h-[500px] w-full">
          <Image src="/images/afterschool-banner.jpg" alt="After School Support" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4">After School Support</h1>
            <p className="max-w-2xl text-lg text-gray-100 mb-6">Where Learning Continues Beyond the Classroom</p>
            <a
              href="#contact"
              className="bg-[#E23E3E] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#c92d2d] transition"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* ===== Overview Section ===== */}
        <section className="max-w-6xl mx-auto py-16 px-6 bg-gray-50">
          {/* Section 标题 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-600 mb-3">Comprehensive After School Learning</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our after-school programs help students grow in a supportive, structured, and fun environment beyond
              regular school hours.
            </p>
          </div>

          {/* 文字要点 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
            {[
              {
                icon: <BookOpen className="text-slate-600" size={28} />,
                title: 'Homework Tutoring'
              },
              {
                icon: <PenTool className="text-slate-600" size={28} />,
                title: 'Reading Support'
              },
              {
                icon: <Brain className="text-slate-600" size={28} />,
                title: 'Chinese Learning'
              },
              {
                icon: <Calculator className="text-slate-600" size={28} />,
                title: 'Fun Math Activities'
              },
              {
                icon: <Palette className="text-slate-600" size={28} />,
                title: 'Arts'
              },
              {
                icon: <Bus className="text-slate-600" size={28} />,
                title: 'Pick-up'
              }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 pl-2">
                <div className="flex-shrink-0 bg-slate-600/10 p-3 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-600">{item.title}</h3>
                </div>
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

        <section id="benefits" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-600 mb-10">Why Choose VanLearn After School?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BookOpen size={36} className="text-slate-600" />,
                  title: 'Academic Growth',
                  desc: 'Reinforce classroom learning with personalized tutoring and structured study time.'
                },
                {
                  icon: <Heart size={36} className="text-slate-600" />,
                  title: 'Safe & Caring Environment',
                  desc: 'Students thrive in a supervised, positive, and nurturing setting.'
                },
                {
                  icon: <Lightbulb size={36} className="text-slate-600" />,
                  title: 'Lifelong Study Habits',
                  desc: 'We help children build independence, discipline, and a love for learning.'
                },
                {
                  icon: <Users size={36} className="text-slate-600" />,
                  title: 'Peace of Mind for Parents',
                  desc: 'Reliable pickup and drop-off make your after-school logistics worry-free.'
                }
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-3 mb-3">
                    {b.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{b.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Teachers Section ===== */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-600 mb-4">Meet Our Teachers</h2>
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
          <h2 className="text-2xl font-bold mb-3">Ready to experience VanLearn After School Support?</h2>
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
    </div>
  );
}
