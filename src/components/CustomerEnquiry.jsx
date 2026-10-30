import React, { useState, useRef } from 'react';
import { Send, MessageCircle, User, Phone, CheckCircle, AlertCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { buildEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { sanitizeText, isValidMobile } from '../utils/security';

export default function CustomerEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    ageGroup: '26 – 35 Years',
    occupation: 'Salaried Employee',
    category: 'Term Insurance',
    hasExistingPolicy: 'No',
    preferredContact: 'WhatsApp',
    message: '',
    // Honeypot field: invisible to human users, traps spam bots
    honeypotField: ''
  });

  const [privacyConsent, setPrivacyConsent] = useState(true);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const lastSubmitTime = useRef(0);

  const ageGroups = ['18 – 25 Years', '26 – 35 Years', '36 – 50 Years', '50+ Years'];
  const occupations = ['Salaried Employee', 'Business Owner / Trader', 'Self-Employed Professional', 'Homemaker', 'Student / Other'];
  const categories = [
    'Term Insurance',
    'Endowment Plans',
    'Whole Life Insurance',
    'Money Back Plans',
    "Children's Future Planning",
    'Retirement and Pension Planning',
    'ULIP Plans',
    'Savings and Protection Plans',
    'Existing Policy Assistance',
    'General Insurance Guidance'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check: If bot filled the hidden field, reject immediately
    if (formData.honeypotField) {
      console.warn('Spam bot trap triggered.');
      return;
    }

    // 2. Client-side rate limiting / cooldown (prevent repeated rapid submissions)
    const now = Date.now();
    if (now - lastSubmitTime.current < 4000) {
      setError('Please wait a few seconds before sending another enquiry.');
      return;
    }

    // 3. Name sanitization & validation
    const cleanedName = sanitizeText(formData.name, 100);
    if (!cleanedName || cleanedName.length < 2) {
      setError('Please enter your valid full name (minimum 2 characters).');
      return;
    }

    // 4. Strict Indian mobile number validation
    const rawDigits = formData.mobile.replace(/\D/g, '');
    if (!isValidMobile(rawDigits)) {
      setError('Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).');
      return;
    }

    // 5. Privacy consent check
    if (!privacyConsent) {
      setError('Please confirm that you agree to proceed with sending this enquiry via WhatsApp.');
      return;
    }

    setError('');
    setSubmitted(true);
    lastSubmitTime.current = now;

    // Build URL-encoded WhatsApp link
    const waUrl = buildEnquiryWhatsAppUrl({
      ...formData,
      name: cleanedName,
      mobile: rawDigits
    });

    // Securely open WhatsApp in new tab
    const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (win) {
      win.opener = null; // Protection against window.opener tabnabbing
    }

    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  // Dynamic live WhatsApp message preview
  const previewMessage = `Hello Guddu Baba,
I would like to enquire about LIC insurance planning.
--------------------------------
Name: ${sanitizeText(formData.name, 50) || '[Customer Name]'}
Mobile: ${formData.mobile.replace(/\D/g, '').slice(0, 10) || '[10-Digit Mobile]'}
Age Group: ${formData.ageGroup}
Occupation: ${formData.occupation}
Interested In: ${formData.category}
Existing LIC Policy: ${formData.hasExistingPolicy}
Preferred Contact: ${formData.preferredContact}${formData.message ? `\nMessage: ${sanitizeText(formData.message, 200)}` : ''}
--------------------------------
Please contact me.`;

  return (
    <section id="enquiry" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100/70 border border-green-200 mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-green-600" />
            <span>Encrypted Direct WhatsApp Submission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Send an Insurance Enquiry Directly to Guddu Baba
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Fill in your details below. Your information is processed safely in your browser and transferred directly to WhatsApp. No personal data is stored on external servers.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {error && (
              <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 text-sm text-red-700 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-2.5 text-sm text-green-800 animate-in fade-in">
                <CheckCircle className="w-5 h-5 shrink-0 text-green-600 mt-0.5" />
                <div>
                  <p className="font-bold">Opening WhatsApp...</p>
                  <p className="text-xs text-green-700 mt-0.5">
                    Your details have been pre-filled. Simply press 'Send' in WhatsApp to connect with Guddu Baba.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* Anti-Spam Honeypot Field (Hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypotField">Do not fill this field</label>
                <input
                  type="text"
                  id="honeypotField"
                  name="honeypotField"
                  value={formData.honeypotField}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Customer Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Mobile Number & Age Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      maxLength={14}
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ageGroup" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Age Group <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="ageGroup"
                      name="ageGroup"
                      value={formData.ageGroup}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                    >
                      {ageGroups.map((grp) => (
                        <option key={grp} value={grp}>{grp}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Occupation & Insurance Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="occupation" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Occupation
                  </label>
                  <div className="relative">
                    <select
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                    >
                      {occupations.map((occ) => (
                        <option key={occ} value={occ}>{occ}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Insurance Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Existing LIC Policy & Preferred Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Do you have an existing LIC Policy?
                  </span>
                  <div className="flex gap-4 pt-1.5">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="hasExistingPolicy"
                          value={opt}
                          checked={formData.hasExistingPolicy === opt}
                          onChange={handleChange}
                          className="w-4 h-4 text-amber-500 focus:ring-amber-400"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Contact Method
                  </span>
                  <div className="flex gap-4 pt-1.5">
                    {['WhatsApp', 'Phone Call'].map((method) => (
                      <label key={method} className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="w-4 h-4 text-amber-500 focus:ring-amber-400"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Specific Questions or Coverage Goals <span className="text-slate-400 text-[10px] font-normal">(Optional, max 500 chars)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Looking for ₹50 Lakh term cover, or planning child's education for age 18..."
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
                ></textarea>
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                  />
                  <span>
                    I agree to send my enquiry directly to Sudip Kumar Pathak via WhatsApp. I understand no sensitive financial credentials or passwords will ever be requested.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-green-600/25 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{advisorConfig.buttons.sendEnquiry}</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Server Storage &bull; Direct Client-Side WhatsApp Handshake</span>
              </div>

            </form>
          </div>

          {/* Right Column: Live Message Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live WhatsApp Box */}
            <div className="bg-[#e5ddd5] rounded-3xl p-5 border border-slate-300 shadow-md">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-300/70">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs font-bold text-slate-700 ml-2">
                  Live WhatsApp Message Preview
                </span>
              </div>

              {/* Message Bubble */}
              <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-200 text-xs text-slate-800 whitespace-pre-line leading-relaxed font-mono">
                {previewMessage}
                <div className="text-[10px] text-slate-400 text-right mt-2">
                  Ready to send &bull; Live Preview
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
                <span>Advisor: <strong>Sudip Kumar Pathak</strong></span>
                <span className="font-semibold text-green-700">+91 {advisorConfig.contact.phone}</span>
              </div>
            </div>

            {/* Direct Calling Alternative */}
            <div className="bg-[#002b49] text-white rounded-3xl p-6 border border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Prefer a direct voice call?</h4>
                  <p className="text-xs text-slate-300">Available Mon–Sun 8 AM – 9 PM</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Connect directly with Sudip Kumar Pathak (Guddu Baba) on his direct mobile for urgent policy assistance or fast questions.
              </p>
              <a
                href={`tel:+91${advisorConfig.contact.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-colors shadow"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call {advisorConfig.contact.displayPhone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
