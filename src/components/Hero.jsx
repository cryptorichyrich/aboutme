// eslint-disable-next-line no-unused-vars
import {React} from 'react'
import HeroImage from '../assets/image.png'
import Typewriter from './Typewriter'
import Resume from '../assets/Bio_October_2024_PM_FSD_Resume.pdf'
const handleClick = (targetId) => {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
function Hero() {
  return (
    <div className='bg-black text-white text-center py-16' style="margin-top:50px" id="home">
        <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500'>Agustinus Biotamalo Lumbantoruan</span>
            <Typewriter/>
        </h1>
        <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>
        Innovative and experienced developers in web technologies for financial institutions i.e. Retail Banks, Commercial Banks and Retail Forex Brokerages.
<br></br>Planning and delivering quality finished and verified products to the owner i.e. CXO
        </p>
        <div className='mt-8 space-x-4'>
            <button onClick={() => handleClick('#contact')} className="bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                Whatsapp me
            </button>
            <a href={Resume} download="Bio_October_2024_PM_FSD_Resume.pdf" className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                Resume
            </a>
        </div>
    </div>
  )
}

export default Hero