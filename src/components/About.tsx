'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 10v15h20V10L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 25v-8h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Проверенные дома',
    text: 'Каждый объект лично проверен нашей командой. Фотографии соответствуют реальности.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 26C20.627 26 26 20.627 26 14S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Чистота и комфорт',
    text: 'Профессиональная уборка перед каждым заездом. Свежее бельё, полный набор удобств.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 5h18v14H5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 19v4M18 19v4M8 23h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 11a2 2 0 114 0v2h-4v-2z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Поддержка 24/7',
    text: 'Менеджер на связи круглосуточно. Любой вопрос решим быстро и без лишних слов.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v22M3 14h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Выгодные цены',
    text: 'Прозрачное ценообразование без скрытых доплат. Скидки при длительном бронировании.',
  },
];

const stats = [
  { value: '100+', label: 'объектов' },
  { value: '5 лет', label: 'на рынке' },
  { value: '10 000+', label: 'гостей' },
  { value: '4.9', label: 'рейтинг' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-cream-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              О компании
            </motion.span>
            <motion.h2
              className="mt-3 font-display text-5xl font-light text-forest md:text-6xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Почему выбирают нас
            </motion.h2>
            <motion.span
              className="dec-line"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
            <motion.p
              className="mb-10 text-stone leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Мы работаем с 2019 года и знаем, что делает отдых по-настоящему запоминающимся.
              Наши дома — это не просто жильё, это опыт единения с природой.
            </motion.p>

            {/* Features */}
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div className="shrink-0 text-forest-sage">{f.icon}</div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-forest">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-10 grid grid-cols-4 gap-4 border-t border-cream-sand pt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl font-medium text-forest">{s.value}</div>
                  <div className="mt-1 text-xs text-stone">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo collage */}
          <motion.div
            className="relative h-[520px] lg:h-[600px]"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Large top-right */}
            <div className="absolute right-0 top-0 h-[340px] w-[75%] overflow-hidden rounded-2xl shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80"
                alt="Интерьер дома"
                fill className="object-cover" sizes="50vw" loading="lazy"
              />
            </div>
            {/* Small bottom-left */}
            <div className="absolute bottom-0 left-0 h-[260px] w-[55%] overflow-hidden rounded-2xl shadow-card-hover border-4 border-cream">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80"
                alt="Баня у леса"
                fill className="object-cover" sizes="30vw" loading="lazy"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute bottom-[28%] right-[8%] z-10 rounded-2xl bg-forest px-5 py-4 shadow-btn">
              <div className="font-display text-3xl font-light text-cream-sand">5★</div>
              <div className="text-xs text-forest-moss">средняя оценка</div>
            </div>
            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-4 -right-4 h-24 w-24 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #4A7C63 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
