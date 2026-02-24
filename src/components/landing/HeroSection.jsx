import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ContactDialog from '../ContactDialog';

export default function HeroSection() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <>
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
      <section className="relative min-h-[110vh] flex items-center overflow-hidden rounded-b-[60px] pt-24 md:pt-0">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Copy */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span className="inline-block text-white/70 text-sm font-medium tracking-wide uppercase mb-6">
                  YOUR AI TEAM MEMBER FOR LEGAL BD
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
              >
                Meet Lexi. She runs your business development.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-10"
              >
                Lexi manages your CRM, preps your meetings, and never forgets a follow-up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => setContactDialogOpen(true)}
                  className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/20"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 text-base rounded-xl transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href="#how-it-works">See How It Works</a>
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

                {/* Auto-scrolling carousel */}
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
                        ease: "linear"
                      }
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
                      className="h-16 w-auto brightness-0 invert flex-shrink-0"
                    />
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/4a43d6ac6_Untitleddesign4.png"
                      alt="Wild Schnyder"
                      className="h-16 w-auto brightness-0 invert flex-shrink-0"
                    />
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/2651aace3_Yourparagraphtext.png"
                      alt="Partnell"
                      className="h-24 w-auto brightness-0 invert flex-shrink-0"
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
                      className="h-16 w-auto brightness-0 invert flex-shrink-0"
                    />
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/4a43d6ac6_Untitleddesign4.png"
                      alt="Wild Schnyder"
                      className="h-16 w-auto brightness-0 invert flex-shrink-0"
                    />
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/2651aace3_Yourparagraphtext.png"
                      alt="Partnell"
                      className="h-24 w-auto brightness-0 invert flex-shrink-0"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - WhatsApp Chat Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-[#033934] px-5 py-4 flex items-center gap-3">
                  <img
                    src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                    alt="Lexi"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold">Lexi</h3>
                      <span className="text-white/60 text-sm">·</span>
                      <span className="text-white/60 text-sm">AI Team Member</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-white/60 text-xs">online</span>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-gray-50 px-4 py-6 space-y-4 h-[500px] overflow-y-auto">
                  {/* Lexi Message 1 */}
                  <div className="flex items-start gap-2">
                    <img
                      src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                      alt="Lexi"
                      className="w-6 h-6 rounded-full mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[260px]">
                        <p className="text-sm text-gray-800">
                          Good morning! You have 3 deals that haven't moved in 8+ days. The BMW IP matter is the most urgent — Sarah hasn't responded since the proposal.
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 ml-2 mt-1 block">9:14 AM</span>
                    </div>
                  </div>

                  {/* Lexi Message 2 */}
                  <div className="flex items-start gap-2">
                    <img
                      src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                      alt="Lexi"
                      className="w-6 h-6 rounded-full mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[260px]">
                        <p className="text-sm text-gray-800">
                          Want me to draft a follow-up for her?
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 ml-2 mt-1 block">9:14 AM</span>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div>
                      <div className="bg-[#3f7a6c] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-[260px]">
                        <p className="text-sm text-white">
                          Yes, keep it warm and reference the INTA deadline
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 mr-2 mt-1 block text-right">9:15 AM</span>
                    </div>
                  </div>

                  {/* Lexi Message 3 */}
                  <div className="flex items-start gap-2">
                    <img
                      src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                      alt="Lexi"
                      className="w-6 h-6 rounded-full mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[260px]">
                        <p className="text-sm text-gray-800">
                          Done. Email drafted and in your inbox for review. I also added a follow-up reminder for Thursday.
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 ml-2 mt-1 block">9:15 AM</span>
                    </div>
                  </div>

                  {/* Lexi Message 4 */}
                  <div className="flex items-start gap-2">
                    <img
                      src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                      alt="Lexi"
                      className="w-6 h-6 rounded-full mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[260px]">
                        <p className="text-sm text-gray-800">
                          By the way — you're meeting 4 people at the Munich IP Summit next week that overlap with your network. Want me to prep briefing cards?
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 ml-2 mt-1 block">9:16 AM</span>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex items-start gap-2">
                    <img
                      src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                      alt="Lexi"
                      className="w-6 h-6 rounded-full mt-1 flex-shrink-0"
                    />
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
