import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Award, Quote } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    label: 'GDPR Compliant'
  },
  {
    icon: Lock,
    label: 'Row-Level Security'
  },
  {
    icon: Database,
    label: 'German Data Standards'
  },
  {
    icon: Award,
    label: 'SOC2 Ready'
  }
];

const testimonials = [
  {
    quote: "I've always felt the need for a tool tailored specifically for the legal community, and that's exactly what LeadLex provides.",
    author: "Donald Schnyder",
    firm: "Wild Schnyder"
  },
  {
    quote: "During our LinkedIn based sales leads project we especially appreciated the great flexibility and constructive cooperation to make this joint endeavor a success.",
    author: "Alexander Müller",
    firm: "Maiwald GmbH"
  },
  {
    quote: "LeadLex helped us become a truly data-driven company and achieve a proper data foundation, key for our business development purposes.",
    author: "Laura Moreno",
    firm: "Moeller IP Advisors"
  }
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4">
              Security & Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-8">
              Built for professional confidentiality
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#3f7a6c] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#033934]/5 flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-5 h-5 text-[#033934]" />
                  </div>
                  <span className="text-sm font-medium text-[#033934]">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4">
              Testimonials
            </span>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Quote className="w-5 h-5 text-[#033934]/30 flex-shrink-0" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="ml-8">
                  <p className="font-semibold text-[#033934] text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.firm}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
