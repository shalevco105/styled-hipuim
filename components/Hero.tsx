"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury living room walls"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    חיפויי קירות יוקרתיים –<br /> להפוך כל חלל ליצירת אמנות
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-stone-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    פתרונות חיפוי פנים מעוצבים, המשלבים חדשנות, איכות ללא פשרות ומראה עוצר נשימה לבית ולעסק.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#products"
                        className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-4 rounded-sm font-medium text-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        לצפייה בקטלוג
                        <ArrowLeft size={20} className="mr-2" />
                    </a>
                    <a
                        href="#contact"
                        className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded-sm font-medium text-lg transition-colors w-full sm:w-auto justify-center flex"
                    >
                        ייעוץ חינם
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-sm tracking-widest uppercase">גלו עוד</span>
                <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
}
