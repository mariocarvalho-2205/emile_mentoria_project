'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 48 hours from now
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 mb-8"
    >
      <div className="text-center">
        <p className="text-red-400 font-semibold mb-4">⚠️ OFERTA LIMITADA - TERMINA EM:</p>
        <div className="flex justify-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
              </div>
              <div className="text-xs text-gray-400 mt-1 capitalize">{unit}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">Após esse prazo, o valor volta ao normal</p>
      </div>
    </motion.div>
  );
}