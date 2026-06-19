'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Flame, ShoppingBag } from 'lucide-react';

const menuCategories = [
  { id: 'burgers', name: 'Burgers' },
  { id: 'fried-chicken', name: 'Fried Chicken' },
  { id: 'wraps', name: 'Wraps' },
  { id: 'sides-drinks', name: 'Beverages & Sides' },
];

const menuItems = {
  burgers: [
    {
      id: 1,
      title: 'Crispy Chicken Burger',
      desc: 'Crispy chicken, fresh lettuce, cheese & our special sauce.',
      price: 159,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
      badge: 'Bestseller',
    },
    {
      id: 2,
      title: 'Cheesy Veg Burger',
      desc: 'Veg patty, double cheese, lettuce, tomato & signature mayo.',
      price: 129,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Peri Peri Chicken Burger',
      desc: 'Spicy peri-peri grilled chicken, lettuce, onion & dynamic sauce.',
      price: 179,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop',
      badge: 'Spicy',
    },
    {
      id: 4,
      title: 'BBQ Chicken Burger',
      desc: 'BBQ grilled chicken, melted cheese, onion & smoky hickory sauce.',
      price: 169,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    },
  ],
  'fried-chicken': [
    {
      id: 5,
      title: 'Crispy Chicken Wings',
      desc: '6 pieces of crunchy, juice-packed fried chicken wings with hot dip.',
      price: 149,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
      badge: 'Bestseller',
    },
    {
      id: 6,
      title: 'Hot & Spicy Tenders',
      desc: '5 golden chicken breast tenders tossed in blazing dry spices.',
      price: 169,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop',
      badge: 'Spicy',
    },
    {
      id: 7,
      title: 'Maniacs Fried Bucket',
      desc: '8 pieces of signature crispy fried chicken, hot wings & dips.',
      price: 349,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop',
    },
  ],
  wraps: [
    {
      id: 8,
      title: 'Classic Chicken Wrap',
      desc: 'Grilled chicken strips, fresh veggies, and garlic mayo in a soft tortilla.',
      price: 139,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1628191137573-dee64e727614?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 9,
      title: 'Peri Peri Wrap',
      desc: 'Flaming peri-peri chicken, sliced cheese, raw onion, and greens.',
      price: 149,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop',
      badge: 'Spicy',
    },
    {
      id: 10,
      title: 'Spicy Veggie Wrap',
      desc: 'Crispy veg patty crumbles, spicy dressing, and crunchy greens.',
      price: 119,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop',
    },
  ],
  'sides-drinks': [
    {
      id: 11,
      title: 'Chocolate Lava Cake',
      desc: 'Warm molten chocolate cake with a rich liquid fudge centre.',
      price: 89,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
      badge: 'Bestseller',
    },
    {
      id: 12,
      title: 'Blue Lagoon Mocktail',
      desc: 'Refreshing blue curaçao, mint leaves, fresh lime and sparkling soda.',
      price: 99,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 13,
      title: 'Maniacs Seasoned Fries',
      desc: 'Crispy golden French fries tossed in our signature spiced dust.',
      price: 99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    },
  ],
};

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState('burgers');

  return (
    <section id="menu" className="py-24 relative bg-obsidian-950">
      
      {/* Background decoration */}
      <div className="absolute top-[10%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-amber-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">
            Explore Our Menu
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Something For <span className="text-gold-gradient">Everyone</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-xs tracking-wider font-extrabold uppercase transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 shadow-[0_4px_15px_rgba(251,191,36,0.3)] hover:scale-105'
                  : 'bg-obsidian-900 text-slate-400 hover:text-slate-200 hover:bg-obsidian-800 border border-gold-500/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Menu Grid Items */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {menuItems[activeTab as keyof typeof menuItems].map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glassmorphism-card rounded-2xl overflow-hidden group flex flex-col h-full"
                >
                  {/* Card Image Wrapper */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 shadow-md">
                        {item.badge === 'Spicy' ? (
                          <Flame className="w-3.5 h-3.5 fill-current text-obsidian-950" />
                        ) : null}
                        <span>{item.badge}</span>
                      </div>
                    )}

                    {/* Overlay Rating */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-obsidian-950/80 backdrop-blur-sm border border-gold-400/20 text-xs font-bold text-gold-400">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-heading text-lg font-bold text-white uppercase group-hover:text-gold-400 transition-colors">
                        {item.title}
                      </h3>
                      <span className="font-heading text-lg font-black text-gold-400 whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Featured Side Panel (Meal Combo Banner - Right column) */}
          <div className="lg:col-span-4 h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-gold-400/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[450px]"
            >
              {/* Background gradient blur */}
              <div className="absolute top-[-10%] right-[-10%] w-48 h-48 rounded-full bg-gold-400/10 blur-[50px]" />
              
              {/* Special Tag */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gold-500/10 border border-gold-400/30 text-gold-400 mb-6 self-start">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Limited Time Offer</span>
              </div>

              {/* Text copy */}
              <div>
                <h3 className="font-heading text-3xl font-black uppercase tracking-tight text-white mb-2 leading-none">
                  Meal Combo
                  <br />
                  <span className="text-gold-gradient">Save Big!</span>
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Juicy Burger + Spiced Fries + Sparkling Beverage
                </p>
              </div>

              {/* Combo Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden my-6 border border-gold-400/10">
                <img
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop"
                  alt="Delicious Combo Meal"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Price & Order CTA */}
              <div className="flex items-center justify-between gap-4 mt-4">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-1">Starting At</span>
                  <span className="font-heading text-3xl font-black text-white">₹199</span>
                </div>
                <a
                  href="https://wa.me/917990274202?text=Hi%20The%20Food%20Maniacs%20Co.,%20I%20would%20like%20to%20order%20the%20Meal%20Combo%20for%20₹199."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-obsidian-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 fill-current" />
                  <span>Order Now</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
