'use client';
import React, { useRef } from 'react';
import Image from 'next/image'; 
import Card from './components/Cards'; 
import Project from './components/Projects';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub, FaRegCommentDots } from 'react-icons/fa';

function Homepage() {
  const cardsData = [
    {title: "C++", description: "Expertise in object-oriented programming and building efficient, performance-driven applications."},
    {title: "Java | Java Swing", description: "Skilled in Java for back-end development and GUI creation with Java Swing for interactive applications."},
    {title: "Javascript", description: "Proficient in JavaScript for dynamic, responsive web interactions and enhancing user experience."},
    {title: "HTML", description: "Strong foundation in HTML for structuring and presenting web content with semantic clarity."},
    {title: "CSS", description: "Skilled in CSS for creating visually appealing, responsive, and animated web interfaces."},
    {title: "JS Next", description: "Knowledge of modern JavaScript frameworks and libraries for cutting-edge, scalable web development."},
    {title: "Tailwind CSS", description: "Efficient in using Tailwind CSS for rapid UI development with a utility-first approach."},
    {title: "My SQL", description: "Proficient in MySQL for database management, queries, and data optimization."},
    {title: "Video Editing", description: "Creative skills in video editing for storytelling, brand promotion, and visual content creation."},
    {title: "Graphics Designer", description: "Experienced in creating visually impactful designs using tools like Adobe Photoshop and Corel Draw."},
    {title: "MS Office Suite", description: "Strong command over MS Office Suite for documentation, presentations, and data analysis."},
  ];

  const projectsData = [
    {title: "C++", description: "Expertise in object-oriented programming and building efficient, performance-driven applications."},
    {title: "Java | Java Swing", description: "Skilled in Java for back-end development and GUI creation with Java Swing for interactive applications."},
    {title: "Javascript", description: "Proficient in JavaScript for dynamic, responsive web interactions and enhancing user experience."},
    {title: "HTML", description: "Strong foundation in HTML for structuring and presenting web content with semantic clarity."},
    {title: "CSS", description: "Skilled in CSS for creating visually appealing, responsive, and animated web interfaces."},
    {title: "JS Next", description: "Knowledge of modern JavaScript frameworks and libraries for cutting-edge, scalable web development."},
    {title: "Tailwind CSS", description: "Efficient in using Tailwind CSS for rapid UI development with a utility-first approach."},
    {title: "My SQL", description: "Proficient in MySQL for database management, queries, and data optimization."},
    {title: "Video Editing", description: "Creative skills in video editing for storytelling, brand promotion, and visual content creation."},
    {title: "Graphics Designer", description: "Experienced in creating visually impactful designs using tools like Adobe Photoshop and Corel Draw."},
    {title: "MS Office Suite", description: "Strong command over MS Office Suite for documentation, presentations, and data analysis."},
  ];

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Home Section */}
      <div ref={homeRef} className='text-3xl pt-5 ml-8 font-bold text-white'>
        <h1>Younas <span className='text-sky-500'>Khan</span></h1>
      </div>

      <div className='flex justify-center'>
        <nav className='w-full flex items-center px-8 text-white font-semibold'>
          <ul className='flex gap-12 sm:gap-16 lg:gap-24 text-xl mx-auto'>
            <li onClick={() => scrollToSection(homeRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Home</li>
            <li onClick={() => scrollToSection(aboutRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>About</li>
            <li onClick={() => scrollToSection(skillsRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Skills</li>
            <li onClick={() => scrollToSection(projectsRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Projects</li>
            <li onClick={() => scrollToSection(contactRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Contact</li>
          </ul>
          <button className='border px-8 py-1 rounded-lg bg-sky-500 text-white transition-all duration-300 transform hover:scale-125'>CV</button>
        </nav>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col sm:flex-row items-center h-screen text-white gap-5'>
        <div className='ml-5 sm:ml-20 flex flex-col w-full sm:w-1/2 text-left'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-3 text-sky-500'>Welcome To My Portfolio</h1>
          <p className='text-xl text-justify font-bold sm:w-3/4 lg:w-2/3'>Hello! I&apos;m Muhammad Younas, a passionate Web Developer and Designer. Explore my projects and skills, and feel free to get in touch!</p>
          <button className='text-center px-5 py-3 bg-sky-500 text-xl w-32 border rounded-lg mt-10 font-bold transition-all duration-300 transform hover:scale-125' style={{fontFamily: 'unset'}}>Hire Me</button>
        </div>

        <div className='mt-5 sm:mt-0'>
          <Image 
            src="/WhatsApp_Image_2024-09-09_at_03.19.43_86566a96.jpg" 
            alt="Profile Picture" 
            width={350} 
            height={350} 
            className="ml-0 sm:ml-16 sm:-mt-20 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg" 
          />
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className='h-screen ml-5 sm:ml-20 mr-5 sm:mr-20 flex flex-col justify-center items-center'>
        <h1 className='text-4xl sm:text-5xl text-sky-500 font-bold mb-8'>About Me</h1>
        <p className='text-xl sm:text-justify leading-loose font-semibold sm:w-3/4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum voluptates quas id, dolorem debitis...
        </p>
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-10 ml-5 sm:ml-10 mr-5 sm:mr-10'>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-10 ml-5 sm:ml-10 mr-5 sm:mr-10'>
        {projectsData.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} />
        ))}
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className='flex flex-col items-center justify-center mt-20 sm:mt-40 mb-40'>
        <h1 className='text-4xl sm:text-5xl text-sky-500 font-bold mb-8'>Contact Me</h1>
        <p className='text-xl text-center sm:text-justify font-bold mt-2'>You can connect with me through my social media:</p>
        <div className='flex gap-5 mt-5'>
          <a href="https://wa.me/923340354819" target="_blank" rel="noopener noreferrer" className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125'>
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.linkedin.com/in/mr-khan-65b123241" target="_blank" rel="noopener noreferrer" className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125'>
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/younas._k._k_/" target="_blank" rel="noopener noreferrer" className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125'>
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/YounasKhan65" target="_blank" rel="noopener noreferrer" className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125'>
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/mr-khan-65b123241" target="_blank" rel="noopener noreferrer" className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125'>
            <FaRegCommentDots size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
