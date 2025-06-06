// app/components/Guarantee.tsx
'use client';

import { motion } from 'framer-motion';

export default function Guarantee() {
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
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Garantia Total de Satisfação
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos tão confiantes nos resultados da nossa mentoria que oferecemos uma garantia única no mercado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-8 shadow-[0_0_60px_rgba(52,211,153,0.3)]"
              >
                <div className="bg-white rounded-full p-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-600 mb-2">30</div>
                    <div className="text-green-600 font-semibold text-lg">DIAS</div>
                    <div className="text-gray-600 text-sm font-medium">GARANTIA</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Guarantee Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Risco <span className="text-green-400">ZERO</span> para você!
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">30 dias completos</strong> para testar toda a metodologia
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Reembolso de 100%</strong> do seu investimento se não ficar satisfeito
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Sem perguntas</strong> - basta solicitar o reembolso
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Sem burocracia</strong> - processo simples e rápido
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                🛡️ Nossa Promessa para Você
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Se você seguir nossa metodologia passo a passo e não ver resultados concretos em 30 dias, 
                devolvemos 100% do seu dinheiro. Assumimos todo o risco para que você possa focar apenas no 
                seu crescimento e sucesso.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔒',
                title: 'Pagamento Seguro',
                description: 'Transações protegidas pela Hotmart, uma das maiores plataformas do Brasil'
              },
              {
                icon: '⚡',
                title: 'Acesso Imediato',
                description: 'Receba o acesso completo assim que o pagamento for confirmado'
              },
              {
                icon: '🤝',
                title: 'Compromisso Real',
                description: 'Mais de 500 alunos transformaram suas vidas com nossa metodologia'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Guarantee Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              O único risco é <span className="text-red-400">continuar onde você está!</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Enquanto você hesita, outros estão transformando suas vidas e construindo o futuro dos seus sonhos. 
              Não deixe mais tempo passar!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}