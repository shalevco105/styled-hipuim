"use client";

import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1628190776412-effb7f308ce7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
                    >
                        גלריית פרויקטים
                    </motion.h2>
                    <div className="w-20 h-1 bg-stone-800 mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-stone-600 text-lg"
                    >
                        הצצה לבתים, לעסקים ולחללים שהפכו ליצירות אמנות בעזרת החיפויים שלנו.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden group rounded-sm cursor-pointer border border-stone-100 ${index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2 row-span-2" : "col-span-1"
                                }`}
                        >
                            <img
                                src={src}
                                alt={`Project ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white text-lg font-medium border border-white/50 px-6 py-2 rounded-sm backdrop-blur-md">
                                    צפייה בפרויקט
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
