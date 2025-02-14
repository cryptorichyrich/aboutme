// eslint-disable-next-line no-unused-vars
import React from 'react';

const Certificates= [
  {
    name: "Next JS & WordPress: Build rapid NextJS sites with Next & WP",
    issuer: "Udemy",
    issuedDate: "Dec 2024",
    icon: "/udemy.png", // Replace with actual icon URL
  },  
  {
    name: "Gatsby JS v5 & Headless WordPress",
    issuer: "Udemy",
    issuedDate: "Nov 2024",
    icon: "/udemy.png", // Replace with actual icon URL
  },  
  {
    name: "B2B Sales Objections Simplified",
    issuer: "Udemy",
    issuedDate: "Nov 2024",
    icon: "/udemy.png", // Replace with actual icon URL
  },
  {
    name: "Create B2B Sales Cold Calling Scripts & Value Propositions",
    issuer: "Udemy",
    issuedDate: "Nov 2024",
    icon: "/udemy.png", // Replace with actual icon URL
  },  
  {
    name: "Email Marketing",
    issuer: "HubSpot Academy",
    issuedDate: "Nov 2024",
    icon: "/hubspot-academy.png",
  },
  {
    name: "Learn Product Marketing: Go-To-Market Strategy with Projects",
    issuer: "Udemy",
    issuedDate: "Nov 2024",
    icon: "/udemy.png",
  },
  {
    name: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
    issuer: "Udemy",
    issuedDate: "Nov 2024",
    icon: "/udemy.png",
  },
  {
    name: "SEO II",
    issuer: "HubSpot Academy",
    issuedDate: "Nov 2024",
    icon: "/hubspot-academy.png",
  },
  {
    name: "The DevOps Essentials - The Handbook",
    issuer: "Udemy",
    issuedDate: "Nov 2024",
    icon: "/udemy.png",
  },  
  {
    name: "100% Data Backed Inbound Marketing Strategy -- Scientifically guarantees Rapid increases in Website Traffic and Leads",
    issuer: "Udemy",
    issuedDate: "Oct 2024",
    icon: "/udemy.png",
  },   
  {
    name: "AWS for Beginner",
    issuer: "Great Learning Support",
    issuedDate: "Oct 2024",
    icon: "/great-learning-support.png",
  },     
  {
    name: "Cloud Computing Architecture",
    issuer: "Great Learning Support",
    issuedDate: "Oct 2024",
    icon: "/great-learning-support.png",
  },     
  {
    name: "Introduction to DevOps",
    issuer: "Great Learning Support",
    issuedDate: "Oct 2024",
    icon: "/great-learning-support.png",
  },   
  {
    name: "Email Marketing with Mailchimp + Sales Funnels & Copywriting",
    issuer: "Udemy",
    issuedDate: "sept 2024",
    icon: "/udemy.png",
  },      
  {
    name: "Docker & Kubernetes: The Practical Guide [2024 Edition]",
    issuer: "Udemy",
    issuedDate: "Aug 2024",
    icon: "/udemy.png",
  },        
  {
    name: "Dive Into Kubernetes - Containers, Docker and Kubernetes",
    issuer: "Udemy",
    issuedDate: "June 2024",
    icon: "/udemy.png",
  },
  {
    name: "Beginners Guide to Google Tag Manager (GTM) Course",
    issuer: "Udemy",
    issuedDate: "Dec 2022",
    icon: "/udemy.png",
  },
  {
    name: "Flutter iOS and Android",
    issuer: "Udemy",
    issuedDate: "Nov 2020",
    icon: "/udemy.png",
  },
  {
    name: "Flutter iOS and Android",
    issuer: "Udemy",
    issuedDate: "Nov 2020",
    icon: "/udemy.png",
  },
  {
    name: "Project Management: Master Project Management - PMP/PMI",
    issuer: "Udemy",
    issuedDate: "Sep 2020",
    icon: "/udemy.png",
  },
  {
    name: "Sales Management Training: Strategies for Developing a Successful Modern Sales Team",
    issuer: "Hubspot Academy",
    issuedDate: "Sep 2020",
    icon: "/hubspot-academy.png",
  },
  {
    name: "Hubspot Inbound Certified",
    issuer: "Hubspot Academy",
    issuedDate: "Sep 2020",
    icon: "/hubspot-academy.png",
  },      
  {
    name: "Inbound Sales",
    issuer: "Hubspot Academy",
    issuedDate: "Sep 2020",
    icon: "/hubspot-academy.png",
  },
  {
    name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    issuer: "Udemy",
    issuedDate: "Sep 2020",
    icon: "/udemy.png",
  },
  {
    name: "Project Management practical guide for all industries",
    issuer: "Udemy",
    issuedDate: "Sep 2020",
    icon: "/udemy.png",
  },
  {
    name: "The Complete Investment Banking Course",
    issuer: "Udemy",
    issuedDate: "Sep 2020",
    icon: "/udemy.png",
  },
  {
    name: "Complete Machine Learning Course",
    issuer: "Udemy",
    issuedDate: "August 2020",
    icon: "/udemy.png",
  },
  {
    name: "Customer Service",
    issuer: "Udemy",
    issuedDate: "August 2020",
    icon: "/udemy.png",
  },    
];

const CertificateList = () => {
  return (
<div className="bg-black text-white py-20" id="certificate">
  <div className="container mx-auto px-8 md:px-16 lg:px-24">
    <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
    <div className="space-y-6">
      {Certificates.map((Certificate, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md"
        >
          {/* Icon */}
          <img
            src={Certificate.icon}
            alt={`${Certificate.name} Icon`}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md mr-6"
          />
          {/* Details */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {Certificate.name}
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Issuer: {Certificate.issuer}
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Issued: {Certificate.issuedDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default CertificateList;
