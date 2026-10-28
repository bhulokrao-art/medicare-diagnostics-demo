# MediCare Diagnostics — DEMO

A complete, modern, and fully responsive **Diagnostic Centre showcase website** built for a web development business portfolio.

> **⚠️ DEMO NOTICE:** This website is a conceptual showcase designed for portfolio demonstration only. It is not an operational clinic or diagnostic centre. All contact details, addresses, and medical test profiles are fictional.

---

## 🌟 Key Features

1. **Top Notice Bar & Disclaimer:**
   - Persistent, clear notification: *"DEMO ONLY — NOT A REAL DIAGNOSTIC CENTRE"*.
   - Fictional business hours and contact phone placeholders.

2. **Hero Section:**
   - Headline: *"Your Health, Our Priority"*.
   - Direct action buttons: **Book a Test**, **Explore Packages**, and **Preview Sample Report**.
   - Live simulated laboratory workflow queue and key diagnostic metrics.

3. **About Us:**
   - Introduction to the diagnostic centre, services overview, and core mission.
   - The 4 operating pillars: *Automated Precision*, *Hygienic Safety*, *Rapid Turnaround*, and *Patient-First Convenience*.

4. **Our Tests (Catalog of 7 Core Tests):**
   - **CBC** (Complete Blood Count)
   - **Blood Sugar & HbA1c**
   - **Thyroid Profile** (T3, T4, TSH)
   - **Lipid Profile** (Cardiovascular Panel)
   - **Liver Function Test** (LFT)
   - **Kidney Function Test** (KFT)
   - **Vitamin Tests** (Vitamin D3 & B12)
   - Includes real-time search, category filtering, turnaround time, fasting flags, expandable parameter checklists, and a **"Select & Book Test"** action that pre-populates the booking form.

5. **Health Packages:**
   - **Basic Health Checkup**
   - **Complete Body Checkup**
   - **Senior Citizen Package**
   - **Women's Wellness Package**
   - Designed with illustrative clinical descriptions and parameter breakdowns without invented commercial prices.

6. **Interactive Book Appointment Form:**
   - Patient name, phone, email, age/gender, test/package selection, preferred date, and time slot.
   - Toggle between Centre Visit and Home Sample Pickup.
   - Client-side validation with inline error messages.
   - Simulated confirmation modal displaying a unique demo booking reference ID (`#MCD-XXXXXX`).
   - Zero database/backend — safe, private, and resets easily.

7. **Home Sample Collection Request:**
   - Visual 4-step workflow: *Schedule -> Arrival -> Cold-Chain Transport -> Digital Report*.
   - Dedicated request form with address, landmark, preferred morning slot, and phlebotomist notes.
   - Simulated technician assignment modal.

8. **Contact Us:**
   - Fictional address, sample phone numbers, operating hours, and home collection times.
   - Interactive SVG mock map with pin and directions preview.
   - Direct WhatsApp enquiry simulation modal with link to official WhatsApp.
   - Interactive general enquiry message form with instant feedback.

9. **Interactive Sample Digital Report Viewer:**
   - Realistic laboratory report preview for fictitious patient *Alex Morgan* (CBC & Lipid profile).
   - Reference ranges, flags (*Normal*, *Borderline*), and pathologist verification sign-off.

10. **Responsive Design & Modern Healthcare Theme:**
    - Navy blue (`#0F253E`), Teal (`#0D9488`), White, and subtle gradients.
    - Smooth scrolling between all sections on desktop, tablet, and mobile.

---

## 🚀 How to Run the Website Locally (Beginner Friendly)

### Prerequisites:
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) installed on your computer.

### Step 1: Open Terminal in Project Directory
Open your terminal (PowerShell, Command Prompt, or VS Code terminal) in the project folder:
```bash
cd c:\Users\bhulo\Downloads\Diagnostic-Centre-Demo
```

### Step 2: Install Dependencies
Run the following command to install the required packages (React, Vite, Tailwind CSS, Lucide icons):
```bash
npm install
```

### Step 3: Start the Development Server
Run this command:
```bash
npm run dev
```

### Step 4: View in Your Web Browser
Vite will automatically start the server and provide a local link, typically:
```
http://localhost:3000
```
Open that address in Chrome, Edge, Safari, or Firefox to preview and interact with the website!

---

## 🛠️ Technology Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Fast hot-module replacement)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter (Google Fonts)

---

## 📂 Project Structure

```
Diagnostic-Centre-Demo/
├── index.html                   # HTML entry point with meta tags & Inter font
├── package.json                 # Project dependencies and run scripts
├── vite.config.js               # Vite configuration (port 3000)
├── tailwind.config.js           # Custom colors (navy, teal) and animations
├── postcss.config.js            # PostCSS configuration for Tailwind
├── README.md                    # This guide
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application component & state coordinator
    ├── index.css                # Tailwind directives & custom glassmorphism styles
    ├── data/
    │   └── diagnosticData.js    # Fictional business data, tests & packages catalog
    └── components/
        ├── Navbar.jsx           # Sticky nav, mobile drawer, demo disclaimer
        ├── Hero.jsx             # Hero headline, CTAs, laboratory queue mockup
        ├── AboutUs.jsx          # Mission, values, 4 pillars of care
        ├── OurTests.jsx         # 7 core tests, search, filters & parameter viewer
        ├── HealthPackages.jsx   # 4 health packages with test breakdown
        ├── BookAppointment.jsx  # Interactive booking form with validation & modal
        ├── HomeSampleCollection.jsx # Doorstep pickup form & 4-step process
        ├── ContactUs.jsx        # Sample address, phone, mock map & WhatsApp
        ├── FAQ.jsx              # Accordion FAQ for patients
        ├── SampleReportModal.jsx# Interactive laboratory report preview
        └── Footer.jsx           # Navigation, demo disclaimer, copyright
```

---

## 💼 Portfolio Presentation Tips

When showcasing this project to clients or recruiters:
1. **Interactive Test Selection:** Click **"Select & Book Test"** on any test card (e.g. *Thyroid Profile* or *Lipid Profile*) to demonstrate how it automatically populates the appointment form.
2. **Form Validation:** Try submitting the booking form with empty fields to demonstrate clean inline client-side validation, and fill it in to show the instant confirmation modal.
3. **Sample Digital Report:** Click **"Sample Report"** in the top navigation or hero section to show potential clients how a digital pathology report interface can be integrated.
4. **Mobile Responsive Check:** Open Developer Tools (`F12`) and toggle mobile mode to showcase smooth navigation on iPhones, iPads, and Android devices.
