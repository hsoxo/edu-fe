'use client';
import React from 'react';
import { BookOpen, Palette, Sigma, Languages } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const courses = [
  {
    icon: <BookOpen className="w-7 h-7 text-[#B71C1C]" />,
    title: 'English Programs',
    desc: 'Build academic fundamentals and superior communication abilities',
    items: [
      'WORDLY WISE 3000 & Grammar',
      'English Reading & Writing',
      'Public Speaking & Debate',
      'IELTS Intensive Course',
      'TOEFL & SSAT Prep'
    ],
    bgColor: 'bg-[#FFF4F4]'
  },
  {
    icon: <Languages className="w-7 h-7 text-[#1565C0]" />,
    title: 'Other Languages',
    desc: 'Our multilingual staff will broaden your language skills',
    items: ['Chinese Language', 'French Language', 'Japanese Language'],
    bgColor: 'bg-[#EAF3FF]'
  },
  {
    icon: <Sigma className="w-7 h-7 text-[#2E7D32]" />,
    title: 'Math & Science Programs (AP/IB)',
    desc: 'Prepare for top universities and success abroad',
    items: ['Mathematics Tutoring', 'Singapore Math', 'Computer Programming'],
    bgColor: 'bg-[#E9F6EC]'
  },
  {
    icon: <Palette className="w-7 h-7 text-[#F57C00]" />,
    title: 'Arts & Chess',
    desc: 'After-school training from beginners to mastery',
    items: ['Piano & Guzheng', 'Chess', 'Creative Art for Kids', 'Sketching (Children & Adults)'],
    bgColor: 'bg-[#FFF6E5]'
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* 背景柔光装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-[radial-gradient(ellipse_at_center,_rgba(229,57,53,0.07)_0%,_transparent_70%)]" />

      <motion.div
        className="max-w-[1120px] mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B71C1C]">Premium Course System</h2>
          <p className="text-lg text-gray-700">Four core domains designed to enhance students’ all-round abilities</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              className="group rounded-2xl p-8 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-shadow duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl ${course.bgColor} mr-4 transform transition-transform duration-300 group-hover:rotate-6`}
                >
                  {course.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#B71C1C] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600">{course.desc}</p>
                </div>
              </div>

              {/* Course Items */}
              <ul className="space-y-2 mt-2">
                {course.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 text-[15px] hover:text-[#E53935] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E57373] mr-3 group-hover:scale-125 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-right mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/course-overview"
            className="text-md font-semibold text-[#E53935] hover:text-[#B71C1C] transition-colors inline-flex items-center gap-1"
          >
            <i>View More →</i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoursesSection;
