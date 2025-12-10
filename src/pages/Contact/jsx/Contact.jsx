import {motion} from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Clock4,
  Send,
} from "lucide-react";

const cardVariants = {
  hidden: {opacity: 0, y: 24},
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {delay: 0.1 * i, duration: 0.6, ease: "easeOut"},
  }),
};

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative min-h-screen bg-[#f8f9fa] text-slate-900"
      dir="rtl">
      {/* Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center py-0 px-4 overflow-hidden bg-gradient-to-b from-[#2c3e50] via-[#1b263b] to-[#0f172a]">
        <div className="absolute top-[-160px] left-[-90px] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-cyan-400/35 via-blue-500/25 to-purple-500/25 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-100px] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-indigo-500/25 via-sky-400/20 to-emerald-400/15 blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10 text-center text-white">
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-md"
            style={{fontFamily: "Zaatar-Regular, sans-serif"}}>
            تواصل معنا
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.1}}
            className="text-lg md:text-xl text-slate-200/80 max-w-3xl mx-auto leading-relaxed"
            style={{fontFamily: "KoGaliModern-Bold, sans-serif"}}>
            نرافقك في كل خطوة. سواء كنت تبحث عن استشارة أو عرض سعر أو شراكة
            طويلة المدى، فريقنا جاهز للاستماع والرد بسرعة.
          </motion.p>

          <motion.div
            animate={{y: [0, 12, 0]}}
            transition={{duration: 2, repeat: Infinity}}
            className="mt-10 flex justify-center">
            <div className="w-9 h-14 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{y: [0, 10, 0]}}
                transition={{duration: 1.8, repeat: Infinity}}
                className="w-1 h-3 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{height: "90px"}}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contactWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{stopColor: "#ffffff", stopOpacity: 1}}
              />
              <stop
                offset="100%"
                style={{stopColor: "#ffffff", stopOpacity: 1}}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#contactWave)"
            d="M0,30L48,35C96,40,192,50,288,50C384,50,480,40,576,38C672,37,768,43,864,45C960,47,1056,43,1152,42C1248,40,1344,40,1392,40L1440,40L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </section>

      {/* Contact methods */}
      <section className="relative max-w-6xl mx-auto px-4 -mt-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: Mail,
              title: "البريد الإلكتروني",
              value: "hello@truefolio.com",
              href: "mailto:hello@truefolio.com",
              color: "from-rose-400 to-red-500",
            },
            {
              icon: Phone,
              title: "الهاتف",
              value: "0123456789",
              href: "tel:0123456789",
              color: "from-indigo-400 to-blue-500",
            },
            {
              icon: MapPin,
              title: "الموقع",
              value: "القاهرة - مصر",
              href: "https://maps.google.com",
              color: "from-emerald-400 to-teal-500",
            },
            {
              icon: Clock4,
              title: "ساعات العمل",
              value: "09:00 - 18:00 (GMT+2)",
              href: null,
              color: "from-amber-400 to-orange-500",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{once: true, amount: 0}}
              custom={idx}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_15px_35px_rgba(15,23,42,0.08)] p-5">
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-3xl`}
              />
              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg">
                  <item.icon size={24} />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-semibold text-slate-900 hover:underline decoration-2 decoration-slate-300">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-slate-900">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + info */}

      {/* Social links */}
      <section className="max-w-6xl mx-auto px-4 py-12 pb-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-cyan-600">وسائل التواصل</p>
          <h3 className="text-3xl md:text-4xl font-black mt-2 text-slate-900">
            ابق على اتصال معنا
          </h3>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            تابع أحدث الإصدارات، القصص، وفرص التعاون عبر قنواتنا الاجتماعية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Facebook",
              icon: Facebook,
              href: "https://facebook.com",
              bg: "bg-[#1877F2]",
            },
            {
              label: "Twitter",
              icon: Twitter,
              href: "https://twitter.com",
              bg: "bg-[#1DA1F2]",
            },
            {
              label: "Instagram",
              icon: Instagram,
              href: "https://instagram.com",
              bg: "bg-[#E4405F]",
            },
            {
              label: "LinkedIn",
              icon: Linkedin,
              href: "https://linkedin.com",
              bg: "bg-[#0077B5]",
            },
          ].map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              custom={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 flex items-center gap-4 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition hover:translate-y-[-4px]">
              <span
                className={`${item.bg} rounded-xl w-12 h-12 flex items-center justify-center text-white shadow-lg shadow-black/20`}>
                <item.icon size={22} />
              </span>
              <div>
                <p className="text-sm text-slate-500">تابعنا على</p>
                <p className="text-lg font-semibold text-slate-900">
                  {item.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
