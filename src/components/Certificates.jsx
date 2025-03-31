import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      certificateName: "Belajar Dasar AI",
      issuer: "Dicoding",
      dateIssued: "2023",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20ai.pdf",
      color: "blue",
      icon: <Award className="w-6 h-6" />
    },
    {
      certificateName: "Belajar Dasar AWS Cloud",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20dasar%20aws%20cloud.pdf",
      color: "orange",
      icon: <Award className="w-6 h-6" />
    },
    {
      certificateName: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20pemrograman%20javascript.pdf",
      color: "yellow",
      icon: <Award className="w-6 h-6" />
    },
    {
      certificateName: "Belajar Back-End Pemula dengan Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20Back-End%20Pemula%20dengan%20JavaScript.pdf",
      color: "green",
      icon: <Award className="w-6 h-6" />
    },
  ];

  // Get background color based on certificate color
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "from-blue-500 to-blue-700",
        light: "from-blue-400/20 to-blue-600/20",
        text: "text-blue-400",
        border: "border-blue-500/50"
      },
      orange: {
        bg: "from-orange-500 to-orange-700",
        light: "from-orange-400/20 to-orange-600/20",
        text: "text-orange-400",
        border: "border-orange-500/50"
      },
      yellow: {
        bg: "from-yellow-500 to-yellow-700",
        light: "from-yellow-400/20 to-yellow-600/20",
        text: "text-yellow-400",
        border: "border-yellow-500/50"
      },
      green: {
        bg: "from-emerald-500 to-emerald-700",
        light: "from-emerald-400/20 to-emerald-600/20",
        text: "text-emerald-400",
        border: "border-emerald-500/50"
      }
    };
    
    return colorMap[color];
  };

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Professional Journey
          </span>
        </motion.h2>

        {/* Desktop Timeline View */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 transform -translate-x-1/2"></div>
            
            {certificates.map((cert, index) => {
              const colorClasses = getColorClasses(cert.color);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mb-16 flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-gray-900"></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${isEven ? 'mr-10' : 'ml-10'}`}>
                    <div className={`bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl 
                      hover:shadow-2xl transition-all duration-300 hover:bg-white/10 relative
                      hover:translate-y-[-5px] group`}
                    >
                      {/* Accent line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${colorClasses.bg}`}></div>
                      
                      <div className="pt-3">
                        <div className="flex items-center mb-3">
                          <div className={`p-2 rounded-full mr-3 text-white bg-gradient-to-r ${colorClasses.bg}`}>
                            {cert.icon}
                          </div>
                          <h3 className="text-xl font-bold">{cert.certificateName}</h3>
                        </div>
                        
                        <div className="flex items-center text-sm mb-4">
                          <div className={`flex items-center ${colorClasses.text} mr-4`}>
                            <Calendar size={16} className="mr-1" />
                            {cert.dateIssued}
                          </div>
                          <div className="text-gray-400">
                            {cert.issuer}
                          </div>
                        </div>
                        
                        <a
                          href={cert.fileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${colorClasses.bg} 
                            text-white font-medium text-sm transition-all duration-300 hover:shadow-lg`}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevCertificate}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 z-20 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextCertificate}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 z-20 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Certificate cards slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {certificates.map((cert, index) => {
                  const colorClasses = getColorClasses(cert.color);
                  
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className={`bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm 
                        shadow-xl transition-all duration-300 relative`}
                      >
                        {/* Accent line */}
                        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${colorClasses.bg}`}></div>
                        
                        <div className="pt-3">
                          <div className="flex items-center mb-3">
                            <div className={`p-2 rounded-full mr-3 text-white bg-gradient-to-r ${colorClasses.bg}`}>
                              {cert.icon}
                            </div>
                            <h3 className="text-lg font-bold">{cert.certificateName}</h3>
                          </div>
                          
                          <div className="flex items-center text-sm mb-4">
                            <div className={`flex items-center ${colorClasses.text} mr-4`}>
                              <Calendar size={14} className="mr-1" />
                              {cert.dateIssued}
                            </div>
                            <div className="text-gray-400">
                              {cert.issuer}
                            </div>
                          </div>
                          
                          <a
                            href={cert.fileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${colorClasses.bg} 
                              text-white font-medium text-sm transition-all duration-300 hover:shadow-lg`}
                          >
                            <ExternalLink size={14} className="mr-2" />
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-blue-400 to-emerald-400' 
                      : 'bg-white/30'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;