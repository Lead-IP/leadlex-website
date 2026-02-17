import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';

const comparisonData = [
  { feature: 'AI Team Member', leadlex: { has: true, note: 'Lexi — proactive AI colleague' }, other: { has: false, note: 'No AI assistant' } },
  { feature: 'Modern UI', leadlex: { has: true, note: 'Clean, modern interface' }, other: { has: false, note: 'Outdated interface' } },
  { feature: 'Relationship Intelligence', leadlex: { has: true, note: '0–100 scoring with decay alerts' }, other: { has: true, note: 'Relationship mapping for large firms' } },
  { feature: 'Pipeline Management', leadlex: { has: true, note: 'Visual mandate pipelines' }, other: { has: true, note: 'Opportunity tracking' } },
  { feature: 'Email Integration', leadlex: { has: true, note: 'Outlook & Gmail sync' }, other: { has: true, note: 'Deep Outlook/Exchange integration' } },
  { feature: 'AI Prospector (250M+)', leadlex: { has: true, note: 'Search 250M+ contacts & companies' }, other: { has: false, note: 'Not available' } },
  { feature: 'Event Mode', leadlex: { has: true, note: 'Conference & roadshow management' }, other: { has: false, note: 'Limited event support' } },
  { feature: 'Implementation Time', leadlex: { has: true, note: 'Minutes to get started' }, other: { has: false, note: 'Months of implementation' } },
  { feature: 'Price', leadlex: { has: true, note: 'Affordable, transparent' }, other: { has: false, note: 'Enterprise pricing' } },
  { feature: 'Self-Service', leadlex: { has: true, note: 'Self-service setup' }, other: { has: false, note: 'Requires consultants' } },
];

export default function CompareInterAction() {
  return (
    <div>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            LeadLex vs InterAction
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Modern AI-powered BD vs. traditional enterprise CRM
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
                  <th className="text-center p-5 font-semibold">InterAction</th>
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
              <h3 className="text-2xl font-semibold text-[#033934] mb-6">Where InterAction Excels</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Deep Outlook/Exchange integration</span><p className="text-sm text-gray-600">Automatic relationship capture from email and calendar at an enterprise level.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Relationship mapping for large firms</span><p className="text-sm text-gray-600">Sophisticated relationship intelligence across hundreds of lawyers and thousands of contacts.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium text-[#033934]">Enterprise reporting</span><p className="text-sm text-gray-600">Advanced reporting and analytics for firm-wide business development metrics.</p></div>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-[#033934] text-white">
              <h3 className="text-2xl font-semibold mb-6">Where LeadLex Wins</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">Modern UX</span><p className="text-sm text-white/70">Clean, intuitive interface that lawyers actually want to use — no training required.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">AI team member (Lexi)</span><p className="text-sm text-white/70">Proactive AI that recommends actions, scores relationships, and enriches data automatically.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">Instant setup</span><p className="text-sm text-white/70">Start in minutes, not months. No consultants, no complex implementation projects.</p></div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#fb8628] mt-0.5 flex-shrink-0" />
                  <div><span className="font-medium">Built for mid-size firms</span><p className="text-sm text-white/70">Right-sized features and pricing for firms that don't need (or want) enterprise complexity.</p></div>
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
            Enterprise power, startup simplicity
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed">
            InterAction is built for the world's largest firms — with the implementation timeline and pricing to match.
            LeadLex delivers modern AI-powered business development that you can start using today, with an AI team member
            that makes every lawyer more effective without months of training and configuration.
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
