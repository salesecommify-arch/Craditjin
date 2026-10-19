import { MessageCircle, BookOpen, Layers, Award, Sparkles, Headphones } from "lucide-react";

export default function CreditScoreSection({ onWhatsAppClick }) {
  const points = [
    "क्रेडिट स्कोर असल में कैसे काम करता है",
    "क्रेडिट रिपोर्ट्स का विश्लेषण और समझना",
    "कम क्रेडिट स्कोर होने के मुख्य कारण",
    "क्रेडिट प्रोफाइल को जिम्मेदारी से सुधारने के प्रमाणित तरीके",
    "लोन और क्रेडिट कार्ड्स का स्मार्ट मैनेजमेंट",
  ];

  const stats = [
    {
      value: "12+",
      label: "लर्निंग मॉड्यूल्स",
      subtext: "विस्तृत पाठ्यक्रम",
      icon: Layers,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      value: "100%",
      label: "प्रैक्टिकल लर्निंग",
      subtext: "वास्तविक केस स्टडीज और गाइड्स",
      icon: Award,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      value: "स्टेप-बाय-स्टेप",
      label: "लर्निंग सिस्टम",
      subtext: "आसान वीडियो ट्यूटोरियल्स",
      icon: Sparkles,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      value: "WhatsApp",
      label: "आसान सपोर्ट",
      subtext: "समर्पित पर्सनल सहायता",
      icon: Headphones,
      color: "text-teal-600 bg-teal-50 border-teal-200",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50/60 text-slate-900 border-t border-slate-200">
      {/* Container aligned with the exact same width as Header & Hero (container mx-auto px-6) */}
      <div className="container mx-auto">
        
        {/* Main 2-Column Section without dark nested wrapper box */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 md:w-fit text-xs font-bold text-emerald-700 justify-center">
              <span>🎓</span>
              <span>संपूर्ण क्रेडिट मास्टरक्लास</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 md:text-left text-center">
              अपना{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                क्रेडिट स्कोर
              </span>{" "}
              समझें समझदारी से।
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed md:text-left text-center">
              क्रेडिट स्कोर, क्रेडिट रिपोर्ट, क्रेडिट कार्ड, लोन और क्रेडिट मैनेजमेंट को आसान और व्यावहारिक रणनीतियों के साथ स्टेप-बाय-स्टेप समझें।
            </p>

            {/* Bullet Checklist */}
            <ul className="space-y-3.5 pt-2">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-slate-700 font-medium">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm shadow-emerald-500/40">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onWhatsAppClick}
                className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white rounded-full font-bold flex items-center gap-2.5 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp पर चैट करें</span>
              </button>

              <a
                href="#pricing"
                className="px-8 py-4 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-full font-bold flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span>प्लान्स और कीमतें देखें</span>
              </a>
            </div>
          </div>

          {/* Right Column: Score Preview Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-slate-800 border border-slate-200/90 relative">
              
              {/* Score Header */}
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-lg">
                <span className="text-2xl">📊</span>
                <span>क्रेडिट स्कोर समझें</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                क्रेडिट स्कोर आमतौर पर 300 से 900 के बीच होता है।
              </p>

              {/* Score Big Display */}
              <div className="text-center my-4 py-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-6xl font-black text-[#22c55e] tracking-tight">
                  750
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                  उत्कृष्ट स्कोर का उदाहरण
                </div>
              </div>

              {/* Meter Range Bar */}
              <div className="my-6">
                <div className="w-full h-3.5 rounded-full bg-slate-100 overflow-hidden flex border border-slate-200">
                  <div className="w-[30%] bg-amber-400"></div>
                  <div className="w-[45%] bg-[#22c55e]"></div>
                  <div className="w-[25%] bg-slate-200"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-semibold">
                  <span>300</span>
                  <span>500</span>
                  <span className="text-emerald-600 font-bold">750</span>
                  <span>900</span>
                </div>
              </div>

              {/* Learning Tip Box */}
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-4 text-xs text-slate-700 leading-relaxed">
                <p className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                  <span>💡</span> कोर्स की मुख्य सीख:
                </p>
                <p className="text-xs text-slate-600">
                  पेमेंट हिस्ट्री, क्रेडिट यूटिलाइज़ेशन रेशियो, क्रेडिट इन्क्वायरी और गलतियों का सुधार गहराई से सीखें।
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row - Aligned with the container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
