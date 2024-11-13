/* eslint-disable react/prop-types */
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
  "Strattic",
  "GraphQL",
  "ACF",
  "MongoDB",
  "MySQL",
  "Flutter",
  "GTM",
  "Hubspot",
  "Redis",
  "Docker",
  "Kubernetes",
  "Flask",
  "Jenkins",
  "N8N",
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
  "Electron",
  "MQL4",
  "MQL5",
  "cTrader",
  "Pinescript"
];

// eslint-disable-next-line react/prop-types
function Skill(props) {
  return (
    <button key={props.key}
      className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-300 transition duration-200"
    >
      {props.skill}
    </button>
  );
}

const SkillsTagList = () => {
  return (
    <div className="bg-black p-10 text-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Technology Stacks
      </h2>
      <div className="textWhite">
        <p className="text-white mb-12">
          The list covers both personal study projects and commercial endeavors, focusing only on technologies engaged with in the past four years.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsTagList;
