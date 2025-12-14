import { motion } from "framer-motion";
import { useEffect } from "react";
import PortfolioSection from "@/components/landing/jsx/Portfolio";

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Title Section - Hero Style */}
      <section
        className="w-full min-h-[50vh] md:h-[40vh] flex items-center justify-center py-12 md:py-0 px-4 
            bg-gradient-to-b from-[#2c3e50] via-[#1b263b] to-[#0f172a] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <motion.div
          className="absolute top-[-80px] sm:top-0 right-5 sm:right-20 w-[200px] sm:w-96 h-[200px] sm:h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-100px] sm:bottom-10 left-2 sm:left-10 w-[150px] sm:w-72 h-[150px] sm:h-72 bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="max-w-7xl w-full relative z-10" dir="rtl">
          <div className="text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8 drop-shadow-lg"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              أعمالنا
            </h1>

            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-2"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              مجموعة مختارة من المشاريع التي أنجزناها لعملائنا، مع تركيز على
              الجودة، السرعة، وتجارب الاستخدام المميزة.
            </motion.p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mt-12">
              <div className="w-8 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{ height: "80px" }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,30L48,35C96,40,192,50,288,50C384,50,480,40,576,38C672,37,768,43,864,45C960,47,1056,43,1152,42C1248,40,1344,40,1392,40L1440,40L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </section>

      {/* Portfolio cards reused from homepage */}
      <PortfolioSection />
    </>
  );
}
