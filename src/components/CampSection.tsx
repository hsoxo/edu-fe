'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Trees, Sparkles, Gift, Sun, Users } from 'lucide-react';
import Link from 'next/link';

const camps = [
  {
    icon: <Palette className="w-7 h-7 text-[#D32F2F]" />,
    title: 'Creative Art Exploration',
    desc: 'Daily themed art projects that combine imagination, color, and storytelling.',
    items: ['Watercolor & Clay Art', 'Winter-themed Crafts', 'Story-inspired Painting'],
    bgColor: 'bg-[#FFF4F4]'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#F57C00]" />,
    title: 'Holiday Spirit & Fun',
    desc: 'Festive activities that let children celebrate the season with creativity and joy.',
    items: ['Christmas Ornament Design', 'Snowflake Collage', 'New Year Art Projects'],
    bgColor: 'bg-[#FFF6E5]'
  }
  //   {
  //     icon: <Trees className="w-7 h-7 text-[#2E7D32]" />,
  //     title: 'Outdoor Learning & Play',
  //     desc: 'Balanced schedule between indoor art creation and outdoor adventures.',
  //     items: ['Sketching in Nature', 'Outdoor Team Games', 'Winter Scavenger Hunt'],
  //     bgColor: 'bg-[#E9F6EC]'
  //   }
];

const CampSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* 背景光晕 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-48 bg-[radial-gradient(ellipse_at_center,_rgba(229,57,53,0.07)_0%,_transparent_70%)]" />

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B71C1C]">Art Camp</h2>
          <p className="text-lg text-gray-700">
            A joyful blend of art, creativity, and winter wonder — where imagination warms the season.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {camps.map((camp, idx) => (
            <motion.div
              key={idx}
              className="group rounded-2xl p-8 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 flex flex-shrink-0 items-center justify-center rounded-xl ${camp.bgColor} mr-4 transform transition-transform duration-300 group-hover:rotate-6`}
                >
                  {camp.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#B71C1C] transition-colors">
                    {camp.title}
                  </h3>
                  <p className="text-sm text-gray-600">{camp.desc}</p>
                </div>
              </div>

              {/* Camp Items */}
              <ul className="space-y-2 mt-2">
                {camp.items.map((item, i) => (
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
            href="/camp"
            className="text-md font-semibold text-[#E53935] hover:text-[#B71C1C] transition-colors inline-flex items-center gap-1"
          >
            <i>Learn More →</i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CampSection;
