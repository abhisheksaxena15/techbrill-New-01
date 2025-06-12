'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Database, Shield, Zap, Users, LineChart } from 'lucide-react';
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

export default function AIMLDevelopmentPage() {
  return (
    <ErrorBoundary>
      <div>
        {/* Hero Section with Background Image */}
        <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/services/ai-ml-hero.jpg"
            alt="AI & ML Development Hero"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/70" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI & ML Development</h1>
            <p className="text-lg md:text-2xl text-white/90">Transforming businesses with intelligent solutions</p>
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
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="AI & ML Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="AI & ML Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What We Do in AI & ML Development</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Artificial Intelligence and Machine Learning are revolutionizing how businesses operate. At TechBrill Solutions, we develop cutting-edge AI and ML solutions that help businesses automate processes, gain insights from data, and make smarter decisions.
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Our team of AI experts and data scientists work together to create custom solutions that address your specific business challenges, from predictive analytics to natural language processing and computer vision.
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
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="AI & ML Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="AI & ML Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Left */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Custom AI & ML Solutions</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  We build custom AI and ML solutions tailored to your business needs, from predictive analytics to natural language processing and computer vision.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Predictive Analytics</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>Recommendation Systems</li>
                  <li>Pattern Recognition</li>
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
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="AI & ML Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="AI & ML Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">AI & ML Consulting & Integration</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Our consulting services help you define the right AI/ML strategy, select the best tools, and integrate intelligent solutions into your business processes.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Custom AI Solutions</li>
                  <li>Chatbots & Virtual Assistants</li>
                  <li>Intelligent Automation</li>
                  <li>AI Integration Services</li>
                  <li>AI Strategy Consulting</li>
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
              Benefits of AI & ML Development
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
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Decision Making</h3>
                <p className="text-gray-700 dark:text-gray-300">Leverage data-driven insights to make informed business decisions and predict future trends.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
                <p className="text-gray-700 dark:text-gray-300">Automate repetitive tasks and workflows to improve efficiency and reduce operational costs.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Experiences</h3>
                <p className="text-gray-700 dark:text-gray-300">Deliver tailored experiences to customers through AI-powered personalization.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-700 dark:text-gray-300">Forecast trends and behaviors to stay ahead of market changes and customer needs.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
                <p className="text-gray-700 dark:text-gray-300">Transform raw data into actionable insights that drive business growth.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Implement AI-powered security solutions to protect against threats and vulnerabilities.</p>
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
              <h2 className="text-3xl font-bold mb-8">Our AI & ML Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Machine Learning Solutions</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Predictive Analytics</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Recommendation Systems</li>
                    <li>• Pattern Recognition</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">AI Development</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Custom AI Solutions</li>
                    <li>• Chatbots & Virtual Assistants</li>
                    <li>• Intelligent Automation</li>
                    <li>• AI Integration Services</li>
                    <li>• AI Strategy Consulting</li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg mb-8">Contact us today to discuss how AI and ML can benefit your organization.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 