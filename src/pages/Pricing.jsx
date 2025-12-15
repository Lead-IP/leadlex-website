import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: 'Solo',
    subtitle: 'For individual power users',
    price: 49,
    users: '1 user',
    credits: '250 AI credits / month',
    features: [
      'Mandate-first CRM (Hunting & Farming)',
      'Contact & company management',
      'AI Prospector access',
      'Contact & company enrichment',
      'AI summaries and reports'
    ],
    description: 'Best for solo practitioners who want structure, visibility, and intelligent follow-up without complexity.',
    additionalUser: null,
    highlighted: false
  },
  {
    name: 'Basic',
    subtitle: 'For small teams collaborating on client relationships',
    price: 119,
    users: '3 users',
    credits: '400 AI credits / month',
    features: [
      'Shared database across the firm',
      'Team collaboration (contacts, mandates, notes, tasks)',
      'All Solo plan features'
    ],
    description: 'Best for small firms that want shared visibility across mandates and client relationships.',
    additionalUser: '$49 / month per user',
    highlighted: false
  },
  {
    name: 'Pro',
    subtitle: 'For growing firms using data and AI to drive growth',
    price: 199,
    users: 'Up to 3 users',
    credits: '600 AI credits / month',
    features: [
      'Advanced reporting',
      'Revenue and pipeline reports (admin-only)',
      'All Basic plan features'
    ],
    description: 'Best for firms that want deeper insight into mandate performance, retention risk, and growth opportunities.',
    additionalUser: '$39 / month per user',
    highlighted: true
  },
  {
    name: 'Organization',
    subtitle: 'For firms with advanced collaboration and reporting needs',
    price: 499,
    users: 'Up to 7 users',
    credits: '1,200 AI credits / month',
    features: [
      'All Pro plan features',
      'Expanded reporting and analytics',
      'Optimized pricing for larger teams'
    ],
    description: 'Best for established teams that need firm-wide visibility and scalable collaboration.',
    additionalUser: '$29 / month per user',
    highlighted: false
  }
];

const faqs = [
  {
    question: 'Is pricing per user or per firm?',
    answer: 'Plans include a set number of users. Additional users can be added at a fixed monthly rate depending on the plan.'
  },
  {
    question: 'Can we change plans later?',
    answer: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
  },
  {
    question: 'Do all users share AI credits?',
    answer: 'Yes. AI credits are pooled at the account level so teams can allocate usage where it matters most.'
  },
  {
    question: 'Is this a traditional CRM?',
    answer: 'No. LeadLex is built specifically for B2B law firms. It focuses on mandates, client relationships, and execution — not sales funnels or marketing automation.'
  },
  {
    question: 'Is our data secure?',
    answer: 'Yes. Each firm operates in a fully isolated environment with role-based access and legal-grade data controls.'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4"
          >
            Pricing
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-[#033934] mb-6"
          >
            Simple plans. Built for how law firms grow.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            LeadLex pricing is transparent and predictable. Each plan includes mandate tracking, 
            relationship management, and AI support — with more collaboration, insight, and scale as your firm grows.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-gray-500 mt-4"
          >
            All plans are billed semi-annually
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#033934] text-white shadow-2xl scale-105 border-2 border-[#033934]'
                    : 'bg-white border-2 border-gray-200 hover:border-[#3f7a6c] hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#fb8628] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#033934]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#033934]'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                      / month
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${plan.highlighted ? 'text-white/60' : 'text-gray-500'}`}>
                    Billed semi-annually
                  </p>
                </div>
                
                <div className="mb-6 pb-6 border-b border-current/10">
                  <div className={`text-sm font-medium mb-2 ${plan.highlighted ? 'text-white' : 'text-[#033934]'}`}>
                    Includes:
                  </div>
                  <div className={`text-sm mb-1 ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                    • {plan.users}
                  </div>
                  <div className={`text-sm flex items-center gap-2 ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                    • {plan.credits}
                    <span className="text-xs">(account-level)</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 min-h-[10rem]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-[#fb8628]' : 'text-[#3f7a6c]'
                      }`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className={`text-xs mb-6 h-5 flex items-center ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.additionalUser && (
                    <>Additional users: <span className="font-medium ml-1">{plan.additionalUser}</span></>
                  )}
                </div>
                
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-[#fb8628] hover:bg-[#e5791f] text-white'
                      : 'bg-[#033934] hover:bg-[#033934]/90 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Credits Section */}
      <section className="py-24 bg-gradient-to-br from-[#033934] to-[#3f7a6c]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#fb8628]" />
              <h2 className="text-3xl font-semibold text-white">
                AI Credits — How They Work
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              LeadLex uses AI only where it saves time: prospecting, enrichment, summaries, and next-step suggestions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              'Each plan includes a monthly AI credit allocation',
              'Credits refresh monthly at the account level',
              'Unused credits roll over until used',
              'Additional credits can be purchased at any time',
              'Purchased credits never expire'
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#fb8628] flex-shrink-0 mt-1" />
                <span className="text-white/90">{point}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-center mt-12 leading-relaxed"
          >
            This makes AI predictable, controllable, and practical for legal workflows.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-[#033934] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about LeadLex pricing
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
                  <AccordionContent className="text-gray-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#033934] mb-6">
              Get Started
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the plan that fits your firm today — and scale as your team and pipeline grow.
            </p>
            <Button 
              size="lg"
              className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-10 py-6 text-lg rounded-xl"
            >
              Try LeadLex
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}