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
      <main className='bg-white text-gray-900'>
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
        <section className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
              {/* Left Column - Sticky */}
              <div className="lg:sticky lg:top-48 lg:h-fit">
                <div className="max-w-lg">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Advanced QA Technologies We Use
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    From automation frameworks to performance testing tools, our QA engineers leverage the latest technologies to ensure your software is robust, secure, and scalable. We tailor our approach to your needs, using the best tools and methodologies in the industry.
                  </p>
                  <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-md">
                    Let&apos;s Ensure Your Software Quality
                  </Button>
                </div>
              </div>

              {/* Right Column - Scrollable */}
              <div className="space-y-12">
                {/* Automation Testing */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Bug className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Automation Testing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We implement robust automation frameworks to accelerate testing cycles, improve coverage, and ensure consistent results across releases.
                  </p>
                </motion.div>

                {/* Performance Testing */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <BarChart3 className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Performance Testing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our performance testing services identify bottlenecks and optimize your software for speed, scalability, and reliability under load.
                  </p>
                </motion.div>

                {/* Security Testing */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Shield className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Security Testing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct thorough security assessments to uncover vulnerabilities and protect your applications from threats and breaches.
                  </p>
                </motion.div>

                {/* Usability Testing */}
                <motion.div
                  className="p-8 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Users className='w-6 h-6 text-blue-600' />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Usability Testing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our usability testing ensures your software is intuitive, accessible, and delivers a seamless experience for all users.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <WorkProcess />

        {/* Commitment Section */}
        <section className="py-20 px-6 md:px-16 bg-blue-100">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
              <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                ASSURANCE TO YOU
              </h3>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Our <span className="text-blue-600">Commitment</span> and Guarantee
              </h2>

              <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>

              <p className="text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                We empower businesses by delivering reliable, secure, and high-quality software through our expert QA and testing services. Our commitment is to ensure your applications perform flawlessly and meet the highest standards.
              </p>

              {/* Commitment Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
                {/* 100% Transparency */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    100% Transparency
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complete visibility into project progress, timelines, and deliverables. No hidden costs or surprise changes.
                  </p>
                </div>

                {/* 95% On Time Delivery */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    95% On Time Delivery
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Proven track record of meeting deadlines with quality deliverables. We value your time and business commitments.
                  </p>
                </div>

                {/* Free 30 days support */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Gift className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Free 30 Days Support
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complimentary post-launch support to ensure smooth operation and address any issues that may arise.
                  </p>
                </div>

                {/* Flexible Engagement */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Shuffle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Flexible Engagement
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Adaptable working models to suit your project needs, timeline, and budget requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Choose Us?
                </h2>
                <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mt-6">
                  TechBrill delivers QA and testing services with a focus on precision, transparency, and measurable results. Our team is dedicated to your success, providing tailored solutions and ongoing support for every project.
                </p>
                <p className="text-gray-900 font-semibold text-lg mt-4">
                  We are:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Point 001 - Experienced QA Engineers */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">001</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Experienced QA Engineers
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our team brings years of experience in software testing, ensuring your applications meet the highest standards of quality and reliability.
                    </p>
                  </div>
                </motion.div>

                {/* Point 002 - Detail-Oriented Approach */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 mt-12"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">002</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Detail-Oriented Approach
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We meticulously test every aspect of your software, leaving no stone unturned to ensure flawless performance and user satisfaction.
                    </p>
                  </div>
                </motion.div>

                {/* Point 003 - Transparent Communication */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 pb-8"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">003</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Transparent Communication
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We keep you informed at every stage, providing clear updates and actionable insights throughout the QA process.
                    </p>
                  </div>
                </motion.div>

                {/* Point 004 - Security Focused */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 pb-8 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">004</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Security Focused
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our QA experts prioritize security, identifying vulnerabilities and implementing best practices to safeguard your applications.
                    </p>
                  </div>
                </motion.div>

                {/* Point 005 - Client-Centric Solutions */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">005</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Client-Centric Solutions
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We tailor our QA strategies to your unique business needs, ensuring solutions that drive value and long-term success.
                    </p>
                  </div>
                </motion.div>

                {/* Point 006 - Rapid Project Delivery */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 pb-8 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">006</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Rapid Project Delivery
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our efficient processes and agile methodologies ensure your QA projects are completed quickly and effectively.
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