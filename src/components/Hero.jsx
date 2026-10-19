import { Play } from "lucide-react";

export default function Hero({ onGetStartedClick }) {
  return (
    <main className="container mx-auto px-6 pt-10 sm:pt-20 pb-20 sm:pb-32 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        {/* Left Side: Content (Second on mobile, First on desktop) */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 md:w-fit w-full backdrop-blur-sm md:justify-start justify-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">
              नया कोर्स उपलब्ध है
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 md:text-left text-center">
            अपने{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              क्रेडिट स्कोर
            </span>{" "}
            पर पूरा नियंत्रण पाएं।
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed md:text-left text-center">
            Creditjin मास्टरक्लास के साथ अपने वित्तीय भविष्य को मजबूत बनाएं। आसान और प्रमाणित रणनीतियों से अपना क्रेडिट स्कोर बनाना, सुधारना और बनाए रखना सीखें।
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2 md:justify-start justify-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              प्लान्स और कीमतें देखें
            </a>
            <button
              onClick={onGetStartedClick}
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 rounded-full font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm group cursor-pointer"
            >
              <div className="bg-slate-200 rounded-full p-1 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              डेमो देखें
            </button>
          </div>
        </div>

        {/* Right Side: Video (First on mobile, Second on desktop) */}
        <div className="relative z-0 order-1 lg:order-2">
          {/* Glow effect behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] blur-2xl opacity-20 animate-pulse"></div>

          {/* Video Container */}
          <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 aspect-video  flex items-center justify-center group">
            <video
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Center Play Button Overlay */}
            <button className="absolute inset-0 m-auto w-20 h-20 bg-emerald-500/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.5)] backdrop-blur-sm pointer-events-auto">
              <Play className="w-8 h-8 fill-current translate-x-1" />
            </button>
          </div>

          {/* Floating UI Elements (Hidden on mobile screen) */}
          <div
            className="hidden md:block absolute -left-6 lg:-left-12 top-1/4 bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-xl animate-bounce"
            style={{ animationDuration: "3.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-xs">HD</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">क्वालिटी</p>
                <p className="text-xs text-slate-500">बिल्कुल स्पष्ट (HD)</p>
              </div>
            </div>
          </div>

          <div
            className="hidden md:block absolute -right-4 lg:-right-8 bottom-1/4 bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-xl animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xs">⚡</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">स्पीड</p>
                <p className="text-xs text-slate-500">सुपर फास्ट</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
