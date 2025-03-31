import React, { useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

// Import components
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set the correct viewport height variable
  useLayoutEffect(() => {
    const updateViewportHeight = () => {
      // Set the --vh custom property to the correct viewport height
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial call
    updateViewportHeight();
    
    // Set mounted state for client-side rendering
    setIsMounted(true);
    
    // Update on resize
    window.addEventListener('resize', updateViewportHeight);
    
    // Force a reflow/layout calculation
    document.body.offsetHeight;
    
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Toggle scroll-to-top button visibility
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update active section with intersection threshold
      const sections = ["hero", "about", "projects", "certificates", "skills", "contact"];
      
      // Find the section that takes up most of the viewport
      let maxVisibleSection = null;
      let maxVisibleHeight = 0;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleSection = section;
          }
        }
      });
      
      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    // Call once immediately to set initial states correctly
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMounted]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative portfolio-mounted">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <Projects />
      <Certificates />
      <Skills />
      <ContactForm />
      <ScrollToTop isVisible={isVisible} />
      <Footer />
      
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Portfolio;