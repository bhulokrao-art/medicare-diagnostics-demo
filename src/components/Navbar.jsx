import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  AlertTriangle, 
  FileText, 
  ShieldCheck,
  Clock
} from 'lucide-react';
import { businessInfo } from '../data/diagnosticData';

export default function Navbar({ onOpenSampleReport }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Tests', href: '#tests' },
    { name: 'Packages', href: '#packages' },
    { name: 'Book Appointment', href: '#book-appointment' },
    { name: 'Home Collection', href: '#home-collection' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Demo Notice & Quick Info Banner */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            {/* Prominent Demo Badge */}
            <div className="flex items-center gap-2 text-amber-400 font-semibold tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>DEMO ONLY — NOT A REAL DIAGNOSTIC CENTRE</span>
              <span className="text-slate-400 font-normal hidden lg:inline">| Web Development Portfolio Showcase</span>
            </div>

            {/* Quick Contacts Placeholder */}
            <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Mon–Sat: 7AM–8PM</span>
              </span>
              <span className="hidden sm:inline-block text-slate-600">|</span>
              <a 
                href="tel:5550192834" 
                className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                title="Fictional Demo Phone"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>(555) 019-2834</span>
              </a>
              <span className="hidden sm:inline-block text-slate-600">|</span>
              <button
                onClick={onOpenSampleReport}
                className="flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Sample Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' 
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-navy-900 to-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-500/10 group-hover:scale-105 transition-transform duration-200">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-navy-900">
                    MediCare
                  </span>
                  <span className="font-bold text-xl tracking-tight text-teal-600">
                    Diagnostics
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500">
                    Pathology & Wellness
                  </span>
                  <span className="bg-teal-100 text-teal-800 text-[9px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider">
                    DEMO
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/70 transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenSampleReport}
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-navy-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                title="View what a digital laboratory report looks like"
              >
                <FileText className="w-4 h-4 text-teal-600" />
                <span>Sample Report</span>
              </button>

              <a
                href="#book-appointment"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book-appointment');
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Test</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#book-appointment"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book-appointment');
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-md bg-teal-600 text-white"
              >
                Book
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-teal-600 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-fade-in">
            <div className="p-3 mb-2 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>Demonstration project — Not an operational clinic.</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleReport();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-navy-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <FileText className="w-4 h-4 text-teal-600" />
                <span>View Sample Lab Report</span>
              </button>
              <a
                href="#book-appointment"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#book-appointment');
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
