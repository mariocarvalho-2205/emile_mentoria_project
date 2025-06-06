'use client';

import { motion } from 'framer-motion';

const transformationSteps = [
  {
    phase: 'ANTES',
    title: 'Situação Atual',
    icon: '😟',
    color: 'from-red-500 to-orange-500',
    items: ['Sem direção clara', 'Renda instável', 'Frustração constante', 'Sem tempo livre']
  },
  {
    phase: 'DURANTE',
    title: 'Processo de Transformação',
    icon: '🚀',
    color: 'from-yellow-500 to-orange-500',
    items: ['Clareza de propósito', 'Plano estruturado', 'Mentoria especializada', 'Ação consistente']
  },
  {
    phase: 'DEPOIS',
    title: 'Nova Realidade',
    icon: '😊',
    color: 'from-green-500 to-emerald-500',
    items: ['Liberdade financeira', 'Propósito definido', 'Resultados consistentes', 'Vida equilibrada']
  }
];

export default function Transformation() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              Sua Jornada de Transformação
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como nossa mentoria vai transformar sua realidade em apenas 30 dias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transform -translate-y-1/2 z-0" />
          
          {transformationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} rounded-full text-white font-bold text-sm mb-4`}>
                  {step.phase}
                </div>
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full flex-shrink-0`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para sua transformação?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Mais de 500 pessoas já passaram por essa jornada e hoje têm uma vida completamente diferente. 
              Você será o próximo?
            </p>
            <motion.a
              href="https://hotmart.com/checkout/SEU-LINK"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              🚀 Começar Minha Transformação Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}