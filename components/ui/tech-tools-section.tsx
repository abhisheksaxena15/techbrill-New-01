"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAws, FaPython, FaGitAlt, FaDocker, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiRedux, SiExpress, SiKubernetes, SiSass, SiVercel, SiJupyter, SiTensorflow } from "react-icons/si";
import { IconType } from "react-icons";
import { Icon } from '@iconify/react';

const domainSkills: Record<string, string[]> = {
  "Frontend Development": [
    "React", "HTML5", "CSS3", "TypeScript", "Redux", "Tailwind CSS", "Sass", "Vercel"
  ],
  "Mobile Appplications": [
    "iOS", "Flutter", "React Native", "Native Script", "Android", "Kotlin", "PhoneGap"
  ],
  "UI/UX & Styling": [
    "Figma", "Tailwind CSS", "CSS3", "Sass"
  ],
  "Backend Development": [
    "Node.js", "Express.js", "MongoDB", "Database", "TypeScript"
  ],
  "DevOps & Deployment": [
    "AWS", "Docker", "Kubernetes", "Git", "Vercel"
  ],
};

const icons: Record<string, IconType> = {
  "React": FaReact,
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "TypeScript": SiTypescript,
  "Redux": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Sass": SiSass,
  "Vercel": SiVercel,
  "Figma": FaFigma,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "Database": FaDatabase,
  "AWS": FaAws,
  "Docker": FaDocker,
  "Kubernetes": SiKubernetes,
  "Git": FaGitAlt,
};

const techTabs = [
  {
    label: 'Frontend Development',
    skills: [
      { name: 'React', icon: <Icon icon="logos:react" className="w-7 h-7" /> },
      { name: 'HTML5', icon: <Icon icon="logos:html-5" className="w-7 h-7" /> },
      { name: 'CSS3', icon: <Icon icon="logos:css-3" className="w-7 h-7" /> },
      { name: 'TypeScript', icon: <Icon icon="logos:typescript-icon" className="w-7 h-7" /> },
      { name: 'Redux', icon: <Icon icon="logos:redux" className="w-7 h-7" /> },
      { name: 'Tailwind CSS', icon: <Icon icon="logos:tailwindcss-icon" className="w-7 h-7" /> },
      { name: 'Sass', icon: <Icon icon="logos:sass" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'UI/UX & Styling',
    skills: [
      { name: 'Figma', icon: <Icon icon="logos:figma" className="w-7 h-7" /> },
      { name: 'Adobe XD', icon: <Icon icon="logos:adobe-xd" className="w-7 h-7" /> },
      { name: 'Sketch', icon: <Icon icon="logos:sketch" className="w-7 h-7" /> },
      { name: 'Framer', icon: <Icon icon="logos:framer" className="w-7 h-7" /> },
      { name: 'Zeplin', icon: <Icon icon="logos:zeplin" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <Icon icon="logos:nodejs-icon" className="w-7 h-7" /> },
      { name: 'Express.js', icon: <Icon icon="logos:express" className="w-7 h-7" /> },
      { name: 'MongoDB', icon: <Icon icon="logos:mongodb-icon" className="w-7 h-7" /> },
      { name: 'PostgreSQL', icon: <Icon icon="logos:postgresql" className="w-7 h-7" /> },
      { name: 'MySQL', icon: <Icon icon="logos:mysql-icon" className="w-7 h-7" /> },
      { name: 'GraphQL', icon: <Icon icon="logos:graphql" className="w-7 h-7" /> },
      { name: 'Prisma', icon: <Icon icon="logos:prisma" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'DevOps & Deployment',
    skills: [
      { name: 'Docker', icon: <Icon icon="logos:docker-icon" className="w-7 h-7" /> },
      { name: 'Kubernetes', icon: <Icon icon="logos:kubernetes" className="w-7 h-7" /> },
      { name: 'AWS', icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
      { name: 'Vercel', icon: <Icon icon="logos:vercel-icon" className="w-7 h-7" /> },
      { name: 'Netlify', icon: <Icon icon="logos:netlify" className="w-7 h-7" /> },
      { name: 'GitHub Actions', icon: <Icon icon="logos:github-actions" className="w-7 h-7" /> },
      { name: 'Jenkins', icon: <Icon icon="logos:jenkins" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'QA & Testing',
    skills: [
      { name: 'Jest', icon: <Icon icon="logos:jest" className="w-7 h-7" /> },
      { name: 'Mocha', icon: <Icon icon="logos:mocha" className="w-7 h-7" /> },
      { name: 'Cypress', icon: <Icon icon="logos:cypress" className="w-7 h-7" /> },
      { name: 'Selenium', icon: <Icon icon="logos:selenium" className="w-7 h-7" /> },
      { name: 'Postman', icon: <Icon icon="logos:postman-icon" className="w-7 h-7" /> },
      { name: 'Playwright', icon: <Icon icon="logos:playwright" className="w-7 h-7" /> },
      { name: 'Cucumber', icon: <Icon icon="logos:cucumber" className="w-7 h-7" /> },
    ],
  },
];

export default function TechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSkills = techTabs[activeTab].skills;
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
          {/* Left: Domain Tabs */}
          <div className="bg-blue-900 text-white p-4 flex flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-900">
            {techTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-medium ${
                  activeTab === idx
                    ? "bg-blue-900 shadow-lg"
                    : "hover:bg-blue-900/80 opacity-80"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                <span>{tab.label}</span>
                {activeTab === idx && <span className="ml-2 text-lg">→</span>}
              </button>
            ))}
          </div>
          {/* Right: Skills Grid */}
          <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-900 hover:shadow-md transition min-h-[56px] text-neutral-800"
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <span className="text-base font-medium text-black">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 