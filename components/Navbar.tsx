"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "דף הבית", href: "#" },
        { name: "אודותינו", href: "#features" },
        { name: "קטלוג חיפויים", href: "#products" },
        { name: "גלריית פרויקטים", href: "#gallery" },
        { name: "צור קשר", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* LOGO Placeholder */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-stone-800 rounded flex items-center justify-center text-white font-bold text-xl">
                        W
                    </div>
                    <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-stone-900" : "text-stone-900 lg:text-white"}`}>
                        Style Hipuim
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-stone-500 ${isScrolled ? "text-stone-700" : "text-stone-800 lg:text-stone-200"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-stone-800 hover:bg-stone-700 text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Phone size={16} />
                        לקבלת הצעת מחיר
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-stone-900 bg-white/80 p-2 rounded"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-stone-100 py-4 flex flex-col px-4 gap-4 md:hidden"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-stone-800 font-medium py-2 border-b border-stone-50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-stone-800 hover:bg-stone-700 text-white px-6 py-3 rounded-sm text-center font-medium mt-2"
                        >
                            לקבלת הצעת מחיר
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
