import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  const projects = [
    {
      title: "PlayStation Rental App",
      description: "Platform for booking PlayStation with account encryption feature.",
      tech: ["Vue.Js", "SQL", "Node.Js"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Global Commerce Engine",
      description: "Enterprise e-commerce solution powering international markets with ML-based recommendations.",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "DevConnect Platform",
      description: "Revolutionary developer collaboration tool with integrated AI code review.",
      tech: ["React", "GraphQL", "Docker", "K8s"],
      demoUrl: "#",
      codeUrl: "#",
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
        { name: "React.js" },
        { name: "Bootstrap" },
        { name: "Tailwind CSS" },
        { name: "Vue.js" },
      ],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "SQL" },
        { name: "C#" },
      ],
      icon: <Box className="w-6 h-6" />,
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowBackground(window.scrollY <= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${showBackground ? 'bg-real-madrid' : ''} text-white overflow-x-hidden`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">
              <a onClick={() => scrollToSection("hero")} className="cursor-pointer">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Natanael Detamor
                </span>
              </a>
            </h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-white/70 hover:text-blue-500 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-white/70 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex items-center justify-center min-h-screen text-center px-4"
        data-aos="fade-up"
      >
        <div className="max-w-4xl">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-600 hover:border-blue-500 transition-colors duration-300">
            <img
              src="/src/assets/images/my1 photo.jpg"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.src = "/api/placeholder/250/250";
                console.log("Error loading profile image");
              }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">
            Transforming ideas into exceptional digital experiences through innovative code and design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 button-secondary rounded-full transition-all hover:scale-105 duration-300 cursor-pointer"
            >
              Let's Talk
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 button-secondary rounded-full transition-all hover:scale-105 duration-300 cursor-pointer"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              About Me
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
              <div className="p-6 bg-white/10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <p className="text-xl text-gray-300 mb-6">
                  "Hello, Nama Saya Natanael, mahasiswa semester 5 Teknik Informatika di Universitas Advent Indonesia. Berasal dari kota Medan, saya kini menimba ilmu di Bandung. Minat yang mendalam pada dunia teknologi, khususnya di bidang pemrograman web, sebagai frontend developer, mendorong saya untuk terus belajar dan mengembangkan diri."
                </p>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex flex-col md:flex-row justify-center md:space-x-4">
                <span className="text-gray-400 mb-2 md:mb-0">
                  🔧 Teknologi: React, JavaScript, CSS
                </span>
                <span className="text-gray-400">
                  🌍 Lokasi: Bandung, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                data-aos="zoom-in"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
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
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Professional Journey
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-blue-400 mb-4">
                  {exp.company} • {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-gray-400">
                      <Award className="w-5 h-5 mt-1 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Languages I can use in programming
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-3 mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="space-y-4">
                  {skill.techs.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-1">
                        <span>{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail />,
                title: "Email",
                value: "nael@detamor.com",
                href: "mailto:nael@detamor.com",
              },
              {
                icon: <Github />,
                title: "GitHub",
                value: "@naeldetamor",
                href: "https://github.com",
              },
              {
                icon: <Linkedin />,
                title: "LinkedIn",
                value: "Nael Detamor",
                href: "https://linkedin.com",
              },
              {
                icon: <FileText />,
                title: "Resume",
                value: "Download CV",
                href: "/resume.pdf",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="text-gray-400">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        <p className="text-gray-400">
          © 2024 Natanael Detamor. Crafted with passion and code.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;