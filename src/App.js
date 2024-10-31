import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Download, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    frontend: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Vue', 'Redux', 'Sass', 'Figma'],
    backend: ['Python', 'Django', 'Node.js', 'Flask', 'REST APIs', 'PHP', 'Java', 'Express.js'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'NoSQL'],
    cloud: ['AWS', 'S3', 'EFS', 'RedShift'],
    tools: ['Git', 'GitLab', 'Jenkins', 'DevOps', 'Agile', 'Sprint Planning'],
    other: ['Machine Learning', 'Blockchain', 'Data Science', 'UI/UX']
  };

  const projects = [
    {
      title: "AI-Powered Image Manipulation Platform (SaaS)",
      description: "An AI-driven platform for image processing, offering tools like image restoration, recoloring, object removal, generative fill, and background extraction. This SaaS web application integrates secure payment systems and ensures a smooth user experience across devices. Users can manage transformations, search through images, and handle transactions via a credits system (using Stripe). Community features allow users to showcase, update, or delete transformations.",
      technologies: ["React", "Node.js", "AI/ML", "Stripe", "MongoDB"],
      github: "https://github.com/Scientistlucy/VisionaryAI-"
    },
    {
      title: "Restaurant Management System (Laravel)",
      description: "A Laravel-based system designed to streamline restaurant operations. Features include menu management, order processing, and customer engagement through a user-friendly interface. It allows easy handling of reservations, billing, and customer reviews, improving restaurant efficiency.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/Scientistlucy/Restaurant"
    },
    {
      title: "E-Commerce Website for Selling Shoes",
      description: "A fully functional e-commerce platform tailored for shoe sales. The site includes secure user authentication, a comprehensive product catalog, a shopping cart, and a seamless checkout process. Customers can track orders, manage profiles, and leave reviews, while administrators oversee orders, inventory, and user management through a detailed admin panel. It also features a responsive design for mobile users and social media integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "https://github.com/Scientistlucy/commercial-project"
    }
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Jumbosoft Technologies",
      period: "01/2023 - 04/2024",
      location: "Nairobi, Kenya"
    },
    {
      role: "Software Engineer Intern",
      company: "Hemlab Consultants (FSI)",
      period: "07/2022 - 12/2022",
      location: "Nairobi, Kenya"
    },
    {
      role: "Software Developer Intern",
      company: "Tri Tek",
      period: "01/2022 - 06/2022",
      location: "Nairobi, Kenya"
    }
  ];

  // Rest of the component remains the same...
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl">Lucy Mwaura</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-white">
  <img src="/images/1730382239509.jpg" alt="Lucy Mwaura" className="w-full h-full object-cover" />
</div>


          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Developer</h1>
            <p className="text-lg mb-6">
              I am Lucy Mwaura, a Full-Stack Developer with a strong foundation in software engineering and web development. I have honed my skills through hands-on experience at various companies, including Jumbosoft Technologies and Hemlab Consultants, where I worked on developing and maintaining scalable applications.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-gray-100">
                Contact Me
              </a>
              <a href="/mnt/data/Lucy Mwaura CV-2-2.pdf" className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 flex items-center" download>
  <Download size={18} className="mr-2" /> Download CV
</a>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            My expertise spans front-end and back-end technologies, including JavaScript, Java, PHP, and Python, alongside frameworks like React, Node.js, Flask, and Express.js. I am passionate about building efficient, user-friendly applications and have experience working in agile environments. Always eager to learn, I embrace challenges and strive for continuous improvement in all aspects of development.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 ml-4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500">{exp.period}</p>
                <p className="text-gray-500">{exp.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Github size={18} className="mr-2" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to reach out for collaborations 
          </p>
          <div className="flex justify-center space-x-8">
  <a href="tel:+254796776208" className="text-gray-600 hover:text-blue-600">
    +254 796 776 208
  </a>
  <span className="text-gray-600">
    wanjikul598@gmail.com
  </span>
  <a href="https://github.com/Scientistlucy" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
    <Github size={24} />
  </a>
  <a href="https://www.linkedin.com/in/lucy-mwaura-2636b1215/" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
    <Linkedin size={24} />
  </a>
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Lucy Mwaura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;