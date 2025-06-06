'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const modules = [
  {
    number: '01',
    title: 'Mindset Empreendedor',
    duration: '2 horas',
    description: 'Desenvolva a mentalidade certa para o sucesso',
    topics: ['Quebra de crenças limitantes', 'Visão de abundância', 'Foco em resultados', 'Disciplina e consistência'],
    icon: '🧠'
  },
  {
    number: '02',
    title: 'Identificação de Oportunidades',
    duration: '3 horas',
    description: 'Descubra nichos lucrativos e validação de ideias',
    topics: ['Pesquisa de mercado', 'Análise de concorrência', 'Validação de MVP', 'Definição de público'],
    icon: '🎯'
  },
  {
    number: '03',
    title: 'Estratégias de Marketing Digital',
    duration: '4 horas',
    description: 'Domine as principais estratégias para atrair clientes',
    topics: ['Funil de vendas', 'Marketing de conteúdo', 'Redes sociais', 'Email marketing'],
    icon: '📈'
  },
  {
    number: '04',
    title: 'Vendas e Conversão',
    duration: '3 horas',
    description: 'Aprenda a converter prospects em clientes pagantes',
    topics: ['Copywriting persuasivo', 'Objeções e fechamento', 'Precificação estratégica', 'Follow-up eficaz'],
    icon: '💰'
  },
  {
    number: '05',
    title: 'Automatização e Escala',
    duration: '2 horas',
    description: 'Sistematize processos para crescer sem trabalhar mais',
    topics: ['Automação de vendas', 'Delegação eficaz', 'Sistemas de gestão', 'Indicadores de performance'],
    icon: '⚙️'
  },
  {
    number: '06',
    title: 'Plano de Ação Personalizado',
    duration: '1 hora',
    description: 'Crie seu roadmap para os próximos 90 dias',
    topics: ['Metas SMART', 'Cronograma de execução', 'Métricas de acompanhamento', 'Revisões periódicas'],
    icon: '📋'
  }
];

export default function WhatYouLearn() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              O que você vai dominar
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            6 módulos práticos que vão te levar do zero à primeira venda em 30 dias
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Module List */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeModule === index
                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/50'
                    : 'bg-slate-800/30 border-slate-700/50 hover:border-indigo-500/30'
                } border backdrop-blur-sm rounded-2xl p-6`}
                onClick={() => setActiveModule(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{module.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-indigo-400">MÓDULO {module.number}</span>
                      <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-gray-300">{module.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Module Details */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sticky top-8"
          >
            <div className="text-4xl mb-4">{modules[activeModule].icon}</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-indigo-400">
                MÓDULO {modules[activeModule].number}
              </span>
              <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded-full">
                {modules[activeModule].duration}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              {modules[activeModule].title}
            </h3>
            
            <p className="text-lg text-gray-300 mb-6">
              {modules[activeModule].description}
            </p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">O que você vai aprender:</h4>
              <ul className="space-y-3">
                {modules[activeModule].topics.map((topic, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
