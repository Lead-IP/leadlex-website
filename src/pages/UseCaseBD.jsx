import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ContactDialog from '../components/ContactDialog';
import { Target, Mail, BarChart3, TrendingUp, Clock, Quote, ArrowRight } from 'lucide-react';

const painPoints = [
  'CRM adoption across the firm is stubbornly low',
  'Building campaigns takes hours of manual work',
  'No visibility into partner relationships or pipeline health',
];

const solutions = [
  { icon: Target, title: 'Proactive prospector', desc: 'Daily suggestions for who to contact — across the entire firm. Lexi keeps everyone\'s pipeline moving.' },
  { icon: Mail, title: 'Campaign system', desc: 'Build email sequences in minutes, not hours. Templates, scheduling, and tracking built in.' },
  { icon: BarChart3, title: 'Pipeline reports', desc: 'Real-time visibility into pipeline health, deal stages, and team performance.' },
  { icon: TrendingUp, title: 'Relationship intelligence', desc: 'Firm-wide relationship scoring. See coverage gaps and cross-selling opportunities.' },
];

export default function UseCaseBD() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
            For BD Teams
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            The BD platform that lawyers actually use
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Drive adoption, run campaigns, and see your pipeline — all in one place
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-semibold text-[#033934] mb-6">The challenge</h2>
              <ul className="space-y-4">
                {painPoints.map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-10 rounded-2xl bg-[#033934] text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#fb8628] mb-3">Minutes</p>
              <p className="text-white/70 text-lg">to build campaigns — not hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-semibold text-[#033934] text-center mb-12">How Lexi helps</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#033934]/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-[#033934]" />
                </div>
                <h3 className="text-lg font-semibold text-[#033934] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#033934]/5 border border-[#033934]/10">
            <Quote className="w-8 h-8 text-[#fb8628] mb-4" />
            <p className="text-lg text-[#033934] italic leading-relaxed mb-4">
              "Finally a BD platform that our lawyers actually want to use. The campaign builder alone has saved us hours every week."
            </p>
            <p className="text-sm text-gray-600 font-medium">— Laura Moreno, Business Development</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] mb-6">
            Try LeadLex today
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Button size="lg" onClick={() => setContactOpen(true)}
              className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/30">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
