import React from 'react';
import { Compass, CheckCircle2, ShieldCheck, FileText, Headphones, Sparkles } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

const stepIconComponents = [Compass, FileText, ShieldCheck, CheckCircle2, Headphones];
const stepIconColors = ['text-amber-600', 'text-blue-600', 'text-emerald-600', 'text-purple-600', 'text-rose-600'];

export default function TrustJourney() {
  return (
    <section id="journey" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/70 border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Advisory Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Your Insurance Journey, Our Guidance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A transparent, step-by-step advisory approach designed to provide total clarity, zero pressure, and lifelong peace of mind.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Connecting line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-500 -translate-y-8 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {advisorConfig.processSteps.map((step, index) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Step Header & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      {React.createElement(stepIconComponents[index % stepIconComponents.length], {
                        className: `w-6 h-6 ${stepIconColors[index % stepIconColors.length]}`
                      })}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-bold text-[#002b49] mt-0.5 mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <span>Step {index + 1} of 5</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Assurance Box */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            <strong>Advisory Philosophy:</strong> No unrealistic promises, no hidden conditions. Every policy recommendation is anchored on official LIC rules and tailored to your household stability.
          </p>
          <div className="mt-4">
            <a
              href={getWhatsAppUrl("Hello Guddu Baba, I would like to begin the 5-step insurance planning process for my family.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#20ba59]"
            >
              <span>Begin Your Journey with Guddu Baba on WhatsApp &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
