'use client';
import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 统一的动画定义
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  })
};

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF8F7] pt-16 pb-20 overflow-hidden">
      <motion.div
        className="max-w-[1120px] mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* 左侧文字内容 */}
        <motion.div custom={0} variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#B71C1C]">About VanLearn Education</h2>

          <p className="text-gray-700 leading-relaxed mb-10 text-[17px]">
            VanLearn International is a professional education institute specializing in international programs. We are
            dedicated to providing students with comprehensive academic support and personal development guidance.
            Through diverse course offerings and personalized teaching strategies, we help each student unlock their
            potential and achieve their academic goals.
          </p>

          {/* 三个优势点 */}
          <div className="space-y-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-[#B71C1C]" />,
                title: 'Experienced Faculty',
                desc: 'A team of highly qualified teachers with decades of teaching experience, delivering top-quality education.',
                bg: 'bg-[#FFF4F4]'
              },
              {
                icon: <Star className="w-6 h-6 text-[#1565C0]" />,
                title: 'Personalized Learning',
                desc: 'Tailored study plans designed for each student to achieve precise and effective learning outcomes.',
                bg: 'bg-[#EAF3FF]'
              },
              {
                icon: <Trophy className="w-6 h-6 text-[#F57C00]" />,
                title: 'Proven Results',
                desc: 'Over the years, we have helped countless students reach their academic goals and gain admission to their dream schools.',
                bg: 'bg-[#FFF6E5]'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeInUp}
                className="flex items-start space-x-4 group will-change-transform will-change-opacity"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl ${item.bg} transform transition-transform duration-300 group-hover:rotate-6`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#B71C1C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 右侧图片内容 */}
        <motion.div custom={3} variants={fadeInUp} className="grid grid-cols-2 gap-6 relative -mt-4">
          {[
            { src: '/students1.jpg', alt: 'students', h: 'h-[200px]' },
            { src: '/classroom2.jpg', alt: 'classroom', h: 'h-[200px]' },
            { src: '/classroom1.jpg', alt: 'classroom', h: 'h-[280px]', span: 'col-span-2' }
          ].map((img, idx) => (
            <motion.div
              key={idx}
              custom={3.5 + idx * 0.2}
              variants={fadeInUp}
              className={`relative w-full ${img.h} ${img.span || ''} rounded-2xl overflow-hidden hover:scale-[1.04]`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
