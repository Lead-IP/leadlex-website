import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function LinkedInBanner() {
  const bannerRef = useRef(null);
  const logoWhiteRef = useRef(null);
  const logoColorRef = useRef(null);
  const iconRef = useRef(null);

  const downloadBanner = async () => {
    if (bannerRef.current) {
      const canvas = await html2canvas(bannerRef.current, {
        scale: 2,
        backgroundColor: null,
        width: 1584,
        height: 396
      });
      
      const link = document.createElement('a');
      link.download = 'leadlex-linkedin-banner.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const downloadLogo = async (ref, filename, width, height) => {
    if (ref.current) {
      const canvas = await html2canvas(ref.current, {
        scale: 3,
        backgroundColor: null,
        width,
        height
      });
      
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 gap-12">
      {/* LinkedIn Banner */}
      <div className="w-full max-w-7xl">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-semibold text-[#033934] mb-3">
            LinkedIn Banner
          </h1>
          <Button onClick={downloadBanner} className="bg-[#033934] hover:bg-[#033934]/90">
            <Download className="w-4 h-4 mr-2" />
            Download Banner
          </Button>
        </div>

        <div 
        ref={bannerRef}
        className="relative overflow-hidden"
        style={{ 
          width: '1584px', 
          height: '396px',
          background: 'radial-gradient(ellipse at top, #044a43 0%, #033934 50%, #022621 100%)'
        }}
      >
        {/* Animated geometric shapes */}
        <div className="absolute top-10 right-32 w-32 h-32 border-2 border-[#fb8628]/20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-16 right-64 w-24 h-24 bg-[#fb8628]/5 rounded-full"></div>
        <div className="absolute top-20 left-96 w-16 h-16 border border-white/10 transform rotate-45"></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-32 right-32 w-96 h-96 bg-[#fb8628]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-96 w-80 h-80 bg-[#3f7a6c]/30 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-16">
          {/* Left side - space for profile photo */}
          <div className="w-56"></div>
          
          {/* Center content */}
          <div className="flex-1 text-left ml-8">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/e33d19a6b_leadlex.png"
              alt="LeadLex"
              className="h-12 w-auto brightness-0 invert mb-5"
            />
            <h2 className="text-5xl font-semibold text-white mb-3 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Business Development<br />for Law Firms
            </h2>
            <p className="text-xl text-white/70 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Relationship intelligence platform for IP, M&A, and corporate law firms
            </p>
          </div>

          {/* Right side - mini dashboard preview */}
          <div className="flex flex-col gap-3 mr-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl" style={{ width: '280px' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#fb8628] rounded-lg"></div>
                <div>
                  <div className="h-2 w-24 bg-white/60 rounded mb-1.5"></div>
                  <div className="h-2 w-16 bg-white/40 rounded"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/30 rounded"></div>
                <div className="h-1.5 w-4/5 bg-white/25 rounded"></div>
                <div className="h-1.5 w-3/4 bg-white/20 rounded"></div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 flex items-center justify-between" style={{ width: '280px' }}>
              <div className="h-1.5 w-20 bg-white/40 rounded"></div>
              <div className="h-1.5 w-12 bg-[#fb8628]/60 rounded"></div>
            </div>
          </div>
        </div>
      </div>

        <p className="text-gray-500 text-sm mt-4 text-center">
          Banner dimensions: 1584 × 396 pixels (LinkedIn recommended size)
        </p>
      </div>

      {/* Logo Variations */}
      <div className="w-full max-w-7xl grid md:grid-cols-3 gap-8">
        {/* White Logo on Green */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#033934] mb-3">
            White Logo on Green
          </h2>
          <div 
            ref={logoWhiteRef}
            className="bg-[#033934] rounded-2xl p-12 flex items-center justify-center shadow-xl mb-4"
            style={{ width: '400px', height: '400px' }}
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/e33d19a6b_leadlex.png"
              alt="LeadLex"
              className="w-full h-auto brightness-0 invert"
            />
          </div>
          <Button 
            onClick={() => downloadLogo(logoWhiteRef, 'leadlex-logo-white.png', 400, 400)} 
            className="bg-[#033934] hover:bg-[#033934]/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* Colored Logo with Background */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#033934] mb-3">
            Logo with Background
          </h2>
          <div 
            ref={logoColorRef}
            className="relative rounded-2xl overflow-hidden shadow-xl mb-4"
            style={{ 
              width: '400px', 
              height: '400px',
              background: 'radial-gradient(ellipse at center, #044a43 0%, #033934 70%)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-12 right-12 w-32 h-32 border-2 border-[#fb8628]/20 rounded-lg transform rotate-12"></div>
              <div className="absolute bottom-16 left-12 w-24 h-24 bg-[#fb8628]/10 rounded-full blur-xl"></div>
              <div className="absolute top-20 left-20 w-16 h-16 border border-white/10 transform rotate-45"></div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/e33d19a6b_leadlex.png"
                alt="LeadLex"
                className="relative z-10 w-4/5 h-auto brightness-0 invert"
              />
            </div>
          </div>
          <Button 
            onClick={() => downloadLogo(logoColorRef, 'leadlex-logo-background.png', 400, 400)} 
            className="bg-[#033934] hover:bg-[#033934]/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* Icon/Favicon */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#033934] mb-3">
            Icon / Favicon
          </h2>
          <div 
            ref={iconRef}
            className="relative rounded-2xl overflow-hidden shadow-xl mb-4 mx-auto"
            style={{ 
              width: '400px', 
              height: '400px',
              background: 'linear-gradient(135deg, #033934 0%, #044a43 100%)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#fb8628]/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3f7a6c]/30 rounded-full blur-2xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-white font-bold" style={{ fontSize: '180px', fontFamily: 'Inter, sans-serif', lineHeight: '1' }}>
                  L
                </div>
                <div className="text-[#fb8628] font-bold" style={{ fontSize: '60px', fontFamily: 'Inter, sans-serif', marginTop: '-20px' }}>
                  Lex
                </div>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => downloadLogo(iconRef, 'leadlex-icon.png', 400, 400)} 
            className="bg-[#033934] hover:bg-[#033934]/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <p className="text-gray-500 text-xs mt-2">
            Perfect for website icons & social media
          </p>
        </div>
      </div>
    </div>
  );
}