import React from "react";
import { motion } from "framer-motion";
import { Code, GraduationCap, MapPin, Cpu } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* About Text with Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:col-span-3"
          >
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300">
              <p className="text-xl text-gray-300 leading-relaxed">
                "Hello, My Name is <span className="text-blue-400 font-semibold">Natanael</span>, a 6th semester student in Informatics Engineering at Universitas Advent Indonesia. Originally from Medan, I am currently studying in Bandung."
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300">
              <p className="text-xl text-gray-300 leading-relaxed">
                "With a deep interest in technology, especially in <span className="text-emerald-400 font-semibold">Javascript Framework</span> and <span className="text-emerald-400 font-semibold">Go-lang</span>, I strive to continuously learn and develop myself as Software Engineering Intern."
              </p>
            </div>
          </motion.div>

          {/* Stats with Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:col-span-2"
          >
            {[
              { 
                label: "Certificates", 
                value: "4", 
                icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
                color: "from-blue-500 to-blue-700"
              },
              { 
                label: "Projects", 
                value: "3+", 
                icon: <Code className="w-8 h-8 text-emerald-400" />,
                color: "from-emerald-500 to-emerald-700"
              },
              { 
                label: "Location", 
                value: "Bandung, ID", 
                icon: <MapPin className="w-8 h-8 text-rose-400" />,
                color: "from-rose-500 to-rose-700"
              },
              { 
                label: "Focus", 
                value: "Software Engineering", 
                icon: <Cpu className="w-8 h-8 text-purple-400" />,
                color: "from-purple-500 to-purple-700"
              },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} mb-3 w-fit`}>
                  {stat.icon}
                </div>
                <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;