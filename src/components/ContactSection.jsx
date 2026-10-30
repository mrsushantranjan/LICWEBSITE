import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Navigation, Calendar } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getCallingUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function ContactSection() {
  const { officeLocation } = advisorConfig;

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Communication & Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Get in Touch with Sudip Kumar Pathak
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Reach out through a direct phone call or WhatsApp message for personal consultations and policy servicing.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Main Advisor Contact Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#002b49] via-[#003860] to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{advisorConfig.advisor.profession}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {advisorConfig.advisor.fullName}
              </h3>
              <p className="text-xl font-bold text-amber-400 mt-0.5">
                ({advisorConfig.advisor.popularName})
              </p>
              <p className="text-sm text-slate-300 mt-1 font-medium">
                {advisorConfig.advisor.organization}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Direct Phone Call</div>
                    <div className="text-base font-bold text-white tracking-wide">
                      {advisorConfig.contact.displayPhone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Official WhatsApp Chat</div>
                    <div className="text-base font-bold text-white tracking-wide">
                      +91 {advisorConfig.contact.whatsAppNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Two Prominent Required Buttons */}
            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={getCallingUrl()}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 shadow-md transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-slate-900" />
                <span>{advisorConfig.buttons.callAdvisor}</span>
              </a>

              <a
                href={getWhatsAppUrl(advisorConfig.whatsAppMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{advisorConfig.buttons.chatOnWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Location & Google Maps Section (Configurable) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {officeLocation.badge}
                </span>
                <h4 className="text-xl font-bold text-[#002b49] mt-1">
                  {officeLocation.title}
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Consultation Location</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {officeLocation.addressLine1}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {officeLocation.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Working Hours</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {officeLocation.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Service Area</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {officeLocation.serviceArea}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Card / Placeholder */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700">Map & Directions</span>
                  <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                    {officeLocation.isConfigured ? 'Verified Pin' : 'Configurable Location'}
                  </span>
                </div>

                <div className="h-28 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-center p-3">
                  <MapPin className="w-6 h-6 text-slate-400 mb-1" />
                  <p className="text-xs text-slate-600 font-medium">
                    {officeLocation.city}, {officeLocation.country}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    In-person visits by prior appointment
                  </p>
                </div>

                {/* 'Get Directions' button only when valid location is configured */}
                {officeLocation.isConfigured && officeLocation.mapsDirectionsUrl ? (
                  <a
                    href={officeLocation.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                ) : (
                  <div className="mt-3 text-center">
                    <a
                      href={getWhatsAppUrl("Hello Guddu Baba, I would like to schedule an in-person meeting. Please share your office directions.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center justify-center gap-1"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Request Appointment & Address Details &rarr;</span>
                    </a>
                  </div>
                )}
              </div>

            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              💡 Need physical document pickup or policy revival assistance? We coordinate visits directly.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
