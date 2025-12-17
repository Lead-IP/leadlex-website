import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from '../components/SEOHead';

const faqSections = [
  {
    title: 'About LeadLex',
    questions: [
      {
        question: 'What is the best CRM for law firms?',
        answer: 'The best CRM for law firms is one built specifically for legal workflows. LeadLex is designed for B2B law firms and focuses on mandates, client relationships, and follow-ups rather than sales funnels.'
      },
      {
        question: 'Is LeadLex a CRM built specifically for lawyers?',
        answer: 'Yes. LeadLex is built exclusively for B2B law firms and professional services. It uses legal terminology and workflows aligned with how lawyers manage mandates and client relationships.'
      },
      {
        question: 'What types of law firms use LeadLex?',
        answer: 'LeadLex is designed for small-to-midsized IP, M&A, corporate, and business law firms where long sales cycles, repeat mandates, and relationships are critical.'
      },
      {
        question: 'How is LeadLex different from generic CRMs?',
        answer: 'Generic CRMs are built for sales teams. LeadLex is mandate-first, avoids sales jargon, and supports client acquisition and retention in a way that reflects legal business development.'
      },
      {
        question: 'Is LeadLex suitable for small law firms?',
        answer: 'Yes. LeadLex works well for small teams and does not require full data entry or complex setup. Firms can start small and scale usage over time.'
      }
    ]
  },
  {
    title: 'Comparison with Other CRMs',
    questions: [
      {
        question: 'Is LeadLex a HubSpot alternative for law firms?',
        answer: 'Yes. LeadLex is a strong HubSpot alternative for law firms that want legal-specific workflows, lower costs, and simpler adoption without marketing automation tools.'
      },
      {
        question: 'Why don't many law firms use HubSpot?',
        answer: 'Many law firms find HubSpot too complex, sales-driven, and expensive for legal business development. LeadLex is built specifically for law firm needs.'
      },
      {
        question: 'Is LeadLex cheaper than HubSpot or Salesforce?',
        answer: 'Yes. LeadLex is significantly more affordable than HubSpot and Salesforce, especially for firms with multiple partners and fee earners.'
      },
      {
        question: 'Does LeadLex include more users per plan?',
        answer: 'Yes. LeadLex plans include multiple users by default and allow additional users at a predictable, lower cost than most CRMs.'
      }
    ]
  },
  {
    title: 'Pricing, Trial & Adoption',
    questions: [
      {
        question: 'Does LeadLex offer a free trial?',
        answer: 'Yes. LeadLex offers a 7-day free trial so firms can test workflows before committing.'
      },
      {
        question: 'Do we need a long-term contract?',
        answer: 'No. LeadLex plans are billed semi-annually, and firms can upgrade or downgrade as their needs change.'
      },
      {
        question: 'Can we start with one team and expand later?',
        answer: 'Yes. Many firms start with a small group of users and expand adoption firm-wide over time.'
      },
      {
        question: 'Is onboarding or training required?',
        answer: 'No formal training is required. LeadLex is designed to be intuitive for lawyers familiar with spreadsheets and basic CRM concepts.'
      }
    ]
  },
  {
    title: 'Business Development & Mandates',
    questions: [
      {
        question: 'How do law firms track mandates in LeadLex?',
        answer: 'LeadLex uses mandate pipelines to track opportunities from first contact through engagement and follow-on work.'
      },
      {
        question: 'What are Hunting and Farming pipelines?',
        answer: 'Hunting pipelines track new mandate acquisition. Farming pipelines focus on existing clients, retention, and cross-practice growth.'
      },
      {
        question: 'Can LeadLex help with client retention?',
        answer: 'Yes. LeadLex highlights inactive relationships, overdue follow-ups, and retention risks through simple dashboards and AI suggestions.'
      },
      {
        question: 'Does LeadLex support cross-selling between practices?',
        answer: 'Yes. LeadLex shows which practices already serve a client and where cross-practice opportunities exist.'
      },
      {
        question: 'Can LeadLex replace spreadsheets for BD tracking?',
        answer: 'Yes. LeadLex provides spreadsheet-like simplicity with added structure, reminders, reporting, and firm-wide visibility.'
      }
    ]
  },
  {
    title: 'AI & Technology',
    questions: [
      {
        question: 'How does LeadLex use AI?',
        answer: 'LeadLex uses AI quietly in the background to suggest next steps, flag dormant mandates, enrich contacts, and summarize activity.'
      },
      {
        question: 'Does LeadLex use automated decision-making?',
        answer: 'No. LeadLex does not make automated decisions. All AI outputs are non-binding recommendations and require human action.'
      },
      {
        question: 'Is AI optional in LeadLex?',
        answer: 'Yes. AI features are optional, explainable, and can be ignored or disabled without limiting core functionality.'
      },
      {
        question: 'Is customer data used to train AI models?',
        answer: 'No. Customer data is never used to train general AI models or shared across firms.'
      }
    ]
  },
  {
    title: 'Security, GDPR & Compliance',
    questions: [
      {
        question: 'Is LeadLex GDPR compliant?',
        answer: 'Yes. LeadLex is built under German GDPR standards and operates with a formal Data Processing Agreement under Art. 28 GDPR.'
      },
      {
        question: 'Where is LeadLex data stored?',
        answer: 'Data is stored primarily in the EU using GDPR-compliant infrastructure.'
      },
      {
        question: 'Who owns the data in LeadLex?',
        answer: 'The customer retains full ownership of all data. LeadLex acts solely as a data processor.'
      },
      {
        question: 'Can firms control user access and permissions?',
        answer: 'Yes. LeadLex offers role-based access and separate admin views to control data visibility.'
      }
    ]
  },
  {
    title: 'Events & Networking',
    questions: [
      {
        question: 'Is LeadLex useful for conferences and networking?',
        answer: 'Yes. LeadLex includes an Event & Conference Mode to capture contacts, notes, and follow-ups during and after events.'
      },
      {
        question: 'Can LeadLex track follow-ups after events?',
        answer: 'Yes. Event contacts can be linked to mandates, tasks, and pipelines to ensure structured follow-up.'
      }
    ]
  },
  {
    title: 'Final Decision Questions',
    questions: [
      {
        question: 'Why choose LeadLex over other CRMs?',
        answer: 'LeadLex is built specifically for B2B law firms. It is simpler, more affordable, allows more users, and aligns with how lawyers actually manage relationships and mandates.'
      },
      {
        question: 'How quickly can we start using LeadLex?',
        answer: 'Most firms can start using LeadLex within hours, without consultants or lengthy setup.'
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="FAQ - LeadLex CRM for Law Firms | Frequently Asked Questions"
        description="Common questions about LeadLex: CRM built for B2B law firms. Learn about pricing, features, GDPR compliance, AI usage, and how LeadLex compares to HubSpot and Salesforce."
        keywords="law firm CRM FAQ, legal CRM questions, LeadLex pricing, HubSpot alternative law firms, CRM for lawyers, legal business development software"
        canonicalUrl="https://www.leadlex.com/faq"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqSections.flatMap(section => 
            section.questions.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          )
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4"
          >
            Frequently Asked Questions
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-[#033934] mb-6"
          >
            LeadLex – CRM for B2B Law Firms
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Everything you need to know about LeadLex
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-[#033934] mb-6">
                {section.title}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`section-${sectionIndex}-item-${faqIndex}`}
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
          ))}
        </div>
      </section>
    </div>
  );
}