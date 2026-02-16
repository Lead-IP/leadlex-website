import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Users, Clock, TrendingDown } from 'lucide-react';

const painPoints = [
{
  icon: Clock,
  title: 'Missed follow-ups',
  description: 'Important conversations fall through the cracks after conferences and meetings'
},
{
  icon: Users,
  title: 'Partner-dependent relationships',
  description: 'Client knowledge lives in individual heads, not in firm systems'
},
{
  icon: TrendingDown,
  title: 'Dormant clients',
  description: 'Key accounts go quiet without anyone noticing until it\'s too late'
},
{
  icon: AlertCircle,
  title: 'Lost opportunities',
  description: 'Cross-practice potential and warm referrals slip away untracked'
}];


export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4">

            The Challenge
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6">

            The reality of legal business development
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-gray-600 leading-relaxed">B2B legal work is relationship-driven and long-cycle. Yet many firms still rely on employees to work on spreadsheets, inboxes, and informal tracking to manage mandates and client relationships - all non-billable hours.




          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) =>
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group">

              <div className="h-full p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 hover:border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-[#033934]/5 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#033934]/10">
                  <point.icon className="w-6 h-6 text-[#033934]" />
                </div>
                <h3 className="text-lg font-semibold text-[#033934] mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-[#033934]/5 border border-[#033934]/10">
            <p className="text-3xl font-bold text-[#033934]">80%</p>
            <p className="text-sm text-gray-600 mt-1">of law firms have a CRM, but only 20% say it's effective</p>
            <p className="text-xs text-gray-400 mt-2">LSSO State of CRM 2023</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#033934]/5 border border-[#033934]/10">
            <p className="text-3xl font-bold text-[#033934]">62%</p>
            <p className="text-sm text-gray-600 mt-1">of clients switch firms due to poor communication</p>
            <p className="text-xs text-gray-400 mt-2">World Metrics 2026</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#033934]/5 border border-[#033934]/10">
            <p className="text-3xl font-bold text-[#033934]">40%</p>
            <p className="text-sm text-gray-600 mt-1">of lawyers still use Excel for business development</p>
            <p className="text-xs text-gray-400 mt-2">PwC Law Firms Survey 2024</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center">

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#033934]/5 to-[#3f7a6c]/5 border border-[#033934]/10">
            <div className="w-2 h-2 rounded-full bg-[#fb8628]" />
            <p className="text-[#033934] font-medium">
              LeadLex gives law firms a simple system to stay proactive
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}