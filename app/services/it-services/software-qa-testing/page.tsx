'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Bug, Shield, Target, Briefcase, Clock, Gift, Shuffle, Headphones, Lightbulb, Palette, PhoneCall, ChevronDown, BarChart3, Cloud } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import ServicesSection from '@/components/ui/services-section-QA';
import TechStackSection from '@/components/ui/TechStack-QA';
import WorkProcess from '@/components/ui/work-process';
import ConsultationSection from '@/components/ConsultationSection';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/animated-section';

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
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/qa-testing-hero.jpg" alt="QA & Testing Hero" fill className="object-cover object-center z-0" priority />
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
              Software QA & Testing
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Ensuring quality, security, and reliability in every release
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
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">View Portfolio</Button>
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

        {/* Service Explanation Section - Minimal alternating layout with working images */}
        <ServicesSection />

        {/* Tech Stack Section */}
        <section className="pt-16 , pb-16">
                 <div className="container mx-auto">
                   <div className="text-center mb-8 md:mb-12">
                     <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                      Tools & Technologies We Use
                     </h3>
                     <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                      Powered by Industry-Leading Tools & Frameworks
                     </h2>
                     <div className="h-1 w-20 bg-red-600 dark:bg-blue-400 mx-auto mt-4"></div>
                     {/* Change: Wrapped the h3 tag in a new flex container to control its width
             and ensure it stays centered while having a maximum width.
           */}
                     <div className="flex justify-center mt-4">
                       {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                       <h3 className=" max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                       We leverage industry-leading QA tools and modern technologies to ensure accuracy, efficiency, and reliability across every stage of the software testing lifecycle.</h3>
                     </div>
                   </div>
                   <TechStackSection />
                 </div>
       
               </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Key Benefits of QA & Testing
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-2">
                Ensure your software is robust, secure, and user-friendly with our comprehensive QA and testing services.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Bug className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Early Bug Detection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identify and fix issues early in the development cycle, reducing costs and time to market.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Enhanced Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive security testing to protect your application from vulnerabilities and threats.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Improved User Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure your software delivers a seamless and intuitive experience for all users.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Performance Optimization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identify and resolve performance bottlenecks for optimal application speed and efficiency.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Quality Assurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Maintain high standards of quality throughout the development process.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Regulatory Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure your software meets industry standards and regulatory requirements for security, privacy, and accessibility.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Advanced Technologies Section with Sticky Left Column */}
        <section className="py-16 bg-white dark:bg-gray-950 text-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
              {/* Left Column - Sticky */}
              <div className="lg:sticky lg:top-48 lg:h-fit">
                <div className="max-w-lg">
                  <div className="text-left mb-8 md:mb-12">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                      Advanced QA
                    </h3>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                      Next-Level QA Expertise for Emerging Technologies
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                    <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                      Our specialized QA services help businesses improve quality, optimize processes, and stay future-ready beyond standard testing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Scrollable */}
              <div className="space-y-12">
                {/* AI & Emerging Tech Testing */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Lightbulb className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI & Emerging Tech Testing</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white leading-relaxed">
                    Specialized testing for AI-powered applications, machine learning models, IoT devices, and blockchain solutions to ensure reliability in cutting-edge technologies.
                  </p>
                </motion.div>

                {/* AI-Powered Test Automation */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Bug className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI-Powered Test Automation</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white leading-relaxed">
                    Leverage artificial intelligence to create intelligent test automation that adapts, learns, and optimizes testing strategies for maximum efficiency and coverage.
                  </p>
                </motion.div>

                {/* Continuous Testing in DevOps */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Cloud className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Continuous Testing in DevOps</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white leading-relaxed">
                    Seamlessly integrate testing into your DevOps pipeline with continuous testing strategies that provide instant feedback and accelerate delivery cycles.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/*Specialised services*/}
        <section className="py-16 bg-white dark:bg-gray-950 text-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
              {/* Left Column - Sticky */}
              <div className="lg:sticky lg:top-48 lg:h-fit">

                <div className="text-left mb-8 md:mb-12">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Specialised Services</h3>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                    Specialized QA Solutions Beyond Standard Testing</h2>
                  <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                  <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                    Our specialized QA services help businesses improve quality, optimize processes, and stay future-ready beyond standard testing.
                  </p>
                </div>
              </div>

              {/* Right Column - Scrollable */}
              <div className="space-y-12">
                {/* AI & Emerging Tech Testing */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Lightbulb className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI & Emerging Tech Testing</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white leading-relaxed">
                    Specialized testing for AI-powered applications, machine learning models, IoT devices, and blockchain solutions to ensure reliability in cutting-edge technologies.
                  </p>
                </motion.div>

                {/* AI-Powered Test Automation */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Bug className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI-Powered Test Automation</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white leading-relaxed">
                    Leverage artificial intelligence to create intelligent test automation that adapts, learns, and optimizes testing strategies for maximum efficiency and coverage.
                  </p>
                </motion.div>

                {/* Continuous Testing in DevOps */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Cloud className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Continuous Testing in DevOps</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white leading-relaxed">
                    Seamlessly integrate testing into your DevOps pipeline with continuous testing strategies that provide instant feedback and accelerate delivery cycles.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 pb-24 md:pb-32">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-blue-600 dark:text-white">
                Tools & Technologies We Use
              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Powered by Industry-Leading Tools & Frameworks
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mt-2">
                We leverage industry-leading QA tools and modern technologies to ensure accuracy, efficiency, and reliability across every stage of the software testing lifecycle.
              </p>
            </div>
            <TechStackSection />
          </div>
        </section>

        {/* How We Ensure Quality Section */}
        <AnimatedSection animation="fade" delay={0.2}>
          <div className="mt-16 md:mt-20 bg-white dark:bg-gray-900">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-center mb-8 md:mb-12">
                <br/>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">Quality Assurance</h3>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  How We <span className="text-blue-800 dark:text-blue-300">Ensure Quality</span>
                </h2>
                <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200 text-base mt-4">
                  Structured QA Process for Reliable Outcomes
                </p>
                <p className="max-w-4xl mx-auto text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Our QA workflow follows a structured, transparent process designed to detect defects early, improve collaboration, and ensure every release meets the highest quality standards.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Requirement Analysis",
                  description: "Defining scope, risks, and acceptance criteria for clear quality goals.",
                  icon: "🔍",
                  lightIcon: "🔍",
                  darkIcon: "🔍"
                },
                {
                  step: "02", 
                  title: "Test Planning",
                  description: "Creating test strategy with scope, tools, timelines, and resource allocation.",
                  icon: "📝",
                  lightIcon: "📝",
                  darkIcon: "📝"
                },
                {
                  step: "03",
                  title: "Test Design & Development", 
                  description: "Building detailed test cases, scripts, and scenarios for full coverage.",
                  icon: "⚙️",
                  lightIcon: "⚙️",
                  darkIcon: "⚙️"
                },
                {
                  step: "04",
                  title: "Test Execution",
                  description: "Running manual and automated tests to validate functionality and performance.",
                  icon: "▶️",
                  lightIcon: "▶️",
                  darkIcon: "▶️"
                },
                {
                  step: "05",
                  title: "Defect Reporting & Tracking",
                  description: "Logging, prioritizing, and tracking issues until resolution with full transparency.",
                  icon: "🐞",
                  lightIcon: "🐞",
                  darkIcon: "🐞"
                },
                {
                  step: "06",
                  title: "Test Closure & Reporting",
                  description: "Delivering detailed reports, insights, and retrospectives to optimize future cycles.",
                  icon: "📊",
                  lightIcon: "📊",
                  darkIcon: "📊"
                }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="slide">
                  <motion.div
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-750"
                    initial={{
                      opacity: 0,
                      y: 50,
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
                        delay: index * 0.1
                      }
                    }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                      amount: 0.3
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                      }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 10
                            }
                          }}
                        >
                          <span className="text-gray-800 dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors duration-300">
                            {item.icon}
                          </span>
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <motion.span 
                            className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors duration-300"
                            whileHover={{
                              scale: 1.05,
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                              }
                            }}
                          >
                            STEP {item.step}
                          </motion.span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Quote Section */}
            <AnimatedSection animation="fade" delay={0.3}>
              <motion.div
                className="mt-12 md:mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-8 md:p-12 border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  <motion.div 
                    className="text-blue-600 dark:text-blue-400 text-4xl mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    &quot;
                  </motion.div>
                  <blockquote className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 italic mb-4">
                    A transparent workflow that guarantees quality at every stage;
                  </blockquote>
                  <motion.div 
                    className="text-blue-600 dark:text-blue-400 text-4xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    &quot;
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        




        

        {/* Why Choose us Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Why Clients Trust Our QA Services
                </h2>
                <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-3"></div>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mt-4">
                  Our proven track record and client-focused approach make us the trusted partner for businesses seeking reliable QA solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Expertise */}
                <motion.div
                  className="flex items-start space-x-4 p-4 border-t border-gray-300 dark:border-gray-600 pt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">•</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Expertise
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Decades of QA experience across diverse industries.
                    </p>
                  </div>
                </motion.div>

                {/* Reliability */}
                <motion.div
                  className="flex items-start space-x-4 p-4 border-t border-gray-300 dark:border-gray-600 pt-6 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">•</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Reliability
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Consistent delivery of high-quality, defect-free software.
                    </p>
                  </div>
                </motion.div>

                {/* Agility */}
                <motion.div
                  className="flex items-start space-x-4 p-4 border-t border-gray-300 dark:border-gray-600 pt-6 pb-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">•</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Agility
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Flexible processes that adapt to evolving business needs.
                    </p>
                  </div>
                </motion.div>

                {/* Transparency */}
                <motion.div
                  className="flex items-start space-x-4 p-4 border-t border-gray-300 dark:border-gray-600 pt-6 pb-6 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">•</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Transparency
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Clear reporting and open communication at every stage.
                    </p>
                  </div>
                </motion.div>

                {/* Innovation */}
                <motion.div
                  className="flex items-start space-x-4 p-4 border-t border-gray-300 dark:border-gray-600 pt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">•</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Advanced tools and modern practices for smarter QA.
                    </p>
                  </div>
                </motion.div>

                {/* Client-Centric */}
                <motion.div
                  className="flex items-start space-x-4 p-4 border-t border-gray-300 dark:border-gray-600 pt-6 pb-6 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">•</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Client-Centric
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      Tailored solutions focused on your business success.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Ensure Your Software Quality?</h2>
            <p className="mb-6">Let us help you deliver flawless, high-performing software.</p>
            <Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-blue-50">Contact Us</Button>
          </motion.div>
        </section>

        {/* Consultation Section */}
        <ConsultationSection />
      </main>
    </ErrorBoundary>
  );
} 