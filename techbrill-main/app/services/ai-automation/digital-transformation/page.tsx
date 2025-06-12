'use client';

import React from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ShieldCheck, Layers, Settings } from 'lucide-react';

export default function DigitalTransformationPage() {
  return (
    <div>
      <PageHeader 
        title="Digital Transformation" 
        description="Leading your business through impactful digital change"
      />

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What is Digital Transformation?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Digital Transformation is the strategic adoption of digital technologies to fundamentally change how a business operates and delivers value to its customers. It goes beyond simply using technology; it involves a cultural shift that requires organizations to continuously challenge the status quo, experiment, and adapt to changing market demands. This transformation impacts all aspects of a business, from customer interactions and internal processes to business models and company culture.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            In today&apos;s fast-paced digital economy, embracing digital transformation is no longer optional but essential for survival and growth. Businesses that successfully navigate this transition can achieve significant advantages, including increased agility, improved operational efficiency, enhanced customer experiences, and the ability to innovate rapidly.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At TechBrill Solutions, we partner with you to identify opportunities, develop a roadmap, and implement the necessary changes to thrive in the digital age. Our approach focuses on integrating technology across all areas of your business to enhance efficiency, improve customer experience, and unlock new revenue streams. We guide you through every step, ensuring a smooth and successful transformation journey.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Benefits of Digital Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Cards */}
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Increased Efficiency</h3>
              <p className="text-gray-700 dark:text-gray-300">Streamline operations and automate processes for greater productivity and reduced costs.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Improved Customer Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">Deliver personalized and seamless experiences that meet evolving customer expectations.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Faster Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">Enable rapid experimentation and the introduction of new products and services.</p>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enhanced Security & Compliance</h3>
              <p className="text-gray-700 dark:text-gray-300">Strengthen your security posture and ensure compliance in a digital landscape.</p>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <Layers className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
              <p className="text-gray-700 dark:text-gray-300">Leverage data analytics to gain valuable insights for informed decision-making.</p>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <Settings className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Increased Agility</h3>
              <p className="text-gray-700 dark:text-gray-300">Adapt quickly to market changes and seize new opportunities with a flexible digital foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Addressing Your Digital Transformation Challenges</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
            {/* Placeholder: List common pain points and how your service addresses them */}
            <li>**Legacy Systems Integration:** We help you integrate new digital solutions with your existing infrastructure seamlessly.</li>
            <li>**Resistance to Change:** We provide change management strategies and training to ensure smooth adoption within your organization.</li>
            <li>**Data Security Concerns:** We implement robust security measures to protect your valuable data throughout the transformation process.</li>
            {/* Add more pain points */}
          </ul>
        </div>
      </section>

      {/* Case Studies/Success Stories Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Digital Transformation Case Studies</h2>
          {/* Placeholder: Showcase relevant case studies or testimonials */}
          <p className="text-lg text-gray-700 dark:text-gray-300">[Showcase compelling case studies here, highlighting successful digital transformation projects you&apos;ve completed for clients.]</p>
          {/* Add case studies */} 
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready for Digital Transformation?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your digital transformation journey.</p>
          <Button variant="secondary" size="lg" className="group">
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Digital Transformation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Strategy & Consulting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Our expert consultants help you define a clear digital transformation strategy aligned with your business objectives. We assess your current digital maturity, identify areas for improvement, and develop a comprehensive roadmap for your transformation journey.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Digital Maturity Assessment: Evaluating your current capabilities and identifying gaps.</li>
                <li>• Digital Strategy Development: Crafting a tailored strategy to achieve your transformation goals.</li>
                <li>• Business Process Re-engineering: Optimizing workflows for digital efficiency.</li>
                <li>• Technology Roadmap: Planning the implementation of key technologies.</li>
                <li>• Change Management: Ensuring a smooth transition for your organization and employees.</li>
              </ul>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Implementation Services</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We provide end-to-end implementation services to bring your digital transformation strategy to life. Our team assists with the adoption of cloud technologies, implementation of data analytics solutions, automation of processes, modernization of legacy systems, and integration of robust cybersecurity measures.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Cloud Adoption: Migrating and optimizing your infrastructure on leading cloud platforms.</li>
                <li>• Data Analytics Implementation: Setting up systems for data collection, analysis, and reporting.</li>
                <li>• Automation Solutions: Implementing tools and workflows to automate repetitive tasks.</li>
                <li>• Legacy System Modernization: Updating or replacing outdated systems for improved performance.</li>
                <li>• Cybersecurity Integration: Embedding security best practices throughout your digital infrastructure.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 