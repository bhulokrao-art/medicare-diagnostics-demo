import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck,
  Activity
} from 'lucide-react';
import { sampleReportData, businessInfo } from '../data/diagnosticData';

export default function SampleReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden animate-slideUp">
        
        {/* Modal Header Bar */}
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500 text-navy-950 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-none">Diagnostic Laboratory Report (Sample Preview)</h3>
              <p className="text-[11px] text-teal-300 mt-1">Illustrative Clinical Report Viewer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs transition"
              title="Print Simulated Report"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition"
              aria-label="Close report"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Report Content Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800">
          
          {/* Top Demo Disclaimer in Report */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center text-xs text-amber-800 flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>PORTFOLIO DEMONSTRATION RECORD:</strong> Fictional patient data generated for showcase purposes.
            </span>
          </div>

          {/* Simulated Lab Letterhead */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b-2 border-navy-900 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl text-navy-900">MediCare</span>
                <span className="font-bold text-xl text-teal-600">Diagnostics</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">LAB CODE: 4092-FC</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Department of Clinical Pathology & Automated Biochemistry
              </p>
              <p className="text-[11px] text-slate-400">
                {businessInfo.address}
              </p>
            </div>

            <div className="text-left sm:text-right text-xs">
              <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-full border border-emerald-200">
                Status: {sampleReportData.patient.status}
              </span>
              <p className="text-slate-500 text-[11px] mt-1">
                Ref No: <strong className="font-mono text-navy-900">{sampleReportData.patient.id}</strong>
              </p>
            </div>
          </div>

          {/* Patient Details Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Patient Name</span>
              <strong className="text-navy-950 font-bold text-sm">{sampleReportData.patient.name}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Age / Gender</span>
              <span className="text-slate-800 font-medium">{sampleReportData.patient.age}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Collection Time</span>
              <span className="text-slate-800 font-medium">{sampleReportData.patient.sampleCollected}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Report Released</span>
              <span className="text-slate-800 font-medium">{sampleReportData.patient.reportGenerated}</span>
            </div>
          </div>

          {/* Test Tables */}
          {sampleReportData.tests.map((testGroup, gIdx) => (
            <div key={gIdx} className="space-y-2">
              <div className="bg-navy-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between">
                <span>{testGroup.name}</span>
                <span className="text-[10px] text-teal-300 font-normal">Method: Automated Photometry / Flow Cytometry</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-[11px] font-semibold">
                      <th className="py-2 px-2">Investigation Parameter</th>
                      <th className="py-2 px-2 text-right sm:text-center">Observed Value</th>
                      <th className="py-2 px-2 text-center">Unit</th>
                      <th className="py-2 px-2">Biological Reference Range</th>
                      <th className="py-2 px-2 text-center">Flag</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {testGroup.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80">
                        <td className="py-2.5 px-2 font-medium text-slate-800">{row.parameter}</td>
                        <td className="py-2.5 px-2 text-right sm:text-center font-bold text-navy-900">{row.value}</td>
                        <td className="py-2.5 px-2 text-center text-slate-500 font-mono text-[11px]">{row.unit}</td>
                        <td className="py-2.5 px-2 text-slate-600 text-[11px]">{row.range}</td>
                        <td className="py-2.5 px-2 text-center">
                          {row.status === 'normal' ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Normal
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <AlertTriangle className="w-3 h-3 text-amber-600" /> Borderline
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Pathologist Verification Stamp Block */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Electronically authenticated with biometric pathologist sign-off.</span>
            </div>

            <div className="text-center sm:text-right">
              <div className="font-serif italic text-slate-700 text-sm font-semibold tracking-wide">
                Dr. R. Vance, M.D. (Pathology)
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                Senior Consultant Pathologist (Fictional)
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            For demonstration in web development portfolio.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
