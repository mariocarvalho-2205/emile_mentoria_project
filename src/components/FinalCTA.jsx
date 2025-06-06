'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 6 hours from now for urgency
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 6);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:30px_30px]" />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sua Nova Vida Começa Agora
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Não deixe mais um dia passar sem tomar a decisão que pode transformar completamente sua realidade financeira
              </motion.p>

              {/* Price Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 mb-6">
                  <p className="text-red-400 font-semibold mb-2">🔥 OFERTA POR TEMPO LIMITADO</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl text-gray-400 line-through">De R$ 997</span>
                    <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      R$ 497
                    </span>
                  </div>
                  <p className="text-gray-300">ou 12x de R$ 49,70 sem juros</p>
                </div>

                {/* Countdown */}
                <div className="flex justify-center gap-4 mb-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-3 min-w-[70px]">
                        <div className="text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                      </div>
                      <div className="text-sm text-gray-400 mt-1 capitalize">{unit}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Main CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <a
                  href="https://hotmart.com/checkout/SEU-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] mb-4"
                  >
                    🚀 QUERO TRANSFORMAR MINHA VIDA AGORA
                  </motion.button>
                </a>
                <p className="text-sm text-gray-400">
                  ✅ Acesso imediato • ✅ Garantia de 30 dias • ✅ Suporte vitalício
                </p>
              </motion.div>

              {/* Bonus Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">🎁 BÔNUS EXCLUSIVOS (Valor: R$ 497)</h3>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  {[
                    {
                      title: 'Template de Funil de Vendas',
                      value: 'R$ 197',
                      description: 'Modelos prontos para acelerar suas vendas'
                    },
                    {
                      title: 'Planilha de Gestão Financeira',
                      value: 'R$ 147',
                      description: 'Controle completo das suas finanças'
                    },
                    {
                      title: 'Acesso VIP ao Grupo Telegram',
                      value: 'R$ 97',
                      description: 'Networking com outros empreendedores'
                    }
                  ].map((bonus, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                      <div className="text-green-400 font-semibold text-sm mb-1">{bonus.value}</div>
                      <h4 className="text-white font-bold mb-2">{bonus.title}</h4>
                      <p className="text-gray-300 text-sm">{bonus.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Risk Reversal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl">🛡️</div>
                  <h3 className="text-xl font-bold text-white">RISCO ZERO para você!</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Experimente por 30 dias. Se não ficar 100% satisfeito, devolvemos todo seu dinheiro. 
                  Sem perguntas, sem burocracia.
                </p>
                <div className="text-green-400 font-semibold">
                  O único risco é continuar onde está hoje!
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}