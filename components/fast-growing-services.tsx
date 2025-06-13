"use client"

import React, { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export default function FastGrowingServices() {
  const services = [
    {
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
      icon: "/icons/search.svg",
      image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
      link: "/services#seo",
    },
    {
      title: "Social Media Marketing",
      description: "We offer Social Media Optimization services to boost visibility, engagement, and reach.",
      icon: "/icons/share-2.svg",
      image: "/images/services/social-media-marketing-hero.avif",
      link: "/services#social-media-marketing",
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions.",
      icon: "/icons/file-text.svg",
      image: "/images/services/myriam-jessier-eveI7MOcSmw-unsplash.jpg",
      link: "/services#content",
    },
    {
      title: "Paid Advertising",
      description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms.",
      icon: "/icons/trending-up.svg",
      image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
      link: "/services#paid-advertising",
    },
    {
      title: "Web Analytics",
      description: "Gain valuable insights into your website performance and user behavior.",
      icon: "/icons/bar-chart.svg",
      image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
      link: "/services#web-analytics",
    },
    {
      title: "Design & Print Media",
      description: "We offer graphic design and print solutions to create impactful visuals for brand identity.",
      icon: "/icons/pen-tool.svg",
      image: "/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg",
      link: "/services#design-print-media",
    },
  ];

  const duplicatedServices = [...services, ...services];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    containerControls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [containerControls]);

  const handleMouseEnter = () => {
    containerControls.stop();
    cardControls.start({
      scale: 1.03,
      transition: { duration: 0.2 }
    });
  };

  const handleMouseLeave = () => {
    cardControls.start({ scale: 1, transition: { duration: 0.2 } });
    containerControls.start({
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="py-16 px-4 bg-[#f8fafc] dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-blue-700 font-medium uppercase tracking-wide text-sm block mb-2">
              Fast Growing Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
              Providing High-performance Solution Of Digital Marketing
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
              Discover our most in-demand services that help businesses scale rapidly and stay ahead in the digital era.
            </p>
          </motion.div>
        </div>

        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex flex-row gap-8 py-4"
            animate={containerControls}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col border border-blue-600 dark:border-blue-400"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={cardControls}
              >
                <div className="relative h-48 md:h-56 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    <span className="text-gray-700 dark:text-gray-200">{service.title}</span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.link} className="text-blue-700 dark:text-blue-400 font-medium flex items-center group mt-auto">
                    Read More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
