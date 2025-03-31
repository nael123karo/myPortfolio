import React, { useState } from "react";
import { motion } from "framer-motion";
import playstationImage from "../assets/images/RentalPlaystation.jpg";
import globalCommerceImage from "../assets/images/global_comerce_engine.webp";
import devConnectImage from "../assets/images/web top up.jpg";
import { Code, ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  // Track the focused project for enhanced animations
  const [focusedProject, setFocusedProject] = useState(null);

  const projects = [
    {
      title: "PlayStation Rental App",
      description: "Platform for booking PlayStation with account encryption feature, with Sign up and Login",
      tech: ["Vue.Js", "SQL", "Node.Js"],
      demoUrl: "#",
      codeUrl: "#",
      image: playstationImage,
      color: "blue"
    },
    {
      title: "Global Commerce Engine",
      description: "Enterprise e-commerce solution powering international markets with ML-based recommendations.",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
      demoUrl: "#",
      codeUrl: "#",
      image: globalCommerceImage,
      color: "green"
    },
    {
      title: "TOP UP STORE",
      description: "Create a website for Top Up Games using a simple store using HTML, CSS, JavaScript, and Bootstrap.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoUrl: "#",
      codeUrl: "#",
      image: devConnectImage,
      color: "purple"
    },
  ];

  // Get color class based on project color
  const getColorClass = (color, type) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        hover: "hover:bg-blue-600",
        border: "border-blue-500",
        text: "text-blue-500",
        gradient: "from-blue-400 to-blue-600",
      },
      green: {
        bg: "bg-emerald-500",
        hover: "hover:bg-emerald-600",
        border: "border-emerald-500",
        text: "text-emerald-500",
        gradient: "from-emerald-400 to-emerald-600",
      },
      purple: {
        bg: "bg-purple-500",
        hover: "hover:bg-purple-600",
        border: "border-purple-500",
        text: "text-purple-500",
        gradient: "from-purple-400 to-purple-600",
      }
    };
    
    return colorMap[color][type];
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onMouseEnter={() => setFocusedProject(index)}
              onMouseLeave={() => setFocusedProject(null)}
              className={`group bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 ${
                focusedProject === index ? 'bg-white/10 scale-105 z-10' : 'hover:bg-white/10'
              }`}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60 z-10"></div>
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-300 mb-5 h-20 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1 ${getColorClass(project.color, 'bg')} bg-opacity-20 
                      ${getColorClass(project.color, 'text')} rounded-full text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl} 
                    className={`flex items-center gap-2 px-4 py-2 ${getColorClass(project.color, 'bg')} 
                    ${getColorClass(project.color, 'hover')} rounded-lg text-white transition-all duration-300 
                    font-medium text-sm flex-1 justify-center`}
                  >
                    <Eye size={16} />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className={`flex items-center gap-2 px-4 py-2 bg-transparent border 
                    ${getColorClass(project.color, 'border')} ${getColorClass(project.color, 'text')} 
                    rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-sm`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;