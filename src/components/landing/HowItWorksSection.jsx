import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Capture',
    description: 'Add contacts and companies from meetings, events, or referrals in seconds. Quick-add forms designed for busy professionals.'
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Enrich',
    description: 'AI automatically enriches profiles with relevant context, company information, and relationship insights.'
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Track',
    description: 'Move opportunities through your pipeline. Get reminders for follow-ups and alerts for dormant relationships.'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Convert',
    description: 'Close mandates with full context. Relationship history, notes, and next steps always at hand.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4"
          >
            Process
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6"
          >
            How it works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From first contact to closed mandate in four simple steps.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#033934]/20 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#033934] to-[#3f7a6c] flex items-center justify-center shadow-lg shadow-[#033934]/20">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-[#033934]">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#033934] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}