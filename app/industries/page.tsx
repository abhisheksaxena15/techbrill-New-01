"use client"

import IndustriesSection from "@/components/industries-section";
import WorkProcess from "@/components/ui/work-process";
import ConsultationSection from "@/components/ConsultationSection";
import AnimatedText from "@/components/animated-text";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg";

const benefits = [
  {
    title: "Industry Expertise",
    description: "Deep experience across healthcare, finance, education, retail, and more.",
    icon: "💡",
  },
  {
    title: "Tailored Solutions",
    description: "Custom strategies and technology for every business challenge.",
    icon: "🛠️",
  },
  {
    title: "End-to-End Support",
    description: "From ideation to launch and beyond, we’re with you at every step.",
    icon: "🤝",
  },
  {
    title: "Proven Results",
    description: "A track record of successful digital transformation for diverse clients.",
    icon: "🏆",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt="Industries Banner Background"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-sm"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Industries We Empower
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Digital transformation and tailored technology for every sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-white/90 text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-white">
              Explore Industries
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <IndustriesSection />

      {/* Light Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
              Industry Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900">
              Digital Innovation for Every Sector
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-8 text-gray-700 text-base">
              We deliver innovative, scalable, and secure technology solutions for organizations across a wide range of industries, helping them achieve operational excellence and business growth. Our team crafts custom strategies and digital products to solve your unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
                View All Industries
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-gray-100">
                Consult Our Expert
              </Button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Industry Solutions"
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