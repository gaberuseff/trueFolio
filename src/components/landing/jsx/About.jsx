import { MotionButton } from "@/components/ui/MotionButton";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[var(--bg-primary)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* الصورة على اليمين */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="order-1 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden p-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="فريق العمل"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* عناصر ديكور */}
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

          {/* النص على اليسار */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="order-2 lg:order-2 bg-white rounded-3xl p-10 shadow-sm">
            {/* الشارة */}
            <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2, duration: 0.5}}
              className="inline-block mb-6">
              <span
                className="bg-gradient-to-r from-[var(--gradient-blue-start)] to-[var(--gradient-blue-end)] text-white px-6 py-2 rounded-full text-sm font-bold"
                style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                نبذة عن شركتنا
              </span>
            </motion.div>

            {/* العنوان الرئيسي */}
            <motion.h2
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.5}}
              className="text-4xl md:text-4xl font-black text-[#1b263b] mb-6 leading-tight"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              شركتك الموثوقة في تحقيق رؤيتك الرقمية
            </motion.h2>

            {/* الوصف */}
            <motion.p
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.4, duration: 0.5}}
              className="text-xl text-[#415a77] leading-relaxed mb-8"
              style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
              نحن في تروفوليو نؤمن أن النجاح الرقمي يبدأ بفهم عميق لاحتياجاتك.
              فريقنا من الخبراء المتخصصين يعمل بشغف لتحويل أفكارك إلى حلول
              برمجية مبتكرة وموثوقة. مع سنوات من الخبرة، نقدم خدمات متكاملة تجمع
              بين التصميم الجميل والأداء العالي والأمان المضمون.
            </motion.p>

            {/* زر CTA */}
            <MotionButton
              variant="blue"
              size="lg"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("services")?.offsetTop || 0,
                  behavior: "smooth",
                })
              }>
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
            </MotionButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
