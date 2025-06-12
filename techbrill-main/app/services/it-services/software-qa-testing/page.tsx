'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bug, Shield, Users, Target, Briefcase, CheckCircle } from 'lucide-react';
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

export default function SoftwareQATestingPage() {
  return (
    <ErrorBoundary>
      <div>
        {/* Hero Section with Background Image */}
        <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/services/qa-testing-hero.jpg"
            alt="Software QA & Testing Hero"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/70" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Software QA & Testing</h1>
            <p className="text-lg md:text-2xl text-white/90">Ensuring quality and reliability in every line of code</p>
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
                        <Image src="/images/services/myriam-jessier-eveI7MOcSmw-unsplash.jpg" alt="QA & Testing Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/qa-testing-hero.jpg" alt="QA & Testing Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What We Do in Software QA & Testing</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  In today&apos;s fast-paced digital world, software quality is non-negotiable. At TechBrill Solutions, we understand that even the smallest bug can have significant consequences for your business. Our comprehensive software QA and testing services ensure that your applications are reliable, secure, and deliver an exceptional user experience.
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  We employ a rigorous testing methodology that covers every aspect of your software, from functionality and performance to security and user experience. Our team of experienced QA engineers uses both manual and automated testing techniques to identify and resolve issues before they impact your users.
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
                        <Image src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg" alt="QA & Testing Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/myriam-jessier-eveI7MOcSmw-unsplash.jpg" alt="QA & Testing Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Left */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Automated & Manual Testing</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  We offer both manual and automated testing services to ensure your software is robust and reliable. Our automation frameworks speed up testing cycles and improve coverage, while manual testing ensures a human touch for usability and edge cases.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Functional Testing</li>
                  <li>Performance Testing</li>
                  <li>Security Testing</li>
                  <li>Usability Testing</li>
                  <li>Compatibility Testing</li>
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
                        <Image src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg" alt="QA & Testing Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/qa-testing-hero.jpg" alt="QA & Testing Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">QA Consulting & Strategy</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Our QA consulting services help you define the right testing strategy, select tools, and implement best practices for continuous quality improvement.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Test Automation</li>
                  <li>API Testing</li>
                  <li>Mobile App Testing</li>
                  <li>Load & Stress Testing</li>
                  <li>Continuous Testing</li>
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
              Benefits of Professional QA & Testing
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
                <Bug className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Early Bug Detection</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify and fix issues early in the development cycle, reducing costs and time to market.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Comprehensive security testing to protect your application from vulnerabilities and threats.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improved User Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">Ensure your software delivers a seamless and intuitive experience for all users.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-700 dark:text-gray-300">Identify and resolve performance bottlenecks for optimal application speed and efficiency.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-700 dark:text-gray-300">Maintain high standards of quality throughout the development process.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-700 dark:text-gray-300">Ensure your software meets industry standards and regulatory requirements for security, privacy, and accessibility.</p>
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
              <h2 className="text-3xl font-bold mb-8">Our QA & Testing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Testing Types</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Functional Testing</li>
                    <li>• Performance Testing</li>
                    <li>• Security Testing</li>
                    <li>• Usability Testing</li>
                    <li>• Compatibility Testing</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">QA Services</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Test Automation</li>
                    <li>• API Testing</li>
                    <li>• Mobile App Testing</li>
                    <li>• Load & Stress Testing</li>
                    <li>• Continuous Testing</li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Ensure Your Software Quality?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your QA and testing needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 