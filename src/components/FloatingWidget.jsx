import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWidget() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const callingUrl = getCallingUrl();
  const whatsappUrl = getWhatsAppUrl(advisorConfig.whatsAppMessages.default);

  return (
    <aside 
      aria-label="Quick Contact Actions"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3.5"
    >
      
      {/* Phone Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          role="tooltip"
          className={`hidden md:block absolute right-16 px-3 py-1.5 rounded-lg bg-[#002b49] text-white text-xs font-bold tracking-wide shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
            hoveredBtn === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          {advisorConfig.buttons.callAdvisor} (+91 {advisorConfig.advisor.contactNumber})
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#002b49]"></div>
        </div>

        <a
          href={callingUrl}
          onMouseEnter={() => setHoveredBtn('phone')}
          onMouseLeave={() => setHoveredBtn(null)}
          aria-label={advisorConfig.buttons.callAdvisor}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#002b49] text-white flex items-center justify-center shadow-lg shadow-blue-950/40 hover:bg-[#003d6b] transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/80"
        >
          <Phone className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          role="tooltip"
          className={`hidden md:block absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-wide shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
            hoveredBtn === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          {advisorConfig.buttons.chatOnWhatsApp}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          aria-label={advisorConfig.buttons.chatOnWhatsApp}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-600/40 hover:bg-[#20ba59] transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/80"
        >
          {/* Subtle pulse ring animation */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 fill-white group-hover:scale-110 transition-transform" />
        </a>
      </div>

    </aside>
  );
}
