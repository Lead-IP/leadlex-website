import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Building2, User, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { base44 } from '@/api/base44Client';

export default function Contact() {
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
        message: formData.message,
        formType: 'contact'
      });
      
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Failed to submit. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <SEOHead 
          title="Thank You - LeadLex"
          description="Thank you for contacting LeadLex. We'll be in touch soon."
          canonicalUrl="https://www.leadlex.com/contact"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-[#033934] mb-4">
            Thank you!
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            We've received your message and will get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-[#033934] hover:bg-[#033934]/90"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Contact Us - LeadLex"
        description="Get in touch with LeadLex. We're here to answer your questions about our business development platform for law firms."
        keywords="contact leadlex, legal crm contact, law firm software inquiry"
        canonicalUrl="https://www.leadlex.com/contact"
      />
      
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[#033934] mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about LeadLex? We'd love to hear from you. 
              Fill out the form below and we'll get back to you within 24 hours. 
              Alternatively, you can view our{' '}
              <a href="/faq" className="text-[#033934] underline hover:text-[#fb8628] font-medium">
                FAQs
              </a>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl"
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
                  className="h-12 border-gray-300 focus:border-[#033934] focus:ring-[#033934]"
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
                  className="h-12 border-gray-300 focus:border-[#033934] focus:ring-[#033934]"
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
                  className="h-12 border-gray-300 focus:border-[#033934] focus:ring-[#033934]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-[#033934]" />
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your needs or questions..."
                  rows={6}
                  className="border-gray-300 focus:border-[#033934] focus:ring-[#033934]"
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
                    I agree that LeadLex may contact me regarding my inquiry via email or phone. 
                    I understand that I can withdraw this consent at any time. 
                    My data will be processed in accordance with the{' '}
                    <a href="/privacy" className="text-[#033934] underline hover:text-[#fb8628]">
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
                className="w-full h-12 bg-[#033934] hover:bg-[#033934]/90 text-white font-medium text-base rounded-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-2">
              Or email us directly at
            </p>
            <a 
              href="mailto:hello@leadip.io"
              className="text-[#033934] hover:text-[#fb8628] font-medium text-lg"
            >
              hello@leadip.io
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}