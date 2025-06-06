// app/components/FAQ.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Para quem é indicada esta mentoria?',
    answer: 'Esta mentoria é ideal para empreendedores iniciantes, profissionais que querem empreender, pessoas que buscam uma renda extra, e qualquer pessoa que deseja aprender estratégias comprovadas de marketing digital e vendas online. Não é necessário ter experiência prévia.'
  },
  {
    question: 'Quanto tempo leva para ver os primeiros resultados?',
    answer: 'Com dedicação e aplicação das estratégias ensinadas, nossos alunos costumam ver os primeiros resultados entre 30 a 60 dias. Alguns alunos mais dedicados conseguem resultados ainda mais rápidos, já nas primeiras semanas.'
  },
  {
    question: 'Preciso de muito dinheiro para começar?',
    answer: 'Não! Uma das grandes vantagens do marketing digital é que você pode começar com pouco investimento. Ensinamos estratégias para começar praticamente do zero e como reinvestir os primeiros lucros para escalar o negócio.'
  },
  {
    question: 'Vou ter suporte durante a mentoria?',
    answer: 'Sim! Você terá acesso ao nosso grupo exclusivo no Telegram, onde poderá tirar dúvidas, compartilhar resultados e fazer networking com outros alunos. Além disso, temos sessões de Q&A ao vivo mensalmente.'
  },
  {
    question: 'O conteúdo fica disponível para sempre?',
    answer: 'Sim! Após a compra, você terá acesso vitalício a todo o conteúdo da mentoria, incluindo futuras atualizações. Você pode assistir no seu próprio ritmo, quantas vezes quiser.'
  },
  {
    question: 'Funciona para qualquer nicho de mercado?',
    answer: 'Absolutamente! As estratégias que ensinamos são universais e podem ser aplicadas em qualquer nicho de mercado. Você aprenderá os fundamentos que funcionam em todos os segmentos.'
  },
  {
    question: 'E se eu não conseguir implementar sozinho?',
    answer: 'Não se preocupe! Além do suporte no grupo, fornecemos templates prontos, checklists passo a passo e exemplos práticos para facilitar a implementação. Você nunca estará sozinho nessa jornada.'
  },
  {
    question: 'Posso fazer mesmo trabalhando em tempo integral?',
    answer: 'Sim! A mentoria foi desenvolvida pensando em pessoas que têm pouco tempo disponível. Você pode implementar as estratégias nos fins de semana e horários livres, dedicando apenas algumas horas por semana.'
  },
  {
    question: 'Como funciona a garantia de satisfação?',
    answer: 'Oferecemos garantia incondicional de 30 dias. Se você aplicar nossa metodologia e não ver resultados, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Dúvidas Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Esclarecemos as principais dúvidas sobre nossa mentoria
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e nossa equipe te ajudará com qualquer questão
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
            >
              💬 Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}