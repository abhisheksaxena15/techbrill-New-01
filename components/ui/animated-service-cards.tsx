"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ServiceCard {
  id: number
  title: string
  description: string
  image: string
  link: string
  icon?: string
}

interface AnimatedServiceCardsProps {
  services: ServiceCard[]
  className?: string
}

export const AnimatedServiceCards: React.FC<AnimatedServiceCardsProps> = ({
  services,
  className
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -12,
      scale: 1.05,
      rotateY: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="group relative"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredCard(service.id)}
          onHoverEnd={() => setHoveredCard(null)}
        >
                     <motion.div
             className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
             variants={hoverVariants}
             whileHover={{
               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
             }}
           >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                             <Image
                 src={service.image}
                 alt={service.title}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-125"
               />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-blue-600/20"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredCard === service.id ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Read More Link */}
              <motion.div
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span>Read More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </div>

                         {/* Hover Border Effect */}
             <motion.div
               className="absolute inset-0 rounded-xl border-2 border-blue-600/0"
               animate={{
                 borderColor: hoveredCard === service.id ? "rgba(37, 99, 235, 0.5)" : "rgba(37, 99, 235, 0)",
                 boxShadow: hoveredCard === service.id ? "0 0 20px rgba(37, 99, 235, 0.3)" : "0 0 0px rgba(37, 99, 235, 0)"
               }}
               transition={{ duration: 0.3 }}
             />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
