"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Star,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  ShoppingCart,
  BookOpen,
  Heart,
  Award,
  Eye,
  Calendar,
  ArrowRight
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

export default function Portfolio() {
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
            আমাদের <span className="text-yellow-400">পোর্টফোলিও</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            বিভিন্ন ইন্ডাস্ট্রিতে আমাদের সফল প্রকল্পগুলি দেখুন। প্রতিটি প্রকল্পে আমরা উৎকর্ষতা, 
            উদ্ভাবন এবং ক্লায়েন্টের সন্তুষ্টির প্রমাণ রেখেছি।
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex justify-center space-x-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">১৫০+</div>
              <div className="text-slate-400">সম্পন্ন প্রকল্প</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">৯৮%</div>
              <div className="text-slate-400">ক্লায়েন্ট সন্তুষ্টি</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">৫০+</div>
              <div className="text-slate-400">খুশি ক্লায়েন্ট</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">বিশেষ প্রকল্পসমূহ</h2>
          <p className="text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            আমাদের সবচেয়ে গুরুত্বপূর্ণ এবং প্রভাবশালী প্রকল্পগুলি
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={300}
                    height={300}
                    alt="E-commerce Platform"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-slate-900">বিশেষ</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <ShoppingCart className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-slate-400">ই-কমার্স</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">শপবাংলা - অনলাইন মার্কেটপ্লেস</h3>
                  <p className="text-slate-300 mb-4">
                    বাংলাদেশের সবচেয়ে বড় অনলাইন মার্কেটপ্লেস। ১০,০০০+ বিক্রেতা এবং ৫ লক্ষ+ পণ্য নিয়ে।
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-4 text-sm text-slate-400">
                      <span className="flex items-center"><Users className="w-4 h-4 mr-1" />৫০০K+ ব্যবহারকারী</span>
                      <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1" />৩০০% বৃদ্ধি</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                      <ExternalLink className="w-4 h-4 mr-2" />লাইভ দেখুন
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600">
                      <Eye className="w-4 h-4 mr-2" />বিস্তারিত
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                      width={300}
                    height={300}
                    alt="Healthcare App"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <Badge className="absolute top-4 left-4 bg-green-400 text-slate-900">স্বাস্থ্যসেবা</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-slate-400">স্বাস্থ্যসেবা</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">ডক্টর অন কল - টেলিমেডিসিন অ্যাপ</h3>
                  <p className="text-slate-300 mb-4">
                    ২৪/৭ ডাক্তারের পরামর্শ, অনলাইন প্রেসক্রিপশন এবং স্বাস্থ্য পর্যবেক্ষণ সেবা।
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-4 text-sm text-slate-400">
                      <span className="flex items-center"><Users className="w-4 h-4 mr-1" />১০০K+ রোগী</span>
                      <span className="flex items-center"><Star className="w-4 h-4 mr-1" />৪.৮ রেটিং</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                      <Smartphone className="w-4 h-4 mr-2" />অ্যাপ ডাউনলোড
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600">
                      <Eye className="w-4 h-4 mr-2" />বিস্তারিত
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Categories */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">প্রকল্পের ধরন</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500 p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Globe className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">ওয়েব অ্যাপ্লিকেশন</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    কর্পোরেট ওয়েবসাইট, ই-কমার্স প্ল্যাটফর্ম, SaaS সলিউশন
                  </p>
                  <div className="text-2xl font-bold text-white">৬৫+</div>
                  <div className="text-blue-200 text-sm">সম্পন্ন প্রকল্প</div>
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
                  <Smartphone className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">মোবাইল অ্যাপ</h3>
                  <p className="text-green-100 text-sm mb-4">
                    iOS, Android, React Native, Flutter অ্যাপ্লিকেশন
                  </p>
                  <div className="text-2xl font-bold text-white">৪৫+</div>
                  <div className="text-green-200 text-sm">সম্পন্ন প্রকল্প</div>
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
                  <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">ব্র্যান্ডিং</h3>
                  <p className="text-purple-100 text-sm mb-4">
                    লোগো ডিজাইন, ব্র্যান্ড আইডেন্টিটি, মার্কেটিং ম্যাটেরিয়াল
                  </p>
                  <div className="text-2xl font-bold text-white">৮০+</div>
                  <div className="text-purple-200 text-sm">সম্পন্ন প্রকল্প</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Recent Projects */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">সাম্প্রতিক প্রকল্পসমূহ</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "এডুকেশন পোর্টাল",
                category: "শিক্ষা",
                image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "অনলাইন কোর্স এবং পরীক্ষা পরিচালনার জন্য সম্পূর্ণ প্ল্যাটফর্ম",
                tech: ["React", "Node.js", "MongoDB"],
                date: "ডিসেম্বর ২০২৪"
              },
              {
                title: "রেস্টুরেন্ট ম্যানেজমেন্ট",
                category: "খাদ্য ও পানীয়",
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "অর্ডার ম্যানেজমেন্ট এবং ডেলিভারি ট্র্যাকিং সিস্টেম",
                tech: ["Vue.js", "Laravel", "MySQL"],
                date: "নভেম্বর ২০২৪"
              },
              {
                title: "ফিটনেস ট্র্যাকার অ্যাপ",
                category: "স্বাস্থ্য",
                image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "ব্যক্তিগত ফিটনেস লক্ষ্য এবং অগ্রগতি ট্র্যাকিং",
                tech: ["React Native", "Firebase"],
                date: "অক্টোবর ২০২৪"
              },
              {
                title: "ই-বুক প্ল্যাটফর্ম",
                category: "প্রকাশনা",
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "ডিজিটাল বই পড়া এবং প্রকাশনার জন্য সম্পূর্ণ সমাধান",
                tech: ["Next.js", "Stripe", "AWS"],
                date: "সেপ্টেম্বর ২০২ৄ"
              },
              {
                title: "ইভেন্ট ম্যানেজমেন্ট",
                category: "ইভেন্ট",
                image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "ইভেন্ট পরিকল্পনা এবং টিকিট বুকিং সিস্টেম",
                tech: ["Angular", "Express", "PostgreSQL"],
                date: "আগস্ট ২০২৪"
              },
              {
                title: "ক্রিপ্টো ওয়ালেট",
                category: "ফিনটেক",
                image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "নিরাপদ ক্রিপ্টোকারেন্সি লেনদেন এবং পোর্টফোলিও ম্যানেজমেন্ট",
                tech: ["React", "Blockchain", "Web3"],
                date: "জুলাই ২০২৪"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <Image
                      src={project.image}
                        width={300}
                    height={300}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <Badge className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400">{project.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-slate-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                      <Eye className="w-4 h-4 mr-2" />প্রকল্প দেখুন
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Awards & Recognition */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">পুরস্কার ও স্বীকৃতি</h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            আমাদের কাজের মান এবং উৎকর্ষতার জন্য বিভিন্ন প্রতিষ্ঠান থেকে পুরস্কার ও স্বীকৃতি পেয়েছি
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "সেরা ওয়েব ডিজাইন", year: "২০২৪", org: "ডিজাইন অ্যাওয়ার্ড" },
              { title: "উদ্ভাবনী অ্যাপ", year: "২০২৩", org: "টেক ইনোভেশন" },
              { title: "ক্লায়েন্ট চয়েস", year: "২০২৩", org: "বিজনেস এক্সিলেন্স" },
              { title: "সেরা স্টার্টআপ সাপোর্ট", year: "২০২২", org: "এন্টারপ্রেনিউর অ্যাওয়ার্ড" }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{award.title}</h3>
                <p className="text-yellow-400 text-sm">{award.year}</p>
                <p className="text-slate-400 text-xs">{award.org}</p>
              </motion.div>
            ))}
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
          <h2 className="text-4xl font-bold mb-4 text-slate-900">আপনার প্রকল্প আমাদের পোর্টফোলিওতে যোগ করুন</h2>
          <p className="text-slate-800 mb-8 text-lg max-w-2xl mx-auto">
            আমাদের সাথে কাজ করুন এবং আপনার ব্যবসায়িক স্বপ্নকে বাস্তবায়ন করুন
          </p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
            আজই শুরু করুন <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}