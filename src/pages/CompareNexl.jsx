import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';

const comparisonData = [
  { feature: 'AI Team Member', leadlex: { has: true, note: 'Lexi — proactive AI colleague' }, other: { has: false, note: 'No AI assistant' } },
  { feature: 'Relationship Intelligence', leadlex: { has: true, note: '0–100 scoring with decay alerts' }, other: { has: true, note: 'Auto-captures from email' } },
  { feature: 'Proactive Suggestions', leadlex: { has: true, note: 'Daily recommendations' }, other: { has: false, note: 'Limited suggestions' } },
  { feature: 'Pipeline Management', leadlex: { has: true, note: 'Visual mandate pipelines' }, other: { has: true, note: 'Deal tracking' } },
  { feature: 'Email Auto-Capture', leadlex: { has: true, note: 'BCC + inbox integration' }, other: { has: true, note: 'Core strength — automatic capture' } },
  { feature: 'AI Prospector (250M+)', leadlex: { has: true, note: 'Search 250M+ contacts & companies' }, other: { has: false, note: 'Not available' } },
  { feature: 'Event Mode', leadlex: { has: true, note: 'Conference & roadshow management' }, other: { has: false, note: 'Not available' } },
  { feature: 'Campaign System', leadlex: { has: true, note: 'Built-in email campaigns' }, other: { has: false, note: 'Basic email features' } },
  { feature: 'Business Card Scanner', leadlex: { has: true, note: 'AI-powered card scanning' }, other: { has: false, note: 'Not available' } },
  { feature: 'Revenue Tracking', leadlex: { has: true, note: 'Deal value & pipeline analytics' }, other: { has: true, note: 'Revenue reporting' } },
];

export default function CompareNexl() {
  return (
    <div>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            LeadLex vs Nexl
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            AI-powered BD platform vs. relationship-first CRM
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#033934] text-white">
                  <th className="text-left p-5 font-semibold">Feature</th>
                  <th className="text-center p-5 font-semibold">LeadLex</th>
                  <th className="text-center p-5 font-semibold">Nexl</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-5 font-medium text-[#033934]">{row.feature}</td>
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {row.leadlex.has ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-400" />}
                        <span className="text-xs text-gray-500">{row.leadlex.note}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {row.other.has ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-400" />}
                        <span className="text-xs text-gray-500">{row.other.note}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#033934] mb-6">Where Nexl Excels</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Automatic email/calendar capture</span><p className="text-sm text-gray-600">Relationship data captured automatically from email and calendar — zero manual input.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Clean UX</span><p className="text-sm text-gray-600">Simple, modern interface focused on relationship intelligence and pipeline management.</p></div>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-[#033934] text-white">
              <h3 className="text-2xl font-semibold mb-6">Where LeadLex Wins</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">AI team member (Lexi)</span><p className="text-sm text-white/70">A proactive AI colleague who recommends actions, not just a dashboard of data.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">AI Prospector (250M+ database)</span><p className="text-sm text-white/70">Find new contacts and companies for conferences, roadshows, and targeted outreach.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">Event mode & campaigns</span><p className="text-sm text-white/70">Purpose-built conference management, business card scanning, and email campaign system.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">More features at similar price</span><p className="text-sm text-white/70">Prospector, campaigns, event mode, and AI insights — all included.</p></div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fb8628]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#fb8628]" />
            <span className="text-[#fb8628] text-sm font-medium">The Lexi Difference</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6">
            From relationship data to relationship action
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed">
            Nexl does a great job capturing relationship data automatically. LeadLex goes further — with an AI team member
            that turns that data into action. Proactive suggestions, prospecting, campaigns, and event management give you
            a complete BD platform, not just a relationship dashboard.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6">
            Ready to see the difference?
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to={createPageUrl('TryLeadLex')}>
              <Button size="lg" className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/30">
                Try LeadLex Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
