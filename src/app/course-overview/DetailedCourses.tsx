'use client';
import Image from 'next/image';
import { BookOpen, Languages, Sigma, Palette } from 'lucide-react'; // 图标库
import { useRouter } from 'next/navigation';

const courses = [
  {
    category: 'English Programs',
    subtitle: 'Enhance English reading, writing and communication skills.',
    icon: <BookOpen className="text-red-600" size={52} />,
    color: 'from-orange-100 to-orange-50',
    items: [
      {
        title: 'WORDLY WISE 3000 & Grammar',
        image: '/images/woldlywise3000.png',
        link: '/course/wordlywise3000'
      },
      {
        title: 'English Reading & Writing',
        image: '/images/englishreadingwriting.png',
        link: '/course/englishreadingwriting'
      },
      {
        title: 'Public Speaking',
        image: '/images/publicspeaking.png',
        link: '/course/publicspeaking'
      },
      {
        title: 'IELTS Course',
        image: '/images/ielts.png',
        link: '/course/ielts'
      },
      {
        title: 'TOEFL & SSAT Prep',
        image: '/images/toefl.png',
        link: '/course/toefl'
      }
    ]
  },
  {
    category: 'Secondary Languages',
    subtitle: 'Build global communication skills through multilingual learning.',
    icon: <Languages className="text-red-600" size={52} />,
    color: 'from-blue-100 to-blue-50',
    items: [
      {
        title: 'Chinese Language',
        image: '/images/chinese.png',
        link: '/course/chinese'
      },
      {
        title: 'French Language',
        image: '/images/french.png',
        link: '/course/french'
      },
      {
        title: 'Japanese Language',
        image: '/images/japanese.png',
        link: '/course/japanese'
      }
    ]
  },
  {
    category: 'Math & Science Programs (AP/IB)',
    subtitle: 'Foster logical thinking and problem-solving through math and science courses.',
    icon: <Sigma className="text-red-600" size={52} />,
    color: 'from-green-100 to-green-50',
    items: [
      {
        title: 'Mathematics Tutoring',
        image: '/images/mathematicstutor.png',
        link: '/course/mathematicstutor'
      },
      {
        title: 'Singapore Math',
        image: '/images/singaporemath.png',
        link: '/course/singaporemath'
      },
      {
        title: 'Computer Programming',
        image: '/images/computerprogramming.png',
        link: '/course/computerprogramming'
      }
    ]
  },
  {
    category: 'Arts & Chess',
    subtitle: 'Cultivate creativity, music appreciation, and strategic thinking.',
    icon: <Palette className="text-red-600" size={52} />,
    color: 'from-purple-100 to-purple-50',
    items: [
      {
        title: 'Piano & Guzheng',
        image: '/images/piano.png',
        link: '/course/piano'
      },
      {
        title: 'Chess',
        image: '/images/chess.png',
        link: '/course/chess'
      },
      {
        title: 'Creative Art for Kids',
        image: '/images/creativearts.png',
        link: '/course/creativearts'
      },
      {
        title: 'Sketching (Children & Adults)',
        image: '/images/sketching.png',
        link: '/course/sketching'
      },
      {
        title: 'Animation',
        image: '/images/animation.png',
        link: '/course/animation'
      },
      {
        title: 'Little Fashion Designer',
        image: '/images/fashiondesigner.png',
        link: '/course/fashiondesigner'
      }
    ]
  }
];

export default function CoursesSection() {
  const router = useRouter();
  return (
    <section className="bg-gray-50 pt-8 pb-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {courses.map((section, idx) => (
          <div key={idx} className="space-y-6">
            {/* === Section Header === */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div>{section.icon}</div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700">{section.category}</h2>
                    <p className="text-sm text-gray-500 mt-1">{section.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* === Course Cards === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => router.push(item.link)}
                >
                  {/* 背景图片 */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* 遮罩层（保证文字可读） */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* 内容层 */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <a href={item.link} className="text-sm font-medium text-[#FFD7C2] hover:underline">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
