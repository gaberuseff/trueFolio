import { motion, AnimatePresence } from "framer-motion";
import { MotionButton } from "@/components/ui/MotionButton";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const services = [
    {
      icon: "✏️",
      title: "منصات تعليمية",
      description: "نحن نقدم حلول ومميزات جديدة لتقدم لكم احسن نسخة من أعمالنا",
    },
    {
      icon: "⚡",
      title: "تطوير متقدم",
      description:
        "نحن متخصصون في تطوير تطبيقات البرامج المخصصة وحلول الويب والهواتف الذكية، حيث نوفر خدمات استشارات تكنولوجيا المعلومات.",
    },
    {
      icon: "🎨",
      title: "تصميم احترافي",
      description:
        "فريقنا يتمتع بخبرة واسعة في مجموعة متنوعة من الصناعات، بما في ذلك التمويل والرعاية الصحية والتجارة الإلكترونية والتعليم والمزيد.",
    },
    {
      icon: "🚀",
      title: "أداء عالي",
      description:
        "نركز على إنشاء حلول سريعة وفعالة تساعدك في الوصول إلى أهدافك بسهولة وكفاءة عالية.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentIndex];

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[var(--bg-primary)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ willChange: 'transform' }}>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1b263b] mb-4"
            style={{ fontFamily: "'Tajawal', sans-serif" }}>
            لماذا تختارنا؟
          </h2>
        </motion.div>

        {/* محتوى السكشن */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* الجانب الأيمن - النص المتغير */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-right order-2 lg:order-1"
            style={{ willChange: 'transform' }}>
            {/* الخدمات المتغيرة */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-8">
                {/* الأيقونة والعنوان */}
                <div className="flex items-center justify-end gap-3 mb-6">
                  <motion.h3
                    className="text-3xl md:text-4xl font-black text-[var(--gradient-green-end)]"
                    style={{
                      fontFamily: "'Tajawal', sans-serif",
                    }}>
                    {currentService.title}
                  </motion.h3>
                  <span className="text-4xl">{currentService.icon}</span>
                </div>

                {/* الوصف */}
                <p
                  className="text-lg text-[#415a77] leading-relaxed mb-8"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}>
                  {currentService.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* مؤشرات التنقل */}
            <div className="flex gap-2 mt-8 justify-end">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? "w-8 bg-[var(--gradient-green-end)]"
                    : "w-2 bg-gray-300"
                    }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          {/* الجانب الأيسر - الصورة التوضيحية */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
            style={{ willChange: 'transform' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80"
              alt="فريق العمل"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
