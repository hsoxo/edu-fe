'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery({ gallery }: { gallery: string[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // 键盘事件：Esc 关闭 / 左右切换
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCurrentIndex(null);
      else if (e.key === 'ArrowRight') setCurrentIndex(i => (i === null ? 0 : (i + 1) % gallery.length));
      else if (e.key === 'ArrowLeft')
        setCurrentIndex(i => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, gallery.length]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section>
      {/* 图片网格 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((img, i) => (
          <div
            key={img}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => setCurrentIndex(i)}
          >
            <Image src={img} alt={img} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* 模态层 */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative w-[90vw] h-[80vh] max-w-5xl select-none" onClick={e => e.stopPropagation()}>
            {/* 图片展示 */}
            <Image
              src={gallery[currentIndex]}
              alt={`image-${currentIndex}`}
              fill
              className="object-contain rounded-lg transition-all duration-300"
            />

            {/* 关闭按钮 */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 左右切换 */}
            <button
              onClick={() => setCurrentIndex((currentIndex - 1 + gallery.length) % gallery.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentIndex((currentIndex + 1) % gallery.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 底部索引 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              {currentIndex + 1} / {gallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
