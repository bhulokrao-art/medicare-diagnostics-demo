import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurTests from './components/OurTests';
import HealthPackages from './components/HealthPackages';
import BookAppointment from './components/BookAppointment';
import HomeSampleCollection from './components/HomeSampleCollection';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SampleReportModal from './components/SampleReportModal';
import { Calendar, FileText, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedTestForBooking, setSelectedTestForBooking] = useState('');
  const [isSampleReportOpen, setIsSampleReportOpen] = useState(false);

  const handleSelectTest = (testName) => {
    setSelectedTestForBooking(testName);
  };

  const handleSelectPackage = (packageName) => {
    setSelectedTestForBooking(packageName);
  };

  const handleClearPreselected = () => {
    setSelectedTestForBooking('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-teal-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenSampleReport={() => setIsSampleReportOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero onOpenSampleReport={() => setIsSampleReportOpen(true)} />

        {/* Section 2: About Us */}
        <AboutUs />

        {/* Section 3: Our Tests (All 7 required tests) */}
        <OurTests onSelectTest={handleSelectTest} />

        {/* Section 4: Health Packages (All 4 required packages) */}
        <HealthPackages onSelectPackage={handleSelectPackage} />

        {/* Section 5: Book Appointment (Interactive form with validation) */}
        <BookAppointment 
          preselectedTest={selectedTestForBooking}
          onClearPreselected={handleClearPreselected}
        />

        {/* Section 6: Home Sample Collection (Interactive sample fields) */}
        <HomeSampleCollection />

        {/* Interactive FAQ Section */}
        <FAQ />

        {/* Section 7: Contact Us (Address, phones, map, WhatsApp enquiry) */}
        <ContactUs />
      </main>

      {/* Section 8: Footer (Disclaimers, navigation, copyright) */}
      <Footer onOpenSampleReport={() => setIsSampleReportOpen(true)} />

      {/* Interactive Sample Lab Report Viewer Modal */}
      <SampleReportModal 
        isOpen={isSampleReportOpen} 
        onClose={() => setIsSampleReportOpen(false)} 
      />

      {/* Floating Quick Action Pill on Mobile / Tablet */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsSampleReportOpen(true)}
          className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-navy-900 border border-slate-200 shadow-lg hover:shadow-xl text-xs font-bold transition-transform hover:scale-105"
        >
          <FileText className="w-3.5 h-3.5 text-teal-600" />
          <span>View Sample Report</span>
        </button>

        <a
          href="#book-appointment"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-xl hover:shadow-2xl text-xs font-bold transition-transform hover:scale-105"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Test</span>
        </a>
      </div>
    </div>
  );
}
