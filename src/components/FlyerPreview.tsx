'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';

type FlyerPreviewProps = {
  src: string;
  title: string;
  alt: string;
  hideAfter?: string;
};

type FlyerCarouselProps = {
  flyers: FlyerPreviewProps[];
};

export default function FlyerPreview({ flyers }: FlyerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const visibleFlyers = flyers.filter(flyer => {
    if (!flyer.hideAfter) return true;

    const hideAfter = new Date(`${flyer.hideAfter}T23:59:59`);
    return new Date() <= hideAfter;
  });
  const activeFlyer = visibleFlyers[Math.min(activeIndex, visibleFlyers.length - 1)];

  useEffect(() => {
    if (activeIndex >= visibleFlyers.length) setActiveIndex(0);
  }, [activeIndex, visibleFlyers.length]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {activeFlyer && (
        <div className="group relative h-[460px] overflow-hidden rounded-xl border border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 block w-full text-left"
          aria-label={`Enlarge ${activeFlyer.title}`}
        >
          <Image
            src={activeFlyer.src}
            alt={activeFlyer.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain transition duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            View
          </span>
        </button>

        {visibleFlyers.length > 1 && (
          <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2">
            {visibleFlyers.map((flyer, index) => (
              <button
                key={flyer.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold shadow-sm backdrop-blur transition ${
                  activeIndex === index
                    ? 'border-[#f5a898] bg-[#fff8ee]/95 text-[#a75f4f]'
                    : 'border-slate-200 bg-white/90 text-slate-600 hover:border-slate-300'
                }`}
              >
                {flyer.title}
              </button>
            ))}
          </div>
        )}
        </div>
      )}

      {open && activeFlyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeFlyer.title}
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[88vh] w-full max-w-5xl" onClick={event => event.stopPropagation()}>
            <Image src={activeFlyer.src} alt={activeFlyer.alt} fill sizes="100vw" className="object-contain" priority />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-900 shadow-sm transition hover:bg-slate-100"
              aria-label="Close flyer preview"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
