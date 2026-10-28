import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Clock, 
  User, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Thermometer,
  Truck,
  Droplet,
  FileCheck2,
  X
} from 'lucide-react';
import { testsData, packagesData } from '../data/diagnosticData';

export default function HomeSampleCollection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
    city: 'Metropolis (Fictional City)',
    date: '',
    timeSlot: '07:00 AM – 08:00 AM',
    testName: '',
    instructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const morningSlots = [
    "06:30 AM – 07:30 AM (Fasting Slot)",
    "07:30 AM – 08:30 AM (Fasting Slot)",
    "08:30 AM – 09:30 AM (Fasting Slot)",
    "09:30 AM – 10:30 AM",
    "10:30 AM – 11:30 AM"
  ];

  const todayDateString = new Date().toISOString().split('T')[0];

  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Schedule Your Slot",
      desc: "Choose your convenient morning date and slot. We reserve a certified phlebotomist."
    },
    {
      step: "02",
      icon: Truck,
      title: "Doorstep Arrival",
      desc: "Our phlebotomist arrives with sterile single-use vacuum collection tubes and PPE."
    },
    {
      step: "03",
      icon: Thermometer,
      title: "Cold Chain Transport",
      desc: "Samples are sealed with unique barcodes and placed into temperature-regulated ice packs."
    },
    {
      step: "04",
      icon: FileCheck2,
      title: "Digital Report Delivery",
      desc: "Pathologists verify analytical results and deliver reports directly to SMS & WhatsApp."
    }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Patient name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.address.trim()) errs.address = 'Street address and flat/house number are required.';
    if (!formData.date) errs.date = 'Collection date is required.';
    if (!formData.testName) errs.testName = 'Please mention the test or package required.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmation({
        refNumber: 'HSC-' + Math.floor(10000 + Math.random() * 90000),
        phlebotomistName: 'Robin Keller (Assigned Technician)',
        ...formData
      });
    }, 750);
  };

  const handleReset = () => {
    setConfirmation(null);
    setFormData({
      name: '',
      phone: '',
      address: '',
      landmark: '',
      city: 'Metropolis (Fictional City)',
      date: '',
      timeSlot: '07:00 AM – 08:00 AM',
      testName: '',
      instructions: ''
    });
    setErrors({});
  };

  return (
    <section id="home-collection" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Doorstep Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Home Sample Collection
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No long queues, no traffic in fasting state. Professional phlebotomists visit 
            your home at your chosen time with sealed sterile equipment.
          </p>
        </div>

        {/* 4 Steps Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((st, i) => {
            const IconComponent = st.icon;
            return (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative overflow-hidden group hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="text-4xl font-black text-slate-200 group-hover:text-teal-200 transition-colors absolute right-4 top-4">
                  {st.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-navy-950 mb-1.5">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Home Sample Form and Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-bold text-navy-950">Book Home Collection Request</h3>
                <p className="text-xs text-slate-500">Sample fields only • Instant demo confirmation</p>
              </div>
              <span className="p-2 rounded-xl bg-teal-50 text-teal-600">
                <Home className="w-5 h-5" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Jordan Hayes"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="e.g. (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Residential Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows="2"
                    placeholder="House / Apartment #, Street name, Building or Society name..."
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      if (errors.address) setErrors({ ...errors, address: null });
                    }}
                    className={`w-full pl-10 pr-3 py-2 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 resize-none ${
                      errors.address ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                </div>
                {errors.address && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Landmark / Cross Street (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Near City Central Park"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Test(s) / Health Package Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.testName}
                    onChange={(e) => {
                      setFormData({ ...formData, testName: e.target.value });
                      if (errors.testName) setErrors({ ...errors, testName: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 bg-white ${
                      errors.testName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  >
                    <option value="">-- Select Test or Package --</option>
                    <option value="Complete Blood Count (CBC)">Complete Blood Count (CBC)</option>
                    <option value="Blood Sugar & HbA1c">Blood Sugar & HbA1c</option>
                    <option value="Thyroid Profile (T3, T4, TSH)">Thyroid Profile (T3, T4, TSH)</option>
                    <option value="Lipid Profile">Lipid Profile</option>
                    <option value="Liver Function Test (LFT)">Liver Function Test (LFT)</option>
                    <option value="Kidney Function Test (KFT)">Kidney Function Test (KFT)</option>
                    <option value="Vitamin Tests (D3 & B12)">Vitamin Tests (D3 & B12)</option>
                    <option value="Basic Health Checkup">Basic Health Checkup</option>
                    <option value="Complete Body Checkup">Complete Body Checkup</option>
                    <option value="Senior Citizen Package">Senior Citizen Package</option>
                    <option value="Women's Wellness Package">Women's Wellness Package</option>
                  </select>
                  {errors.testName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.testName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Collection Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayDateString}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: null });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 bg-white ${
                      errors.date ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Morning Time Window <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white"
                  >
                    {morningSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Notes for Phlebotomist (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ring buzzer 4B, patient is elderly, sample is fasting"
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Scheduling Phlebotomist...</span>
                    </>
                  ) : (
                    <>
                      <Home className="w-4 h-4" />
                      <span>Schedule Home Collection (Simulated)</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Guidelines & Safety Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Safe Phlebotomy Standards</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We follow rigorous clinical protocols for at-home collections to ensure sample 
                viability and patient comfort at all times.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Single-use vacuum needles opened directly in front of the patient.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Barcoded sample tubes scanned and mapped immediately upon draw.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Insulated ice-pack carrying containers for temperature stability.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Verified technician identity cards presented prior to entry.</span>
                </div>
              </div>
            </div>

            {/* Quick Demo Reminder Card */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-amber-950">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Portfolio Demonstration Mode</span>
              </div>
              <p className="leading-relaxed">
                This home collection request module is fully interactive for portfolio evaluation. 
                Submitting this form simulates a successful technician dispatch without recording any private data.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {confirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-slideUp">
            
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 mx-auto flex items-center justify-center">
                <Home className="w-8 h-8" />
              </div>

              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-[11px] font-bold rounded-full uppercase tracking-wider">
                Simulated Phlebotomist Scheduled
              </div>

              <h3 className="text-2xl font-extrabold text-navy-950">
                Home Collection Confirmed!
              </h3>
              
              <p className="text-xs text-slate-600">
                Your home sample pickup has been simulated successfully.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Service Tracking #:</span>
                <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                  {confirmation.refNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Patient:</span>
                <span className="font-semibold text-navy-900">{confirmation.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Test Required:</span>
                <span className="font-semibold text-navy-900">{confirmation.testName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Scheduled Date & Slot:</span>
                <span className="font-semibold text-navy-900">{confirmation.date} ({confirmation.timeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Address:</span>
                <span className="font-semibold text-navy-900 text-right max-w-[200px] truncate">{confirmation.address}</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close & Return
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
