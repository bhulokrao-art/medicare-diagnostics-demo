import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  X,
  FileText,
  Shield,
  MapPin
} from 'lucide-react';
import { testsData, packagesData } from '../data/diagnosticData';

export default function BookAppointment({ preselectedTest, onClearPreselected }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Select Gender',
    selectedTest: '',
    visitType: 'centre', // 'centre' or 'home'
    preferredDate: '',
    timeSlot: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Sync preselected test from Tests or Packages section
  useEffect(() => {
    if (preselectedTest) {
      setFormData(prev => ({
        ...prev,
        selectedTest: preselectedTest
      }));
    }
  }, [preselectedTest]);

  // Set min date to today's date
  const todayDateString = new Date().toISOString().split('T')[0];

  const timeSlots = [
    "07:00 AM – 08:30 AM (Fasting Slot)",
    "08:30 AM – 10:00 AM (Fasting Slot)",
    "10:00 AM – 11:30 AM",
    "11:30 AM – 01:00 PM",
    "02:00 PM – 04:00 PM",
    "04:00 PM – 06:00 PM",
    "06:00 PM – 07:30 PM"
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter patient full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name should be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide contact phone number.';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide email address for digital reports.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.selectedTest) {
      newErrors.selectedTest = 'Please select a test or health package.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred appointment date.';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      const mockRefId = 'MCD-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        refId: mockRefId,
        ...formData,
        bookedAt: new Date().toLocaleString()
      });
    }, 800);
  };

  const handleResetForm = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      age: '',
      gender: 'Select Gender',
      selectedTest: '',
      visitType: 'centre',
      preferredDate: '',
      timeSlot: '',
      notes: ''
    });
    setErrors({});
    if (onClearPreselected) onClearPreselected();
  };

  return (
    <section id="book-appointment" className="py-16 lg:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Online Scheduling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Schedule an appointment at our centre or book sample collection. 
            All submissions in this portfolio project are simulated with instant validation.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Demo Alert Header */}
          <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Interactive Demonstration Form
              </span>
            </div>
            <span className="text-[11px] bg-navy-800 text-teal-300 px-2.5 py-0.5 rounded-full font-medium border border-navy-700">
              No Real Data Stored
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
            
            {/* Preferred Visit Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Appointment Mode
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, visitType: 'centre' }))}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    formData.visitType === 'centre'
                      ? 'bg-teal-50 border-teal-500 text-teal-800 ring-1 ring-teal-500'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Visit Diagnostic Centre</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, visitType: 'home' }))}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    formData.visitType === 'home'
                      ? 'bg-teal-50 border-teal-500 text-teal-800 ring-1 ring-teal-500'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-teal-600" />
                  <span>Home Sample Pickup</span>
                </button>
              </div>
            </div>

            {/* Row: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.fullName 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.phone 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
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

            {/* Row: Email & Age/Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-6">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address (For Digital Report) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Age (Optional)
                </label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  placeholder="e.g. 35"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white"
                >
                  <option value="Select Gender">Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other / Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Test or Health Package Selection */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Select Test or Health Checkup Package <span className="text-red-500">*</span>
                </label>
                {formData.selectedTest && (
                  <span className="text-[11px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded">
                    Selected: {formData.selectedTest}
                  </span>
                )}
              </div>

              <select
                value={formData.selectedTest}
                onChange={(e) => {
                  setFormData({ ...formData, selectedTest: e.target.value });
                  if (errors.selectedTest) setErrors({ ...errors, selectedTest: null });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 bg-white ${
                  errors.selectedTest
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                }`}
              >
                <option value="">-- Choose from Core Tests or Preventive Packages --</option>
                
                <optgroup label="Core Individual Tests">
                  {testsData.map(test => (
                    <option key={test.id} value={test.name}>
                      {test.name} ({test.fastingBoolean ? 'Fasting' : 'Non-Fasting'})
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Curated Preventive Packages">
                  {packagesData.map(pkg => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} — {pkg.tag}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Other Options">
                  <option value="Multiple Tests / Doctor Prescription Upload">Multiple Tests / Have Doctor Prescription</option>
                  <option value="General Health Consultation">General Diagnostic Consultation</option>
                </optgroup>
              </select>

              {errors.selectedTest && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.selectedTest}
                </p>
              )}
            </div>

            {/* Row: Preferred Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={todayDateString}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      setFormData({ ...formData, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: null });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 bg-white ${
                      errors.preferredDate
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => {
                    setFormData({ ...formData, timeSlot: e.target.value });
                    if (errors.timeSlot) setErrors({ ...errors, timeSlot: null });
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 bg-white ${
                    errors.timeSlot
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-200 focus:ring-teal-500/20 focus:border-teal-500'
                  }`}
                >
                  <option value="">-- Choose Slot --</option>
                  {timeSlots.map((slot, sIdx) => (
                    <option key={sIdx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.timeSlot && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.timeSlot}
                  </p>
                )}
              </div>
            </div>

            {/* Notes / Special Instructions */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Special Remarks / Clinical Instructions (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Mention any ongoing medications, mobility concerns, or specific test requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 resize-none"
              />
            </div>

            {/* Privacy and Demo Notice Disclaimer */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
              <Shield className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration & Privacy Guarantee:</strong> No backend server or database is connected. 
                Your simulated input is processed exclusively in this browser session and discarded upon refresh.
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-base shadow-lg shadow-teal-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Demo Booking...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Confirm Appointment Request (Simulated)</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Simulated Booking Success Modal */}
      {submittedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-slideUp">
            
            <button
              onClick={handleResetForm}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-full uppercase tracking-wider">
                Simulated Success (Demo Only)
              </div>

              <h3 className="text-2xl font-extrabold text-navy-950">
                Appointment Request Received!
              </h3>
              
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you! In an actual production deployment, this booking would trigger an automated confirmation SMS and calendar invite.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Demo Reference ID:</span>
                <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                  {submittedBooking.refId}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Patient Name:</span>
                <span className="font-semibold text-navy-900">{submittedBooking.fullName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Selected Investigation:</span>
                <span className="font-semibold text-navy-900 text-right max-w-[200px] truncate">
                  {submittedBooking.selectedTest}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Appointment Mode:</span>
                <span className="font-semibold text-navy-900 capitalize">
                  {submittedBooking.visitType === 'centre' ? 'Diagnostic Centre Visit' : 'Home Sample Pickup'}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Scheduled Date:</span>
                <span className="font-semibold text-navy-900">{submittedBooking.preferredDate}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Time Window:</span>
                <span className="font-semibold text-navy-900">{submittedBooking.timeSlot}</span>
              </div>
            </div>

            {/* Reset / Done Button */}
            <div className="mt-6">
              <button
                onClick={handleResetForm}
                className="w-full py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close & Book Another Test
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
