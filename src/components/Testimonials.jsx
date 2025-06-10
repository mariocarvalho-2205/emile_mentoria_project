'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Ex-funcionária pública',
    image: '/api/placeholder/100/100',
    result: 'R$ 15.000/mês',
    testimonial: 'Em 45 dias já estava faturando mais que meu salário. A mentoria mudou completamente minha vida financeira!',
    video: true
  },
  {
    name: 'João Santos',
    role: 'Freelancer',
    image: '/api/placeholder/100/100',
    result: 'R$ 8.000/mês',
    testimonial: 'Consegui sistematizar meu negócio e agora trabalho metade do tempo que trabalhava antes.',
    video: false
  },
  {
    name: 'Ana Costa',
    role: 'Empreendedora',
    image: '/api/placeholder/100/100',
    result: 'R$ 25.000/mês',
    testimonial: 'Aprendi a escalar meu negócio de forma inteligente. Hoje tenho uma equipe e mais tempo livre.',
    video: true
  },
  {
    name: 'Carlos Oliveira',
    role: 'Consultor',
    image: '/api/placeholder/100/100',
    result: 'R$ 12.000/mês',
    testimonial: 'A metodologia é realmente eficaz. Em 30 dias já via resultados concretos no meu faturamento.',
    video: false
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              Histórias de Sucesso
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça algumas das pessoas que transformaram suas vidas com nossa mentoria
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {[
            { number: '500+', label: 'Vidas Transformadas' },
            { number: 'R$ 2M+', label: 'Faturamento Gerado' },
            { number: '98%', label: 'Taxa de Satisfação' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-indigo-500"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                  {testimonials[currentIndex].video && (
                    <div className="ml-auto">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        VÍDEO
                      </div>
                    </div>
                  )}
                </div>
                
                <blockquote className="text-lg text-gray-300 mb-6 italic">
                  "{testimonials[currentIndex].testimonial}"
                </blockquote>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4">
                  <div className="text-sm text-green-400 font-semibold mb-1">RESULTADO ALCANÇADO:</div>
                  <div className="text-2xl font-bold text-white">{testimonials[currentIndex].result}</div>
                </div>
              </div>
              
              <div className="relative">
                {testimonials[currentIndex].video ? (
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300">Clique para assistir o depoimento</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8 text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <p className="text-gray-300">Depoimento em texto</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-indigo-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}