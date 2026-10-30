import React from 'react';
import { Shield, Phone, MessageCircle, Heart, ExternalLink } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Advisor Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                <Shield className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {advisorConfig.advisor.fullName}
                </h4>
                <p className="text-xs text-amber-400 font-semibold">
                  ({advisorConfig.advisor.popularName}) &bull; {advisorConfig.advisor.profession}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {advisorConfig.advisor.bio} Dedicated to helping you choose the right financial security plans for a lifetime of protection.
            </p>

            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
              {advisorConfig.advisor.badgeText}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Sudip Kumar Pathak</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-amber-400 transition-colors">Insurance Plans Portfolio</a>
              </li>
              <li>
                <a href="#why-lic" className="hover:text-amber-400 transition-colors">Why Choose LIC</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-amber-400 transition-colors">WhatsApp Enquiry</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Direct Connect Column */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h5>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={getCallingUrl()} className="hover:text-amber-400 font-medium">
                  +91 {advisorConfig.advisor.contactNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a 
                  href={getWhatsAppUrl(advisorConfig.whatsAppMessages.default)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 font-medium"
                >
                  WhatsApp: +91 {advisorConfig.advisor.whatsAppNumber}
                </a>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                Availability: {advisorConfig.advisor.serviceHours}
              </p>
            </div>

            <div className="pt-2 flex gap-2">
              <a
                href={getCallingUrl()}
                className="px-3.5 py-2 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Call Now
              </a>
              <a
                href={getWhatsAppUrl(advisorConfig.whatsAppMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Disclaimer Section */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-400 text-xs tracking-wide uppercase">
              <span>Mandatory Legal & Regulatory Disclaimer</span>
            </div>
            <p>
              {advisorConfig.website.legalNotice}
            </p>
            <p className="text-[11px] text-slate-500">
              Life Insurance Corporation of India (LIC) names, logos, and product trademarks belong solely to Life Insurance Corporation of India. This website is independently managed by Sudip Kumar Pathak for client advisory, facilitation, and customer support.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Modal Triggers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {advisorConfig.advisor.fullName} ({advisorConfig.advisor.popularName}). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer underline"
            >
              Legal Disclaimer
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer underline"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <a
              href="https://licindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              Official LIC Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
