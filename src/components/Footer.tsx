'use client';

const socials = [
  {
    label: 'VK',
    href: 'https://vk.com/lesnoy_uyut',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M1 1h5.5l2.5 4L11.5 1H17l-5 7 5 9h-5.5L9 13l-2.5 4H1l5-9L1 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/lesnoy_uyut',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 9L16 2l-3 14-4.5-3.5L6 15V11.5L14 5 5.5 10.5 2 9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/74951234567',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M6 7c0 4 2 5.5 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M5 6.5A6.5 6.5 0 0113 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const navLinks = [
  { label: 'Дома',     href: '#houses' },
  { label: 'О нас',   href: '#about' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Карта',   href: '#map' },
  { label: 'Контакты',href: '#contacts' },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top */}
        <div className="grid gap-12 py-16 md:grid-cols-3 lg:grid-cols-4 border-b border-forest-mid">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2.5 mb-4"
              aria-label="Лесной Уют"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 3L6 16h7v13h6V16h7L16 3z" fill="#D4C4A8"/>
              </svg>
              <span className="font-display text-xl font-medium tracking-widest text-cream-sand">
                ЛЕСНОЙ УЮТ
              </span>
            </button>
            <p className="text-sm text-forest-moss leading-relaxed max-w-xs">
              Аренда загородных домов в Подмосковье. Природа, тишина, комфорт — всего 60–100 км от Москвы.
            </p>
            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-forest-mid text-forest-moss hover:border-forest-sage hover:text-forest-sage transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-forest-sage">Навигация</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-forest-moss hover:text-cream-sand transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-forest-sage">Контакты</h4>
            <ul className="flex flex-col gap-3 text-sm text-forest-moss">
              <li><a href="tel:+74951234567" className="hover:text-cream-sand transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:info@lesnoy-uyut.ru" className="hover:text-cream-sand transition-colors">info@lesnoy-uyut.ru</a></li>
              <li>г. Москва, ул. Лесная, 42</li>
              <li className="pt-2 text-xs">Пн–Пт: 09:00–20:00</li>
              <li className="text-xs">Сб–Вс: 10:00–18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-forest-moss sm:flex-row">
          <span>© {new Date().getFullYear()} Лесной Уют. Все права защищены.</span>
          <a href="#" className="hover:text-cream-sand transition-colors underline underline-offset-4">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
