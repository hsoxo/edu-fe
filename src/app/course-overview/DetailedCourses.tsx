import React from "react";
import Image from "next/image";

const courses = [
  {
    title: "Foundation Courses",
    desc: "Our foundation courses build solid academic fundamentals for primary through secondary learners. Programs include English Reading & Writing, Public Speaking, full-subject BC curriculum tutoring, Singapore Math, and Math Olympiad preparation. Students gain measurable progress through assessment-driven learning and personalized instruction.",
    highlight: "Solid fundamentals, steady progress, and measurable skill gains.",
    image: "/foundation.jpg",
  },
  {
    title: "Arts & Languages",
    desc: "Creative and cultural development courses designed for all ages. Students can explore Visual Arts, Guzheng & Piano, as well as language programs in Chinese, French, and Japanese. We emphasize artistic technique, language fluency, and cognitive enrichment that supports academic performance and personal growth.",
    highlight: "Artistic technique, language fluency, and cultural enrichment.",
    image: "/arts.jpg",
  },
  {
    title: "International Curriculum",
    desc: "For globally minded learners aiming for top universities. Courses include IELTS, TOEFL, SSAT preparation, AP and IB subject coaching, and one-on-one sessions with experienced foreign-language instructors. Our proven methodology helps students master international standards and competitive admissions strategies.",
    highlight: "Exam strategy, international standards, and admissions success.",
    image: "/international.jpg",
  },
  {
    title: "After-School Support",
    desc: "Reliable after-school programs designed to extend learning beyond the classroom. Services include homework supervision, guided reading, math enrichment activities, and safe pick-up/drop-off arrangements. We ensure continuity, convenience, and reinforcement of daytime learning in a supportive environment.",
    highlight: "Convenience, continuity, and reinforcement of daily learning.",
    image: "/afterschool.jpg",
  },
];

const DetailedCourses: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-[1120px] mx-auto px-6 space-y-28">
        {courses.map((course, idx) =>
        (<div
          key={idx}
          className="grid lg:grid-cols-2 gap-16 items-center py-12"
        >
          {/* Image */}
          <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-[360px] rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className={`${idx % 2 === 1 ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-rose-600 mb-6">
              {course.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              {course.desc}
            </p>
            <div className="bg-rose-100 text-rose-800 px-6 py-4 rounded-md text-base font-medium shadow-sm">
              {course.highlight}
            </div>
          </div>
        </div>

        ))}
      </div>
    </section>
  );
};

export default DetailedCourses;
