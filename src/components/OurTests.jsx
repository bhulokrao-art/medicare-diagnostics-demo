import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Droplet, 
  AlertCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Calendar,
  Sparkles,
  Filter
} from 'lucide-react';
import { testsData } from '../data/diagnosticData';

export default function OurTests({ onSelectTest }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedTestId, setExpandedTestId] = useState(null);

  const categories = ['All', 'Hematology', 'Diabetes & Metabolism', 'Endocrinology', 'Cardiovascular Health', 'Hepatic & Organ Health', 'Renal & Organ Health', 'Vitamins & Micronutrients'];

  const filteredTests = testsData.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.parameters.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id) => {
    setExpandedTestId(expandedTestId === id ? null : id);
  };

  const handleBookClick = (testName) => {
    if (onSelectTest) {
      onSelectTest(testName);
    }
    const formElement = document.querySelector('#book-appointment');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tests" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Pathology Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Diagnostic Tests
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-precision routine and specialized diagnostic investigations. Filter, examine included 
            parameters, and book your preferred test with zero hassle.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tests by name or parameter (e.g. CBC, Creatinine, Vitamin D, TSH)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 text-sm text-slate-800 placeholder-slate-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <div className="shrink-0 text-xs text-slate-500 font-medium px-2">
              Showing <span className="font-bold text-navy-900">{filteredTests.length}</span> tests
            </div>
          </div>

          {/* Category Filter Pills (Scrollable on small screens) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            <span className="text-slate-500 font-semibold flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-teal-600" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Core Tests' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid */}
        {filteredTests.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8 space-y-3">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-navy-950">No matching diagnostic tests found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any test matching "{searchQuery}". Try searching for CBC, Thyroid, Glucose, or reset your search.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-teal-600 text-white text-xs font-semibold rounded-lg hover:bg-teal-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => {
              const isExpanded = expandedTestId === test.id;

              return (
                <div 
                  key={test.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    {/* Category & Fasting Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                        {test.category}
                      </span>
                      {test.fastingBoolean ? (
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          Fasting Required
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                          No Fasting
                        </span>
                      )}
                    </div>

                    {/* Test Title */}
                    <div>
                      <h3 className="text-lg font-bold text-navy-950 group-hover:text-teal-600 transition-colors">
                        {test.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {test.overview}
                      </p>
                    </div>

                    {/* Specimen & Turnaround Meta */}
                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>Turnaround: <strong className="text-slate-800 font-semibold">{test.turnaroundTime}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplet className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>Sample: <strong className="text-slate-800 font-semibold">{test.sampleType}</strong></span>
                      </div>
                    </div>

                    {/* Expandable Parameters */}
                    <div>
                      <button
                        onClick={() => toggleExpand(test.id)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-teal-700 hover:text-teal-800 py-1.5"
                      >
                        <span>
                          {isExpanded ? 'Hide Test Parameters' : `View ${test.parameters.length} Included Parameters`}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1.5 animate-fadeIn">
                          <p className="font-semibold text-navy-900 text-[11px] uppercase tracking-wider mb-1">
                            Parameters Measured:
                          </p>
                          {test.parameters.map((param, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-1.5 text-slate-600">
                              <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0 mt-0.5" />
                              <span className="leading-tight">{param}</span>
                            </div>
                          ))}
                          <div className="pt-2 text-[11px] text-slate-500 italic">
                            {test.recommendedFor}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleBookClick(test.name)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-navy-900 hover:bg-teal-600 text-white text-xs font-bold transition-colors shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Select & Book Test</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note on Doctor Consultations */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs text-slate-500">
            <strong>Need assistance with test selection?</strong> Contact our fictional desk at{' '}
            <span className="font-semibold text-navy-900">(555) 019-2834</span> for guidance on fasting 
            protocols and home sample pickup schedules.
          </p>
        </div>

      </div>
    </section>
  );
}
