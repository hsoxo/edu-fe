import React from "react";
import { Users, Star, Trophy } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white to-[#fff5f5] py-16">
      <div className="max-w-[1120px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-rose-600">
            About VanLearn Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            VanLearn International is a professional education institute
            specializing in international programs. We are dedicated to providing
            students with comprehensive academic support and personal
            development guidance. Through diverse course offerings and
            personalized teaching strategies, we help each student unlock their
            potential and achieve their academic goals.
          </p>

          {/* Three strengths */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded bg-rose-100 text-rose-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Experienced Faculty</h3>
                <p className="text-gray-600 text-sm">
                  A team of highly qualified teachers with years of teaching
                  experience, delivering top-quality education.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded bg-rose-100 text-rose-600">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Personalized Learning</h3>
                <p className="text-gray-600 text-sm">
                  Tailored study plans designed for each student to achieve
                  precise and effective learning outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded bg-rose-100 text-rose-600">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Proven Results</h3>
                <p className="text-gray-600 text-sm">
                  Over the years, we have helped countless students reach their
                  academic goals and gain admission to their dream schools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Decorative cards (can be replaced with images) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 h-64 bg-white rounded-lg shadow-sm"></div>
          <div className="h-40 bg-white rounded-lg shadow-sm"></div>
          <div className="h-40 bg-white rounded-lg shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
