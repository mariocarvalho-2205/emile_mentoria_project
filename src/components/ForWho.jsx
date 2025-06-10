'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const targetAudience = [
  {
    icon: '💼',
    title: 'Profissionais Estagnados',
    description: 'Que querem sair da zona de conforto e criar uma renda extra'
  },
  {
    icon: '🎯',
    title: 'Empreendedores Iniciantes',
    description: 'Que têm ideias mas não sabem por onde começar'
  },
  {
    icon: '💡',
    title: 'Freelancers Sobrecarregados',
    description: 'Que querem escalar seus negócios e trabalhar menos'
  },
  {
    icon: '🚀',
    title: 'Pessoas com Sonhos Grandes',
    description: 'Que querem transformar conhecimento em resultado'
  }
];

export default function ForWho() {
  return (
    <section className="py-20 bg-[#4D2C5E] px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Esta mentoria é para você que:
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Identifique-se com pelo menos um dos perfis abaixo e descubra como esta mentoria pode transformar sua realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <CheckIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Se você se identificou com algum desses perfis...
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Você está no lugar certo! Nossa mentoria foi criada especificamente para pessoas como você, 
              que têm o desejo de mudança mas precisam de direcionamento e estratégia.
            </p>
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Quero Fazer Parte da Transformação
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}