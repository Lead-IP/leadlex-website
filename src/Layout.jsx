import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Security', href: '#security' }
];

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background-color: #033934;
          color: white;
        }
      `}</style>
      
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#033934] to-[#3f7a6c] flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className={`text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-[#033934]' : 'text-white'
              }`}>
                LeadLex
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                    isScrolled ? 'text-gray-600 hover:text-[#033934]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="ghost"
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-[#033934] hover:bg-[#033934]/5' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Sign in
              </Button>
              <Button 
                className="bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium px-6 rounded-xl transition-all duration-300"
              >
                Try LeadLex
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#033934]' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600 font-medium py-2 hover:text-[#033934] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <Button 
                    variant="outline"
                    className="w-full font-medium border-gray-200"
                  >
                    Sign in
                  </Button>
                  <Button 
                    className="w-full bg-[#fb8628] hover:bg-[#e5791f] text-white font-medium"
                  >
                    Try LeadLex
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#033934] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-semibold">LeadLex</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-sm">
                Business development and relationship platform built specifically 
                for IP, M&A, and corporate law firms.
              </p>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">How it works</a></li>
                <li><a href="#security" className="text-white/60 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} LeadLex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}