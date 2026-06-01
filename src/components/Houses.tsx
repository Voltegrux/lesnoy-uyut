'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { houses } from '@/lib/data';

function HouseCard({ house, index }: { house: typeof houses[0]; index: number }) {
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-shadow duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={house.image}
          alt={house.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
        />
        {house.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-forest/90 px-3 py-1 text-xs font-medium tracking-wide text-cream-sand backdrop-blur-sm">
            {house.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-medium text-forest">{house.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone line-clamp-2">{house.description}</p>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-5 text-sm text-stone">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 12V6a1 1 0 011-1h10a1 1 0 011 1v6M1 12h14M5 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {house.bedrooms} спальни
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            до {house.guests} гостей
          </span>
        </div>

        <div className="mt-auto pt-5 flex items-end justify-between border-t border-cream-dark mt-5">
          <div>
            <span className="text-xs text-stone">от</span>
            <div className="font-display text-2xl font-medium text-forest leading-none">
              {house.price.toLocaleString('ru-RU')} ₽
            </div>
            <span className="text-xs text-stone">/ сутки</span>
          </div>
          <motion.button
            className="rounded-xl bg-cream-dark px-4 py-2.5 text-sm font-medium text-forest transition-all hover:bg-forest hover:text-cream-sand"
            whileTap={{ scale: 0.96 }}
          >
            Подробнее
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Houses() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="houses" className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className="mb-16 flex flex-col items-center text-center">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Каталог
          </motion.span>
          <motion.h2
            className="mt-3 font-display text-5xl font-light text-forest md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Наши дома
          </motion.h2>
          <motion.span className="dec-line mx-auto"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.p
            className="max-w-lg text-stone"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Каждый дом — тщательно отобранный объект с проверенным качеством и полным комфортом
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {houses.map((house, i) => (
            <HouseCard key={house.id} house={house} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
