import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/judy.jpg"
                alt="Founder of Vanlearn International Education"
                width={600}
                height={800}
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>

          <div>
            {/* 姓名 + 职位 */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-1">Jody Wang</h2>
            <p className="text-lg text-gray-600 font-medium mb-8">Founder</p>

            {/* 简介条目（列表形式） */}
            <ul className="list-disc list-outside pl-6 space-y-3 text-[18px] text-gray-800 leading-[1.6]">
              <li>Master’s Degrees in TESOL from China and the University of Saskatchewan, Canada</li>
              <li>
                Certified TESOL Instructor with over 15 years of international teaching and academic leadership
                experience
              </li>
              <li>
                Founder and Director of
                <span className="font-semibold text-slate-900"> Vanlearn International Education</span>, recognized for
                excellence in language and academic programs
              </li>
              <li>
                Dedicated to
                <span className="italic"> student-centered learning</span> and helping students build confidence and
                global perspectives
              </li>
              <li>Trusted by families for her expertise, innovative teaching, and genuine care for every learner</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="max-w-[600px]">
            <h2 className="text-4xl font-bold text-slate-800 mb-1 tracking-tight">Stephen Ni</h2>
            <p className="text-lg text-gray-500 font-medium mb-6">Founder</p>

            <ul className="list-disc list-outside pl-6 space-y-3 text-[18px] text-gray-800 leading-[1.6] mb-6">
              <li>Certified IELTS & TOEFL Instructor | CERTESL</li>
              <li>
                Former Lead Reading & Writing Instructor at New Oriental Education and Longre Training School, two of
                China’s most prestigious language institutions
              </li>
              <li>
                Extensive experience in English language teaching and teacher training, with a proven record of student
                success
              </li>
            </ul>

            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Specialties:</h3>
              <ul className="list-disc list-outside pl-6 space-y-2 text-[17px] text-gray-700 leading-[1.6]">
                <li>IELTS & TOEFL — Foundation, Intensive, and Advanced Preparation</li>
                <li>Adult ESL and Young Learner EAL Programs</li>
                <li>Academic and Creative English Reading & Writing Development</li>
              </ul>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[70%] md:w-[60%] lg:w-[75%] max-w-sm">
              <Image
                src="/founder-removebg.png"
                alt="Founder of Vanlearn International Education"
                width={400}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Awards Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF8F7] via-white to-[#F9FBFF]">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B71C1C] mb-4">Our Awards &amp; Achievements</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Vanlearn International has been recognized for excellence in education, innovation, and community service.
            Each award represents our commitment to helping students reach their full potential.
          </p>
          <Link
            href="/awards"
            className="inline-flex items-center justify-center rounded-full bg-[#B71C1C] text-white font-semibold px-8 py-3 hover:bg-[#E53935] transition-colors"
          >
            See Our Awards &amp; Achievements
          </Link>
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
