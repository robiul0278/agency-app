"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Database,
  Cloud,
  Search,
  BarChart3,
  Target,
  Lightbulb,
  Settings
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            আমাদের <span className="text-yellow-400">সেবাসমূহ</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            আধুনিক প্রযুক্তি এবং সৃজনশীল ডিজাইনের মাধ্যমে আমরা আপনার ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা করি। 
            প্রতিটি প্রকল্পে আমরা উৎকর্ষতা এবং উদ্ভাবনের প্রতিশ্রুতি দিয়ে থাকি।
          </motion.p>
        </motion.div>
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-blue-600 to-purple-700 border-blue-500 p-8 h-full">
                <CardContent className="p-0">
                  <Code className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-3xl font-bold mb-4 text-white">ওয়েব ডেভেলপমেন্ট</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    আধুনিক, দ্রুত এবং SEO-অপ্টিমাইজড ওয়েবসাইট তৈরি করি যা আপনার ব্র্যান্ডের পরিচয় তুলে ধরে।
                  </p>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />রেসপন্সিভ ডিজাইন</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />ই-কমার্স সলিউশন</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />কাস্টম CMS</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />পারফরম্যান্স অপ্টিমাইজেশন</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-green-600 to-teal-700 border-green-500 p-8 h-full">
                <CardContent className="p-0">
                  <Smartphone className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-3xl font-bold mb-4 text-white">মোবাইল অ্যাপ ডেভেলপমেন্ট</h3>
                  <p className="text-green-100 mb-6 text-lg">
                    iOS এবং Android প্ল্যাটফর্মের জন্য উচ্চ-মানের মোবাইল অ্যাপ্লিকেশন ডেভেলপ করি।
                  </p>
                  <ul className="space-y-3 text-green-100">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />নেটিভ অ্যাপ ডেভেলপমেন্ট</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />ক্রস-প্ল্যাটফর্ম সলিউশন</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />UI/UX ডিজাইন</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3" />অ্যাপ স্টোর অপ্টিমাইজেশন</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <Palette className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">ব্র্যান্ডিং ও ডিজাইন</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    আপনার ব্র্যান্ডের জন্য অনন্য পরিচয় এবং ভিজুয়াল আইডেন্টিটি তৈরি করি।
                  </p>
                  <Badge className="bg-yellow-400 text-slate-900">জনপ্রিয়</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">ডিজিটাল মার্কেটিং</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    SEO, সোশ্যাল মিডিয়া এবং পেইড অ্যাডভার্টাইজিং এর মাধ্যমে আপনার ব্যবসা বৃদ্ধি করুন।
                  </p>
                  <Badge className="bg-green-400 text-slate-900">ট্রেন্ডিং</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">সাইবার নিরাপত্তা</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    আপনার ডিজিটাল সম্পদ এবং গ্রাহকের তথ্য সুরক্ষিত রাখার জন্য উন্নত নিরাপত্তা ব্যবস্থা।
                  </p>
                  <Badge className="bg-red-400 text-slate-900">নিরাপদ</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Services */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">প্রযুক্তিগত সেবাসমূহ</h2>
          <p className="text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            আধুনিক প্রযুক্তির সাহায্যে আমরা আপনার ব্যবসায়িক চ্যালেঞ্জগুলি সমাধান করি
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 text-center hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <Cloud className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">ক্লাউড সলিউশন</h4>
                  <p className="text-slate-400 text-sm">AWS, Azure, Google Cloud</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 text-center hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <Database className="w-10 h-10 text-green-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">ডেটাবেস ম্যানেজমেন্ট</h4>
                  <p className="text-slate-400 text-sm">MySQL, PostgreSQL, MongoDB</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 text-center hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <Search className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">SEO অপ্টিমাইজেশন</h4>
                  <p className="text-slate-400 text-sm">অনুসন্ধান র‍্যাঙ্কিং উন্নতি</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 text-center hover:bg-slate-750 transition-colors">
                <CardContent className="p-0">
                  <BarChart3 className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">ডেটা অ্যানালিটিক্স</h4>
                  <p className="text-slate-400 text-sm">ব্যবসায়িক অন্তর্দৃষ্টি</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Service Process */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">আমাদের সেবা প্রক্রিয়া</h2>
          <p className="text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            প্রতিটি প্রকল্পে আমরা একটি সুনির্দিষ্ট এবং কার্যকর প্রক্রিয়া অনুসরণ করি
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Service Process"
                width={300}
                height={300}
                className="rounded-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">প্রয়োজন বিশ্লেষণ</h3>
                  <p className="text-slate-300">
                    আপনার ব্যবসায়িক লক্ষ্য এবং প্রয়োজনীয়তা গভীরভাবে বুঝে নিই।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">কৌশল পরিকল্পনা</h3>
                  <p className="text-slate-300">
                    আপনার লক্ষ্য অর্জনের জন্য সবচেয়ে কার্যকর কৌশল প্রণয়ন করি।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">বাস্তবায়ন ও পরীক্ষা</h3>
                  <p className="text-slate-300">
                    উচ্চ মানের কোড এবং ডিজাইনের মাধ্যমে সমাধান তৈরি ও পরীক্ষা করি।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">লঞ্চ ও সাপোর্ট</h3>
                  <p className="text-slate-300">
                    সফল লঞ্চের পর অব্যাহত সাপোর্ট এবং রক্ষণাবেক্ষণ প্রদান করি।
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">আপনার প্রকল্প শুরু করুন</h2>
          <p className="text-slate-800 mb-8 text-lg max-w-2xl mx-auto">
            আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার ডিজিটাল স্বপ্নকে বাস্তবায়ন করুন
          </p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
            বিনামূল্যে পরামর্শ নিন <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}