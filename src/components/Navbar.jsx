import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Awareness', href: '#awareness' },
    { name: 'Life Stages', href: '#life-stages' },
    { name: 'Plans', href: '#plans' },
    { name: 'How It Works', href: '#journey' },
    { name: 'Knowledge', href: '#knowledge-blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 shadow-md py-2.5 border-b border-slate-200' 
        : 'bg-[#002b49]/95 backdrop-blur-md py-3 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`font-black tracking-tight text-sm sm:text-base lg:text-lg leading-tight transition-colors ${
                  isScrolled ? 'text-[#002b49]' : 'text-white'
                }`}>
                  {advisorConfig.advisor.fullName}
                </span>
                <span className={`text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-md ${
                  isScrolled 
                    ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                    : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                }`}>
                  {advisorConfig.advisor.popularName}
                </span>
              </div>
              <p className={`text-[11px] sm:text-xs ${isScrolled ? 'text-slate-500' : 'text-amber-200/90'} font-medium line-clamp-1`}>
                {advisorConfig.advisor.profession} • <span className="hidden sm:inline">{advisorConfig.advisor.organization}</span><span className="sm:hidden">LIC</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden 2xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold transition-colors duration-200 relative group py-1 whitespace-nowrap ${
                  isScrolled ? 'text-slate-700 hover:text-[#002b49]' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Medium Desktop Compact Nav (for 1024px to 1536px) */}
          <nav className="hidden lg:flex 2xl:hidden items-center gap-4">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold transition-colors duration-200 whitespace-nowrap ${
                  isScrolled ? 'text-slate-700 hover:text-[#002b49]' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`text-xs font-bold transition-colors duration-200 ${
                isScrolled ? 'text-slate-700 hover:text-[#002b49]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={getCallingUrl()}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all border ${
                isScrolled 
                  ? 'border-slate-300 text-slate-800 hover:bg-slate-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              title={`Direct Call: ${advisorConfig.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{advisorConfig.contact.phone}</span>
            </a>
            
            <a
              href={getWhatsAppUrl(advisorConfig.hero.consultationWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm hover:shadow transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getCallingUrl()}
              className={`p-2 rounded-lg border ${
                isScrolled ? 'border-slate-300 text-[#002b49]' : 'border-white/30 text-white'
              }`}
              aria-label="Call Advisor"
            >
              <Phone className="w-4 h-4 text-amber-500 fill-amber-500" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-900 border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-[#002b49] hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={getCallingUrl()}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border border-slate-300 text-slate-800 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>Call {advisorConfig.contact.phone}</span>
              </a>
              <a
                href={getWhatsAppUrl(advisorConfig.hero.consultationWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{advisorConfig.buttons.scheduleConsultation}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
