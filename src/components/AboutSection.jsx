import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10 relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
        >
          About Me
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-blue-400 to-emerald-400"></span>
        </motion.h2>
        
        {/* About content with image and slightly centered position */}
        <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto">
          {/* About text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-[300px] pr-0 md:pr-10 mb-10 md:mb-0"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Hello, I'm Nael!</h3>
            
            <p className="text-[#ccc] mb-4">
              "Hello, My Name is Natanael, a 6th semester student in Informatics Engineering at Universitas Advent Indonesia. Originally from Medan, I am currently studying in Bandung."
            </p>
            
            <p className="text-[#ccc] mb-4">
              I enjoy the challenge of solving complex problems and turning ideas into reality through clean and efficient code. My goal is to create digital experiences that not only look great but also provide real value to users.
            </p>
            
            <p className="text-[#ccc] mb-6">
              "With a deep interest in technology, especially in Javascript Framework and Go-lang, I strive to continuously learn and develop myself as Software Engineering Intern."
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ y: -3, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="inline-block bg-transparent border-2 py-3 px-8 text-base font-medium rounded mt-4 cursor-pointer border-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          {/* About image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 min-w-[300px] flex justify-center"
          >
            <div className="relative w-full max-w-[400px]">
              <img 
                src="/src/assets/images/my_photo1.jpg" 
                alt="Natanael Detamor" 
                className="w-full rounded-lg border-[3px] relative z-10"
                style={{ borderImage: 'linear-gradient(to right, #60a5fa, #34d399) 1' }}
              />
              <div className="absolute w-full h-full rounded-lg top-6 left-6 z-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

