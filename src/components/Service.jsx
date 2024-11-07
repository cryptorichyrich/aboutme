// eslint-disable-next-line no-unused-vars
import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
  {
    id: 7,
    title: "Business Support",
    description: "Providing helpful support after sales service",
  },  
  {
    id: 8,
    title: "Business Research",
    description: "Business competitions research and market trends.",
  },  
  {
    id: 9,
    title: "Business Development",
    description: "Improve business efficiency, productivity, and profitability.",
  },    
  {
    id: 9,
    title: "Expert Advisor Development",
    description: "Develop trading bot for MT4, MT5 and cTrader",
  },   
  {
    id: 9,
    title: "Technical Indicator Development",
    description: "Develop trading bot for MT4, MT5, cTrader and tradingview",
  },   
  {
    id: 9,
    title: "Trading Mentorship",
    description: "Give training and mentoring to private traders live",
  },   
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-600 to-pink-400"
              >
                {/* {service.id} */}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-400 to-pink-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              {/* <a href="#" className="mt-4 inline-block text-blue-400 hover:text-pink-500">Read More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
