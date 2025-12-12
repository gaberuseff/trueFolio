import { motion } from "framer-motion";
import { useState } from "react";
import "../css/Hero.css";

// Destructure the motion components we need
const {div: MotionDiv} = motion;

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const toolIcons = ["css3.svg", "html5.svg", "js.svg", "wordpress.svg"];

  // Floating elements positions
  const floatingElements = [
    {
      id: 1,
      type: "sphere",
      color: "bg-gray-500",
      top: "15%",
      left: "10%",
      size: "w-16 h-16",
    },
    {
      id: 2,
      type: "cylinder",
      color: "bg-yellow-300",
      top: "70%",
      right: "10%",
      size: "w-12 h-24",
    },
    {
      id: 3,
      type: "curve",
      color: "bg-purple-400",
      top: "35%",
      right: "15%",
      size: "w-8 h-32",
    },
  ];

  return (
    // Added overflow-x-hidden to prevent horizontal scroll
    <section
      className="w-full max-w-full overflow-x-hidden flex items-center 
      justify-center py-8 sm:pt-8 sm:pb-16 px-3 sm:px-4 md:px-6 bg-gray-50">
      <div className="w-full max-w-7xl relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl py-8 sm:py-20">
        {/* Background Image - Load with priority */}
        <picture className="absolute inset-0 z-0">
          <source srcSet="/hero2.webp" type="image/webp" />
          <img
            src="/hero.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </picture>

        {/* Floating Elements - Hidden on mobile, visible on larger screens */}
        {floatingElements.map((element) => (
          <MotionDiv
            key={element.id}
            className={`hidden sm:block absolute ${element.size} ${element.color} opacity-40`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              borderRadius: element.type === "sphere" ? "50%" : "20px",
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Content Container - Show only after image loads */}
        <div
          className="relative z-10 min-h-[70vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-0"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            visibility: imageLoaded ? "visible" : "hidden",
          }}>
          {/* Main Title */}
          <MotionDiv
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="mb-2 sm:mb-4 flex justify-center w-full">
            <h1
              className="flex flex-col gap-2 sm:gap-4 text-white text-center"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              <span
                className="text-6xl sm:text-8xl  leading-[0.9]"
                style={{fontWeight: 400}}>
                مرحباً بكم
              </span>
              <span className="inline-flex flex-col items-center">
                <span
                  className="text-6xl sm:text-8xl leading-[0.9]"
                  style={{fontWeight: 400}}>
                  فى تروفوليو
                </span>
                <motion.svg
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.3, delay: 0.5}}
                  className="mt-2 w-[220px] sm:w-[320px] translate-y-1"
                  viewBox="0 0 340 90"
                  preserveAspectRatio="none"
                  style={{display: "block", overflow: "visible"}}>
                  <motion.path
                    d="M 20 70 C 120 40, 220 40, 320 70"
                    fill="none"
                    stroke="#0f5132"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 1.6, ease: "easeInOut", delay: 0.5}}
                  />
                </motion.svg>
              </span>
            </h1>
          </MotionDiv>

          {/* Subtitle with underline animation */}
          <MotionDiv
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            className="text-center mb-4 sm:mb-6 max-w-2xl px-2">
            <p
              className="text-white text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 leading-relaxed mt-2 sm:mt-4"
              style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
              نحن نسعى جاهدين لتوفير حلول فريدة وممتكرة لعملائنا مع التركيز على
              تحقيق أهدافهم وتعزيز حضورهم على الإنترنت.
            </p>
            <div className="h-0.5 bg-white w-12 sm:w-16 md:w-24 mx-auto mb-2 sm:mb-4" />
          </MotionDiv>

          {/* Buttons */}
          <MotionDiv
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.4}}
            className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap justify-center">
            <motion.a
              href="/signup"
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              whileHover={{scale: 1.03}}
              transition={{duration: 0.3}}
              className="bg-white text-[#1b263b] sm:px-12 px-8 py-3 rounded-full 
                font-bold text-sm sm:text-base flex items-center gap-2 hover:shadow-lg"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              ابدأ الآن
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </motion.a>
            <motion.a
              href="/portfolio"
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              whileHover={{scale: 1.03}}
              transition={{duration: 0.3}}
              className="bg-transparent border-2 border-white/40 text-white 
                px-8 sm:px-12 py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 hover:bg-white/10"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              أعمالنا
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </motion.a>
          </MotionDiv>

          {/* Tools Section */}
          <MotionDiv
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.6}}
            className="w-full px-2 mt-8">
            <div className="flex flex-wrap justify-center gap-7 sm:gap-14 items-center">
              {toolIcons.map((iconName, index) => (
                <MotionDiv
                  key={iconName}
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{delay: 0.7 + index * 0.1}}
                  className="flex items-center justify-center">
                  <img
                    src={`/tools/${iconName}`}
                    alt={iconName.replace(/\.svg$/i, "")}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                    style={{
                      filter: "grayscale(1) brightness(2) invert(9)",
                      opacity: 0.5,
                    }}
                    loading="lazy"
                  />
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
