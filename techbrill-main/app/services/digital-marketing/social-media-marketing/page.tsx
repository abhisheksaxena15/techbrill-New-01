'use client';

import React from 'react';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import { Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { InfoTabs } from '@/components/ui/info-tab';
import CaseStudiesCarousel from '@/components/ui/casestudies-carousel';
import Image from 'next/image';
import { Users, ThumbsUp, TrendingUp, Calendar, BarChart3, DollarSign } from 'lucide-react';

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

const items = [
  {
    title: 'Inconsistent Content Posting',
    description: 'We schedule and manage regular, engaging posts tailored for each platform.',
    icon: <Calendar />,
  },
  {
    title: 'Lack of Strategy',
    description: 'Our team builds data-driven strategies aligned with your business goals.',
    icon: <BarChart3 />,
  },
  {
    title: 'Low Engagement Rates',
    description: 'We design creative, community-oriented campaigns to boost interaction.',
    icon: <ThumbsUp />,
  },
  {
    title: 'Poor ROI from Ads',
    description: 'We run A/B tested paid campaigns for maximum return with transparent reporting.',
    icon: <DollarSign />,
  }
];

const CaseStudies = [
  {
    title: "Gucci",
    subtitle: "Instagram Growth & Sales Optimization",
    description: "Increased Instagram followers by 250% and boosted online sales by 60% in just 3 months through influencer collaborations and ad optimization.",
    challenge: "Low brand awareness and declining engagement rates on Instagram",
    solution: "Implemented influencer partnerships and optimized ad targeting",
    results: "250% follower growth, 60% sales increase, 8.5% engagement rate",
    // metrics: [
    //   { label: "Follower Growth", value: "250%", icon: Users },
    //   { label: "Sales Increase", value: "60%", icon: TrendingUp },
    //   { label: "Engagement Rate", value: "8.5%", icon: Target }
    // ],
    image: "/images/services/social-media-marketing/fashion-brand.jpg",
    tags: ["Instagram", "Influencer Marketing", "E-commerce"],
    duration: "3 months",
    industry: "Fashion & Retail",
    client: "Premium Fashion Brand"
  },
  {
    title: "WebAI",
    subtitle: "LinkedIn Lead Generation Campaign",
    description: "Generated 1,200+ qualified leads via LinkedIn campaigns with a 5.3x return on ad spend (ROAS), establishing them as an industry thought leader.",
    challenge: "Difficulty in reaching decision-makers and generating quality leads",
    solution: "Strategic LinkedIn content marketing and targeted B2B advertising",
    results: "1,200+ qualified leads, 5.3x ROAS, 45% reduction in cost per lead",
    // metrics: [
    //   { label: "Qualified Leads", value: "1,200+", icon: Target },
    //   { label: "ROAS", value: "5.3x", icon: TrendingUp },
    //   { label: "Cost per Lead", value: "-45%", icon: Award }
    // ],
    image: "/images/services/social-media-marketing/tech-startup.jpg",
    tags: ["LinkedIn", "B2B Marketing", "Lead Generation"],
    duration: "6 months",
    industry: "Technology",
    client: "B2B SaaS Startup"
  },
  {
    title: "KFC",
    subtitle: "Multi-Platform Brand Awareness",
    description: "Transformed a local restaurant into a regional favorite with 400% increase in social mentions and 180% growth in foot traffic.",
    challenge: "Limited brand recognition beyond local market",
    solution: "Multi-platform content strategy with location-based targeting",
    results: "400% increase in social mentions, 180% foot traffic growth",
    // metrics: [
    //   { label: "Social Mentions", value: "400%", icon: Users },
    //   { label: "Foot Traffic", value: "180%", icon: TrendingUp },
    //   { label: "Brand Recognition", value: "320%", icon: Award }
    // ],
    image: "/images/services/social-media-marketing/restaurant-chain.jpg",
    tags: ["Multi-Platform", "Local SEO", "Content Marketing"],
    duration: "4 months",
    industry: "Food & Beverage",
    client: "Regional Restaurant Chain"
  },
  {
    title: "Hubspot",
    subtitle: "Twitter Community Building",
    description: "Built an engaged community of 50K+ developers and tech enthusiasts, resulting in 300% increase in trial signups and improved customer retention.",
    challenge: "Low brand awareness in developer community and poor trial conversion",
    solution: "Community-driven content strategy and developer-focused engagement",
    results: "50K+ community members, 300% trial signup increase, 85% retention rate",
    // metrics: [
    //   { label: "Community Growth", value: "50K+", icon: Users },
    //   { label: "Trial Signups", value: "300%", icon: Target },
    //   { label: "Retention Rate", value: "+85%", icon: Award }
    // ],
    image: "/images/services/social-media-marketing/saas-platform.jpg",
    tags: ["Twitter", "Community Building", "SaaS Marketing"],
    duration: "8 months",
    industry: "Software",
    client: "Developer Tools Platform"
  },
  {
    title: "Khan Academy",
    subtitle: "YouTube Channel Growth & Monetization",
    description: "Grew educational YouTube channel from 5K to 100K+ subscribers with 400% increase in course sales through strategic video content and community engagement.",
    challenge: "Stagnant subscriber growth and low course conversion rates",
    solution: "Educational content series with strong call-to-actions and community building",
    results: "95K new subscribers, 400% course sales increase, 12% conversion rate",
    // metrics: [
    //   { label: "Subscriber Growth", value: "95K+", icon: Users },
    //   { label: "Course Sales", value: "400%", icon: TrendingUp },
    //   { label: "Conversion Rate", value: "12%", icon: Target }
    // ],
    image: "/images/services/social-media-marketing/elearning-platform.jpg",
    tags: ["YouTube", "Educational Content", "Sales Funnel"],
    duration: "10 months",
    industry: "Education",
    client: "Online Learning Platform"
  }
];

export default function SocialMediaMarketingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <HeroHighlight className='flex flex-col items-center gap-2'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl px-4 md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Social Media Marketing
          </motion.h1>
          <Highlight className="text-black dark:text-white text-xl md:text-2xl lg:text-2xl">
            Attract. Engage. Convert. All through smart social media strategies.
          </Highlight>
        </HeroHighlight>
      </section>

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What is Social Media Marketing?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Social Media Marketing (SMM) is the strategic use of platforms like Instagram, Facebook, LinkedIn, and X (Twitter) to build brand awareness, connect with your audience, and drive conversions.
              Our services focus on crafting targeted content, managing ad campaigns, building communities, and analyzing performance to optimize your online presence.
            </motion.p>
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
                src="/images/services/social-media-marketing-hero.avif"
                alt="Social Media Marketing Hero Image"
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
              Benefits of Our Social Media Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Unlock the full potential of your brand with our comprehensive social media solutions. We help you grow your audience, foster engagement, and drive measurable business results across every major platform.
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
                  <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Increased Brand Awareness
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Boost your visibility through consistent branding, creative content, and platform-specific strategies.
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
                  <ThumbsUp className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Higher Engagement
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We help create interactive posts, reels, and stories to increase likes, comments, and shares organically.
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
                  <TrendingUp className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lead Generation & Conversions</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our paid campaigns are optimized to turn followers into leads and leads into loyal customers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Solving Your Social Media Marketing Challenges
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 mb-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Many businesses struggle with consistency, strategy, and engagement on social media. Our team tackles these pain points head-on, providing expert solutions for every challenge.
          </motion.p>
          <InfoTabs items={items} />
        </div>
      </section>

      {/* Case Studies/Success Stories Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              See how our social media marketing strategies have delivered real, measurable growth for brands across industries—from fashion and tech to food and education.
            </p>
          </div>
          <CaseStudiesCarousel caseStudies={CaseStudies} />
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
              Ready to Boost Your Social Presence?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let’s take your brand to the next level. Reach out for a free consultation and discover how our social media marketing experts can help you grow your audience, engagement, and sales.
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
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-blue-100">Followers Gained</div>
              </div>
              <div className="text-white/90">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div className="text-white/90">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-blue-100">Avg. Engagement Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
