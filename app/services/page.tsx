"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ExpandableServiceCards } from "@/components/ui/expandable-service-cards"

export default function ServicesPage() {

  const services = [
    {
      id: 1,
      title: "Web Design & Development",
      description: "Crafting elegant, user-first web experiences that inspire and engage across every device. Our web development solutions combine cutting-edge technology with intuitive design principles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      link: "/services/it-services/web-design-development",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "We craft exclusive and reliable mobile apps that connect, inspire, and engage on the go. Our mobile development expertise spans native and cross-platform solutions.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      link: "/services/it-services/mobile-app-development",
    },
    {
      id: 3,
      title: "AI & ML Development",
      description: "Empowering businesses with intelligent, scalable AI and ML technologies for innovation. We develop custom artificial intelligence solutions that automate processes.",
      image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
      link: "/services/it-services/ai-ml-development",
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies. Our comprehensive approach combines technical optimization and content strategy.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/search-engine-optimization",
    },
    {
      id: 5,
      title: "Social Media Marketing",
      description: "Engage your audience and build your brand with strategic social media campaigns. Our social media marketing expertise helps businesses create compelling content.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/social-media-marketing",
    },
    {
      id: 6,
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions. Our content marketing approach combines strategic planning and creative storytelling.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/content-marketing",
    },
    {
      id: 7,
      title: "Web Analytics",
      description: "Gain valuable insights into your website performance and user behavior with comprehensive web analytics solutions. We implement advanced tracking systems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/web-analytics",
    },
    {
      id: 8,
      title: "Design & Print Media",
      description: "We offer graphic design and print solutions to create impactful visuals for brand identity. Our design expertise encompasses everything from logo creation.",
      image: "https://images.unsplash.com/photo-1639717995202-02db625f64a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/digital-marketing/design-print-media",
    },
    {
      id: 9,
      title: "Cloud & DevOps",
      description: "Streamline your development and deployment processes with our comprehensive Cloud & DevOps solutions. We help businesses achieve faster delivery and improved reliability.",
      image: "/images/services/cloud-devops.jpg",
      link: "/services/ai-automation/cloud-devops",
    },
  ]




  return (
    <>
      {/* <section className="py-16">
        <div className="container">
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex flex-row gap-8"
              animate={containerControls}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animate={cardControls}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={service.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}







      <main className='bg-white text-gray-900'>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/it-consultancy-hero.jpg" alt="Web Design Hero" fill className="object-cover object-center z-0" priority />
          {/* Dark Linear Gradient Overlay with Blur */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: '-2rem' }}>
            <motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The solutions you look for are right here
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button size="lg" className="bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button size="lg" variant="outline" className="border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full sm:w-auto">View Portfolio</Button>
              </motion.div>
            </motion.div>
          </div>
          {/* Scroll Down Indicator (if space allows) */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-7 h-7 text-white opacity-80" />
          </motion.div>
        </section>
      </main>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What We Offer
            </motion.h2>
            <motion.h2 
              className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Assiting your bussiness with robust services and meeting your <span className="text-blue-800 font-bold">Digital Requirements</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>

          {/* Expandable Service Cards */}
          <ExpandableServiceCards services={services} />
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-blue-700 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                Our sevices at a Glance
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                Our Service <span className="italic text-blue-800 dark:text-blue-200">Process</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-700 mx-auto mb-4 sm:mb-6"></div>
              <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                We follow a structured approach to ensure that every project is delivered with the highest quality standards and meets your business objectives.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description: "We begin by understanding your business needs, goals, and target audience.",
                  },
                  {
                    step: "02",
                    title: "Design & Development",
                    description: "Our team creates prototypes and develops solutions based on the approved designs.",
                  },
                  {
                    step: "03",
                    title: "Testing & Quality Assurance",
                    description:
                      "Rigorous testing ensures that the final product meets all requirements and quality standards.",
                  },
                  {
                    step: "04",
                    title: "Deployment & Support",
                    description: "We deploy the solution and provide ongoing support and maintenance.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white dark:text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="group">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-600/5"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 mx-4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Need a Custom Solution?
                  </h3>
                  <p className="mb-6 max-w-sm mx-auto text-gray-700 dark:text-gray-300">
                    We specialize in creating tailored solutions to address your unique business challenges.
                  </p>
                  <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white group">
                    <a href="/contact">
                    Contact Our Team 
                    </a>
                    
                  </Button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
