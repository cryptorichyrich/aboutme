// eslint-disable-next-line no-unused-vars
import React from "react";

const projects = [
  {
    name: "Damai Kasih Channel",
    technologies: "Jekyll, Markdown, Ruby, Developed Holy Bible for web, Church Documents, Catechism of Catholic Church web app, Church Canonic web app",   
    image: "damaikasihchannel.png",
    github: "https://damaikasihchannel.com",
  }, 
  {
    name: "Gatsby Garage",
    technologies: "Wordpress, GatsbyJs, ACF, GraphQL",   
    image: "gatsbygarage.png",
    github: "https://github.com/cryptorichyrich/gatsbygarageproject",
  },   
    {
        name: "Crossyncorder",
        technologies: "Vue.js, MYSQL, NodeJs, ExpressJs, Redis, Websocket, ZeroMQ (ZMQ), Docker, Monggo DB",   
        image: "crossyncorder.jpeg",
        github: "https://Crossyncorder.com",
    },    
  {
    name: "Fundedpropbx",
    technologies: "Wordpress, Elementor, Strattic, SEO, Google Analytics, SEO, Digital Analysis",   
    image: "fpbx.jpeg",
    github: "https://fundedpropbx.com",   
  },  {
    name: "Baxiamarkets",
    technologies: "Wordpress, Elementor, Strattic, N8N, Hubspot, Zoho CRM, SEO, Google Analytics, SEO, Digital Analysis",   
    image: "baxiamarkets.jpeg",
    github: "https://baxiamarkets.com",   
  },
  {
    name: "News Baxiamarkets",
    technologies: "Blogging, Market analysis, hubspot, content writing",
    image: "newsbaxia.jpeg",
    github: "https://news.baxiamarkets.com",
  },  
  {
    name: "FPBX X Digital Marketing",
    technologies: "Blogging, Market analysis, hubspot, content writing",
    image: "xfpbx.jpg",
    github: "https://x.com/FundedPropBX",
  },
  {
    name: "Baxiamarkets X Digital Marketing",
    technologies: "Blogging, Market analysis, hubspot, content writing",
    image: "xbxm.jpeg",
    github: "https://x.com/BaxiaMarkets",
  },
  {
    name: "TitanFx Business Support",
    technologies: "zendesk, risk management",
    image: "Titanfx.jpg",
    github: "https://titanfx.com/",
  },   
  {
    name: "Liquidity Connect Business Support",
    technologies: "Intercom, zendesk",
    image: "liquidityconnect.jpg",
    github: "https://liqc.com/",
  },  
  {
    name: "Traderscolo Business Support, Business Development",
    technologies: "Intercom, zendesk, whmcs, Wordpress",
    image: "traderscolo.jpg",
    github: "https://traderscolo.com/",
  },
  {
    name: "MT5 Volume Profile Indicator",
    technologies: "MQL5",
    image: "volumeProfile.jpeg",
    github: "https://www.mql5.com/en/market/product/106518",
  },       
  {
    name: "MT5 Anchored VWAP Indicator",
    technologies: "MQL5",
    image: "anchoredvwap.jpeg",
    github: "https://www.mql5.com/en/market/product/106391",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <a href={project.github} target="_blank" 
              rel="noopener noreferrer"><img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" /></a>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
