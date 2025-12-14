import { motion, useScroll } from "framer-motion";

function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left"
            style={{
                scaleX: scrollYProgress,
                background: "linear-gradient(90deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #ffeaa7 100%)",
            }}
        />
    );
}

export default ScrollProgressBar;
