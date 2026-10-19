export default function PricingCard({ plan, isFeatured, onPayNow }) {
  return (
    <div
      className={`relative rounded-2xl bg-[#0f2147] p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 group ${
        isFeatured
          ? "border-2 border-emerald-500/50 hover:border-emerald-400"
          : "border border-blue-500/30 hover:border-blue-400/60"
      }`}
    >
      {/* Popular Tag for featured card */}
      {isFeatured && (
        <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          सबसे लोकप्रिय
        </div>
      )}

      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">🔥</span>
          <span className="font-extrabold text-sm tracking-widest uppercase text-white/95">
            {plan.badge}
          </span>
        </div>

        {/* Main Heading */}
        <h3 className="text-2xl font-bold text-center text-white mb-2 leading-snug min-h-[64px] flex items-center justify-center">
          {plan.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-center text-blue-200/90 mb-6 font-medium min-h-[40px] flex items-center justify-center">
          {plan.subtitle}
        </p>

        {/* Pricing Box - Exact same dimensions and styling */}
        <div
          className={`text-center my-6 py-4 rounded-xl bg-[#0b1836]/60 border ${
            isFeatured ? "border-emerald-500/30" : "border-blue-400/20"
          }`}
        >
          <div className="text-slate-400 line-through text-base font-medium mb-1">
            ₹{plan.originalPrice.toLocaleString()}
          </div>
          <div className="text-5xl font-black text-[#22c55e] tracking-tight">
            ₹{plan.price}
          </div>
          <div className="text-xs text-blue-200/80 mt-2 font-medium">
            एक बार का कोर्स एनरोलमेंट
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-2.5 text-xs text-slate-300 mb-8 pt-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pay Now Button */}
      <button
        onClick={() => onPayNow(plan)}
        className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>अभी भुगतान करें ₹{plan.price}</span>
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}
