"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function ServicesOverview() {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Crafting elegant, user-first web experiences with responsive design, seamless functionality, and optimized performance to engage your audience across all devices.",
      icon: "monitor",
      image: "/images/services/web-design-hero.jpg",
      link: "/services#web",
    },
    {
      title: "Mobile App Development",
      description:
        "Building exclusive and reliable native and cross-platform mobile applications that connect, inspire, and engage users on the go with intuitive interfaces and powerful features.",
      icon: "smartphone",
      image: "/images/services/mobile-app-hero.jpg",
      link: "/services#mobile",
    },
    {
      title: "AI & ML Development",
      description:
        "Empowering businesses with intelligent, scalable AI and ML technologies that transform data into actionable insights, automate processes, and drive innovation across operations.",
      icon: "brain",
      image: "/images/services/ai-ml-hero.jpg",
      link: "/services#ai-ml",
    },
    {
      title: "Digital Transformation",
      description:
        "Guiding your business through comprehensive digital transformation with modern technologies that enhance agility, efficiency, innovation, and sustainable growth in a competitive market.",
      icon: "refresh-cw",
      image: "/images/services/web-design-hero.jpg",
      link: "/services#digital-transformation",
    },
    {
      title: "Digital Content Solutions",
      description:
        "Creating smart content solutions for eLearning platforms, LMS development, conversion optimization, and interactive digital experiences that engage users and drive meaningful results.",
      icon: "file-text",
      image: "/images/services/web-design-hero.jpg",
      link: "/services#content-solutions",
    },
    {
      title: "Digital Marketing",
      description:
        "Implementing comprehensive digital marketing strategies including SEO, social media, content marketing, and paid advertising to boost your online presence and drive sustainable business growth.",
      icon: "trending-up",
      image: "/images/services/it-consultancy-hero.jpg",
      link: "/services#digital-marketing",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <AnimatedSection animation="fade" delay={0.1}>
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                We offer a comprehensive range of IT services designed to help businesses transform, innovate, and thrive
                in today&apos;s rapidly evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide">
              <motion.div
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col"
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
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <Link href={service.link} className="text-primary font-medium flex items-center group mt-auto">
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
