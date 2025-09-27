import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import IntroSection from "./IntroSection";
import DetailedCourses from "./DetailedCourses";
import FeaturesSection from "./FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Banner */}
      <IntroSection />
      <DetailedCourses />
      <FeaturesSection />

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} VanLearn International. All rights reserved.
        </div>
      </div>
    </div>
  );
}
