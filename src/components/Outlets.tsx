'use client';

import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const outletsList = [
  {
    id: 1,
    name: 'Sarkhej Makarba Road',
    address: 'Shop 4, Aabad Arcade, Opp. Al Burooj, Sarkhej Makarba Road, Ahmedabad - 380055',
    phone: '+91 79902 74202',
    hours: '11:00 AM - 11:00 PM',
    mapLink: 'https://maps.google.com/?q=The+Food+Maniacs+Co.+Sarkhej+Makarba+Road+Ahmedabad',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Khanpur Darwaja',
    address: 'Shop 1-2, Sacred Steps, Opp. Cama Hotel, Khanpur Darwaja, Ahmedabad - 380001',
    phone: '+91 97272 65387',
    hours: '11:00 AM - 11:00 PM',
    mapLink: 'https://maps.google.com/?q=The+Food+Maniacs+Co.+Khanpur+Darwaja+Ahmedabad',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Paldi Outlet',
    address: 'Shop 4, May Rose Tower, Congress Bhawan Road, Paldi, Ahmedabad - 380007',
    phone: '+91 79902 74202',
    hours: '11:00 AM - 11:00 PM',
    mapLink: 'https://maps.google.com/?q=The+Food+Maniacs+Co.+Paldi+Ahmedabad',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Outlets() {
  return (
    <section id="outlets" className="py-24 relative bg-obsidian-950/40">
      
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">Our Outlets</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Current <span className="text-gold-gradient">Presence</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
          <p className="text-slate-400 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Stop by at any of our 3 locations in Ahmedabad to experience an explosion of flavours made with love.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outletsList.map((outlet) => (
            <div
              key={outlet.id}
              className="glassmorphism-card rounded-[2rem] p-6 flex flex-col items-center border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 h-full text-center"
            >
              {/* Circular Storefront Image (Matching the reference "circle shape storefronts") */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gold-400/20 shadow-2xl mb-6 relative shrink-0">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Outlet Details */}
              <div className="flex flex-col flex-1 justify-between gap-4 w-full">
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                    {outlet.name}
                  </h3>
                  {/* Address */}
                  <div className="flex gap-2 items-start justify-center text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{outlet.address}</p>
                  </div>
                  {/* Phone */}
                  <div className="flex gap-2 items-center justify-center text-xs text-slate-300">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                    <a
                      href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                      className="hover:text-gold-400 transition-colors"
                    >
                      {outlet.phone}
                    </a>
                  </div>
                  {/* Hours */}
                  <div className="flex gap-2 items-center justify-center text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <p>{outlet.hours}</p>
                  </div>
                </div>

                {/* Get Directions CTA */}
                <a
                  href={outlet.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-gold-400/20 text-xs font-black uppercase text-center tracking-widest text-slate-300 hover:text-obsidian-950 hover:bg-gradient-to-r hover:from-gold-400 hover:to-gold-600 transition-all flex items-center justify-center gap-2 cursor-pointer mt-auto"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
