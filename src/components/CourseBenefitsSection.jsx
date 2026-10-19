export default function CourseBenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "महत्वपूर्ण क्रेडिट फैक्टर्स को समझना",
      description: "उन सभी मुख्य घटकों को जानें जो आपके समग्र क्रेडिट स्कोर को निर्धारित करते हैं।",
    },
    {
      id: 2,
      title: "क्रेडिट रिपोर्ट पढ़ना और समीक्षा करना",
      description: "क्रेडिट स्टेटमेंट का विश्लेषण करें और किसी भी गलती या गड़बड़ी को आसानी से पहचानें।",
    },
    {
      id: 3,
      title: "क्रेडिट यूटिलाइज़ेशन को जिम्मेदारी से मैनेज करना",
      description: "अपने स्कोर को तेजी से बढ़ाने के लिए क्रेडिट उपयोग के अनुपात को सही सीमा में रखें।",
    },
    {
      id: 4,
      title: "क्रेडिट कार्ड का स्मार्ट इस्तेमाल",
      description: "बिना भारी ब्याज या कर्ज के जाल में फंसे, क्रेडिट कार्ड का अपनी वित्तीय ताकत के रूप में इस्तेमाल करें।",
    },
    {
      id: 5,
      title: "लोन और EMI मैनेजमेंट का महत्व",
      description: "पर्सनल, ऑटो और होम लोन में बिना चूके समय पर भुगतान का अनुशासन बनाए रखें।",
    },
    {
      id: 6,
      title: "दीर्घकालिक क्रेडिट प्रोफाइल की योजना",
      description: "भविष्य में हर लोन व कार्ड की आसान मंजूरी के लिए एक शानदार और मजबूत क्रेडिट प्रोफाइल तैयार करें।",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50/50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-3xl">🏆</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f2d59] tracking-tight">
              इस कोर्स के बाद आप क्या सीखेंगे?
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">
            Creditjin के साथ आप सीखेंगे मुख्य व्यावहारिक ज्ञान और काम आने वाली जरूरी स्किल्स।
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group flex items-start gap-4 p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Checkmark Icon */}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-extrabold text-sm shrink-0 border border-emerald-200 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                ✓
              </span>

              {/* Benefit Text */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
