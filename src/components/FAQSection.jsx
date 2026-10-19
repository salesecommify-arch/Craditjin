import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "यह कोर्स किसके लिए है?",
      answer:
        "यह मास्टरक्लास उन सभी के लिए है जो अपना क्रेडिट स्कोर समझना चाहते हैं, खराब क्रेडिट इतिहास को सुधारना चाहते हैं, आसानी से लोन या क्रेडिट कार्ड अप्रूवल पाना चाहते हैं और अपने वित्तीय प्रबंधन को मजबूत करना चाहते हैं।",
    },
    {
      id: 2,
      question: "कोर्स किस भाषा में उपलब्ध है?",
      answer:
        "यह कोर्स बेहद सरल और आसान भाषा में स्पष्ट विजुअल उदाहरणों के साथ तैयार किया गया है, ताकि बिना किसी फाइनेंस बैकग्राउंड वाला व्यक्ति भी इसे आसानी से समझ सके।",
    },
    {
      id: 3,
      question: "क्या मेरा क्रेडिट स्कोर तुरंत बढ़ जाएगा?",
      answer:
        "क्रेडिट सुधार एक व्यवस्थित और चरणबद्ध प्रक्रिया है। गलतियों को सुधारने, समय पर भुगतान करने और यूटिलाइज़ेशन कम रखने से अधिकांश शिक्षार्थी 30 से 90 दिनों में सकारात्मक बदलाव देखते हैं।",
    },
    {
      id: 4,
      question: "मैं कोर्स कैसे खरीदूँ और इसका एक्सेस कैसे मिलेगा?",
      answer:
        "किसी भी प्लान पर 'अभी भुगतान करें' बटन पर क्लिक करें, अपना नाम और फोन नंबर दर्ज करें और हमारी सुरक्षित टीम के माध्यम से प्रक्रिया पूरी करें। आपको तुरंत कोर्स का एक्सेस मिल जाएगा।",
    },
    {
      id: 5,
      question: "क्या क्रेडिट स्कोर बढ़ने की कोई गारंटी है?",
      answer:
        "क्रेडिट ब्यूरो आपके वास्तविक रीपेमेंट इतिहास के आधार पर स्कोर तय करते हैं। इस कोर्स में सिखाई गई प्रमाणित तकनीकों और विवाद समाधान के तरीकों से आप कानूनी और सुरक्षित रूप से अपने स्कोर में अधिकतम बढ़ोतरी कर सकते हैं।",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header matching user image */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-3xl">❓</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f2d59] tracking-tight">
              अक्सर पूछे जाने वाले सवाल (FAQs)
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">
            Creditjin मास्टरक्लास से जुड़े सामान्य सवालों के जवाब यहाँ पाएं।
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? "bg-slate-50/90 border-[#0f2d59]/30 shadow-md"
                    : "bg-[#f8fafc] border-slate-200/90 hover:border-slate-300 hover:bg-slate-100/70"
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#0f2d59] text-white"
                        : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
