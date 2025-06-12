'use client';

import React from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function DataAnalyticsPage() {
  return (
    <div>
      <PageHeader 
        title="Data Analytics" 
        description="Transforming raw data into actionable insights"
      />

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">What is Data Analytics?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making. It involves applying statistical methods and technological tools to uncover patterns and insights that might not be apparent in raw data. By extracting meaningful knowledge from data, businesses can gain a deeper understanding of their operations, customers, and market trends.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            In today&apos;s data-rich environment, the ability to effectively analyze and interpret data is a key differentiator for businesses aiming for success. Data analytics empowers organizations to move from reactive decision-making to proactive strategies based on empirical evidence. It supports various functions, including sales, marketing, finance, and operations, by providing the insights needed for optimization and innovation.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At TechBrill Solutions, we empower businesses to leverage the full potential of their data, providing comprehensive data analytics services that drive strategic growth, improve operational efficiency, and enhance customer understanding. Our team of data experts utilizes cutting-edge tools and techniques to transform your raw data into actionable insights, helping you make smarter decisions and achieve better business outcomes.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Benefits of Data Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Improved Decision-Making</h3>
              <p className="text-gray-700 dark:text-gray-300">Make informed, data-driven decisions based on accurate insights and trends.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Gain Deeper Customer Understanding</h3>
              <p className="text-gray-700 dark:text-gray-300">Analyze customer behavior and preferences to personalize experiences and improve satisfaction.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Optimize Business Operations</h3>
              <p className="text-gray-700 dark:text-gray-300">Identify inefficiencies, streamline processes, and reduce costs through data-backed analysis.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Predict Future Trends</h3>
              <p className="text-gray-700 dark:text-gray-300">Utilize predictive analytics to forecast market shifts, customer behavior, and potential opportunities.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Mitigate Risks</h3>
              <p className="text-gray-700 dark:text-gray-300">Identify potential risks and develop strategies to minimize their impact based on data analysis.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Enhance Customer Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">Tailor products, services, and interactions to meet individual customer needs and improve loyalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Addressing Your Data Analytics Challenges</h2>
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
          <h2 className="text-3xl font-bold mb-8">Data Analytics Case Studies</h2>
          {/* Placeholder: Showcase relevant case studies or testimonials */}
          {/* Add case studies */} 
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready to Leverage Your Data?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your data analytics needs.</p>
          <Button variant="secondary" size="lg" className="group">
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Our Data Analytics Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Data Analytics Consulting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Our data analytics consulting services are designed to help you build a robust data strategy and implement effective business intelligence solutions. We assist with data visualization, reporting, predictive modeling, and establishing data governance and quality frameworks to ensure your data is accurate, reliable, and actionable.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Data Strategy Development: Crafting a roadmap for leveraging data across your organization.</li>
                <li>• Business Intelligence Implementation: Setting up dashboards and reporting tools for insights.</li>
                <li>• Data Visualization & Reporting: Creating clear and impactful visual representations of data.</li>
                <li>• Predictive Modeling & Forecasting: Building models to predict future trends and outcomes.</li>
                <li>• Data Governance & Quality: Establishing policies and procedures for data accuracy and security.</li>
              </ul>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We provide advanced analytics solutions, including machine learning model development and big data analytics, to uncover deeper insights from complex datasets. Our expertise covers various analytical areas, such as customer analytics, operational analytics, and financial analytics, to support specialized business needs.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Machine Learning Model Development: Building custom ML models for complex analysis.</li>
                <li>• Big Data Analytics: Processing and analyzing large volumes of structured and unstructured data.</li>
                <li>• Customer Analytics: Understanding customer behavior and preferences for personalized strategies.</li>
                <li>• Operational Analytics: Optimizing business processes through data-driven insights.</li>
                <li>• Financial Analytics: Analyzing financial data for forecasting, budgeting, and risk management.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 