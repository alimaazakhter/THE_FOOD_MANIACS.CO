'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Quote } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-16 md:py-24 relative bg-obsidian-950/40 overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-amber-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Brand Story Details - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">Our Legacy</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-6 leading-tight">
              Delivering Smiles <br className="hidden sm:block" />
              With Every Single <span className="text-gold-gradient">Bite.</span>
            </h2>
            
            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <p>
                Starting our journey in <strong className="text-white">2020 in Ahmedabad</strong>, The Food Maniacs Co. was born out of a simple, burning passion: to create a modern fast food brand built for people who are crazy about bold flavours and memorable food experiences.
              </p>
              <p>
                What began as a single humble kitchen has quickly blossomed into a local favorite with <strong className="text-gold-400">3 successful outlets</strong> across Ahmedabad. We serve juice-packed gourmet burgers, fresh delicious wraps, mouth-watering fried chicken, and a wide array of sides and shakes crafted to perfection.
              </p>
              <p>
                Our core philosophy has always remained customer-first. We believe that premium-quality food shouldn&apos;t come with an outrageous price tag, and every meal should be a celebratory experience of taste, freshness, and pure happiness.
              </p>
            </div>

            {/* Testimonial snippet inside story */}
            <div className="mt-8 p-6 rounded-2xl bg-obsidian-900/60 border-l-4 border-gold-400 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-500/10 pointer-events-none" />
              <p className="text-xs italic text-slate-300 leading-relaxed">
                &ldquo;We don&apos;t just serve food; we build a community of food maniacs who appreciate the art of bold seasoning, perfect crunch, and exceptional service.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Image banner inside right column */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-gold-400/20 shadow-xl mb-2">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"
                alt="The Food Maniacs Outlet Vibe"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] text-gold-400 uppercase tracking-widest font-black">Ahmedabad, India</span>
                <h4 className="font-heading text-lg font-bold text-white uppercase">The Maniacs Experience</h4>
              </div>
            </div>

            {/* Mission Card */}
            <div className="glassmorphism-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-400 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-2">Our Mission</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To provide premium quality food at an affordable price, ensuring every customer experiences flavour, freshness, and happiness.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="glassmorphism-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-400 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white mb-2">Our Vision</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To become one of India&apos;s most loved fast food franchises by delivering unforgettable flavours, unmatched quality, and sustainable business growth for our partners.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
