import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const COOKIE_CONSENT_KEY = 'leadlex_cookie_consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
            {!showSettings ? (
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#033934]/5 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-[#033934]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#033934] mb-2">
                      Cookie Preferences
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      We use cookies to enhance your browsing experience, serve personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                      You can manage your preferences or learn more in our{' '}
                      <Link to={createPageUrl('Privacy')} className="text-[#3f7a6c] hover:underline">
                        Privacy Policy
                      </Link>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-[#033934] hover:bg-[#033934]/90 text-white"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="border-gray-300"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-gray-300"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-[#033934]">
                    Cookie Settings
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex-1">
                      <div className="font-semibold text-[#033934] mb-1">
                        Necessary Cookies
                      </div>
                      <p className="text-sm text-gray-600">
                        Essential for the website to function. Cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-[#033934] rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-gray-200">
                    <div className="flex-1">
                      <div className="font-semibold text-[#033934] mb-1">
                        Analytics Cookies
                      </div>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-[#033934] justify-end' : 'bg-gray-300 justify-start'
                      }`}>
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-gray-200">
                    <div className="flex-1">
                      <div className="font-semibold text-[#033934] mb-1">
                        Marketing Cookies
                      </div>
                      <p className="text-sm text-gray-600">
                        Used to deliver personalized advertisements relevant to you.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className="ml-4"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-[#033934] justify-end' : 'bg-gray-300 justify-start'
                      }`}>
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-[#033934] hover:bg-[#033934]/90 text-white"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="border-gray-300"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}