'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Plus } from "lucide-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  image: string;
}

const cards: CardProps[] = [
  {
    title: 'Digital Content Solutions',
    description: 'Smart content solutions for eLearning– LMS platforms, conversion, and interactive digital experiences.',
    icon: '/icons/digital-content.svg',
    href: '#',
    image: '/images/digital-content.jpg',
  },
  {
    title: 'Generative AI',
    description: 'We build and optimize Generative AI solutions to unlock business potential and drive intelligent automation.',
    icon: '/icons/generative-ai.svg',
    href: '#',
    image: '/images/generative-ai.jpg',
  },
  {
    title: 'Blockchain',
    description: 'Secure, transparent, and decentralized blockchain solutions to streamline operations and build digital trust.',
    icon: '/icons/blockchain.svg',
    href: '#',
    image: '/images/blockchain.jpg',
  },
  {
    title: 'Data Analytics',
    description: 'Unlock business value through our data analytics services that transform raw data into actionable insights.',
    icon: '/icons/data-analytics.svg',
    href: '#',
    image: '/images/data-analytics.jpg',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Drive innovation with cloud infrastructure and DevOps practices that optimize performance and streamline workflows.',
    icon: '/icons/cloud-devops.svg',
    href: '#',
    image: '/images/cloud-devops.jpg',
  },
];

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.7 } },
};

const AUTO_PLAY_DELAY = 5000;

const AdvancedServices = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, AUTO_PLAY_DELAY);
    return () => clearInterval(interval);
  }, []);

  const isActive = (index: number) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Advanced Services</h3>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Transforming business with latest <span className="italic text-blue-800 dark:text-blue-200">Trends & Technologies</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        <div className="relative max-w-xl md:max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Animated Image */}
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {cards.map((card, index) => (
                <motion.div
                  key={card.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : cards.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Animated Text */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {cards[active].title}
              </h3>
              <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                {cards[active].description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              <Link 
                href={cards[active].href} 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-base md:text-lg font-medium mt-6"
              >
                Read More <span className="ml-2">&#x2192;</span>
              </Link>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <ArrowLeftIcon className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <ArrowRightIcon className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
            <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
              {cards.map((_, i) => (
                <button
                  key={i}
                  className={`h-3 w-3 rounded-full transition-colors ${active === i ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedServices; 