"use client"

import IndustriesSection from "@/components/industries-section";
import WorkProcess from "@/components/ui/work-process";
import ConsultationSection from "@/components/ConsultationSection";
import AnimatedText from "@/components/animated-text";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import React from 'react';

const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg";

const benefits = [
  {
    title: "Industry Expertise",
    description: "Deep experience across healthcare, finance, education, retail, and more.",
    icon: "💡",
  },
  {
    title: "Tailored Solutions",
    description: "Custom strategies and technology for every business challenge.",
    icon: "🛠️",
  },
  {
    title: "End-to-End Support",
    description: "From ideation to launch and beyond, we’re with you at every step.",
    icon: "🤝",
  },
  {
    title: "Proven Results",
    description: "A track record of successful digital transformation for diverse clients.",
    icon: "🏆",
  },
];

const industries = [
  {
    id: 1,
    title: 'Automotive',
    description: 'Driving innovation in vehicle manufacturing, autonomous systems, and mobility solutions for the future of transportation.',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/automotive',
    
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 2,
    title: 'Banking & Finance',
    description: 'Transforming financial services with digital solutions, secure payment systems, and innovative fintech platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/banking-finance',
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 3,
    title: 'Education',
    description: 'Empowering learning through innovative educational technologies, e-learning platforms, and digital classroom solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/education',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 4,
    title: 'Publishing',
    description: 'Revolutionizing content creation and distribution in the digital publishing landscape with modern solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/publishing',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 5,
    title: 'Healthcare',
    description: 'Advancing patient care through cutting-edge medical technologies, telemedicine, and healthcare management systems.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/healthcare',
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 6,
    title: 'Retail',
    description: 'Enhancing customer experiences through omnichannel retail solutions, inventory management, and customer analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/retail',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    id: 7,
    title: 'E-commerce',
    description: 'Building scalable online marketplaces, digital commerce platforms, and comprehensive shopping experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/ecommerce',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 8,
    title: 'Travel',
    description: 'Creating seamless travel experiences through innovative booking systems, travel management, and hospitality solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/travel',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: 9,
    title: 'Logistics & Transportation',
    description: 'Optimizing supply chain efficiency with smart logistics, fleet management, and transportation solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/logistics',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    id: 10,
    title: 'Real Estate',
    description: 'Modernizing property management, real estate transactions, and property valuation with innovative digital tools.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/real-estate',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 11,
    title: 'Media & Entertainment',
    description: 'Delivering engaging content experiences across multiple digital platforms, streaming services, and media production.',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/media-entertainment',
    color: 'bg-violet-50 text-violet-600'
  },
  {
    id: 12,
    title: 'Hi-tech',
    description: 'Pioneering next-generation technologies, innovative software solutions, and cutting-edge technological advancement.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/hi-tech',
    color: 'bg-slate-50 text-slate-600'
  }
];

export default function IndustriesPage() {
  return (
    <>
      {/* Light Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
              Industry Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
              Digital Innovation for Every Sector
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-8 text-gray-700 text-base dark:text-white">
              We deliver innovative, scalable, and secure technology solutions for organizations across a wide range of industries, helping them achieve operational excellence and business growth. Our team crafts custom strategies and digital products to solve your unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
                View All Industries
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-gray-100">
                Consult Our Expert
              </Button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Industry Solutions"
              width={400}
              height={340}
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section>
      {/* Hero Banner */}
      {/* <section className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt="Industries Banner Background"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-sm"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Industries We Empower
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Digital transformation and tailored technology for every sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-white/90 text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-white">
              Explore Industries
            </Button>
          </div>
        </div>
      </section> */}

      {/* Industries Grid */}
      {/* <IndustriesSection /> */}

      <div className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => {
              return (
                <div
                  key={industry.id}
                  className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.imageUrl}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {industry.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                      {industry.description}
                    </p>                  
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <AnimatedText
              text="Why Choose Techbrill?"
              className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white"
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-700 dark:text-white text-base">
              We believe our growth depends on our clients&apos; growth. Here are a few reasons to partner with us for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/*Service process section*/}

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

      {/* Consultation/CTA Section */}
      <ConsultationSection />
    </>
  );
}

