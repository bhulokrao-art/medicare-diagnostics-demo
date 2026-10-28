import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Navigation,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { businessInfo } from '../data/diagnosticData';

export default function ContactUs() {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [inquiryErrors, setInquiryErrors] = useState({});
  const [inquirySent, setInquirySent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const validateInquiry = () => {
    const errs = {};
    if (!inquiry.name.trim()) errs.name = 'Please provide your name.';
    if (!inquiry.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!inquiry.message.trim()) errs.message = 'Please type your enquiry message.';
    setInquiryErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!validateInquiry()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setInquirySent(true);
      setInquiry({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setInquirySent(false), 5000);
    }, 700);
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppModal(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Contact MediCare Diagnostics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have questions regarding test preparation, fasting, or sample collection? 
            Reach out via phone, WhatsApp enquiry, or send us a quick digital message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards, WhatsApp Button & Map Placeholder */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-navy-950">Diagnostic Facility</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {businessInfo.address}
                </p>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-navy-950">Phone Numbers</h3>
                <div className="space-y-1 text-xs text-slate-600">
                  <p>Main Helpline: <strong className="text-navy-900 font-semibold">{businessInfo.phones[0]}</strong></p>
                  <p>Home Pickup Desk: <strong className="text-navy-900 font-semibold">{businessInfo.phones[1]}</strong></p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-navy-950">Operating Hours</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {businessInfo.workingHours}
                </p>
                <p className="text-[11px] text-teal-700 font-medium pt-1">
                  Home Collection: {businessInfo.homeCollectionHours}
                </p>
              </div>

              {/* WhatsApp Enquiry Card */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-2xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-emerald-950">Instant WhatsApp Enquiry</h3>
                  <p className="text-xs text-emerald-800 leading-snug">
                    Chat with our virtual desk for quick test guidelines and appointment queries.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="mt-3 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>

            </div>

            {/* Stylized Interactive Map Placeholder */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-navy-950">Centre Location Map (Simulated)</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  GPS: 40.7128° N, 74.0060° W
                </span>
              </div>

              {/* Map Graphic Canvas */}
              <div className="relative h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* Stylized SVG Map Grid Graphics */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  {/* Road lines simulation */}
                  <path d="M -20 80 Q 200 120 500 70" stroke="#cbd5e1" strokeWidth="12" fill="none" />
                  <path d="M 120 -20 Q 180 150 150 300" stroke="#cbd5e1" strokeWidth="10" fill="none" />
                  <path d="M 320 -20 L 320 300" stroke="#cbd5e1" strokeWidth="8" fill="none" />
                  <path d="M 0 200 L 500 200" stroke="#38bdf8" strokeWidth="6" fill="none" opacity="0.4" />
                </svg>

                {/* Location Marker Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                  <div className="bg-navy-950 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl border border-teal-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                    <span>MediCare Diagnostics</span>
                  </div>
                  <div className="w-0.5 h-4 bg-navy-950"></div>
                  <div className="w-3 h-1 bg-black/30 rounded-full blur-2xs"></div>
                </div>

                {/* Bottom Overlay Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/90 shadow-md flex items-center justify-between">
                  <div className="text-xs">
                    <strong className="text-navy-950 block">Metro Health Plaza, Suite 402</strong>
                    <span className="text-slate-500 text-[11px]">Free patient parking available in Basement B1</span>
                  </div>
                  <button 
                    onClick={() => alert("Mock Map: In a production site, this opens Google Maps navigation for patients.")}
                    className="text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg border border-teal-200 transition"
                  >
                    Directions
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: General Enquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <div className="space-y-1 mb-6">
              <h3 className="text-xl font-bold text-navy-950">Send an Enquiry</h3>
              <p className="text-xs text-slate-500">
                Submit questions regarding report downloads, tests, or general queries.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-emerald-950 text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out. In our live environment, a support representative 
                  replies within 2 business hours.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                >
                  Send Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samuel Chen"
                    value={inquiry.name}
                    onChange={(e) => {
                      setInquiry({ ...inquiry, name: e.target.value });
                      if (inquiryErrors.name) setInquiryErrors({ ...inquiryErrors, name: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      inquiryErrors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                  {inquiryErrors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {inquiryErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="samuel@example.com"
                    value={inquiry.email}
                    onChange={(e) => {
                      setInquiry({ ...inquiry, email: e.target.value });
                      if (inquiryErrors.email) setInquiryErrors({ ...inquiryErrors, email: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      inquiryErrors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                  {inquiryErrors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {inquiryErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Fasting instructions for Lipid Profile"
                    value={inquiry.subject}
                    onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Type your question or query here..."
                    value={inquiry.message}
                    onChange={(e) => {
                      setInquiry({ ...inquiry, message: e.target.value });
                      if (inquiryErrors.message) setInquiryErrors({ ...inquiryErrors, message: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 resize-none ${
                      inquiryErrors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                  {inquiryErrors.message && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {inquiryErrors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message (Demo Only)</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 text-center">
              Response time demo: typically within 2 hours during normal centre hours.
            </div>
          </div>

        </div>

      </div>

      {/* WhatsApp Enquiry Interactive Simulation Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 animate-slideUp">
            
            {/* WhatsApp Header */}
            <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">MediCare Diagnostics Desk</h4>
                  <p className="text-[11px] text-emerald-200">Online • Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="text-white/80 hover:text-white text-xs font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            {/* Simulated Chat Area */}
            <div className="p-4 bg-slate-50 space-y-3 text-xs max-h-72 overflow-y-auto">
              <div className="p-3 bg-white rounded-2xl rounded-tl-none shadow-2xs border border-slate-200 max-w-[85%] space-y-1">
                <p className="text-slate-800">
                  Hello! Welcome to <strong>MediCare Diagnostics (Demo Desk)</strong>. 👋
                </p>
                <p className="text-slate-600 text-[11px]">
                  How can we help you today? You can ask about:
                </p>
                <ul className="text-[11px] text-slate-600 list-disc list-inside">
                  <li>Fasting rules for blood tests</li>
                  <li>Booking home collection</li>
                  <li>Package recommendations</li>
                </ul>
                <div className="text-[9px] text-slate-400 text-right">Just now</div>
              </div>

              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>This simulated chat shows how modern healthcare web apps engage patients directly.</span>
              </div>
            </div>

            {/* WhatsApp Actions Footer */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
              <a
                href={`https://wa.me/15550192834?text=${encodeURIComponent("Hello MediCare Diagnostics, I would like to inquire about diagnostic tests.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
              >
                <span>Open in Official WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
