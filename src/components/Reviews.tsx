'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: 'Best burgers in Ahmedabad.',
    details: 'The chicken patty is incredibly juicy and has the perfect crunch. Their signature sauce is unmatched. My absolute go-to place after college lectures!',
    author: 'Rahul Sharma',
    role: 'Student, HL College',
  },
  {
    rating: 5,
    quote: 'Amazing taste and service.',
    details: 'We ordered a burger bucket and wraps for a family get-together, and everybody loved it. The ingredients felt extremely fresh and delivery was quick.',
    author: 'Priyanshi Patel',
    role: 'Software Engineer',
  },
  {
    rating: 5,
    quote: 'Always fresh and delicious.',
    details: 'The quality has remained top-notch since 2020. I order wraps and fried chicken weekly, and the taste is consistent every single time. 10/10 recommendation.',
    author: 'Aarav Shah',
    role: 'Food Blogger',
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
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 relative bg-obsidian-950/40 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-amber-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3 flex items-center justify-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Maniacs Love</span>
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Loved By <span className="text-gold-gradient">Thousands</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glassmorphism-card p-8 rounded-3xl relative flex flex-col justify-between h-full group"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gold-500/5 pointer-events-none group-hover:text-gold-500/10 transition-colors" />

              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Big Headline Quote */}
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-gold-400 transition-colors">
                  &ldquo;{review.quote}&rdquo;
                </h3>

                {/* Body Quote */}
                <p className="text-xs text-slate-400 leading-relaxed mb-8">
                  {review.details}
                </p>
              </div>

              {/* Author details */}
              <div className="border-t border-slate-800/60 pt-4 mt-auto">
                <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                  {review.author}
                </h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
