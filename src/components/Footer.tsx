'use client';

import React from 'react';
import { UtensilsCrossed, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-950 border-t border-slate-900 pt-16 pb-24 md:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Col 1: About Brand */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg">
                <UtensilsCrossed className="w-5 h-5 text-obsidian-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-black tracking-tighter text-white uppercase leading-none">
                  The Food
                </span>
                <span className="font-heading text-sm font-bold tracking-widest text-gold-400 uppercase leading-none">
                  Maniacs Co.
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The Food Maniacs Co. is a fast growing modern fast food brand built for people who are crazy about bold flavours and memorable food experiences. Serving juicy burgers, wraps, fried chicken & more since 2020.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/thefoodmaniacsco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-obsidian-900 border border-gold-500/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all cursor-pointer"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com/thefoodmaniacsco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-obsidian-900 border border-gold-500/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all cursor-pointer"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Why Us', href: '#why-choose-us' },
                { name: 'Menu', href: '#menu' },
                { name: 'Our Story', href: '#brand-story' },
                { name: 'Franchise', href: '#franchise' },
                { name: 'Outlets', href: '#outlets' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-gold-400 transition-colors uppercase tracking-wider font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-gold-400">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="text-xs text-slate-400">
                  <a href="tel:+917990274202" className="block hover:text-gold-400 transition-colors">
                    +91 79902 74202
                  </a>
                  <a href="tel:+919727265387" className="block hover:text-gold-400 transition-colors">
                    +91 97272 65387
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="mailto:connect@thefoodmaniacsco.com"
                  className="text-xs text-slate-400 hover:text-gold-400 transition-colors"
                >
                  connect@thefoodmaniacsco.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Storefront Mini Gallery */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-gold-400">
              Our Outlets
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=150',
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=150',
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=150',
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border border-slate-900 shadow-md">
                  <img
                    src={img}
                    alt="Outlet Storefront Thumbnail"
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <a
              href="#outlets"
              className="inline-block text-[10px] text-gold-400 hover:underline uppercase tracking-wider font-black"
            >
              View All Outlets &rarr;
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
          <p>© {currentYear} The Food Maniacs Co. All Rights Reserved.</p>
          <p>
            Made with <span className="text-red-500 animate-pulse">❤️</span> for food lovers
          </p>
        </div>

      </div>
    </footer>
  );
}
