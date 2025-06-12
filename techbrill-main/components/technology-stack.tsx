"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function TechnologyStack() {
  const technologies = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "ASP.NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Drupal",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    },
    {
      name: "Magento",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
    },
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      name: "Joomla",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="container">
        <AnimatedSection animation="fade">
          <div className="text-center mb-8 md:mb-12">
            <AnimatedText
              text="Driven by innovation, powered by the right Technology Stack"
              className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight"
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
              We leverage the latest technologies to build robust, scalable, and future-proof solutions that give your
              business a competitive edge in today&apos;s digital landscape.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <AnimatedSection key={index} animation="scale" delay={0.05 * index}>
              <motion.div
                className={cn(
                  "bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all",
                  "flex flex-col items-center justify-center text-center h-full",
                )}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative h-12 w-12 md:h-16 md:w-16 mb-2 md:mb-3">
                  <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                </div>
                <span className="text-sm md:text-base font-medium">{tech.name}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
