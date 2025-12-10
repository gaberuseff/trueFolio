import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {MotionButton} from "../../ui/MotionButton";
import "../css/Hero.css";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const technologies = [
    {name: "JavaScript", icon: "JS"},
    {name: "CSS", icon: "CSS"},
    {name: "HTML", icon: "HTML"},
    {name: "Flutter", icon: "Flutter"},
    {name: "WordPress", icon: "WP"},
    {name: "Laravel", icon: "Laravel"},
  ];

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
    <section className="w-full min-h-screen flex items-center justify-center py-8 sm:py-16 px-3 sm:px-4 md:px-6 bg-gray-50">
      <div className="w-full max-w-7xl relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl aspect-auto  md:aspect-[4/3]">
        {/* Background Image - Load with priority */}
        <picture className="absolute inset-0 z-0">
          <source srcSet="/hero.webp" type="image/webp" />
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
          <motion.div
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
          className="relative z-10 min-h-screen sm:h-full flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-0"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            visibility: imageLoaded ? "visible" : "hidden",
          }}>
          {/* Main Title */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="mb-2 sm:mb-4 flex justify-center w-full">
            <h1
              className="flex flex-col gap-2 sm:gap-4 text-white text-center"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              <span className="text-3xl md:text-5xl text-right">
                مرحباً بكم فى
              </span>
              <span
                className="text-8xl lg:text-[160px] "
                style={{
                  fontFamily: "Zaatar-Regular, sans-serif",
                  fontSizeAdjust: "0.5",
                  fontKerning: "auto",
                  textRendering: "optimizeLegibility",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}>
                تروفوليو
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with underline animation */}
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.2}}
            className="text-center mb-4 sm:mb-6 max-w-2xl px-2">
            <p
              className="text-white text-xl md:text-2xl mb-2 sm:mb-3 leading-relaxed mt-2 sm:mt-4"
              style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
              نحن نسعى جاهدين لتوفير حلول فريدة وممتكرة لعملائنا مع التركيز على
              تحقيق أهدافهم وتعزيز حضورهم على الإنترنت.
            </p>
            <div className="h-0.5 bg-white w-16 sm:w-24 mx-auto mb-2 sm:mb-4" />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.4}}
            className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap justify-center">
            <MotionButton
              to="/contact"
              variant="blue"
              size="lg"
              style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
              ابدأ الآن
            </MotionButton>
            <MotionButton
              to="/#portfolio"
              variant="outline"
              size="lg"
              style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
              أعمالنا
            </MotionButton>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.6}}
            className="w-full px-2">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{opacity: 0, scale: 0.8}}
                  whileInView={{opacity: 1, scale: 1}}
                  viewport={{once: true}}
                  transition={{delay: 0.7 + index * 0.1}}
                  className="flex items-center">
                  <div className="text-white/60 text-xs sm:text-xs md:text-sm font-bold opacity-70">
                    {tech.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Icons Section */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.8}}
            className="w-full px-2 mt-6 sm:mt-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
              <motion.img
                src="/tools/js.svg"
                alt="JavaScript"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: 0.9}}
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity filter grayscale"
              />
              <motion.img
                src="/tools/css3.svg"
                alt="CSS3"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: 1.0}}
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity filter grayscale"
              />
              <motion.img
                src="/tools/html5.svg"
                alt="HTML5"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: 1.1}}
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity filter grayscale"
              />
              <motion.img
                src="/tools/wordpress.svg"
                alt="WordPress"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{delay: 1.2}}
                className="w-12 h-12 sm:w-14 sm:h-14 opacity-60 hover:opacity-100 transition-opacity filter grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
