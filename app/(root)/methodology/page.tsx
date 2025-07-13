"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Lightbulb, 
  Code, 
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
  Search,
  PenTool,
  Settings,
  Clock,
  Award,
  TrendingUp,
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

export default function Methodology() {
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
            আমাদের <span className="text-yellow-400">পদ্ধতি</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            আমাদের প্রমাণিত পদ্ধতি অনুসরণ করে আমরা প্রতিটি প্রকল্পে সফলতা নিশ্চিত করি। 
            গবেষণা থেকে শুরু করে চূড়ান্ত বাস্তবায়ন পর্যন্ত প্রতিটি ধাপে আমরা উৎকর্ষতার প্রতিশ্রুতি দিয়ে থাকি।
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex justify-center space-x-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">৫</div>
              <div className="text-slate-400">মূল ধাপ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">৯৮%</div>
              <div className="text-slate-400">সফলতার হার</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">১৫+</div>
              <div className="text-slate-400">বছরের অভিজ্ঞতা</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Methodology Steps */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">আমাদের ৫-ধাপের পদ্ধতি</h2>
          <p className="text-slate-300 mb-16 text-center max-w-2xl mx-auto">
            প্রতিটি প্রকল্পে আমরা একটি সুনির্দিষ্ট এবং প্রমাণিত পদ্ধতি অনুসরণ করি
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-yellow-400 text-slate-900 mb-2">ধাপ ০১</Badge>
                    <h3 className="text-3xl font-bold">গবেষণা ও বিশ্লেষণ</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  আমরা আপনার ব্যবসা, লক্ষ্য দর্শক এবং প্রতিযোগীদের গভীরভাবে বিশ্লেষণ করি। 
                  বাজার গবেষণা এবং ব্যবহারকারীর প্রয়োজন বুঝে নিয়ে একটি শক্তিশালী ভিত্তি তৈরি করি।
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    বাজার গবেষণা ও প্রতিযোগী বিশ্লেষণ
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ব্যবহারকারীর চাহিদা ও আচরণ অধ্যয়ন
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ব্যবসায়িক লক্ষ্য ও KPI নির্ধারণ
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    প্রযুক্তিগত প্রয়োজনীয়তা মূল্যায়ন
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width={300}
                  height={300}
                  alt="Research and Analysis"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={300}
                  height={300}
                  alt="Strategy and Planning"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-blue-400 text-slate-900 mb-2">ধাপ ০২</Badge>
                    <h3 className="text-3xl font-bold">কৌশল ও পরিকল্পনা</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  গবেষণার ভিত্তিতে আমরা একটি বিস্তারিত কৌশল এবং প্রকল্প পরিকল্পনা তৈরি করি। 
                  প্রযুক্তি স্ট্যাক নির্বাচন, আর্কিটেকচার ডিজাইন এবং টাইমলাইন নির্ধারণ করি।
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    প্রকল্প রোডম্যাপ ও মাইলস্টোন
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    প্রযুক্তি স্ট্যাক ও আর্কিটেকচার
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ব্যবহারকারী অভিজ্ঞতা (UX) কৌশল
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ঝুঁকি মূল্যায়ন ও প্রশমন পরিকল্পনা
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-green-400 text-slate-900 mb-2">ধাপ ০৩</Badge>
                    <h3 className="text-3xl font-bold">ডিজাইন ও প্রোটোটাইপ</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  ব্যবহারকারী-কেন্দ্রিক ডিজাইন তৈরি করি যা আকর্ষণীয় এবং কার্যকর। 
                  ওয়্যারফ্রেম থেকে শুরু করে উচ্চ-মানের প্রোটোটাইপ পর্যন্ত সম্পূর্ণ ডিজাইন প্রক্রিয়া।
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ওয়্যারফ্রেম ও ইনফরমেশন আর্কিটেকচার
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ভিজুয়াল ডিজাইন ও ব্র্যান্ডিং
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ইন্টারঅ্যাক্টিভ প্রোটোটাইপ
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ব্যবহারকারী পরীক্ষা ও ফিডব্যাক
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={300}
                  height={300}
                  alt="Design and Prototype"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <Image
                  src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={300}
                  height={300}
                  alt="Development and Testing"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-purple-400 text-slate-900 mb-2">ধাপ ০৪</Badge>
                    <h3 className="text-3xl font-bold">ডেভেলপমেন্ট ও পরীক্ষা</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  আধুনিক প্রযুক্তি ব্যবহার করে উচ্চ-মানের কোড লিখি। 
                  Agile পদ্ধতি অনুসরণ করে নিয়মিত পরীক্ষা এবং গুণগত নিশ্চয়তা প্রদান করি।
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Agile/Scrum ডেভেলপমেন্ট প্রক্রিয়া
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    কোড রিভিউ ও গুণগত নিশ্চয়তা
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    স্বয়ংক্রিয় পরীক্ষা ও CI/CD
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    পারফরম্যান্স অপ্টিমাইজেশন
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-red-400 text-slate-900 mb-2">ধাপ ০৫</Badge>
                    <h3 className="text-3xl font-bold">লঞ্চ ও সাপোর্ট</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 text-lg">
                  সফল লঞ্চের পর আমরা অব্যাহত সাপোর্ট, রক্ষণাবেক্ষণ এবং উন্নতি প্রদান করি। 
                  পারফরম্যান্স মনিটরিং এবং ব্যবহারকারীর ফিডব্যাকের ভিত্তিতে ক্রমাগত উন্নতি করি।
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    প্রোডাকশন ডিপ্লয়মেন্ট ও লঞ্চ
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    পারফরম্যান্স মনিটরিং ও অ্যানালিটিক্স
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ২৪/৭ টেকনিক্যাল সাপোর্ট
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    নিয়মিত আপডেট ও উন্নতি
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=600"
                   width={300}
                  height={300}
                  alt="Launch and Support"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Principles */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">আমাদের মূলনীতি</h2>
          <p className="text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            এই মূলনীতিগুলি আমাদের প্রতিটি প্রকল্পে গাইড করে এবং সফলতা নিশ্চিত করে
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500 p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">ক্লায়েন্ট-কেন্দ্রিক</h3>
                  <p className="text-blue-100 text-sm">
                    আমাদের ক্লায়েন্টের সফলতাই আমাদের প্রধান লক্ষ্য
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
              <Card className="bg-gradient-to-br from-green-600 to-green-800 border-green-500 p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Award className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">গুণগত মান</h3>
                  <p className="text-green-100 text-sm">
                    প্রতিটি প্রকল্পে সর্বোচ্চ মানের প্রতিশ্রুতি
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
              <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500 p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">উদ্ভাবন</h3>
                  <p className="text-purple-100 text-sm">
                    সর্বদা নতুন প্রযুক্তি ও সমাধান খোঁজা
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-red-600 to-red-800 border-red-500 p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">সময়ানুবর্তিতা</h3>
                  <p className="text-red-100 text-sm">
                    নির্ধারিত সময়ে প্রকল্প সম্পন্ন করা
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tools & Technologies */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">আমাদের টুলস ও প্রযুক্তি</h2>
          <p className="text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            আধুনিক এবং প্রমাণিত প্রযুক্তি ব্যবহার করে আমরা সর্বোচ্চ মানের সমাধান প্রদান করি
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold">ডেভেলপমেন্ট</h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>React/Next.js</span>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">Frontend</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Node.js/Express</span>
                      <Badge variant="outline" className="border-green-400 text-green-400">Backend</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>MongoDB/PostgreSQL</span>
                      <Badge variant="outline" className="border-purple-400 text-purple-400">Database</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>AWS/Azure</span>
                      <Badge variant="outline" className="border-orange-400 text-orange-400">Cloud</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <PenTool className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold">ডিজাইন</h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>Figma</span>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">UI/UX</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Adobe Creative Suite</span>
                      <Badge variant="outline" className="border-red-400 text-red-400">Graphics</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Sketch</span>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400">Prototyping</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>InVision</span>
                      <Badge variant="outline" className="border-purple-400 text-purple-400">Collaboration</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">ম্যানেজমেন্ট</h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>Jira</span>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">Project</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Slack</span>
                      <Badge variant="outline" className="border-green-400 text-green-400">Communication</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Git/GitHub</span>
                      <Badge variant="outline" className="border-orange-400 text-orange-400">Version Control</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Docker</span>
                      <Badge variant="outline" className="border-cyan-400 text-cyan-400">DevOps</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Success Metrics */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">আমাদের সফলতার পরিমাপ</h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            আমাদের পদ্ধতির কার্যকারিতা এই সংখ্যাগুলিতে প্রতিফলিত
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-yellow-400">৯৮%</div>
              <div className="text-slate-400">প্রকল্প সফলতার হার</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-green-400">৯৫%</div>
              <div className="text-slate-400">সময়মতো ডেলিভারি</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-400">৯৯%</div>
              <div className="text-slate-400">ক্লায়েন্ট সন্তুষ্টি</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-red-400">১৫+</div>
              <div className="text-slate-400">বছরের অভিজ্ঞতা</div>
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
          <h2 className="text-4xl font-bold mb-4 text-slate-900">আমাদের পদ্ধতি অনুভব করুন</h2>
          <p className="text-slate-800 mb-8 text-lg max-w-2xl mx-auto">
            আমাদের প্রমাণিত পদ্ধতির মাধ্যমে আপনার প্রকল্পের সফলতা নিশ্চিত করুন
          </p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
            আজই শুরু করুন <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}