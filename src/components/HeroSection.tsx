'use client';
import React from 'react';
import Counter from './Counter';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-[80vh] lg:h-[80vh] overflow-hidden">
      {/* 背景视频 */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://videos.pexels.com/video-files/5200029/5200029-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* 内容区域 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex items-center justify-center h-full px-6 sm:px-10"
      >
        <div className="max-w-[1120px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="text-white text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            >
              VanLearn Education
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-200 mb-4"
            >
              A distinguished educational institution dedicated to comprehensive academic support and personal growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/90 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed mb-4"
            >
              For over 20 years, our experienced faculty has successfully nurtured students&apos; skills, confidence,
              and well-being. We offer a wide range of programs within a supportive and inspiring environment - from
              academic tutoring, language, arts, and university preparation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/90 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed mb-8"
            >
              Our commitment is to provide high-quality, personalized learning that guides every student to unlock their
              full potential.
            </motion.p>

            {/* 按钮组 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="bg-[#B71C1C] hover:bg-[#A4161A] text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
              >
                Contact Us
              </a>
              <a
                href="/course-overview"
                className="border border-white/70 hover:bg-white hover:text-[#B71C1C] px-8 py-3 rounded-lg font-semibold transition text-center"
              >
                View Courses
              </a>
            </motion.div>
          </div>

          {/* 右侧统计卡片 — 保留原样式 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
          >
            <div className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transform transition flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                <Counter target={2000} suffix="+" />
              </p>
              <p className="text-white/90 text-sm sm:text-base">Students</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transform transition flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                <Counter target={15} />
              </p>
              <p className="text-white/90 text-sm sm:text-base">Years</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transform transition flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                <Counter target={99} suffix="%" />
              </p>
              <p className="text-white/90 text-sm sm:text-base">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
