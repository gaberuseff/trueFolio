import {motion} from "framer-motion";

const services = [
  {
    title: "تطوير الويب",
    icon: "/icons/web-dev.svg",
  },
  {
    title: "استراتيجية العلامة التجارية",
    icon: "/icons/web-dev.svg",
  },
  {
    title: "تطوير تطبيقات الهاتف المحمول",
    icon: "/icons/mobile-dev.svg",
  },
  {
    title: "تصميم مواقع ووردبريس",
    icon: "/icons/wordpress.svg",
  },
  {
    title: "وسائل التواصل الاجتماعي",
    icon: "/icons/social-media.svg",
  },
  {
    title: "تحسين محركات البحث",
    icon: "/icons/seo.svg",
  },
];

function Services() {
  // تأثيرات الحاوية - تنسق ظهور العناصر الأبناء
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // تأخير 0.08 ثانية بين كل عنصر
        delayChildren: 0.1, // تأخير قبل بدء التأثيرات
      },
    },
  };

  // تأثيرات بطاقة الخدمة
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50, // تبدأ من الأسفل
      scale: 0.8, // تبدأ صغيرة
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="w-full bg-[var(--bg-primary)] py-16 px-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{opacity: 0, y: -30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16">
          <h2
            className="text-5xl font-black text-[#1b263b] mb-4"
            style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
            خدماتنا
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--gradient-blue-start)] to-[var(--gradient-blue-end)] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          className="w-full flex flex-wrap gap-6 justify-center items-center">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                y: -5,
                transition: {duration: 0.2},
              }}
              whileTap={{scale: 0.95}}
              className="flex flex-col items-center justify-center 
                bg-[var(--bg-primary)] rounded-2xl w-[170px] h-[160px] p-4 mb-2 
                cursor-pointer select-none">
              <div className="mb-3 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  width="48"
                  height="48"
                  className="object-contain"
                />
              </div>
              <span
                className="text-[1.18rem] font-black text-gray-700 text-center leading-tight font-[Palestine-Regular]"
                style={{fontFamily: "Palestine-Regular, sans-serif"}}>
                {service.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
