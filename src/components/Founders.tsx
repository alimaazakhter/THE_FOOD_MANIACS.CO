'use client';

import React from 'react';
import { motion } from 'framer-motion';

const foundersList = [
  {
    name: 'Arthur Menezes',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    bio: 'Dedicated to defining the brand vision and expanding franchise partnerships across India.',
  },
  {
    name: 'Faijan Chuvara',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    bio: 'Focused on culinary excellence, product consistency, and managing operational workflows.',
  },
];

export default function Founders() {
  return (
    <section className="py-24 relative bg-obsidian-950">
      
      {/* Background decoration */}
      <div className="absolute top-[10%] right-[-15%] w-[40vw] h-[40vw] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">Meet the Visionaries</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Our <span className="text-gold-gradient">Founders</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
          <p className="text-slate-400 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Driven by passion and belief that great food should be premium yet accessible and affordable.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {foundersList.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glassmorphism-card rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
            >
              {/* Founder Image */}
              <div className="w-36 h-36 rounded-2xl overflow-hidden border border-gold-400/20 shadow-xl shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Founder details */}
              <div className="text-center sm:text-left flex flex-col justify-center">
                <span className="text-[10px] text-gold-400 uppercase tracking-widest font-black mb-1">
                  {founder.role}
                </span>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
                  {founder.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
