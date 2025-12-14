import { MotionButton } from "@/components/ui/MotionButton";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "+35",
      label: "خدمات متنوعة",
    },
    {
      number: "5",
      label: "سنوات الخبرات",
    },
    {
      number: "+150",
      label: "عملاء سعداء",
    },
    {
      number: "+300",
      label: "اكتمل المشروع",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="stats" className="w-full bg-[var(--bg-primary)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* محتوى السكشن */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* الجانب الأيسر - الصورة التوضيحية */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
            style={{ willChange: 'transform' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80"
              alt="فريق العمل"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          {/* الجانب الأيمن - النص والزر */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-right"
            style={{ willChange: 'transform' }}>
            {/* الشارة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6">
              <span
                className="bg-gradient-to-r from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] 
                text-white px-6 py-2 rounded-full text-sm font-bold"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                لماذا نختارنا
              </span>
            </motion.div>

            {/* العنوان */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl font-black text-[#1b263b] mb-6"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              مهمتنا
            </motion.h2>

            {/* الوصف */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-[#415a77] leading-relaxed mb-8"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              نؤمن بأن التطور التكنولوجي هو المفتاح لنجاح أي مشروع. فريقنا
              المتخصص يعمل بحماس لتحويل رؤيتك إلى واقع رقمي متقن، حيث نجمع بين
              الإبداع والخبرة لإنشاء حلول برمجية قوية وفعالة. هدفنا أن نكون
              شركاؤك الموثوقين في رحلة النمو والتطور نحو مستقبل رقمي مزدهر.
            </motion.p>
          </motion.div>
        </div>

        {/* الإحصائيات */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          style={{ willChange: 'transform' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div
                className="text-2xl md:text-3xl font-black bg-gradient-to-r 
                    from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] bg-clip-text text-transparent mb-3"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                {stat.number}
              </div>
              <p
                className="text-2xl text-[#415a77]"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
