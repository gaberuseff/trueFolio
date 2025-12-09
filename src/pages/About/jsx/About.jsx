import {motion} from "framer-motion";
import "../css/About.css";

export default function About() {
  return (
    <>
      {/* Page Title Section - Hero Style */}
      <motion.section
        className="w-full h-[50vh] flex items-center justify-center py-0 px-4 
            bg-gradient-to-b from-[#2c3e50] via-[#34495e] to-[#2c3e50] relative overflow-visible"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.8}}>
        {/* Background Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400 via-pink-300 to-blue-400 rounded-full opacity-30 blur-3xl"
          animate={{y: [0, 30, 0], x: [0, 20, 0]}}
          transition={{duration: 10, repeat: Infinity}}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{y: [0, -30, 0], x: [0, -20, 0]}}
          transition={{duration: 12, repeat: Infinity}}
        />

        <div className="max-w-7xl w-full relative z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="text-center">
            {/* Main Title */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-lg"
              style={{fontFamily: "Zaatar-Regular, sans-serif"}}>
              نبذة عنا
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8, delay: 0.2}}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
              اكتشف من نحن وكيف نساهم في تحويل أحلامك الرقمية إلى واقع ملموس
            </motion.p>

            {/* Scroll Down Indicator */}
            <motion.div
              animate={{y: [0, 10, 0]}}
              transition={{duration: 2, repeat: Infinity}}
              className="flex justify-center mt-12">
              <div className="w-8 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{y: [0, 8, 0]}}
                  transition={{duration: 2, repeat: Infinity}}
                  className="w-1 h-2 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave SVG at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{height: "80px"}}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{stopColor: "#ffffff", stopOpacity: 1}}
              />
              <stop
                offset="100%"
                style={{stopColor: "#ffffff", stopOpacity: 1}}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,30L48,35C96,40,192,50,288,50C384,50,480,40,576,38C672,37,768,43,864,45C960,47,1056,43,1152,42C1248,40,1344,40,1392,40L1440,40L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </motion.section>

      {/* About Us Content Section */}
      <section className="w-full bg-[#f8f9fa] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className="order-2 lg:order-1 bg-white rounded-3xl p-10 shadow-sm"
              dir="rtl">
              {/* Badge */}
              <motion.div
                initial={{opacity: 0, y: -10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="inline-block mb-6">
                <span
                  className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-full text-sm font-bold"
                  style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                  نبذة عن شركتنا
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.1}}
                className="text-4xl md:text-5xl font-black text-[#1b263b] mb-6 leading-tight"
                style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                شركتك الموثوقة في تحقيق رؤيتك الرقمية
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.2}}
                className="text-xl text-[#415a77] leading-relaxed mb-8"
                style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                نحن في تروفوليو نؤمن أن النجاح الرقمي يبدأ بفهم عميق لاحتياجاتك.
                فريقنا من الخبراء المتخصصين يعمل بشغف لتحويل أفكارك إلى حلول
                برمجية مبتكرة وموثوقة. مع سنوات من الخبرة، نقدم خدمات متكاملة
                تجمع بين التصميم الجميل والأداء العالي والأمان المضمون.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.3}}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all"
                style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                نبذه عنا
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="13 17 18 12 13 7" />
                  <polyline points="6 17 11 12 6 7" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden p-1">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                  alt="فريق العمل"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
