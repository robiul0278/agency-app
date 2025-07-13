"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Smartphone,
  Globe,
  Zap,
  Shield,
  Star,
  Play,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Brain,
  Code,
  Palette,
  BarChart3
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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-800"
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">প</span>
            </div>
            <span className="text-xl font-bold">প্রিলাইন</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors">হোম</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">সেবা</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">পোর্টফোলিও</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">পদ্ধতি</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">পণ্য</a>
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              যোগাযোগ করুন
            </Button>
          </div>
        </nav>
      </motion.header>

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
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-yellow-400">প্রিলাইন এজেন্সি:</span> ধারণাকে বাস্তবে রূপ দেওয়া
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            এটি একটি সৃজনশীল কেন্দ্র যেখানে কল্পনা এবং কারুশিল্প একসাথে মিলে ধারণাগুলিকে বাস্তব রূপে রূপান্তরিত করে। প্রিলাইন এজেন্সিতে, আমরা ডিজাইন, শিল্প বা প্রযুক্তিগত উদ্ভাবনের মাধ্যমে ধারণাগত দৃষ্টিভঙ্গিকে কংক্রিট ফর্মে রূপান্তরিত করতে বিশেষজ্ঞ।
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mb-16"
          >
            <p className="text-sm text-slate-400 mb-8">ওপেন সোর্স, এন্টারপ্রাইজ এবং ৬০,০০০+ এর বেশি ব্যবহারকারীর বিশ্বস্ত</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-600 rounded"></div>
                <span className="text-sm">লেজার</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-600 rounded-full"></div>
                <span className="text-sm">ওপেনএআই</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-600 rounded"></div>
                <span className="text-sm">জেভো</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-600 rounded-full"></div>
                <span className="text-sm">ফুলআওয়ার</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-slate-600 rounded"></div>
                <span className="text-sm">ক্লোভার</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trending Technologies Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ট্রেন্ডিং প্রযুক্তি</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              আমরা সর্বশেষ এবং সবচেয়ে জনপ্রিয় প্রযুক্তিগুলি ব্যবহার করে আপনার ব্যবসায়িক সমাধান তৈরি করি
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <Brain className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">কৃত্রিম বুদ্ধিমত্তা</h3>
                  <p className="text-blue-100 text-sm">
                    AI এবং মেশিন লার্নিং সমাধান যা আপনার ব্যবসায়িক প্রক্রিয়াকে স্বয়ংক্রিয় করে
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-green-600 to-green-800 border-green-500 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <Smartphone className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">মোবাইল অ্যাপ</h3>
                  <p className="text-green-100 text-sm">
                    আধুনিক মোবাইল অ্যাপ্লিকেশন যা ব্যবহারকারীদের অভিজ্ঞতা উন্নত করে
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <Globe className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">ওয়েব ৩.০</h3>
                  <p className="text-purple-100 text-sm">
                    ব্লকচেইন এবং ডিসেন্ট্রালাইজড প্রযুক্তির সাথে ভবিষ্যতের ওয়েব
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-red-600 to-red-800 border-red-500 p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 text-center">
                  <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">সাইবার নিরাপত্তা</h3>
                  <p className="text-red-100 text-sm">
                    উন্নত নিরাপত্তা ব্যবস্থা যা আপনার ডেটা এবং সিস্টেম সুরক্ষিত রাখে
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">সফলতার গল্প</h2>
          <p className="text-slate-300 mb-12 max-w-2xl">
            বিশ্বব্যাপী ব্র্যান্ডগুলি আমাদের সাথে সহযোগিতা করার সময় পরিমাপযোগ্য সাফল্য অর্জন করে। উচ্চতর রূপান্তর এবং গভীর গ্রাহক সক্রিয়করণ থেকে দ্রুততর প্রক্রিয়াকরণ গতি পর্যন্ত। এখানে তাদের গল্পগুলি আবিষ্কার করুন।
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
                    <span className="text-4xl font-bold text-yellow-400">৪৩%</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">গ্রাহক সম্পৃক্ততায় উন্নতি</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    গ্রাহক সন্তুষ্টি অপ্টিমাইজ করার এবং ডিজিটাল ফ্রন্টে বড় সাফল্য অর্জনের লক্ষ্যে প্রিলাইনের দল অত্যাধুনিক প্রযুক্তি ব্যবহার করেছে।
                  </p>
                  <button className="text-yellow-400 text-sm hover:underline">কেস স্টাডি</button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                    <span className="text-4xl font-bold text-green-400">২০%</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">ই-কমার্সে বৃদ্ধি</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    শপিফাইয়ের সাথে সহযোগিতায়, প্রিলাইন নিরাপদ আর্থিক সেবায় একটি মাইলফলক অর্জন করেছে, যার ফলে ব্যাপক গ্রহণযোগ্যতা পেয়েছে।
                  </p>
                  <button className="text-yellow-400 text-sm hover:underline">কেস স্টাডি</button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-8 h-8 text-red-400 mr-3" />
                    <span className="text-4xl font-bold text-red-400">১২%</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">উন্নয়ন প্রক্রিয়া সহজীকরণ</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    প্রকল্প সরবরাহ ত্বরান্বিত করার এবং বহুবিষয়ক দলগুলির মধ্যে সহযোগিতা বৃদ্ধির লক্ষ্যে, প্রিলাইনের ব্যাপক টুল এবং সম্পদের স্যুট উল্লেখযোগ্য প্রক্রিয়া অপ্টিমাইজেশনের ফলাফল এনেছে।
                  </p>
                  <button className="text-yellow-400 text-sm hover:underline">কেস স্টাডি</button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Digital Innovation Trends Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ডিজিটাল উদ্ভাবনের ট্রেন্ড</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              আমরা ভবিষ্যতের প্রযুক্তিগত ট্রেন্ডগুলি অনুসরণ করি এবং আপনার ব্যবসায়ের জন্য সবচেয়ে উপযুক্ত সমাধান প্রদান করি
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                width={300}
                height={300}
                alt="Digital Innovation"
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">স্মার্ট অটোমেশন</h3>
                  <p className="text-slate-300">
                    AI-চালিত অটোমেশন সিস্টেম যা আপনার ব্যবসায়িক প্রক্রিয়াগুলিকে আরও দক্ষ এবং লাভজনক করে তোলে।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ক্লাউড-নেটিভ সলিউশন</h3>
                  <p className="text-slate-300">
                    স্কেলেবল এবং নিরাপদ ক্লাউড-ভিত্তিক অ্যাপ্লিকেশন যা যেকোনো সময় যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ডেটা অ্যানালিটিক্স</h3>
                  <p className="text-slate-300">
                    উন্নত ডেটা বিশ্লেষণ এবং ভিজুয়ালাইজেশন টুলস যা আপনাকে সঠিক ব্যবসায়িক সিদ্ধান্ত নিতে সাহায্য করে।
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 border-indigo-500 p-6 text-center">
                <CardContent className="p-0">
                  <Code className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">লো-কোড প্ল্যাটফর্ম</h3>
                  <p className="text-indigo-100 text-sm">
                    দ্রুত অ্যাপ্লিকেশন ডেভেলপমেন্টের জন্য ভিজুয়াল প্রোগ্রামিং টুলস
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-pink-600 to-rose-700 border-pink-500 p-6 text-center">
                <CardContent className="p-0">
                  <Palette className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">UI/UX ডিজাইন</h3>
                  <p className="text-pink-100 text-sm">
                    ব্যবহারকারী-কেন্দ্রিক ডিজাইন যা অভিজ্ঞতাকে আরও আকর্ষণীয় করে তোলে
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-teal-600 to-cyan-700 border-teal-500 p-6 text-center">
                <CardContent className="p-0">
                  <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">পারফরম্যান্স অপ্টিমাইজেশন</h3>
                  <p className="text-teal-100 text-sm">
                    অ্যাপ্লিকেশনের গতি এবং দক্ষতা বৃদ্ধির জন্য উন্নত কৌশল
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">প্রিলাইন রিভিউ</h2>
          <p className="text-slate-300 mb-12">
            ১০টিরও বেশি পুরস্কার এবং অর্জনের সাথে, আমরা গর্বিতভাবে উৎকর্ষতা এবং ক্লায়েন্ট সাফল্যের প্রতি আমাদের অটুট নিবেদন প্রদর্শন করি।
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-2xl font-light mb-6">
               প্রিলাইনে স্যুইচ করা জীবন পরিবর্তনকারী বলা একটি অবমূল্যায়ন। তখন থেকে আমার ব্যবসা তিনগুণ হয়েছে।
              </blockquote>
              <div>
                <p className="font-semibold">নিকোল গ্রাজিওসো</p>
                <p className="text-slate-400 text-sm">ব্যবস্থাপনা পরিচালক, টেকফ্লো ডায়নামিক্স</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={300}
                height={300}
                alt="Team working"
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <Button size="lg" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white">
                  <Play className="w-6 h-6 mr-2" />
                  ভিডিও দেখুন
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mt-16 text-center"
          >
            <div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-slate-900" />
              </div>
              <div className="text-3xl font-bold mb-2">২,০০০+</div>
              <div className="text-slate-400">সন্তুষ্ট ক্লায়েন্ট</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-slate-900" />
              </div>
              <div className="text-3xl font-bold mb-2">৯৫%</div>
              <div className="text-slate-400">খুশি গ্রাহক</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-slate-900" />
              </div>
              <div className="text-3xl font-bold mb-2">৫৫ মিলিয়ন+</div>
              <div className="text-slate-400">বার্ষিক ARR উৎপন্ন</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">আমাদের পদ্ধতি</h2>
          <p className="text-slate-300 mb-12 max-w-2xl">
            আমাদের ব্যাপক কৌশলের জন্য পথপ্রদর্শক আলো — সূক্ষ্ম গবেষণা এবং কৌশলগত পরিকল্পনা থেকে ব্র্যান্ড উন্নয়ন এবং ওয়েবসাইট বা পণ্য স্থাপনার নিরবচ্ছিন্ন বাস্তবায়ন পর্যন্ত।
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={300}
                height={300}
                alt="Team collaboration"
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
                <Badge className="bg-yellow-400 text-slate-900 mt-1">০১/০৫</Badge>
                <div>
                  <h3 className="font-semibold mb-2">বাজার গবেষণা এবং বিশ্লেষণ</h3>
                  <p className="text-slate-300 text-sm">
                    নতুন সুযোগ চিহ্নিত করুন এবং তাদের প্রয়োজন, পছন্দ এবং আচরণ বুঝুন।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-slate-600 text-white mt-1">০২/০৫</Badge>
                <div>
                  <h3 className="font-semibold mb-2">পণ্য উন্নয়ন এবং পরীক্ষা</h3>
                  <p className="text-slate-300 text-sm">
                    আপনার লক্ষ্য দর্শকদের প্রয়োজন এবং পছন্দগুলি সমাধান করে এমন ডিজিটাল পণ্য বা সেবা বিকাশ করুন।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-slate-600 text-white mt-1">০৩/০৫</Badge>
                <div>
                  <h3 className="font-semibold mb-2">বিপণন এবং প্রচার</h3>
                  <p className="text-slate-300 text-sm">
                    আপনার ডিজিটাল পণ্য বা সেবা প্রচারের জন্য একটি ব্যাপক বিপণন কৌশল বিকাশ করুন।
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-slate-600 text-white mt-1">০৪/০৫</Badge>
                <div>
                  <h3 className="font-semibold mb-2">লঞ্চ এবং অপ্টিমাইজেশন</h3>
                  <p className="text-slate-300 text-sm">
                    আপনার ডিজিটাল পণ্য বা সেবা বাজারে লঞ্চ করুন। তাদের কর্মক্ষমতা নিবিড়ভাবে পর্যবেক্ষণ করুন।
                  </p>
                </div>
              </div>

              <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 mt-6">
                আমাদের সাথে যোগাযোগ করুন <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">যোগাযোগ করুন</h2>
          <p className="text-slate-300 mb-12">আমরা আপনাকে কীভাবে সাহায্য করতে পারি সে সম্পর্কে কথা বলতে পছন্দ করব।</p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-semibold mb-2">আমাদের ঠিকানা:</h3>
                <p className="text-slate-300">
                  ৩০০ বাথ স্ট্রিট, তে হাউস<br />
                  গ্লাসগো G2 4JR, যুক্তরাজ্য
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">আমাদের ইমেইল করুন:</h3>
                <p className="text-slate-300">hello@preline.co</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">আমরা নিয়োগ দিচ্ছি</h3>
                <p className="text-slate-300">
                  আমরা আমাদের দল সম্প্রসারণ করছি এবং আপনার মতো প্রতিভাবান ব্যক্তিদের আমাদের সাথে যোগ দিতে খুঁজছি!
                </p>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="নাম" className="bg-slate-700 border-slate-600" />
                      <Input placeholder="ইমেইল" className="bg-slate-700 border-slate-600" />
                    </div>
                    <Input placeholder="কোম্পানি" className="bg-slate-700 border-slate-600" />
                    <Input placeholder="ফোন" className="bg-slate-700 border-slate-600" />
                    <Textarea 
                      placeholder="আপনার প্রকল্প সম্পর্কে বলুন" 
                      className="bg-slate-700 border-slate-600 min-h-[100px]"
                    />
                    <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 w-full">
                      অনুসন্ধান পাঠান
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xs">প</span>
              </div>
              <span className="font-semibold">প্রিলাইন</span>
            </div>
            <p className="text-slate-400 text-sm">© ২০২৪ প্রিলাইন ল্যাবস।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}