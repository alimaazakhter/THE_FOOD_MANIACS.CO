import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedMenu from '@/components/FeaturedMenu';
import BrandStory from '@/components/BrandStory';
import Founders from '@/components/Founders';
import Reviews from '@/components/Reviews';
import FranchiseOpportunity from '@/components/FranchiseOpportunity';
import Outlets from '@/components/Outlets';
import Gallery from '@/components/Gallery';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col min-h-screen bg-obsidian-950">
      {/* Sticky Top Navbar */}
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 3. Featured Menu Section */}
        <FeaturedMenu />

        {/* 4. Brand Story Section */}
        <BrandStory />

        {/* 5. Founders Section */}
        <Founders />

        {/* 6. Testimonials Section */}
        <Reviews />

        {/* 7. Franchise Opportunity Section */}
        <FranchiseOpportunity />

        {/* 8. Outlet Locations Section */}
        <Outlets />

        {/* 9. Food Gallery Section */}
        <Gallery />

        {/* 10. Final Call to Action Section */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Widget */}
      <FloatingWhatsApp />

      {/* Fixed Sticky Mobile Bottom Bar */}
      <MobileStickyBar />
    </div>
  );
}
