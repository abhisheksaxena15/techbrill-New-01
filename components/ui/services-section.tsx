"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SERVICES = [
	{
		title: "UI/UX Services",
		description:
			"We craft intuitive, user-centric interfaces that delight and engage. Our UI/UX team ensures every digital experience is seamless, accessible, and visually stunning.",
		bullets: [
			"User research & persona development",
			"Wireframing & interactive prototyping",
			"UI design for web and mobile apps",
			"UX audits & usability testing",
			"Accessibility-focused design",
		],
		image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
	},
	{
		title: "Web Development",
		description:
			"From landing pages to complex web apps, we build robust, scalable, and high-performing websites. Our developers use the latest technologies to deliver secure, maintainable solutions.",
		bullets: [
			"Custom website & web app development",
			"Responsive & mobile-first design",
			"API integration & backend services",
			"SEO & performance optimization",
			"Ongoing support & maintenance",
		],
		image: "/images/services/web-design-hero.jpg",
	},
	{
		title: "E-Commerce Solutions",
		description:
			"Empower your business to sell online with custom e-commerce platforms. We create secure, user-friendly stores that drive sales and enhance customer experience.",
		bullets: [
			"Custom e-commerce website development",
			"Payment gateway integration",
			"Mobile-optimized shopping",
			"Inventory & order management",
			"Analytics & conversion tracking",
		],
		image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
	},
	{
		title: "Mobile App Development",
		description:
			"Reach your audience on any device. We design and develop cross-platform mobile apps that are fast, reliable, and tailored to your business goals.",
		bullets: [
			"iOS & Android app development",
			"Cross-platform solutions",
			"App store deployment",
			"Push notifications & analytics",
			"Ongoing updates & support",
		],
		image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
	},
	{
		title: "CMS & Content Solutions",
		description:
			"Manage your content with ease. We implement flexible CMS platforms that empower your team to update, organize, and publish content effortlessly.",
		bullets: [
			"Custom CMS development",
			"WordPress, Strapi, and more",
			"Content migration & training",
			"Role-based access control",
			"SEO-friendly architecture",
		],
		image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
	},
	{
		title: "SEO & Digital Marketing",
		description:
			"Grow your reach and drive results with our digital marketing expertise. We combine SEO, content, and analytics to help your business stand out online.",
		bullets: [
			"On-page & technical SEO",
			"Content strategy & creation",
			"Analytics & reporting",
			"Social media integration",
			"Conversion rate optimization",
		],
		image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
	},
];

function ServiceCard({
	service,
	index,
}: {
	service: typeof SERVICES[0];
	index: number;
}) {
	const isEven = index % 2 === 0;
	return (
		<motion.div
			className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""
				} items-center gap-8 py-10 md:justify-between`}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, delay: index * 0.1 }}
		>
			{/* Image */}
			<motion.div
				className="w-full md:w-1/3 flex-shrink-0"
				initial={{ x: isEven ? -60 : 60, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
			>
				<img
					src={service.image}
					alt={service.title}
					className="rounded-xl object-cover shadow-md w-full h-64 md:h-56 lg:h-64"
				/>
			</motion.div>
			{/* Text */}
			<div className="flex-1 md:max-w-[60%] w-full">
				<h3 className="text-xl md:text-2xl font-semibold mb-2">
					{service.title}
				</h3>
				<p className="text-gray-600 mb-3">{service.description}</p>
				<ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
					{service.bullets.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}

export default function ServicesSection() {
	return (
		<>
		{/* 2. What We Do Section - matches the image layout */ }
		< section className = "py-16 bg-gray-950 " >
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="flex flex-col md:flex-row items-start gap-10">
					{/* Left: Code image */}
					<motion.div
						className="w-full md:w-1/2"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<div className="rounded-md overflow-hidden">
							<Image
								src="/images/services/web-design-hero.jpg"
								alt="Code editor with web development code"
								width={600}
								height={400}
								className="object-cover w-full h-[300px]"
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
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
							What We Do in Web Design & Development
						</h2>
						<p className="text-gray-300 mb-4">
							Web design and development is the process of creating
							visually appealing, functional, and user-friendly websites.
							In today&apos;s digital landscape, a professional online presence
							is crucial for building credibility, reaching customers, and
							achieving business goals.
						</p>
						<p className="text-gray-300 mb-4">
							At TechBrill Solutions, we combine cutting-edge technology
							with creative design to deliver websites that not only look
							stunning but also drive results. Our team of expert developers
							and designers work together to build custom web solutions
							tailored to your specific needs and solutions.
						</p>
					</motion.div>
				</div>
			</div>
				</section >

		{/* 3. Services Section - Using the custom dark theme from the image */ }
		< section className = "py-16 bg-gray-950" >
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="text-center mb-8 md:mb-12">
					<h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
						Our Expertise
					</h2>
					<div className="h-1 w-20 bg-blue-500 mx-auto mt-4 mb-10"></div>
				</div>

				{/* UI/UX Services with carousel */}
				<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
					<div className="w-full md:w-1/2">
						<h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
							UI/UX Services
						</h3>
						<p className="text-gray-300 mb-4">
							Elevate your digital products with user-centric design that
							balances form, function, and delightful interactions. Our
							end-to-end Product Design & UI/UX offerings ensure every
							touchpoint resonates with your audience and drives business
							goals.
						</p>
						<ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
							<li>User research & persona development</li>
							<li>Wireframing & interactive prototyping</li>
							<li>UI design for web and mobile apps</li>
							<li>UX audits & usability testing</li>
							<li>Responsive & accessibility-focused design</li>
						</ul>
					</div>
					<div className="w-full md:w-1/2">
						<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
							<CarouselContent>
								<CarouselItem>
									<div className="rounded-md overflow-hidden">
										<Image
											src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
											alt="UI/UX Design Process"
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
											alt="UI/UX Design Workshop"
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

				{/* Web Development with carousel */}
				<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
					<div className="w-full md:w-1/2">
						<h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
							Web Development
						</h3>
						<p className="text-gray-300 mb-4">
							From simple digital presence websites to complex web apps, we
							build robust, scalable, and effective solutions. Our expert team
							creates customized experiences that deliver unique, maintainable
							solutions.
						</p>
						<ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
							<li>Custom website & web app development</li>
							<li>Frontend & backend development</li>
							<li>API integration & feature testing</li>
							<li>CMS performance optimization</li>
							<li>Website security & maintenance</li>
						</ul>
					</div>
					<div className="w-full md:w-1/2">
						<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
							<CarouselContent>
								<CarouselItem>
									<div className="rounded-md overflow-hidden">
										<Image
											src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
											alt="Web Development"
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
											alt="Web Development Tools"
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

				{/* E-Commerce Solutions with carousel */}
				<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
					<div className="w-full md:w-1/2">
						<h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
							E-Commerce Development & Solutions
						</h3>
						<p className="text-gray-300 mb-4">
							Our eCommerce development and solutions services empower
							businesses to sell online with secure, scalable, and user-friendly
							platforms. We build custom online stores that drive sales,
							enhance customer experience, and streamline operations.
						</p>
						<ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
							<li>Custom eCommerce website development</li>
							<li>Payment gateway and third-party integrations</li>
							<li>Mobile-optimized shopping experiences</li>
							<li>Multi-channel sales solutions</li>
							<li>Custom product visualization design</li>
						</ul>
					</div>
					<div className="w-full md:w-1/2">
						<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
							<CarouselContent>
								<CarouselItem>
									<div className="rounded-md overflow-hidden">
										<Image
											src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
											alt="E-commerce Development"
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
											alt="E-commerce Platform Design"
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
				
				{/* Continue adding the rest of your services with carousels... */}
				{/* Mobile App Development, CMS & Content Solutions, SEO & Digital Marketing */}
			</div>
				</section >
				</>
	);
}