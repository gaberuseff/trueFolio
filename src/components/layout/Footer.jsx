import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MotionButton } from "../ui/MotionButton";

const quickLinks = [
  {label: "الصفحة الرئيسية", href: "/"},
  {label: "أعمالنا", href: "/#portfolio"},
  {label: "نبذة عنا", href: "/#about"},
  {label: "تواصل معنا", href: "/contact"},
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-white/80 text-[#1b263b] py-16 px-4 mt-16 backdrop-blur"
      dir="rtl"
      style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* العمود الأيمن - العنوان والزر */}
          <motion.div
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="lg:col-span-1 text-right space-y-4">
            <p
              className="text-3xl md:text-4xl font-black leading-snug"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}>
              فلنبدأ العمل معاً
              <br />
              ابقَ على تواصل!
            </p>
            <MotionButton
              variant="blue"
              size="md"
              style={{fontFamily: "KOGhorab-Regular, sans-serif"}}
              to="/contact">
              تواصل معنا
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

          {/* العمود الأوسط - بيانات التواصل */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
            className="space-y-4 text-right order-3 lg:order-3">
            <h3 className="text-xl font-bold">بيانات التواصل</h3>
            <div className="space-y-2 text-lg text-[#415a77]">
              <p>فيلا 31 صالح حتي باشا - هليوبوليس - المطار - القاهرة</p>
              <p>
                رقم الهاتف:{" "}
                <a
                  href="tel:+201201922224"
                  className="hover:text-[var(--gradient-blue-end)]">
                  +2011111111111
                </a>
              </p>
              <p>
                البريد الإلكتروني:{" "}
                <a
                  href="mailto:info@truefolio.com"
                  className="hover:text-[var(--gradient-blue-end)] text-[#415a77]">
                  info@truefolio.com
                </a>
              </p>
              <p>رقم التسجيل الضريبي: 678-81-825</p>
            </div>
          </motion.div>

          {/* العمود الأيسر - الروابط السريعة */}
          <motion.div
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.15}}
            className="text-right space-y-4 order-2 lg:order-2">
            <h3 className="text-xl font-bold">الوصول السريع</h3>
            <div className="space-y-3 text-lg text-[#415a77]">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block hover:text-[var(--gradient-blue-end)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex items-center justify-between text-sm text-[#6c757d]">
          <span>© 2025 تروفوليو. جميع الحقوق محفوظة.</span>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-[var(--gradient-blue-end)]">
              IG
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-[var(--gradient-blue-end)]">
              FB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
