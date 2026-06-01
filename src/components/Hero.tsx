'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const words = ['Аренда', 'уютных', 'загородных', 'домов', 'для отдыха'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 180]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 0.4]);

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1920&q=85"
          alt="Загородный дом в лесу"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Static gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/30 to-forest-dark/80" />

      {/* Scroll-driven extra overlay */}
      <motion.div
        className="absolute inset-0 bg-forest-dark"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Label */}
        <motion.span
          className="section-label text-forest-moss mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          Подмосковье · Аренда посуточно
        </motion.span>

        {/* Main heading — word by word */}
        <h1 className="font-display text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl max-w-4xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.7 + i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-xl font-body text-lg font-light text-cream-sand/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.35, duration: 0.7 }}
        >
          Комфортный отдых на природе в любое время года
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
        >
          <button
            onClick={() => scrollTo('#houses')}
            className="group relative overflow-hidden rounded-full bg-forest px-8 py-4 font-body text-sm font-medium tracking-wide text-cream-sand shadow-btn transition-all duration-300 hover:shadow-[0_8px_32px_rgba(28,56,41,0.4)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Выбрать дом</span>
            <span className="absolute inset-0 -translate-x-full bg-forest-mid transition-transform duration-500 group-hover:translate-x-0" />
          </button>
          <button
            onClick={() => scrollTo('#contacts')}
            className="rounded-full border border-cream-sand/50 px-8 py-4 font-body text-sm font-medium tracking-wide text-cream-sand transition-all duration-300 hover:bg-cream-sand/10 hover:border-cream-sand hover:-translate-y-0.5"
          >
            Забронировать
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex gap-10 sm:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.7, duration: 0.8 }}
        >
          {[
            { value: '100+', label: 'домов' },
            { value: '5 лет', label: 'на рынке' },
            { value: '4.9★', label: 'рейтинг' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-light text-white">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-cream-sand/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#houses')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.0, duration: 0.6 }}
        aria-label="Смотреть дома"
      >
        <span className="text-xs tracking-widest uppercase text-cream-sand/50">Смотреть дома</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="rgba(212,196,168,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
