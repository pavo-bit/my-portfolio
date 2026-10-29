"use client";

import React from "react";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
    {
        id: "01",
        title: "UNDERSTAND",
        desc: "Understand the business problem and requirements."
    },
    {
        id: "02",
        title: "ARCHITECT",
        desc: "Define application structure, data flow, APIs and database requirements."
    },
    {
        id: "03",
        title: "BUILD",
        desc: "Develop the frontend, backend and core business logic."
    },
    {
        id: "04",
        title: "INTEGRATE",
        desc: "Connect APIs, databases, authentication and external services."
    },
    {
        id: "05",
        title: "TEST",
        desc: "Debug, validate and improve the system."
    },
    {
        id: "06",
        title: "DEPLOY",
        desc: "Prepare and launch the application."
    }
];

export function EngineeringProcess() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="md:w-1/3 sticky top-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block"
                    >
                        Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground"
                    >
                        ENGINEERING<br />PROCESS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground mt-6 text-lg max-w-sm"
                    >
                        A systematic approach to building resilient, scalable, and practical digital products.
                    </motion.p>
                </div>

                <div className="md:w-2/3 flex flex-col gap-6">
                    {PROCESS_STEPS.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="group relative p-8 md:p-10 bg-secondary/20 hover:bg-secondary/40 border border-border/50 rounded-2xl transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground/20 to-foreground/5 dark:from-white/20 dark:to-white/5">
                                    {step.id}
                                </span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
