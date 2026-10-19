export default function RoadmapSection() {
  const steps = [
    {
      step: "01",
      title: "अपनी क्रेडिट रिपोर्ट को समझें",
      description:
        "क्रेडिट अकाउंट्स, पेमेंट हिस्ट्री और हाल की इन्क्वायरी की सही तरीके से समीक्षा करना सीखें।",
    },
    {
      step: "02",
      title: "पेमेंट में अनुशासन बनाए रखें",
      description:
        "एक मजबूत रीपेमेंट रिकॉर्ड बनाने के लिए समय पर EMI और क्रेडिट कार्ड बिल चुकाना सीखें।",
    },
    {
      step: "03",
      title: "क्रेडिट यूटिलाइज़ेशन मैनेज करें",
      description:
        "उपलब्ध क्रेडिट लिमिट और अपने वास्तविक मासिक उपयोग के बीच का सही अनुपात (Ratio) समझें।",
    },
    {
      step: "04",
      title: "बार-बार लोन/कार्ड अप्लाई करने से बचें",
      description:
        "बार-बार हार्ड क्रेडिट इन्क्वायरी होने से रोकें, जिससे आपके क्रेडिट स्कोर पर नकारात्मक असर न पड़े।",
    },
    {
      step: "05",
      title: "दीर्घकालिक अच्छी वित्तीय आदतें बनाएं",
      description:
        "हमेशा 750+ का बेहतरीन क्रेडिट स्कोर बनाए रखने के लिए निरंतर वित्तीय अनुशासन विकसित करें।",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50/50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-3xl">🚀</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f2d59] tracking-tight">
              Creditjin सुधार रोडमैप
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-1">
            अपनी क्रेडिट प्रोफाइल को मजबूत और बेहतर बनाने के लिए एक स्पष्ट, स्टेप-बाय-स्टेप तरीका।
          </p>
        </div>

        {/* Roadmap Steps List - Fully Responsive */}
        <div className="flex flex-col gap-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Step Circle Badge */}
              <div className="w-12 h-12 rounded-full bg-[#0c2340] text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm group-hover:bg-emerald-600 transition-colors">
                {item.step}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
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
