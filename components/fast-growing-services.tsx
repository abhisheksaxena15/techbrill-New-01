"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function FastGrowingServices() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Grow your brand with SEO, social media, PPC, and content strategies.",
      icon: "megaphone",
      image: "/images/services/digital-marketing-hero.jpg",
      link: "/services#digital-marketing",
      highlight: true,
    },
    {
      title: "Web Design & Development",
      description:
        "Responsive, user-first websites with seamless functionality and performance.",
      icon: "monitor",
      image: "/images/services/web-design-hero.jpg",
      link: "/services#web",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform apps with intuitive interfaces and robust features.",
      icon: "smartphone",
      image: "/images/services/mobile-app-hero.jpg",
      link: "/services#mobile",
    },
    {
      title: "AI & ML Development",
      description:
        "Intelligent AI/ML solutions to automate, analyze, and innovate your business.",
      icon: "brain",
      image: "/images/services/ai-ml-hero.jpg",
      link: "/services#ai-ml",
    },
    
  ]

  return (
    <section className="py-16 px-4 bg-[#f8fafc] dark:bg-gray-900">
      <div className="container mx-auto">
        <AnimatedSection animation="fade" delay={0.1}>
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-blue-700 font-medium uppercase tracking-wide text-sm block mb-2">
                Fast Growing Services
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                Accelerate Your Digital Growth
              </h2>
              <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
              <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                Discover our most in-demand services that help businesses scale rapidly and stay ahead in the digital era.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide">
              <motion.div
                className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col
                  ${service.highlight ? "ring-2 ring-blue-600 border-blue-600 shadow-lg scale-105" : ""}
                `}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 15,
                    mass: 0.8,
                    delay: index * 0.15
                  }
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                  amount: 0.3
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }
                }}
              >
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {service.highlight && (
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.15 + 0.2,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-700 dark:text-gray-200">{service.title}</span>
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.15 + 0.3,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                  <Link href={service.link} className="text-blue-700 dark:text-blue-400 font-medium flex items-center group mt-auto">
                    Read More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
