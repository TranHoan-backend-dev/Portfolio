"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from "@/components/navbar";
import Hero from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-cyan selection:text-brand-dark overflow-hidden">
      {/* High-End CSS Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Cyberpunk Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #45A29E 1px, transparent 1px), linear-gradient(to bottom, #45A29E 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }} 
        />
        
        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-[0.03]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Ambient Lighting Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark mix-blend-multiply" />
    </div>
  );
}
