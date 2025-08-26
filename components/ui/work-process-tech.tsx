'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
    {
        key: "E-commerce",
        label: "E-commerce",
        icon: <div className="text-4xl">🛒</div>,
        techs: [
            { name: "Magento", icon: "🧩" },
            { name: "Shopify", icon: "🛍️" },
            { name: "WooCommerce", icon: "💻" },
        ],
        image: "/images/services/ecommerce.jpg",
    },
    {
        key: "FinTech",
        label: "FinTech",
        icon: <div className="text-4xl">💳</div>,
        techs: [
            { name: "Blockchain", icon: "⛓️" },
            { name: "AI Fraud Detection", icon: "🤖" },
            { name: "Secure APIs", icon: "🔐" },
        ],
        image: "/images/services/fintech.jpg",
    },
    {
        key: "Healthcare",
        label: "Healthcare",
        icon: <div className="text-4xl">🏥</div>,
        techs: [
            { name: "IoT", icon: "📡" },
            { name: "HL7/FHIR", icon: "🧾" },
            { name: "Telemedicine", icon: "📱" },
        ],
        image: "/images/services/health.webp",
    },
    {
        key: "Education",
        label: "Education",
        icon: <div className="text-4xl">🎓</div>,
        techs: [
            { name: "LMS", icon: "📘" },
            { name: "AR/VR Learning", icon: "🕶️" },
        ],
        image: "/images/services/edu.avif",
    },
    {
        key: "Retail",
        label: "Retail",
        icon: <div className="text-4xl">🏬</div>,
        techs: [
            { name: "ERP Integrations", icon: "⚙️" },
            { name: "RFID", icon: "📡" },
            { name: "Predictive Analytics", icon: "📊" },
        ],
        image: "/images/services/rental.jpeg",
    },
];


export default function WorkProcessTech({ steps = STEPS }: { steps?: typeof STEPS }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 md:px-16 max-w-full overflow-x-hidden bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
            Industry Specific Technologies
          </span>
          Transforming Industries Through Specialized Technology
        </motion.h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-3 rounded-full mt-3" />
        <motion.p
          className="text-base text-gray-600 max-w-xl mx-auto mt-1 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We combine domain expertise with advanced technology to create solutions that address the unique challenges and opportunities of each industry.
        </motion.p>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-4 md:gap-6 border-b pb-4 pl-4 pr-4 md:pl-0 md:pr-0 
        justify-start md:justify-center overflow-x-auto snap-x w-full"
      >
        {steps.map((step, idx) => (
          <button
            key={step.key}
            className={`flex flex-col items-center px-2 md:px-4 pb-2 focus:outline-none transition relative group snap-center min-w-[72px] flex-shrink-0
              ${active === idx
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-500"
              }`}
            onClick={() => setActive(idx)}
            type="button"
          >
            <motion.div whileHover={{ scale: 1.18, y: -4 }} className="mb-1">
              {step.icon}
            </motion.div>
            <span className="text-sm md:text-base">{step.label}</span>
            {active === idx && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Details lower pane (with step heading + tech icons + labels) */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 items-center justify-between mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[active].key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full md:w-1/2 min-w-[220px]"
          >
            {/* 🔹 Step-style heading */}
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">
               {steps[active].label} Technologies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {steps[active].techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 shadow hover:shadow-md transition"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-gray-700 text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={steps[active].image}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full md:w-1/2 flex justify-center items-center"
          >
            <img
              src={steps[active].image}
              alt={steps[active].label}
              className="rounded-xl object-cover shadow-md h-auto w-full md:h-72"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
