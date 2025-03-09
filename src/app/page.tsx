import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <Image
                src="/images/logo.png"
                alt="VanLearn Education"
                width={60}
                height={60}
              />
              <Link href="/" className="text-2xl font-bold text-gray-900">
                VanLearn
                <span className="text-blue-600 ml-1">Education</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-gray-600">
              <Link
                href="#courses"
                className="hover:text-blue-600 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Book Trial
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="/images/home-banner.jpg"
          alt="International Education"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Future Global Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Bilingual Education Excellence in Greater Vancouver
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="#courses"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-center border border-white/30"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 课程介绍 */}
      <section id="courses" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Educational Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored curriculum designed to meet international standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 基础课程 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">基础课程</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 英语阅读与写作</li>
                <li>• 英语公共演讲</li>
                <li>• BC中小学全科辅导</li>
                <li>• 新加坡数学</li>
                <li>• 数学竞赛课程</li>
              </ul>
            </div>

            {/* 艺术与语言 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">艺术与语言</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 美术课程</li>
                <li>• 古筝/钢琴</li>
                <li>• 中文/法语/日语</li>
                <li>• 国际象棋</li>
              </ul>
            </div>

            {/* 国际课程 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">国际课程</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 雅思/托福/SSAT</li>
                <li>• AP/IB课程</li>
                <li>• 外教一对一</li>
                <li>• 大学申请规划</li>
              </ul>
            </div>

            {/* After School */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">After School</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 课后作业辅导</li>
                <li>• 课外阅读指导</li>
                <li>• 趣味数学活动</li>
                <li>• 接送服务</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Begin Your Educational Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Schedule a free consultation with our education specialists
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Book a Trial Class - Starting from $15/hour
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            <a
              href="tel:+12369891968"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              +1 236 989 1968
            </a>
            <a
              href="mailto:vanlearnedu@gmail.com"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              vanlearnedu@gmail.com
            </a>
            <div className="flex items-center text-gray-700">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span>Unit 200, 20378 88 Avenue, Langley</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
