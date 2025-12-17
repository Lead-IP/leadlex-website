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
    question: 'What is LeadLex?',
    answer: 'LeadLex is a business development and relationship platform built specifically for B2B law firms. It helps firms manage mandates, client relationships, and follow-ups in a simple, legally aligned system.'
  },
  {
    question: 'Is LeadLex built specifically for law firms?',
    answer: 'Yes. LeadLex is designed exclusively for professional services and B2B law firms, using legal terminology, mandate-based workflows, and partner-friendly processes.'
  },
  {
    question: 'What types of law firms is LeadLex best for?',
    answer: 'LeadLex is ideal for small-to-midsized IP, M&A, corporate, and business law firms where relationships, long sales cycles, and repeat mandates matter.'
  },
  {
    question: 'How is LeadLex different from a traditional CRM?',
    answer: 'Traditional CRMs are built for sales teams. LeadLex is mandate-first, avoids sales jargon, and supports legal business development workflows like client retention and cross-practice growth.'
  },
  {
    question: 'Do partners actually use LeadLex?',
    answer: 'Yes. LeadLex is designed for adoption: mandates, notes, and follow-ups can be added in under 60 seconds, with minimal required fields and no unnecessary complexity.'
  },
  {
    question: 'Does LeadLex replace spreadsheets?',
    answer: 'Yes. LeadLex offers the simplicity of spreadsheets with added structure, reminders, reporting, and firm-wide visibility—without losing flexibility.'
  },
  {
    question: 'How does LeadLex use AI?',
    answer: 'LeadLex uses AI quietly in the background to suggest next steps, flag dormant mandates, enrich contacts, and summarize activity. AI never makes decisions and is always optional.'
  },
  {
    question: 'Is LeadLex GDPR compliant?',
    answer: 'Yes. LeadLex is built under German GDPR standards, operates with a formal Data Processing Agreement, and ensures strict data separation between firms.'
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