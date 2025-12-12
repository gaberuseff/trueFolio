import {motion} from "framer-motion";

const services = [
  {
    title: "تطوير الويب",
    icon: "/icons/web-dev.svg",
    hoverBg: "#DBEAFE", // blue-100
    hoverText: "#1D4ED8", // blue-700
  },
  {
    title: "استراتيجية العلامة التجارية",
    icon: "/icons/web-dev.svg",
    hoverBg: "#FEE2E2", // red-100
    hoverText: "#B91C1C", // red-700
  },
  {
    title: "تطوير تطبيقات الهاتف المحمول",
    icon: "/icons/mobile-dev.svg",
    hoverBg: "#DCFCE7", // green-100
    hoverText: "#15803D", // green-700
  },
  {
    title: "تصميم مواقع ووردبريس",
    icon: "/icons/wordpress.svg",
    hoverBg: "#E9D5FF", // purple-100
    hoverText: "#7E22CE", // purple-700
  },
  {
    title: "وسائل التواصل الاجتماعي",
    icon: "/icons/social-media.svg",
    hoverBg: "#FFEDD5", // orange-100
    hoverText: "#C2410C", // orange-700
  },
  {
    title: "تحسين محركات البحث",
    icon: "/icons/seo.svg",
    hoverBg: "#CCFBF1", // teal-100
    hoverText: "#0F766E", // teal-700
  },
];

function Services() {
  // تأثيرات الحاوية - تنسق ظهور العناصر الأبناء
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // إبطاء قليلًا بين العناصر
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="w-full bg-gray-50 py-16 px-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{opacity: 0, y: -30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2, duration: 0.5}}
            className="inline-block mb-4">
            <span
              className="bg-gray-200
              text-gray-500 px-5 py-2 rounded-full text-xs font-bold"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              شركة تروفوليو
            </span>
          </motion.div>

          <h2
            className="text-5xl font-black text-[#1b263b] mb-4 mt-2"
            style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
            خدماتنا
          </h2>
          <div
            className="w-16 h-1 bg-gradient-to-r 
            from-[var(--gradient-blue-start)] to-[var(--gradient-blue-end)] mx-auto rounded-full"
          />
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
                scale: 1.06,
                y: -6,
                backgroundColor: services[idx].hoverBg,
                color: services[idx].hoverText,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                  backgroundColor: {duration: 0},
                  color: {duration: 0},
                },
              }}
              className="group flex flex-col items-center justify-center 
                bg-[var(--bg-primary)] rounded-2xl w-[170px] h-[160px] p-4 mb-2 
                select-none transition-colors duration-500">
              <div className="mb-3 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  width="48"
                  height="48"
                  className="object-contain"
                />
              </div>
              <motion.span
                className="text-[1.18rem] font-black text-center text-gray-600
                  leading-tight font-[Palestine-Regular] transition-colors duration-500"
                style={{fontFamily: "Palestine-Regular, sans-serif"}}
                whileHover={{
                  color: services[idx].hoverText,
                  transition: {duration: 0, ease: "linear"},
                }}>
                {service.title}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
