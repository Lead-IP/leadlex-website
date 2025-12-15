import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import SEOHead from '../components/SEOHead';

export default function AITransparency() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="AI Transparency & Explainability Notice - LeadLex"
        description="Learn how LeadLex uses AI technology for legal business development. Transparent, explainable, and under your control."
        keywords="AI transparency, explainable AI, legal AI, AI ethics, AI in law firms"
      />
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[#033934] mb-4">
              AI Transparency & Explainability Notice
            </h1>
            <p className="text-gray-600 text-sm">
              LeadLex – by Lead IP GmbH • Last updated: December 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">1. Purpose of This Notice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This AI Transparency & Explainability Notice ("Notice") explains how, where, and for what purposes artificial intelligence (AI) is used within the LeadLex platform, and clarifies the limits of AI decision-making.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Notice is intended to meet current transparency obligations under:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• the GDPR (Arts. 5, 12, 13, 22),</li>
                <li>• German data protection standards,</li>
                <li>• and anticipated requirements under the EU AI Act.</li>
              </ul>
              <div className="bg-[#033934]/5 border border-[#033934]/10 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-0">
                  <strong>LeadLex is designed to support, not replace, human decision-making by legal professionals.</strong>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">2. Principle: AI as Decision Support Only</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LeadLex does not use AI to make automated decisions with legal or similarly significant effects within the meaning of Art. 22 GDPR.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                All AI-driven outputs within LeadLex:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• are non-binding recommendations,</li>
                <li>• do not produce legal effects,</li>
                <li>• do not replace professional judgment,</li>
                <li>• and require human review and action.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                <strong>Final decisions always remain with the user.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">3. Where AI Is Used in LeadLex</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI within LeadLex is embedded only in specific, clearly defined features, including:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#fb8628] pl-6">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">3.1 AI-Suggested Next Actions</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    AI may suggest follow-ups or reminders based on observable activity patterns (e.g. time since last interaction, pipeline stage).
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                    <li>• "No interaction recorded in 30 days"</li>
                    <li>• "Proposal sent 7 days ago — follow-up recommended"</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    These suggestions are: <strong>explainable, optional, snoozable or dismissible.</strong>
                  </p>
                </div>

                <div className="border-l-4 border-[#3f7a6c] pl-6">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">3.2 AI-Based Contact and Company Enrichment</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    AI may be used to:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                    <li>• complete missing professional information,</li>
                    <li>• standardize company or role descriptions,</li>
                    <li>• suggest relevant metadata.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    All enrichment operates on business-related, professional data only.
                  </p>
                </div>

                <div className="border-l-4 border-[#fb8628] pl-6">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">3.3 AI-Assisted Prospect Discovery</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Where enabled, AI may help identify potential companies or contacts that match user-defined criteria (e.g. industry, geography, mandate type).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Results are indicative and informational only.
                  </p>
                </div>

                <div className="border-l-4 border-[#3f7a6c] pl-6">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">3.4 AI Summaries and Insights</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    AI may generate summaries of:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                    <li>• interaction histories,</li>
                    <li>• mandate progress,</li>
                    <li>• activity timelines.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    These summaries are intended to save time, not to introduce new factual assertions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">4. What AI Is Explicitly Not Used For</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LeadLex does not use AI to:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6">
                <li>• make hiring, credit, or risk decisions;</li>
                <li>• evaluate individuals' legal, financial, or professional suitability;</li>
                <li>• profile individuals beyond basic professional context;</li>
                <li>• conduct sentiment analysis or behavioral prediction;</li>
                <li>• process special categories of personal data (Art. 9 GDPR).</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">5. Explainability and User Control</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LeadLex follows a "no black box" approach:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• AI suggestions always display why they are shown (e.g. inactivity, missing follow-up).</li>
                <li>• Users can: ignore, dismiss, snooze, or manually override AI suggestions at any time.</li>
                <li>• No AI feature is mandatory to use the platform.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                AI outputs never prevent users from taking alternative actions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">6. Human Oversight</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Human oversight is built into LeadLex by design:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• AI does not trigger irreversible actions.</li>
                <li>• No AI output is automatically executed.</li>
                <li>• Users remain fully responsible for how AI suggestions are used.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                This ensures compliance with Art. 22 GDPR and aligns with human-in-the-loop requirements under the EU AI Act.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">7. Data Used by AI Systems</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI features in LeadLex may process:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• professional contact data,</li>
                <li>• company and mandate metadata,</li>
                <li>• user-entered interaction timestamps,</li>
                <li>• system usage signals relevant to workflow optimization.</li>
              </ul>
              <div className="bg-[#033934]/5 border border-[#033934]/10 rounded-xl p-6 mb-4">
                <p className="text-gray-700 leading-relaxed mb-0">
                  AI processing is strictly limited to the Customer's environment and never trained on cross-customer data.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>LeadLex does not use Customer data to train general-purpose AI models.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">8. Legal Basis Under GDPR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The use of AI features is based on:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• Art. 6(1)(b) GDPR (performance of contract), and</li>
                <li>• Art. 6(1)(f) GDPR (legitimate interest in improving workflow efficiency),</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">
                as applicable and determined by the Customer as Controller.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lead IP GmbH acts solely as Processor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">9. Third-Party AI Providers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where external AI services are used:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• they are contractually bound as subprocessors;</li>
                <li>• data access is restricted to what is technically necessary;</li>
                <li>• EU data protection safeguards (e.g. SCCs) apply where relevant.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                A current list of subprocessors is available in the{' '}
                <Link to={createPageUrl('DataProcessing')} className="text-[#3f7a6c] hover:underline">
                  Subprocessor List
                </Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">10. Accuracy and Limitations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI-generated outputs may:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• be incomplete,</li>
                <li>• reflect outdated information,</li>
                <li>• contain inaccuracies.</li>
              </ul>
              <div className="bg-[#fb8628]/5 border border-[#fb8628]/30 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Users must verify AI-generated content before relying on it in professional or legal contexts.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-0">
                  LeadLex makes no representations as to the correctness or completeness of AI outputs.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">11. Updates to This Notice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Notice may be updated to reflect:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• changes in AI functionality,</li>
                <li>• regulatory developments (including the EU AI Act),</li>
                <li>• or improvements in transparency practices.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Material changes will be communicated in advance.
              </p>
            </section>

            <div className="bg-[#033934] text-white rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-semibold mb-3">12. Contact</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                For questions regarding AI usage or transparency, please contact:
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Lead IP GmbH</strong><br />
                Trogerstraße 50<br />
                81675 Munich, Germany
              </p>
              <a href="mailto:support@leadip.io" className="text-[#fb8628] hover:underline font-medium text-lg">
                📧 support@leadip.io
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}