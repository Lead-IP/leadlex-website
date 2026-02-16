import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/landing/HeroSection';
import LexiScenariosSection from '../components/landing/LexiScenariosSection';
import ProblemSection from '../components/landing/ProblemSection';
import CapabilitiesSection from '../components/landing/CapabilitiesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import AISection from '../components/landing/AISection';
import SecuritySection from '../components/landing/SecuritySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FAQSection from '../components/landing/FAQSection';
import ClosingCTA from '../components/landing/ClosingCTA';

export default function Home() {
  return (
    <div>
      <SEOHead 
        title="LeadLex - Business Development CRM for Law Firms | IP, M&A, Corporate"
        description="Relationship intelligence platform built for IP, M&A, and corporate law firms. Track mandates, protect client relationships, and win new business without CRM friction."
        keywords="law firm CRM, legal business development, mandate tracking, IP law firms, M&A law firms, corporate law CRM, legal relationship management, lawyer CRM"
        canonicalUrl="https://www.leadlex.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "LeadLex",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "49",
            "highPrice": "499",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "billingDuration": "P1M"
            }
          },
          "operatingSystem": "Web",
          "description": "Business development and relationship management platform built specifically for IP, M&A, and corporate law firms.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "24"
          },
          "provider": {
            "@type": "Organization",
            "name": "Lead IP GmbH",
            "url": "https://www.leadip.io",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Trogerstraße 50",
              "addressLocality": "München",
              "postalCode": "81675",
              "addressCountry": "DE"
            }
          }
        }}
      />
      <HeroSection />
      <LexiScenariosSection />
      <ProblemSection />
      <div id="features">
        <CapabilitiesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <AISection />
      <div id="security">
        <SecuritySection />
      </div>
      <TestimonialsSection />
      <FAQSection />
      <ClosingCTA />
    </div>
  );
}