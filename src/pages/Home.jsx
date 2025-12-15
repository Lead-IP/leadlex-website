import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import CapabilitiesSection from '../components/landing/CapabilitiesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import AISection from '../components/landing/AISection';
import SecuritySection from '../components/landing/SecuritySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ClosingCTA from '../components/landing/ClosingCTA';

export default function Home() {
  return (
    <div>
      <HeroSection />
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
      <ClosingCTA />
    </div>
  );
}