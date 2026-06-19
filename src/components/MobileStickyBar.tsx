'use client';

import React from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-obsidian-950/80 backdrop-blur-md border-t border-gold-500/20 px-4 py-2">
      <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
        <a
          href="tel:+917990274202"
          className="flex-1 flex flex-col items-center justify-center py-2 text-slate-300 hover:text-gold-400 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-gold-400 mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </a>
        <div className="w-[1px] h-8 bg-gold-500/20" />
        <a
          href="https://maps.google.com/?q=The+Food+Maniacs+Co.+Ahmedabad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 text-slate-300 hover:text-gold-400 active:scale-95 transition-transform"
        >
          <MapPin className="w-5 h-5 text-gold-400 mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Directions</span>
        </a>
        <div className="w-[1px] h-8 bg-gold-500/20" />
        <a
          href="https://wa.me/917990274202?text=Hi%20The%20Food%20Maniacs%20Co.,%20I%20want%20to%20place%20an%20order%20/%20ask%20about%20franchise."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 text-slate-300 hover:text-gold-400 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5 text-gold-400 mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
