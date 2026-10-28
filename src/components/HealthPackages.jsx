import React from 'react';
import { 
  Package, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Heart, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { packagesData } from '../data/diagnosticData';

export default function HealthPackages({ onSelectPackage }) {
  const handlePackageClick = (packageName) => {
    if (onSelectPackage) {
      onSelectPackage(packageName);
    }
    const formElement = document.querySelector('#book-appointment');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Preventive Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Curated Health Packages
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive diagnostic checkup packages thoughtfully assembled for individuals, 
            working professionals, senior citizens, and women's health needs.
          </p>
          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Packages feature illustrative clinical descriptions without invented commercial pricing.</span>
            </span>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packagesData.map((pkg, idx) => {
            const isFeatured = pkg.id === 'pkg-complete';

            return (
              <div 
                key={pkg.id}
                className={`rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured 
                    ? 'border-teal-500 shadow-xl bg-gradient-to-b from-teal-50/40 via-white to-white ring-2 ring-teal-500/20' 
                    : 'border-slate-200 shadow-sm hover:shadow-md bg-white'
                }`}
              >
                {/* Highlight Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md tracking-wider uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Comprehensive</span>
                  </div>
                )}

                <div className="p-6 space-y-5">
                  {/* Package Tag & Turnaround */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                      {pkg.tag}
                    </span>
                    <h3 className="text-xl font-extrabold text-navy-950 leading-snug">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Summary / Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Parameter Count Pill */}
                  <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-between text-xs font-semibold text-navy-900">
                    <span>Coverage</span>
                    <span className="text-teal-700 font-bold">{pkg.totalParameters}</span>
                  </div>

                  {/* Key Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Key Inclusions:
                    </p>
                    <ul className="space-y-2">
                      {pkg.includedHighlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Target Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Users className="w-3 h-3 text-teal-600" />
                      <span>Recommended For:</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {pkg.recommendedFor}
                    </p>
                  </div>
                </div>

                {/* Package Footer with Action */}
                <div className="p-6 pt-0">
                  <div className="text-[10px] text-slate-400 mb-3 italic">
                    {pkg.preparation}
                  </div>
                  <button
                    onClick={() => handlePackageClick(pkg.name)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white shadow-md shadow-teal-500/20'
                        : 'bg-navy-900 hover:bg-teal-600 text-white shadow-xs'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Package</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Home Sample Availability Banner */}
        <div className="mt-12 bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Doorstep Convenience</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              All Health Checkup Packages are Eligible for Home Sample Pickup
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Fasting at home is easier. Our trained phlebotomists arrive on time with sterile 
              vacuum tubes and cold storage kits.
            </p>
          </div>

          <a
            href="#home-collection"
            className="shrink-0 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <span>Request Home Collection</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
