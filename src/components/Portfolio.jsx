import React, { useEffect, useState } from "react";
import playstationImage from "../assets/images/RentalPlaystation.jpg";
import globalCommerceImage from "../assets/images/global_comerce_engine.webp";
import devConnectImage from "../assets/images/web top up.jpg";
import myPhoto from "../assets/images/my_photo1.jpg";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Phone,
  Instagram,
  X,
  Menu,
  ChevronDown,
  Users,
  DatabaseIcon,
  ArrowUp,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [displayText, setDisplayText] = useState("Software Engineering");
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: "PlayStation Rental App",
      description:
        "Platform for booking PlayStation with account encryption feature, with Sign up and Login",
      tech: ["Vue.Js", "SQL", "Node.Js"],
      demoUrl: "#",
      codeUrl: "#",
      image: playstationImage,
    },
    {
      title: "Global Commerce Engine",
      description:
        "Enterprise e-commerce solution powering international markets with ML-based recommendations.",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
      demoUrl: "#",
      codeUrl: "#",
      image: globalCommerceImage,
    },
    {
      title: "TOP UP STORE",
      description:
        "Create a website for Top Up Games using a simple store using html, css, javascript, and Bootstrap ",
      tech: ["Html", "CSS", "Javascript", "Bootstrap"],
      demoUrl: "#",
      codeUrl: "#",
      image: devConnectImage,
    },
  ];

  const certificates = [
    {
      certificateName: "Belajar Dasar AI",
      issuer: "Dicoding",
      dateIssued: "2023",
      fileLink: "/certificates/sertifikat%20belajar%20dasar%20ai.pdf",
    },
    {
      certificateName: "Belajar Dasar AWS Cloud",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink: "/certificates/sertifikat%20Belajar%20dasar%20aws%20cloud.pdf",
    },
    {
      certificateName: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink:
        "/certificates/sertifikat%20belajar%20dasar%20pemrograman%20javascript.pdf",
    },
    {
      certificateName: "Belajar Back-End Pemula dengan Javascript",
      issuer: "Dicoding",
      dateIssued: "2022",
      fileLink:
        "/certificates/sertifikat%20Belajar%20Back-End%20Pemula%20dengan%20JavaScript.pdf",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "React.js", level: 40 },
        { name: "Vue.js", level: 55 },
        { name: "Tailwind CSS", level: 65 },
        { name: "Bootstrap", level: 60 },
      ],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", level: 45 },
        { name: "Python", level: 50 },
        { name: "SQL", level: 65 },
        { name: "C#", level: 40 },
      ],
      icon: <DatabaseIcon className="w-6 h-6 text-white-500"></DatabaseIcon>,
    },
    {
      category: "Soft Skills",
      techs: [
        { name: "Problem Solving", level: 55 }, // Menambahkan tingkat
        { name: "Komunikasi yang Baik", level: 70 }, // Menambahkan tingkat
        { name: "Kemampuan Mempelajari Hal baru", level: 65 }, // Menambahkan tingkat
        { name: "Menguasai Framework", level: 50 }, // Menambahkan tingkat
      ],
      icon: <Users className="w-6 h-6 text-white-500" />, // Ganti ikon sesuai kebutuhan
    },
  ];
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone className="w-5 h-5" />,
      url: "https://wa.me/+6282162054193",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/nael_detamor/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/natanael-detamor-karo-karo-567b86318/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/nael123karo",
    },
  ];

  const handleNameClick = () => {
    setDisplayText("Software Enginering");
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Toggle scroll-to-top button visibility
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update active section
      const sections = [
        "hero",
        "about",
        "projects",
        "certificates",
        "skills",
        "contact",
      ];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Form handling
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Navigation - Improved Mobile Responsiveness */}
      <nav className="fixed w-full z-40 backdrop-blur-lg bg-gray-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold"
            >
              Natanael Detamor
            </motion.h1>

            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {["About", "Projects", "Certificates", "Skills", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`cursor-pointer px-3 py-2 text-sm lg:text-base rounded-lg transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400 bg-white/10"
                        : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>

            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Improved Animation and Styling */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 absolute top-16 left-0 right-0 bg-gray-900/95 border-b border-white/10"
            >
              {["About", "Projects", "Certificates", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block px-4 py-3 text-center transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400 bg-white/10"
                        : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Improved Mobile Responsiveness */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16 md:pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-gray-900" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8"
          >
            <img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-gray-600 hover:border-blue-500 transition-colors duration-300 object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
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
            className="flex justify-center gap-4 px-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Let's Talk
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 sm:px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              View Work
            </button>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300">
                "Hello, My Name is Natanael, a 6th semester student in
                Informatics Engineering at Universitas Advent Indonesia.
                Originally from Medan, I am currently studying in Bandung."
              </p>
              <p className="text-xl text-gray-300">
                "With a deep interest in technology, especially in Javascript
                Framework and Go-lang, I strive to continuously learn and
                develop myself as Software Engineering Intern."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Certificates", value: "4" },
                { label: "Projects", value: "3+" },
                { label: "Location", value: "Bandung, ID" },
                { label: "Focus", value: "Software Engineering" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                  <p className="text-2xl font-bold text-blue-400">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Improved Grid Layout */}
      <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Professional Journey
            </span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-16 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-emerald-500" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-blue-500 border-4 border-gray-900" />

                <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-2">
                    {cert.certificateName}
                  </h3>
                  <p className="text-blue-400 mb-4">
                    {cert.issuer} • {cert.dateIssued}
                  </p>
                  <a
                    href={cert.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section - Improved Mobile Layout */}
      <section id="skills" className="py-16 sm:py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Technical Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {skill.category}
                  </h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {skill.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>{tech.name}</span>
                        <span className="text-blue-400">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: techIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Improved Form Layout */}
      <section id="contact" className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Get in Touch
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Let's Connect
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Feel free to reach out for collaborations or just a friendly
                  hello.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
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
                    className="flex items-center gap-4 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      {link.icon}
                    </div>
                    <span className="text-sm sm:text-base">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium text-sm sm:text-base ${
                    formStatus.isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:scale-105"
                  } transition-all duration-300`}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {formStatus.isSubmitted && (
                  <p className="text-green-400 text-center text-sm sm:text-base">
                    Message sent successfully!
                  </p>
                )}
                {formStatus.error && (
                  <p className="text-red-400 text-center text-sm sm:text-base">
                    {formStatus.error}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button - Improved Mobile Position */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 bg-gradient-to-r from-blue-500 to-emerald-500 p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>
      )}

      {/* Footer - Improved Spacing */}
      <footer className="py-6 sm:py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Natanael Detamor. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;