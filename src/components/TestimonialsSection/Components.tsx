'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIsn2p8Dku-4T7927CSYJqexLdy09g5JLMQ4qAGU3LPLq97qA=w36-h36-p-rp-mo-br100',
    quote: `I love Penny Chess Club ! my son love Penny Class so much! He exited to go Penny Chess Club every time he has class. this is the best place for my kid growing up his skills and confidence ❤️`,
    author: 'Hiền Kim'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIvO4JijbsIHZlYWaSkhu1bzd2D5fpEW3qOQyn3OeJnluzlkA=w36-h36-p-rp-mo-br100',
    quote:
      'Whether you are new to chess or already experienced, Penny Chess Club provides the perfect balance of fun and professional training. HIGH-LEVEL training in warm, friendly environment',
    author: 'Milena Sánchez'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXEKP3_p6jhfSKeW0Bbiv01J8ojfk60kz5BvKkBEI9gM58liIY=w36-h36-p-rp-mo-br100',
    quote:
      'Penny Chess Club delivers professional coaching and competitive-level training in a supportive, fun atmosphere. I love  my classes at Penny Chess Club!',
    author: 'Kyouji Akuro'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWvXJcRb-g32McmmDc02p-fIYyBc-be2s9LDQ9njGAYB5HK2Eg=w36-h36-p-rp-mo-ba2-br100',
    quote:
      'My son love to come here, he love Mrs penny, not just learning about chess, but he learned to be respectful, responsible, share things with classmates, more happy.😃❤️❤️❤️. Thank you so much Mrs Penny.…...',
    author: 'KHANH DANH'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIhinooHa-0xIaff9JbZ5jpOa7gQs3Vt_ganm15fN35A_arpQ=w36-h36-p-rp-mo-br100',
    quote:
      'love Penny Chess Club!!!! Give my son and kids the best environment for studying and playing and growing up the skills and confidence',
    author: 'Monique Mckenzie'
  },

  {
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXvW7Wgd_Z4OJUAuT2NBprMI6ldQMfT8RKiFxByOeT1aFkc11U=w36-h36-p-rp-mo-br100',
    quote:
      '在温学国际参加了TEDx演讲训练，收获很大。老师专业又有耐心，课程帮助我更自信地表达自己。非常推荐给想提升演讲能力的同学！',
    author: 'Ni Nick'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWwBdIHVCcFiE4qSjWto0QCu1utvf-3MQ5XWBjrBRRF8OxY-Ycf=w36-h36-p-rp-mo-br100',
    quote:
      'Great learning experience for my IELTS test. Many different courses and the learning environment is very good. Teachers are all excellent. Sometimes can pet the little sweetheart kitty😀😀…...',
    author: 'cynical chen'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLmF2ZrTWSD5nDK9wTJ8bLpyfE01jF4bYHtxwFdIOWFZeqT=w36-h36-p-rp-mo-br100',
    quote: 'Penny is such an amazing coach. Very supportive and professional. I love her!!! ❤️',
    author: 'Thuyan Nguyen'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocL6xBthgjabuB_wIBtFFFQ67-EZh15vbqCk5a9JLH3fN_FA2A=w36-h36-p-rp-mo-br100',
    quote:
      'I AM SO HAPPY TO find  the best place for my daughter learning and improve her skils abd confidence . THANKS PENNY CHESS CLUB !!!!!',
    author: 'Maryluz Del Sol'
  },
  {
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXrREZKSWsSNU-J1Xqp-jLjdzXuwf3qYN7qElkGNdeBghqALHk=w36-h36-p-rp-mo-br100',
    quote: '语文老师白老师教的特别好，博古通今，学富五车，前无古人后无来者，强力推荐白老师的中文课',
    author: 'John Bai'
  }
];
const reasons = ['Proven outcomes', 'Professional educators', 'Tailored plans', 'Peace of Mind for Parents'];

const googleLink =
  'https://www.google.com/maps/place/Vanlearn+Education.CCS+Langley.+Penny+Chess+Club+Langley/@49.1626561,-122.6579336,17z/data=!4m8!3m7!1s0x5485d1f1d78da4ad:0xec15e51bd7f77016!8m2!3d49.1623493!4d-122.6579909!9m1!1b1!16s%2Fg%2F11tbzt6_78?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D';

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF8F7] py-20 relative overflow-hidden">
      {/* 背景柔光 */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-[radial-gradient(ellipse_at_center,_rgba(229,57,53,0.05)_0%,_transparent_70%)]" />

      <motion.div
        className="max-w-[1120px] mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* 左边 Google Reviews */}
        <div className="lg:col-span-2">
          {/* 标题 + 星级 */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              What Families Say on{' '}
              <span className="text-[#B71C1C] underline underline-offset-4 decoration-[#E57373]/40">
                Google Reviews
              </span>
            </h2>
            <div className="flex items-center space-x-1 text-[#E53935]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E53935]" />
              ))}
              <span className="ml-2 text-gray-700 font-semibold">5.0</span>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={14}
            loop
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="h-[450px]"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="bg-white/90 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 flex space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    width={40}
                    height={40}
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full border border-gray-100 object-cover"
                  />
                  <div>
                    <p className="text-gray-700 italic text-sm leading-relaxed">“{t.quote}”</p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">— {t.author}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Google 链接 */}
          <div className="text-right mt-5">
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-semibold text-[#E53935] hover:text-[#B71C1C] transition-colors"
            >
              <i>See all reviews on Google →</i>
            </a>
          </div>
        </div>

        {/* 右边 Why Families Trust */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center will-change-transform will-change-opacity"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFF4F4] text-[#B71C1C] mb-4">
            <Star className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Why Families Trust <span className="text-[#B71C1C]">VanLearn</span>
          </h3>
          <ul className="text-gray-700 space-y-3 mb-6 text-base">
            {reasons.map((reason, i) => (
              <li
                key={i}
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#E53935] transition-colors"
              >
                <span className="w-2 h-2 bg-[#E57373] rounded-full"></span>
                {reason}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed">
            Real families recommend <span className="font-semibold text-[#B71C1C]">VanLearn</span> for steady,
            measurable improvement in their children’s academic performance and confidence.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
