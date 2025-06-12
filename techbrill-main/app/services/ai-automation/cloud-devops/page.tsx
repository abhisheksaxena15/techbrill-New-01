"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { ShieldCheck, Wrench, Monitor, Zap, Scale, Users } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';

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

export default function CloudDevOpsPage() {
  return (
    <ErrorBoundary>
      <div>
        <PageHeader 
          title="Cloud & DevOps" 
          description="Accelerating innovation and efficiency with cloud-native solutions"
        />

        {/* Service Explanation Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8">What is Cloud & DevOps?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Cloud and DevOps represent a powerful synergy that transforms software development and IT operations. By combining cloud infrastructure with DevOps practices, organizations can achieve faster release cycles, improved collaboration, and increased operational efficiency. Cloud computing provides the on-demand infrastructure and services, while DevOps provides the culture, automation, measurement, and sharing practices to leverage the cloud effectively.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Implementing Cloud and DevOps is crucial for businesses seeking to innovate rapidly and scale their operations efficiently. This approach breaks down silos between development and operations teams, enabling continuous integration and continuous delivery (CI/CD) pipelines that automate the software release process. The result is higher quality software, delivered faster and more reliably.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At TechBrill Solutions, we help you leverage the full potential of the cloud through DevOps methodologies, enabling you to build, deploy, and manage applications seamlessly and at scale. Our expertise in cloud architecture, automation tools, and DevOps practices ensures your business can achieve greater agility, cost savings, and resilience.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-4xl mx-auto aspect-video">
                <Image 
                  src="/images/services/cloud-devops-hero.jpg" 
                  alt="Cloud and DevOps Services" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </motion.div>
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
              Benefits of Cloud & DevOps
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
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Faster Time to Market</h3>
                <p className="text-gray-700 dark:text-gray-300">Accelerate your development cycles and deploy new features rapidly with streamlined CI/CD pipelines.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Scale className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improved Scalability & Reliability</h3>
                <p className="text-gray-700 dark:text-gray-300">Build resilient and scalable applications leveraging the flexible infrastructure of the cloud.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Collaboration</h3>
                <p className="text-gray-700 dark:text-gray-300">Foster a culture of collaboration between development and operations teams for seamless workflows.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Robust Security & Compliance</h3>
                <p className="text-gray-700 dark:text-gray-300">Implement strong security measures and ensure compliance with industry standards in the cloud.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automated Operations</h3>
                <p className="text-gray-700 dark:text-gray-300">Automate repetitive tasks and infrastructure management for increased efficiency and reduced errors.</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Monitor className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuous Monitoring & Feedback</h3>
                <p className="text-gray-700 dark:text-gray-300">Gain real-time insights into application performance and infrastructure health for proactive optimization.</p>
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
              <h2 className="text-3xl font-bold mb-8">Our Cloud & DevOps Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Our comprehensive cloud services cover every stage of your cloud journey, from initial strategy and migration to ongoing management and security. We help you leverage the power of leading cloud platforms to build a scalable, secure, and cost-effective infrastructure.</p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• Cloud Strategy & Consulting: Defining the right cloud strategy for your business needs.</li>
                    <li>• Cloud Migration: Seamlessly migrating your applications and data to the cloud.</li>
                    <li>• Cloud Infrastructure Management: Managing and optimizing your cloud resources.</li>
                    <li>• Cloud Security: Implementing robust security measures in your cloud environment.</li>
                    <li>• Disaster Recovery & Business Continuity: Ensuring business resilience in the cloud.</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-4">DevOps Services</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Our DevOps services focus on automating and streamlining your software development and IT operations. We implement CI/CD pipelines, Infrastructure as Code (IaC), configuration management, automated testing, and monitoring to accelerate your release cycles and improve operational efficiency.</p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>• CI/CD Implementation: Setting up automated pipelines for faster releases.</li>
                    <li>• Infrastructure as Code (IaC): Managing infrastructure through code for consistency.</li>
                    <li>• Configuration Management: Automating system configuration and management.</li>
                    <li>• Automated Testing: Integrating automated tests into the development pipeline.</li>
                    <li>• Monitoring & Logging: Implementing systems for continuous monitoring and analysis.</li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Cloud Operations?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your Cloud & DevOps needs.</p>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 