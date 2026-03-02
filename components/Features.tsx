"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Paintbrush, Clock } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck size={32} className="text-stone-600" />,
        title: "חומרים באיכות פרימיום",
        description: "אנו בוחרים בקפידה את סוגי העץ והפולימרים האיכותיים ביותר, המבטיחים מראה עשיר ועמידות גבוהה לאורך שנים.",
    },
    {
        icon: <Wrench size={32} className="text-stone-600" />,
        title: "התקנה מקצועית ונקייה",
        description: "צוות המתקינים המומחים שלנו מבטיח עבודה מדויקת, מהירה ומינימום הפרעה לחיי השגרה שלכם.",
    },
    {
        icon: <Paintbrush size={32} className="text-stone-600" />,
        title: "עיצוב בהתאמה אישית",
        description: "מגוון רחב של גוונים, טקסטורות וגימורים המאפשרים לכם ליצור את החלל שתמיד חלמתם עליו.",
    },
    {
        icon: <Clock size={32} className="text-stone-600" />,
        title: "עמידות לאורך שנים",
        description: "החיפויים שלנו עמידים בפני לחות, שריטות ובלאי, ושומרים על מראה חדש ויוקרתי גם אחרי תקופה ממושכת.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
                    >
                        אמינות, מקצועיות ואיכות ללא פשרות
                    </motion.h2>
                    <div className="w-20 h-1 bg-stone-800 mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-stone-600 text-lg"
                    >
                        אנו מתחייבים לספק את פתרונות החיפוי המתקדמים והמעוצבים ביותר, בשילוב שירות לקוחות אישי לאורך כל התהליך.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-stone-50 p-8 rounded-sm hover:shadow-md transition-shadow duration-300 border border-stone-100"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                            <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
