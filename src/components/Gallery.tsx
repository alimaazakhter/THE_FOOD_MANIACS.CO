'use client';

import React from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Gourmet Cheeseburger',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Crispy Fried Wings',
    category: 'Fried Chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Spicy Chicken Wrap',
    category: 'Wraps',
    image: 'https://images.unsplash.com/photo-1628191137573-dee64e727614?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Premium Spiced Fries',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Blue Lagoon Mocktail',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Maniacs Outlet Vibe',
    category: 'Outlets',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative bg-obsidian-950">
      
      <div className="absolute top-[10%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">Visual Feast</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Food <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
          <p className="text-slate-400 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Take a look at some of our mouth-watering creations and the premium restaurant ambiance we serve them in.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-3xl overflow-hidden group border border-gold-400/10 cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Details on Hover */}
              <div className="absolute bottom-6 left-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-gold-400 text-obsidian-950 mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-white uppercase leading-none">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
