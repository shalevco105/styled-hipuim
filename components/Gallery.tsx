"use client";

import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200", // Mansion interior
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", // Details
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800", // Bathroom/Wall
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200", // Mansion interior
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800", // Bathroom/Wall
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-stone-900 mb-6"
                    >
                        גלריית פרויקטים
                    </motion.h2>
                    <div className="w-24 h-1 bg-stone-800 mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-stone-600 text-lg sm:text-xl"
                    >
                        הצצה לבתים, לעסקים ולחללים שהפכו ליצירות אמנות בעזרת החיפויים שלנו.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden group rounded-sm cursor-pointer border border-stone-100 shadow-sm ${index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-2 row-span-2" : "col-span-1 row-span-1"
                                }`}
                        >
                            <img
                                src={src}
                                alt={`Project display ${index + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="text-white text-base md:text-lg font-bold border border-white/60 px-6 py-3 md:px-8 md:py-3 rounded-sm backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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
