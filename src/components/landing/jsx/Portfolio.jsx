import { MotionButton } from "@/components/ui/MotionButton";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Young Pharaoh",
    description: "موقع شركة سياحة يقدم كل خدمات السياحة",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=80",
    link: "#",
    category: "سياحة",
  },
  {
    id: 2,
    title: "منصة تعليمية",
    description: "منصة تعليمية متكاملة لإدارة الدورات والطلاب",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80",
    link: "#",
    category: "تعليم",
  },
  {
    id: 3,
    title: "متجر إلكتروني",
    description: "متجر إلكتروني حديث للمنتجات الرقمية",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    link: "#",
    category: "تجارة",
  },
  {
    id: 4,
    title: "Gyptology UIB",
    description: "موقع للمعلومات الأثرية والتاريخية المصرية",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80",
    link: "#",
    category: "تاريخ",
  },
  {
    id: 5,
    title: "تطبيق ألعاب تعليمية",
    description: "منصة ألعاب تعليمية تفاعلية للأطفال",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    link: "#",
    category: "تعليم",
  },
  {
    id: 6,
    title: "موقع تقني",
    description: "موقع للمقالات التقنية والبرمجية المتخصصة",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
    link: "#",
    category: "تقنية",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
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
    <section
      id="portfolio"
      className="w-full bg-[var(--bg-primary)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <motion.div
          initial={{opacity: 0, y: -30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16">
          <h2
            className="text-5xl font-black text-[#1b263b] mb-4"
            style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
            أعمالنا
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--gradient-blue-start)] to-[var(--gradient-blue-end)] mx-auto rounded-full" />
        </motion.div>

        {/* شبكة المشاريع */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{
                background: `linear-gradient(135deg, #52b788 0%, #2d6a4f 100%)`,
                aspectRatio: "4/3",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}>
              {/* الصورة */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform:
                      hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {/* طبقة سوداء خفيفة عند الـ hover */}
                <motion.div
                  initial={{opacity: 0}}
                  animate={{
                    opacity: hoveredId === project.id ? 0.3 : 0,
                  }}
                  transition={{duration: 0.3}}
                  className="absolute inset-0 bg-black"
                />
              </div>

              {/* المحتوى عند الـ Hover */}
              <motion.div
                initial={{opacity: 0}}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                transition={{duration: 0.3}}
                className="absolute inset-0 bg-black/85 flex flex-col items-start justify-center p-8 text-right">
                {/* اسم المشروع */}
                <motion.h3
                  initial={{y: 20, opacity: 0}}
                  animate={{
                    y: hoveredId === project.id ? 0 : 20,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{delay: 0.1, duration: 0.3}}
                  className="text-white text-3xl font-black mb-4"
                  style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                  {project.title}
                </motion.h3>

                {/* وصف المشروع */}
                <motion.p
                  initial={{y: 20, opacity: 0}}
                  animate={{
                    y: hoveredId === project.id ? 0 : 20,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{delay: 0.2, duration: 0.3}}
                  className="text-gray-300 text-lg mb-6"
                  style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                  {project.description}
                </motion.p>

                {/* أيقونة الرابط */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{y: 20, opacity: 0, scale: 0.8}}
                  animate={{
                    y: hoveredId === project.id ? 0 : 20,
                    opacity: hoveredId === project.id ? 1 : 0,
                    scale: hoveredId === project.id ? 1 : 0.8,
                  }}
                  transition={{delay: 0.3, duration: 0.3}}
                  whileHover={{scale: 1.1, rotate: 5}}
                  whileTap={{scale: 0.95}}
                  className="w-14 h-14 bg-gradient-to-br from-[var(--gradient-blue-start)] 
                    to-[var(--gradient-blue-end)] rounded-full flex items-center justify-center shadow-xl">
                  <ExternalLink size={20} color="white" strokeWidth={2.5} />
                </motion.a>
              </motion.div>

              {/* النقطة الصغيرة في الزاوية */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full opacity-80" />
            </motion.div>
          ))}
        </motion.div>

        {/* زر عرض الكل */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.5, duration: 0.6}}
          className="mt-12 flex justify-center">
          <MotionButton
            variant="blue"
            size="lg"
            style={{fontFamily: "KOGhorab-Regular, sans-serif"}}
            onClick={() => navigate("/portfolio")}>
            عرض الكل
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
    </section>
  );
}
