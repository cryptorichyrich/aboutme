import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt , FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0A${message}`;
    
    window.open(`https://wa.me/6281398253186?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Whatsapp Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-400 to-pink-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-blue-400 mr-2' />
                <a href="mailto:fxwisdom1@gmail.com" className='hover:underline'>
                    fxwisdom1@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaWhatsapp className='inline-block text-blue-400 mr-2' />
                <a href="https://wa.me/6281398253186?text=Hello there!" target='_blank'><span>+6281398253186</span></a>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-blue-400 mr-2' />
                <span>Jalan Bhineka, gang melati no 10. RT5 RW 3, Bekasi, Jawa Barat, 17431</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-blue-400'
                      placeholder='Enter Your Name'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-blue-400'
                      placeholder='Enter Your Email'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-blue-400'
                      rows="5"
                      placeholder='Enter Your Message'
                      required
                    />
                </div>
                <button type="submit" className='bg-gradient-to-r from-blue-400 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                  Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
