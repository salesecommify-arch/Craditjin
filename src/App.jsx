import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SpecialOfferSection from "./components/SpecialOfferSection";
import ProblemsSection from "./components/ProblemsSection";
import RoadmapSection from "./components/RoadmapSection";
import CourseBenefitsSection from "./components/CourseBenefitsSection";
import SpecialOfferSection999 from "./components/SpecialOfferSection999";
import ModulesSection from "./components/ModulesSection";
import CreditScoreSection from "./components/CreditScoreSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import FooterCTASection from "./components/FooterCTASection";
import CheckoutModal from "./components/CheckoutModal";

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "नमस्ते, मुझे Creditjin के बारे में अधिक जानकारी चाहिए।"
    );
    window.open(`https://wa.me/917567319919?text=${message}`, "_blank");
  };

  const handleSpecialOfferWhatsApp = () => {
    handlePayNow({
      id: "plan-499",
      badge: "विशेष कोर्स ऑफर",
      title: "Creditjin मास्टरक्लास संपूर्ण सीख",
      subtitle: "अपना क्रेडिट स्कोर और प्रोफाइल समझना और सुधारना सीखें",
      price: 499,
      originalPrice: 1999,
    });
  };

  const handleSpecialOffer999WhatsApp = () => {
    handlePayNow({
      id: "plan-999",
      badge: "विशेष कोर्स ऑफर",
      title: "Creditjin मास्टरक्लास संपूर्ण सीख (प्रीमियम)",
      subtitle: "आज ही अपनी संपूर्ण Creditjin मास्टरक्लास शुरू करें",
      price: 999,
      originalPrice: 1999,
    });
  };

  const handlePayNow = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <Header onWhatsAppClick={handleWhatsApp} />

      {/* Hero Section */}
      <Hero onGetStartedClick={handleWhatsApp} />

      {/* Special Course Offer Section */}
      <SpecialOfferSection onWhatsAppClick={handleSpecialOfferWhatsApp} />

      {/* Pricing Plans Section */}
      <PricingSection onPayNow={handlePayNow} />

      {/* Credit Score Information Section */}
      <CreditScoreSection onWhatsAppClick={handleWhatsApp} />

      {/* Problems Section ("Are You Facing These Problems?") */}
      <ProblemsSection />

      {/* Creditjin Improvement Roadmap Section */}
      <RoadmapSection />

      {/* Complete Creditjin Masterclass 12 Modules Section */}
      <ModulesSection />

      {/* Course Benefits ("What Will You Understand After The Course?") */}
      <CourseBenefitsSection />

      {/* Special Course Offer (₹999) Section */}
      <SpecialOfferSection999 onWhatsAppClick={handleSpecialOffer999WhatsApp} />

      {/* Customer Review / Learner Feedback Slider */}
      <TestimonialsSection />

      {/* Frequently Asked Questions (FAQ) Section */}
      <FAQSection />

      {/* Footer & Final Call to Action Section */}
      <FooterCTASection />

      {/* Checkout Form Modal */}
      {selectedPlan && (
        <CheckoutModal plan={selectedPlan} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
