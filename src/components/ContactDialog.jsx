import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Mail, Building2, User, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactDialog({ open, onOpenChange }) {
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
      await base44.functions.submitLeadToHubspot({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        message: formData.message
      });
      
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

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after closing
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
        consent: false
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-semibold text-[#033934] mb-3">
              Thank you!
            </DialogTitle>
            <DialogDescription className="text-gray-600 leading-relaxed mb-6">
              We've received your message and will get back to you within 24 hours with access details.
            </DialogDescription>
            <Button 
              onClick={handleClose}
              className="bg-[#033934] hover:bg-[#033934]/90"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-[#033934]">
                Request Access to LeadLex
              </DialogTitle>
              <DialogDescription className="text-gray-600 pt-2">
                LeadLex is currently invite-only. Thank you for your interest! 
                Fill out the form below and we'll get in touch to set up your account.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
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
                  className="h-11"
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
                  className="h-11"
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
                  className="h-11"
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
                  placeholder="Tell us about your needs..."
                  rows={4}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent-dialog"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, consent: checked }))
                    }
                    className="mt-1"
                  />
                  <label
                    htmlFor="consent-dialog"
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
                className="w-full h-11 bg-[#033934] hover:bg-[#033934]/90 text-white font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Request Access'}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}