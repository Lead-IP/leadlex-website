import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Database, Search, BarChart3, Target, Calendar, Mail } from 'lucide-react';

const aiFeatures = [
  {
    icon: Target,
    title: 'Proactive prospecting',
    description: 'Tells you who to contact today and why, based on relationship health and deal activity'
  },
  {
    icon: Calendar,
    title: 'Event intelligence',
    description: 'Scan attendee lists, find warm connections, and prep your meetings automatically'
  },
  {
    icon: Mail,
    title: 'Automated campaigns',
    description: 'From scanned contact to personalized email sequence in clicks, not hours'
  },
  {
    icon: BarChart3,
    title: 'Relationship intelligence',
    description: 'Tracks relationship health across your network. Flags contacts going cold before you lose them'
  },
  {
    icon: Search,
    title: 'AI Prospector',
    description: 'Search 250M+ contacts and companies for conference prep and roadshows'
  },
  {
    icon: Database,
    title: 'Enriches information',
    description: 'Contact and company data enhanced automatically'
  }
];

export default function AISection() {
  return (
    <section id="lexi-ai" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #033934 0%, #3f7a6c 100%)'
        }}
      />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#fb8628]" />
              <span className="text-white/80 text-sm font-medium">AI Team Member</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6"
            >
              Meet Lexi, your AI team member
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-10"
            >
              Lexi scans your network, finds opportunities, and launches personalized outreach — all while you practice law. From event prep to automated follow-ups, she handles the workflow so you don't have to.
            </motion.p>
            
            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#fb8628]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              {/* AI Suggestion Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#fb8628]/20 to-[#fb8628]/5 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#fb8628]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-[#033934]">Lexi, AI Team Member</span>
                      <span className="text-xs text-gray-400">2 min ago</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Follow up with <span className="font-medium text-[#033934]">Smith & Partners</span> — 
                      last contact was 45 days ago.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-4 rounded-lg bg-[#033934] text-white text-sm font-medium hover:bg-[#033934]/90 transition-colors">
                    Schedule follow-up
                  </button>
                  <button className="py-2 px-4 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors">
                    Snooze
                  </button>
                </div>
              </div>
              
              {/* Activity Items */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Contact enriched with LinkedIn data</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Company news detected: M&A activity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#fb8628]/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}