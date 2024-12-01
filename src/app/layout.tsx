"use client";

import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata = {
//   title: "M Hassan",
//   description: "Developer Portfolio",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <html lang="en">
      <body
        className={`page ${sora.className} text-white font-sora bg-site bg-no-repeat bg-cover relative`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={path} className="h-full">
            <Transition />
            {children}
            <TopLeftImg />
            <Nav />
            <Header />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
