import React from 'react';
import { 
  HeartHandshake, 
  Target, 
  Shield, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  FlaskConical, 
  Sparkles,
  Award
} from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: Cpu,
      title: "Automated Precision",
      description: "Automated clinical analyzers process barcoded specimens, reducing manual handling and ensuring high repeatability across test batches."
    },
    {
      icon: Shield,
      title: "Hygienic Safety Protocols",
      description: "Strict single-use vacuum collection materials and sanitized processing stations maintain patient comfort and specimen integrity."
    },
    {
      icon: Clock,
      title: "Swift Report Turnaround",
      description: "Streamlined laboratory workflows enable same-day reporting for routine blood panels, helping physicians initiate timely consultations."
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Convenience",
      description: "Gentle home sample collection, easy online appointment scheduling, and automated digital report access right on your smartphone."
    }
  ];

  const services = [
    { name: "Clinical Biochemistry", desc: "Liver, Kidney, Lipid profiles & Metabolic markers" },
    { name: "Clinical Hematology", desc: "CBC, Hemoglobin, Platelets & Blood morphology" },
    { name: "Endocrinology & Hormones", desc: "Thyroid panels, Insulin & Reproductive hormones" },
    { name: "Micronutrients & Vitamins", desc: "Vitamin D3, Vitamin B12, Calcium & Iron assays" },
    { name: "Preventive Health Panels", desc: "Curated comprehensive screenings for all age brackets" },
    { name: "Doorstep Phlebotomy", desc: "Trained professionals visiting homes with cold-chain kits" }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            About MediCare Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Committed to Clear, Timely Diagnostic Insights
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A fictional modern diagnostic facility designed to showcase how seamless patient care, 
            automated laboratory technology, and clean digital experiences come together.
          </p>
        </div>

        {/* Introduction & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Mission Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Our Mission & Purpose
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                To empower individuals and healthcare providers with fast, accurate, and 
                confidential diagnostic testing. We believe that preventive screening should be 
                stress-free, dignified, and accessible through modern digital convenience.
              </p>
              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    Transparent sample handling from collection to electronic reporting.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    Compassionate and patient-focused phlebotomy procedures.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    Continuous modernization of analytical workflows.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Showcase Concept Project</span>
              <span className="text-teal-400 font-semibold">Web Development Portfolio</span>
            </div>
          </div>

          {/* Diagnostic Services Overview */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-950">Diagnostic Spectrum</h3>
                  <p className="text-xs text-slate-500">Comprehensive pathology & testing capabilities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                    <div className="font-semibold text-sm text-navy-900 mb-1">{item.name}</div>
                    <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span>Individual tests and comprehensive packages tailored for every life stage.</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-navy-950">
              Our Core Operating Principles
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Building trust through clinical rigour and modern convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 text-teal-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-navy-950 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
