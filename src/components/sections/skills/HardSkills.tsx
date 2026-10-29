"use client";

import React from "react";
import { motion } from "framer-motion";

const capabilityGroups = [
  {
    id: '01',
    title: 'FRONTEND',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive UI']
  },
  {
    id: '02',
    title: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Middleware', 'Authentication', 'API Integration']
  },
  {
    id: '03',
    title: 'DATABASE',
    skills: ['PostgreSQL', 'MongoDB', 'Database Design', 'Data Modeling', 'Indexing', 'Caching Concepts']
  },
  {
    id: '04',
    title: 'SYSTEM ENGINEERING',
    skills: ['System Architecture', 'API Design', 'Role-Based Access', 'Business Logic', 'Debugging', 'Git', 'GitHub']
  },
  {
    id: '05',
    title: 'AI',
    skills: ['AI API Integration', 'Prompt Engineering', 'AI Workflow Design', 'Automation']
  },
  {
    id: '06',
    title: 'DEPLOYMENT',
    skills: ['Vercel', 'Netlify', 'Firebase', 'Docker']
  }
];

export const HardSkills = () => {
  return (
    <section id="hard-skills" className="w-full bg-background pt-32 md:pt-40 lg:pt-52 pb-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center">

        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tracking-tighter text-balance text-4xl font-bold md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs font-bold text-muted-foreground uppercase tracking-[0.4em] bg-muted/50 px-4 py-2 rounded-full"
          >
            Technology & Systems
          </motion.span>
        </div>

        {/* 6 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full relative z-10 items-stretch">
          {capabilityGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="flex flex-col bg-black/5 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-[2rem] p-6 lg:p-8 shadow-sm h-full group hover:border-black/10 dark:hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4 mb-6">
                <span className="text-[10px] text-muted-foreground font-mono font-bold">{group.id}</span>
                <h3 className="text-foreground font-bold uppercase tracking-widest text-[13px]">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-white dark:bg-[#141414] border border-black/5 dark:border-white/5 rounded-full shadow-sm group-hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
