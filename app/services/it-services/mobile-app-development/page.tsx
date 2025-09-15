'use client';

import Reviews from "@/components/review";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Code, Layout, Smartphone, Shield, Zap, Mail, Phone, Globe, Briefcase, Layers, Database, Monitor, TrendingUp, ChevronDown, Clock, Gift, Shuffle, Headphones, Lightbulb, Palette, Target, Handshake, BadgeDollarSign, PhoneCall } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFigma, SiAmazon, SiMongodb, SiTypescript } from 'react-icons/si';
import { Icon } from '@iconify/react';

import { TextRevealCard } from '@/components/ui/text-reveal-card';
import { FocusCards } from '@/components/ui/focus-cards';
import WebTechToolsSection from '@/components/ui/web-tech-tools-section';
import MobileTechToolsSection from '@/components/ui/mobile-tech-tools-section';
import ServicesSection from '@/components/ui/services-section-mobile';
import WorkProcessMob from '@/components/ui/work-process-mob';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import ConsultationSection from '@/components/ConsultationSection';
import ConsultationSectionMob from '@/components/ConsultationSectionMob';

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
  { name: 'React Native', icon: <Icon icon="simple-icons:reactnative" className="w-7 h-7" /> },
  { name: 'Flutter', icon: '/images/tech/flutter.svg' },
  { name: 'Swift', icon: '/images/tech/swift.svg' },
  { name: 'Kotlin', icon: '/images/tech/kotlin.svg' },
  { name: 'Firebase', icon: '/images/tech/firebase.svg' },
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
  { title: 'Native iOS Development', icon: <Smartphone className="w-10 h-10 text-blue-500" />, desc: 'High-performance iOS apps built with Swift and SwiftUI.' },
  { title: 'Native Android Development', icon: <Smartphone className="w-10 h-10 text-green-500" />, desc: 'Robust Android apps using Kotlin and modern Android architecture.' },
  { title: 'Cross-Platform Apps', icon: <Smartphone className="w-10 h-10 text-yellow-500" />, desc: 'React Native and Flutter apps for multiple platforms.' },
  { title: 'UI/UX Design', icon: <Layout className="w-10 h-10 text-purple-500" />, desc: 'Mobile-first design that delights users.' },
  { title: 'App Maintenance', icon: <Database className="w-10 h-10 text-pink-500" />, desc: 'Ongoing support, updates, and performance optimization.' },
  { title: 'App Store Deployment', icon: <TrendingUp className="w-10 h-10 text-indigo-500" />, desc: 'Seamless app store submission and management.' },
];

const devSteps = [
  { title: 'Strategy', icon: '/images/process/strategy.svg', desc: 'We understand your vision and goals to craft a clear, actionable mobile strategy.' },
  { title: 'Design', icon: '/images/process/design.svg', desc: 'Mobile-first UI/UX design to ensure a delightful user experience.' },
  { title: 'Development', icon: '/images/process/development.svg', desc: 'Robust mobile development using modern frameworks and best practices.' },
  { title: 'Testing', icon: '/images/process/testing.svg', desc: 'Comprehensive testing across devices and platforms.' },
  { title: 'Launch', icon: '/images/process/launch.svg', desc: 'App store deployment and post-launch support.' },
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

export default function MobileAppDevelopmentPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/mobile-app-hero.jpg" alt="Mobile App Development Hero" fill className="object-cover object-center z-0" priority />
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
              Mobile App Development
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Transform Your Ideas into Powerful Mobile Apps
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
                {/* <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">Get Started</Button> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">View Portfolio</Button> */}
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
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                Technologies We Use
              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Powering Innovation with Proven Mobile Technologies
              </h2>
              <div className="h-1 w-20 bg-red-600 dark:bg-blue-400 mx-auto mb-3 mt-4"></div>
              <h3 className=" text-base text-gray-600   max-w-3xl mx-auto mt-1 leading-relaxed">
                We leverage modern frameworks, tools, and platforms to build secure, scalable, and high-performing mobile apps tailored to your business needs.						</h3>
            </div>
            <MobileTechToolsSection />
          </div>
        </section>

        {/* 5. Industries Section */}
        <section
          className="relative py-0 px-0 w-full min-h-[75vh] overflow-hidden bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url(/images/services/mobile-app-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 w-full w-full">
            <div className="text-center pt-24 pb-20 px-6">
              <h2 className="text-xl font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">INDUSTRIES EXPERTISE</h2>
              <h3 className="mt-2 mb-2 text-xl sm:text-3xl font-bold text-white dark:text-white md:text-4xl">
                Tailored App Solutions for Every Industry Need
              </h3>
              <p className="text-base text-white font-medium max-w-2xl mx-auto">
                As a leading tech partner, we excel in offering custom solutions for various industries,
                ensuring great versatility and the ability to cater to diverse business needs.
              </p>
            </div>

            {/* White background wrapper */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { label: 'AUTOMOTIVE', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></svg> },
                  { label: 'REAL ESTATE', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21V9a2 2 0 012-2h14a2 2 0 012 2v12" /><path d="M9 22V12h6v10" /></svg> },
                  { label: 'ENTERTAINMENT', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M8 7V5a4 4 0 018 0v2" /></svg> },
                  { label: 'RETAIL & ECOMMERCE', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="17" cy="17" r="2" /><circle cx="7" cy="17" r="2" /><path d="M5 6h14l1 7H4z" /></svg> },
                  { label: 'HEALTHCARE', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /><path d="M12 6v6l4 2" /></svg> },
                  { label: 'TRANSPORTATION', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 17h20" /><path d="M6 17v2" /><path d="M18 17v2" /></svg> },
                  { label: 'MANUFACTURING', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
                  { label: 'TRAVEL & TOURISM', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8" /><path d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2" /></svg> },
                  { label: 'PROFESSIONAL SERVICES', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg> },
                  { label: 'SOFTWARE VENDORS', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 17h20" /><path d="M6 17v2" /><path d="M18 17v2" /></svg> },
                  { label: 'BANKING & FINANCE', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 17h20" /><path d="M6 17v2" /><path d="M18 17v2" /></svg> },
                  { label: 'EDUCATION', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg> },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md border border-blue-600 cursor-pointer transition-all duration-300 hover:bg-blue-50 group"
                  >
                    <span className="mb-3 text-blue-500 group-hover:text-blue-400 transition-colors duration-300">{item.icon}</span>
                    <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-gray-700 group-hover:text-blue-400 transition-colors duration-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 6. Dev Process Section */}
        <WorkProcessMob />


        {/* 7. Commitment & Why Choose Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                ASSURANCE TO YOU              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl mb-3">
                Our Commitment & Guarantee
              </h2>
              <div className="w-32 h-1 mx-auto bg-red-600 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We promise consistent excellence for delivering on time, supporting you always, and ensuring every project is handled with care and integrity.              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
              {[
                {
                  icon: <CheckCircle className="w-10 h-10 text-blue-800" />,
                  title: '100% Transparency',
                  desc: 'Clear, honest communication and full project visibility from start to finish.'
                },
                {
                  icon: <Clock className="w-10 h-10 text-blue-800" />,
                  title: 'On-Time Delivery',
                  desc: '95%+ of our projects launch on schedule, so you can plan with confidence.'
                },
                {
                  icon: <Gift className="w-10 h-10 text-blue-800" />,
                  title: '30 Days Support',
                  desc: 'Enjoy complimentary post-launch support for a smooth transition.'
                },
                {
                  icon: <Shuffle className="w-10 h-10 text-blue-800" />,
                  title: 'Flexible Engagements',
                  desc: 'Choose a partnership model that fits your business and budget.'
                },
                {
                  icon: <Headphones className="w-10 h-10 text-blue-800" />,
                  title: '24/7 Support',
                  desc: 'Our team is always available to assist you, day or night.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(30,64,175,0.10)', borderColor: '#1e40af', backgroundColor: 'rgba(30,64,175,0.04)' }}
                  className={cn(
                    "flex flex-col items-center justify-center text-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg px-6 py-8 min-w-0 border border-blue-100 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-xl",
                    "sm:gap-3 md:gap-4"
                  )}
                >
                  <div className="flex items-center justify-center mb-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-white">
                WHY CHOOSE US</h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl mb-3">
                Good Reasons to Team Up with Us              </h2>
              <div className="w-32 h-1 mx-auto bg-red-600 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                What makes us stand out is our commitment to innovation, user experience, and scalable solutions that truly empower businesses.                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-800" />,
                  title: 'Proven Expertise',
                  desc: 'Skilled team with deep domain knowledge in mobile app development.'
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-800" />,
                  title: 'End-to-End Services',
                  desc: 'From ideation to post-launch, everything under one roof.'
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-800" />,
                  title: 'Industry Experience',
                  desc: 'Proven track record across multiple industries and use cases.'
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-800" />,
                  title: 'User-Centric Design',
                  desc: 'Focused on delivering intuitive experiences that delight users.'
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-800" />,
                  title: 'Innovation First',
                  desc: 'Cutting-edge technologies and creative solutions for future-ready apps.'
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-800" />,
                  title: 'Scalable Solutions',
                  desc: 'Apps designed to grow with your business needs.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
                  className="flex flex-col items-center text-center gap-3 
                 bg-gradient-to-br from-blue-50 to-white   // ✅ applied to ALL cards
                 rounded-2xl border border-blue-200 
                 shadow-md px-7 py-8 
                 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
        <div>

          {/* Tstimonial */}
          <Reviews />

        </div>

        <ConsultationSectionMob bgImage="/images/services/mobile-app-hero.jpg" />
      </main>
    </ErrorBoundary>
  );
} 