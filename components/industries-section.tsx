import React from "react";
import {
  FaHeartbeat,
  FaMoneyBillWave,
  FaUtensils,
  FaShoppingCart,
  FaCarBattery,
  FaCloud,
  FaPlaneDeparture,
  FaMusic,
  FaUserFriends,
  FaComments,
  FaTruckMoving,
  FaBookOpen,
} from "react-icons/fa";
import AnimatedText from "./animated-text";

const industries = [
  { label: "Healthcare", icon: <FaHeartbeat size={28} /> },
  { label: "Finance", icon: <FaMoneyBillWave size={28} /> },
  { label: "Restaurant", icon: <FaUtensils size={28} /> },
  { label: "eCommerce", icon: <FaShoppingCart size={28} /> },
  { label: "Electric Vehicle (EV)", icon: <FaCarBattery size={28} /> },
  { label: "SaaS", icon: <FaCloud size={28} /> },
  { label: "Travel", icon: <FaPlaneDeparture size={28} /> },
  { label: "Entertainment", icon: <FaMusic size={28} /> },
  { label: "On-Demand", icon: <FaUserFriends size={28} /> },
  { label: "Social Media", icon: <FaComments size={28} /> },
  { label: "Logistics", icon: <FaTruckMoving size={28} /> },
  { label: "Education", icon: <FaBookOpen size={28} /> },
];

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 dark:bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Industry Expertise
          </h3>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Serving <span className="italic text-blue-800 dark:text-blue-200">Key Industries</span> with Tailored Technology Solutions
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
          <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
            A Unified Vision That Caters To Diverse Industry Demands
          </p>
        </div>

        <div className="flex justify-end mb-8 gap-4">
          {/* <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
            A Unified Vision That Caters To
            <br />
            Diverse Industry Demands
          </h3> */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition self-start md:self-auto">
            Explore More In Industries
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <button
              key={industry.label}
              className="flex flex-col items-center justify-center border border-blue-100 dark:border-gray-700 
                rounded-lg py-8 px-2 transition text-gray-800 dark:text-white bg-white 
                dark:bg-transparent shadow-sm hover:shadow-md
                hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 
                dark:hover:bg-white/10 hover:scale-105 group"
            >
              <span className="mb-2 transition-colors text-blue-600 dark:text-white 
                group-hover:text-blue-700 dark:group-hover:text-blue-300">
                {industry.icon}
              </span>
              <span className="font-semibold transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-300">
                {industry.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}