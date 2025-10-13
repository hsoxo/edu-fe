import Image from 'next/image';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import courses from '@/data/courses.json';

interface CourseData {
  course: {
    title: string;
    coverImage: string;
    overviewTitle: string;
    overviewText: string;
  };
  teachers: {
    name: string;
    photo: string;
    education: string;
    description: string | string[];
  }[];
  gallery?: string[];
}

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return courses.map(course => ({
    id: course.id
  }));
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const id = (await params).id;
  const data = courses.find(c => c.id === id) as CourseData;

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Course not found.</div>;
  }
  const { course, teachers, gallery } = data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-24">
        {/* === 课程标题 === */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{course.title}</h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Explore this program’s highlights and meet our experienced instructors.
          </p>
        </section>

        {/* === 课程介绍 === */}
        <section className="grid md:grid-cols-[45%_55%] gap-10 items-center">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={course.coverImage}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">{course.overviewTitle}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{course.overviewText}</p>
          </div>
        </section>

        {/* === 教师介绍 === */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-700">Our Instructors</h2>
            <p className="text-gray-600 mt-3">
              Meet our experienced and passionate teachers who guide students toward academic and creative success.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {teachers.map(t => (
              <div
                key={t.name}
                className="bg-white shadow-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden shadow-md">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">{t.name}</h3>
                  <p className="text-gray-500 italic mb-4">{t.education}</p>
                  {Array.isArray(t.description) ? (
                    <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside text-left">
                      {t.description.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{t.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === 图片展示 === */}
        {gallery && gallery.length > 0 && (
          <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map(img => (
                <div
                  key={img}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
                >
                  <Image src={img} alt={img} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <FooterSection />
      <div className="border-t border-white/20 py-4 text-center text-sm text-black/80">
        © {new Date().getFullYear()} VanLearn International. All rights reserved.
      </div>
    </div>
  );
}
