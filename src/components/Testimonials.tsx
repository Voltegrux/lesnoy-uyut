'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#4A7C63">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-28 bg-forest-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.span
            className="section-label text-forest-moss"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Отзывы
          </motion.span>
          <motion.h2
            className="mt-3 font-display text-5xl font-light text-cream-sand md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Что говорят гости
          </motion.h2>
          <motion.span
            className="dec-line mx-auto"
            style={{ background: '#4A7C63', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
          />
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {[0, 1, 2].map((offset) => {
                  const t = testimonials[(current + offset) % testimonials.length];
                  return (
                    <div
                      key={t.id}
                      className={`rounded-2xl bg-forest-mid/40 border border-forest-mid p-7 ${offset > 0 ? 'hidden md:block' : ''} ${offset > 1 ? '!hidden lg:!block' : ''}`}
                    >
                      <Stars count={t.rating} />
                      <p className="mt-4 font-body text-sm leading-relaxed text-cream-sand/80">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-forest-sage">
                          <Image
                            src={t.avatar} alt={t.name} fill
                            className="object-cover" sizes="40px"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-cream-sand">{t.name}</div>
                          <div className="text-xs text-forest-moss">{t.date}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-mid text-forest-moss hover:border-forest-sage hover:text-forest-sage transition-colors"
              aria-label="Назад"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 5L7 10l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-forest-sage' : 'w-1.5 bg-forest-mid'
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-mid text-forest-moss hover:border-forest-sage hover:text-forest-sage transition-colors"
              aria-label="Вперёд"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
