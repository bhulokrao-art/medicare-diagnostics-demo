import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqData } from '../data/diagnosticData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Everything you need to know about test preparation, report delivery timelines, 
            and doorstep sample collection.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-navy-950 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
