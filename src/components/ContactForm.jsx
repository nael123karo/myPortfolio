import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Instagram, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formspree handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Ganti "YOUR_FORMSPREE_FORM_ID" dengan ID Formspree Anda
      // Misalnya: https://formspree.io/f/abcdefgh -> ID-nya adalah "abcdefgh"
      const response = await fetch('https://formspree.io/f/xanedvpy', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        console.log('SUCCESS!', response);
        
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone className="w-5 h-5" />,
      url: "https://wa.me/+6282162054193",
      color: "from-green-500 to-green-700",
      hoverColor: "group-hover:from-green-600 group-hover:to-green-800",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/nael_detamor/",
      color: "from-rose-500 to-violet-500",
      hoverColor: "group-hover:from-rose-600 group-hover:to-violet-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/natanael-detamor-karo-karo-567b86318/",
      color: "from-blue-500 to-blue-700",
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-800",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/nael123karo",
      color: "from-gray-700 to-gray-900",
      hoverColor: "group-hover:from-gray-800 group-hover:to-black",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Get in Touch
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:col-span-2"
          >
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-3">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and opportunities.
              </p>

              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Background gradient that appears on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} ${link.hoverColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className={`p-3 bg-gradient-to-r ${link.color} rounded-lg text-white relative z-10`}>
                      {link.icon}
                    </div>
                    <div className="relative z-10">
                      <span className="font-medium">{link.name}</span>
                      <p className="text-xs text-gray-400 mt-1">Connect with me</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-semibold mb-3">Send a Message</h3>
              <p className="text-gray-400 mb-6">
                Have a question or proposal? Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-gray-300 text-sm mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-gray-300 text-sm mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-300 text-sm mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-300 text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="5"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium flex items-center justify-center gap-2 
                    ${formStatus.isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:from-blue-600 hover:to-emerald-600 hover:shadow-lg"} 
                    transition-all duration-300`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {formStatus.isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{formStatus.error}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;