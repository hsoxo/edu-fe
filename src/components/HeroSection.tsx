// HeroSection.tsx
import React from "react";
import Counter from "./Counter";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* 背景视频 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/5200029/5200029-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 内容区域 */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-[1120px] w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="text-white">
            {/* 标题 */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-8">
              VanLearn Education
            </h1>

            {/* 副标题 */}
            <p className="text-lg md:text-xl mb-4">
              A professional international education institute dedicated to
              providing students with comprehensive academic support and
              personal growth.
            </p>

            {/* Hero 简介 */}
            <p className="text-white/90 max-w-xl text-base md:text-lg leading-relaxed mb-8">
              At VanLearn International, we are committed to delivering{" "}
              <span className="font-semibold">high-quality international education</span>{" "}
              and <span className="font-semibold">personalized learning support</span>.
              Our experienced teaching team offers a wide range of programs —
              from academic tutoring to language, arts, and university
              preparation — helping every student achieve their full potential
              in a supportive and inspiring environment.
            </p>

            {/* 按钮 */}
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                Contact Us
              </a>
              <a
                href="/course-overview"
                className="border border-slate-500 hover:bg-slate-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                View Courses
              </a>
            </div>
          </div>

          {/* 右侧 fancy 统计数据 */}
          <div className="grid gap-6 sm:grid-cols-3 text-center lg:text-left">
            <div className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transform transition flex flex-col items-center">
              <p className="inline-block pr-2 text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                <Counter target={2000} suffix="+" />
              </p>
              <p className="text-white/90 text-base">Students</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transform transition flex flex-col items-center">
              <p className="inline-block pr-2 text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                <Counter target={15} />
              </p>
              <p className="text-white/90 text-base">Years</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transform transition flex flex-col items-center">
              <p className="inline-block pr-2 text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                <Counter target={99} suffix="%" />
              </p>
              <p className="text-white/90 text-base">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
