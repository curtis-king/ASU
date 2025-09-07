
"use client";
import Navbar from "../components/Navbar";
import MobileMenuDialog from "../components/MobileMenuDialog";
import AnnouncementBanner from "../components/AnnouncementBanner";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsCircleSection from "../components/StatsCircleSection";
import ActionsSection from "../components/ActionsSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import DownloadSection from "../components/DownloadSection";
import Bubbles from "../components/Bubbles";
import LandingBackground from "../components/LandingBackground";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative bg-white min-h-screen flex flex-col">
      <Navbar onOpenMenu={() => setMobileMenuOpen(true)} />
      <MobileMenuDialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
      <main className="flex-1 px-0 pt-14 lg:px-0">
        <LandingBackground />
        <section
          className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: 'url("/cover-asu.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-[#0205f4]/70" />
          <Bubbles />
          <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-10 flex flex-col items-center">
            <AnnouncementBanner />
            <HeroSection />
            
            {/* ActionsSection, GallerySection, TestimonialsSection, NewsSection, VideoSection, CallToActionSection à ajouter ici */}
          </div>
        </section>
  <StatsCircleSection />
  {/* <StatsSection /> */}
  <AboutSection />
  <ActionsSection />
  <GallerySection />
  <TestimonialsSection />
  <NewsSection />
      </main>
  <ContactSection />
  <DownloadSection />
  <Footer />
    </div>
  );
}
