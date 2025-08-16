'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Code, Layout, Smartphone, Shield, Zap, Mail, Phone, Globe, Briefcase, Layers, Database, Monitor, TrendingUp, ChevronDown, Clock, Gift, Shuffle, Headphones, Lightbulb, Palette, Target, Handshake, BadgeDollarSign, PhoneCall } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Icon } from '@iconify/react';
import ServicesSection from '@/components/ui/services-section-AI&ML';
import { cn } from '@/lib/utils';
import ConsultationSection from '@/components/ConsultationSection';
import TechStackSection from '@/components/ui/TechStack-AI';
import { ExpandableCardDemo } from '@/components/ui/AI-development-roadmap';

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

export default function AIMlDevelopmentPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/ai-ml-hero.jpg" alt="Mobile App Development Hero" fill className="object-cover object-center z-0" priority />
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
              AI & ML Development
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Helping businesses grow with AI & ML solutions.
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

        {/* 3. Services Section */}
        <ServicesSection />
     
        {/* 6. AI DEV Process Section */}
        <section className = "py-20 px-6 md:px-16 bg-white dark:bg-gray-950">
        {<ExpandableCardDemo/>}
        </section>
        

        {/*7. AI tech stack section */}
        <TechStackSection/>


        {/* 7. Commitment & Why Choose Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Our Commitment & Guarantee</h2>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver robust, scalable, and high-performance mobile solutions. Our team is dedicated to transparency, timely delivery, and ongoing support—empowering your business to thrive in a mobile-first world.
              </p>
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
                  title: '30 Days Free Support',
                  desc: 'Enjoy complimentary post-launch support for a smooth transition.'
                },
                {
                  icon: <Shuffle className="w-10 h-10 text-blue-800" />,
                  title: 'Flexible Engagements',
                  desc: 'Choose a partnership model that fits your business and budget.'
                },
                {
                  icon: <Headphones className="w-10 h-10 text-blue-800" />,
                  title: '24/7 Expert Help',
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
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Why Choose Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver more than just mobile apps — we bring vision, precision, and a results-driven process to every project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-800" />,
                  title: 'Unique, Purposeful & Accessibility Standards Design',
                  desc: 'We craft mobile experiences that are not only beautiful but also accessible and purposeful for every user.'
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-800" />,
                  title: 'Strong Technology Capability',
                  desc: 'Our team leverages the latest mobile tech to build robust, scalable, and future-ready solutions.'
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-800" />,
                  title: 'Highly Creative & Motivated Teams',
                  desc: 'Our passionate experts bring creativity and energy to every mobile project, driving innovation and results.'
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-800" />,
                  title: 'Result-Driven Approach and Process',
                  desc: 'We focus on outcomes, using proven processes to deliver measurable business value through mobile apps.'
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-800" />,
                  title: 'Flexible Engagement Models',
                  desc: 'Choose from a range of engagement options tailored to your mobile app needs and goals.'
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-800" />,
                  title: 'Seamless Communication',
                  desc: 'We keep you in the loop with clear, proactive, and responsive communication throughout your mobile app journey.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(30,64,175,0.10)', borderColor: '#1e40af', backgroundColor: 'rgba(30,64,175,0.04)' }}
                  className="flex flex-col items-center text-center gap-3 bg-white/80 rounded-2xl border border-blue-100 shadow-md px-7 py-8 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-lg"
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

        <ConsultationSection bgImage="/images/services/mobile-app-hero.jpg" />
      </main>
    </ErrorBoundary>
  );
} 