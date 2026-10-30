import React from 'react';
import { Briefcase, Heart, GraduationCap, Sun, CheckCircle2, MessageCircle } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function LifeStagesPlanning() {
  const stageIcons = {
    'young-professionals': <Briefcase className="w-7 h-7 text-blue-600" />,
    'married-couples': <Heart className="w-7 h-7 text-rose-600" />,
    'parents': <GraduationCap className="w-7 h-7 text-purple-600" />,
    'senior-citizens': <Sun className="w-7 h-7 text-amber-600" />
  };

  return (
    <section id="life-stages" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-3">
            <span>Life-Stage Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Insurance Planning for Every Stage of Life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Your financial priorities evolve as you grow. Explore tailored LIC protection strategies built for your specific stage of life.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Life Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisorConfig.lifeStages.map((stage) => {
            const waUrl = getWhatsAppUrl(stage.whatsAppMessage);

            return (
              <div
                key={stage.id}
                className="bg-slate-50/70 rounded-3xl border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group p-6 sm:p-7"
              >
                <div>
                  
                  {/* Icon & Age Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 group-hover:bg-amber-50 group-hover:border-amber-200 flex items-center justify-center transition-colors shadow-xs">
                      {stageIcons[stage.id] || <Briefcase className="w-7 h-7 text-amber-600" />}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-800">
                      {stage.ageRange}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#002b49] group-hover:text-amber-600 transition-colors mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-600 mb-3">
                    {stage.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {stage.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </p>
                    {stage.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Types */}
                  <div className="pt-3 border-t border-slate-200/60 mb-6">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                      Recommended:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {stage.recommendedTypes.map((type, idx) => (
                        <span key={idx} className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Dedicated WhatsApp CTA Button */}
                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm hover:shadow transition-all group-hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enquire for {stage.title}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
