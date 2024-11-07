// eslint-disable-next-line no-unused-vars
import React from 'react'

const handleClick = (targetId) => {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

const Navbar=()=>{

    return(
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full z-10'>
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className='text-2xl font-bold hidden md:inline'>Agustinus Biotamalo</div>
                <div className='space-x-6'>
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#aboutMe" className="hover:text-gray-400">About Me</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
                <button onClick={() => handleClick('#contact')} className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
            </div>
        </nav>
    )
}

export default Navbar;

