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
			{/* QA & Testing What We Do Section */}
			<section className="py-16 bg-white dark:bg-gray-950">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row items-center gap-9">
						{/* Left: QA image */}
						<motion.div
							className="w-full md:w-1/2 flex items-center justify-center"
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<div className="rounded-md overflow-hidden w-full">
								<Image
									src="/images/services/qa-testing-hero.jpg"
									alt="QA & Testing Hero"
									width={600}
									height={400}
									className="object-cover w-full h-[500px]"
									priority
								/>
							</div>
						</motion.div>

						{/* Right: Text content */}
						<motion.div
							className="w-full md:w-1/2"
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<h3 className="text-xl md:text-2xl font-semibold mb-2 text-black  dark:text-white">We Build More Than Test Cases</h3>
							<div className="h-1 w-28 bg-blue-800 mb-6 " />
							<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Partner for <span className="text-blue-800">Quality Assurance</span> and <span className="text-blue-800">Reliable Software</span></h2>
							<p className="text-gray-600 dark:text-white mb-2 ">
								At TechBrill, we believe that software quality is the foundation of business success. Our QA & Testing services are designed to ensure your applications are robust, secure, and deliver exceptional user experiences.
							</p>
							<p className="text-gray-600 dark:text-white mb-2">We combine industry-leading methodologies, automation, and deep technical expertise to identify and resolve issues before they impact your users or business goals.</p>
							<p className="text-gray-600 dark:text-white mb-5">
								From initial planning to post-launch support, our team partners with you at every stage to deliver measurable results, reduce risk, and accelerate your software delivery.
							</p>
							<AnimatedSection animation="fade" delay={0.6}>
								<Link href="/contact">
									<Button className="group bg-blue-800 dark: bg-blue-700 ">
										Consult with us{" "}
										<motion.div
											animate={{ x: [0, 5, 0] }}
											transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
										>
											<ArrowRight className="ml-2 h-4 w-4 " />
										</motion.div>
									</Button>
								</Link>
							</AnimatedSection>
						</motion.div>
					</div>
				</div>
			</section>


            <section className="py-16 bg-white dark:bg-gray-950">
	<div className="container mx-auto px-4 max-w-6xl">
		<div className="text-center mb-8 md:mb-12">
			<h2 className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white">
				What We Do
			</h2>
			<h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Ensuring quality through comprehensive <span className="text-blue-800 font-bold">Software QA & Testing</span></h2>
			<div className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-4"></div>
		</div>

		{/* Test Automation Services with carousel */}
		<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
			<div className="w-full md:w-1/2">
				<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
					Test Automation Services
				</h3>
				<p className="text-gray-600 dark:text-white mb-4">
					Accelerate your testing cycles with robust automation frameworks that reduce manual effort and increase test coverage. Our automation solutions ensure consistent, reliable, and repeatable testing across all environments.
				</p>
				<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
					<li>End-to-end test automation framework development</li>
					<li>UI/UX automation using Selenium, Cypress & Playwright</li>
					<li>API & web services automation testing</li>
					<li>Cross-browser & cross-platform test execution</li>
					<li>CI/CD pipeline integration & continuous testing</li>
				</ul>
			</div>
			<div className="w-full md:w-1/2">
				<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
					<CarouselContent>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
									alt="Test Automation Framework"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
									alt="Automation Testing Tools"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</div>

		{/* Performance Testing with carousel */}
		<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
			<div className="w-full md:w-1/2">
				<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
					Performance Testing
				</h3>
				<p className="text-gray-600 dark:text-white mb-4">
					Ensure your applications perform optimally under various load conditions. Our performance testing services identify bottlenecks, optimize response times, and guarantee scalability for peak user traffic.
				</p>
				<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
					<li>Load testing with JMeter, Gatling & K6</li>
					<li>Stress testing & volume testing scenarios</li>
					<li>Database performance optimization</li>
					<li>Real-time monitoring & performance analytics</li>
					<li>Scalability assessment & capacity planning</li>
				</ul>
			</div>
			<div className="w-full md:w-1/2">
				<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
					<CarouselContent>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
									alt="Performance Testing Dashboard"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/web-design-hero.jpg"
									alt="Load Testing Tools"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</div>

		{/* API Testing with carousel */}
		<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
			<div className="w-full md:w-1/2">
				<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
					API Testing Services
				</h3>
				<p className="text-gray-600 dark:text-white mb-4">
					Validate the reliability, functionality, and security of your APIs with comprehensive testing strategies. Our API testing ensures seamless data exchange and integration between different system components.
				</p>
				<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
					<li>REST & SOAP API functional testing</li>
					<li>Data validation & schema verification</li>
					<li>Authentication & authorization testing</li>
					<li>API security & vulnerability assessment</li>
					<li>Integration testing & microservices validation</li>
					<li>Response time & throughput optimization</li>
				</ul>
			</div>
			<div className="w-full md:w-1/2">
				<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
					<CarouselContent>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
									alt="API Testing Process"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
									alt="API Testing Tools"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</div>

		{/* Mobile Testing with carousel */}
		<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
			<div className="w-full md:w-1/2">
				<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
					Mobile App Testing
				</h3>
				<p className="text-gray-600 dark:text-white mb-4">
					Deliver flawless mobile experiences across devices and platforms. Our mobile testing services cover functionality, usability, performance, and compatibility testing for both native and hybrid applications.
				</p>
				<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
					<li>Native iOS & Android app testing</li>
					<li>Cross-platform compatibility testing</li>
					<li>Device-specific functionality validation</li>
					<li>Mobile performance & battery optimization</li>
					<li>App store compliance & deployment testing</li>
				</ul>
			</div>
			<div className="w-full md:w-1/2">
				<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
					<CarouselContent>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
									alt="Mobile App Testing"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
									alt="Mobile Testing Devices"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</div>

		{/* Security Testing with carousel */}
		<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
			<div className="w-full md:w-1/2">
				<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
					Security Testing Services
				</h3>
				<p className="text-gray-600 dark:text-white mb-4">
					Protect your applications from vulnerabilities and security threats with comprehensive security testing. Our security assessment identifies risks, validates security controls, and ensures compliance with industry standards.
				</p>
				<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
					<li>Penetration testing & vulnerability assessment</li>
					<li>OWASP Top 10 security validation</li>
					<li>Authentication & authorization testing</li>
					<li>Data encryption & privacy compliance</li>
					<li>Security code review & static analysis</li>
					<li>Compliance testing (GDPR, HIPAA, SOX)</li>
				</ul>
			</div>
			<div className="w-full md:w-1/2">
				<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
					<CarouselContent>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
									alt="Security Testing Process"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/web-design-hero.jpg"
									alt="Security Testing Tools"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</div>

		{/* Test Management & QA Consulting with carousel */}
		<div className="flex flex-col md:flex-row-reverse items-start gap-10">
			<div className="w-full md:w-1/2">
				<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
					Test Management & QA Consulting
				</h3>
				<p className="text-gray-600 dark:text-white mb-4">
					Optimize your QA processes with strategic consulting and comprehensive test management solutions. We help establish testing best practices, implement quality frameworks, and build efficient testing workflows.
				</p>
				<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
					<li>QA strategy development & process optimization</li>
					<li>Test planning & execution management</li>
					<li>Quality metrics & reporting dashboards</li>
					<li>Team training & skill development</li>
					<li>Testing tool selection & implementation</li>
					<li>Agile & DevOps testing integration</li>
				</ul>
			</div>
			<div className="w-full md:w-1/2">
				<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
					<CarouselContent>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
									alt="QA Consulting"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="rounded-md overflow-hidden">
								<Image
									src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
									alt="Test Management"
									width={600}
									height={400}
									className="object-cover w-full h-[300px]"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
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