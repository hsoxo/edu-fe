import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import Image from 'next/image';

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
          <h2 className="text-3xl md:text-4xl font-bold text-[#B71C1C] mb-4">Our Awards & Achievements</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Vanlearn International has been recognized for excellence in education, innovation, and community service.
            Each award represents our commitment to helping students reach their full potential.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
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
            ].map((award, idx) => (
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

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
        </div>
      </div>
    </div>
  );
}
