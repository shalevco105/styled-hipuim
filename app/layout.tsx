import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "חיפויי קירות יוקרתיים | Styled Hipuim",
  description: "פתרונות חיפוי פנים מעוצבים, המשלבים חדשנות, איכות ללא פשרות ומראה עוצר נשימה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${assistant.variable} font-sans bg-stone-50 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
