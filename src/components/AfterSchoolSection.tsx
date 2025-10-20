'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const afterschool = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#2E7D32]" />,
    title: 'Safe & Caring Environment',
    desc: 'Reliable pickup and dedicated teachers providing a supportive after-school experience.',
    items: ['Daily school pickup', 'Experienced educators on-site', 'Positive, well-supervised space'],
    bgColor: 'bg-[#E9F6EC]'
  },
  {
    icon: <Palette className="w-7 h-7 text-[#F57C00]" />,
    title: 'Creative Learning & Language',
    desc: 'Fun and engaging after-school activities that nurture creativity and thinking skills.',
    items: ['Drawing & Craft Projects', 'Critical Thinking Games', 'Chinese Language Class'],
    bgColor: 'bg-[#FFF6E5]'
  }
];

const AfterSchoolSection: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B71C1C]">After School Programs</h2>
          <p className="text-lg text-gray-700">Nurturing creativity, safety, and growth beyond school hours</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {afterschool.map((program, idx) => (
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
                  className={`w-14 h-14 flex flex-shrink-0 items-center justify-center rounded-xl ${program.bgColor} mr-4 transform transition-transform duration-300 group-hover:rotate-6`}
                >
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#B71C1C] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600">{program.desc}</p>
                </div>
              </div>

              {/* Program Items */}
              <ul className="space-y-2 mt-2">
                {program.items.map((item, i) => (
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
            href="/after-school"
            className="text-md font-semibold text-[#E53935] hover:text-[#B71C1C] transition-colors inline-flex items-center gap-1"
          >
            <i>Learn More →</i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AfterSchoolSection;
