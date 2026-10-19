import PricingCard from "./PricingCard";

const plans = [
  {
    id: "plan-499",
    badge: "विशेष कोर्स ऑफर",
    title: "Creditjin मास्टरक्लास संपूर्ण सीख",
    subtitle: "अपना क्रेडिट स्कोर और प्रोफाइल समझना और सुधारना सीखें",
    price: 499,
    originalPrice: 1999,
    isFeatured: false,
    features: [
      "क्रेडिट स्कोर मास्टरी की पूरी गाइड",
      "क्रेडिट रिपोर्ट का विस्तृत विश्लेषण",
      "विवाद और सुधार (Dispute) रणनीतियाँ",
      "लाइफटाइम कोर्स एक्सेस और नए अपडेट्स",
    ],
  },
  {
    id: "plan-999",
    badge: "विशेष कोर्स ऑफर",
    title: "Creditjin मास्टरक्लास संपूर्ण सीख (प्रीमियम)",
    subtitle: "आज ही अपनी संपूर्ण Creditjin मास्टरक्लास शुरू करें",
    price: 999,
    originalPrice: 1999,
    isFeatured: true,
    features: [
      "संपूर्ण Creditjin मास्टरक्लास वीडियो कोर्स",
      "1-ऑन-1 पर्सनल क्रेडिट कंसल्टेशन",
      "विवाद व सुधार (Dispute Rectification) स्टेप-बाय-स्टेप गाइड",
      "प्राथमिकता 24/7 WhatsApp सपोर्ट",
    ],
  },
];

export default function PricingSection({ onPayNow }) {
  return (
    <section id="pricing" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-3xl">🔥</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              अपना लर्निंग प्लान चुनें
            </h2>
          </div>
          <p className="text-slate-300 text-sm md:text-base mt-1 font-medium">
            क्रेडिट स्कोर में महारत हासिल करें और आज ही अपनी वित्तीय प्रोफाइल पर पूरा नियंत्रण पाएं।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isFeatured={plan.isFeatured}
              onPayNow={onPayNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
