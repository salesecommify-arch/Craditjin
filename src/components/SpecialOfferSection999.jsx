import { useState, useEffect } from "react";

export default function SpecialOfferSection999({ onWhatsAppClick }) {
  // Initial countdown timer: 2 hours, 41 minutes, 15 seconds (matching user screenshot)
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 41 * 60 + 15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatNumber = (num) => String(num).padStart(2, "0");

  const handleEnrollWhatsApp = () => {
    const message = encodeURIComponent(
      "नमस्ते, मैं Complete CIBIL Masterclass स्पेशल कोर्स ऑफर (₹999) में एनरोल करना चाहता हूँ।"
    );
    window.open(`https://wa.me/917567319919?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#082046] relative overflow-hidden text-white">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Card with rounded corners and subtle border */}
        <div className="bg-[#133068]/45 border border-white/15 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl flex flex-col items-center text-center">
          
          {/* Title: 🔥 Special Course Offer */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-2">
            <span className="text-2xl sm:text-3xl">🔥</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              विशेष कोर्स ऑफर
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-blue-100/90 text-sm sm:text-base font-normal max-w-xl mx-auto mb-6">
            अभी संपूर्ण CIBIL मास्टरक्लास सीखना शुरू करें
          </p>

          {/* Price Container */}
          <div className="flex flex-col items-center justify-center gap-0.5 mb-7">
            <span className="text-blue-200/70 line-through text-sm sm:text-base font-semibold">
              ₹1,999
            </span>
            <span className="text-5xl sm:text-6xl font-black text-[#22c55e] tracking-tight drop-shadow-sm">
              ₹999
            </span>
            <span className="text-xs sm:text-sm text-blue-100/80 font-medium mt-1">
              एक बार का कोर्स एनरोलमेंट
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
            {/* Hours */}
            <div className="bg-white rounded-xl shadow-md min-w-[72px] sm:min-w-[84px] py-3 px-3 sm:py-3.5 sm:px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono leading-tight">
                {formatNumber(hours)}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                घंटे
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-white rounded-xl shadow-md min-w-[72px] sm:min-w-[84px] py-3 px-3 sm:py-3.5 sm:px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono leading-tight">
                {formatNumber(minutes)}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                मिनट
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-white rounded-xl shadow-md min-w-[72px] sm:min-w-[84px] py-3 px-3 sm:py-3.5 sm:px-4 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono leading-tight">
                {formatNumber(seconds)}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                सेकंड
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onWhatsAppClick || handleEnrollWhatsApp}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-white font-bold text-base sm:text-lg rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_25px_rgba(34,197,94,0.5)] transition-all duration-200 cursor-pointer w-full max-w-xs"
          >
            <span>💳</span>
            <span>अभी एनरोल करें (₹999)</span>
          </button>

          {/* Reassurance text */}
          <p className="text-xs text-blue-100/80 mt-3 flex items-center justify-center gap-1.5 font-medium">
            <span>🔒</span>
            <span>सुरक्षित Razorpay पेमेंट (UPI, Cards, Netbanking)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
