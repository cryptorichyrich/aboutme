// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const handleClick = (targetId) => {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);

  return (
    <><div id="home" style={{top:"0",width:"100%",height:"5px"}}></div><nav className="bg-black text-white fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-16 lg:px-24">
      <div className={`${isOpen && isMobile ?'hidden':''} text-2xl font-bold`}><a href="/">Agustinus Biotamalo</a></div>

        {/* Hamburger button */}
        {!isOpen && (
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        )}

        {/* Menu items */}
        <div className={`flex-col items-center md:flex-row md:flex md:items-center md:space-x-6 space-y-4 md:space-y-0 ${isOpen ? 'flex w-full' : 'hidden'} md:block`}>
          {isOpen && (<div className="md:hidden text-2xl font-bold"><a href="/">Agustinus Biotamalo</a></div>)}
          <a href="#home" className={`hover:text-gray-400 text-center ${isOpen ? 'w-full' : ''}`} onClick={() => setIsOpen(false)}>Home</a>
          <a href="#aboutMe" className={`hover:text-gray-400 text-center ${isOpen ? 'w-full' : ''}`} onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#services" className={`hover:text-gray-400 text-center ${isOpen ? 'w-full' : ''}`} onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" className={`hover:text-gray-400 text-center ${isOpen ? 'w-full' : ''}`} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#career" className={`hover:text-gray-400 text-center ${isOpen ? 'w-full' : ''}`} onClick={() => setIsOpen(false)}>Career</a>
          <a href="#contact" className={`hover:text-gray-400 text-center ${isOpen ? 'w-full' : ''}`} onClick={() => setIsOpen(false)}>Contact</a>
          <button
            onClick={() => {
              handleClick('#contact');
              setIsOpen(false);
            } }
            className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-full text-white transform transition-transform duration-300 hover:scale-105 text-center"
          >
            Whatsapp Me
          </button>
        </div>

        {/* Close (X) button on mobile */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </nav></>
  );
};

export default Navbar;
