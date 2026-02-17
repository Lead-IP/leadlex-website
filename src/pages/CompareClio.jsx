import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';

const comparisonData = [
  { feature: 'AI Team Member', leadlex: { has: true, note: 'Lexi — proactive AI colleague' }, clio: { has: false, note: 'No AI assistant' } },
  { feature: 'Relationship Scoring', leadlex: { has: true, note: '0–100 score per contact' }, clio: { has: false, note: 'Not available' } },
  { feature: 'Contact Deduplication', leadlex: { has: true, note: 'Fuzzy + exact matching, one-click merge' }, clio: { has: true, note: 'Basic duplicate detection' } },
  { feature: 'Pipeline Management', leadlex: { has: true, note: 'Visual pipeline with deal tracking' }, clio: { has: true, note: 'Pipeline with intake stages' } },
  { feature: 'Email Campaigns', leadlex: { has: true, note: 'Built-in campaign builder' }, clio: { has: true, note: 'Email drip campaigns' } },
  { feature: 'AI Prospector (250M+)', leadlex: { has: true, note: 'Search 250M+ contacts & companies' }, clio: { has: false, note: 'Not available' } },
  { feature: 'Event Mode', leadlex: { has: true, note: 'Conference & roadshow management' }, clio: { has: false, note: 'Not available' } },
  { feature: 'Business Card Scanner', leadlex: { has: true, note: 'AI-powered card scanning' }, clio: { has: false, note: 'Not available' } },
  { feature: 'Email Integration', leadlex: { has: true, note: 'Outlook & Gmail sync' }, clio: { has: true, note: 'Email tracking' } },
  { feature: 'Revenue Tracking', leadlex: { has: true, note: 'Deal value & pipeline analytics' }, clio: { has: true, note: 'Revenue reporting' } },
  { feature: 'Custom Reports', leadlex: { has: true, note: 'Flexible reporting' }, clio: { has: true, note: 'Built-in reports' } },
];

export default function CompareClio() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            LeadLex vs Clio Grow
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            See how LeadLex compares for law firm business development
          </motion.p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#033934] text-white">
                  <th className="text-left p-5 font-semibold">Feature</th>
                  <th className="text-center p-5 font-semibold">LeadLex</th>
                  <th className="text-center p-5 font-semibold">Clio Grow</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-5 font-medium text-[#033934]">{row.feature}</td>
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {row.leadlex.has
                          ? <Check className="w-5 h-5 text-green-600" />
                          : <X className="w-5 h-5 text-red-400" />}
                        <span className="text-xs text-gray-500">{row.leadlex.note}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {row.clio.has
                          ? <Check className="w-5 h-5 text-green-600" />
                          : <X className="w-5 h-5 text-red-400" />}
                        <span className="text-xs text-gray-500">{row.clio.note}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Where Each Excels */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Clio Grow Excels */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#033934] mb-6">Where Clio Grow Excels</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Native Clio Manage integration</span><p className="text-sm text-gray-600">Seamless data flow if you already use Clio Manage for practice management.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Client intake forms</span><p className="text-sm text-gray-600">Built-in customizable intake forms for new client onboarding.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Client portal</span><p className="text-sm text-gray-600">Self-service portal for clients to submit information and track status.</p></div>
                </li>
              </ul>
            </motion.div>

            {/* LeadLex Wins */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-[#033934] text-white">
              <h3 className="text-2xl font-semibold mb-6">Where LeadLex Wins</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">AI team member (Lexi)</span><p className="text-sm text-white/70">A proactive AI colleague that manages your business development — not just a tool.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">Relationship intelligence</span><p className="text-sm text-white/70">Automatic scoring of every contact relationship with decay alerts.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">AI Prospector (250M+ database)</span><p className="text-sm text-white/70">Find new contacts and companies for conferences, roadshows, and targeted outreach.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">Event management</span><p className="text-sm text-white/70">Purpose-built event mode for conferences, with business card scanning and follow-up workflows.</p></div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Lexi Difference */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fb8628]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#fb8628]" />
            <span className="text-[#fb8628] text-sm font-medium">The Lexi Difference</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6">
            An AI team member, not just a tool
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed">
            Clio Grow is a solid CRM for firms already in the Clio ecosystem. But it doesn't have an AI team member.
            LeadLex gives you Lexi — an AI colleague who scores relationships, flags dormant contacts, recommends who to reach out to,
            and helps you stay on top of your business development. It's the difference between a tool you use and a team member who works for you.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6">
            Ready to see the difference?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}>
            <Link to={createPageUrl('TryLeadLex')}>
              <Button size="lg" className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/30">
                Try LeadLex Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
