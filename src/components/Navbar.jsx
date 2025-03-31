import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Menu, ChevronRight } from "lucide-react";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate position accounting for navbar height
      const navbarHeight = 56; // h-14 = 56px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'} border-b ${scrolled || isMenuOpen ? 'border-white/10' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 cursor-pointer z-50"
          >
            Natanael Detamor
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 relative ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - dengan gradient dan ukuran tetap */}
          <button
            className="md:hidden p-1 rounded-lg w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500/10 to-emerald-500/10 hover:from-blue-500/20 hover:to-emerald-500/20 transition-all duration-300 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ touchAction: "manipulation" }}
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - dengan gradient dan width 50% */}
        <div
          className={`md:hidden fixed right-0 top-0 w-1/2 bg-gray-900/95 backdrop-blur-xl border-l border-white/10 h-screen transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0 shadow-xl' : 'translate-x-full'} z-40 max-w-[300px]`}
        >
          {/* Mobile menu header dengan gradient - tanpa tombol X terpisah */}
          <div className="flex items-center justify-between p-3 border-b border-white/10 bg-gradient-to-r from-blue-500/5 to-emerald-500/5">
            <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Menu</span>
          </div>
          
          <div className="py-2 flex flex-col h-full">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between py-3 px-4 border-b border-white/5 last:border-none transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-white' 
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-emerald-500/5'
                }`}
                style={{ touchAction: "manipulation" }}
              >
                <span className="text-base font-medium">{item.label}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  activeSection === item.id 
                    ? 'text-emerald-400 rotate-90' 
                    : 'text-gray-500'
                }`} />
              </a>
            ))}

            {/* Bottom section dengan gradient */}
            <div className="mt-auto p-3 border-t border-white/10 bg-gradient-to-r from-blue-500/5 to-emerald-500/5">
              <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-1">Natanael Detamor</p>
              <p className="text-xs text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Tidak ada overlay, menu langsung muncul dari kanan */}
      </div>
    </nav>
  );
};

export default Navbar;