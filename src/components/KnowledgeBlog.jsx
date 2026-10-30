import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, MessageCircle, X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { advisorConfig } from '../config/advisorConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function KnowledgeBlog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="knowledge-blog" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Insurance Literacy & Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b49] tracking-tight">
            Insurance Knowledge and Awareness Blog
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, educational insights to help you make informed decisions about life insurance, savings, and future security.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 8 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisorConfig.blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-50/70 rounded-2xl border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="p-6">
                
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#002b49] group-hover:text-amber-600 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {post.summary}
                </p>

              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-slate-100/60 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(post)}
                  className="text-xs font-bold text-[#002b49] hover:text-amber-600 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={getWhatsAppUrl(`${post.whatsAppPrompt} "${post.title}"`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#25D366] hover:text-[#20ba59] flex items-center gap-1 transition-colors"
                  title="Ask on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>Ask Guddu Baba</span>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Interactive Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 bg-[#002b49] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  {selectedArticle.category} &bull; {selectedArticle.readTime}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-1">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-700 text-sm leading-relaxed">
              <p className="text-base text-slate-800 font-medium">
                {selectedArticle.summary}
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="leading-relaxed">
                  {selectedArticle.content}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#002b49] uppercase tracking-wide mb-2.5">
                  Key Takeaways:
                </h4>
                <div className="space-y-2">
                  {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200 text-xs text-blue-900 leading-relaxed">
                💡 <strong>Educational Note:</strong> This guide provides general insurance information under IRDAI guidelines and does not guarantee financial returns. Consult Sudip Kumar Pathak (Guddu Baba) for plan-specific details.
              </div>
            </div>

            {/* Modal Footer with WhatsApp CTA */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Have questions about this topic?
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(`${selectedArticle.whatsAppPrompt} "${selectedArticle.title}"`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Discuss on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
