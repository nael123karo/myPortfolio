import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/my_photo1.jpg";
import {
  Layout, // React
  Code, // Vue
  PaintBucket, // Tailwind
  Layers, // Bootstrap
  FileJson, // Node.js
  TerminalSquare, // Python
  Database, // SQL
  Brain, // Problem Solving
  MessageSquare, // Komunikasi
  BookOpen, // Kemampuan belajar
  Sparkles, // Menguasai framework
  Users // Team work
} from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("Software Engineering");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Software Engineering",
    "Web Development",
    "Frontend Design",
    "Backend Solutions"
  ];

  // Auto rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setDisplayText(texts[(currentTextIndex + 1) % texts.length]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentTextIndex, texts]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Particle animation elements
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));
  
  // Tech and skill icons for the animated background
  const techIcons = [
    { icon: Layout, color: "text-blue-500/30", name: "React.js", position: { top: '12%', left: '10%' }, size: 32, duration: 35, rotate: 360 },
    { icon: Code, color: "text-green-500/30", name: "Vue.js", position: { top: '20%', left: '85%' }, size: 30, duration: 38, rotate: -360 },
    { icon: PaintBucket, color: "text-sky-500/30", name: "Tailwind CSS", position: { top: '75%', left: '15%' }, size: 28, duration: 30, rotate: 360 },
    { icon: Layers, color: "text-purple-500/30", name: "Bootstrap", position: { top: '65%', left: '80%' }, size: 28, duration: 32, rotate: -360 },
    { icon: FileJson, color: "text-green-600/30", name: "Node.js", position: { top: '85%', left: '40%' }, size: 30, duration: 36, rotate: 360 },
    { icon: TerminalSquare, color: "text-yellow-500/30", name: "Python", position: { top: '30%', left: '20%' }, size: 30, duration: 40, rotate: -360 },
    { icon: Database, color: "text-blue-600/30", name: "SQL Database", position: { top: '40%', left: '90%' }, size: 28, duration: 38, rotate: 360 },
    { icon: Brain, color: "text-amber-500/30", name: "Problem Solving", position: { top: '15%', left: '65%' }, size: 30, duration: 35, rotate: -360 },
    { icon: MessageSquare, color: "text-pink-500/30", name: "Komunikasi yang Baik", position: { top: '50%', left: '25%' }, size: 28, duration: 34, rotate: 360 },
    { icon: BookOpen, color: "text-indigo-500/30", name: "Kemampuan Belajar", position: { top: '60%', left: '70%' }, size: 30, duration: 36, rotate: -360 },
    { icon: Sparkles, color: "text-emerald-500/30", name: "Menguasai Framework", position: { top: '80%', left: '60%' }, size: 28, duration: 40, rotate: 360 },
    { icon: Users, color: "text-blue-400/30", name: "Team Work", position: { top: '25%', left: '45%' }, size: 30, duration: 42, rotate: -360 }
  ];

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center overflow-hidden px-4 hero-section"
      style={{ 
        minHeight: 'calc(var(--vh, 1vh) * 100)', 
        paddingTop: '64px' // Fixed height for navbar
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-gray-900"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Tech and skill icons in motion */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${tech.color} cursor-pointer`}
              style={{ 
                top: tech.position.top, 
                left: tech.position.left,
                transformOrigin: 'center',
              }}
              animate={{ 
                rotate: tech.rotate,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: tech.duration, 
                repeat: Infinity, 
                ease: "linear",
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.3, 
                filter: "brightness(1.5)",
                transition: { duration: 0.3 } 
              }}
            >
              <div className="group relative">
                <Icon size={tech.size} />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/90 text-white text-xs px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 group"
        >
          {/* Photo border with gradient animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-spin-slow z-0 p-1">
            <div className="bg-gray-900 rounded-full w-full h-full"></div>
          </div>
          
          <img
            src={myPhoto}
            alt="Profile"
            className="w-full h-full rounded-full border-4 border-transparent relative z-10 object-cover"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/80 to-emerald-500/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-20 flex items-center justify-center">
            <span className="text-white font-medium text-sm">Natanael Detamor</span>
          </div>
        </motion.div>

        {/* Text with proper height to avoid cutting off */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 flex flex-col items-center justify-center"
          style={{ 
            minHeight: '70px',
            height: 'auto',
            lineHeight: 1.2
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 pb-1">
            {displayText}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 px-4"
        >
          Transforming ideas into exceptional digital experiences.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 px-4"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full hover:from-blue-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap shadow-lg"
          >
            Let's Talk
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 sm:px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-300 text-sm sm:text-base whitespace-nowrap backdrop-blur-sm"
          >
            View Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;