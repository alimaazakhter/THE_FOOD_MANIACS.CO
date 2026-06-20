'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-obsidian-950"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Top-Right Gold Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-gold-500/10 to-transparent blur-[120px]" />
        {/* Center-Left Amber Glow */}
        <div className="absolute top-[30%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-amber-600/10 to-transparent blur-[100px]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Delivering Smiles Since 2020</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
              Good Food.
              <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_12px_rgba(245,158,11,0.25)]">
                Good Mood.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Deliciously crafted meals that bring people together. Made with fresh ingredients, 
              bold flavours, and endless happiness. Ahmedabad&apos;s local favourite for fast food.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-obsidian-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all hover:scale-105 active:scale-95 duration-300 cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#outlets"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-slate-300 border border-slate-700 hover:border-gold-400 hover:text-gold-400 transition-all hover:scale-105 active:scale-95 duration-300 cursor-pointer"
              >
                <span>Visit Us</span>
              </a>
            </div>

            {/* Quick stats / Features row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-12 pt-8 border-t border-slate-800/60 w-full max-w-lg">
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-black text-gold-400 leading-none">3+</p>
                <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-widest mt-2">Active Outlets</p>
              </div>
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-black text-gold-400 leading-none">2020</p>
                <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-widest mt-2">Founded</p>
              </div>
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-black text-gold-400 leading-none">10k+</p>
                <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-widest mt-2">Happy Foodies</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            {/* Background circular glowing shape */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-gold-500/10 to-amber-600/20 blur-[60px] animate-pulse" />

            {/* Floating Burger Composition */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative max-w-md sm:max-w-lg w-full aspect-square flex items-center justify-center"
            >
              {/* Main Burger Image */}
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
                alt="Delicious Gourmet Chicken Burger"
                className="object-cover w-[85%] h-[85%] rounded-[2rem] shadow-2xl border-2 border-gold-400/20 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500"
              />

              {/* Float Item 1: Floating Fries Thumbnail */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [-12, -8, -12] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-4 left-0 w-[35%] aspect-square rounded-2xl overflow-hidden border border-gold-400/30 shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop"
                  alt="Crispy French Fries"
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Float Item 2: Float Tag */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-12 right-0 glassmorphism px-4 py-2 rounded-xl border border-gold-400/30 shadow-lg text-center"
              >
                <span className="block text-[10px] text-gold-400 uppercase tracking-widest font-black">Bestseller</span>
                <span className="block font-heading text-lg font-black text-white leading-none">Crispy Burger</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
