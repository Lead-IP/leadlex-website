import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, 
  Zap, 
  Users, 
  Target, 
  FileText, 
  Calendar,
  Search 
} from 'lucide-react';

const capabilities = [
  {
    icon: LayoutGrid,
    title: 'Mandate Pipelines',
    description: 'Separate Hunting pipelines for new mandates and Farming pipelines for key-client growth. Track opportunities in one clear view.',
    visual: 'pipeline'
  },
  {
    icon: Zap,
    title: 'Fast, Frictionless Capture',
    description: 'Log mandates, meeting notes, and follow-ups in under a minute. Three-field quick add ensures real adoption by partners.',
    visual: 'capture'
  },
  {
    icon: Users,
    title: 'Relationship Ownership',
    description: 'See who owns each client relationship, how active it is, and where coverage gaps exist — without exposing sensitive data.',
    visual: 'ownership'
  },
  {
    icon: Search,
    title: 'AI Prospector',
    description: 'Access over 250 million contacts and companies instantly. Find anyone for conference prep, roadshows, or refreshing old relationships — with emails, LinkedIn, and more.',
    visual: 'prospector'
  },
  {
    icon: Target,
    title: 'AI-Powered Insights',
    description: 'Lexi AI flags dormant mandates, suggests next best actions, and enriches contact information. Quietly supportive.',
    visual: 'ai'
  },
  {
    icon: Calendar,
    title: 'Event & Conference Mode',
    description: 'Fast, structured networking capture at events. Never lose a valuable connection made at a conference again.',
    visual: 'events'
  }
];

const VisualElement = ({ type }) => {
  const visuals = {
    pipeline: (
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1 h-8 rounded-lg bg-[#033934]/10" />
          <div className="flex-1 h-8 rounded-lg bg-[#3f7a6c]/10" />
          <div className="flex-1 h-8 rounded-lg bg-[#fb8628]/10" />
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-lg bg-[#033934]/15" />
          <div className="w-12 h-12 rounded-lg bg-[#033934]/10" />
          <div className="w-12 h-12 rounded-lg bg-[#3f7a6c]/10" />
        </div>
      </div>
    ),
    capture: (
      <div className="space-y-2">
        <div className="h-6 rounded bg-gray-100" />
        <div className="h-6 rounded bg-gray-100" />
        <div className="h-6 rounded bg-gray-100" />
        <div className="w-20 h-8 rounded-lg bg-[#fb8628]/20 mt-3" />
      </div>
    ),
    ownership: (
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#033934]/20 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-[#3f7a6c]/20 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-[#fb8628]/20 border-2 border-white" />
        </div>
        <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#033934]/30 to-[#3f7a6c]/10" />
      </div>
    ),
    prospector: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-2 border border-gray-200">
          <div className="w-4 h-4 rounded bg-[#033934]/20" />
          <div className="flex-1 h-2 bg-gray-200 rounded" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 bg-gradient-to-br from-[#3f7a6c]/10 to-[#3f7a6c]/5 rounded-lg border border-[#3f7a6c]/20" />
          <div className="h-10 bg-gradient-to-br from-[#3f7a6c]/10 to-[#3f7a6c]/5 rounded-lg border border-[#3f7a6c]/20" />
          <div className="h-10 bg-gradient-to-br from-[#fb8628]/10 to-[#fb8628]/5 rounded-lg border border-[#fb8628]/20" />
          <div className="h-10 bg-gradient-to-br from-[#3f7a6c]/10 to-[#3f7a6c]/5 rounded-lg border border-[#3f7a6c]/20" />
        </div>
      </div>
    ),
    ai: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#fb8628]/20 to-[#fb8628]/5 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#fb8628]/40" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-2 rounded-full bg-gray-100 w-full" />
          <div className="h-2 rounded-full bg-gray-100 w-3/4" />
        </div>
      </div>
    ),
    events: (
      <div className="grid grid-cols-3 gap-1">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`h-6 rounded ${i === 2 ? 'bg-[#fb8628]/20' : 'bg-gray-100'}`} 
          />
        ))}
      </div>
    ),
    notes: (
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded bg-[#033934]/10" />
          <div className="flex-1 h-2 rounded-full bg-gray-100 mt-2" />
        </div>
        <div className="h-12 rounded bg-gray-50 border border-gray-100" />
      </div>
    )
  };
  
  return visuals[type] || null;
};

export default function CapabilitiesSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4"
          >
            Capabilities
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6"
          >
            Built for how law firms actually grow
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Every feature designed around legal workflows, not generic sales processes.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#033934]/10 to-[#3f7a6c]/5 flex items-center justify-center transition-all duration-300 group-hover:from-[#033934]/15 group-hover:to-[#3f7a6c]/10">
                    <capability.icon className="w-6 h-6 text-[#033934]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#033934] mb-3">
                  {capability.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {capability.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <VisualElement type={capability.visual} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}