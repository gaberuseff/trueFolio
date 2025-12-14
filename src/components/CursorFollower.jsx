import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({x: e.clientX, y: e.clientY});
      if (!isVisible) setIsVisible(true);

      // التحقق من hover على أزرار أو روابط
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isButton =
        element?.tagName === "BUTTON" ||
        element?.tagName === "A" ||
        element?.closest("button") ||
        element?.closest("a") ||
        element?.classList.contains("cursor-pointer");
      setIsHoveringButton(isButton);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringButton(false);
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
      {/* دائرة صغيرة سوداء */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          background: isHoveringButton ? "#ff6b35" : "#000000",
          width: isHoveringButton ? "40px" : "12px",
          height: isHoveringButton ? "40px" : "12px",
        }}
        animate={{
          x: mousePosition.x - (isHoveringButton ? 20 : 6),
          y: mousePosition.y - (isHoveringButton ? 20 : 6),
          opacity: isVisible ? (isHoveringButton ? 0.7 : 1) : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 350,
          mass: 0.4,
        }}
      />
    </>
  );
}
