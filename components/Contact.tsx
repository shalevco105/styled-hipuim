"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                            בואו נדבר על הפרויקט הבא שלכם
                        </h2>
                        <div className="w-20 h-1 bg-stone-800 rounded-full mb-8" />
                        <p className="text-stone-600 text-lg mb-12 leading-relaxed">
                            בין אם אתם בשלב הראשוני של החיפושים או כבר יודעים בדיוק מה אתם רוצים, אנחנו כאן כדי לכוון ולהציע פתרונות חיפוי ברמה הגבוהה ביותר. השאירו פרטים ונחזור אליכם בהקדם.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                            <a href="tel:0501234567" className="group flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-stone-200 transition-all gap-4">
                                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 shrink-0 group-hover:scale-110 group-hover:bg-stone-100 transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-0.5">טלפון</h4>
                                    <p className="text-sm sm:text-base text-stone-600" dir="ltr">050-1234567</p>
                                </div>
                            </a>

                            <a href="mailto:info@stylehipuim.co.il" className="group flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-stone-200 transition-all gap-4">
                                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 shrink-0 group-hover:scale-110 group-hover:bg-stone-100 transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-0.5">אימייל</h4>
                                    <p className="text-sm sm:text-base text-stone-600">info@stylehipuim.co.il</p>
                                </div>
                            </a>

                            <a href="#" className="group flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-stone-200 transition-all gap-4">
                                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 shrink-0 group-hover:scale-110 group-hover:bg-stone-100 transition-all">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-0.5">אינסטגרם</h4>
                                    <p className="text-sm sm:text-base text-stone-600">עקבו אחרינו</p>
                                </div>
                            </a>

                            <a href="#" className="group flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-stone-200 transition-all gap-4">
                                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 shrink-0 group-hover:scale-110 group-hover:bg-stone-100 transition-all">
                                    <Facebook size={24} />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-0.5">פייסבוק</h4>
                                    <p className="text-sm sm:text-base text-stone-600">הצטרפו לקהילה שלנו</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-4 xl:mt-6 p-6 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-900 mb-1">אזור שירות</h4>
                                <p className="text-stone-600">בכל הארץ - שירות עד בית הלקוח ותצוגה בתיאום מראש.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-stone-100"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">שם מלא *</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all"
                                    placeholder="הכניסו את השם שלכם"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">טלפון נייד *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    dir="ltr"
                                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all text-right"
                                    placeholder="05X-XXXXXXX"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">אימייל</label>
                                <input
                                    type="email"
                                    id="email"
                                    dir="ltr"
                                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all text-right"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">הודעה / סיבת הפנייה</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all resize-none"
                                    placeholder="ספרו לנו קצת על הפרויקט המתוכנן..."
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full bg-stone-900 text-white font-medium text-lg px-8 py-4 rounded-sm hover:bg-stone-800 transition-colors mt-4"
                            >
                                שליחת פנייה
                            </button>
                        </form>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
