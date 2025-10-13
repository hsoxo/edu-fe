'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Star } from 'lucide-react';

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

const reasons = ['Proven outcomes', 'Professional educators', 'Tailored plans', 'Dependable logistics'];

const googleLink =
  'https://www.google.com/maps/place/Vanlearn+Education.CCS+Langley.+Penny+Chess+Club+Langley/@49.1626561,-122.6579336,17z/data=!4m8!3m7!1s0x5485d1f1d78da4ad:0xec15e51bd7f77016!8m2!3d49.1623493!4d-122.6579909!9m1!1b1!16s%2Fg%2F11tbzt6_78?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D';

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-[1120px] mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start">
        {/* 左边 Google Reviews */}
        <div className="lg:col-span-2">
          {/* 标题 + Google 评分 */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-800">
                What Families Say on <span className="text-rose-600">Google Reviews</span>
              </h2>
            </div>
            <div className="flex items-center space-x-1 text-rose-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-rose-500" />
              ))}
              <span className="ml-2 text-gray-700 font-semibold">5.0</span>
            </div>
          </div>

          {/* Review Carousel */}
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={12}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="h-[450px]"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-4 rounded-lg shadow-sm flex space-x-3">
                  <Image width={20} height={20} src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-gray-700 italic text-sm">“{t.quote}”</p>
                    <p className="text-xs text-gray-500 mt-1">— {t.author}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Google 查看按钮 */}
          <div className="text-right mt-4">
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-semibold text-rose-600 hover:underline"
            >
              <i>See all reviews on Google →</i>
            </a>
          </div>
        </div>

        {/* 右边 Why Families Trust VanLearn */}
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 mb-4">
            <Star className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Why Families Trust VanLearn</h3>
          <ul className="text-gray-700 space-y-3 mb-6">
            {reasons.map((reason, i) => (
              <li key={i} className="flex space-x-2">
                <span className="text-slate-500">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Real families recommend <span className="font-semibold text-slate-600">VanLearn</span> for steady,
            measurable improvement in their children’s academic performance and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
