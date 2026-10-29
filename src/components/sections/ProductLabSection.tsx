"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FlaskConical, Terminal, ArrowRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProductLabSection = () => {
    const products = portfolioData.productLab || [];

    if (products.length === 0) return null;

    return (
        <section className="relative z-10 py-16 sm:py-24 border-t border-b border-black/10 dark:border-white/5 bg-secondary/5 dark:bg-black/20">
            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500">
                                <FlaskConical className="w-5 h-5" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                                Product Lab
                            </h2>
                        </div>
                        <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
                            Experimental concepts and systems designed to explore product mechanics, user retention, and sustainable economics without commercial deployment.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-500 text-xs font-bold uppercase tracking-widest shrink-0"
                    >
                        <Activity className="w-3 h-3" />
                        In Development
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-6 md:p-8 rounded-3xl bg-background border border-black/15 dark:border-white/10 hover:border-amber-500/50 transition-colors shadow-sm overflow-hidden flex flex-col h-full"
                        >
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                <Terminal className="w-32 h-32 text-amber-500 transform rotate-12" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                                        {product.description}
                                    </p>
                                </div>

                                <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed mb-8 flex-grow">
                                    {product.longDescription}
                                </p>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4 opacity-60">
                                        Core Systems Explored
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.techStack.map((tech, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1 rounded-md bg-secondary/30 dark:bg-secondary/10 border border-black/5 dark:border-white/5 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
