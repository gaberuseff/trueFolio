import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Page Title Section - Hero Style */}
      <section
        className="w-full h-[50vh] flex items-center justify-center py-0 px-4 
            bg-gradient-to-b from-[#2c3e50] via-[#1b263b] to-[#0f172a] relative overflow-visible">
        {/* Background Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-30 blur-3xl"
          animate={{y: [0, 30, 0], x: [0, 20, 0]}}
          transition={{duration: 10, repeat: Infinity}}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400 rounded-full opacity-20 blur-3xl"
          animate={{y: [0, -30, 0], x: [0, -20, 0]}}
          transition={{duration: 12, repeat: Infinity}}
        />

        <div className="max-w-7xl w-full relative z-10">
          <div className="text-center">
            {/* Main Title */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-lg"
              style={{fontFamily: "Zaatar-Regular, sans-serif"}}>
              نبذة عنا
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{opacity: 1, y: 0}}
              animate={{opacity: 1, y: 0}}
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
          </div>
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
      </section>

      {/* About Us Content Section */}
      <section className="w-full bg-[#f8f9fa] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount: 0}}
              transition={{duration: 0.8}}
              className="order-2 lg:order-1 bg-white rounded-3xl p-10 shadow-sm"
              dir="rtl">
              {/* Badge */}
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0}}
                transition={{delay: 0.2, duration: 0.5}}
                className="inline-block mb-6">
                <span
                  className="bg-gradient-to-r from-[var(--gradient-blue-start)] to-[var(--gradient-blue-end)] 
                text-white px-6 py-2 rounded-full text-sm font-bold"
                  style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                  نبذه عن تروفوليو
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0}}
                transition={{duration: 0.8, delay: 0.1}}
                className="text-4xl md:text-5xl font-black text-[#1b263b] mb-6 leading-tight"
                style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                شركتك الموثوقة في تحقيق رؤيتك الرقمية
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="text-xl text-[#415a77] leading-relaxed mb-5"
                style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                تروفوليو شركة رقمية متكاملة نضع المستخدم في قلب كل قرار. نبني
                مواقع وتجارب رقمية تجمع بين الإبداع والسرعة والاعتمادية، مع
                تركيز على تحسين الأداء والأمان وقابلية التوسع.
              </motion.p>

              <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0}}
                transition={{duration: 0.8, delay: 0.25}}
                className="text-xl text-[#415a77] leading-relaxed mb-8"
                style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                فريقنا يضم مطورين ومصممين واستشاريين يعملون بانسجام لتقديم حلول
                برمجية مخصصة، متكاملة مع أنظمة العملاء، ومدعومة بعمليات تسليم
                واضحة ودعم مستمر. هدفنا بناء شراكات طويلة المدى وتمكين عملائنا
                من تحقيق نتائج ملموسة في سوق رقمي سريع التغير.
              </motion.p>
            </motion.div>
            {/* Image Section */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount: 0}}
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

      {/* Experience Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f9fbff] via-white to-[#f7f9fb] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
          <div className="experience-pattern w-full h-full" />
        </div>

        <div
          className="absolute -right-32 top-10 w-72 h-72 bg-gradient-to-br from-[#e6f0ff] to-[#fff0e6] rounded-full blur-3xl opacity-70"
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 bottom-0 w-72 h-72 bg-gradient-to-tr from-[#dff7f1] to-[#f4e7ff] rounded-full blur-3xl opacity-70"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{opacity: 0, x: -40}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount: 0}}
              transition={{duration: 0.8}}
              className="relative bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_20px_60px_rgba(15,23,42,0.08)] rounded-[28px] p-10 overflow-hidden"
              dir="rtl">
              <div
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#e57373] via-[#ffb74d] to-[#64b5f6] opacity-20 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-12 -left-12 w-52 h-52 bg-gradient-to-tr from-[#42a5f5] via-[#90caf9] to-[#fff] opacity-30 blur-3xl"
                aria-hidden="true"
              />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <motion.span
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0}}
                  transition={{delay: 0.15, duration: 0.5}}
                  className="px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#0f172a] to-[#1e2a3a] shadow-md"
                  style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                  شركة تروفوليو
                </motion.span>
                <span className="text-2xl" aria-hidden="true">
                  ⚡
                </span>
              </div>

              <motion.h3
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0}}
                transition={{duration: 0.7, delay: 0.05}}
                className="text-4xl md:text-5xl font-black text-[#1b263b] mb-6 leading-tight"
                style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                خبرتنا
              </motion.h3>

              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0}}
                transition={{duration: 0.8, delay: 0.15}}
                className="space-y-4 text-lg md:text-xl text-[#415a77] leading-relaxed relative z-10"
                style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                <p>
                  نحن متخصصون في تطوير تطبيقات البرامج المخصصة وحلول الويب
                  والهواتف المحمولة وتوفير خدمات استشارات تكنولوجيا المعلومات.
                </p>
                <p>
                  يتمتع فريقنا بخبرة واسعة في مجموعة واسعة من الصناعات، بما في
                  ذلك التمويل والرعاية الصحية والتجارة الإلكترونية والتعليم
                  والمزيد.
                </p>
                <p>
                  نحن نستفيد من أحدث التقنيات وأفضل ممارسات الصناعة لتقديم حلول
                  قوية وقابلة للتطوير وآمنة ومصممة خصيصًا لتلبية متطلبات عملائنا
                  المحددة.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 40}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount: 0}}
              transition={{duration: 0.8}}
              className="relative">
              <div
                className="relative overflow-hidden rounded-[28px] border 
             p-4">
                <div
                  className="absolute inset-0 experience-pattern opacity-60"
                  aria-hidden="true"
                />
                <div className="relative z-10 rounded-[24px] p-3">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80"
                    alt="مطور يعمل على الحاسوب"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
