import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Destructure the motion components we need
const { div: MotionDiv } = motion;

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const toolIcons = ["css3.svg", "html5.svg", "js.svg", "wordpress.svg"];
  const sectionRef = useRef(null);

  // Track scroll position for parallax and 3D effects
  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Create parallax transforms for different icons (faster and larger movement)
  const icon1Y = useTransform(scrollY, [0, 300], [0, -300]);
  const icon2Y = useTransform(scrollY, [0, 300], [0, -400]);

  // 3D perspective transforms
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -25]); // Tilt backward (fold down)
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]); // Descend
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]); // Slight shrink
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]); // Fade out

  return (
    <section
      className="w-full max-w-full overflow-x-hidden flex items-center 
      justify-center py-8 sm:pt-8 sm:pb-16 px-3 sm:px-4 md:px-6 bg-gray-50"
      style={{ perspective: "1200px" }}>
      <style>{`
        @keyframes underline-draw {
          0% { stroke-dashoffset: 1; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pen-move {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 1; }
        }
      `}</style>
      <motion.div
        ref={sectionRef}
        className="w-full max-w-7xl relative overflow-hidden rounded-2xl sm:rounded-3xl py-8 sm:py-20"
        style={{
          rotateX,
          translateY,
          scale,
          opacity,
          transformStyle: "preserve-3d",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}>
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

        {/* Floating Icons with Parallax Effect */}
        <motion.div
          className="absolute top-[45%] left-[8%] z-[5] hidden md:block"
          style={{ y: icon1Y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.9, scale: 1, rotate: 12 }}
          transition={{ duration: 1, delay: 0.5 }}>
          <img
            src="/heroIcons/2.webp"
            alt="Floating Icon"
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="absolute top-[45%] right-[8%] z-[5] hidden md:block"
          style={{ y: icon2Y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.9, scale: 1, rotate: -12 }}
          transition={{ duration: 1, delay: 0.6 }}>
          <img
            src="/heroIcons/SiiClgX97I0iOF4vYcj3eHIU.avif"
            alt="Floating Icon"
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain drop-shadow-2xl"
          />
        </motion.div>

        <div
          className="relative z-10 min-h-[70vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-0"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            visibility: imageLoaded ? "visible" : "hidden",
          }}>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-2 sm:mb-4 flex justify-center w-full"
            style={{ willChange: 'transform' }}>
            <h1
              className="flex flex-col gap-2 sm:gap-4 text-white text-center"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <span
                className="text-6xl sm:text-7xl lg:text-8xl leading-[0.85]"
                style={{ fontWeight: 900 }}>
                مرحباً بكم
              </span>
              <span className="inline-flex flex-col items-center">
                <span
                  className="text-6xl sm:text-7xl lg:text-8xl leading-[0.85] relative"
                  style={{ fontWeight: 900, letterSpacing: "0.01em" }}>
                  فى تروفوليو
                  <span
                    className="block mx-auto mt-6 relative"
                    style={{ width: "16rem" }}>
                    <svg
                      viewBox="0 0 256 24"
                      className="w-64 sm:w-72 lg:w-80 h-6"
                      style={{ display: "block", overflow: "visible" }}>
                      <path
                        id="hero-underline-path"
                        d="M 4 18 C 80 6, 176 6, 252 18"
                        fill="none"
                        stroke="var(--gradient-green-end)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        pathLength="1"
                        style={{
                          strokeDasharray: 1,
                          strokeDashoffset: 1,
                          animation: imageLoaded
                            ? "underline-draw 1.4s linear 1.6s forwards"
                            : "none",
                        }}
                      />
                      <image
                        href="/icons/pen.svg"
                        width="24"
                        height="24"
                        opacity={0}>
                        <animateMotion
                          dur="1.4s"
                          begin={imageLoaded ? "1.6s" : "indefinite"}
                          fill="freeze"
                          rotate="auto"
                          keyPoints="0;1"
                          keyTimes="0;1"
                          calcMode="linear">
                          <mpath xlinkHref="#hero-underline-path" />
                        </animateMotion>
                        <animate
                          attributeName="opacity"
                          from="0"
                          to="1"
                          dur="0.01s"
                          begin={imageLoaded ? "1.6s" : "indefinite"}
                          fill="freeze"
                        />
                      </image>
                    </svg>
                  </span>
                </span>
              </span>
            </h1>
          </MotionDiv>

          {/* Subtitle with underline animation */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-4 sm:mb-6 max-w-2xl px-2"
            style={{ willChange: 'opacity' }}>
            <p
              className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 leading-relaxed mt-2 sm:mt-4"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              نحن نسعى جاهدين لتوفير حلول فريدة ومبتكرة لعملائنا، مع التركيز على
              تحقيق أهدافهم وتعزيز حضورهم على الإنترنت.
            </p>
            <div className="h-0.5 bg-white w-12 sm:w-16 md:w-24 mx-auto mb-2 sm:mb-4" />
          </MotionDiv>

          {/* Buttons */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap justify-center"
            style={{ willChange: 'transform' }}>
            <motion.a
              href="/signup"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-[#1b263b] sm:px-12 px-8 py-3 rounded-full 
                font-bold text-sm sm:text-base flex items-center gap-2 hover:shadow-lg"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
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
              href="#contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent text-white
                px-8 sm:px-12 py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 hover:opacity-80"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              سجل الآن
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full px-2 mt-8">
            <div className="flex flex-wrap justify-center gap-7 sm:gap-14 items-center">
              {toolIcons.map((iconName, index) => (
                <MotionDiv
                  key={iconName}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
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
      </motion.div>
    </section>
  );
}
