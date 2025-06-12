'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Vortex } from '@/components/ui/vortex';
import { ArrowRight, TrendingUp, Calendar, BarChart3, ThumbsUp, DollarSign, Blocks, Cloud, UserCheck, Brain, UserSearch, ShieldCheck, Star, Shield, AlertTriangle, Database, Users, TrendingUpDownIcon, LucideScale, Minus } from 'lucide-react';

import { InfoTabs } from '@/components/ui/info-tab';
import CaseStudiesCarousel from '@/components/ui/casestudies-carousel';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Data Quality and Inconsistency Issues',
    description: 'Organizations struggle with incomplete, inaccurate, or inconsistent data across multiple sources, leading to unreliable insights and flawed business decisions that undermine confidence in analytics initiatives.',
    icon: <AlertTriangle />,
  },
  {
    title: 'Data Silos and Integration Complexity',
    description: 'Data scattered across disconnected systems and departments creates barriers to comprehensive analysis, while complex ETL processes and lack of standardization make it difficult to achieve a unified view of business operations.',
    icon: <Database />,
  },
  {
    title: 'Skills Gap and Analytics Literacy',
    description: 'Companies face shortages of qualified data scientists and analysts, while business users lack the skills to interpret data effectively, creating bottlenecks in data-driven decision making and reducing analytics adoption across teams.',
    icon: <Users />,
  },
  {
    title: 'Scalability and Performance Limitations',
    description: 'Growing data volumes overwhelm existing infrastructure and tools, causing slow query performance and system crashes that frustrate users and limit the ability to process real-time analytics for time-sensitive business decisions.',
    icon: <TrendingUp />,
  },
];

const caseStudies = [
  {
    title: 'Gucci',
    subtitle: 'Instagram Growth & Sales Optimization',
    description:
      'Increased Instagram followers by 250% and boosted online sales by 60% in just 3 months through influencer collaborations and ad optimization.',
    challenge: 'Low brand awareness and declining engagement rates on Instagram',
    solution: 'Implemented influencer partnerships and optimized ad targeting',
    results: '250% follower growth, 60% sales increase, 8.5% engagement rate',
    // metrics: [
    //   { label: "Follower Growth", value: "250%", icon: Users },
    //   { label: "Sales Increase", value: "60%", icon: TrendingUp },
    //   { label: "Engagement Rate", value: "8.5%", icon: Target }
    // ],
    image: '/images/services/social-media-marketing/fashion-brand.jpg',
    tags: ['Instagram', 'Influencer Marketing', 'E-commerce'],
    duration: '3 months',
    industry: 'Fashion & Retail',
    client: 'Premium Fashion Brand',
  },
  {
    title: 'WebAI',
    subtitle: 'LinkedIn Lead Generation Campaign',
    description:
      'Generated 1,200+ qualified leads via LinkedIn campaigns with a 5.3x return on ad spend (ROAS), establishing them as an industry thought leader.',
    challenge: 'Difficulty in reaching decision-makers and generating quality leads',
    solution: 'Strategic LinkedIn content marketing and targeted B2B advertising',
    results: '1,200+ qualified leads, 5.3x ROAS, 45% reduction in cost per lead',
    // metrics: [
    //   { label: "Qualified Leads", value: "1,200+", icon: Target },
    //   { label: "ROAS", value: "5.3x", icon: TrendingUp },
    //   { label: "Cost per Lead", value: "-45%", icon: Award }
    // ],
    image: '/images/services/social-media-marketing/tech-startup.jpg',
    tags: ['LinkedIn', 'B2B Marketing', 'Lead Generation'],
    duration: '6 months',
    industry: 'Technology',
    client: 'B2B SaaS Startup',
  },
  {
    title: 'KFC',
    subtitle: 'Multi-Platform Brand Awareness',
    description:
      'Transformed a local restaurant into a regional favorite with 400% increase in social mentions and 180% growth in foot traffic.',
    challenge: 'Limited brand recognition beyond local market',
    solution: 'Multi-platform content strategy with location-based targeting',
    results: '400% increase in social mentions, 180% foot traffic growth',
    // metrics: [
    //   { label: "Social Mentions", value: "400%", icon: Users },
    //   { label: "Foot Traffic", value: "180%", icon: TrendingUp },
    //   { label: "Brand Recognition", value: "320%", icon: Award }
    // ],
    image: '/images/services/social-media-marketing/restaurant-chain.jpg',
    tags: ['Multi-Platform', 'Local SEO', 'Content Marketing'],
    duration: '4 months',
    industry: 'Food & Beverage',
    client: 'Regional Restaurant Chain',
  },
  {
    title: 'Hubspot',
    subtitle: 'Twitter Community Building',
    description:
      'Built an engaged community of 50K+ developers and tech enthusiasts, resulting in 300% increase in trial signups and improved customer retention.',
    challenge: 'Low brand awareness in developer community and poor trial conversion',
    solution: 'Community-driven content strategy and developer-focused engagement',
    results: '50K+ community members, 300% trial signup increase, 85% retention rate',
    // metrics: [
    //   { label: "Community Growth", value: "50K+", icon: Users },
    //   { label: "Trial Signups", value: "300%", icon: Target },
    //   { label: "Retention Rate", value: "+85%", icon: Award }
    // ],
    image: '/images/services/social-media-marketing/saas-platform.jpg',
    tags: ['Twitter', 'Community Building', 'SaaS Marketing'],
    duration: '8 months',
    industry: 'Software',
    client: 'Developer Tools Platform',
  },
  {
    title: 'Khan Academy',
    subtitle: 'YouTube Channel Growth & Monetization',
    description:
      'Grew educational YouTube channel from 5K to 100K+ subscribers with 400% increase in course sales through strategic video content and community engagement.',
    challenge: 'Stagnant subscriber growth and low course conversion rates',
    solution: 'Educational content series with strong call-to-actions and community building',
    results: '95K new subscribers, 400% course sales increase, 12% conversion rate',
    // metrics: [
    //   { label: "Subscriber Growth", value: "95K+", icon: Users },
    //   { label: "Course Sales", value: "400%", icon: TrendingUp },
    //   { label: "Conversion Rate", value: "12%", icon: Target }
    // ],
    image: '/images/services/social-media-marketing/elearning-platform.jpg',
    tags: ['YouTube', 'Educational Content', 'Sales Funnel'],
    duration: '10 months',
    industry: 'Education',
    client: 'Online Learning Platform',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="h-[40rem] w-full rounded-md relative bg-transparent dark:bg-transparent flex flex-col items-center justify-center antialiased">
              <div className="max-w-2xl mx-auto p-4 mb-5">
                <motion.h1
                  className="relative z-10 text-lg md:text-6xl bg-clip-text text-center font-sans font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Data Analytics
                </motion.h1>
                <motion.p
                  className="text-gray-400 mx-auto my-2 text-xl text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Transforming raw data into actionable insights
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <button className="group relative px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:bg-blue-700 hover:border-none text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none shadow-lg hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.section>

        </Vortex>
      </div>




      {/* Service Explanation Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-black"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What is Data Analytics?
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making. It involves applying statistical methods and technological tools to uncover patterns and insights that might not be apparent in raw data. By extracting meaningful knowledge from data, businesses can gain a deeper understanding of their operations, customers, and market trends.
              </motion.p>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                In today's data-rich environment, the ability to effectively analyze and interpret data is a key differentiator for businesses aiming for success. Data analytics empowers organizations to move from reactive decision-making to proactive strategies based on empirical evidence. It supports various functions, including sales, marketing, finance, and operations, by providing the insights needed for optimization and innovation.
              </motion.p>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                At TechBrill Solutions, we empower businesses to leverage the full potential of their data, providing comprehensive data analytics services that drive strategic growth, improve operational efficiency, and enhance customer understanding. Our team of data experts utilizes cutting-edge tools and techniques to transform your raw data into actionable insights, helping you make smarter decisions and achieve better business outcomes.
              </motion.p>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Predictive Analysis
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <UserSearch className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Customer Segmentation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Fraud Detection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Trend Prediction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Risk Management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Education</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-black"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Benefits of Data Analytics
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Strategize and grow with the insights from your data.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Blocks className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Improved Decision-Making
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Make informed, data-driven decisions based on accurate insights and trends.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Gain Deeper Customer Understanding
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Analyze customer behavior and preferences to personalize experiences and improve satisfaction.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Optimize Business Operations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Identify inefficiencies, streamline processes, and reduce costs through data-backed analysis.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUpDownIcon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Predict Future Trends
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Utilize predictive analytics to forecast market shifts, customer behavior, and potential opportunities.
                </p>
              </div>
            </motion.div>
           
            <motion.div
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Minus className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Mitigate Risks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Identify potential risks and develop strategies to minimize their impact based on data analysis.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LucideScale className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Enhance Customer Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tailor products, services, and interactions to meet individual customer needs and improve loyalty.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* Customer Pain Points Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-black"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Addressing Your data Analytics Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We understand the obstacles you face and have solutions ready
            </motion.p>
          </div>
          <InfoTabs items={items} />
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-black"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Real results from real clients who trusted us with their content marketing
            </motion.p>
          </div>
          <CaseStudiesCarousel caseStudies={caseStudies} />
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Enhance Your Content Strategy?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss your content marketing needs and discover how we can transform your digital
              presence.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="group bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Our Portfolio
              </Button>
            </motion.div>
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-white/90">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Content Pieces Created</div>
              </div>
              <div className="text-white/90">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-white/90">
                <div className="text-3xl font-bold mb-2">150%</div>
                <div className="text-blue-100">Average Traffic Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}