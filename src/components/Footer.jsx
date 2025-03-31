import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Natanael Detamor
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Software Engineering Student
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Made with passion and code</span>
              <Heart className="w-4 h-4 text-red-400" />
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-right"
          >
            <a 
              href="mailto:natanaeldetamorkarokaro@gmail.com" 
              className="text-blue-400 hover:text-blue-500 transition-colors inline-flex items-center gap-2"
            >
              <Coffee className="w-4 h-4" />
              <span>natanaeldetamorkarokaro@gmail.com</span>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center border-t border-white/5 pt-6"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Natanael Detamor. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;