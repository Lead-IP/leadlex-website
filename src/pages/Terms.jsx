import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
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
              Terms and Conditions
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
                <strong>Note:</strong> This is a placeholder page. The actual Terms and Conditions content will be added soon.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                [Terms content to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                [Service description to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">
                [User responsibilities to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                [Intellectual property terms to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                [Liability limitations to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">6. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                [Termination terms to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">7. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                [Governing law information to be provided]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">8. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms and Conditions, please contact us at: [Contact information to be provided]
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}