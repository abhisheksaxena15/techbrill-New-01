"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function TechnologyStack() {
  const [currentStackIndex, setCurrentStackIndex] = useState(0)

  const technologyStacks = [
    {
      title: "Frontend & Mobile",
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Svelte",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Swift",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
      ]
    },
    {
      title: "Backend & Database",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ]
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          name: "Google Cloud",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
        {
          name: "Jenkins",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        },
        {
          name: "Terraform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ]
    },
    {
      title: "AI & Design",
      technologies: [
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "OpenAI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        },
        {
          name: "Blender",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
        },
      ]
    },
  ]

  const nextStack = () => {
    setCurrentStackIndex((prev) => (prev + 1) % technologyStacks.length)
  }

  const prevStack = () => {
    setCurrentStackIndex((prev) => (prev - 1 + technologyStacks.length) % technologyStacks.length)
  }

  const currentStack = technologyStacks[currentStackIndex]

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="container">
        <AnimatedSection animation="fade">

          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Technologies We Use</h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Driven by innovation, powered by the right <span className="italic text-blue-800 dark:text-blue-200">Technology Stack</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            
          </div>

          {/* <div className="text-center mb-8 md:mb-12">
            <AnimatedText
              text="Driven by innovation, powered by the right Technology Stack"
              className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight text-gray-800 dark:text-white"
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
              We leverage the latest technologies to build robust, scalable, and future-proof solutions that give your
              business a competitive edge in today&apos;s digital landscape.
            </p>
          </div> */}
        </AnimatedSection>

        {/* Stack Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevStack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Previous technology stack"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {currentStack.title}
            </h3>
            <div className="flex space-x-2 justify-center">
              {technologyStacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStackIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    index === currentStackIndex
                      ? "bg-primary w-6"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  )}
                  aria-label={`Go to ${technologyStacks[index].title} stack`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextStack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Next technology stack"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Technology Grid - 2 Rows */}
        <motion.div
          key={currentStackIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* First Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
            {currentStack.technologies.slice(0, 4).map((tech, index) => (
              <AnimatedSection key={`${currentStackIndex}-${index}`} animation="scale" delay={0.05 * index}>
                <motion.div
                  className={cn(
                    "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all",
                    "flex flex-col items-center justify-center text-center aspect-square",
                    "border border-gray-100 dark:border-gray-700"
                  )}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex-shrink-0">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain drop-shadow-sm"
                      sizes="(max-width: 768px) 48px, 64px"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {currentStack.technologies.slice(4, 8).map((tech, index) => (
              <AnimatedSection key={`${currentStackIndex}-${index + 4}`} animation="scale" delay={0.05 * (index + 4)}>
                <motion.div
                  className={cn(
                    "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all",
                    "flex flex-col items-center justify-center text-center aspect-square",
                    "border border-gray-100 dark:border-gray-700"
                  )}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex-shrink-0">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain drop-shadow-sm"
                      sizes="(max-width: 768px) 48px, 64px"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
