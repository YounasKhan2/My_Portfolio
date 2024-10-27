'use client';
import React, { useRef } from 'react';
import Card from './components/Cards'; 
import Project from './components/Projects';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub, FaRegCommentDots } from 'react-icons/fa';


function Homepage() {

  const cardsData = [
    {title: "C++", description: "Expertise in object-oriented programming and building efficient, performance-driven applications."},
    {title: "Java | Java Swing", description: "Skilled in Java for back-end development and GUI creation with Java Swing for interactive applications."},
    {title: "Javascript",description: "Proficient in JavaScript for dynamic, responsive web interactions and enhancing user experience."},
    {title: "HTML",description: "Strong foundation in HTML for structuring and presenting web content with semantic clarity."},
    {title: "CSS", description: "Skilled in CSS for creating visually appealing, responsive, and animated web interfaces."},
    {title: "JS Next",description: "Knowledge of modern JavaScript frameworks and libraries for cutting-edge, scalable web development."},
    {title: "Tailwind CSS",description: "Efficient in using Tailwind CSS for rapid UI development with a utility-first approach."},
    {title: "My SQL",description: "Proficient in MySQL for database management, queries, and data optimization"},
    {title: "VIdeo Editing",description: "Creative skills in video editing for storytelling, brand promotion, and visual content creation."},
    {title: "Graphics Designer",description: " Experienced in creating visually impactful designs using tools like Adobe Photoshop and Corel Draw."},
    {title: "Ms Office Suit",description: "Strong command over MS Office Suite for documentation, presentations, and data analysis."},
  ];

  const projectsData = [
    {title: "C++",description: "Expertise in object-oriented programming and building efficient, performance-driven applications."},
    {title: "Java | Java Swing",description: "Skilled in Java for back-end development and GUI creation with Java Swing for interactive applications."},
    {title: "Javascript",description: "Proficient in JavaScript for dynamic, responsive web interactions and enhancing user experience."},
    {title: "HTML", description: "Strong foundation in HTML for structuring and presenting web content with semantic clarity."},
    {title: "CSS",description: "Skilled in CSS for creating visually appealing, responsive, and animated web interfaces."},
    {title: "JS Next",description: "Knowledge of modern JavaScript frameworks and libraries for cutting-edge, scalable web development."},
    {title: "Tailwind CSS",description: "Efficient in using Tailwind CSS for rapid UI development with a utility-first approach."},
    {title: "My SQL",description: "Proficient in MySQL for database management, queries, and data optimization"},
    {title: "VIdeo Editing",description: "Creative skills in video editing for storytelling, brand promotion, and visual content creation."},
    {title: "Graphics Designer",description: " Experienced in creating visually impactful designs using tools like Adobe Photoshop and Corel Draw."},
    {title: "Ms Office Suit",description: "Strong command over MS Office Suite for documentation, presentations, and data analysis."},
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
          <ul className='flex gap-24 text-xl mx-auto'>
            <li onClick={() => scrollToSection(homeRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Home</li>
            <li onClick={() => scrollToSection(aboutRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>About</li>
            <li onClick={() => scrollToSection(skillsRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Skills</li>
            <li onClick={() => scrollToSection(projectsRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Projects</li>
            <li onClick={() => scrollToSection(contactRef)} className='hover:text-sky-500 transition-all duration-300 transform hover:scale-125 cursor-pointer'>Contact</li>
          </ul>
          <button className='border px-8 py-1 rounded-lg bg-sky-500 text-white transition-all duration-300 transform hover:scale-125'>CV</button>
        </nav>
      </div>

      <div className='flex items-center h-screen text-white gap-5'>
        <div className='ml-20 flex flex-col w-1/2 text-left'>
          <h1 className='text-5xl font-bold mb-3 text-sky-500'>Welcome To My Portfolio</h1>
          <p className='text-xl text-justify font-bold' style={{width: '550px'}}>Hello! I'm Muhammad Younas, a passionate Web Developer and Designer. Explore my projects and skills, and feel free to get in touch!</p>
          <button className='text-center px-5 py-3 bg-sky-500 text-xl w-32 border rounded-lg mt-10 font-bold transition-all duration-300 transform hover:scale-125' style={{fontFamily: 'unset'}}>Hire Me</button>
        </div>

        <div style={{ width: '350px', height: '350px' }}>
          <img src="/WhatsApp Image 2024-09-09 at 03.19.43_86566a96.jpg" alt=""
            className="ml-96 -mt-20 border rounded-lg transition-all duration-500 transform hover:scale-105 shadow-[0px_0px_15px_5px_rgba(14,165,233,0.8),0px_0px_60px_15px_rgba(14,165,233,0.5),0px_0px_100px_30px_rgba(14,165,233,0.3)]"/>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className='h-screen ml-20 mr-20 flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-sky-500 font-bold mb-8'>About Me</h1>
        <p className='text-xl text-justify leading-loose font-semibold'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum voluptates quas id, dolorem debitis. Reprehenderit, quia! Tenetur quidem sequi neque sunt assumenda est, quasi sed eum nostrum nemo laboriosam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint, illo optio corrupti vel dicta inventore quia libero magnam odio. Saepe aliquam eos beatae facilis commodi iure corporis aperiam aspernatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil earum odit aspernatur, fugit ipsum aliquid, blanditiis nostrum libero natus velit eos consectetur laborum dolorem hic? Sapiente suscipit eligendi a.
        </p>
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-screen p-10 ml-10 mr-10 gap-5 mb-6'>
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-screen p-10 ml-10 mr-10 gap-5 mb-6'>
        {projectsData.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} />
        ))}
      </div>

      <div ref={contactRef} className='h-screen flex flex-col pt-72 items-center'>
        <h1 className='text-5xl text-sky-500 font-bold'>Contacts</h1>
        <p className='font-semibold text-l mb-10 text-sky-500'>Get in touch with me via email or find me on social media. <span className='text-red-600'>Checkout GitHub for projects.</span></p>
        <div className='flex gap-10'>
          <a href="https://wa.me/+923130812324" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='text-4xl text-green-500 transition-transform duration-300 hover:scale-125 hover:text-sky-500' />
          </a>
          <a href="https://www.linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-4xl text-blue-700 transition-transform duration-300 hover:scale-125 hover:text-sky-500' />
          </a>
          <a href="https://www.instagram.com/your_profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-4xl text-pink-600 transition-transform duration-300 hover:scale-125 hover:text-sky-500' />
          </a>
          <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-4xl text-gray-800 transition-transform duration-300 hover:scale-125 hover:text-sky-500' />
          </a>
          <a href="mailto:younaskk120@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaRegCommentDots className='text-4xl text-sky-500 transition-transform duration-300 hover:scale-125 hover:text-sky-500' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;