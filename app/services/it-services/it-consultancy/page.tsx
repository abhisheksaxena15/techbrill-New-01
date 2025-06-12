'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, LineChart, Users, Shield, Target, Briefcase } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ITConsultancyPage() {
  return (
    <ErrorBoundary>
      <div>
        {/* Hero Section with Background Image */}
        <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/services/it-consultancy-hero.jpg"
            alt="IT Consultancy Hero"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/70" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">IT Consultancy</h1>
            <p className="text-lg md:text-2xl text-white/90">Strategic technology solutions for business growth</p>
          </div>
        </section>

        {/* Service Explanation Section - Minimal alternating layout with working images */}
        <section className="py-16 bg-gray-900">
          <div className="container space-y-12">
            {/* Block 1: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center p-6 md:p-12 gap-8">
              {/* Carousel Left */}
              <div className="w-full md:w-1/2">
                <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                  <CarouselContent>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg" alt="IT Consultancy Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/it-consultancy-hero.jpg" alt="IT Consultancy Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What We Do in IT Consultancy</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  At TechBrill Solutions, we provide expert IT consultancy services to help businesses navigate the complex world of technology. Our team of experienced consultants works closely with you to understand your unique challenges and develop strategic solutions that drive growth and innovation.
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  From digital transformation to technology strategy and implementation, we guide you through every step of your technology journey, ensuring you make informed decisions that align with your business objectives.
                </p>
              </div>
            </div>
            {/* Block 2: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse items-center p-6 md:p-12 gap-8">
              {/* Carousel Right */}
              <div className="w-full md:w-1/2">
                <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                  <CarouselContent>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/it-consultancy-hero.jpg" alt="IT Consultancy Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg" alt="IT Consultancy Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Left */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Digital Transformation & Strategy</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  We help organizations embrace digital transformation, develop technology roadmaps, and implement strategies that drive innovation and efficiency.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Technology Roadmap Development</li>
                  <li>Digital Transformation Strategy</li>
                  <li>IT Infrastructure Planning</li>
                  <li>Cloud Strategy & Migration</li>
                  <li>IT Governance & Compliance</li>
                </ul>
              </div>
            </div>
            {/* Block 3: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center p-6 md:p-12 gap-8">
              {/* Carousel Left */}
              <div className="w-full md:w-1/2">
                <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                  <CarouselContent>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg" alt="IT Consultancy Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/it-consultancy-hero.jpg" alt="IT Consultancy Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">IT Implementation & Support</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Our implementation services ensure your technology investments deliver value. We provide project management, change management, and ongoing support.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Project Management</li>
                  <li>Change Management</li>
                  <li>Vendor Selection & Management</li>
                  <li>Process Optimization</li>
                  <li>Technology Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16">
          <div className="container">
            <motion.h2 
              className="text-3xl font-bold mb-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Benefits of IT Consultancy
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="text-gray-700 dark:text-gray-300">Develop comprehensive technology strategies aligned with your business goals.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify opportunities to reduce IT costs while improving efficiency.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-gray-700 dark:text-gray-300">Access to experienced IT professionals and industry best practices.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify and mitigate technology-related risks to your business.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-gray-700 dark:text-gray-300">Guide your organization through successful digital transformation initiatives.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Alignment</h3>
                <p className="text-gray-700 dark:text-gray-300">Ensure your technology investments support your business objectives.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8">Our IT Consultancy Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Strategic Services</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Technology Roadmap Development</li>
                    <li>• Digital Transformation Strategy</li>
                    <li>• IT Infrastructure Planning</li>
                    <li>• Cloud Strategy & Migration</li>
                    <li>• IT Governance & Compliance</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Implementation Services</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Project Management</li>
                    <li>• Change Management</li>
                    <li>• Vendor Selection & Management</li>
                    <li>• Process Optimization</li>
                    <li>• Technology Integration</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary text-white text-center">
          <motion.div 
            className="container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your IT consultancy needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 