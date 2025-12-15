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
            <p className="text-gray-600 text-sm">
              Lead IP GmbH • Version: July 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-[#033934]/5 border border-[#033934]/10 rounded-2xl p-8 mb-12">
              <p className="text-gray-700 leading-relaxed mb-0">
                This Privacy Policy describes how Lead IP GmbH ("Lead IP", "we", "us") processes your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. It applies to both the use of our website (http://www.leadip.io) and the LeadLex platform ("Service").
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">1. Controller and Contact</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Lead IP GmbH</strong><br />
                  Thierschstraße 55 / Trogerstraße 50<br />
                  80538 / 81675 München, Germany<br />
                  Email: privacy@leadip.io
                </p>
                <p className="text-gray-700 leading-relaxed mb-0">
                  If you have any questions regarding data protection, please contact our Data Protection Officer:<br />
                  Email: alexander@leadip.io
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">2. Purpose and Legal Basis of Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We process your personal data for the following purposes:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#033934] pl-6">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">Website Use (www.leadip.io or www.leadlex.com)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• System operation and IT security (Art. 6(1)(f) GDPR)</li>
                    <li>• Contact form, chat, survey handling (Art. 6(1)(a) or (b) GDPR)</li>
                    <li>• Analytics and cookie-based personalization (Art. 6(1)(a) GDPR or § 25 TTDSG)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#fb8628] pl-6">
                  <h3 className="text-lg font-semibold text-[#033934] mb-3">LeadLex Platform</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provision of CRM and outreach services (Art. 6(1)(b) GDPR)</li>
                    <li>• Account registration and management (Art. 6(1)(b) GDPR)</li>
                    <li>• Communication, notifications, support (Art. 6(1)(f) GDPR)</li>
                    <li>• Compliance with legal obligations (Art. 6(1)(c) GDPR)</li>
                    <li>• Prevention of abuse and fraud (Art. 6(1)(f) GDPR)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">3. Categories of Data Processed</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect the following categories of data:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Name, email, company, and contact information</li>
                <li>• Login credentials (hashed), usage data, metadata</li>
                <li>• IP address, browser/device info, HTTP headers</li>
                <li>• Communication content (e.g. support chat)</li>
                <li>• Data from public sources, if voluntarily connected</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">4. Data Sources</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data is collected:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Directly from you (e.g. via forms, registration)</li>
                <li>• Automatically through service use (e.g. logs, cookies)</li>
                <li>• From publicly available sources or third-party integrations (with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">5. Cookies and Analytics</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance user experience and analyze platform usage.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can manage your preferences through our Cookie Consent Tool and your browser settings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Legal basis:</strong> Art. 6(1)(a) GDPR or § 25 TTDSG (where applicable).
              </p>
              <p className="text-gray-600 leading-relaxed">
                We may use tools such as:
              </p>
              <ul className="space-y-2 text-gray-600 mt-2">
                <li>• Matomo (self-hosted)</li>
                <li>• Pseudonymized Google Analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">6. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We share personal data only when necessary and in accordance with legal bases:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Service providers:</strong> Hosting (e.g., AWS Germany), IT, customer support, analytics</li>
                <li><strong>Third-party tools:</strong> Only upon activation (e.g., plug-ins, integrations)</li>
                <li><strong>Authorities:</strong> When required by law</li>
                <li><strong>External consultants:</strong> Legal, tax, compliance</li>
                <li><strong>With your consent:</strong> For integrations or marketing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                All service providers are contractually bound as data processors (Art. 28 GDPR).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">7. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where data is transferred outside the EEA, we ensure:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Adequacy decisions by the EU Commission</li>
                <li>• Standard Contractual Clauses (SCCs)</li>
                <li>• Additional safeguards if needed</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You may request details about third-country recipients at: privacy@leadip.io
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">8. Retention Periods</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain personal data:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• As long as necessary to fulfill purposes outlined above</li>
                <li>• According to commercial and tax laws (e.g., up to 10 years)</li>
                <li>• 30 days after account termination for platform data (unless longer required)</li>
                <li>• IP addresses for 7 days for security purposes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">9. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights under GDPR:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• <strong>Access</strong> (Art. 15)</li>
                <li>• <strong>Rectification</strong> (Art. 16)</li>
                <li>• <strong>Erasure</strong> (Art. 17)</li>
                <li>• <strong>Restriction</strong> (Art. 18)</li>
                <li>• <strong>Data portability</strong> (Art. 20)</li>
                <li>• <strong>Objection</strong> (Art. 21)</li>
                <li>• <strong>Withdraw consent</strong> at any time (Art. 7)</li>
                <li>• <strong>Complaint</strong> to a supervisory authority (Art. 77)</li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-0">
                  <strong>Bavarian Data Protection Authority (BayLDA)</strong><br />
                  Promenade 18, 91522 Ansbach, Germany<br />
                  <a href="https://www.baylda.de" target="_blank" rel="noopener noreferrer" className="text-[#3f7a6c] hover:underline">www.baylda.de</a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">10. Automated Decision-Making</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not use your personal data for automated decision-making or profiling that produces legal effects.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">11. Updates to this Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this policy to reflect legal, technical, or business changes. The updated version will be published on our website. Continued use constitutes acceptance of changes.
              </p>
            </section>

            <div className="bg-[#033934] text-white rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-semibold mb-3">Questions or Need to Exercise Your Rights?</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                For further questions or to exercise your rights, contact:
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