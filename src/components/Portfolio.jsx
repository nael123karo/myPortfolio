import React, { useEffect, useState } from "react";
import playstationImage from "../assets/images/PlayStation_rental_App_picture.webp";
import globalCommerceImage from "../assets/images/global_comerce_engine.webp";
import devConnectImage from "../assets/images/dev_connect.webp";
import myPhoto from "../assets/images/my_photo.jpg"; // Sesuaikan jalur jika perlu
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Code,
  Award,
  Box,
  Menu,
  X,
  ChevronDown,
  Instagram,
  MessageSquare,
  Phone,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [displayText, setDisplayText] = useState("Creative Developer");

  const projects = [
    {
      title: "PlayStation Rental App",
      description:
        "Platform for booking PlayStation with account encryption feature.",
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
      title: "DevConnect Platform",
      description:
        "Revolutionary developer collaboration tool with integrated AI code review.",
      tech: ["React", "GraphQL", "Docker", "K8s"],
      demoUrl: "#",
      codeUrl: "#",
      image: devConnectImage,
    },
  ];

  const experiences = [
    {
      role: "Beginner Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      highlights: [
        "Led development of AI-powered analytics platform.",
        "Reduced system latency by 40%.",
        "Mentored junior developers.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Digital Solutions Ltd",
      period: "2020 - 2022",
      highlights: [
        "Developed scalable microservices architecture.",
        "Implemented CI/CD pipeline.",
        "Optimized database performance.",
      ],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 80 },
      ],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 75 },
        { name: "C#", level: 70 },
      ],
      icon: <Box className="w-6 h-6" />,
    },
    {
      category: "Mobile",
      techs: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "iOS", level: 65 },
        { name: "Android", level: 65 },
      ],
      icon: <Phone className="w-6 h-6" />,
    },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <Phone className="w-5 h-5" />,
      url: "https://wa.me/yournumber",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/yourhandle",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/yourusername",
    },
  ];

  const handleNameClick = () => {
    setDisplayText("Creative Developer"); // Mengatur ulang teks
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "projects",
        "experience",
        "skills",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
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
  // New function for form handling
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Here you would typically make an API call to your backend
      // For demonstration, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-40 backdrop-blur-lg bg-gray-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              <span>Natanael Detamor</span>
            </motion.h1>

            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Experience", "Skills", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
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
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4"
            >
              {["About", "Projects", "Experience", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
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

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-gray-900" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-40 mx-auto mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 animate-spin-slow" />
              <img
                src={myPhoto} // Gunakan variabel yang diimpor
                alt="Profile"
                className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-600 hover:border-blue-500 transition-colors duration-300"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {displayText} {/* Menggunakan state displayText */}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Transforming ideas into exceptional digital experiences
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
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
                "Hello, Nama Saya Natanael, mahasiswa semester 5 Teknik
                Informatika di Universitas Advent Indonesia. Berasal dari kota
                Medan, saya kini menimba ilmu di Bandung."
              </p>
              <p className="text-xl text-gray-300">
                "Minat yang mendalam pada dunia teknologi, khususnya di bidang
                pemrograman web, sebagai frontend developer, mendorong saya
                untuk terus belajar dan mengembangkan diri."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Projects", value: "10+" },
                { label: "Location", value: "Bandung, ID" },
                { label: "Focus", value: "Web Dev" },
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Featured Projects
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-fulltext-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Code className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
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
                  <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                  <p className="text-blue-400 mb-4">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hIndex * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <Award className="w-5 h-5 mt-1 text-emerald-400 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Technical Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="space-y-4">
                  {skill.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
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

      {/* Updated Contact Section with Social Links */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Get in Touch
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-6">
                  Feel free to reach out for collaborations or just a friendly
                  hello
                </p>
              </div>

              <div className="space-y-4">
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
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="5"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium
                ${
                  formStatus.isSubmitting
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:scale-105"
                }
                transition-all duration-300`}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {formStatus.isSubmitted && (
                  <p className="text-green-400 text-center">
                    Message sent successfully!
                  </p>
                )}
                {formStatus.error && (
                  <p className="text-red-400 text-center">{formStatus.error}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Natanael Detamor. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
