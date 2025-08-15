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
import AboutPreview from "@/components/about-preview";
import WorkProcess from "@/components/ui/work-process";
import ConsultationSection from "@/components/ConsultationSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/about/18771.jpg";

const benefits = [
  {
    title: "Expert Team",
    description: "Our experienced professionals deliver innovative, high-quality solutions tailored to your needs.",
    icon: "👨‍💻",
  },
  {
    title: "Free Consultation",
    description: "Get expert advice and a clear roadmap for your project with no obligation.",
    icon: "💬",
  },
  {
    title: "Lowest Cost",
    description: "We offer competitive pricing without compromising on quality or performance.",
    icon: "💸",
  },
  {
    title: "24/7 Support",
    description: "Our team is always available to assist you, ensuring smooth and uninterrupted service.",
    icon: "⏰",
  },
];

const missionVisionValues = [
  {
    title: "Our Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.",
    icon: "🚀",
  },
  {
    title: "Our Vision",
    description: "To be the leading technology partner for businesses worldwide, known for innovation, reliability, and exceptional service.",
    icon: "🌍",
  },
  {
    title: "Our Values",
    description: "Innovation & Excellence, Client Success, Integrity & Trust, Collaboration.",
    icon: "💎",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt="Company Banner Background"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-sm"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            About Techbrill Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Empowering businesses with innovative technology solutions since 2017.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-white/90 text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-white">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* About/Who We Are Section */}
      <AboutPreview />

      {/* Light Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
              Company Focus
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900">
              Building Brilliance, Together
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-8 text-gray-700 text-base">
              At Techbrill, we stand for brilliance, diligence, and commitment to core values of collaboration. We tackle every challenge with determination and creativity, ensuring we reach our common goal no matter the impediment. Our approach combines technical expertise with creative innovation to build scalable, secure, and user-friendly solutions tailored to your specific business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-gray-100">
                Contact Us
              </Button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Company Focus"
              width={400}
              height={340}
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <WorkProcess />

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <AnimatedText
              text="Our Mission, Vision & Values"
              className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight text-gray-900"
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-700 text-base">
              Driving innovation and excellence in technology solutions while maintaining our core values and commitment to client success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {missionVisionValues.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <AnimatedText
              text="Why Choose Techbrill?"
              className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight text-gray-900"
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-700 text-base">
              We believe our growth depends on our clients&apos; growth. Here are a few reasons to partner with us for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation/CTA Section */}
      <ConsultationSection />
    </>
  );
} 