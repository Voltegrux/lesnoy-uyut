'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./MapClient'), { ssr: false, loading: () => (
  <div className="flex h-full w-full items-center justify-center bg-cream-dark rounded-2xl">
    <div className="text-sm text-stone">Загрузка карты…</div>
  </div>
)});

export default function Map() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="map" className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="mb-12 flex flex-col items-center text-center">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          >
            Расположение
          </motion.span>
          <motion.h2
            className="mt-3 font-display text-5xl font-light text-forest md:text-6xl"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Наши дома на карте
          </motion.h2>
          <motion.span
            className="dec-line mx-auto"
            style={{ transformOrigin: 'left' }}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
          />
          <motion.p
            className="max-w-md text-stone"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Все дома расположены в Подмосковье — до 100 км от МКАД.
            Нажмите на метку, чтобы узнать подробнее.
          </motion.p>
        </div>

        <motion.div
          className="h-[500px] w-full overflow-hidden rounded-2xl shadow-card-hover"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <MapClient />
        </motion.div>

        {/* House legend */}
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            { name: 'Дом у озера', area: 'Истринский р-н', price: '12 000' },
            { name: 'Лесная усадьба', area: 'Одинцовский р-н', price: '18 000' },
            { name: 'Скандинавский коттедж', area: 'Красногорский р-н', price: '9 500' },
            { name: 'Охотничий домик', area: 'Наро-Фоминский р-н', price: '22 000' },
            { name: 'Уютное гнёздышко', area: 'Солнечногорский р-н', price: '6 500' },
            { name: 'Горная вилла', area: 'Ленинский р-н', price: '35 000' },
          ].map((h) => (
            <div
              key={h.name}
              className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card"
            >
              <svg width="20" height="24" viewBox="0 0 36 42" fill="none">
                <path d="M18 1C9.716 1 3 7.716 3 16c0 11.25 15 25 15 25s15-13.75 15-25c0-8.284-6.716-15-15-15z" fill="#1C3829"/>
                <circle cx="18" cy="16" r="5" fill="#D4C4A8"/>
              </svg>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-forest truncate">{h.name}</div>
                <div className="text-xs text-stone">{h.area} · от {h.price} ₽/сут</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
