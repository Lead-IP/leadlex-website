import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, BarChart3 } from 'lucide-react';

const scenarios = [
  {
    icon: Clock,
    time: 'Morning',
    message: '"Good morning. You have 2 meetings today. The BMW deal hasn\'t moved in 8 days -- want me to draft a follow-up?"',
    caption: 'Lexi briefs you every morning with what matters.'
  },
  {
    icon: Calendar,
    time: 'After a Meeting',
    message: '"How did the meeting with Sarah go? I found 3 action items from your notes. Create follow-up tasks?"',
    caption: 'Lexi turns meetings into momentum.'
  },
  {
    icon: BarChart3,
    time: 'End of Week',
    message: '"This week: 2 deals progressed, 3 new contacts added, pipeline up 12%. Nice work."',
    caption: 'Lexi tracks your progress so you don\'t have to.'
  }
];

export default function LexiScenariosSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4">
            A Day with Lexi
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#033934] leading-tight">
            This is what having an AI team member feels like
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:bg-white hover:border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#fb8628]/10 flex items-center justify-center">
                    <scenario.icon className="w-5 h-5 text-[#fb8628]" />
                  </div>
                  <span className="text-sm font-semibold text-[#033934] uppercase tracking-wide">
                    {scenario.time}
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <img
                      src="https://data.leadlex.com/storage/v1/object/public/Logo/LeadLex%20favicon.png"
                      alt="Lexi"
                      className="w-6 h-6 rounded-full mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm text-gray-700 leading-relaxed italic">
                      {scenario.message}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {scenario.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-[#033934] font-medium"
        >
          Lexi is not a chatbot. She's a team member who manages your business development 24/7.
        </motion.p>
      </div>
    </section>
  );
}
