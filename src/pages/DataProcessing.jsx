import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function DataProcessing() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Data Processing Agreement (DPA) - LeadLex"
        description="LeadLex Data Processing Agreement pursuant to Art. 28 GDPR. Review our data processing terms and security measures."
        keywords="data processing agreement, DPA, GDPR Art 28, data processor agreement"
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
              Data Processing Agreement (DPA)
            </h1>
            <p className="text-gray-600 text-sm">
              pursuant to Art. 28 GDPR
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-[#033934]/5 border border-[#033934]/10 rounded-2xl p-8 mb-12">
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p className="mb-4"><strong>between</strong></p>
                <p className="mb-4">
                  <strong>Lead IP GmbH</strong><br />
                  Trogerstraße 50, 81675 Munich, Germany<br />
                  ("Processor")
                </p>
                <p className="mb-0">
                  <strong>and</strong><br />
                  the customer using the LeadLex platform<br />
                  ("Controller")
                </p>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">1. Subject Matter and Duration</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>1.1</strong> This Data Processing Agreement ("DPA") governs the processing of personal data by the Processor on behalf of the Controller in connection with the use of the LeadLex platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>1.2</strong> The duration of processing corresponds to the term of the main contract (Terms of Service / Order Form), unless otherwise required by applicable law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">2. Nature and Purpose of Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>2.1</strong> The Processor processes personal data solely for the purpose of providing, operating, maintaining, and supporting the LeadLex platform, including:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• CRM and relationship management</li>
                <li>• mandate and pipeline tracking</li>
                <li>• task and interaction logging</li>
                <li>• AI-assisted enrichment and insights</li>
                <li>• technical support and troubleshooting</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                <strong>2.2</strong> Processing is limited strictly to what is necessary to perform these services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">3. Categories of Data and Data Subjects</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#033934] mb-3">3.1 Categories of Personal Data</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Depending on usage, this may include:
                </p>
                <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                  <li>• identification data (names, titles)</li>
                  <li>• professional contact data (email, phone, company, role)</li>
                  <li>• relationship and interaction metadata</li>
                  <li>• notes, comments, and task content</li>
                  <li>• technical usage data (logs, timestamps, IP addresses)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  No special categories of personal data (Art. 9 GDPR) are intended to be processed unless explicitly instructed by the Controller.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#033934] mb-3">3.2 Categories of Data Subjects</h3>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• business contacts</li>
                  <li>• clients and prospective clients</li>
                  <li>• professional partners</li>
                  <li>• employees and representatives of the Controller</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">4. Roles and Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>4.1</strong> The Controller determines the purposes and means of processing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>4.2</strong> The Processor processes personal data only on documented instructions of the Controller, unless required by Union or Member State law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>4.3</strong> The Processor does not independently assess the lawfulness of data collection by the Controller.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">5. Processor Obligations</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The Processor shall:
              </p>
              <div className="space-y-3 text-gray-600 ml-6">
                <p><strong>a)</strong> ensure that persons authorized to process personal data are bound by confidentiality;</p>
                <p><strong>b)</strong> implement appropriate technical and organizational measures pursuant to Art. 32 GDPR;</p>
                <p><strong>c)</strong> assist the Controller with:</p>
                <ul className="ml-6 space-y-1">
                  <li>• data subject rights (Arts. 15–22 GDPR),</li>
                  <li>• data protection impact assessments (Art. 35 GDPR),</li>
                  <li>• prior consultations with supervisory authorities (Art. 36 GDPR);</li>
                </ul>
                <p><strong>d)</strong> notify the Controller without undue delay of any personal data breach;</p>
                <p><strong>e)</strong> delete or return personal data after termination of services, unless legally required otherwise.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">6. Technical and Organizational Measures (TOMs)</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The Processor implements TOMs including, but not limited to:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• TLS encryption in transit</li>
                <li>• role-based access control</li>
                <li>• environment separation per customer</li>
                <li>• logging and monitoring</li>
                <li>• regular backups</li>
                <li>• least-privilege access policies</li>
                <li>• secure authentication mechanisms</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Detailed TOMs are documented internally and available upon reasonable request.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">7. Subprocessing</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>7.1</strong> The Controller grants general authorization for the use of subprocessors listed in Annex 1.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>7.2</strong> The Processor ensures that each subprocessor is bound by GDPR-equivalent contractual obligations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>7.3</strong> The Processor will inform the Controller of any intended changes to subprocessors with reasonable advance notice, allowing for objection on legitimate grounds.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>8.1</strong> Data processing is primarily conducted within the EU.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>8.2</strong> If transfers to third countries occur, they are safeguarded by:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6">
                <li>• EU Standard Contractual Clauses (Art. 46 GDPR),</li>
                <li>• additional technical safeguards where required.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">9. Audits and Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>9.1</strong> The Controller may audit compliance with this DPA upon reasonable notice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>9.2</strong> Audits shall be limited to once per year unless justified by a material incident.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">10. Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Liability under this DPA follows the liability provisions of the Terms of Service and applicable GDPR provisions (Arts. 82, 83 GDPR).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">11. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                This DPA is governed by the laws of the Federal Republic of Germany.
              </p>
            </section>

            <div className="bg-gradient-to-r from-[#033934]/5 to-[#fb8628]/5 border-l-4 border-[#033934] rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-6">Annex 1 – Subprocessor List</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The following subprocessors are currently engaged by Lead IP GmbH in connection with the LeadLex platform:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">Loveable</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Purpose:</strong> Application hosting, frontend/backend platform services</li>
                    <li><strong>Location:</strong> EU / EEA</li>
                    <li><strong>Safeguards:</strong> GDPR-compliant processing agreement; EU data residency</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">Supabase</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Purpose:</strong> Database hosting, authentication, backend services</li>
                    <li><strong>Location:</strong> EU (with possible global infrastructure)</li>
                    <li><strong>Safeguards:</strong> EU Standard Contractual Clauses where applicable; encryption; access controls</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">Stripe</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Purpose:</strong> Subscription billing and payment processing</li>
                    <li><strong>Location:</strong> EU / USA</li>
                    <li><strong>Safeguards:</strong> EU SCCs; PCI-DSS compliance</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">Cloud Infrastructure Providers</h3>
                  <p className="text-sm text-gray-500 mb-3">(as part of Supabase/Loveable stack)</p>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Purpose:</strong> Cloud infrastructure and storage</li>
                    <li><strong>Location:</strong> Primarily EU</li>
                    <li><strong>Safeguards:</strong> GDPR-compliant agreements; SCCs where required</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-md font-semibold text-[#033934] mb-2">Change Management</h4>
                <p className="text-gray-600 leading-relaxed">
                  Lead IP GmbH will notify Controllers of any material changes to this subprocessor list prior to onboarding new subprocessors.
                </p>
              </div>
            </div>

            <div className="bg-[#033934] text-white rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-semibold mb-3">Questions about Data Processing?</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                For inquiries related to this DPA or data processing practices, contact:
              </p>
              <a href="mailto:privacy@leadip.io" className="text-[#fb8628] hover:underline font-medium text-lg">
                privacy@leadip.io
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}