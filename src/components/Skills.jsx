// eslint-disable-next-line no-unused-vars
import React from 'react';

const skills = [
    "Vue3",
    "React",
    "NodeJs",
    "ExpressJs",
    "Laravel",
    "Javascript",
    "PHP",
    "Wordpress",
    "Elementor",
    "MonggoDB",
    "Mysql",
    "Flutter",
    "GTM",
    "Hubspot",
    "Redis",
    "Docker",
    "Kubernetes",
    "Flask",
    "Jenkins",
    "N8N",
    "Monggo DB",
    "Bootstrap",
    "Tailwind",
    "Ubuntu",
    "Git",
    "Github",
    "GitActions",
    "Jira",
    "Asana",
    "Vite",
    "Zoho",
    "Zendesk",
    "Hubspot",
    "Electron","MQL4", "MQL5", "cTrader","Pinescript"
];

const SkillsTagList = () => {
  return (
    <div className="bg-black p-10 text-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Technology Stacks</h2>
      <div className="textWhite"><p className="text-white mb-12">The list covers both personal study projects and commercial endeavors, focusing only on technologies engaged with in the past four years.</p></div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-4 w-96">
            {skills.map((skill, index) => (
            <button
                key={index}
                className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition duration-200"
            >
                {skill}
            </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTagList;
