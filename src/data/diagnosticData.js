// Fictional business and medical test dataset for MediCare Diagnostics DEMO

export const businessInfo = {
  name: "MediCare Diagnostics",
  tagline: "Your Health, Our Priority",
  badge: "DEMO ONLY — NOT A REAL DIAGNOSTIC CENTRE",
  address: "Suite 402, Metro Health Plaza, Medical District, Metropolis FC 10001 (Fictional Showcase Address)",
  phones: ["+1 (555) 019-2834", "+1 (555) 019-2835"],
  email: "enquiry@medicare-demo.example.com",
  whatsappNumber: "+15550192834",
  workingHours: "Monday – Saturday: 7:00 AM – 8:00 PM | Sunday: 7:00 AM – 1:00 PM",
  homeCollectionHours: "Daily: 6:30 AM – 11:30 AM"
};

export const testsData = [
  {
    id: "cbc",
    name: "CBC (Complete Blood Count)",
    category: "Hematology",
    turnaroundTime: "Same Day (4 - 6 Hours)",
    fastingRequired: "Fasting Not Required",
    fastingBoolean: false,
    sampleType: "Whole Blood (EDTA tube)",
    overview: "Comprehensive automated evaluation of red blood cells, white blood cells, and platelets to evaluate overall cellular health, detect anemia, and spot infectious or inflammatory processes.",
    parameters: [
      "Hemoglobin (Hb)",
      "Red Blood Cell (RBC) Count",
      "Total Leucocyte / WBC Count",
      "Platelet Count & Mean Platelet Volume",
      "Differential Leucocyte Count (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)",
      "Hematocrit (PCV), MCV, MCH, MCHC"
    ],
    recommendedFor: "Routine health screening, fatigue evaluation, pre-operative checks, and unexplained fevers."
  },
  {
    id: "blood-sugar",
    name: "Blood Sugar & HbA1c",
    category: "Diabetes & Metabolism",
    turnaroundTime: "Same Day (3 - 5 Hours)",
    fastingRequired: "8–10 Hours Overnight Fasting Required",
    fastingBoolean: true,
    sampleType: "Fluoride Plasma / Whole Blood",
    overview: "Measures current circulating blood glucose and 90-day glycated hemoglobin (HbA1c) to screen for prediabetes, diagnose diabetes, and monitor ongoing metabolic control.",
    parameters: [
      "Fasting Blood Glucose (FBG)",
      "Post-Prandial Blood Sugar (PPBS)",
      "HbA1c (Glycated Hemoglobin)",
      "Estimated Average Glucose (eAG)"
    ],
    recommendedFor: "Routine diabetes screening, individuals with family history, increased thirst/fatigue, or quarterly monitoring."
  },
  {
    id: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    category: "Endocrinology",
    turnaroundTime: "Same Day (6 - 8 Hours)",
    fastingRequired: "Overnight Fasting Recommended (Morning Sample)",
    fastingBoolean: true,
    sampleType: "Blood Serum",
    overview: "Assesses pituitary and thyroid gland interaction, essential for regulating metabolism, energy generation, body temperature, and hormonal balance.",
    parameters: [
      "Total / Free Triiodothyronine (T3 / FT3)",
      "Total / Free Thyroxine (T4 / FT4)",
      "Thyroid Stimulating Hormone (Ultrasensitive TSH)"
    ],
    recommendedFor: "Unexplained weight changes, hair thinning, persistent fatigue, mood swings, and temperature sensitivity."
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile (Cardiovascular Panel)",
    category: "Cardiovascular Health",
    turnaroundTime: "Same Day (4 - 6 Hours)",
    fastingRequired: "10–12 Hours Strict Overnight Fasting Required",
    fastingBoolean: true,
    sampleType: "Blood Serum",
    overview: "A quantitative assessment of circulating lipid fractions, measuring protective and atherogenic cholesterol particles to evaluate cardiovascular risk.",
    parameters: [
      "Total Serum Cholesterol",
      "High-Density Lipoprotein (HDL - Good Cholesterol)",
      "Low-Density Lipoprotein (LDL - Bad Cholesterol)",
      "Very Low-Density Lipoprotein (VLDL)",
      "Triglycerides",
      "Total Cholesterol to HDL Ratio"
    ],
    recommendedFor: "Cardiovascular risk profiling, baseline screening for adults 25+, smokers, and routine annual wellness."
  },
  {
    id: "liver-function",
    name: "Liver Function Test (LFT)",
    category: "Hepatic & Organ Health",
    turnaroundTime: "Same Day (6 - 8 Hours)",
    fastingRequired: "8 Hours Fasting Recommended",
    fastingBoolean: true,
    sampleType: "Blood Serum",
    overview: "Measures enzymes, proteins, and bilirubin produced or processed by the liver to determine hepatic cellular integrity, bile flow, and synthetic capacity.",
    parameters: [
      "Total Bilirubin, Direct & Indirect Bilirubin",
      "SGOT / AST (Aspartate Aminotransferase)",
      "SGPT / ALT (Alanine Aminotransferase)",
      "Alkaline Phosphatase (ALP)",
      "Total Protein, Serum Albumin & Globulin",
      "A/G Ratio (Albumin-to-Globulin)"
    ],
    recommendedFor: "Abdominal discomfort, medication monitoring, suspected jaundice, digestion concerns, and routine organ checks."
  },
  {
    id: "kidney-function",
    name: "Kidney Function Test (KFT / RFT)",
    category: "Renal & Organ Health",
    turnaroundTime: "Same Day (6 - 8 Hours)",
    fastingRequired: "8–10 Hours Fasting Recommended",
    fastingBoolean: true,
    sampleType: "Blood Serum",
    overview: "Assesses glomerular filtration efficiency and waste product clearance by measuring nitrogenous metabolites and blood electrolytes.",
    parameters: [
      "Blood Urea & Blood Urea Nitrogen (BUN)",
      "Serum Creatinine",
      "Estimated Glomerular Filtration Rate (eGFR)",
      "Serum Uric Acid",
      "Serum Electrolytes (Sodium, Potassium, Chloride)",
      "BUN/Creatinine Ratio"
    ],
    recommendedFor: "Hypertension monitoring, edema/fluid retention checks, long-term medication use, and metabolic screenings."
  },
  {
    id: "vitamin-tests",
    name: "Vitamin Tests (Vitamin D3 & B12)",
    category: "Vitamins & Micronutrients",
    turnaroundTime: "Next Day (12 - 24 Hours)",
    fastingRequired: "Fasting Not Required",
    fastingBoolean: false,
    sampleType: "Blood Serum",
    overview: "Evaluates essential micronutrient reserves responsible for bone mineralization, neuromuscular function, cognitive vitality, and immune defense.",
    parameters: [
      "25-Hydroxy Vitamin D (Total D2 + D3)",
      "Vitamin B12 (Active Cyanocobalamin / Cobalamin)",
      "Serum Calcium & Phosphorus (Optional accompaniment)"
    ],
    recommendedFor: "Bone ache, joint stiffness, chronic low energy, vegan/vegetarian diet reviews, and nerve tingling."
  }
];

export const packagesData = [
  {
    id: "pkg-basic",
    name: "Basic Health Checkup",
    tag: "Essential Preventive Care",
    badge: "Popular Baseline",
    recommendedFor: "Young adults, students, and first-time preventive screeners seeking a quick annual wellness review.",
    turnaroundTime: "Same Day Reporting",
    description: "An essential entry-level screening designed to detect common lifestyle imbalances, nutritional deficiencies, and early metabolic changes before symptoms develop.",
    totalParameters: "25+ Diagnostic Parameters",
    includedHighlights: [
      "Complete Blood Count (CBC - 14 parameters)",
      "Fasting Blood Glucose",
      "Urine Routine & Microscopic Examination",
      "Blood Pressure & BMI Assessment",
      "Basic Lipid Screen (Cholesterol & Triglycerides)"
    ],
    preparation: "Requires 8 to 10 hours of overnight fasting. Plain water allowed."
  },
  {
    id: "pkg-complete",
    name: "Complete Body Checkup",
    tag: "Holistic Vital Organ Screening",
    badge: "Recommended Annually",
    recommendedFor: "Working professionals and adults aged 30+ desiring a thorough baseline evaluation of all primary organ systems.",
    turnaroundTime: "Same Day Reporting",
    description: "Our comprehensive multi-system health evaluation assessing heart risk, liver and renal health, glycemic control, and essential blood parameters in one seamless visit.",
    totalParameters: "65+ Diagnostic Parameters",
    includedHighlights: [
      "Complete Blood Count (CBC) with ESR",
      "Comprehensive Lipid Profile (Cholesterol, HDL, LDL, VLDL, Triglycerides)",
      "Complete Liver Function Test (LFT with Enzymes & Bilirubin)",
      "Kidney Function Test (KFT with Creatinine, Urea & Electrolytes)",
      "Fasting Blood Glucose & HbA1c (3-month sugar average)",
      "Thyroid Stimulating Hormone (TSH)",
      "Comprehensive Urine Analysis"
    ],
    preparation: "Requires 10 to 12 hours of overnight fasting. Light dinner on previous night."
  },
  {
    id: "pkg-senior",
    name: "Senior Citizen Package",
    tag: "Geriatric Wellness & Vitality",
    badge: "Care for Elders",
    recommendedFor: "Adults aged 60+ requiring careful monitoring of bone density indicators, cardiovascular indicators, renal resilience, and micronutrients.",
    turnaroundTime: "Same Day / Next Day (Vitamins)",
    description: "Tailored to the unique physiological priorities of aging adults, focusing on arthritis markers, bone mineral support, cardiovascular indicators, and nerve health.",
    totalParameters: "75+ Diagnostic Parameters",
    includedHighlights: [
      "All Complete Body Checkup parameters (CBC, LFT, KFT, Lipids)",
      "Vitamin D3 (25-OH) & Vitamin B12 Screening",
      "Serum Calcium & Phosphorus (Bone Health)",
      "Uric Acid (Gout & Joint Screening)",
      "Extended Glycemic & Renal Profile (BUN, eGFR)",
      "Complimentary Gentle Home Sample Pickup"
    ],
    preparation: "Requires 10 to 12 hours of overnight fasting. Morning medications should be taken per doctor's instructions."
  },
  {
    id: "pkg-women",
    name: "Women's Wellness Package",
    tag: "Focused Female Health Screening",
    badge: "Dedicated Care",
    recommendedFor: "Women across all life stages addressing anemia risks, hormonal balance, thyroid rhythms, and bone density.",
    turnaroundTime: "Same Day / Next Day",
    description: "Thoughtfully structured around women's primary diagnostic needs, including iron deficiency anemia, thyroid hormone sensitivity, bone mineral markers, and metabolic health.",
    totalParameters: "55+ Diagnostic Parameters",
    includedHighlights: [
      "Complete Blood Count with Serum Iron & Ferritin",
      "Complete Thyroid Panel (Total T3, Total T4, Ultrasensitive TSH)",
      "Vitamin D3 & Serum Calcium for Bone Health",
      "Fasting Blood Sugar & HbA1c",
      "Cardiovascular Lipid Profile",
      "Liver & Kidney Baseline Function"
    ],
    preparation: "Requires 10 to 12 hours of overnight fasting. Best scheduled outside menstrual cycle if urine examination is included."
  }
];

export const sampleReportData = {
  patient: {
    name: "Alex Morgan",
    age: "34 Yrs / Male",
    id: "MCD-DEMO-2026-904",
    sampleCollected: "28 Oct 2026, 07:30 AM",
    reportGenerated: "28 Oct 2026, 01:15 PM",
    referredBy: "Self / Preventive Health",
    status: "Verified & Finalized"
  },
  tests: [
    {
      name: "Complete Blood Count (CBC)",
      rows: [
        { parameter: "Hemoglobin", value: "14.8", unit: "g/dL", range: "13.0 – 17.0", status: "normal" },
        { parameter: "RBC Count", value: "4.9", unit: "mil/µL", range: "4.5 – 5.5", status: "normal" },
        { parameter: "Total Leucocyte Count (WBC)", value: "7,200", unit: "cells/µL", range: "4,000 – 11,000", status: "normal" },
        { parameter: "Platelet Count", value: "260,000", unit: "/µL", range: "150,000 – 450,000", status: "normal" }
      ]
    },
    {
      name: "Lipid Profile",
      rows: [
        { parameter: "Total Cholesterol", value: "188", unit: "mg/dL", range: "< 200 Desirable", status: "normal" },
        { parameter: "HDL Cholesterol (Good)", value: "52", unit: "mg/dL", range: "> 40 Normal", status: "normal" },
        { parameter: "LDL Cholesterol (Bad)", value: "112", unit: "mg/dL", range: "< 100 Optimal (100–129 Borderline)", status: "borderline" },
        { parameter: "Triglycerides", value: "128", unit: "mg/dL", range: "< 150 Normal", status: "normal" }
      ]
    },
    {
      name: "Metabolic Screen",
      rows: [
        { parameter: "Fasting Blood Glucose", value: "92", unit: "mg/dL", range: "70 – 99 Normal", status: "normal" },
        { parameter: "Serum Creatinine", value: "0.95", unit: "mg/dL", range: "0.7 – 1.3 Normal", status: "normal" },
        { parameter: "TSH (Thyroid Stimulating)", value: "2.14", unit: "µIU/mL", range: "0.4 – 4.2 Normal", status: "normal" }
      ]
    }
  ]
};

export const faqData = [
  {
    question: "How should I prepare for fasting blood tests?",
    answer: "For tests requiring overnight fasting (such as Blood Sugar, Lipid Profile, or Complete Body Checkups), fast for 10 to 12 hours prior to sample collection. You may drink plain water, but avoid tea, coffee, smoking, and juices until your sample has been collected."
  },
  {
    question: "How do I receive my test reports?",
    answer: "Reports are processed promptly in our automated laboratory. As soon as clinical pathologists verify the findings, you receive an automated SMS and WhatsApp alert with a secure one-click link to view and download your PDF report."
  },
  {
    question: "How does Home Sample Collection work?",
    answer: "Our phlebotomists arrive at your doorstep in your preferred morning time slot. They carry single-use sterile vacuum needles, barcoded sample containers, and an insulated cool-box to maintain sample stability during transport to our laboratory."
  },
  {
    question: "Do I need a doctor's prescription for preventive checkups?",
    answer: "No prescription is required for our routine preventive tests or wellness health packages. You can freely choose any package or individual test for your personal health monitoring."
  },
  {
    question: "Are tests performed using automated instruments?",
    answer: "Yes, samples are identified with unique barcodes and loaded onto high-precision automated clinical chemistry and hematology analyzers to minimize human error and guarantee consistent analytical accuracy."
  }
];
