import TechnologyStackOldone from "@/components/technology-stack-oldone"
import ConsultationSection from "@/components/ConsultationSection";
import TechnoTechToolsSection from "@/components/ui/techno-tech-tools-section";
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import WorkProcessTech from "@/components/ui/work-process-tech"
import React from "react";
import { FaRocket, FaLock, FaGraduationCap, FaLightbulb } from "react-icons/fa";


import Image from "next/image"


const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/about/techno.webp";

const benefits = [
  {
    title: "Agile Delivery",
    description: "We deliver high-value solutions quickly through an iterative, flexible process that adapts to your needs.",
    icon: "🚀",
  },
  {
    title: "Secure Solutions",
    description: "We build robust, proactive security into every solution to protect your data and ensure your peace of mind.",
    icon: "🔒",
  },
  {
    title: "Certified Experts",
    description: "Our team is comprised of certified professionals with validated expertise, guaranteeing high-quality, reliable results.",
    icon: "🎓",
  },
  {
    title: "Continuous Innovation",
    description: "We are committed to a process of constant improvement, ensuring your solutions always remain modern and competitive.",
    icon: "💡",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description: "We start by understanding your vision, audience, and goals to craft a purpose-driven plan.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers create user-focused, engaging interfaces that reflect your brand.",
  },
  {
    step: "03",
    title: "Development",
    description: "We turn designs into high-performing, scalable solutions using modern technologies.",
  },
  {
    step: "04",
    title: "Consulting & Support",
    description: "We provide ongoing consultancy, support, and maintenance for your continued success.",
  },
  {
    step: "05",
    title: "Promotion",
    description: "Our digital marketing experts help you grow your presence and reach your audience.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      {/* Custom Hero Banner */}

      {/* Hero Banner */}
      <section className="relative w-full h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt="Technologies Banner Background"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-sm"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Technologies
          </h1>
          <p className="text-lg md:text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Modern, high-performance technology stacks for your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">
              Explore our expertise
            </Button>


            <a href="/contact#contact-form">
              <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">
                Contact Us
              </Button>
            </a>

          </div>
        </div>
      </section>



      {/* Light Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
              Technology Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900">
              Driving Innovation with Cutting-Edge Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-8 text-gray-700 text-base">
              At Techbrill, technology is at the core of everything we do. We believe that the right tech stack can turn bold ideas into powerful solutions. Our teams continuously evolve with the latest advancements to ensure our clients stay ahead of the curve, whether it’s building robust applications, modernizing legacy systems, or adopting emerging technologies.            </p>
            <div id="/contact#contact-form" className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
                Consult Our Expert
              </Button>
              {/* <Button size="lg" variant="outline" className="bg-white text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-gray-100">
                Consult Our Expert
              </Button> */}
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Technologies"
              width={500}
              height={440}
              className="rounded-2xl shadow-lg w-full max-w-md "
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <TechnologyStackOldone />
        </div>
      </section>


      {/* 4. Tech Stack Section */}
      <section className="py-16  bg-white">
        <div className="container mx-auto bg-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Innovation & Emerging Tech
            </h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Transforming Ideas with Next-Gen Technologies {/*<span className="text-blue-800 italic">Tech Stacks</span> */}
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            {/* Change: Wrapped the h3 tag in a new flex container to control its width
            and ensure it stays centered while having a maximum width.
          */}
            <div className="flex justify-center mt-4">
              {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
              <h3 className=" max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                We don’t just adopt technology, we innovate with it. Our R&D team explores next-gen solutions that drive competitive advantage.              </h3>
            </div>
          </div>
          <TechnoTechToolsSection />
        </div>

      </section>


      {/* Light Intro Section with Side Image */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
      {/* <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
              Business Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900">
              Digital solutions for every industry
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-8 text-gray-700 text-base">
              Our team empowers businesses across industries by integrating cutting-edge technologies and optimizing workflows. We specialize in crafting tailored technology solutions that address core operational challenges, enhance efficiency, and spark innovation. With a focus on tangible outcomes, we help organizations accelerate growth, improve customer experience, and stay ahead in a dynamic digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
                View Our Industries
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-gray-100">
                Consult Our Expert
              </Button>
            </div>
          </div>
          {/* Right: Image */}
      {/* <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Digital solutions for every industry"
              width={400}
              height={340}
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section> */}

      {/* Our Work Process Section (from mobile development) */}
      {/* <WorkProcess /> */}
      <WorkProcessTech />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">


          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-blue-700 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
              Why Choose Us
            </h3>

            {/* Center the heading and constrain its width */}
            <h2 className="mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white max-w-4xl">
              Blending Expertise, Reliability, and Forward Thinking
            </h2>

            <div className="h-1 w-20 bg-blue-700 mx-auto mt-4 mb-6"></div>

            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Our focus on innovation, quality, and reliability ensures that every solution we deliver is built to scale, secure by design, and aligned with your business goals for long-term success.
            </p>
          </div>




          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {benefits.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 md:cursor-pointer active:scale-95 touch-manipulation">
                  {/* Icon with hover effect */}
                  <div className="text-4xl mb-4 transform transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-3">
                    {item.icon}
                  </div>
                  {/* Title with hover color change */}
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white md:group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed md:group-hover:text-gray-800 md:dark:group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                  {/* Optional: Add a subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

      <ConsultationSection />
    </>
  );
}
