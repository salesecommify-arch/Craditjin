import { TrendingDown, XCircle, FileText } from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    {
      id: 1,
      icon: TrendingDown,
      iconColor: "text-blue-500 bg-blue-50 border-blue-200",
      title: "कम क्रेडिट स्कोर?",
      description:
        "यह समझने में परेशानी हो रही है कि कौन से कारण आपके स्कोर को गिरा रहे हैं और इसे दोबारा कैसे बढ़ाया जाए।",
    },
    {
      id: 2,
      icon: XCircle,
      iconColor: "text-rose-500 bg-rose-50 border-rose-200",
      title: "लोन एप्लीकेशन रिजेक्ट हो गई?",
      description:
        "लोन और क्रेडिट कार्ड रिजेक्शन के पीछे के छिपे कारणों को समझें और भविष्य में आसानी से अप्रूवल पाएं।",
    },
    {
      id: 3,
      icon: FileText,
      iconColor: "text-slate-600 bg-slate-100 border-slate-200",
      title: "क्रेडिट रिपोर्ट समझने में उलझन?",
      description:
        "जटिल क्रेडिट अकाउंट्स, हार्ड इन्क्वायरी, पेमेंट हिस्ट्री को समझें और गलत जानकारियों पर आसानी से आपत्ति (Dispute) दर्ज करें।",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-slate-900 border-t border-slate-150">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f2d59] tracking-tight">
              क्या आप भी इन समस्याओं का सामना कर रहे हैं?
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">
            पहले समस्या को समझें, फिर Creditjin के साथ सही क्रेडिट आदतें सीखें।
          </p>
        </div>

        {/* 3 Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mx-auto">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform group-hover:scale-110 duration-300 ${item.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
