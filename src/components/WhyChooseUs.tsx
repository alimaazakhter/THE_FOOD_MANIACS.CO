'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck, Wallet, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source only the freshest, highest-quality local produce and meats daily for maximum taste.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Kitchen',
    description: 'Strict cleanliness and food safety protocols in all our outlets. Cooked with care and precision.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your favorite hot food delivered fresh to your doorstep in minutes via our delivery partners.',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Premium gourmet taste that fits your budget. Special meal deals designed specifically for students.',
  },
  {
    icon: Award,
    title: 'Consistent Quality',
    description: 'Every bite from any of our outlets in Ahmedabad delivers the same explosion of bold flavors.',
  },
  {
    icon: Heart,
    title: 'Loved by Customers',
    description: 'Rated highly on Google & food delivery platforms. Thousands of happy maniacs call us their favorite.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 relative bg-obsidian-950/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[30vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3"
          >
            Crafted for Cravings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight"
          >
            Why Choose <span className="text-gold-gradient">The Food Maniacs?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4"
          />
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glassmorphism-card p-8 rounded-2xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Floating glow behind icon */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-gold-500/5 to-transparent rounded-full blur-xl group-hover:from-gold-500/20 transition-all duration-500" />
                
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500">
                  <IconComponent className="w-6 h-6 text-gold-400 group-hover:text-obsidian-950 transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
