import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/my_photo_remover.png";
import { Download } from "lucide-react";
import {
  Layout,
  Code,
  PaintBucket,
  Layers,
  FileJson,
  TerminalSquare,
  Database,
  Brain,
  MessageSquare,
  BookOpen,
  Sparkles,
  Users
} from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("Backend Solutions");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Backend Solutions",
    "Web Development",
    "Software Engineering",
    "Frontend Design"
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
    size: Math.random() * 8 + 4, // Even smaller particles
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));
  
  // Tech and skill icons for the animated background - even smaller size
  const techIcons = [
    { icon: Layout, color: "text-blue-500/15", name: "React.js", position: { top: '12%', left: '10%' }, size: 16, duration: 35, rotate: 360 },
    { icon: Code, color: "text-green-500/15", name: "Vue.js", position: { top: '20%', left: '85%' }, size: 16, duration: 38, rotate: -360 },
    { icon: PaintBucket, color: "text-sky-500/15", name: "Tailwind CSS", position: { top: '75%', left: '15%' }, size: 16, duration: 30, rotate: 360 },
    { icon: Layers, color: "text-purple-500/15", name: "Bootstrap", position: { top: '65%', left: '80%' }, size: 16, duration: 32, rotate: -360 },
    { icon: FileJson, color: "text-green-600/15", name: "Node.js", position: { top: '85%', left: '40%' }, size: 16, duration: 36, rotate: 360 },
    { icon: TerminalSquare, color: "text-yellow-500/15", name: "Python", position: { top: '30%', left: '20%' }, size: 16, duration: 40, rotate: -360 },
    { icon: Database, color: "text-blue-600/15", name: "SQL Database", position: { top: '40%', left: '90%' }, size: 16, duration: 38, rotate: 360 },
    { icon: Brain, color: "text-amber-500/15", name: "Problem Solving", position: { top: '15%', left: '65%' }, size: 16, duration: 35, rotate: -360 },
    { icon: MessageSquare, color: "text-pink-500/15", name: "Komunikasi yang Baik", position: { top: '50%', left: '25%' }, size: 16, duration: 34, rotate: 360 },
    { icon: BookOpen, color: "text-indigo-500/15", name: "Kemampuan Belajar", position: { top: '60%', left: '70%' }, size: 16, duration: 36, rotate: -360 },
    { icon: Sparkles, color: "text-emerald-500/15", name: "Menguasai Framework", position: { top: '80%', left: '60%' }, size: 16, duration: 40, rotate: 360 },
    { icon: Users, color: "text-blue-400/15", name: "Team Work", position: { top: '25%', left: '45%' }, size: 16, duration: 42, rotate: -360 }
  ];

  return (
    <section 
      id="hero" 
      className="relative flex items-center overflow-hidden px-4 md:px-8 hero-section"
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

      {/* Tech and skill icons in motion - smaller and more subtle */}
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
      
      {/* Main content container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content - smaller size */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-left"
          >
            {/* Greeting and name - greeting smaller, name stays the same size */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-3"
            >
              <span className="text-gray-300 text-xl sm:text-2xl font-medium">Hi Everyone 👋, I am</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-4xl sm:text-5xl md:text-6xl font-bold">
                Natanael Detamor
              </span>
            </motion.h1>
            
            {/* Rotating text - even smaller */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-medium mb-3"
              style={{ minHeight: '28px' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                {displayText}
              </span>
            </motion.div>

            {/* Descriptive text - smaller */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-300 mb-5 max-w-xl"
            >
              A creative software developer, with a specialization in Frontend & Backend Development. Making pretty, useful things for people to use.
            </motion.p>

            {/* Buttons - smaller and more compact */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-md hover:from-blue-600 hover:to-emerald-600 hover:translate-y-[-3px] transition-all duration-300 text-white font-medium shadow-lg text-xs"
              >
                Contact Me
              </button>
              <a
                href="/certificates/CV-Natanael Detamor .pdf" 
                download="CV-Natanael Detamor .pdf"
                className="px-5 py-2 flex items-center gap-1.5 bg-transparent border-2 rounded-md hover:bg-white/5 hover:translate-y-[-3px] transition-all duration-300 text-white font-medium text-xs"
                style={{ borderImage: 'linear-gradient(to right, #60a5fa, #34d399) 1' }}
              >
                <Download size={12} /> Download CV
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-5 py-2 bg-white/10 rounded-md hover:bg-white/20 hover:translate-y-[-3px] transition-all duration-300 text-white font-medium backdrop-blur-sm text-xs"
              >
                View Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Photo - larger */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            {/* Note: For a transparent background image, you need to replace your image with a PNG that has transparency */}
            <div className="relative w-80 h-auto md:w-96">
              {/* Soft glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-xl rounded-full transform scale-90"></div>
              
              {/* This assumes myPhoto is or will be replaced with a transparent PNG of just the person */}
              <img
                src={myPhoto}
                alt="Natanael Detamor"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
