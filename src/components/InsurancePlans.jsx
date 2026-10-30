import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PiggyBank, 
  Clock, 
  Coins, 
  GraduationCap, 
  HeartHandshake, 
  TrendingUp, 
  Umbrella,
  MessageCircle,
  CheckCircle2,
  Info
} from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function InsurancePlans() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mapping plan category icons
  const iconMap = {
    'term-insurance': <ShieldCheck className="w-7 h-7 text-blue-600" />,
    'endowment-plans': <PiggyBank className="w-7 h-7 text-amber-600" />,
    'whole-life-insurance': <Clock className="w-7 h-7 text-indigo-600" />,
    'money-back-plans': <Coins className="w-7 h-7 text-emerald-600" />,
    'children-future': <GraduationCap className="w-7 h-7 text-purple-600" />,
    'retirement-pension': <HeartHandshake className="w-7 h-7 text-rose-600" />,
    'ulip-plans': <TrendingUp className="w-7 h-7 text-cyan-600" />,
    'savings-protection': <Umbrella className="w-7 h-7 text-amber-600" />
  };

  const categories = ['All', 'Protection', 'Savings', 'Children', 'Retirement', 'Investment'];

  const filteredPlans = activeFilter === 'All'
    ? advisorConfig.insurancePlans
    : advisorConfig.insurancePlans.filter(p => p.category === activeFilter);

  return (
    <section id="plans" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#002b49] bg-blue-100/60 border border-blue-200 mb-3">
            <Umbrella className="w-3.5 h-3.5 text-blue-700" />
            <span>Comprehensive Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            LIC Insurance Solutions For Every Life Milestone
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore trusted life insurance and investment categories designed to safeguard your family's future and fulfill your lifelong aspirations.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? 'bg-[#002b49] text-white shadow-md shadow-blue-900/20 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => {
            const prefilledMsg = advisorConfig.whatsAppMessages[plan.whatsAppKey] || advisorConfig.whatsAppMessages.default;
            const waUrl = getWhatsAppUrl(prefilledMsg);

            return (
              <div
                key={plan.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  
                  {/* Top Bar in Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-amber-50 group-hover:border-amber-200 flex items-center justify-center transition-colors">
                      {iconMap[plan.id] || <ShieldCheck className="w-7 h-7 text-amber-600" />}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                      {plan.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      {plan.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#002b49] group-hover:text-amber-600 transition-colors leading-snug mt-0.5">
                      {plan.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {plan.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card CTA Footer */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 mt-auto">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm hover:shadow transition-all group-hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{advisorConfig.buttons.enquireWhatsApp}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 bg-blue-50/60 border border-blue-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-[#002b49]">Important Notice: </span>
            Product eligibility, exact premium calculations, surrender values, loan terms, and tax benefits depend on current LIC guidelines and prevailing Income Tax provisions. For verified policy details and illustrations, please contact Sudip Kumar Pathak directly.
          </div>
        </div>

      </div>
    </section>
  );
}
