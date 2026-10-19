import { MessageCircle } from "lucide-react";

export default function Header({ onWhatsAppClick }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/image/logo.png"
            alt="Creditjin Logo"
            className="h-24 w-auto transition-transform"
          />
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={onWhatsAppClick}
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
          <span>हमसे चैट करें</span>
        </button>
      </div>
    </header>
  );
}
