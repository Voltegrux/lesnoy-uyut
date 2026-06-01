'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Главная',  href: '#hero' },
  { label: 'Дома',     href: '#houses' },
  { label: 'О нас',    href: '#about' },
  { label: 'Отзывы',  href: '#testimonials' },
  { label: 'Карта',    href: '#map' },
  { label: 'Контакты', href: '#contacts' },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_24px_rgba(15,32,23,0.08)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2.5 group"
            aria-label="Лесной Уют"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="transition-transform group-hover:scale-110">
              <path d="M16 3L6 16h7v13h6V16h7L16 3z" fill={scrolled ? '#1C3829' : '#D4C4A8'} />
            </svg>
            <span className={`font-display text-xl font-medium tracking-widest transition-colors ${scrolled ? 'text-forest' : 'text-cream-sand'}`}>
              ЛЕСНОЙ УЮТ
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative font-body text-sm font-medium tracking-wide transition-colors ${
                  active === link.href
                    ? scrolled ? 'text-forest' : 'text-white'
                    : scrolled ? 'text-stone hover:text-forest' : 'text-cream-sand/80 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-current"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo('#contacts')}
            className={`hidden lg:flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
              scrolled
                ? 'bg-forest text-cream-sand hover:bg-forest-mid shadow-btn'
                : 'border border-cream-sand/50 text-cream-sand hover:bg-cream-sand/10'
            }`}
          >
            Забронировать
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center gap-[5px] lg:hidden p-2"
            aria-label="Меню"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className={`block h-px w-6 ${scrolled ? 'bg-forest' : 'bg-cream-sand'}`}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 6 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-forest-dark pt-24 px-8 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                  className="text-left font-display text-4xl font-light text-cream-sand/80 hover:text-cream-sand transition-colors"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              className="mt-auto mb-12 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-px w-full bg-forest-mid" />
              <p className="text-sm text-forest-sage">+7 (495) 123-45-67</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
