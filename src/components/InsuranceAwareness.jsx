import React from 'react';
import { ShieldAlert, TrendingUp, Home, Landmark, CheckCircle2, MessageCircle } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

const awarenessIconComponents = [TrendingUp, Home, ShieldAlert, Landmark];
const awarenessIconColors = ['text-amber-600', 'text-blue-600', 'text-emerald-600', 'text-indigo-600'];

export default function InsuranceAwareness() {
  return (
    <section id="awareness" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-200 mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>{advisorConfig.awareness.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            {advisorConfig.awareness.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {advisorConfig.awareness.subheading}
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisorConfig.awareness.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {React.createElement(awarenessIconComponents[index % awarenessIconComponents.length], {
                    className: `w-7 h-7 ${awarenessIconColors[index % awarenessIconColors.length]}`
                  })}
                </div>
                <h3 className="text-lg font-bold text-[#002b49] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                <span>Essential Protection Factor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#002b49] to-[#003860] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              Awareness Tip by Guddu Baba
            </span>
            <h4 className="text-xl sm:text-2xl font-bold">
              Unsure if your current cover matches your family's needs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Calculate your Human Life Value (HLV) and check if your liabilities are adequately covered before life changes.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Guddu Baba, I would like to review whether my existing insurance cover is adequate for my family.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-all shadow-md hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-slate-900" />
            <span>Request Policy Assessment</span>
          </a>
        </div>

      </div>
    </section>
  );
}
