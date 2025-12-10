import {AnimatePresence, motion} from "framer-motion";
import {Menu, TextAlignEnd, X} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {MotionButton} from "../../ui/MotionButton";
import "../css/Header.css";

const navLinks = [
  {label: "الصفحة الرئيسية", href: "/"},
  {label: "نبذة عنا", href: "/about"},
  {label: "تواصل معنا", href: "/contact"},
  {label: "تسجيل", href: "/signup"},
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/40 
          backdrop-blur-md shadow-sm w-full"
        dir="rtl">
        <div className="w-full px-4 py-4">
          <div className="flex items-center justify-between">
            {/* أيقونة القائمة - اليمين */}
            <div className="flex items-center gap-4">
              {/* أيقونة القائمة */}
              <button
                onClick={toggleMenu}
                className="w-11 h-11 flex items-center justify-center rounded-full border
                  border-[#1b263b8e] hover:bg-gray-100 transition-colors"
                aria-label="القائمة">
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-[#1b263b]" />
                ) : (
                  <TextAlignEnd className="w-6 h-6 text-[#1b263b]" />
                )}
              </button>
            </div>

            {/* الروابط في المنتصف - مخفية على الشاشات الصغيرة */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[#1b263b] hover:text-[var(--gradient-blue-end)] transition-colors font-medium text-lg"
                  style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* اللوجو - اليسار */}
            <Link to="/" className="flex items-center">
              <img
                src="./logo.png"
                alt="تروفوليو"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* القائمة الجانبية */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Side Menu */}
            <motion.div
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{type: "spring", damping: 25, stiffness: 200}}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
              dir="rtl">
              <div className="p-6">
                {/* رأس القائمة */}
                <div className="flex items-center justify-between mb-8">
                  <h2
                    className="text-2xl font-bold text-[#1b263b]"
                    style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                    القائمة
                  </h2>
                  <button
                    onClick={toggleMenu}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="إغلاق">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* روابط القائمة */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{opacity: 0, x: 50}}
                      animate={{opacity: 1, x: 0}}
                      transition={{delay: index * 0.1}}>
                      <Link
                        to={link.href}
                        onClick={toggleMenu}
                        className="block px-4 py-3 text-lg font-medium text-[#1b263b] hover:bg-gray-100 rounded-lg transition-colors"
                        style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* زر تواصل معنا في القائمة */}
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.4}}
                  className="mt-8">
                  <MotionButton
                    to="/contact"
                    variant="blue"
                    size="md"
                    className="w-full"
                    onClick={toggleMenu}
                    style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
                    تواصل معنا
                  </MotionButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer لتعويض الـ fixed header */}
      <div className="h-20" />
    </>
  );
}

export default Header;
