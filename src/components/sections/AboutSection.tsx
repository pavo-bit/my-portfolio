"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { WarpBackground } from "@/components/ui/warp-background";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ImageTrail from "@/components/ImageTrail";
import Image from "next/image";
import InfiniteMenu from "@/components/InfiniteMenu";
import { portfolioData } from "@/data/portfolio";
import { BeamDivider } from "@/components/ui/BeamDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Github, Linkedin, Instagram, MessageSquare, ArrowRight, ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCountUp } from "@/hooks/useCountUp";
import { SocialCorner } from "@/components/layout/SocialCorner";
import { cn } from "@/lib/utils";

import Testimonial1 from "@/components/ui/testimonial-1";
import { IdentitySequence } from "./IdentitySequence";
import ScrollAdventure from "@/components/ui/animated-scroll";
import Bucket from "@/components/ui/bucket";
import { ArgentLoopInfiniteSlider } from "@/components/ui/argent-loop-infinite-slider";
import { GitHubShowcase } from "@/components/ui/github-showcase";
import { ShowcaseStack } from "@/components/ui/showcase-stack";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";


// --- Utility: Slide Reveal (Smooth & Cinematic) ---
const SlideReveal = ({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95, y }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }}
    >
        {children}
    </motion.div>
);

// --- Component 1: Editorial Lead-in ---
const AboutLeadIn = () => {
    const t = useTranslations('about');

    return (
        <div className="w-full max-w-[1650px] mx-auto px-6 py-6 flex justify-center items-center">
            {/* The Reference Card Container (Gambar 1 Style with Dark/Light Support) */}
            <motion.div
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 80, scale: 0.96 },
                    show: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                    }
                }}
                className="relative w-full bg-white dark:bg-black border border-red-600/20 dark:border-red-600/40 p-6 md:p-12 lg:p-16 overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-500 group"
            >

                {/* 1. Grid Background Overlay (Dynamic Colors) */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#00000008_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#ffffff08_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none transition-opacity" />

                {/* 2. Red Corner Tabs */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-red-600 -translate-x-1 translate-y-[-50%] z-10" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 translate-x-1 translate-y-[-50%] z-10" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-red-600 -translate-x-1 translate-y-[50%] z-10" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-red-600 translate-x-1 translate-y-[50%] z-10" />

                {/* 3. Glare Sweep Effect (Premium Hover Shine via Framer Motion) */}
                <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                    <motion.div
                        variants={{
                            hidden: { left: "-150%" },
                            show: { left: "-150%" },
                            hover: { left: "150%" }
                        }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-y-0 w-[150%] md:w-[75%] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent skew-x-[-25deg]"
                    />
                </div>

                {/* 4. Content Layer */}
                <div className="relative z-10">
                    {/* Top Tagline */}
                    <div className="flex justify-between items-start mb-6 md:mb-10">
                        <span className="text-red-600 dark:text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Positioning & Capabilities</span>
                        <span className="text-zinc-400 dark:text-zinc-600 text-[9px] font-mono tracking-widest uppercase hidden md:block">Product Engineer</span>
                    </div>

                    {/* Massive Typography - Quote Style */}
                    <div className="mb-8 md:mb-14 relative cursor-default">
                        {/* Original Text with glow */}
                        <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[76px] xl:text-[88px] font-bold tracking-tight leading-[0.92] text-zinc-900 dark:text-white transition-all duration-700 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            SOFTWARE SHOULD <br className="hidden md:block" />
                            <span className="font-serif italic font-normal text-zinc-900 dark:text-white lowercase opacity-90 transition-opacity duration-700 group-hover:opacity-100">solve something.</span>
                        </h2>
                    </div>

                    {/* Detail Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-zinc-100 dark:border-zinc-900 pt-8 md:pt-12">
                        {/* Left narrative */}
                        <div className="md:col-span-5">
                            <p className="text-base md:text-lg lg:text-xl font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-tight">
                                Mayuresh Mohanty is an engineering student and independent software developer focused on building practical business software, digital products and AI-powered applications.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-tight mt-4">
                                I approach software as a product and a system — understanding the problem first, designing the architecture, building the application and continuously improving it.
                            </p>
                        </div>

                        {/* Right columns - Capabilities */}
                        <div className="md:col-span-7 flex flex-col gap-10">
                            {/* Capability 1 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-900 pb-3">
                                    <span className="text-[10px] text-zinc-400 font-mono">01</span>
                                    <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-widest text-[13px]">BUSINESS SYSTEMS</span>
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Business Software</h3>
                                <p className="text-[13px] text-zinc-500 leading-relaxed max-w-lg">
                                    Management platforms and operational systems designed around real business workflows.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {['ERP', 'Management Systems', 'Dashboards', 'Business Workflows'].map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Capability 2 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-900 pb-3">
                                    <span className="text-[10px] text-zinc-400 font-mono">02</span>
                                    <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-widest text-[13px]">FULL-STACK ENGINEERING</span>
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Full-Stack Systems</h3>
                                <p className="text-[13px] text-zinc-500 leading-relaxed max-w-lg">
                                    Building complete applications across frontend interfaces, APIs, backend services, databases and authentication.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {['React', 'Node.js', 'REST APIs', 'Databases', 'Authentication'].map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Capability 3 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-900 pb-3">
                                    <span className="text-[10px] text-zinc-400 font-mono">03</span>
                                    <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase tracking-widest text-[13px]">PRODUCT DEVELOPMENT</span>
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Product Engineering</h3>
                                <p className="text-[13px] text-zinc-500 leading-relaxed max-w-lg">
                                    Turning software ideas into usable products through structured architecture, iterative development and deployment.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {['SaaS', 'AI Integration', 'Automation', 'Product Thinking'].map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- Tech Stack Logos (from portfolio.ts project data) ---
const TECH_LOGOS = [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Express", slug: "express" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "JavaScript", slug: "javascript" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Git", slug: "git" },
    { name: "Docker", slug: "docker" },
    { name: "Firebase", slug: "firebase" },
];

// --- Component 2: Core Engineering Panel ---
// --- Component 1: Core Engineering Panel (Stats) ---
const CoreEngineeringPanel = ({ scrollYProgress }: { scrollYProgress: any }) => {
    // Panel 1 exits between 0.45 and 0.65
    const opacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.45, 0.6], [1, 0.9]);
    const blur = useTransform(scrollYProgress, [0.45, 0.6], [0, 10]);

    return (
        <div className="w-screen h-full flex items-center justify-center bg-background transition-colors duration-500 overflow-hidden">
            <motion.div
                style={{
                    opacity,
                    scale,
                    filter: `blur(${blur}px)`,
                    willChange: "transform, opacity, filter",
                }}
                className="w-full h-full flex items-center justify-center"
            >
                <Testimonial1 />
            </motion.div>
        </div>
    );
};

// EmergingResearchPanel removed as per user request


// --- Component 3: Profile Intersection ---
// Optimized ProfilePanel (Restored to Original Design with Cinematic Transitions)
// ProfilePanel removed and replaced by IdentitySequence component


// --- Unified Typography-Focused Card for Bitwise Symmetry ---
const ClosingCard = ({ title, subtitle, desc, index, direction }: { title: string, subtitle: string, desc: string, index: number, direction: 'left' | 'right' }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative h-[50vh] flex flex-col justify-center ${direction === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
    >
        <div className={`flex flex-col gap-6 relative z-10 w-full px-4 ${direction === 'right' ? 'items-end' : 'items-start'}`}>
            {/* Minimalist Index & Role Indicator */}
            <div className={`flex items-center gap-6 w-full ${direction === 'left' ? 'flex-row-reverse' : ''}`}>
                <span className="text-xl md:text-2xl font-serif-elegant italic text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-px bg-foreground/10 flex-1 group-hover:bg-primary/30 transition-colors duration-500" />
                <span className="text-[11px] md:text-[13px] font-mono uppercase tracking-[0.3em] text-primary/80 font-semibold group-hover:tracking-[0.4em] transition-all duration-700">
                    {subtitle}
                </span>
            </div>

            {/* Title with subtle hover shift */}
            <h4 className={`text-4xl md:text-5xl lg:text-[64px] font-black text-foreground tracking-tighter leading-[1.1] transition-all duration-500 ${direction === 'right' ? 'group-hover:pr-4 origin-right' : 'group-hover:pl-4 origin-left'}`}>
                {title}
            </h4>

            {/* Description fading in slightly on hover */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-muted-foreground/60 leading-relaxed max-w-[85%] font-medium mt-4 group-hover:text-foreground/90 transition-colors duration-500 line-clamp-3">
                {desc}
            </p>
        </div>
    </motion.div>
);

const ViewMoreCard = ({ href, title }: { href: string, title: string }) => {
    const t = useTranslations('about');
    return (
        <Link href={href} className="group block h-[50vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center gap-10"
            >
                {/* Minimalist circular arrow */}
                <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 ease-out">
                    <ArrowRight className="w-10 h-10 text-primary group-hover:text-primary-foreground group-hover:translate-x-2 transition-all duration-500" />
                </div>

                <div className="text-center space-y-4">
                    <p className="text-[12px] md:text-[14px] font-mono uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">{t('closing.discoverMore')}</p>
                    <h4 className="text-4xl lg:text-5xl font-black text-foreground/80 group-hover:text-foreground transition-all">{title}</h4>
                </div>
            </motion.div>
        </Link>
    );
};

const GhostedHeader = ({ label, part1, part2, direction = "left" }: { label: string, part1: string, part2: string, direction?: "left" | "right" }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`space-y-3 mb-16 h-32 flex flex-col justify-end ${direction === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
    >
        <div className={`flex items-center gap-4 ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
            <div className="w-8 h-px bg-primary/50" />
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80 font-bold">
                {label}
            </span>
        </div>
        <h3 className={`text-4xl md:text-5xl lg:text-5xl xl:text-[54px] font-black uppercase tracking-tighter leading-none flex items-center gap-x-3 gap-y-1 ${direction === 'right' ? 'flex-row-reverse flex-wrap-reverse justify-start' : 'flex-wrap'}`}>
            <span className="text-foreground drop-shadow-sm">{part1}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/20 to-transparent dark:from-white/20 dark:to-transparent">{part2}</span>
        </h3>
    </motion.div>
);




// --- Component 5: Audit Funnel ---
const AuditFunnel = () => {
    const isMobile = useIsMobile();
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const t = useTranslations('about');
    const tCommon = useTranslations('common');

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
    const lineScaleY = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    // Exit parallax to transition smoothly into the next section
    const { scrollYProgress: exitProgressRaw } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    const exitProgress = useSpring(exitProgressRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const yExit = useTransform(exitProgress, [0, 1], ["0%", "40%"]);
    const scaleExit = useTransform(exitProgress, [0, 1], [1, 0.85]);
    const opacityExit = useTransform(exitProgress, [0, 1], [1, 0]);

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const galleryItems = [
            "/feature/icons/image1.webp",
            "/feature/icons/image2.webp",
            "/feature/icons/image3.webp",
            "/feature/icons/image4.webp",
            "/feature/icons/image5.webp",
            "/feature/icons/image6.webp",
            "/feature/icons/image7.webp",
            "/feature/icons/image8.webp"
        ];
        // Shuffle and pick 8 random images for the trail to avoid overwhelming the DOM
        const shuffled = [...galleryItems].sort(() => 0.5 - Math.random());
        setImages(shuffled.slice(0, 8));
    }, []);

    return (
        <div ref={sectionRef} className="relative overflow-visible group min-h-[80vh] md:min-h-[120vh] flex items-center justify-center bg-background z-10 pb-10 md:pb-32">
            <div className="flex flex-col items-center text-center py-20 md:py-40 space-y-12 md:space-y-16 pointer-events-none w-full origin-top">
                <motion.div
                    style={{ y: yExit, scale: scaleExit, opacity: opacityExit }}
                    className="space-y-6 md:space-y-10 flex flex-col items-center px-6 relative z-10 mix-blend-difference w-full"
                >
                    <motion.h4
                        style={{ scale, willChange: "transform" }}
                        className="text-4xl md:text-6xl lg:text-[7rem] font-black tracking-[-0.05em] text-white max-w-7xl tracking-tighter leading-[0.9] lg:px-6 uppercase text-center"
                    >
                        {t('architecting')} <br></br>
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white italic font-serif-elegant font-light lowercase tracking-normal"
                        >
                            {t('digitalReality')}
                        </motion.span>.
                    </motion.h4>
                </motion.div>

                <motion.div
                    style={{ y: yExit, scale: scaleExit, opacity: opacityExit }}
                    className="flex flex-col items-center gap-8 pt-12 pointer-events-auto w-full px-6"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <Bucket trailImages={!isMobile ? images : undefined} />
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('/noise.svg')]" />
            </div>
        </div>
    );
};



const ScrollHijackSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.5 });
    const [isComp2Visible, setIsComp2Visible] = React.useState(false);
    const [showBorder, setShowBorder] = React.useState(true);

    // Hooks moved to top level to avoid React Hook Rules violations
    const borderOpacity = useTransform(smoothProgress, [0.1, 0.15], [1, 0]);
    const xShift = useTransform(smoothProgress, [0, 0.1, 0.4, 1], ["0vw", "0vw", "-100vw", "-100vw"]);

    useMotionValueEvent(smoothProgress, "change", (v: any) => {
        // Hard toggle for the decorative border to ensure it's GONE
        if (v >= 0.20 && showBorder) setShowBorder(false);
        if (v < 0.15 && !showBorder) setShowBorder(true);

        // Trigger precisely as the second panel begins to enter the viewport
        if (v >= 0.30 && !isComp2Visible) setIsComp2Visible(true);
        if (v < 0.25 && isComp2Visible) setIsComp2Visible(false);
    });

    const { scrollYProgress: exitProgressRaw } = useScroll({
        target: sectionRef,
        offset: ["end end", "end start"]
    });

    // Apply a spring physics wrapper to make the scale/fade exit incredibly buttery smooth
    const exitProgress = useSpring(exitProgressRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });



    const exitScale = useTransform(exitProgress, [0, 1], [1, 0.85]);
    const exitOpacity = useTransform(exitProgress, [0, 1], [1, 0]); // Changed to 1 to ensure full fade out
    const exitBorderRadius = useTransform(exitProgress, [0, 1], ["0px", "40px"]);

    return (
        <div ref={sectionRef} className="relative h-[600vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
                <motion.div
                    style={{ scale: exitScale, opacity: exitOpacity, borderRadius: exitBorderRadius }}
                    className="w-full h-full relative origin-center"
                >
                    {/* Decorative curved edges with hard unmount for guaranteed removal */}
                    <AnimatePresence>
                        {showBorder && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                style={{
                                    opacity: borderOpacity,
                                    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                                }}
                                className="absolute top-0 left-0 right-0 h-48 border-t-2 border-x-2 border-neutral-200 dark:border-zinc-800 rounded-t-[50px] md:rounded-t-[80px] pointer-events-none z-[100]"
                            />
                        )}
                    </AnimatePresence>
                    <motion.div
                        className="flex h-full"
                        style={{
                            width: "200vw",
                            x: xShift
                        }}
                    >
                        <div className="h-full w-screen flex-shrink-0">
                            <CoreEngineeringPanel scrollYProgress={smoothProgress} />
                        </div>
                        <div className="h-full w-screen flex-shrink-0">
                            <IdentitySequence isVisible={isComp2Visible} scrollYProgress={smoothProgress} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default function AboutSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // REALIGNED TIMING: Parent is ~900vh long. The first 100vh delay = ~11% (0.11) of total scroll.
    const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0.03, 0.12], [1, 0]);
    const yLeadIn = useTransform(scrollYProgress, [0, 0.12], [0, -80]);

    const leadInTriggerRef = useRef(null);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-500"
        >
            {/* 1. STICKY PLANE - Lead-in */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center z-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ scale, opacity, y: yLeadIn }}
                    className="relative px-4 md:px-6 w-full max-w-[1700px] mx-auto"
                    ref={leadInTriggerRef}
                >
                    <AboutLeadIn />
                </motion.div>
            </div>

            {/* 2. OVERLAY LAYER - Hijack Zone & Footer */}
            <div className="relative pointer-events-none mt-[20vh] md:mt-[20vh]">
                {/* Content wrapper with background - rounded corners removed to allow animated border to control the shape */}
                <div className="bg-background dark:bg-black transition-colors duration-500 pointer-events-auto relative">

                    <ScrollHijackSection />
                    <ScrollAdventure />
                    <ArgentLoopInfiniteSlider />
                    {/* Seamless solid background section overlapping the slider's dead space */}
                    <div className="-mt-[50vh] flex flex-col items-center w-full bg-background relative z-20 pt-32 pb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full flex flex-col items-center max-w-[1700px] px-4 md:px-6"
                        >
                            <div className="mb-6 md:mb-10 text-center space-y-4">
                            </div>
                        </motion.div>

                        {/* Stacking Card Showcases */}
                        <ShowcaseStack>
                            <div className="w-full">
                                <GitHubShowcase />
                            </div>

                        </ShowcaseStack>
                    </div>
                    <EngineeringProcess />
                </div>
            </div>
        </section >
    );
};

