"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xs">প</span>
              </div>
              <span className="font-semibold text-white">প্রিলাইন</span>
            </div>
            <p className="text-slate-400 text-sm">
              আধুনিক ডিজিটাল সমাধানের মাধ্যমে আপনার ব্যবসায়িক স্বপ্নকে বাস্তবায়ন করি।
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">সেবাসমূহ</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">ওয়েব ডেভেলপমেন্ট</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">মোবাইল অ্যাপ</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">ব্র্যান্ডিং</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors">ডিজিটাল মার্কেটিং</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">কোম্পানি</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/portfolio" className="hover:text-yellow-400 transition-colors">পোর্টফোলিও</Link></li>
              <li><Link href="/methodology" className="hover:text-yellow-400 transition-colors">পদ্ধতি</Link></li>
              <li><Link href="/products" className="hover:text-yellow-400 transition-colors">পণ্য</Link></li>
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">ক্যারিয়ার</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>ঢাকা, বাংলাদেশ</li>
              <li>hello@preline.co</li>
              <li>+৮৮০ ১৭১২ ৩৪৫৬৭৮</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex items-center justify-between">
          <p className="text-slate-400 text-sm">© ২০২৪ প্রিলাইন এজেন্সি। সকল অধিকার সংরক্ষিত।</p>
          <div className="flex space-x-4 text-sm text-slate-400">
            <Link href="#" className="hover:text-yellow-400 transition-colors">গোপনীয়তা নীতি</Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">ব্যবহারের শর্তাবলী</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}