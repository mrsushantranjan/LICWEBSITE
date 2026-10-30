import React from 'react';
import { Landmark, Layers, ShieldCheck, UserCheck, HeartHandshake, Award, CheckCircle } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

const pillarIconComponents = [Landmark, Layers, ShieldCheck, UserCheck, HeartHandshake];
const pillarIconColors = ['text-amber-500', 'text-blue-400', 'text-emerald-400', 'text-indigo-400', 'text-rose-400'];

export default function WhyChooseLic() {
  return (
    <section id="why-lic" className="py-20 bg-[#002b49] text-white relative overflow-hidden scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Unmatched Trust & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Life Insurance Corporation of India (LIC)?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            For generations, LIC has stood as the pillar of financial security for millions of families across India, offering sovereign trust and lifelong assurance.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisorConfig.whyChooseLic.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between ${
                index === 3 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all">
                  {React.createElement(pillarIconComponents[index % pillarIconComponents.length], {
                    className: `w-8 h-8 ${pillarIconColors[index % pillarIconColors.length]}`
                  })}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Pillar 0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-200">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Reliable & Verified Guidance</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Connect with Sudip Kumar Pathak */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-7 text-slate-950 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-slate-950 stroke-[2.2]" />
              </div>
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Direct Advisor Support
              </span>
              <h3 className="text-2xl font-extrabold text-slate-950 mt-1 mb-3">
                Connect Directly with Guddu Baba
              </h3>
              <p className="text-sm text-slate-900 font-medium leading-relaxed">
                Have questions about selecting the right policy or servicing your existing LIC plans? Get direct answers over a quick call or WhatsApp message.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-900/20 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getWhatsAppUrl(advisorConfig.whatsAppMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold bg-[#002b49] text-white hover:bg-slate-900 transition-colors shadow"
              >
                WhatsApp Inquiry
              </a>
              <a
                href={getCallingUrl()}
                className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-slate-950 hover:bg-slate-100 transition-colors shadow"
              >
                Call: {advisorConfig.advisor.contactNumber}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
