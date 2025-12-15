import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Is this a traditional CRM?',
    answer: 'No. LeadLex is built specifically for B2B law firms. It focuses on mandates, client relationships, and execution — not sales funnels or marketing automation.'
  },
  {
    question: 'How is AI used in LeadLex?',
    answer: 'AI is used only where it saves time: flagging dormant relationships, suggesting next actions, enriching contact data, and helping you find prospects from 250M+ contacts. Every suggestion is explainable and optional.'
  },
  {
    question: 'How does pricing work?',
    answer: 'Plans include a set number of users and monthly AI credits. Additional users can be added at a fixed rate. All plans include mandate tracking, relationship management, and AI support.'
  },
  {
    question: 'Is our data secure?',
    answer: 'Yes. Each firm operates in a fully isolated environment with role-based access and legal-grade data controls. We are GDPR compliant and use EU-based infrastructure.'
  },
  {
    question: 'Can we try before committing?',
    answer: 'Yes. We offer demos and trial periods so you can test LeadLex with your team before making a decision.'
  },
  {
    question: 'Do all users share AI credits?',
    answer: 'Yes. AI credits are pooled at the account level so teams can allocate usage where it matters most.'
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#033934] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about LeadLex
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 hover:border-[#3f7a6c] transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-[#033934] hover:text-[#3f7a6c] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}