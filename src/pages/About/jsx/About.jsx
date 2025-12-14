import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
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
          className="absolute top-[-80px] sm:top-0 right-5 sm:right-20 w-[200px] sm:w-96 h-[200px] sm:h-96 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-100px] sm:bottom-10 left-2 sm:left-10 w-[150px] sm:w-72 h-[150px] sm:h-72 bg-gradient-to-br from-teal-500 via-emerald-400 to-green-400 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="max-w-7xl w-full relative z-10" dir="rtl">
          <div className="text-center">
            {/* Main Title */}
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8 drop-shadow-lg"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              نبذة عنا
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-2"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              اكتشف من نحن وكيف نساهم في تحويل أحلامك الرقمية إلى واقع ملموس
            </motion.p>

            {/* Scroll Down Indicator */}
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

        {/* Wave SVG at the bottom */}
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

      {/* About Us Content Section */}
      <section className="w-full bg-[#f8f9fa] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 bg-white rounded-3xl p-10 shadow-sm"
              dir="rtl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6">
                <span
                  className="bg-gradient-to-r from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] 
                text-white px-6 py-2 rounded-full text-sm font-bold"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}>
                  نبذه عن تروفوليو
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-[#1b263b] mb-6 leading-tight"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                شركتك الموثوقة في تحقيق رؤيتك الرقمية
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[#415a77] leading-relaxed mb-5"
                style={{ fontFamily: "KoGaliModern-Bold, sans-serif" }}>
                تروفوليو شركة رقمية متكاملة نضع المستخدم في قلب كل قرار. نبني
                مواقع وتجارب رقمية تجمع بين الإبداع والسرعة والاعتمادية، مع
                تركيز على تحسين الأداء والأمان وقابلية التوسع.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-xl text-[#415a77] leading-relaxed mb-8"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                فريقنا يضم مطورين ومصممين واستشاريين يعملون بانسجام لتقديم حلول
                برمجية مخصصة، متكاملة مع أنظمة العملاء، ومدعومة بعمليات تسليم
                واضحة ودعم مستمر. هدفنا بناء شراكات طويلة المدى وتمكين عملائنا
                من تحقيق نتائج ملموسة في سوق رقمي سريع التغير.
              </motion.p>
            </motion.div>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
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
      <section className="w-full bg-[#f8f9fa] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden p-1">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80"
                  alt="مطور يعمل على الحاسوب"
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

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2 bg-white rounded-3xl p-10 shadow-sm"
              dir="rtl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6">
                <span
                  className="bg-gradient-to-r from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] 
                text-white px-6 py-2 rounded-full text-sm font-bold"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}>
                  شركة تروفوليو
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-[#1b263b] mb-6 leading-tight"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                خبرتنا
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[#415a77] leading-relaxed mb-5"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                نحن متخصصون في تطوير تطبيقات البرامج المخصصة وحلول الويب
                والهواتف المحمولة وتوفير خدمات استشارات تكنولوجيا المعلومات.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-xl text-[#415a77] leading-relaxed mb-5"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                يتمتع فريقنا بخبرة واسعة في مجموعة واسعة من الصناعات، بما في
                ذلك التمويل والرعاية الصحية والتجارة الإلكترونية والتعليم
                والمزيد.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-[#415a77] leading-relaxed mb-8"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                نحن نستفيد من أحدث التقنيات وأفضل ممارسات الصناعة لتقديم حلول
                قوية وقابلة للتطوير وآمنة ومصممة خصيصًا لتلبية متطلبات عملائنا
                المحددة.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
