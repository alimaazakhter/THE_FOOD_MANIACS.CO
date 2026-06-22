'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Small timeout to allow the mobile drawer menu to close and layout to settle
      setTimeout(() => {
        const headerOffset = isScrolled ? 75 : 95;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 150);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#brand-story' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Outlets', href: '#outlets' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md py-4 border-b border-gold-500/10 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <UtensilsCrossed className="w-6 h-6 text-obsidian-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-black tracking-tighter text-white uppercase leading-none">
                The Food
              </span>
              <span className="font-heading text-sm sm:text-base font-bold tracking-widest text-gold-400 uppercase leading-none">
                Maniacs Co.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollClick(e, link.href)}
                className="text-sm font-semibold tracking-wider text-slate-300 hover:text-gold-400 transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+917990274202"
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>+91 79902 74202</span>
            </a>
            <a
              href="#menu"
              onClick={(e) => handleScrollClick(e, '#menu')}
              className="px-5 py-2.5 rounded-full text-xs tracking-widest font-black uppercase text-obsidian-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] cursor-pointer"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-gold-400 hover:bg-obsidian-900 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-obsidian-950 border-b border-gold-500/10 max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-semibold tracking-wider text-slate-300 hover:text-gold-400 hover:bg-obsidian-900 transition-all uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gold-500/10 flex flex-col gap-4 px-3">
                <a
                  href="tel:+917990274202"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>+91 79902 74202</span>
                </a>
                <a
                  href="#menu"
                  onClick={(e) => handleScrollClick(e, '#menu')}
                  className="w-full text-center px-5 py-3 rounded-full text-sm tracking-widest font-black uppercase text-obsidian-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-md transition-all cursor-pointer"
                >
                  Order Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
