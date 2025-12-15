import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function LinkedInBanner() {
  const bannerRef = useRef(null);

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-[#033934] mb-4 text-center">
          LinkedIn Banner
        </h1>
        <Button onClick={downloadBanner} className="bg-[#033934] hover:bg-[#033934]/90">
          <Download className="w-4 h-4 mr-2" />
          Download Banner
        </Button>
      </div>

      <div 
        ref={bannerRef}
        className="relative bg-gradient-to-br from-[#033934] via-[#044a43] to-[#033934] overflow-hidden"
        style={{ width: '1584px', height: '396px' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fb8628]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fb8628]/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-20">
          {/* Left side - leave space for profile photo */}
          <div className="w-64"></div>
          
          {/* Center content */}
          <div className="flex-1 text-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69401930ae2d0d19346fdda0/e33d19a6b_leadlex.png"
              alt="LeadLex"
              className="h-14 w-auto brightness-0 invert mb-4 mx-auto"
            />
            <h2 className="text-4xl font-semibold text-white mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              Business Development for Law Firms
            </h2>
            <p className="text-lg text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Relationship intelligence platform for IP, M&A, and corporate law firms
            </p>
          </div>

          {/* Right side accent */}
          <div className="flex flex-col items-end justify-center space-y-4">
            <div className="bg-[#fb8628] text-white px-8 py-4 rounded-xl shadow-2xl">
              <p className="text-2xl font-semibold whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>www.leadlex.com</p>
            </div>
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl"></div>
              <div className="w-16 h-16 bg-[#fb8628]/20 backdrop-blur-sm rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-4 text-center">
        Banner dimensions: 1584 × 396 pixels (LinkedIn recommended size)
      </p>
    </div>
  );
}