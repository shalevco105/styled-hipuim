import { Instagram, Facebook, Link as LinkIcon, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 border-b border-stone-800 pb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-2 text-center md:text-start flex flex-col items-center md:items-start">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-6" dir="ltr">
                            <div className="w-8 h-8 bg-stone-100 rounded flex items-center justify-center text-stone-900 font-bold">
                                W
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Style Hipuim
                            </span>
                        </div>
                        <p className="text-stone-400 mb-8 max-w-sm leading-relaxed">
                            המומחים שלכם לחיפויי קירות יוקרתיים מכל הסוגים. אופטימיזציה של החלל, עיצוב מותאם אישית והתקנה מקצועית.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-stone-500 hover:text-white transition-colors bg-stone-900 p-3 rounded-full border border-stone-800 hover:border-stone-600">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-stone-500 hover:text-white transition-colors bg-stone-900 p-3 rounded-full border border-stone-800 hover:border-stone-600">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-stone-500 hover:text-white transition-colors bg-stone-900 p-3 rounded-full border border-stone-800 hover:border-stone-600">
                                <LinkIcon size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="text-center md:text-start">
                        <h4 className="text-white font-bold mb-6 text-lg">ניווט מהיר</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">דף הבית</a></li>
                            <li><a href="#features" className="hover:text-white transition-colors">למה אנחנו?</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">קטלוג חיפויים</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">גלריה</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="text-center md:text-start">
                        <h4 className="text-white font-bold mb-6 text-lg">מידע נוסף</h4>
                        <ul className="space-y-4">
                            <li><a href="#contact" className="hover:text-white transition-colors">יצירת קשר</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">שאלות נפוצות</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">תקנון האתר</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-start">
                        <h4 className="text-white font-bold mb-6 text-lg">צור קשר</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:0501234567" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                                    <Phone size={18} />
                                    <span dir="ltr">050-1234567</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@stylehipuim.co.il" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                                    <Mail size={18} />
                                    <span>info@stylehipuim.co.il</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                                    <Instagram size={18} />
                                    <span>אינסטגרם</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                                    <Facebook size={18} />
                                    <span>פייסבוק</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-stone-500 text-sm">
                    <p>© {new Date().getFullYear()} Style Hipuim. כל הזכויות שמורות.</p>
                    <p className="mt-4 md:mt-0">נבנה במומחיות עבורכם</p>
                </div>
            </div>
        </footer>
    );
}
