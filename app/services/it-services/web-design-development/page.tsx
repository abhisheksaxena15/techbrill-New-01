'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Smartphone, Shield, Zap, Users } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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

export default function WebDesignDevelopmentPage() {
  return (
    <ErrorBoundary>
      <div>
        {/* Hero Section with Background Image */}
        <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/services/web-design-hero.jpg"
            alt="Web Design & Development Hero"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover:bg-black/70" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Web Design & Development
            </h1>
            <p className="text-lg md:text-2xl text-white/90">Crafting elegant, user-first web experiences</p>
          </div>
        </section>

        {/* Service Explanation Section - Redesigned as alternating sections with images */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-5xl px-4">
            {/* Header with business line */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-500">
                  You know the business, we know how to build the website.
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Partner with us to turn your business vision into a powerful online presence. Our team combines industry insight with technical expertise for better websites that drive results and growth.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                    alt="Web Development Team" 
                    fill 
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Our Expertise Heading */}
            <div className="text-center mb-16">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Our Expertise
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Professional Web <span className="italic text-blue-800 dark:text-blue-200">Development Services</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
            </div>

            <div className="space-y-16">
              {/* UI/UX Services */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/5">
                  <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                    <CarouselContent>
                      <CarouselItem className="h-64">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <Image 
                            src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg" 
                            alt="UI/UX Services" 
                            fill 
                            className="object-cover object-center" 
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-64">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <Image 
                            src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg" 
                            alt="UI/UX Wireframing" 
                            fill 
                            className="object-cover object-center" 
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">UI/UX Services</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We craft intuitive user interfaces that delight and engage. Our UI/UX design expertise combines exceptional creativity, usability, and brand consistency.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>User research & persona development</li>
                    <li>Wireframing & interactive prototyping</li>
                    <li>UI design for web and mobile apps</li>
                    <li>UX audits & usability testing</li>
                    <li>Accessible & inclusive design</li>
                  </ul>
                </div>
              </div>

              {/* Web Development */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-2/5">
                  <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                    <CarouselContent>
                      <CarouselItem className="h-64">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <Image src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg" 
                            alt="Web Development" fill className="object-cover object-center" />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-64">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <Image src="/images/services/web-design-hero.jpg" 
                            alt="Web Development" fill className="object-cover object-center" />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">Web Development</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    From simple digital presence websites to complex web apps, we build robust, scalable, and effective solutions. Our expert team creates customized experiences that deliver unique, maintainable solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Custom website & web app development</li>
                    <li>Frontend & backend development</li>
                    <li>API integration & feature testing</li>
                    <li>CMS performance optimization</li>
                    <li>Website security & maintenance</li>
                  </ul>
                </div>
              </div>

              {/* E-Commerce Solutions */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/5">
                  <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                    <CarouselContent>
                      <CarouselItem className="h-64">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
                            alt="E-Commerce Solutions" fill className="object-cover object-center" />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-64">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <Image src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                            alt="E-Commerce Solutions" fill className="object-cover object-center" />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">E-Commerce Solutions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Powerful and feature-rich online store websites & custom e-commerce platforms. We create secure, user-friendly stores that drive sales and enhance customer experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Custom e-commerce website development</li>
                    <li>Payment gateway integration</li>
                    <li>Custom application shipping</li>
                    <li>Inventory & order management</li>
                    <li>Analytics & conversion tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Key Advantages
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Benefits of Professional Web <span className="italic text-blue-800 dark:text-blue-200">Design & Development</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
              <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base mb-6">
                Investing in professional web design and development delivers tangible returns through improved user experience,
                increased conversions, and stronger brand credibility that drives sustainable business growth.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Users className="w-12 h-12 text-blue-600 dark:text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Increase Trust and Credibility</h3>
                <p className="text-gray-700 dark:text-gray-300">A professional website builds confidence with visitors and establishes your brand&apos;s authority.</p>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Code className="w-12 h-12 text-blue-600 dark:text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Improve Search Engine Ranking</h3>
                <p className="text-gray-700 dark:text-gray-300">Well-structured and optimized websites perform better in search results, driving organic traffic.</p>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Zap className="w-12 h-12 text-blue-600 dark:text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Boost Conversion Rates</h3>
                <p className="text-gray-700 dark:text-gray-300">Strategic design guides users through your site, encouraging them to take desired actions.</p>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Layout className="w-12 h-12 text-blue-600 dark:text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Create a Strong First Impression</h3>
                <p className="text-gray-700 dark:text-gray-300">Your website is often the first interaction a potential customer has with your brand.</p>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Smartphone className="w-12 h-12 text-blue-600 dark:text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Gain a Competitive Edge</h3>
                <p className="text-gray-700 dark:text-gray-300">Stand out from competitors with a unique, modern, and high-performing website.</p>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-blue-600 dark:text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Enhance Website Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Professional developers implement robust security measures to protect your website.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Customer Pain Points Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Common Issues
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Addressing <span className="italic text-blue-800 dark:text-blue-200">Web Development</span> Challenges
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
            </div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Building and maintaining a successful website can be challenging. Businesses often face issues like:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
                <li>Keeping up with technology: The web evolves rapidly. We stay updated on the latest trends, technologies, and best practices so you don&apos;t have to.</li>
                <li>Achieving a unique and effective design: Avoiding generic templates and creating a design that truly represents your brand and converts visitors.</li>
                <li>Ensuring functionality and security: Developing a site that works flawlessly on all devices and is protected against cyber threats.</li>
                <li>Saving time and resources: The complexity of web development can be overwhelming. Outsourcing saves you valuable time and allows you to focus on your core business.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Case Studies/Success Stories Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50/60 via-white/80 to-blue-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Success Stories
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Our Web Development <span className="italic text-blue-800 dark:text-blue-200">Success Stories</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Discover how TechBrill Solutions has helped businesses like yours succeed with professional web design and development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Case Study 1 */}
              <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src='/images/case-studies/web-case-1.jpg'
                    alt='E-Commerce Redesign Success'
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-primary">E-Commerce Redesign Success</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">We transformed an outdated online store into a modern, high-converting e-commerce platform, resulting in a 40% increase in sales and improved customer satisfaction.</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline mt-auto">Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>
              {/* Case Study 2 */}
              <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src='/images/case-studies/web-case-2.jpg'
                    alt='Corporate Website Revamp'
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-primary">Corporate Website Revamp</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">A leading consulting firm partnered with us to overhaul their digital presence, resulting in a sleek, mobile-friendly site and a 3x boost in lead generation.</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline mt-auto">Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 dark:bg-primary text-white text-center">
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Get Started
            </h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
              Ready for a Stunning Website?
            </h2>
            <p className="text-lg mb-8">Contact us today to discuss your web design and development needs.</p>
            <Button variant="secondary" size="lg" className="group">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </section>
      </div>
    </ErrorBoundary>
  );
}