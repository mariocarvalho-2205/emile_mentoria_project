'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/HeroSection';
import ForWho from '../components/ForWho';
import WhatYouLearn from '../components/WhatYouLearn';
import Transformation from '../components/Transformation';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Guarantee from '../components/Guarantee';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import FloatingCTA from '../components/FloatingCTA';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ProgressBar />
      <FloatingCTA />
      
      <main className="relative">
        <Hero />
        <ForWho />
        <WhatYouLearn />
        <Transformation />
        <Benefits />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}