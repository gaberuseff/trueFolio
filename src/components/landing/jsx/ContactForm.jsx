import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setSubmitting(true);

    try {
      const payload = {
        name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject,
        budget: formData.budget,
        message: formData.message.trim(),
      };

      const { error } = await supabase.from("web_requests").insert([payload]);
      if (error) throw error;

      setStatus({
        type: "success",
        message: "تم إرسال طلبك بنجاح. سنعود إليك قريبًا.",
      });
      setFormData({
        fullName: "",
        phone: "",
        subject: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "تعذر إرسال الطلب. حاول مرة أخرى.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-gray-50 py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
            style={{ willChange: 'transform' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block">
              <span
                className="bg-gradient-to-r from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] text-white px-5 py-2 rounded-full text-xs font-bold"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                سجل معنا
              </span>
            </motion.div>

            <h2
              className="text-4xl md:text-5xl font-black text-[#1b263b] leading-tight"
              style={{ fontFamily: "'Tajawal', sans-serif" }}>
              هل لديك مشروع في ذهنك؟
              <br />
              لنناقش الأمر
            </h2>
          </motion.div>

          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8 order-1 lg:order-2"
            style={{ willChange: 'transform' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-rose-200 bg-rose-50 text-rose-800"
                    }`}>
                  {status.message}
                </div>
              )}

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-base font-bold text-[#1b263b] mb-2"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-[var(--gradient-green-end)] outline-none transition-colors bg-transparent"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-bold text-[#1b263b] mb-2"
                    style={{ fontFamily: "KoGaliModern-Bold, sans-serif" }}>
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-[var(--gradient-green-end)] outline-none transition-colors bg-transparent"
                    style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}
                  />
                </div>
              </div>

              {/* Subject & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-bold text-[#1b263b] mb-2"
                    style={{ fontFamily: "KoGaliModern-Bold, sans-serif" }}>
                    الموضوع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-[var(--gradient-green-end)] outline-none transition-colors bg-transparent cursor-pointer"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}>
                    <option value="">اختر الموضوع</option>
                    <option value="web-dev">تطوير موقع ويب</option>
                    <option value="mobile-app">تطبيق موبايل</option>
                    <option value="branding">العلامة التجارية</option>
                    <option value="seo">تحسين محركات البحث</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-base font-bold text-[#1b263b] mb-2"
                    style={{ fontFamily: "KoGaliModern-Bold, sans-serif" }}>
                    ميزانيتك
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="أدخل الميزانية بالجنيه"
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-[var(--gradient-green-end)] outline-none transition-colors bg-transparent"
                    style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-bold text-[#1b263b] mb-2"
                  style={{ fontFamily: "KoGaliModern-Bold, sans-serif" }}>
                  رسالتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-[var(--gradient-green-end)] outline-none transition-colors bg-transparent resize-none"
                  style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[var(--gradient-green-start)] to-[var(--gradient-green-end)] text-white py-4 
                    rounded-full font-bold text-xl hover:shadow-xl transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Tajawal', sans-serif" }}>
                {submitting ? "جاري الإرسال..." : "إرسال"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
