"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "משפחת כהן, הרצליה",
        text: "החיפוי בסלון שינה לנו לחלוטין את מראה הבית. הצוות היה סופר מקצועי, העבודה הייתה קפדנית, מהירה ונקייה. ממליצים בחום למי שמחפש פתרון אלגנטי ומרשים.",
    },
    {
        name: "יעל לוי, מעצבת פנים",
        text: "בתור מעצבת שמחפשת תמיד שלמות עבור הלקוחות שלה, Style Hipuim סיפקו איכות חומרים מדהימה וגימור ללא רבב. התוצאה הסופית עלתה על כל הציפיות.",
    },
    {
        name: "דני נגר, חברת הייטק",
        text: "התקנו את חיפוי העץ האקוסטי בחדר הישיבות שלנו במשרד. זה גם נראה יוקרתי ומכובד מאוד, וגם שיפר את האקוסטיקה פלאים. הכל נעשה בלוח הזמנים שהובטח.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-stone-900 text-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        מה הלקוחות שלנו אומרים
                    </motion.h2>
                    <div className="w-20 h-1 bg-stone-500 mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-stone-400 text-lg"
                    >
                        הסיפוק הגדול שלנו הוא לקוחות שמחים שגרים בחלל מעוצב בדיוק לטעמם.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-stone-800/50 p-10 rounded-sm border border-stone-700/50 relative hover:border-stone-500 transition-colors"
                        >
                            <Quote size={40} className="text-stone-600 absolute top-6 right-6 opacity-30" />
                            <div className="relative z-10">
                                <p className="text-stone-300 text-lg leading-relaxed mb-8 italic">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div className="w-12 h-[1px] bg-stone-600 mb-4" />
                                <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
