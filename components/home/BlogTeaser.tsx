"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogTeaser() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0F172A] to-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/25 text-[#C9A227] text-xs font-semibold tracking-widest uppercase mb-4">
              Immigration Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}>
              Latest{" "}
              <span className="text-[#C9A227]">Updates</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A227] font-semibold hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Placeholder header */}
              <div className="h-40 bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-20">{
                  post.category === "Canada" ? "🇨🇦" :
                  post.category === "Germany" ? "🇩🇪" : "🇬🇧"
                }</div>
                <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-[#D4AF37]/90 text-[#0A1628] text-xs font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] text-sm font-semibold group-hover:gap-2.5 transition-all"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
