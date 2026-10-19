import { MessageCircle } from "lucide-react";

export default function FooterCTASection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "नमस्ते Creditjin टीम, मुझे मास्टरक्लास के बारे में पूरी जानकारी चाहिए।"
    );
    window.open("https://wa.me/917567319919?text=" + message, "_blank");
  };

  return (
    <footer className="w-full">
      {/* Top CTA Banner in Navy Blue */}
      <div className="bg-[#0b254a] text-white py-20 px-6 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Headline */}
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl">🚀</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              आज ही अपना क्रेडिट ज्ञान बेहतर बनाएं
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-blue-200 text-sm md:text-base mb-8 max-w-2xl mx-auto font-medium">
            Creditjin मास्टरक्लास की पूरी जानकारी के लिए सीधे हमारी टीम से WhatsApp पर संपर्क करें।
          </p>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#1eb354] active:scale-95 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>WhatsApp पर चैट करें — 7567319919</span>
          </button>
        </div>
      </div>

      {/* Middle Disclaimer Strip in Soft Cream / Gold */}
      <div className="bg-[#fef9ee] border-t border-b border-amber-200/60 py-6 px-6 text-slate-700">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs font-bold text-amber-900 mb-1.5 uppercase tracking-wide">
            महत्वपूर्ण अस्वीकरण (Disclaimer):
          </p>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
            यह वेबसाइट और मास्टरक्लास केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए हैं। Creditjin किसी निश्चित स्कोर वृद्धि, लोन स्वीकृति, या क्रेडिट कार्ड मिलने की कोई गारंटी नहीं देता है। व्यक्तिगत क्रेडिट निर्णय पूरी तरह से व्यक्तिगत पुनर्भुगतान इतिहास, आय प्रोफाइल, मौजूदा कर्ज और संबंधित बैंक/लेंडर की नीतियों पर निर्भर करते हैं।
          </p>
        </div>
      </div>

      {/* Bottom Copyright Strip in Deep Dark Blue */}
      <div className="bg-[#06152a] text-slate-400 py-6 px-6 text-center text-xs border-t border-slate-800">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 <strong className="text-white font-bold">Creditjin</strong> — सर्वाधिकार सुरक्षित। (All Rights Reserved)
          </p>
          <p className="flex items-center gap-2">
            <span>WhatsApp सहायता:</span>
            <a
              href="https://wa.me/917567319919"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer underline"
            >
              7567319919
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
