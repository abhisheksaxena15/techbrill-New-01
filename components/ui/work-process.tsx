'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Layout, PenTool, Code, Rocket } from 'lucide-react';

const STEPS = [
  {
    key: "Planning & Strategy",
    label: "Planning & Strategy",
    icon: <Lightbulb className="w-7 h-7" />,
    heading: "Step 1: Planning & Strategy",
    description: (
      <div className="text-justify leading-relaxed">
        We develop a detailed roadmap, outlining site structure, features, and design flow. This stage aligns business goals with user needs, sets timelines, allocates resources, and anticipates challenges. Clear planning ensures an efficient workflow, minimizes risks, and lays the foundation for a smooth, successful web development journey.
      </div>
    ),
    image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
  },
  {
    key: "Design & Prototyping ",
    label: "Design & Prototyping ",
    icon: <Layout className="w-7 h-7" />,
    heading: "Step 2: Design & Prototyping ",
    description: (
      <div className="text-justify leading-relaxed">
        We transform ideas into wireframes and interactive mockups, showcasing layout, navigation, and visual style. This stage refines aesthetics, usability, and brand consistency, ensuring the design meets user expectations. Feedback-driven iterations guarantee a polished, intuitive interface before moving to development, reducing revisions and ensuring a smooth build process.
      </div>
    ),
    image: "/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg",
  },

  {
    key: "development",
    label: "Development",
    icon: <Code className="w-7 h-7" />,
    heading: "Step 4: Development",
    description: (
      <div className="text-justify leading-relaxed">
        Our developers bring designs to life with clean, scalable code. We use modern technologies to ensure your product is robust, secure, and high-performing.
      </div>
    ),
    image: "/images/services/web-design-hero.jpg",
  },
  {
    key: "QA & Testing",
    label: "QA & Testing",
    icon: <PenTool className="w-7 h-7" />,
    heading: "Step 3: QA & Testing",
    description: (
      <div className="text-justify leading-relaxed">
        We conduct rigorous testing to ensure flawless functionality, performance, and security across devices and browsers. This includes usability checks, bug fixes, and compatibility verification. Our thorough QA process guarantees a seamless, accessible, and error-free user experience before the website goes live.
      </div>
    ),
    image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
  },
  {
    key: "launch",
    label: "Launch & Growth",
    icon: <Rocket className="w-7 h-7" />,
    heading: "Step 5: Launch & Growth",
    description: (
      <div className="text-justify leading-relaxed">
        Our partnership doesn’t end at launch. We ensure a smooth go-live, then continue supporting you with ongoing consultancy, maintenance, and optimizations to keep your website secure, updated, and high-performing. From refining features to implementing growth strategies, we’re committed to helping your online presence thrive and your business succeed at every stage.
      </div>
    ),
    image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
  },
];

export default function WorkProcess({ steps = STEPS }: { steps?: typeof STEPS }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our <span className="text-blue-700 italic">Work Process</span> to Build Digital Success
        </motion.h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-full" />
        <motion.p
          className="text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A seamless journey from concept to launch, combining strategy, creativity, and technology. Our clear, step-by-step process turns ideas into reality more efficiently and effectively.
        </motion.p>
      </div>
      {/* Tabs */}
      <div className="flex gap-4 md:gap-6 border-b pb-4  pl-4 pr-4 md:pl-0 md:pr-0  justify-start md:justify-center">
        {steps.map((step, idx) => (
          <button
            key={step.key}
            className={`flex flex-col items-center px-2 md:px-4 pb-2 focus:outline-none transition relative group snap-center min-w-[72px] ${active === idx
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
      {/*
        Changes made here:
        - The parent <p> tag was changed to a <div> to properly nest the description content,
          which is also a <div>, resolving the hydration error.
        - The width of the text container and image container are now responsive.
        - The image's dimensions are responsive, stretching on mobile and having a fixed height on desktop.
      */}
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
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">
              {steps[active].heading}
            </h3>
            {/* THIS WAS THE PROBLEM. A <p> tag cannot contain a <div>. It has been changed to a <div> */}
            <div className="text-gray-600 mt-4 max-w-2xl">
              {steps[active].description}
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
