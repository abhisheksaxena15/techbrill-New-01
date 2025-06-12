"use client"

import React from "react"
import PageHeader from "@/components/page-header"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CompanyPage() {
  return (
    <React.Fragment>
      <PageHeader
        title="About TechBrill"
        description="Empowering businesses with innovative technology solutions since 2017"
      />

      {/* Company Overview Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide" delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2017 in Noida, India, TechBrill Solutions has rapidly grown into a leading IT service
                  provider and brand communication company. Our team of passionate designers, developers, and digital
                  strategists share one goal: delivering high-performance digital solutions that drive real business
                  growth.
                </p>
                <p className="text-gray-700 mb-6">
                  We&apos;ve successfully partnered with startups and enterprise-level clients across industries including
                  healthcare, finance, education, and retail. Our approach combines technical expertise with creative
                  innovation to build scalable, secure, and user-friendly solutions tailored to your specific business
                  goals.
                </p>
                <p className="text-gray-700 mb-8">
                  At TechBrill, we stand for brilliance, diligence, and commitment to core values of collaboration. We
                  tackle every challenge with determination and creativity, ensuring we reach our common goal no matter
                  the impediment.
                </p>
                <Link
                  href="/company/about"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More About Us
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Explore Company Links Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <AnimatedText
                text="Explore Our Company"
                className="text-3xl font-bold mb-4"
              />
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                Learn more about our story, our team, and valuable resources.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade" delay={0.1}>
              <Link href="/company/about" passHref>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">About Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Discover our journey, mission, and values.</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.2}>
              <Link href="/company/team" passHref>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">Our Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Meet the experts who make it all happen.</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.3}>
              <Link href="/company/blog" passHref>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Access our blog, case studies, and testimonials.</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <AnimatedText
                text="Our Mission, Vision & Values"
                className="text-3xl font-bold mb-4"
              />
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                Driving innovation and excellence in technology solutions while maintaining our core values and commitment to client success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade" delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To be the leading technology partner for businesses worldwide, known for innovation, reliability, and exceptional service.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      Innovation & Excellence
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      Client Success
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      Integrity & Trust
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      Collaboration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#101c36]">
        <div className="container">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <span className="uppercase text-primary font-semibold tracking-wider text-sm">Why Techbrill</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-2">
                Few Good Reason to <span className="text-primary italic">Choose Us</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide" delay={0.1}>
              <div>
                <p className="text-gray-100 mb-6">
                  Web designing in a powerful way of just not only professions, however, in a passion for our Company. We have a tendency to believe the idea that smart looking of any website is the first impression on visitors. And the smart design of any website is the starting point.
                </p>
                <p className="text-gray-100 mb-8">
                  We have a special team for website style who has been involved in designing professional websites of all categories.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "24/7 Hours Support Flexible Price",
                    "Web And Mobile Application",
                    "New Domain Registration",
                    "Data Text Synchronization",
                    "Quick To Respond Flexible Price",
                    "Improving Our Website Design",
                    "Web & Email Hosting Services",
                    "Artificial Intelligence Web App",
                  ].map((reason) => (
                    <li key={reason} className="flex items-center text-white">
                      <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span className="text-sm font-medium">{reason}</span>
                    </li>
                  ))}
                </ul>
                <p className="italic text-primary/80 text-sm">We believe that our growth depends on our clients&apos; growth</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" alt="Why Choose Us" fill className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </React.Fragment>
  )
} 