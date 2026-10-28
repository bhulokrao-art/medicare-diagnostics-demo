import React from 'react';
import { 
  Calendar, 
  Package, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Microscope, 
  FileCheck, 
  Sparkles,
  ArrowRight,
  Droplet,
  Home
} from 'lucide-react';

export default function Hero({ onOpenSampleReport }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-96 h-96 rounded-full bg-navy-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Copy, Action Buttons, Trust Metrics */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Modern Automated Pathology & Preventive Health</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              Your Health, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-navy-800">
                Our Priority.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Experience gold-standard medical diagnostic precision with high-accuracy 
              automated testing, gentle phlebotomy, and rapid same-day digital reports — 
              at our modern centre or right from the comfort of your home.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('#book-appointment')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Test</span>
              </button>

              <button
                onClick={() => scrollTo('#packages')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-900 font-semibold text-sm sm:text-base border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all duration-200"
              >
                <Package className="w-5 h-5 text-teal-600" />
                <span>Explore Packages</span>
              </button>

              <button
                onClick={onOpenSampleReport}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-teal-700 hover:text-teal-800 hover:bg-teal-50/70 font-semibold text-xs sm:text-sm transition-all"
              >
                <FileCheck className="w-4 h-4 text-teal-600" />
                <span>Preview Sample Report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Key Diagnostic Strengths
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 leading-tight">
                    Automated Analyzers
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 leading-tight">
                    Same-Day Digital Reports
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Home className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 leading-tight">
                    Hygienic Home Collection
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 leading-tight">
                    Barcoded Sample Safety
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Laboratory & Test Status Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Subtle Glass Effect */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative z-10 space-y-5">
                
                {/* Header within Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-900 text-teal-400 flex items-center justify-center font-bold">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-navy-950">Clinical Laboratory</h2>
                      <p className="text-xs text-slate-500">Automated Sample Processing</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live System
                  </span>
                </div>

                {/* Simulated Live Processing Queue */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Sample Workflow Tracker (Mock Demo)
                  </div>

                  {/* Item 1 */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">
                        CBC
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy-900">Complete Blood Count</div>
                        <div className="text-[11px] text-slate-500">Barcode #MCD-7821</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Report Ready
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-100 text-navy-800 flex items-center justify-center text-xs font-bold">
                        TSH
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy-900">Thyroid Profile (T3, T4, TSH)</div>
                        <div className="text-[11px] text-slate-500">Analyzer Batch 04</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                      Analyzing
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                        LIP
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy-900">Lipid Profile</div>
                        <div className="text-[11px] text-slate-500">Home Pickup Sample</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      Sample Logged
                    </span>
                  </div>
                </div>

                {/* Laboratory Metric Cards Row */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                    <div className="text-lg font-extrabold text-teal-800">100%</div>
                    <div className="text-[11px] text-teal-700 font-medium">Vacuum Sterile Tubes</div>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-50 border border-navy-100 text-center">
                    <div className="text-lg font-extrabold text-navy-900">4-6 Hrs</div>
                    <div className="text-[11px] text-navy-700 font-medium">Avg Routine Report</div>
                  </div>
                </div>

                {/* Interactive Demo Report Callout */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-navy-900 to-navy-950 text-white flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold flex items-center gap-1.5 text-teal-300">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Interactive Portfolio Demo</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      See how patients view validated lab findings.
                    </p>
                  </div>
                  <button
                    onClick={onOpenSampleReport}
                    className="shrink-0 text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View Report
                  </button>
                </div>

              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Secure Reports</div>
                  <div className="text-[10px] text-slate-500">SMS & WhatsApp Delivery</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
