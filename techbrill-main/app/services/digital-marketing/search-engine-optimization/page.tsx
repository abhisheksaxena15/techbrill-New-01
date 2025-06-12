'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, BarChart2, ShieldCheck, Users, Link, FileText } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { WobbleCard } from "@/components/ui/wobble-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

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

export const seo_services = [
  {
    title: "Technical SEO",
    points: ["Website Audit & Analysis", "Site Speed Optimization", "Mobile Optimization", "Indexability & Crawlability", "Structured Data Markup"],
  },
  {
    title: "On-Page SEO",
    points: ["Keyword Research & Strategy", "Content Optimization", "Meta Description & Title Tag Optimization", "Header Tag Implementation", "Image Optimization"],
  },
  {
    title: "Off-Page SEO",
    points: ["Backlink Building & Outreach", "Local SEO (Google My Business Optimization)", "Online Reputation Management", "Social Signal Building", "Content Promotion"],

  },
  {
    title: "Content Marketing for SEO",
    points: ["Blog Post Creation", "Landing Page Content", "Pillar Page & Topic Cluster Development", "Content Audits & Strategy", "On-going Content Optimization"],
  },
];

// const caseStudies = [
//   {
//     title: "Gucci",
//     subtitle: "Instagram Growth & Sales Optimization",
//     description: "Increased Instagram followers by 250% and boosted online sales by 60% in just 3 months through influencer collaborations and ad optimization.",
//     challenge: "Low brand awareness and declining engagement rates on Instagram",
//     solution: "Implemented influencer partnerships and optimized ad targeting",
//     results: "250% follower growth, 60% sales increase, 8.5% engagement rate",
//     // metrics: [
//     //   { label: "Follower Growth", value: "250%", icon: Users },
//     //   { label: "Sales Increase", value: "60%", icon: TrendingUp },
//     //   { label: "Engagement Rate", value: "8.5%", icon: Target }
//     // ],
//     image: "/images/services/social-media-marketing/fashion-brand.jpg",
//     tags: ["Instagram", "Influencer Marketing", "E-commerce"],
//     duration: "3 months",
//     industry: "Fashion & Retail",
//     client: "Premium Fashion Brand"
//   },
//   {
//     title: "WebAI",
//     subtitle: "LinkedIn Lead Generation Campaign",
//     description: "Generated 1,200+ qualified leads via LinkedIn campaigns with a 5.3x return on ad spend (ROAS), establishing them as an industry thought leader.",
//     challenge: "Difficulty in reaching decision-makers and generating quality leads",
//     solution: "Strategic LinkedIn content marketing and targeted B2B advertising",
//     results: "1,200+ qualified leads, 5.3x ROAS, 45% reduction in cost per lead",
//     // metrics: [
//     //   { label: "Qualified Leads", value: "1,200+", icon: Target },
//     //   { label: "ROAS", value: "5.3x", icon: TrendingUp },
//     //   { label: "Cost per Lead", value: "-45%", icon: Award }
//     // ],
//     image: "/images/services/social-media-marketing/tech-startup.jpg",
//     tags: ["LinkedIn", "B2B Marketing", "Lead Generation"],
//     duration: "6 months",
//     industry: "Technology",
//     client: "B2B SaaS Startup"
//   },
//   {
//     title: "KFC",
//     subtitle: "Multi-Platform Brand Awareness",
//     description: "Transformed a local restaurant into a regional favorite with 400% increase in social mentions and 180% growth in foot traffic.",
//     challenge: "Limited brand recognition beyond local market",
//     solution: "Multi-platform content strategy with location-based targeting",
//     results: "400% increase in social mentions, 180% foot traffic growth",
//     // metrics: [
//     //   { label: "Social Mentions", value: "400%", icon: Users },
//     //   { label: "Foot Traffic", value: "180%", icon: TrendingUp },
//     //   { label: "Brand Recognition", value: "320%", icon: Award }
//     // ],
//     image: "/images/services/social-media-marketing/restaurant-chain.jpg",
//     tags: ["Multi-Platform", "Local SEO", "Content Marketing"],
//     duration: "4 months",
//     industry: "Food & Beverage",
//     client: "Regional Restaurant Chain"
//   },
//   {
//     title: "Hubspot",
//     subtitle: "Twitter Community Building",
//     description: "Built an engaged community of 50K+ developers and tech enthusiasts, resulting in 300% increase in trial signups and improved customer retention.",
//     challenge: "Low brand awareness in developer community and poor trial conversion",
//     solution: "Community-driven content strategy and developer-focused engagement",
//     results: "50K+ community members, 300% trial signup increase, 85% retention rate",
//     // metrics: [
//     //   { label: "Community Growth", value: "50K+", icon: Users },
//     //   { label: "Trial Signups", value: "300%", icon: Target },
//     //   { label: "Retention Rate", value: "+85%", icon: Award }
//     // ],
//     image: "/images/services/social-media-marketing/saas-platform.jpg",
//     tags: ["Twitter", "Community Building", "SaaS Marketing"],
//     duration: "8 months",
//     industry: "Software",
//     client: "Developer Tools Platform"
//   },
//   {
//     title: "Khan Academy",
//     subtitle: "YouTube Channel Growth & Monetization",
//     description: "Grew educational YouTube channel from 5K to 100K+ subscribers with 400% increase in course sales through strategic video content and community engagement.",
//     challenge: "Stagnant subscriber growth and low course conversion rates",
//     solution: "Educational content series with strong call-to-actions and community building",
//     results: "95K new subscribers, 400% course sales increase, 12% conversion rate",
//     // metrics: [
//     //   { label: "Subscriber Growth", value: "95K+", icon: Users },
//     //   { label: "Course Sales", value: "400%", icon: TrendingUp },
//     //   { label: "Conversion Rate", value: "12%", icon: Target }
//     // ],
//     image: "/images/services/social-media-marketing/elearning-platform.jpg",
//     tags: ["YouTube", "Educational Content", "Sales Funnel"],
//     duration: "10 months",
//     industry: "Education",
//     client: "Online Learning Platform"
//   }
// ];

export default function SeoPage() {
  return (
    <ErrorBoundary>
      <div>
        {/* Hero Section */}
        <section>
          <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <motion.div
              className="max-w-2xl mx-auto p-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.h1
                className="relative z-10 text-lg md:text-5xl text-black dark:text-white bg-clip-text text-center font-sans font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Search Engine Optimization (SEO)
              </motion.h1>
              <motion.p
                className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto my-4 text-lg text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Boosting your online visibility and driving organic traffic.
              </motion.p>
            </motion.div>
            <BackgroundBeams />
          </div>
        </section>

        {/* <div className="h-24 bg-gradient-to-b from-neutral-950 to-gray-900" /> */}

        {/* Service Explanation Section */}
        <section className="py-16 bg-gray-50 dark:bg-black">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold mb-8">What is SEO?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Search Engine Optimization (SEO) is the process of improving the visibility and ranking of your website in search engine results pages (SERPs) like Google, Bing, and Yahoo. A strong SEO strategy involves optimizing your website&apos;s technical setup, content, and off-page factors to attract relevant organic traffic.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At TechBrill Solutions, we help businesses achieve higher search engine rankings, increase their online visibility, and drive more qualified leads through comprehensive and ethical SEO services.
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
                  src="/images/services/seo/hero.avif"
                  alt="Search Engine Optimization"
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
        <section className="py-16 bg-gray-50 dark:bg-black">
          <div className="container">
            <motion.h2
              className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold mb-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Benefits of SEO
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              SEO is the foundation of sustainable online growth. By optimizing your website for search engines, you can increase your visibility, attract high-intent visitors, and build long-term credibility for your brand—all while reducing reliance on paid ads.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <WobbleCard
                containerClassName='col-span-1 min-h-[160px] bg-blue-800'
                className=""
              >
                <motion.div
                  variants={fadeInUp}
                >
                  <BarChart2 className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Increased Organic Traffic</h3>
                  <p className="text-neutral-300 dark:text-gray-300 ">Attract more visitors to your website who are actively searching for your products or services.</p>
                </motion.div>
              </WobbleCard>

              <WobbleCard
                containerClassName='col-span-1 min-h-[180px] bg-blue-800'
                className=""
              >
                <motion.div
                  variants={fadeInUp}
                >
                  <ShieldCheck className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Improved Credibility & Trust</h3>
                  <p className="text-neutral-300 dark:text-gray-300 ">Higher search rankings build authority and trust with potential customers.</p>
                </motion.div>
              </WobbleCard>

              <WobbleCard
                containerClassName='col-span-1 min-h-[180px] bg-blue-800'
                className=""
              >
                <motion.div
                  variants={fadeInUp}
                >
                  <Users className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Better User Experience</h3>
                  <p className="text-neutral-300 dark:text-gray-300 ">Optimizing for search engines often leads to a faster, more mobile-friendly, and user-friendly website.</p>
                </motion.div>
              </WobbleCard>

              <WobbleCard
                containerClassName='col-span-1 min-h-[180px] bg-blue-800'
                className=""
              >
                <motion.div
                  variants={fadeInUp}
                >
                  <Link className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Higher Conversion Rates</h3>
                  <p className="text-neutral-300 dark:text-gray-300 ">Visitors from organic search are often more motivated and likely to convert into customers.</p>
                </motion.div>
              </WobbleCard>

              <WobbleCard
                containerClassName='col-span-1 min-h-[180px] bg-blue-800'
                className=""
              >
                <motion.div
                  variants={fadeInUp}
                >
                  <Search className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Cost-Effective Marketing</h3>
                  <p className="text-neutral-300 dark:text-gray-300 ">Compared to paid advertising, SEO offers a more sustainable and cost-effective way to drive traffic over time.</p>
                </motion.div>
              </WobbleCard>

              <WobbleCard
                containerClassName='col-span-1 min-h-[180px] bg-blue-800'
                className=""
              >
                <motion.div
                  variants={fadeInUp}
                >
                  <FileText className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Long-Term Results</h3>
                  <p className="text-neutral-300 dark:text-gray-300 ">A well-implemented SEO strategy can provide lasting visibility and traffic to your website.</p>
                </motion.div>
              </WobbleCard>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-black">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold mb-6">Our SEO Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Our comprehensive SEO services cover every aspect of search optimization—from technical audits and on-page improvements to content strategy and link building. We tailor our approach to your business goals, ensuring measurable results and ongoing growth.
              </p>
              <HoverEffect items={seo_services} />
    
            </motion.div>
          </div>
        </section>

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
                Ready to Improve Your Search Rankings?
              </motion.h2>
              <motion.p
                className="text-xl text-blue-100 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Contact us today for a free SEO consultation and discover how we can boost your online visibility.
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
                  className="group border-2 border-white text-black dark:text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
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
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-blue-100">Monthly Organic Impressions</div>
                </div>
                <div className="text-white/90">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div className="text-white/90">
                  <div className="text-3xl font-bold mb-2">200%</div>
                  <div className="text-blue-100">Average Traffic Growth</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div >
    </ErrorBoundary >
  );
}