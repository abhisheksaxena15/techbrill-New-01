import { Icon } from '@iconify/react';
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
];

export default function MobileTechToolsSection() {
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
          {/* Tab Selector - Desktop Vertical */}
          <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-500 hidden md:flex">
            {techTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${
                  activeTab === idx
                    ? "bg-blue-800 shadow-lg text-white" // active
                    : "hover:bg-blue-800/80 opacity-80 text-gray-200"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="flex items-center"><span className="mr-2 font-bold">{`0${idx+1}.`}</span> {tab.label}</span>
                {activeTab === idx && <span className="ml-2 text-lg">→</span>}
              </button>
            ))}
          </div>
          {/* Tab Selector - Mobile Horizontal */}
          <div className="bg-blue-900 text-white p-2 flex md:hidden flex-row gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
            {techTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${
                  activeTab === idx
                    ? "bg-blue-800 shadow text-white" // active
                    : "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
                }`}
                onClick={() => setActiveTab(idx)}
                style={{ textOverflow: 'ellipsis' }}
              >
                <span className="mr-2 font-bold">{`0${idx+1}.`}</span>
                <span className="truncate block w-full">{tab.label}</span>
              </button>
            ))}
          </div>
          {/* Right: Skills Grid - Desktop */}
          <div className="w-full bg-[#f5f6f8] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-1">
                    {skill.icon}
                  </div>
                  <span className="text-base font-semibold text-blue-900">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Carousel */}
          <div className="w-full bg-[#f5f6f8] dark:bg-white p-2 min-h-[110px] flex md:hidden items-center">
            <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2 min-w-[110px] max-w-[130px] snap-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition text-neutral-800"
                  style={{ flex: '0 0 60%' }}
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-1">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-900 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
