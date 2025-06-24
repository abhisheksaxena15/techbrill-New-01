"use client";
import React from "react";
import { motion } from "framer-motion";

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

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-8 py-10 md:justify-between`}
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
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
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
    <section className="py-20 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {SERVICES.map((service, idx) => (
          <ServiceCard key={service.title} service={service} index={idx} />
        ))}
      </div>
    </section>
  );
} 