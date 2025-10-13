import React from 'react';
import { BookOpen, Palette, Sigma, Languages } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    icon: <BookOpen className="w-7 h-7 text-white" />,
    title: 'English Programs',
    desc: 'Build strong academic fundamentals and core skills',
    items: [
      'WORDLY WISE 3000 & Grammar',
      'English Reading & Writing',
      'Public Speaking & Debate',
      'IELTS Intensive Course',
      'TOEFL & SSAT Prep'
    ]
  },
  {
    icon: <Languages className="w-7 h-7 text-white" />,
    title: 'Other Languages',
    desc: 'Enhance artistic literacy and broaden language skills',
    items: ['Chinese Language', 'French Language', 'Japanese Language']
  },
  {
    icon: <Sigma className="w-7 h-7 text-white" />,
    title: 'Math & Science Programs (AP/IB)',
    desc: 'Prepare for top universities and study abroad success',
    items: ['Mathematics Tutoring', 'Singapore Math', 'Computer Programming']
  },
  {
    icon: <Palette className="w-7 h-7 text-white" />,
    title: 'Arts & Chess',
    desc: 'Comprehensive after-school services and guidance',
    items: ['Piano & Guzheng', 'Chess', 'Creative Art for Kids', 'Sketching (Children & Adults)']
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-600">Premium Course System</h2>
          <p className="text-lg text-gray-600">Four core domains designed to enhance students’ all-round abilities</p>
        </div>

        {/* Grid - 2 columns on desktop */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group rounded-2xl p-8 flex flex-col shadow-md transition bg-slate-50 hover:bg-slate-100 hover:shadow-lg"
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-slate-600 text-white mr-4 transform transition-transform duration-300 group-hover:rotate-3 group-hover:-translate-y-0.5 shadow-md">
                  {course.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-slate-600 transition">
                    {course.title}
                  </h3>
                  <p className="text-base text-gray-600">{course.desc}</p>
                </div>
              </div>

              {/* Course Items */}
              <ul className="space-y-3 mt-2">
                {course.items.map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-slate-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto px-4 text-right mt-4">
        <Link href="/course-overview" className="text-md font-semibold text-rose-600 hover:underline">
          <i>View More →</i>
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
