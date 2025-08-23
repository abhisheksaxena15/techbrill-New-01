"use client"

import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function TechnologyStack() {
  // Curated list of 12 trending technologies for a 6x2 grid
  const technologies = [
    // Row 1
    { name: "React", icon: "devicon:react" },
    { name: "Next.js", icon: "devicon:nextjs" },
    { name: "TypeScript", icon: "devicon:typescript" },
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "Python", icon: "devicon:python" },
    { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    // Row 2
    { name: "Docker", icon: "devicon:docker" },
    { name: "Kubernetes", icon: "devicon:kubernetes" },
    { name: "AWS", icon: "devicon:amazonwebservices-wordmark" },
    { name: "PostgreSQL", icon: "devicon:postgresql" },
    { name: "Figma", icon: "devicon:figma" },
    { name: "Git", icon: "devicon:git" },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <AnimatedSection animation="fade">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Technologies We Use
            </h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Driven by innovation, powered by the right{" "}
              <span className="italic text-blue-800 dark:text-blue-200">Technology Stack</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Delivering responsive, high-performance, and user-friendly interfaces with modern frontend
              technologies
            </p>
          </div>
        </AnimatedSection>

        {/* 6x2 Grid with simple rounded rectangle cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.name} animation="scale" delay={0.05 * index}>
              <motion.div
                className={cn(
                  "bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300",
                  "flex flex-col items-center justify-center text-center aspect-square",
                  "border border-transparent" // Ensures consistent size, no visible border
                )}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon
                  icon={tech.icon}
                  className="w-8 h-8 mb-1.5 text-gray-700 dark:text-gray-200"
                />
                <span className="text-xs font-semibold text-gray-800 dark:text-white leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}