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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Web Design & Development</h1>
            <p className="text-lg md:text-2xl text-white/90">Crafting elegant, user-first web experiences</p>
          </div>
        </section>

        {/* Service Explanation Section - Redesigned as 3 alternating cards with carousels */}
        <section className="py-16 bg-gray-900">
          <div className="container space-y-12">
            {/* Card 1: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center p-6 md:p-12 gap-8">
              {/* Carousel Left */}
              <div className="w-full md:w-1/2">
                <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                  <CarouselContent>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="Web Design Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/web-design-hero.jpg" alt="Web Design Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg" alt="Web Design Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">What We Do in Web Design & Development</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Web design and development is the process of creating visually appealing, functional, and user-friendly websites. In today&apos;s digital landscape, a professional online presence is crucial for building credibility, reaching customers, and achieving business goals.
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  At TechBrill Solutions, we combine cutting-edge technology with creative design to deliver websites that not only look stunning but also drive results. Our team of expert developers and designers work together to create seamless, responsive, and high-performing web solutions.
                </p>
              </div>
            </div>
            {/* Card 2: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse p-6 md:p-12 gap-8">
              {/* Carousel Right */}
              <div className="w-full md:w-1/2">
                <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                  <CarouselContent>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg" alt="Web Design Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg" alt="Web Design Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="Web Design Slide 3" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Left */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">UI/UX Services</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Elevate your digital products with user-centric design that balances form, function, and delightful interactions. Our end-to-end Product Design & UI/UX offerings ensure every touchpoint resonates with your audience and drives business goals.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>User research & persona development</li>
                  <li>Wireframing & interactive prototyping</li>
                  <li>UI design for web and mobile apps</li>
                  <li>UX audits & usability testing</li>
                  <li>Responsive & accessibility-focused design</li>
                </ul>
              </div>
            </div>
            {/* Card 3: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row p-6 md:p-12 gap-8">
              {/* Carousel Left */}
              <div className="w-full md:w-1/2">
                <Carousel opts={{ align: 'start', loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
                  <CarouselContent>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
                          alt="E-Commerce Slide 1" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-64 md:h-80">
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                          alt="E-Commerce Slide 2" fill className="object-cover object-center" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Text Right */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">E-Commerce Development & Solutions</h2>
                <p className="text-base md:text-lg text-gray-200 mb-4">
                  Our eCommerce development and solutions services empower businesses to sell online with secure, scalable, and user-friendly platforms. We build custom online stores that drive sales, enhance customer experience, and streamline operations.
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Custom eCommerce website development</li>
                  <li>Payment gateway and third-party integrations</li>
                  <li>Mobile-optimized shopping experiences</li>
                  <li>Multi-channel sales solutions</li>
                  <li>Custom optimized website design</li>
                </ul>
              </div>
            </div>
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
              Benefits of Professional Web Design & Development
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
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increase Trust and Credibility</h3>
                <p className="text-gray-700 dark:text-gray-300">A professional website builds confidence with visitors and establishes your brand&apos;s authority.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improve Search Engine Ranking</h3>
                <p className="text-gray-700 dark:text-gray-300">Well-structured and optimized websites perform better in search results, driving organic traffic.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Boost Conversion Rates</h3>
                <p className="text-gray-700 dark:text-gray-300">Strategic design guides users through your site, encouraging them to take desired actions.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Layout className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Create a Strong First Impression</h3>
                <p className="text-gray-700 dark:text-gray-300">Your website is often the first interaction a potential customer has with your brand.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gain a Competitive Edge</h3>
                <p className="text-gray-700 dark:text-gray-300">Stand out from competitors with a unique, modern, and high-performing website.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhance Website Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Professional developers implement robust security measures to protect your website.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Customer Pain Points Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8">Addressing Common Web Development Challenges</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Our Web Development Success Stories</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
              Discover how TechBrill Solutions has helped businesses like yours succeed with professional web design and development. Our case studies highlight the challenges clients faced and the tangible results we delivered.
            </p>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">E-Commerce Redesign Success</h3>
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">Corporate Website Revamp</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">A leading consulting firm partnered with us to overhaul their digital presence, resulting in a sleek, mobile-friendly site and a 3x boost in lead generation.</p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline mt-auto">Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready for a Stunning Website?</h2>
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