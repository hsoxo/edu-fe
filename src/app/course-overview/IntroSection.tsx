import React from "react";
import Image from "next/image";
import { BookOpen, Music, GraduationCap, Clock } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="w-6 h-6 text-slate-600" />,
    title: "Foundation Courses",
    desc: "English Reading & Writing, Public Speaking, BC K–12 Tutoring, Singapore Math, Math Competition Prep",
  },
  {
    icon: <Music className="w-6 h-6 text-slate-600" />,
    title: "Arts & Languages",
    desc: "Visual Arts, Guzheng & Piano, Chinese / French / Japanese, Chess",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-slate-600" />,
    title: "International Curriculum",
    desc: "IELTS / TOEFL / SSAT, AP & IB support, One-on-one Foreign Language Tutors, University Application Planning",
  },
  {
    icon: <Clock className="w-6 h-6 text-slate-600" />,
    title: "After-School Support",
    desc: "Homework Supervision, Guided Reading, Math Enrichment Activities, Pickup & Drop Services",
  },
];

const Intslatection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-[1120px] mx-auto px-4">
        {/* Top intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-600 mb-6">
              VanLearn International
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Trusted, Results-Driven Education
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Tailored academic programs and enrichment across four pillars:
              Foundation, Arts & Languages, International Curriculum, and
              After-School Support. We combine proven pedagogy, accredited
              instructors, and measurable outcomes to prepare learners for
              academic success and global pathways.
            </p>
          </div>

          {/* Right image */}
          <div>
            <Image
              width={200}
              height={200}
              src="/classroom.jpg"
              alt="Classroom"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Four course pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-gray-200 bg-slate-50 p-8 pb-12 hover:shadow-lg transition"
            >
              {/* 顶部渐变条 */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-slate-500 to-pink-400"></div>

              {/* Icon + Title */}
              <div className="flex items-center mb-4 space-x-3 mt-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-slate-100">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-600">
                  {pillar.title}
                </h4>
              </div>

              {/* Desc */}
              <p className="text-gray-700 text-base leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intslatection;
