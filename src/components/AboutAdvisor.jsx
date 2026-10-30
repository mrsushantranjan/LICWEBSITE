import React from 'react';
import { UserCheck, Shield, HelpCircle, FileCheck2, HeadphonesIcon, Phone, MessageCircle, Quote } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function AboutAdvisor() {
  const serviceIcons = [
    <Shield className="w-6 h-6 text-amber-600" />,
    <FileCheck2 className="w-6 h-6 text-blue-600" />,
    <HelpCircle className="w-6 h-6 text-emerald-600" />,
    <HeadphonesIcon className="w-6 h-6 text-indigo-600" />
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-3">
            <UserCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Professional Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Meet Your Trusted Insurance Advisor
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Welcome Message Card with Photograph */}
        <div className="bg-gradient-to-br from-slate-50 via-amber-50/25 to-blue-50/30 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Advisor Portrait Image */}
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 mx-auto">
                  <img
                    src={advisorConfig.advisor.portraitImage}
                    alt="Sudip Kumar Pathak (Guddu Baba)"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#002b49] text-white px-4 py-1 rounded-full text-xs font-bold shadow whitespace-nowrap border border-white/40">
                  {advisorConfig.advisor.badgeText}
                </div>
              </div>
            </div>

            {/* Welcome Text Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-4 h-4 fill-amber-600" />
                <span>{advisorConfig.advisor.welcomeHeading}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002b49]">
                {advisorConfig.advisor.fullName}{' '}
                <span className="text-amber-600 font-bold">({advisorConfig.advisor.popularName})</span>
              </h3>
              
              <p className="text-sm font-semibold text-slate-500">
                {advisorConfig.advisor.profession} • {advisorConfig.advisor.organization}
              </p>

              <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed italic bg-white/70 p-4 rounded-2xl border-l-4 border-amber-500 shadow-xs">
                "{advisorConfig.advisor.welcomeMessage}"
              </blockquote>

              <p className="text-sm text-slate-600 leading-relaxed">
                Choosing the right life insurance coverage is one of the most critical decisions for your family's future. With a commitment to clear explanations, zero pressure, and responsive customer service, Sudip Kumar Pathak ensures you choose policies that match your exact stage of life.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(advisorConfig.whatsAppMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl text-sm font-bold bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{advisorConfig.buttons.chatOnWhatsApp}</span>
                </a>
                <a
                  href={getCallingUrl()}
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl text-sm font-bold bg-[#002b49] text-white hover:bg-[#003860] shadow-md transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {advisorConfig.contact.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "personalized-guidance",
              title: "Personalized Insurance Guidance",
              description: "Thorough assessment of your financial commitments, liabilities, and family aspirations to recommend the most optimal cover."
            },
            {
              id: "policy-assistance",
              title: "Policy-Related Assistance",
              description: "Hassle-free help with ongoing policy queries, premium payment guidance, revival processes, and documentation."
            },
            {
              id: "suitable-plans",
              title: "Guidance for Selecting Suitable Plans",
              description: "Clear, unbiased explanation of term, endowment, money back, and pension plans without complex jargon."
            },
            {
              id: "customer-support",
              title: "Customer Support and Assistance",
              description: "Prompt phone and WhatsApp support for smooth coordination, nominee updates, and lifetime service support."
            }
          ].map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400/60 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-amber-50 border border-slate-100 group-hover:border-amber-200 flex items-center justify-center mb-5 transition-colors">
                  {serviceIcons[index % serviceIcons.length]}
                </div>
                <h4 className="text-lg font-bold text-[#002b49] mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Pillar 0{index + 1}</span>
                <a
                  href={getWhatsAppUrl(`Hello Guddu Baba, I would like to enquire about: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Ask Question &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
