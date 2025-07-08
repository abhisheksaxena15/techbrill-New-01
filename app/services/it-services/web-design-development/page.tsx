'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye, Clock, Shield, Users, CheckCircle, Code, Layout, Smartphone, Zap, Phone, Globe, Briefcase, Layers, Database, TrendingUp, ChevronDown, Lightbulb, Palette, Target, Handshake, PhoneCall } from 'lucide-react';

import { ErrorBoundary } from '@/components/error-boundary';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFigma, SiAmazon, SiMongodb, SiTypescript } from 'react-icons/si';

import { TextRevealCard } from '@/components/ui/text-reveal-card';
import { FocusCards } from '@/components/ui/focus-cards';
import WebTechToolsSection from '@/components/ui/web-tech-tools-section';
import ServicesSection from '@/components/ui/services-section';
import WorkProcess from '@/components/ui/work-process';
import ConsultationSection from '@/components/ConsultationSection';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const techStack = [
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'Tailwind', icon: '/images/tech/tailwind.svg' },
  { name: 'Figma', icon: '/images/tech/figma.svg' },
  { name: 'AWS', icon: '/images/tech/aws.svg' },
  { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
  { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
];

const industries = [
  { name: 'E-Commerce', icon: <Globe className="w-8 h-8 text-blue-500" /> },
  { name: 'Healthcare', icon: <Shield className="w-8 h-8 text-green-500" /> },
  { name: 'Finance', icon: <TrendingUp className="w-8 h-8 text-yellow-500" /> },
  { name: 'Education', icon: <Users className="w-8 h-8 text-purple-500" /> },
  { name: 'Real Estate', icon: <Briefcase className="w-8 h-8 text-pink-500" /> },
  { name: 'SaaS', icon: <Layers className="w-8 h-8 text-indigo-500" /> },
];

const services = [
  { title: 'UI/UX Design', icon: <Layout className="w-10 h-10 text-blue-500" />, desc: 'Modern, user-centric interfaces for web and mobile.' },
  { title: 'Web Development', icon: <Code className="w-10 h-10 text-green-500" />, desc: 'Robust, scalable, and high-performing websites.' },
  { title: 'E-Commerce', icon: <Briefcase className="w-10 h-10 text-yellow-500" />, desc: 'Custom online stores with seamless shopping experiences.' },
  { title: 'Mobile Apps', icon: <Smartphone className="w-10 h-10 text-purple-500" />, desc: 'Cross-platform mobile app development.' },
  { title: 'CMS Solutions', icon: <Database className="w-10 h-10 text-pink-500" />, desc: 'Flexible content management for your business.' },
  { title: 'SEO & Marketing', icon: <TrendingUp className="w-10 h-10 text-indigo-500" />, desc: 'Grow your reach with smart SEO and digital marketing.' },
];

const devSteps = [
  { title: 'Strategy', icon: '/images/process/strategy.svg', desc: 'We understand your vision and goals to craft a clear, actionable plan.' },
  { title: 'Design', icon: '/images/process/design.svg', desc: 'Wireframes and UI/UX design to ensure a delightful user experience.' },
  { title: 'Development', icon: '/images/process/development.svg', desc: 'Robust coding and integration using modern tech.' },
  { title: 'Testing', icon: '/images/process/testing.svg', desc: 'Thorough QA to ensure quality and performance.' },
  { title: 'Launch', icon: '/images/process/launch.svg', desc: 'Go live with confidence and post-launch support.' },
];

const commitments = [
  { icon: <CheckCircle className="w-8 h-8 text-blue-500" />, title: '100% Transparency' },
  { icon: <Shield className="w-8 h-8 text-green-500" />, title: 'Secure & Reliable' },
  { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: 'Fast Delivery' },
  { icon: <Users className="w-8 h-8 text-purple-500" />, title: 'Expert Team' },
  { icon: <Phone className="w-8 h-8 text-pink-500" />, title: '24/7 Support' },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-500" />, title: 'Result Driven' },
];

const TechStackCard: React.FC<{ tech: { name: string; icon: any; img: string }; idx: number }> = ({ tech, idx }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      whileHover={{ scale: 1.08 }}
      className="relative flex flex-col items-center group cursor-pointer"
    >
      <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 transition-transform">
        {!imgError ? (
          <Image src={tech.img} alt={tech.name} width={48} height={48} onError={() => setImgError(true)} />
        ) : (
          React.createElement(tech.icon, { size: 48, color: '#3b82f6' })
        )}
      </div>
      <span className="text-base font-medium mt-1 text-center">{tech.name}</span>
    </motion.div>
  );
};

export default function WebDesignDevelopmentPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/web-design-hero.jpg" alt="Web Design Hero" fill className="object-cover object-center z-0" priority />
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
              Web Design & Development
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Modern, high-performance websites for your business growth.
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

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Tech Stack Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                Technologies We Use
              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Driven by bold ideas, delivered through robust <span className="text-blue-700">Tech Stacks</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
              {/* <h1>We use the latest web technologies to build dynamic, high-performance web applications that are responsive, secure, and scalable, ensuring your digital presence stays modern, efficient, and ready for future growth.</h1> */}
            </div>
            <WebTechToolsSection />
          </div>
        </section>

        {/* 5. Industries Section */}
        <section className="py-20 px-6 md:px-16 bg-slate-100">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              {/* Left Column: Text */}
              <motion.div
                className="flex-1 w-full lg:w-1/2"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
                    BUSSINESS CHALLENGE
                  </h3>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl text-center">
                    Digital solutions for every industry
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                </div>
                <p className="text-gray-600 text-left max-w-lg lg:mx-0 mt-4 text-justify leading-relaxed">
                  Our team empowers businesses across industries by integrating cutting-edge technologies and optimizing workflows. We specialize in crafting tailored web solutions that address core operational challenges, enhance efficiency, and spark innovation. With a focus on tangible outcomes, we help organizations accelerate growth, improve customer experience, and stay ahead in a dynamic digital landscape. Our team delivers custom web solutions that solve real business problems and drive measurable results.
                </p>
                <div className="text-left">
                  <button
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow-md font-bold hover:bg-blue-700 transition duration-300"
                    onClick={() => window.location.href = '/industries'}
                  >
                    View Our Industries
                  </button>
                  <br />
                  <button
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow-md font-bold hover:bg-blue-700 transition duration-300"
                    onClick={() => window.location.href = '/'}
                  >
                    Consult Our Expert
                  </button>
                </div>

              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                className="flex-1 w-full lg:w-1/2 flex justify-center items-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/images/services/web-design-hero.jpg"
                  alt="Web Design Analytics Dashboard"
                  className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </section>


        {/* Industries Section (custom, above Commitment & Guarantee)
        <section className="relative py-0 px-0 w-full min-h-[75vh] overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(/images/services/web-design-hero.jpg)' }}>
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 w-full max-w-none">
            <div className="text-center pt-24 pb-20">
              <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">INDUSTRIES</h2>
              <p className="text-base text-white font-medium max-w-2xl mx-auto">As a leading tech partner, we excel in offering custom solutions for various industries, ensuring great versatility and the ability to cater to diverse business needs.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full">
              {[
                { label: 'AUTOMOTIVE', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><path d='M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2' /><circle cx='7.5' cy='17.5' r='2.5' /><circle cx='16.5' cy='17.5' r='2.5' /></svg> },
                { label: 'REAL ESTATE', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><path d='M3 21V9a2 2 0 012-2h14a2 2 0 012 2v12' /><path d='M9 22V12h6v10' /></svg> },
                { label: 'ENTERTAINMENT', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><rect x='2' y='7' width='20' height='10' rx='2' /><path d='M8 7V5a4 4 0 018 0v2' /></svg> },
                { label: 'RETAIL & ECOMMERCE', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><circle cx='17' cy='17' r='2' /><circle cx='7' cy='17' r='2' /><path d='M5 6h14l1 7H4z' /></svg> },
                { label: 'HEALTHCARE', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><path d='M12 2a10 10 0 100 20 10 10 0 000-20z' /><path d='M12 6v6l4 2' /></svg> },
                { label: 'TRANSPORTATION', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><rect x='2' y='7' width='20' height='10' rx='2' /><path d='M2 17h20' /><path d='M6 17v2' /><path d='M18 17v2' /></svg> },
                { label: 'MANUFACTURING', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><circle cx='12' cy='12' r='3' /><path d='M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z' /></svg> },
                { label: 'TRAVEL & TOURISM', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><path d='M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8' /><path d='M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2' /></svg> },
                { label: 'PROFESSIONAL SERVICES', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><circle cx='12' cy='12' r='10' /><path d='M8 12h8' /><path d='M12 8v8' /></svg> },
                { label: 'SOFTWARE VENDORS', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><rect x='2' y='7' width='20' height='10' rx='2' /><path d='M2 17h20' /><path d='M6 17v2' /><path d='M18 17v2' /></svg> },
                { label: 'BANKING & FINANCE', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><rect x='2' y='7' width='20' height='10' rx='2' /><path d='M2 17h20' /><path d='M6 17v2' /><path d='M18 17v2' /></svg> },
                { label: 'EDUCATION', icon: <svg width='48' height='48' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' className='mx-auto'><circle cx='12' cy='12' r='10' /><path d='M8 12h8' /><path d='M12 8v8' /></svg> },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={
                    `flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px] w-full border border-gray-200 transition-all duration-200 cursor-pointer group bg-white hover:bg-blue-900`
                  }
                >
                  <span className={`mb-2 text-blue-900 group-hover:text-white transition-all duration-200`}>{item.icon}</span>
                  <span className={`font-extrabold text-base md:text-lg uppercase tracking-wide text-blue-900 group-hover:text-white transition-all duration-200`}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* 6. Dev Process Section */}
        <WorkProcess />

        {/*7 Our commitment section*/}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
              <h3 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
                ASSURANCE TO YOU
              </h3>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Our <span className="text-blue-600">Commitment</span> and Guarantee
              </h2>

              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>

              <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                Techbrill Solutions delivers, robust, scalable and high performance software, web and mobile app development services to help you harness the power of technology, consulting and maximize your online bussiness insvestments.
              </p>

              {/* Commitment Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
                {/* 100% Transparency */}
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    100% Transparency
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complete visibility into project progress, timelines, and deliverables. No hidden costs or surprise changes.
                  </p>
                </div>

                {/* 95% On Time Delivery */}
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    95% On Time Delivery
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Proven track record of meeting deadlines with quality deliverables. We value your time and business commitments.
                  </p>
                </div>

                {/* Free 30 days support */}
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Free 30 Days Support
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complimentary post-launch support to ensure smooth operation and address any issues that may arise.
                  </p>
                </div>

                {/* Flexible Engagement */}
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
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


        {/*Commitments section blue tone version*/}

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
                Our team empowers businesses across industries by integrating cutting-edge technologies and optimizing workflows. We specialize in crafting tailored web solutions that address core operational challenges, enhance efficiency, and spark innovation.
              </p>


              {/* Commitment Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
                {/* 100% Transparency */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
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
                    <Shield className="w-8 h-8 text-blue-600" />
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
                    <Users className="w-8 h-8 text-blue-600" />
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

        {/*Work process section */}
          <section className="py-20 px-6 md:px-16 bg-white">
              {/* WorkProcess Component */}
              <WorkProcess />
          </section>
       
        {/* Why Choose Us Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-900">Why Choose Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver more than just code — we bring vision, precision, and a results-driven process to every project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-600" />,
                  title: 'Unique, Purposeful & Accessibility Standards Design',
                  desc: 'We craft digital experiences that are not only beautiful but also accessible and purposeful for every user.'
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-600" />,
                  title: 'Strong Technology Capability',
                  desc: 'Our team leverages the latest tech to build robust, scalable, and future-ready solutions.'
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-600" />,
                  title: 'Highly Creative & Motivated Teams',
                  desc: 'Our passionate experts bring creativity and energy to every project, driving innovation and results.'
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-600" />,
                  title: 'Result-Driven Approach and Process',
                  desc: 'We focus on outcomes, using proven processes to deliver measurable business value.'
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-600" />,
                  title: 'Flexible Engagement Models',
                  desc: 'Choose from a range of engagement options tailored to your needs and goals.'
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-600" />,
                  title: 'Seamless Communication',
                  desc: 'We keep you in the loop with clear, proactive, and responsive communication.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(59,130,246,0.10)', borderColor: '#2563eb', backgroundColor: 'rgba(59,130,246,0.04)' }}
                  className="flex flex-col items-center text-center gap-3 bg-white/80 rounded-2xl border border-blue-100 shadow-md px-7 py-8 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* 8. Contact CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6">Let us help you build a stunning, high-performing website.</p>
            <Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-blue-50">Contact Us</Button>
          </motion.div>
        </section>

        {/* 9. Contact Form Section */}
        {/* <section className="py-16">
          <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:w-1/2 flex items-center justify-center bg-blue-50 p-8">
              <img
                src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                alt="Contact Team"
                className="rounded-xl object-cover w-full max-w-[320px] h-[320px] border border-blue-100 shadow-md"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">Let&apos;s Connect...</h3>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input type="text" placeholder="Name" className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="email" placeholder="Email" className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex gap-4">
                  <input type="text" placeholder="Phone No" className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <select className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Web Design & Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                <textarea placeholder="Message" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4}></textarea>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </section> */}
        <ConsultationSection />

      </main>
    </ErrorBoundary>
  );
}



