import Image from 'next/image';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

interface CourseData {
  course: {
    title: string;
    coverImage: string;
    overviewTitle: string;
    overviewText: string;
  };
  teacher: {
    name: string;
    photo: string;
    education: string;
    description: string | string[];
  };
  gallery?: string[];
}

// ✅ 这行是关键 —— 等价于 getServerSideProps，每次请求都重新渲染
export const dynamic = 'force-dynamic';

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // 关键点：`cache: 'no-store'` 表示不缓存 → SSR
  const res = await fetch(`${baseUrl}/api/courses?id=${params.id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Course not found.</div>;
  }

  const data: CourseData = await res.json();
  const { course, teacher, gallery } = data;

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
        <section className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden shadow-md">
            <Image src={teacher.photo} alt={teacher.name} fill className="object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{teacher.name}</h3>
            <p className="text-gray-500 italic mb-4">{teacher.education}</p>
            {Array.isArray(teacher.description) ? (
              <p className="text-gray-600 leading-relaxed">{teacher.description.join(' - ')}</p>
            ) : (
              <p className="text-gray-600 leading-relaxed">{teacher.description}</p>
            )}
          </div>
        </section>

        {/* === 图片展示 === */}
        {gallery && gallery.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Class Moments</h2>
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
