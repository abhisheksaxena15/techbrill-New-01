import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const techTabs = [
  {
    label: 'Mobile Applications',
    skills: [
      { name: 'iOS', icon: <Icon icon="logos:apple" className="w-7 h-7" /> },
      { name: 'Android', icon: <Icon icon="logos:android-icon" className="w-7 h-7" /> },
      { name: 'Flutter', icon: <Icon icon="logos:flutter" className="w-7 h-7" /> },
      { name: 'Kotlin', icon: <Icon icon="logos:kotlin-icon" className="w-7 h-7" /> },
      { name: 'React Native', icon: <Icon icon="logos:react" className="w-7 h-7" /> },
      { name: 'Xamarin', icon: <Icon icon="logos:xamarin" className="w-7 h-7" /> },
      { name: 'Ionic', icon: <Icon icon="logos:ionic-icon" className="w-7 h-7" /> },
      { name: 'NativeScript', icon: <Icon icon="logos:nativescript-icon" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'Frontend Development',
    skills: [
      
      { name: 'HTML5', icon: <Icon icon="logos:html-5" className="w-7 h-7" /> },
      { name: 'React.js', icon: <Icon icon="logos:react" className="w-7 h-7" /> },
      { name: 'Angular.js', icon: <Icon icon="logos:angular-icon" className="w-7 h-7" /> },
      { name: 'Vue.js', icon: <Icon icon="logos:vue" className="w-7 h-7" /> },
      { name: 'Next.js', icon: <Icon icon="logos:nextjs-icon" className="w-7 h-7" /> },
      { name: 'UI/UX', icon: <Icon icon="mdi:palette" className="w-7 h-7" /> },
      { name: 'Bootstrap', icon: <Icon icon="logos:bootstrap" className="w-7 h-7" /> },
      { name: 'JavaScript', icon: <Icon icon="logos:javascript" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'Backend Development',
    skills: [
      { name: 'Python', icon: <Icon icon="logos:python" className="w-7 h-7" /> },
      { name: 'Node.js', icon: <Icon icon="logos:nodejs-icon" className="w-7 h-7" /> },
      { name: 'Java', icon: <Icon icon="logos:java" className="w-7 h-7" /> },
      { name: 'Dot Net', icon: <Icon icon="logos:dotnet" className="w-7 h-7" /> },
      { name: 'PHP', icon: <Icon icon="logos:php" className="w-7 h-7" /> },
      { name: 'Laravel', icon: <Icon icon="logos:laravel" className="w-7 h-7" /> },
      { name: 'CodeIgniter', icon: <Icon icon="logos:codeigniter-icon" className="w-7 h-7" /> },
      { name: 'Go', icon: <Icon icon="logos:go" className="w-7 h-7" /> },
    ],
  },
  {
    label: 'Cloud & Database',
    skills: [
      { name: 'AWS', icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
      { name: 'Microsoft Azure', icon: <Icon icon="logos:microsoft-azure" className="w-7 h-7" /> },
      { name: 'Google Cloud', icon: <Icon icon="logos:google-cloud" className="w-7 h-7" /> },
      { name: 'Firebase', icon: <Icon icon="logos:firebase" className="w-7 h-7" /> },
      { name: 'My SQL', icon: <Icon icon="logos:mysql-icon" className="w-7 h-7" /> },
      { name: 'MongoDB', icon: <Icon icon="logos:mongodb-icon" className="w-7 h-7" /> },
      { name: 'PostgreSQL', icon: <Icon icon="logos:postgresql" className="w-7 h-7" /> },
      { name: 'SQL Server', icon: <Icon icon="logos:microsoft-sql-server" className="w-7 h-7" /> },
    ],
  },
  {
      label: "QA & Testing",
      skills: [
        { name: "Jest", icon: <Icon icon="logos:jest" className="w-7 h-7" /> },
        { name: "Mocha", icon: <Icon icon="logos:mocha" className="w-7 h-7" /> },
        { name: "Cypress", icon: <Icon icon="logos:cypress" className="w-7 h-7" /> },
        { name: "Selenium", icon: <Icon icon="logos:selenium" className="w-7 h-7" /> },
        { name: "Postman", icon: <Icon icon="logos:postman-icon" className="w-7 h-7" /> },
        { name: "Playwright", icon: <Icon icon="logos:playwright" className="w-7 h-7" /> },
        { name: "Cucumber", icon: <Icon icon="logos:cucumber" className="w-7 h-7" /> },
        { name: "Jira", icon: <Icon icon="logos:jira" className="w-7 h-7" /> },
        { name: "Bugzilla", icon: <Icon icon="mdi:bug
          " className="w-7 h-7" /> },
      ],
    },
];

export default function MobileTechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSkills = techTabs[activeTab].skills;

    const [openAccordion, setOpenAccordion] = useState(null);
  
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
      
      {/* Desktop Tab Selector */}
      <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-500 hidden md:flex">
        {techTabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`flex justify-between items-center px-4 py-3 rounded-md text-left transition-all font-semibold text-lg tracking-wide ${
              activeTab === idx
                ? "bg-blue-800 shadow-lg text-white"
                : "hover:bg-blue-800/80 opacity-80 text-gray-200"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            <span className="flex items-center">
              
              {tab.label}
            </span>
            {activeTab === idx && <span className="ml-2 text-lg">→</span>}
          </button>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden flex flex-col gap-5 w-full bg-white py-2">
        {techTabs.map((tab, idx) => (
          <div
            key={tab.label}
            className="bg-blue-900 rounded-lg shadow relative"
            style={{ borderRadius: "16px" }}
          >
            <button
              className="flex items-center gap-3 w-full px-4 py-4 text-white font-semibold text-left"
              style={{
                minHeight: "56px",
                fontSize: "1.13rem",
              }}
              onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
            >
              {/* <span className="mr-2 font-bold text-white">{`0${idx + 1}.`}</span> */}
              <span>{tab.label}</span>
              <span className="ml-auto">
                <Icon
                  icon={openAccordion === idx ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="w-6 h-6"
                />
              </span>
            </button>
            {openAccordion === idx && (
              <div className="bg-[#efefef] dark:bg-white px-4 py-4 rounded-b-lg transition-all duration-300">
                <div className="flex flex-col gap-3">
                  {tab.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm px-3 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow transition text-neutral-800"
                    >
                      <div className="w-8 h-8 min-w-[32px] flex items-center justify-center shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-base font-medium text-black">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Skills Grid */}
      <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
          {activeSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
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

    {/* Explore More Link */}
    <div className="mt-6 text-right">
      <a href="/technologies" className="text-red-600 font-semibold hover:underline">
        Explore More →
      </a>
    </div>
  </div>
</motion.div>

  );
}
