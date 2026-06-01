import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Лесной Уют — Аренда загородных домов в Подмосковье',
  description:
    'Уютные загородные дома для отдыха в Подмосковье. Аренда посуточно: дома у озера, лесные усадьбы, скандинавские коттеджи. Баня, камин, природа. Бронируйте онлайн.',
  keywords:
    'аренда загородного дома, дом посуточно, дача напрокат, Подмосковье, коттедж, баня, отдых на природе',
  authors: [{ name: 'Лесной Уют' }],
  openGraph: {
    title: 'Лесной Уют — Аренда загородных домов в Подмосковье',
    description:
      'Уютные загородные дома для отдыха. Аренда посуточно: дома у озера, лесные усадьбы, скандинавские коттеджи.',
    url: 'https://lesnoy-uyut.ru',
    siteName: 'Лесной Уют',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Лесной Уют — загородные дома',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Лесной Уют — Аренда загородных домов',
    description: 'Уютные дома на природе. Бронируйте онлайн.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
