import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAdvisor from './components/AboutAdvisor';
import InsuranceAwareness from './components/InsuranceAwareness';
import LifeStagesPlanning from './components/LifeStagesPlanning';
import InsurancePlans from './components/InsurancePlans';
import TrustJourney from './components/TrustJourney';
import KnowledgeBlog from './components/KnowledgeBlog';
import WhyChooseLic from './components/WhyChooseLic';
import CustomerEnquiry from './components/CustomerEnquiry';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import FloatingWidget from './components/FloatingWidget';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('disclaimer');

  const handleOpenLegal = (tab) => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleCloseLegal = () => {
    setLegalModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Banner with Dynamic Rotating Headline & Advisor Photo */}
        <Hero />

        {/* 2. Welcome Message from Sudip Kumar Pathak & 4 Core Pillars */}
        <AboutAdvisor />

        {/* 3. Insurance Awareness & Why Financial Protection Matters */}
        <InsuranceAwareness />

        {/* 4. Insurance Planning for Every Stage of Life (Young, Married, Parents, Seniors) */}
        <LifeStagesPlanning />

        {/* 5. Featured Insurance Plans & Portfolio Filter */}
        <InsurancePlans />

        {/* 6. Customer Trust Section: Your Insurance Journey, Our Guidance (5 Steps) */}
        <TrustJourney />

        {/* 7. Insurance Knowledge and Awareness Blog (8 Articles + Reader Modal) */}
        <KnowledgeBlog />

        {/* 8. Why Choose LIC (Sovereign Assurance & Pillars) */}
        <WhyChooseLic />

        {/* 9. Enhanced Customer Enquiry Form with Real-time WhatsApp Preview */}
        <CustomerEnquiry />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Contact & Office Location Section */}
        <ContactSection />
      </main>

      {/* Fixed Bottom-Right Quick Contact Widget (WhatsApp & Phone) */}
      <FloatingWidget />

      {/* Comprehensive Footer with Disclaimers & Links */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Regulatory & Privacy Policy Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={handleCloseLegal}
        initialTab={legalTab}
      />
    </div>
  );
}
