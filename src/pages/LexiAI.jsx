import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Target, TrendingUp, Lightbulb, Search, Database, Shield, Sparkles,
  Clock, MessageSquare, Mail, Smartphone, Check, X, Calendar
} from 'lucide-react';

const currentFeatures = [
  {
    icon: Target,
    title: 'Proactive Prospecting',
    description: 'Lexi tells you who to contact today and why. Based on relationship decay, deal activity, and interaction history, so you never miss a follow-up.'
  },
  {
    icon: Calendar,
    title: 'Event Intelligence',
    description: 'Upload an attendee list and Lexi finds your warm connections, flags high-value targets, and preps your meetings automatically. Walk into every event ready.'
  },
  {
    icon: Mail,
    title: 'Automated Campaigns',
    description: 'From a scanned business card to a personalized email sequence in clicks, not hours. Lexi builds the outreach so you can focus on relationships.'
  },
  {
    icon: TrendingUp,
    title: 'Relationship Intelligence',
    description: 'Scores every contact 0-100 based on meetings, emails, notes, and deals. See who\'s warming up and who\'s going cold at a glance.'
  },
  {
    icon: Lightbulb,
    title: 'Smart Insights',
    description: 'Context-aware AI analysis on every page. Ask Lexi about any contact, deal, company, or pipeline and get actionable recommendations.'
  },
  {
    icon: Search,
    title: 'AI Prospector',
    description: 'Search 250M+ contacts and companies for conference prep, roadshows, or refreshing dormant relationships.'
  },
  {
    icon: Database,
    title: 'Contact Enrichment',
    description: 'Profiles enriched automatically with LinkedIn data, company information, and business context.'
  },
  {
    icon: Shield,
    title: 'Data Quality',
    description: 'Duplicate detection, fuzzy name matching, and one-click merge. Keeps your database clean without manual effort.'
  }
];

const roadmapFeatures = [
  {
    icon: Clock,
    title: 'Morning Briefings',
    description: 'Daily summary of your tasks, meetings, and pipeline changes'
  },
  {
    icon: Mail,
    title: 'Campaign Co-pilot',
    description: 'Lexi helps write and optimize your email campaigns'
  },
  {
    icon: MessageSquare,
    title: 'Microsoft Teams Integration',
    description: 'Message Lexi directly in Teams'
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Channel',
    description: 'Check in with Lexi from your phone'
  }
];

const freeFeatures = ['Relationship scoring', 'Duplicate detection', 'Proactive suggestions', 'Deal alerts', 'Pipeline monitoring'];
const creditFeatures = ['AI Prospector searches', 'Contact enrichment', 'AI-generated insights', 'Smart suggestions'];

export default function LexiAI() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #3f7a6c 0%, #033934 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#fb8628]" />
            <span className="text-white/80 text-sm font-medium">AI Team Member</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Meet Lexi
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            The AI team member built into every LeadLex workspace
          </motion.p>
        </div>
      </section>

      {/* What Lexi Does Today */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-4">What Lexi Does Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real features, available right now in every LeadLex workspace.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white hover:border-gray-200 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#033934]/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-[#033934]" />
                </div>
                <h3 className="text-lg font-semibold text-[#033934] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #033934 0%, #3f7a6c 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#fb8628]/20 text-[#fb8628] text-xs font-semibold uppercase tracking-wide mb-4">Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">What's Coming</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Features we're building to make Lexi even more helpful.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-[#fb8628]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Credits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-4">Free vs Credits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Core AI features are free. Advanced capabilities use credits.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-2 border-[#033934]/20 bg-[#033934]/5">
              <h3 className="text-xl font-semibold text-[#033934] mb-6">Included Free</h3>
              <ul className="space-y-4">
                {freeFeatures.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#3f7a6c] flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-2 border-[#fb8628]/20 bg-[#fb8628]/5">
              <h3 className="text-xl font-semibold text-[#033934] mb-6">Uses Credits</h3>
              <ul className="space-y-4">
                {creditFeatures.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#fb8628] flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight mb-6">
            Start using Lexi today
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}>
            <Link to={createPageUrl('TryLeadLex')}>
              <Button size="lg" className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fb8628]/30">
                Try LeadLex Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
