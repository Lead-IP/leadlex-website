import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Row-Level Security',
    description: 'Data access controlled at the record level. Each user sees only what they should.'
  },
  {
    icon: Eye,
    title: 'Ownership-Based Access',
    description: 'Client relationships stay private until explicitly shared. Full control over visibility.'
  },
  {
    icon: Users,
    title: 'Role-Based Views',
    description: 'Separate interfaces for partners, lawyers, and admins. Right information, right people.'
  },
  {
    icon: Shield,
    title: 'Legal-Grade Privacy',
    description: 'Built with law firm confidentiality requirements in mind from day one.'
  }
];

export default function SecuritySection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#033934] to-[#3f7a6c] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#033934]">Data Protection</h3>
                    <p className="text-sm text-gray-500">Enterprise security enabled</p>
                  </div>
                </div>
                
                {/* Access Levels Visual */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#033934]/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#033934]">P</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Partner View</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#033934]" />
                      <div className="w-2 h-2 rounded-full bg-[#033934]" />
                      <div className="w-2 h-2 rounded-full bg-[#033934]" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#3f7a6c]/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#3f7a6c]">A</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Associate View</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#3f7a6c]" />
                      <div className="w-2 h-2 rounded-full bg-[#3f7a6c]" />
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500">G</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Guest Access</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-[#033934]/5 rounded-3xl" />
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4"
            >
              Security & Trust
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6"
            >
              Built for professional
              <br />confidentiality
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-10"
            >
              Law firms handle sensitive information. LeadLex is designed with privacy and 
              data protection at its core, not as an afterthought.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#033934]/5 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#033934]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#033934] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}