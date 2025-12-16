import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden rounded-b-[60px] pt-24 md:pt-0">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)'
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
        
        {/* Dashboard Cards Preview */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative space-y-4">
            {/* Card 1 - Add Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-[380px] bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-400/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/40" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="w-28 h-3 bg-white/30 rounded-full" />
                  <div className="w-40 h-2 bg-white/20 rounded-full" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <div className="w-1 h-4 bg-white/40 rounded-full" />
                </div>
              </div>
            </motion.div>
            
            {/* Card 2 - Add Deal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-[380px] bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fb8628]/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg bg-[#fb8628]/40" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="w-24 h-3 bg-white/30 rounded-full" />
                  <div className="w-36 h-2 bg-white/20 rounded-full" />
                </div>
                <div className="w-16 h-7 rounded-lg bg-[#fb8628]/40 backdrop-blur-sm" />
              </div>
            </motion.div>
            
            {/* Card 3 - Add Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="w-[380px] bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-400/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg bg-green-500/40" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="w-32 h-3 bg-white/30 rounded-full" />
                  <div className="w-44 h-2 bg-white/20 rounded-full" />
                </div>
              </div>
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
              asChild
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </motion.div>

          {/* Trusted By Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-white/60 text-sm uppercase tracking-wide mb-6">Trusted by</p>
            
            {/* Auto-scrolling carousel for all views */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex items-center gap-8 opacity-90"
                animate={{
                  x: [0, -1200]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/a590d6199_664de210b6699fae528c7460_Marksandclerklogosmall-p-500_edited.png"
                  alt="Marks & Clerk"
                  className="h-10 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/7452823c5_64f9d1a3b9f53f30bb73251b_21_edited.png"
                  alt="mceller"
                  className="h-10 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/982845fff_Untitleddesign3.png"
                  alt="graulund consulting"
                  className="h-14 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/efbed030b_Untitleddesign2.png"
                  alt="Maiwald"
                  className="h-14 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/4a43d6ac6_Untitleddesign4.png"
                  alt="Wild Schnyder"
                  className="h-14 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/2651aace3_Yourparagraphtext.png"
                  alt="Partnell"
                  className="h-10 w-auto brightness-0 invert flex-shrink-0"
                />
                {/* Duplicate set for seamless loop */}
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/a590d6199_664de210b6699fae528c7460_Marksandclerklogosmall-p-500_edited.png"
                  alt="Marks & Clerk"
                  className="h-10 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/7452823c5_64f9d1a3b9f53f30bb73251b_21_edited.png"
                  alt="mceller"
                  className="h-10 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/982845fff_Untitleddesign3.png"
                  alt="graulund consulting"
                  className="h-14 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/efbed030b_Untitleddesign2.png"
                  alt="Maiwald"
                  className="h-14 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/4a43d6ac6_Untitleddesign4.png"
                  alt="Wild Schnyder"
                  className="h-14 w-auto brightness-0 invert flex-shrink-0"
                />
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/2651aace3_Yourparagraphtext.png"
                  alt="Partnell"
                  className="h-10 w-auto brightness-0 invert flex-shrink-0"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}