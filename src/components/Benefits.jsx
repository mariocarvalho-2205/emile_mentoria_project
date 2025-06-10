'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '⚡',
    title: 'Resultados em 30 Dias',
    description: 'Metodologia comprovada para ver resultados já no primeiro mês'
  },
  {
    icon: '🎯',
    title: 'Mentoria Personalizada',
    description: 'Acompanhamento individual para suas necessidades específicas'
  },
  {
    icon: '📚',
    title: 'Material Exclusivo',
    description: 'Templates, planilhas e ferramentas práticas para aplicar'
  },
  {
    icon: '👥',
    title: 'Comunidade VIP',
    description: 'Networking com outros empreendedores de sucesso'
  },
  {
    icon: '🔄',
    title: 'Suporte Contínuo',
    description: 'Acesso vitalício ao conteúdo e atualizações gratuitas'
  },
  {
    icon: '💰',
    title: 'ROI Garantido',
    description: 'Invista uma vez e colha os frutos para sempre'
  }
];

const comparison = [
  {
    feature: 'Conteúdo atualizado',
    ours: true,
    others: false
  },
  {
    feature: 'Mentoria personalizada',
    ours: true,
    others: false
  },
  {
    feature: 'Comunidade ativa',
    ours: true,
    others: false
  },
  {
    feature: 'Suporte vitalício',
    ours: true,
    others: false
  },
  {
    feature: 'Garantia de 30 dias',
    ours: true,
    others: true
  },
  {
    feature: 'Material prático',
    ours: true,
    others: false
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[#2B2D42] px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Por que escolher nossa mentoria?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra os diferenciais que fazem desta mentoria a escolha certa para sua transformação
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Nossa Mentoria vs. Outros Cursos
          </h3>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-slate-700/50">
              <div></div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 px-4 rounded-xl">
                  Nossa Mentoria
                </div>
              </div>
              <div className="text-center">
                <div className="bg-slate-700 text-gray-300 font-semibold py-2 px-4 rounded-xl">
                  Outros Cursos
                </div>
              </div>
            </div>
            
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 p-6 border-b border-slate-700/30 last:border-b-0"
              >
                <div className="text-white font-medium">{item.feature}</div>
                <div className="text-center">
                  {item.ours ? (
                    <div className="text-green-400 text-2xl">✓</div>
                  ) : (
                    <div className="text-red-400 text-2xl">✗</div>
                  )}
                </div>
                <div className="text-center">
                  {item.others ? (
                    <div className="text-green-400 text-2xl">✓</div>
                  ) : (
                    <div className="text-red-400 text-2xl">✗</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}