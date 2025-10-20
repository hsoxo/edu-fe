import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CourseSection';
import FooterSection from '@/components/FooterSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AfterSchoolSection from '@/components/AfterSchoolSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <HeroSection />

      <CoursesSection />

      <AfterSchoolSection />

      <AboutSection />

      <TestimonialsSection />

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} VanLearn International. All rights reserved.
        </div>
      </div>
    </div>
  );
}
