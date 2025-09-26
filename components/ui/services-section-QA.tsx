"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// const SERVICES = [
// 	{
// 		title: "QA Consulting & Strategy",
// 		description:
// 			"We help you define the right testing strategy, select tools, and implement best practices for continuous quality improvement. Our QA consultants ensure your software meets business goals and industry standards.",
// 		bullets: [
// 			"Test strategy & planning",
// 			"Tool selection & integration",
// 			"Process audits & improvement",
// 			"Risk assessment & mitigation",
// 			"QA team training & enablement",
// 		],
// 		image: "/images/services/qa-testing-hero.jpg",
// 	},
// 	{
// 		title: "Manual & Automated Testing",
// 		description:
// 			"We offer both manual and automated testing services to ensure your software is robust and reliable. Our automation frameworks speed up testing cycles and improve coverage, while manual testing ensures a human touch for usability and edge cases.",
// 		bullets: [
// 			"Functional & regression testing",
// 			"Test automation frameworks (Selenium, Cypress, etc.)",
// 			"Cross-browser & cross-device testing",
// 			"Test case design & execution",
// 			"Defect tracking & reporting",
// 		],
// 		image: "/images/services/myriam-jessier-eveI7MOcSmw-unsplash.jpg",
// 	},
// 	{
// 		title: "Performance & Load Testing",
// 		description:
// 			"We simulate real-world conditions to measure app stability, responsiveness, and scalability under load. Our performance testing ensures your software delivers a fast, reliable experience for every user.",
// 		bullets: [
// 			"Load & stress testing",
// 			"Scalability & endurance testing",
// 			"Bottleneck identification",
// 			"Resource usage monitoring",
// 			"Performance optimization recommendations",
// 		],
// 		image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
// 	},
// 	{
// 		title: "Security Testing",
// 		description:
// 			"We uncover vulnerabilities, protect sensitive data, and safeguard your software from internal and external threats. Our security testing covers everything from code review to penetration testing.",
// 		bullets: [
// 			"Vulnerability assessment",
// 			"Penetration testing",
// 			"Data privacy & compliance checks",
// 			"OWASP Top 10 coverage",
// 			"Secure code review",
// 		],
// 		image: "/images/services/web-design-hero.jpg",
// 	},
// 	{
// 		title: "Usability & Accessibility Testing",
// 		description:
// 			"Through real-user simulations, we identify design flaws and optimize user experience across all touchpoints. We ensure your software is accessible and intuitive for every user.",
// 		bullets: [
// 			"User experience (UX) audits",
// 			"Accessibility (WCAG) compliance",
// 			"Heuristic evaluation",
// 			"User journey testing",
// 			"A/B & usability testing",
// 		],
// 		image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
// 	},
// 	{
// 		title: "Continuous Integration & Post-Launch QA",
// 		description:
// 			"We integrate QA into your CI/CD pipeline for constant feedback, faster iterations, and higher code confidence. Our post-launch support ensures your software remains reliable and secure after release.",
// 		bullets: [
// 			"CI/CD pipeline integration",
// 			"Continuous testing & monitoring",
// 			"Automated regression suites",
// 			"Release validation",
// 			"Ongoing maintenance & support",
// 		],
// 		image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
// 	},
// ];

// const ICONS = [
// 	"application-development-svgrepo-com.svg",
// 	"mobile-app-svgrepo-com.svg",
// 	"application-svgrepo-com.svg",
// 	"application-customer-mobile-svgrepo-com.svg",
// 	"alert-octagon.svg"
// ];

// function ServiceCard({
// 	service,
// 	index,
// }: {
// 	service: typeof SERVICES[0];
// 	index: number;
// }) {
// 	const isEven = index % 2 === 0;
// 	return (
// 		<motion.div
// 			className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""
// 				} items-center gap-8 py-10 md:justify-between`}
// 			initial={{ opacity: 0, y: 40 }}
// 			whileInView={{ opacity: 1, y: 0 }}
// 			viewport={{ once: true, amount: 0.2 }}
// 			transition={{ duration: 0.7, delay: index * 0.1 }}
// 		>
// 			{/* Image */}
// 			<motion.div
// 				className="w-full md:w-1/3 flex-shrink-0"
// 				initial={{ x: isEven ? -60 : 60, opacity: 0 }}
// 				whileInView={{ x: 0, opacity: 1 }}
// 				viewport={{ once: true, amount: 0.2 }}
// 				transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
// 			>
// 				<img
// 					src={service.image}
// 					alt={service.title}
// 					className="rounded-xl object-cover shadow-md w-full h-64 md:h-56 lg:h-64"
// 				/>
// 			</motion.div>
// 			{/* Text */}
// 			<div className="flex-1 md:max-w-[60%] w-full pl-0 md:pl-4">
// 				<h3 className="text-xl md:text-2xl font-semibold mb-2">
// 					{service.title}
// 				</h3>
// 				<p className="text-gray-600 mb-3">{service.description}</p>
// 				<ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
// 					{service.bullets.map((point) => (
// 						<li key={point}>{point}</li>
// 					))}
// 				</ul>
// 			</div>
// 		</motion.div>
// 	);
// }

export default function ServicesSection() {
	return (
		<>
			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="text-center mb-8 md:mb-12">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">Core QA services</h3>
						<h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Seamless QA Services for Every Development Stage</h2>
						<div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
						<p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
							Our core QA services ensure every aspect of your software is thoroughly validated and ensure your applications consistently meet the highest standards of quality and performance.
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {[
        {
          title: "Manual Functional Testing",
          description:
            "Ensure core user journeys work flawlessly with requirement-driven functional validation across browsers, devices, and environments.",
          image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
        },
        {
          title: "Automation Testing",
          description:
            "Accelerate release cycles with robust automation that improves coverage, reliability, and repeatability across layers.",
          image: "/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg",
        },
        {
          title: "Mobile Application Testing",
          description:
            "Deliver flawless mobile experiences across devices, OS versions, and network conditions for both native and hybrid apps.",
          image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
        },
        {
          title: "Performance & Load Testing",
          description:
            "Validate scalability and responsiveness under real-world and peak traffic to deliver consistently fast experiences.",
          image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
        },
        {
          title: "Security Testing",
          description:
            "Identify and remediate vulnerabilities to protect sensitive data and harden applications against threats.",
          image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
        },
        {
          title: "API Testing",
          description:
            "Ensure reliable integrations with comprehensive functional, security, and performance validation of your APIs and services.",
          image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
        },
      ].map((service, index) => (
        <AnimatedSection key={index} animation="slide">
          <motion.div
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col border border-blue-600 dark:border-blue-400"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 70, damping: 15, mass: 0.8, delay: index * 0.1 },
            }}
            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          >
            <div className="relative h-48 md:h-64 w-full overflow-hidden">
              <Image
                src={service.image || "/images/services/web-design-hero.jpg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <motion.h3
                className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.15 + 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <span className="text-gray-700 dark:text-gray-200">{service.title}</span>
              </motion.h3>
              <motion.p
                className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base flex-grow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.15 + 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>

				</div>
			</section>




			{/* QA & Testing Services Section */}
			{/* <section className="py-16 bg-white dark:bg-gray-950">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="text-center mb-8 md:mb-12">
						<h2 className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white">
							What We Do
						</h2>
						<h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Empowering your business through <span className="text-blue-800 font-bold">QA & Testing Excellence</span></h2>
						<div className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-4"></div>
					</div>
					<div className="flex flex-col gap-12">
						{SERVICES.map((service, idx) => (
							<ServiceCard key={service.title} service={service} index={idx} />
						))}
					</div>
				</div>
			</section> */}
		</>
	);
}