import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY});
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      {/* النقطة المركزية الصغيرة */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          background:
            "radial-gradient(circle, var(--gradient-blue-end) 0%, var(--gradient-blue-start) 100%)",
          boxShadow:
            "0 0 10px var(--gradient-blue-end), 0 0 20px var(--gradient-blue-start)",
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 500,
          mass: 0.3,
        }}
      />

      {/* الدائرة الخارجية المتوهجة */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9998]"
        style={{
          border: "2px solid var(--gradient-blue-start)",
          background:
            "radial-gradient(circle, transparent 60%, rgba(155, 175, 217, 0.1) 100%)",
          boxShadow:
            "0 0 15px rgba(155, 175, 217, 0.3), inset 0 0 10px rgba(155, 175, 217, 0.2)",
        }}
        animate={{
          x: mousePosition.x - 14,
          y: mousePosition.y - 14,
          opacity: isVisible ? 0.8 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.6,
        }}
      />

      {/* دائرة خارجية ثالثة أكبر */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997]"
        style={{
          border: "1px solid rgba(155, 175, 217, 0.3)",
          background:
            "radial-gradient(circle, transparent 70%, rgba(155, 175, 217, 0.05) 100%)",
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 0.4 : 0,
          scale: isVisible ? 1 : 0.3,
          rotate: isVisible ? 360 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
          mass: 0.8,
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </>
  );
}
