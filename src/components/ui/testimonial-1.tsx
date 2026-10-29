"use client";

import { ArrowUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Testimonial1() {
  const blocks = [
    {
      id: "01",
      title: "BUSINESS SOFTWARE",
      description: "ERP systems, management platforms, operational workflows and custom business software."
    },
    {
      id: "02",
      title: "FULL-STACK APPLICATIONS",
      description: "Frontend applications, APIs, databases, authentication and backend systems."
    },
    {
      id: "03",
      title: "AI-POWERED PRODUCTS",
      description: "Practical AI integration, automation and intelligent application workflows."
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen w-full grid place-content-center py-16 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Community Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#f1efec] dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 text-black dark:text-white px-5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inline-flex h-full w-full rounded-full bg-blue-400/60"
              />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </span>
            What I Build
          </div>
        </div>

        {/* Main Heading with Refined Block Reveal Animation */}
        <div className="text-center max-w-5xl mx-auto relative text-neutral-900 dark:text-white px-4 space-y-1 md:space-y-2">
          {[
            { text: "Systems that work.", color: "#6366f1", delay: 0 },
            { text: "Software that scales.", color: "#10b981", delay: 0.15 },
            { text: "Three disciplines, one engineer", color: "#f59e0b", delay: 0.3 },
            { text: "and the numbers behind the work.", color: "#ef4444", delay: 0.45 }
          ].map((line, i) => (
            <div key={i} className="relative block overflow-hidden py-1.5">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: line.delay + 0.35,
                  duration: 0.01
                }}
                className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter"
              >
                {line.text}
              </motion.h1>

              {/* The Refined Revealer Block */}
              <motion.div
                initial={{ clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                whileInView={{
                  clipPath: i % 2 === 0 
                    ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"]
                    : ["inset(0 0 0 100%)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"]
                }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.75,
                  times: [0, 0.45, 0.55, 1],
                  delay: line.delay,
                  ease: [0.85, 0, 0.15, 1]
                }}
                className="absolute inset-0 z-10"
                style={{ backgroundColor: line.color }}
              />
            </div>
          ))}
        </div>

        {/* Glassmorphic Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full mx-auto px-4 py-8 relative">
          {blocks.map((block, index) => (
            <div
              key={block.id}
              className="group relative flex flex-col items-start bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl p-8 border border-white/20 dark:border-white/5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Decorative Number */}
              <span className="text-4xl font-serif-elegant italic text-muted-foreground/20 group-hover:text-primary/40 transition-colors mb-4">
                {block.id}
              </span>
              <h3 className="text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-2">
                {block.title}
              </h3>
              <p className="text-sm font-medium text-neutral-500 dark:text-zinc-400 leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
