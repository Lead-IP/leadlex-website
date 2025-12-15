import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I've always felt the need for a tool tailored specifically for the legal community, and that's exactly what LeadLex provides.",
    author: "Donald Schnyder",
    position: "Managing Partner",
    firm: "Wild Schnyder",
    initials: "DS"
  },
  {
    quote: "During our LinkedIn based sales leads project we especially appreciated the great flexibility and constructive cooperation to make this joint endeavor a success.",
    author: "Alexander Müller",
    position: "Director of Business Development",
    firm: "Maiwald GmbH",
    initials: "AM"
  },
  {
    quote: "LeadLex helped us become a truly data-driven company and achieve a proper data foundation, key for our business development purposes.",
    author: "Laura Moreno",
    position: "Head of Business Development",
    firm: "Moeller IP Advisors",
    initials: "LM"
  }
];

export default function TestimonialsSection() {
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
            Testimonials
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight"
          >
            What Our Clients Are Saying
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#033934]/5 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-[#033934]" />
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#033934] to-[#3f7a6c] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#033934]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.firm}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}