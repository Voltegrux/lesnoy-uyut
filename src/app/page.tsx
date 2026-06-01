'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Houses from '@/components/Houses';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Header />
      <main>
        <Hero />
        <Houses />
        <About />
        <Testimonials />
        <Map />
        <Contacts />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
