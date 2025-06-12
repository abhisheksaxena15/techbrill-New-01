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
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

interface Industry {
  title: string
  slug: string
  description: string
  image: string
}

const industries: Industry[] = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Innovative digital solutions for hospitals, clinics, and health tech startups, focusing on patient engagement, data security, and telemedicine.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
  },
  {
    title: "Finance & Banking",
    slug: "finance-banking",
    description: "Secure, scalable fintech platforms and banking solutions that streamline operations, enhance customer experience, and ensure regulatory compliance.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800",
  },
  {
    title: "Education",
    slug: "education",
    description: "E-learning platforms, LMS, and interactive content for schools, universities, and edtech companies to empower digital learning.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
  },
  {
    title: "Retail & E-Commerce",
    slug: "retail-ecommerce",
    description: "Custom e-commerce solutions, omnichannel experiences, and digital transformation for retailers and online businesses.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description: "Smart factory solutions, IoT integration, and process automation to drive efficiency and innovation in manufacturing.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    description: "Digital booking systems, customer engagement platforms, and mobile apps for travel agencies, hotels, and tourism businesses.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800",
  },
  {
    title: "Logistics & Transportation",
    slug: "logistics-transportation",
    description: "End-to-end logistics management, fleet tracking, and supply chain optimization for logistics and transport companies.",
    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=800",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description: "Property management platforms, virtual tours, and CRM solutions for real estate agencies and property developers.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=800",
  },
  {
    title: "Energy & Utilities",
    slug: "energy-utilities",
    description: "Smart grid solutions, renewable energy management, and digital transformation for energy and utility companies.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800",
  },
]

export default function IndustriesPage() {
  return (
    <React.Fragment>
      <PageHeader
        title="Industries We Serve"
        description="Empowering diverse sectors with tailored digital solutions, innovative technology, and industry expertise."
      />
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <AnimatedText
                text="Driving Digital Transformation Across Industries"
                className="text-3xl font-bold mb-4"
              />
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                We deliver innovative, scalable, and secure technology solutions for organizations across a wide range of industries, helping them achieve operational excellence and business growth.
              </p>
            </div>
          </AnimatedSection>

          <Carousel opts={{ align: "start", slidesToScroll: 1, loop: true, dragFree: true }}>
            <CarouselContent>
              {industries.map((industry) => (
                <CarouselItem key={industry.title} className="basis-1/2.2 max-w-[45%] flex justify-center">
                  <div className="w-[300px] h-[370px] flex flex-col">
                    <AnimatedSection animation="scale" delay={0.05} className="h-full">
                      <Link href={`/industries/${industry.slug}`} className="block h-full">
                        <Card className="group h-full flex flex-col cursor-pointer hover:shadow-md transition-shadow bg-white border border-gray-200">
                          <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
                            <Image
                              src={industry.image}
                              alt={industry.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              {industry.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex-1">
                            <p className="text-gray-700 text-sm">
                              {industry.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    </AnimatedSection>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <CTASection />

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
      <Footer />
    </React.Fragment>
  )
} 