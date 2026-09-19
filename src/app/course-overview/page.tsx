import FooterSection from '@/components/FooterSection';
import CopyrightBar from '@/components/CopyrightBar';
import Header from '@/components/Header';
import CoursesSection from './DetailedCourses';

export default function CourseOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-b from-[#FFF8F7] via-white to-[#F9FBFF] py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B71C1C] mb-5">Our Courses</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Four pillars of learning — English, secondary languages, math &amp; science, and arts &amp; chess — taught
            in small classes by instructors who know how to keep students engaged.
          </p>
        </div>
      </section>

      <CoursesSection />

      <FooterSection />
      <CopyrightBar />
    </div>
  );
}
