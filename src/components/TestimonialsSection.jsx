import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      review:
        "क्रेडिट स्कोर और क्रेडिट रिपोर्ट की बुनियादी बातें समझना बहुत आसान हो गया। वीडियो और समझाने की भाषा बहुत सरल और प्रैक्टिकल है!",
      name: "राहुल शर्मा",
      role: "कोर्स शिक्षार्थी",
    },
    {
      id: 2,
      rating: 5,
      review:
        "पहले मुझे क्रेडिट यूटिलाइज़ेशन और हार्ड इन्क्वायरी के बारे में बिल्कुल भी स्पष्टता नहीं थी। इस कोर्स की मदद से मेरा होम लोन आसानी से अप्रूव हो गया!",
      name: "पूजा पटेल",
      role: "कोर्स शिक्षार्थी",
    },
    {
      id: 3,
      rating: 5,
      review:
        "स्टेप-बाय-स्टेप तरीका वाकई लाजवाब है। सभी जटिल वित्तीय कॉन्सेप्ट्स को रोजमर्रा के आसान कदमों में समझाया गया है।",
      name: "अमित वर्मा",
      role: "कोर्स शिक्षार्थी",
    },
    {
      id: 4,
      rating: 5,
      review:
        "मेरी क्रेडिट रिपोर्ट में दो गलतियां थीं जिनके बारे में मुझे पता भी नहीं था। मॉड्यूल 9 को फॉलो किया और 30 दिनों में सुधार करवा लिया!",
      name: "स्नेहा जोशी",
      role: "कोर्स शिक्षार्थी",
    },
    {
      id: 5,
      rating: 5,
      review:
        "मेरे वित्तीय भविष्य के लिए यह अब तक का सबसे बेहतरीन निवेश रहा। 1-ऑन-1 WhatsApp गाइडेंस बहुत तेज़ और बेहद मददगार है।",
      name: "विक्रम मेहता",
      role: "कोर्स शिक्षार्थी",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 px-6 bg-slate-50/70 text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header matching user image */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-3xl">⭐</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f2d59] tracking-tight">
              शिक्षार्थियों की प्रतिक्रिया
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">
            कोर्स की सामग्री बेहद सरल, व्यावहारिक और तुरंत अमल में लाने योग्य है।
          </p>
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Slider Row - Desktop shows 3 visible, Tablet shows 2, Mobile shows 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const item = reviews[(currentIndex + offset) % reviews.length];
              return (
                <div
                  key={item.id}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6 min-h-[72px]">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Author / Learner info */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">— {item.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{item.role}</p>
                    </div>                    
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "w-7 bg-[#0f2d59]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
