'use client';

import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    title: 'Call Us',
    image: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=300&auto=format&fit=crop',
    content: (
      <div className="space-y-1">
        <a href="tel:7990274202" className="block text-slate-300 hover:text-gold-400 font-semibold transition-colors text-sm">
          7990274202
        </a>
        <a href="tel:9727265387" className="block text-slate-300 hover:text-gold-400 font-semibold transition-colors text-sm">
          9727265387
        </a>
      </div>
    ),
    icon: Phone,
  },
  {
    title: 'Email & Website',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&auto=format&fit=crop',
    content: (
      <div className="space-y-2">
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-slate-500 mb-0.5">Email Us</span>
          <a href="mailto:connect@thefoodmaniacsco.com" className="text-slate-300 hover:text-gold-400 font-semibold transition-colors text-xs break-all">
            connect@thefoodmaniacsco.com
          </a>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-widest text-slate-500 mb-0.5">Website</span>
          <a href="https://thefoodmaniacsco.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-400 font-semibold transition-colors text-xs">
            www.thefoodmaniacsco.com
          </a>
        </div>
      </div>
    ),
    icon: Mail,
  },
  {
    title: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300&auto=format&fit=crop',
    content: (
      <div className="space-y-1">
        <a
          href="https://instagram.com/thefoodmaniacsco"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-slate-300 hover:text-gold-400 font-semibold transition-colors text-sm"
        >
          <svg
            className="w-4 h-4 fill-none stroke-current text-gold-400"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span>@thefoodmaniacsco</span>
        </a>
      </div>
    ),
    icon: Globe,
  },
];

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 relative bg-obsidian-950/40 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">Connect With Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Get In <span className="text-gold-gradient">Touch</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glassmorphism-card rounded-[2.5rem] p-8 flex flex-col items-center text-center border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
              >
                {/* Channel Circular Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gold-400/20 shadow-2xl mb-6 shrink-0 relative group">
                  <img
                    src={method.image}
                    alt={method.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-obsidian-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-8 h-8 text-gold-400" />
                  </div>
                </div>

                {/* Subtitle */}
                <h3 className="font-heading text-lg font-black uppercase tracking-wider text-white mb-3">
                  {method.title}
                </h3>

                {/* Details Content */}
                <div className="mt-2 flex-1 flex flex-col justify-center">
                  {method.content}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
