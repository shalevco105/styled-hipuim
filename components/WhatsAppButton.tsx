"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/972501234567" // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />

            {/* Tooltip / Label */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-stone-900 px-4 py-2 rounded-sm shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-100">
                מתלבטים? דברו איתנו
            </span>
        </a>
    );
}
