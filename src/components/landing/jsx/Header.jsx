import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MotionButton } from "../../ui/MotionButton";

const navLinks = [
  { label: "الصفحة الرئيسية", href: "/" },
  { label: "نبذة عنا", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
  { label: "تسجيل", href: "/signup" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  // Destructure motion components to satisfy the linter
  const { header: MotionHeader, div: MotionDiv } = motion;

  return (
    <>
      {/* Added w-full max-w-full to prevent overflow */}
      <MotionHeader
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white/40 backdrop-blur-md shadow-sm py-3 sm:py-4"
          }`}
        dir="rtl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}>
        {/* Changed container to use proper responsive classes */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="./logo.png"
                  alt="تروفوليو"
                  className="h-16 sm:h-18 md:h-20 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-1.5 transition-all font-medium text-base ${location.pathname === link.href
                    ? "bg-[var(--gradient-green-end)] text-white font-bold"
                    : "text-[#1b263b]"
                    }`}
                  style={{ fontFamily: "'Tajawal', sans-serif" }}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Button - Hidden on mobile */}
            <div className="hidden md:block">
              <MotionButton
                to="/contact"
                variant="blue"
                size="md"
                className="text-xs sm:text-sm"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                تواصل معنا
              </MotionButton>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="القائمة">
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-[#1b263b]" />
                ) : (
                  // Custom two-line menu icon with bottom line longer, left-aligned
                  <div className="flex flex-col items-start justify-center space-y-1 pl-0.5">
                    <div className="w-3 h-0.5 bg-[#1b263b] rounded-full"></div>
                    <div className="w-4 h-0.5 bg-[#1b263b] rounded-full"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </MotionHeader>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Side Menu - Fixed positioning issues */}
            <MotionDiv
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-80 bg-white shadow-2xl z-50 overflow-y-auto max-w-full"
              dir="rtl">
              <div className="p-5">
                {/* Menu Header */}
                <div className="flex items-center justify-between mb-8 mt-2">
                  <h2
                    className="text-xl font-bold text-[#1b263b]"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    القائمة
                  </h2>
                  <button
                    onClick={closeMenu}
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="إغلاق">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu Links */}
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}>
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${location.pathname === link.href
                          ? "bg-gray-100 text-[#1b263b] font-bold"
                          : "text-[#1b263b] hover:bg-gray-50"
                          }`}
                        style={{ fontFamily: "'Tajawal', sans-serif" }}
                        onClick={closeMenu}>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Button in Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8">
                  <MotionButton
                    to="/contact"
                    variant="blue"
                    size="md"
                    className="w-full"
                    onClick={closeMenu}
                    style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    تواصل معنا
                  </MotionButton>
                </motion.div>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to compensate for fixed header - Adjusted height */}
      <div className="h-16 sm:h-20" />
    </>
  );
}

export default Header;
