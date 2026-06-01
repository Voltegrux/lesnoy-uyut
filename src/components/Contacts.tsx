'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9A1.5 1.5 0 0116.5 16h-13A1.5 1.5 0 012 14.5v-9zM2 5.5l8 5.5 8-5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@lesnoy-uyut.ru',
    href: 'mailto:info@lesnoy-uyut.ru',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 4.5A1.5 1.5 0 014.5 3h.75c.414 0 .788.254.937.64l1 2.5c.163.408.057.875-.263 1.17L5.8 8.3C6.8 10.1 9 12.2 10.8 13.1l1.25-.85a1 1 0 011.19-.18l2.5 1.25a1 1 0 01.55.9v.78A1.5 1.5 0 0114.8 16.5h-.3C7.9 16.5 3 11.7 3 5.8v-.3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Телефон',
    value: '+7 (495) 123-45-67',
    href: 'tel:+74951234567',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.13 2 3 5.13 3 9c0 3.38 2.2 6.24 5.24 7.24-.03-.24-.05-.47-.05-.74 0-.49.08-.96.23-1.4L9.7 11.8A4 4 0 016 8a4 4 0 014-4 4 4 0 014 4 4 4 0 01-1.38 3 7 7 0 001.15 3.26C15.75 13.26 17 11.27 17 9c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+7 (495) 123-45-67',
    href: 'https://wa.me/74951234567',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3C6.13 3 3 6.13 3 10c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 10l1.5 1.5L13 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Telegram',
    value: '@lesnoy_uyut',
    href: 'https://t.me/lesnoy_uyut',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    label: 'Адрес',
    value: 'г. Москва, ул. Лесная, 42, офис 8',
    href: '#map',
  },
];

export default function Contacts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.phone.trim()) e.phone = 'Введите телефон';
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone)) e.phone = 'Некорректный номер';
    if (!form.message.trim()) e.message = 'Введите сообщение';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contacts" className="py-28 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="mb-16 flex flex-col items-center text-center">
          <motion.span className="section-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            Связаться
          </motion.span>
          <motion.h2 className="mt-3 font-display text-5xl font-light text-forest md:text-6xl"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}>
            Контакты
          </motion.h2>
          <motion.span className="dec-line mx-auto"
            style={{ transformOrigin: 'left' }}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }} />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl font-light text-forest mb-8">Мы всегда на связи</h3>
            <div className="flex flex-col gap-5">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card hover:shadow-card-hover transition-shadow group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream-dark text-forest-sage group-hover:bg-forest group-hover:text-cream-sand transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-stone">{item.label}</div>
                    <div className="text-sm font-medium text-forest">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Working hours */}
            <motion.div
              className="mt-8 rounded-2xl border border-cream-sand bg-white p-6"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="font-body text-sm font-semibold text-forest mb-3">Режим работы</div>
              <div className="grid grid-cols-2 gap-2 text-sm text-stone">
                <span>Пн–Пт</span><span className="text-forest font-medium">09:00 – 20:00</span>
                <span>Сб–Вс</span><span className="text-forest font-medium">10:00 – 18:00</span>
                <span>Поддержка</span><span className="text-forest font-medium">24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                className="flex h-full flex-col items-center justify-center text-center rounded-2xl bg-white p-10 shadow-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-forest"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8 18l7 7 13-13" stroke="#D4C4A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <h3 className="font-display text-3xl text-forest">Заявка отправлена!</h3>
                <p className="mt-3 text-stone">Мы свяжемся с вами в течение 30 минут.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }); }}
                  className="mt-8 text-sm text-forest-sage underline underline-offset-4"
                >
                  Отправить ещё одну заявку
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-card lg:p-10">
                <h3 className="font-display text-3xl font-light text-forest mb-8">Оставить заявку</h3>

                {(['name', 'phone', 'message'] as const).map((field, i) => {
                  const labels: Record<string, string> = { name: 'Ваше имя', phone: 'Телефон', message: 'Сообщение' };
                  const placeholders: Record<string, string> = {
                    name: 'Иван Иванов',
                    phone: '+7 (___) ___-__-__',
                    message: 'Расскажите о ваших пожеланиях…',
                  };
                  const isTextarea = field === 'message';

                  return (
                    <div key={field} className={`mb-5 ${i > 0 ? '' : ''}`}>
                      <label className="mb-1.5 block text-xs font-medium text-stone uppercase tracking-wide">
                        {labels[field]}
                      </label>
                      {isTextarea ? (
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder={placeholders[field]}
                          rows={4}
                          className={`form-field w-full resize-none rounded-xl border bg-cream px-4 py-3.5 text-sm text-text placeholder-stone/50 transition-all ${
                            errors[field] ? 'border-red-400' : 'border-cream-sand'
                          }`}
                        />
                      ) : (
                        <input
                          type={field === 'phone' ? 'tel' : 'text'}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          placeholder={placeholders[field]}
                          className={`form-field w-full rounded-xl border bg-cream px-4 py-3.5 text-sm text-text placeholder-stone/50 transition-all ${
                            errors[field] ? 'border-red-400' : 'border-cream-sand'
                          }`}
                        />
                      )}
                      {errors[field] && (
                        <p className="mt-1 text-xs text-red-500">{errors[field]}</p>
                      )}
                    </div>
                  );
                })}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl bg-forest py-4 text-sm font-medium tracking-wide text-cream-sand shadow-btn transition-all hover:shadow-[0_8px_32px_rgba(28,56,41,0.4)] disabled:opacity-70"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {loading ? 'Отправляем…' : 'Отправить заявку'}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-forest-mid transition-transform duration-500 group-hover:translate-x-0" />
                </motion.button>

                <p className="mt-4 text-center text-xs text-stone/60">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="underline hover:text-forest">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
