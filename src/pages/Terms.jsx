import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Terms of Service - LeadLex"
        description="LeadLex Terms of Service. Review our terms and conditions for using the LeadLex business development platform for law firms."
        keywords="terms of service, legal terms, software agreement, B2B legal software terms"
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
              Terms of Service
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
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">1. Scope and Acceptance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern the contractual relationship between Lead IP GmbH, Trogerstraße 50, 81675 Munich, Germany ("Lead IP", "we", "us") and you as a customer ("Customer", "you") regarding access to and use of the LeadLex platform ("Service").
              </p>
              <div className="bg-[#033934]/5 border border-[#033934]/10 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-0">
                  <strong>Important:</strong> The Service is offered exclusively to entrepreneurs within the meaning of § 14 BGB and for professional and business purposes only.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                By creating an account, signing an order form, or otherwise using the Service, you confirm that you have read, understood, and accepted these Terms in full. Deviating or supplementary terms of the Customer shall not apply unless expressly agreed in writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">2. Definitions</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Account:</strong> The Customer's subscription-based access to the Service.</p>
                <p><strong>Authorized Users:</strong> Natural persons authorized by the Customer to use the Service under its Account.</p>
                <p><strong>User Data:</strong> All data, content, and information uploaded, entered, generated, or stored by or on behalf of the Customer within the Service.</p>
                <p><strong>Order Form:</strong> Any subscription order, pricing plan, or commercial agreement referencing these Terms.</p>
                <p><strong>DPA:</strong> The Data Processing Agreement pursuant to Art. 28 GDPR.</p>
                <p><strong>Subprocessor:</strong> Any third party engaged by Lead IP to process User Data.</p>
                <p><strong>Business Day:</strong> Monday to Friday excluding public holidays in Bavaria, Germany.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">3. Eligibility and Representation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You represent and warrant that:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                <li>you are an entrepreneur within the meaning of § 14 BGB;</li>
                <li>you are legally capable of entering into binding contracts;</li>
                <li>you act on behalf of a legal entity or partnership duly authorized to use the Service.</li>
              </ol>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Private consumers within the meaning of § 13 BGB are expressly excluded.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">4. Account Registration and Security</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>4.1</strong> Accurate and complete information must be provided during registration and kept up to date.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>4.2</strong> You are solely responsible for:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• all activities conducted under your Account;</li>
                <li>• maintaining the confidentiality of login credentials;</li>
                <li>• ensuring Authorized Users comply with these Terms.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                <strong>4.3</strong> You must notify Lead IP without undue delay of any suspected unauthorized access or security breach.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">5. Grant of Rights and License</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>5.1</strong> Lead IP grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service during the contractual term solely for your internal business purposes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>5.2</strong> No rights beyond those expressly granted are conferred. In particular, no ownership rights in the Service are transferred.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">6. Service Description and Technical Environment</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>6.1</strong> LeadLex is a cloud-based platform providing CRM, relationship management, mandate tracking, analytics, and AI-supported assistance features for professional users.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>6.2</strong> The Service is provided using infrastructure and services of carefully selected third-party providers, including in particular:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• Loveable (platform and application services),</li>
                <li>• Supabase (database and backend services).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">
                These providers act as subprocessors under the DPA.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>6.3</strong> Lead IP does not provide legal, regulatory, tax, or marketing advice. Any AI-generated suggestions are non-binding and for informational purposes only.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">7. Pricing, Billing, and Payment</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>7.1</strong> Fees, billing cycles, payment terms, and subscription duration are specified in the applicable Order Form.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>7.2</strong> All fees are stated net of VAT and other applicable taxes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>7.3</strong> Payments are processed via Stripe. Lead IP does not store payment card data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>7.4</strong> In case of payment default:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• statutory interest under §§ 288, 247 BGB may apply;</li>
                <li>• Lead IP may suspend access after a reasonable grace period.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Refunds are excluded unless mandatory under applicable law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">8. Term and Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>8.1</strong> The contract term is defined in the Order Form.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>8.2</strong> Ordinary termination is possible with 30 days' notice prior to renewal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>8.3</strong> Lead IP may terminate or suspend access immediately for:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• material breach of these Terms;</li>
                <li>• unlawful use;</li>
                <li>• persistent payment default.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>8.4</strong> Upon termination:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6">
                <li>• all licenses end automatically;</li>
                <li>• outstanding fees remain payable;</li>
                <li>• User Data will be deleted or anonymized after 30 days, unless statutory retention obligations apply.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">9. Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You shall not:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4 ml-6">
                <li>• process personal data of minors knowingly;</li>
                <li>• send spam or unlawful communications;</li>
                <li>• violate GDPR, UWG, ePrivacy, or other applicable laws;</li>
                <li>• reverse engineer, interfere with, or bypass security mechanisms;</li>
                <li>• use the Service for deceptive, fraudulent, or abusive purposes.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Lead IP reserves the right to suspend access in case of violations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">10. Data Protection and GDPR Compliance</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#033934] mb-2">10.1 Roles</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Customer acts as Controller within the meaning of Art. 4(7) GDPR.<br />
                    Lead IP acts solely as Processor under Art. 4(8), 28 GDPR.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#033934] mb-2">10.2 DPA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Processing of personal data is governed exclusively by the DPA, which forms an integral part of these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#033934] mb-2">10.3 Customer Responsibilities</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    The Customer is solely responsible for:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• lawful data processing grounds;</li>
                    <li>• compliance with GDPR, BDSG, ePrivacy;</li>
                    <li>• fulfilling information obligations towards data subjects.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#033934] mb-2">10.4 Security Measures</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Lead IP implements appropriate technical and organizational measures, including:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li>• TLS encryption;</li>
                    <li>• access controls;</li>
                    <li>• logging and monitoring;</li>
                    <li>• segregation of customer environments.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#033934] mb-2">10.5 Data Subject Rights & Breaches</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lead IP supports data subject requests and breach notifications as required by Art. 28(3) GDPR.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">11. Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Both parties shall treat all non-public information as confidential and protect it with reasonable care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Confidentiality obligations survive termination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">12. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>12.1</strong> Lead IP retains all rights to the Service, software, algorithms, UI, branding, and documentation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>12.2</strong> The Customer retains full ownership of User Data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>12.3</strong> No rights are granted beyond contractual use.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">13. Warranty Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The Service is provided "as is" and "as available".
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lead IP does not warrant uninterrupted availability, error-free operation, or suitability for a particular purpose.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">14. Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>14.1</strong> Unlimited liability applies for:
              </p>
              <ul className="space-y-2 text-gray-600 mb-3 ml-6">
                <li>• intent and gross negligence;</li>
                <li>• injury to life, body, or health;</li>
                <li>• liability under the German Product Liability Act.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>14.2</strong> Limited liability for slight negligence applies only for breaches of essential contractual obligations (Kardinalpflichten) and is limited to foreseeable, typical damages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>14.3</strong> Liability for indirect damages, loss of profit, or data loss is excluded unless caused intentionally or with gross negligence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">15. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The Customer indemnifies Lead IP against third-party claims arising from:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6">
                <li>• unlawful use of the Service;</li>
                <li>• violation of these Terms;</li>
                <li>• breach of data protection laws.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">16. Export Control and Sanctions</h2>
              <p className="text-gray-600 leading-relaxed">
                Use of the Service must comply with applicable EU and German export control and sanctions regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">17. Amendments</h2>
              <p className="text-gray-600 leading-relaxed">
                Lead IP may amend these Terms with 30 days' prior notice for material changes. Continued use constitutes acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">18. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                These Terms are governed by the laws of the Federal Republic of Germany, excluding CISG.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Exclusive jurisdiction is Munich, Germany.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-[#033934] mb-4">19. Miscellaneous</h2>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Severability:</strong> Invalid provisions do not affect the remainder.</li>
                <li><strong>Assignment:</strong> Assignment by Customer requires consent; Lead IP may assign in corporate transactions.</li>
                <li><strong>Entire Agreement:</strong> These Terms, the Order Form, DPA, and Privacy Policy constitute the entire agreement.</li>
                <li><strong>Notices:</strong> Email suffices.</li>
              </ul>
            </section>

            <div className="bg-[#033934] text-white rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <p className="text-white/80 leading-relaxed mb-2">
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