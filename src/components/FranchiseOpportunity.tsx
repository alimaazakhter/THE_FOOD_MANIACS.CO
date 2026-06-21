'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Building, PiggyBank, GraduationCap, ChevronRight } from 'lucide-react';

export default function FranchiseOpportunity() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      // Simulate form submission success
      setIsSubmitted(true);
    }
  };

  const benefits = [
    {
      icon: Building,
      title: 'Established Brand Presence',
      desc: 'Partner with Ahmedabad&apos;s beloved fast food chain, growing rapidly since 2020.',
    },
    {
      icon: PiggyBank,
      title: 'High ROI Potential',
      desc: 'Proven business model with optimized supply chain costs and high franchise profitability.',
    },
    {
      icon: GraduationCap,
      title: '360° Operations Support',
      desc: 'Comprehensive training, staff sourcing, kitchen setup, and digital marketing support.',
    },
  ];

  return (
    <section id="franchise" className="py-16 md:py-24 relative bg-obsidian-950 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black tracking-widest text-gold-400 uppercase mb-3">Partner with Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Franchise <span className="text-gold-gradient">Opportunities</span>
          </h2>
          <div className="h-[3px] bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 w-20" />
          <p className="text-slate-400 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Join the Food Maniacs family and ride the fast-food expansion wave across Gujarat and India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Benefits list */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight mb-6">
              Why Partner With <span className="text-gold-400">The Food Maniacs Co.?</span>
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="p-3 bg-gold-500/10 border border-gold-400/20 rounded-xl text-gold-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Stats Callout */}
            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-gold-400/10 flex items-center justify-around text-center gap-4">
              <div>
                <p className="text-2xl font-black text-white">40%+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Average Margin</p>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div>
                <p className="text-2xl font-black text-white">12-18m</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Expected ROI</p>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div>
                <p className="text-2xl font-black text-white">FOFO</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Franchise Model</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form / Success Screen */}
          <div className="lg:col-span-6">
            <motion.div
              layout
              className="bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-gold-400/20 rounded-3xl p-8 shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="franchise-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                      Inquire Now
                    </h4>
                    
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-obsidian-950/80 border border-slate-800 focus:border-gold-400 text-sm text-slate-100 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-obsidian-950/80 border border-slate-800 focus:border-gold-400 text-sm text-slate-100 rounded-xl px-4 py-3 outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-obsidian-950/80 border border-slate-800 focus:border-gold-400 text-sm text-slate-100 rounded-xl px-4 py-3 outline-none transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Desired City/Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-obsidian-950/80 border border-slate-800 focus:border-gold-400 text-sm text-slate-100 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder="e.g. Surat, Vadodara, Rajkot"
                      />
                    </div>

                    <div>
                      <label htmlFor="investment" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Budget Range *
                      </label>
                      <select
                        name="investment"
                        id="investment"
                        required
                        value={formData.investment}
                        onChange={handleChange}
                        className="w-full bg-obsidian-950/80 border border-slate-800 focus:border-gold-400 text-sm text-slate-400 focus:text-slate-100 rounded-xl px-4 py-3 outline-none transition-colors"
                      >
                        <option value="">Select Investment Range</option>
                        <option value="15-20">₹15 Lakhs - ₹20 Lakhs</option>
                        <option value="20-25">₹20 Lakhs - ₹25 Lakhs</option>
                        <option value="25-30">₹25 Lakhs - ₹30 Lakhs</option>
                        <option value="30+">₹30 Lakhs +</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest text-obsidian-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
                    >
                      <span>Submit Inquiry</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-gold-400 mb-6 stroke-[1.5]" />
                    <h4 className="font-heading text-2xl font-black text-white uppercase tracking-tight mb-3">
                      Inquiry Received!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-sm leading-relaxed mb-6">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our franchise business representative will review your application for <strong className="text-white">{formData.location}</strong> and reach out to you within 24-48 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', location: '', investment: '' });
                      }}
                      className="px-6 py-2.5 rounded-full text-xs font-extrabold uppercase text-gold-400 border border-gold-400/30 hover:border-gold-400 hover:text-white transition-all cursor-pointer"
                    >
                      Go Back
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
