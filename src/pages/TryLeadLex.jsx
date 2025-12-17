import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Building2, User, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import SEOHead from '../components/SEOHead';

export default function TryLeadLex() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please confirm that we may contact you regarding your inquiry.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await base44.functions.invoke('submitLeadToHubspot', {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        message: formData.message
      });
      
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting to HubSpot:', err);
      setError(err.message || 'Failed to submit. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOHead 
        title="Try LeadLex - Request Access to Law Firm CRM | Free Trial"
        description="Request access to LeadLex, the business development CRM built for B2B law firms. Start your 7-day free trial and transform how you manage client relationships and mandates."
        keywords="try LeadLex, law firm CRM trial, request demo, legal CRM access, B2B law firm software"
        canonicalUrl="https://www.leadlex.com/try-leadlex"
      />

      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#033934] mb-4">
                Thank you for your interest!
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                We've received your request and will get back to you within 24 hours with access details and next steps.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-[#033934] hover:bg-[#033934]/90"
              >
                Back to Home
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="inline-block text-[#3f7a6c] text-sm font-medium tracking-wide uppercase mb-4">
                  Request Access
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold text-[#033934] mb-6">
                  Try LeadLex
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  LeadLex is currently invite-only. Fill out the form below and we'll get in touch 
                  to set up your account and provide you with a <strong>7-day free trial</strong>.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-xl font-semibold text-[#033934] mb-6">
                  What you'll get:
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '7-day free trial — no credit card required',
                    'Personal onboarding walkthrough',
                    'Mandate-first CRM built for law firms',
                    'AI-powered prospecting and insights',
                    'GDPR-compliant data management',
                    'Access to all core features'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3f7a6c] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-[#033934]" />
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 mr-2 text-[#033934]" />
                      Company *
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your Law Firm"
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-[#033934]" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@lawfirm.com"
                      className="h-12"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 mr-2 text-[#033934]" />
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      rows={4}
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, consent: checked }))
                        }
                        className="mt-1"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                      >
                        I agree that LeadLex may contact me regarding my inquiry. 
                        My data will be processed in accordance with the{' '}
                        <a href="/privacy" target="_blank" className="text-[#033934] underline hover:text-[#fb8628]">
                          Privacy Policy
                        </a>. *
                      </label>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-red-800">
                        <p className="font-medium mb-1">Submission failed</p>
                        <p>{error}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Access'}
                  </Button>
                </form>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-8 text-sm text-gray-600"
              >
                <p>
                  Questions? Contact us at{' '}
                  <a href="mailto:hello@leadlex.com" className="text-[#033934] underline hover:text-[#fb8628]">
                    hello@leadlex.com
                  </a>
                </p>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}