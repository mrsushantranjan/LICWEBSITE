import React from 'react';
import { X, ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';

export default function LegalModal({ isOpen, onClose, initialTab = 'disclaimer' }) {
  const [activeTab, setActiveTab] = React.useState(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        role="dialog" 
        aria-modal="true"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
      >
        
        {/* Header */}
        <div className="px-6 py-5 bg-[#002b49] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold">Legal Notice & Policies</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3">
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'border-amber-500 text-[#002b49]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Disclaimer & Regulatory Status
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-amber-500 text-[#002b49]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          {activeTab === 'disclaimer' ? (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                <h4 className="font-bold text-amber-900 mb-1">
                  Independent LIC Insurance Advisor Notice
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {advisorConfig.website.legalNotice}
                </p>
              </div>

              <h5 className="font-bold text-[#002b49] text-base">Key Declarations:</h5>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>This website is owned and operated independently by <strong>Sudip Kumar Pathak (Guddu Baba)</strong> in the capacity of an authorized Life Insurance Corporation of India (LIC) Insurance Advisor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>This website is <strong>not</strong> the corporate or official portal of Life Insurance Corporation of India (LIC). For official notifications, please refer directly to <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">licindia.in</a>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>All information published on this website is for general awareness and advisory enquiry purposes. Insurance is the subject matter of solicitation. Policy terms, bonuses, and returns are strictly as declared by LIC of India.</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Zero Database / Pure Client-Side Privacy</h4>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    We value your personal privacy. This website does not store, transmit to third-party databases, or sell any information you enter into the enquiry form.
                  </p>
                </div>
              </div>

              <h5 className="font-bold text-[#002b49] text-base">How Your Information is Handled:</h5>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>When you submit the enquiry form, your message is parsed locally in your web browser and transferred directly into your personal WhatsApp application.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>No cookies or profiling trackers are used to sell your data to external telemarketing firms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>Any documents or personal details shared during subsequent consultations remain strictly confidential between you and your advisor.</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-bold bg-[#002b49] text-white hover:bg-[#003860] transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>

    </div>
  );
}
