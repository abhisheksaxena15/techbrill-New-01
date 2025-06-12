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
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            A Unified Vision That Caters To<br />Diverse Industry Demands
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition self-start md:self-auto">
            Explore More In Industries
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <button
              key={industry.label}
              className={`flex flex-col items-center justify-center border rounded-lg py-8 px-2 transition text-white
               
                hover:border-blue-500 hover:bg-white/10 hover:scale-105`}
              
            >
              <span className={`mb-2 transition-colors group-hover:text-blue-400`}>
                {industry.icon}
              </span>
              <span
                className={`font-semibold transition-colors group-hover:text-blue-400`}
              >
                {industry.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}