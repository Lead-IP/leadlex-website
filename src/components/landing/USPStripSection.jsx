import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Search, Zap } from 'lucide-react';

const usps = [
  {
    icon: DollarSign,
    title: 'Replaces a $60-80K/yr hire',
    description: 'Lexi works 24/7 and never forgets a follow-up'
  },
  {
    icon: Search,
    title: '250M+ contacts',
    description: 'Find anyone for any conference or roadshow'
  },
  {
    icon: Zap,
    title: 'Your CRM actually gets used',
    description: '3-field capture. AI handles the rest.'
  }
];

export default function USPStripSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#3f7a6c] mb-4">
                <usp.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#033934] mb-2">
                {usp.title}
              </h3>
              <p className="text-gray-600">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
