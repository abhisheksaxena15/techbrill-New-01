"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Layout, PenTool, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    key: "strategy",
    label: "Strategy",
    icon: <Lightbulb className="w-7 h-7" />,
    heading: "Step 1: Strategy",
    description:
      "We start by understanding your business goals, audience, and challenges. Our team collaborates with you to define a clear vision and actionable roadmap for your digital project.",
    image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
  },
  {
    key: "wireframing",
    label: "Wireframing",
    icon: <Layout className="w-7 h-7" />,
    heading: "Step 2: Wireframing",
    description:
      "We create wireframes to map out the structure and flow of your website or app. This blueprint ensures a seamless user journey and aligns everyone on the project direction.",
    image: "/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg",
  },
  {
    key: "uiux",
    label: "UI/UX Design",
    icon: <PenTool className="w-7 h-7" />,
    heading: "Step 3: UI/UX Design",
    description:
      "Our designers craft visually stunning and intuitive interfaces. We focus on usability, accessibility, and brand consistency to deliver delightful user experiences.",
    image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
  },
  {
    key: "development",
    label: "Development",
    icon: <Code className="w-7 h-7" />,
    heading: "Step 4: Development",
    description:
      "Our developers bring designs to life with clean, scalable code. We use modern technologies to ensure your product is robust, secure, and high-performing.",
    image: "/images/services/web-design-hero.jpg",
  },
  {
    key: "launch",
    label: "Launch & Growth",
    icon: <Rocket className="w-7 h-7" />,
    heading: "Step 5: Launch & Growth",
    description:
      "We launch your project with confidence and provide ongoing support. Our team helps you grow, optimize, and adapt to new opportunities in the digital landscape.",
    image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
  },
];

export default function WorkProcess({ steps = STEPS }: { steps?: typeof STEPS }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 md:px-16">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Process to Build Digital Success
        </motion.h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full" />
        <motion.p
          className="text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From idea to execution, here&apos;s how we help you succeed.
        </motion.p>
      </div>
      {/* Tabs */}
      <div className="flex gap-4 md:gap-6 border-b pb-4 overflow-x-auto scrollbar-hide pl-4 pr-4 md:pl-0 md:pr-0 snap-x snap-mandatory justify-start md:justify-center">
        {steps.map((step, idx) => (
          <button
            key={step.key}
            className={`flex flex-col items-center px-2 md:px-4 pb-2 focus:outline-none transition relative group snap-center min-w-[72px] ${
              active === idx
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActive(idx)}
            type="button"
          >
            <motion.div
              whileHover={{ scale: 1.18, y: -4 }}
              className="mb-1"
            >
              {step.icon}
            </motion.div>
            <span className="text-sm md:text-base">
              {step.label}
            </span>
            {active === idx && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 shadow-md"
                style={{ zIndex: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      {/* Expandable Detail Area */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[active].key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-[220px]"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">
              {steps[active].heading}
            </h3>
            <p className="text-gray-600 mt-4 max-w-2xl">
              {steps[active].description}
            </p>
          </motion.div>
          <motion.div
            key={steps[active].image}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center items-center"
          >
            <img
              src={steps[active].image}
              alt={steps[active].label}
              className="rounded-xl object-cover max-w-[300px] w-full h-auto shadow-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 