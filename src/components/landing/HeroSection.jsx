import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #033934 0%, #3f7a6c 100%)'
        }}
      />
      
      {/* Abstract Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full border border-white/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
          className="absolute top-40 right-[5%] w-[700px] h-[700px] rounded-full border border-white/10"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.06, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-white/5 rounded-3xl backdrop-blur-sm"
        />
        
        {/* Abstract UI Preview */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative">
            <div className="w-[420px] h-[320px] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-white/25 rounded-full" />
                    <div className="w-24 h-2 bg-white/15 rounded-full" />
                  </div>
                  <div className="w-16 h-6 bg-[#fb8628]/60 rounded-full" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/15" />
                  <div className="flex-1 space-y-2">
                    <div className="w-40 h-3 bg-white/20 rounded-full" />
                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="w-16 h-6 bg-white/20 rounded-full" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10" />
                  <div className="flex-1 space-y-2">
                    <div className="w-28 h-3 bg-white/15 rounded-full" />
                    <div className="w-32 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="w-16 h-6 bg-white/15 rounded-full" />
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div className="w-20 h-2 bg-white/20 rounded-full" />
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10" />
                    <div className="w-8 h-8 rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-8 -left-12 w-[180px] bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#033934] to-[#3f7a6c]" />
                <div className="space-y-1">
                  <div className="w-16 h-2 bg-gray-200 rounded-full" />
                  <div className="w-12 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>
              <div className="text-xs text-gray-500">Follow-up due</div>
              <div className="text-sm font-semibold text-[#033934]">Tomorrow, 9:00 AM</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block text-white/70 text-sm font-medium tracking-wide uppercase mb-6">
              Relationship Intelligence for Law Firms
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
          >
            Business development
            <br />
            <span className="text-white/80">without the CRM friction</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
          >
            Win new mandates. Protect key client relationships. Stay on top of follow-ups. 
            Built specifically for IP, M&A, and corporate law firms.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg"
              className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/20"
            >
              Try LeadLex
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 text-base rounded-xl transition-all duration-300 bg-transparent"
            >
              See how it works
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}