import React from 'react';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  AlertTriangle, 
  ShieldAlert,
  ChevronRight,
  Heart
} from 'lucide-react';
import { businessInfo, testsData, packagesData } from '../data/diagnosticData';

export default function Footer({ onOpenSampleReport }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 relative border-t border-navy-800">
      
      {/* Prominent Mandatory Portfolio Disclaimer Strip */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 py-4 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-bold tracking-wide uppercase">
            PORTFOLIO SHOWCASE NOTICE:
          </span>
          <span className="text-amber-200/90 text-center sm:text-left">
            DEMO ONLY — NOT A REAL DIAGNOSTIC CENTRE. All medical test profiles, addresses, numbers, and appointment forms are fictional mockups built for web design evaluation.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-navy-950 font-bold shadow-md">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl text-white tracking-tight">MediCare</span>
                  <span className="font-bold text-xl text-teal-400 tracking-tight">Diagnostics</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-teal-300 tracking-widest block">
                  DEMO HEALTHCARE SHOWCASE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              MediCare Diagnostics Demo represents a modern, responsive, patient-focused web portal. 
              Engineered with clean React architecture, Tailwind CSS styling, and accessible healthcare design principles.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="text-teal-400 font-semibold">Web Development Portfolio Concept</p>
              <p>Designed for front-end demonstration, speed, and responsive aesthetics.</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Tests', href: '#tests' },
                { name: 'Health Packages', href: '#packages' },
                { name: 'Book Appointment', href: '#book-appointment' },
                { name: 'Home Collection', href: '#home-collection' },
                { name: 'Contact Us', href: '#contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="hover:text-teal-400 transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Tests */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Core Tests
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {testsData.slice(0, 6).map((test) => (
                <li key={test.id}>
                  <button
                    onClick={() => scrollTo('#tests')}
                    className="hover:text-teal-400 transition-colors text-left truncate max-w-full flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
                    <span className="truncate">{test.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenSampleReport}
                  className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1 pt-1"
                >
                  <span>→ View Sample Patient Report</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Placeholders */}
          <div className="lg:col-span-3 space-y-3 text-xs text-slate-400">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Desk
            </h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{businessInfo.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{businessInfo.phones[0]}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{businessInfo.email}</span>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{businessInfo.workingHours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 MediCare Diagnostics — DEMO. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Built with React, Vite & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-800 hover:bg-teal-600 text-slate-300 hover:text-white transition-colors"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
