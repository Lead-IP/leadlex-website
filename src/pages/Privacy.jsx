import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[#033934] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
              <p className="text-gray-600 mb-0">
                <strong>Note:</strong> This is a placeholder page. The actual Privacy Policy content will be added soon.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                [Information collection details to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                [Information usage details to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">3. Data Storage and Security</h2>
              <p className="text-gray-600 leading-relaxed">
                [Data security details to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through our cookie banner.
              </p>
              <p className="text-gray-600 leading-relaxed">
                [Additional cookie information to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                [Third-party services information to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">6. Your Rights (GDPR)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                [Additional GDPR compliance details to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">7. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                [Data retention policies to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                [Policy change notification process to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about this Privacy Policy or to exercise your data rights, please contact us at: [Contact information to be provided]
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}