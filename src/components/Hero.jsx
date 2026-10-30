import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Calendar, HeartHandshake } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  // Rotating dynamic keywords
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % advisorConfig.hero.rotatingKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#002b49] via-[#003860] to-slate-900 text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Dynamic Rotating Headline, Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                {advisorConfig.advisor.badgeText}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/15">
                {advisorConfig.advisor.organization}
              </span>
            </div>

            {/* Advisor Profile Micro-Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3.5 sm:p-4 rounded-2xl max-w-lg mx-auto lg:mx-0 shadow-lg flex items-center gap-3.5 text-left">
              <img
                src={advisorConfig.advisor.portraitImage}
                alt="Sudip Kumar Pathak"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-amber-400/40 shadow shrink-0"
              />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                  Your Dedicated Advisor
                </span>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {advisorConfig.advisor.fullName}
                  </h2>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                    ({advisorConfig.advisor.popularName})
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  {advisorConfig.advisor.profession} • +91 {advisorConfig.contact.phone}
                </p>
              </div>
            </div>

            {/* Dynamic Rotating Headline */}
            <div className="min-h-[100px] sm:min-h-[120px] flex flex-col justify-center">
              <p className="text-lg sm:text-xl font-semibold text-slate-300">
                {advisorConfig.hero.mainHeadingStart}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 transition-all duration-300">
                {advisorConfig.hero.rotatingKeywords[currentKeywordIndex]}
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {advisorConfig.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={getWhatsAppUrl(advisorConfig.hero.consultationWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/25 transition-all duration-200 hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{advisorConfig.buttons.scheduleConsultation}</span>
              </a>

              <a
                href="#plans"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 hover:scale-[1.02]"
              >
                <span>{advisorConfig.buttons.explorePlans}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getCallingUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{advisorConfig.buttons.callNow}</span>
              </a>
            </div>

            {/* Keyword Pills */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Tailored Life Insurance Protection For:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {advisorConfig.hero.ctaKeywords.map((kw, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200 hover:border-amber-400/40 hover:text-amber-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    {kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Visual Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/30 bg-slate-800 group">
                <img
                  src={advisorConfig.advisor.heroFamilyImage}
                  alt="Family Financial Protection and LIC Insurance"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-amber-500/20 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
                        <Award className="w-4 h-4" />
                        <span>Sovereign Financial Assurance</span>
                      </div>
                      <p className="text-sm font-bold text-[#002b49] mt-0.5">
                        Guaranteed Security with LIC
                      </p>
                    </div>
                    <a
                      href={getCallingUrl()}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#002b49] text-white hover:bg-amber-600 transition-colors"
                    >
                      Call Advisor
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Personalized</p>
                  <p className="text-sm font-bold text-slate-900">Direct Guidance</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
