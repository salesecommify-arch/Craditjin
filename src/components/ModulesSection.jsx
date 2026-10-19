export default function ModulesSection() {
  const modules = [
    {
      number: "मॉड्यूल 01",
      title: "क्रेडिट स्कोर का परिचय और बुनियादी बातें",
      description: "क्रेडिट स्कोर का अर्थ, वित्तीय महत्व और मुख्य क्रेडिट सिस्टम को समझें।",
      badge: "बेसिक",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "मॉड्यूल 02",
      title: "क्रेडिट स्कोर की गणना कैसे होती है?",
      description: "पेमेंट हिस्ट्री, क्रेडिट यूटिलाइज़ेशन, क्रेडिट आयु और इन्क्वायरी फैक्टर्स को समझें।",
      badge: "कोर",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      number: "मॉड्यूल 03",
      title: "अपनी क्रेडिट रिपोर्ट कैसे पढ़ें और समझें?",
      description: "अपनी आधिकारिक क्रेडिट रिपोर्ट के हर एक हिस्से की समीक्षा करने की स्टेप-बाय-स्टेप गाइड।",
      badge: "प्रैक्टिकल",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "मॉड्यूल 04",
      title: "कम क्रेडिट स्कोर होने के मुख्य कारण",
      description: "ऐसी खराब क्रेडिट आदतों की पहचान करें जो आपके स्कोर को गिराती हैं और नुकसान पहुँचाती हैं।",
      badge: "महत्वपूर्ण",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      number: "मॉड्यूल 05",
      title: "पेमेंट हिस्ट्री में महारत",
      description: "समय पर EMI और क्रेडिट कार्ड बिल चुकाने का अत्यधिक महत्व और सही नियम।",
      badge: "कोर",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      number: "मॉड्यूल 06",
      title: "क्रेडिट यूटिलाइज़ेशन रेशियो (CUR)",
      description: "क्रेडिट लिमिट को कैसे मैनेज करें और समझदारी से 30% से कम उपयोग कैसे बनाए रखें।",
      badge: "एडवांस",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "मॉड्यूल 07",
      title: "क्रेडिट कार्ड का स्मार्ट मैनेजमेंट",
      description: "क्रेडिट कार्ड का सही उपयोग, बिलिंग साइकिल, रिवॉर्ड्स और कर्ज के जाल से बचने के उपाय।",
      badge: "प्रैक्टिकल",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "मॉड्यूल 08",
      title: "लोन और EMI मैनेजमेंट",
      description: "एक से अधिक लोन्स, रीपेमेंट शेड्यूल और डेब्ट-टू-इनकम बैलेंस को संभालना।",
      badge: "प्रैक्टिकल",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "मॉड्यूल 09",
      title: "क्रेडिट रिपोर्ट में गलतियों की पहचान और सुधार",
      description: "गलत एंट्रीज को पकड़ने और ऑनलाइन विवाद दर्ज (Dispute Rectification) करने की पूरी प्रक्रिया।",
      badge: "महत्वपूर्ण",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      number: "मॉड्यूल 10",
      title: "लोन रिजेक्ट होने के बाद क्या करें?",
      description: "रिजेक्शन के कारणों का विश्लेषण और भविष्य में लोन अप्रूवल के लिए पात्रता दोबारा बनाना।",
      badge: "एडवांस",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "मॉड्यूल 11",
      title: "क्रेडिट स्कोर के मिथक बनाम सच",
      description: "क्रेडिट स्कोर से जुड़ी आम गलतफहमियों और भ्रांतियों की असलियत जानें।",
      badge: "बोनस",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      number: "मॉड्यूल 12",
      title: "दीर्घकालिक क्रेडिट रणनीति",
      description: "जीवनभर 750+ का शानदार क्रेडिट स्कोर बनाए रखने की टिकाऊ और असरदार रणनीतियाँ।",
      badge: "मास्टर",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
  ];

  return (
    <section id="modules" className="py-20 px-6 bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-3xl">🎓</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f2d59] tracking-tight">
              संपूर्ण Creditjin मास्टरक्लास
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">
            शुरुआती से एडवांस स्तर का व्यवस्थित लर्निंग पाठ्यक्रम
          </p>
        </div>

        {/* 12 Modules List */}
        <div className="flex flex-col gap-4">
          {modules.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer pl-6 sm:pl-7 overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0f2d59] group-hover:bg-emerald-500 transition-colors"></div>

              {/* Module Content */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors flex items-center flex-wrap gap-2">
                  <span className="text-[#0f2d59] group-hover:text-emerald-600 transition-colors">
                    {item.number} —
                  </span>
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Module Badge */}
              <div className="self-start sm:self-center shrink-0">
                <span
                  className={`px-3 py-1 rounded-md text-[11px] font-normal   tracking-wider uppercase border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
