"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const products = [
    {
        title: "חיפוי עץ אקוסטי",
        description: "לוחות עץ מובחרים עם תכונות בליעת רעש מעולות. אידיאלי לסלון, לחדר שינה ולמשרד.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "חיפוי פולימרי סרגלים",
        description: "מראה עץ טבעי עם עמידות של פולימר. עמיד למים, קל לניקוי ומושלם לכל חדר בבית.",
        image: "https://images.unsplash.com/photo-1628190776412-effb7f308ce7?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "חיפוי דמוי בטון / אבן",
        description: "למראה תעשייתי ומודרני. קווים נקיים, מינימליסטיים ומשדרים יוקרה אורבנית.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
                        >
                            קטלוג החיפויים שלנו
                        </motion.h2>
                        <div className="w-20 h-1 bg-stone-800 rounded-full mb-6" />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-stone-600 text-lg"
                        >
                            גלו את הקולקציה המלאה של סגנונות, צבעים וטקסטורות שישדרגו כל קיר.
                        </motion.p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="#contact"
                        className="hidden md:flex items-center text-stone-800 font-medium hover:text-stone-600 transition-colors gap-2"
                    >
                        לכל הקטלוג
                        <ArrowLeft size={20} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    {product.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center text-stone-900 font-medium hover:text-stone-500 transition-colors gap-2"
                                >
                                    לפרטים נוספים
                                    <ArrowLeft size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
