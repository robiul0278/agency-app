"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-slate-900 font-bold text-sm">প</span>
          </div>
          <span className="text-xl font-bold text-white">প্রিলাইন</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`hover:text-yellow-400 transition-colors ${isActive('/') ? 'text-yellow-400' : 'text-white'}`}
          >
            হোম
          </Link>
          <Link 
            href="/services" 
            className={`hover:text-yellow-400 transition-colors ${isActive('/services') ? 'text-yellow-400' : 'text-white'}`}
          >
            সেবা
          </Link>
          <Link 
            href="/portfolio" 
            className={`hover:text-yellow-400 transition-colors ${isActive('/portfolio') ? 'text-yellow-400' : 'text-white'}`}
          >
            পোর্টফোলিও
          </Link>
          <Link 
            href="/methodology" 
            className={`hover:text-yellow-400 transition-colors ${isActive('/methodology') ? 'text-yellow-400' : 'text-white'}`}
          >
            পদ্ধতি
          </Link>
          <Link 
            href="/products" 
            className={`hover:text-yellow-400 transition-colors ${isActive('/products') ? 'text-yellow-400' : 'text-white'}`}
          >
            পণ্য
          </Link>
          <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            যোগাযোগ করুন
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}