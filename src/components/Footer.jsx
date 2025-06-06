'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Mentoria Digital Pro
            </h3>
            <p className="text-gray-300 mb-4">
              Transformando conhecimento em resultados desde 2020. 
              Mais de 500 vidas já foram impactadas positivamente.
            </p>
            <div className="flex gap-4">
              {[
                { icon: '📧', href: 'mailto:contato@mentoria.com', label: 'Email' },
                { icon: '💬', href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
                { icon: '📱', href: 'https://instagram.com/mentoria', label: 'Instagram' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center transition-colors"
                  title={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Úteis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {[
                'Política de Privacidade',
                'Termos de Uso',
                'Política de Reembolso',
                'Suporte ao Cliente'
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Entre em Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span>📧</span>
                <span>contato@mentoriadigitalpro.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>💬</span>
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>⏰</span>
                <span>Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 mb-6">
            <h5 className="text-yellow-400 font-semibold mb-2">⚠️ Aviso Legal Importante</h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Os resultados apresentados nesta página são baseados em casos reais de nossos alunos, mas não garantimos 
              que você obterá os mesmos resultados. O sucesso depende de diversos fatores, incluindo dedicação, 
              aplicação das estratégias ensinadas e circunstâncias individuais. Esta mentoria oferece conhecimento 
              e ferramentas, mas o sucesso final depende exclusivamente do seu empenho e aplicação.
            </p>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Mentoria Digital Pro. Todos os direitos reservados.</p>
            <p className="mt-2">
              Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio 
              dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}