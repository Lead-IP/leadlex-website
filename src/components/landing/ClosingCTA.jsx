import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Win more mandates',
  'Retain key clients',
  'Institutionalize relationships'
];

export default function ClosingCTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #033934 0%, #3f7a6c 100%)'
            }}
          />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 max-w-3xl mx-auto"
            >
              Start building stronger
              <br />client relationships today
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              If your firm wants to grow without adding administrative burden, 
              LeadLex is built for you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-white/80"
                >
                  <CheckCircle className="w-5 h-5 text-[#fb8628]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg"
                className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/30 hover:scale-105"
              >
                Try LeadLex
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}