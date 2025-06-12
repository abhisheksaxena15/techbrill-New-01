'use client';

import React from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function GenerativeAIPage() {
  return (
    <div>
      <PageHeader 
        title="Generative AI" 
        description="Unlocking creativity and efficiency with Generative AI solutions"
      />

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">What is Generative AI?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Generative AI is a revolutionary field of artificial intelligence focused on creating new content, ideas, and solutions. Unlike traditional AI that analyzes existing data, Generative AI models learn patterns and structures to generate novel outputs, such as text, images, code, and more. These models are trained on vast datasets and utilize complex algorithms to understand and replicate human-like creativity and problem-solving.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The capabilities of Generative AI are rapidly expanding, opening up exciting possibilities across numerous industries. From automating repetitive tasks and enhancing creative workflows to developing personalized customer experiences and generating synthetic data for training other AI models, the potential applications are vast and continue to grow.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At TechBrill Solutions, we harness the power of Generative AI to help businesses automate content creation, enhance creativity, and develop innovative applications that drive engagement and efficiency. Our expertise spans across various Generative AI models and techniques, allowing us to build tailored solutions that address your specific business needs and unlock new levels of innovation.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Benefits of Generative AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Automated Content Creation</h3>
              <p className="text-gray-700 dark:text-gray-300">Generate high-quality text, images, and other media automatically, saving time and resources.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Enhanced Creativity & Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">Explore new ideas and creative possibilities with AI-powered generation and suggestions.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Accelerated Development</h3>
              <p className="text-gray-700 dark:text-gray-300">Speed up software development with AI-assisted code generation and debugging.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Personalized Experiences</h3>
              <p className="text-gray-700 dark:text-gray-300">Create highly personalized content and recommendations for individual users.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Efficient Code Generation</h3>
              <p className="text-gray-700 dark:text-gray-300">Generate code snippets, functions, and even entire programs based on natural language descriptions.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Improved Customer Interaction</h3>
              <p className="text-gray-700 dark:text-gray-300">Enhance chatbots and virtual assistants with more natural and creative conversational abilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Addressing Your Generative AI Challenges</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
            {/* Placeholder: List common pain points and how your service addresses them */}
            <li>Pain Point 1: Briefly describe the pain point and your solution.</li>
            {/* Add more pain points */}
          </ul>
        </div>
      </section>

      {/* Case Studies/Success Stories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Generative AI Case Studies</h2>
          {/* Placeholder: Showcase relevant case studies or testimonials */}
          {/* Add case studies */} 
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Generative AI?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your Generative AI needs.</p>
          <Button variant="secondary" size="lg" className="group">
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Our Generative AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Generative AI Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We offer comprehensive Generative AI development services, from training custom models to integrating AI-powered content generation platforms into your existing systems. Our team specializes in building bespoke Generative AI solutions tailored to your unique requirements.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Custom Model Training: Developing and training Generative AI models for specific tasks.</li>
                <li>• AI-Powered Content Generation Platforms: Building platforms for automated text, image, or code generation.</li>
                <li>• Integrating Generative Models into Applications: Seamlessly embedding AI capabilities into your software.</li>
                <li>• Fine-tuning Pre-trained Models: Adapting existing powerful models for your domain.</li>
                <li>• Generative AI Consulting: Providing expert guidance on leveraging Generative AI for your business.</li>
              </ul>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Use Case Implementation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We help you identify and implement practical use cases for Generative AI within your organization. From automating report generation and personalizing marketing content to enhancing chatbots and generating synthetic data, we turn the potential of Generative AI into tangible business outcomes.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Automated Report Generation: Generating reports and summaries from complex data.</li>
                <li>• Personalized Marketing Content: Creating tailored marketing materials for individual customers.</li>
                <li>• AI-Assisted Code Development: Utilizing AI to accelerate software development workflows.</li>
                <li>• Chatbot and Conversational AI Enhancement: Improving the capabilities of conversational agents.</li>
                <li>• Synthetic Data Generation: Creating realistic synthetic data for training and testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 