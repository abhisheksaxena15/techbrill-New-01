"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: string;
  features?: string[];
  benefits?: string[];
}

interface ExpandableServiceCardsProps {
  services: ServiceCard[];
  className?: string;
}

export const ExpandableServiceCards: React.FC<ExpandableServiceCardsProps> = ({
  services,
  className
}) => {
  const [active, setActive] = useState<ServiceCard | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
             {/* Modal Overlay */}
       <AnimatePresence mode="wait">
         {active && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.15, ease: "easeInOut" }}
             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
           />
         )}
       </AnimatePresence>

             {/* Modal Content */}
       <AnimatePresence mode="wait">
         {active && (
          <div className="fixed inset-0 flex items-center justify-center z-[60] p-4">
                         <motion.button
               key={`close-button-${active.id}-${id}`}
               layout
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.8 }}
               transition={{ duration: 0.15, ease: "easeInOut" }}
               className="absolute top-4 right-4 z-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full h-10 w-10 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
               onClick={() => setActive(null)}
             >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </motion.button>

                         <motion.div
               layoutId={`card-${active.id}-${id}`}
               ref={ref}
               className="w-full max-w-4xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ 
                 duration: 0.2, 
                 ease: "easeInOut",
                 layout: { duration: 0.3, ease: "easeInOut" }
               }}
             >
                             {/* Image Section */}
               <motion.div 
                 layoutId={`image-${active.id}-${id}`} 
                 className="relative"
                 transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* Content Section */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                                             <motion.h3
                         layoutId={`title-${active.id}-${id}`}
                         className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
                         transition={{ duration: 0.3, ease: "easeInOut" }}
                       >
                        {active.title}
                      </motion.h3>
                                             <motion.p
                         layoutId={`description-${active.id}-${id}`}
                         className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                         transition={{ duration: 0.3, ease: "easeInOut" }}
                       >
                        {active.description}
                      </motion.p>

                                             {/* Features Section */}
                       <motion.div
                         layout
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 20 }}
                         transition={{ duration: 0.2, ease: "easeInOut" }}
                         className="mb-6"
                       >
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {getServiceFeatures(active.title).map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                                             {/* Benefits Section */}
                       <motion.div
                         layout
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 20 }}
                         transition={{ duration: 0.2, ease: "easeInOut" }}
                         className="mb-6"
                       >
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {getServiceBenefits(active.title).map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                                         {/* CTA Section */}
                     <motion.div
                       layout
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: 20 }}
                       transition={{ duration: 0.2, ease: "easeInOut" }}
                       className="md:w-64 flex-shrink-0"
                     >
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Ready to Get Started?
                        </h5>
                                                 <p className="text-gray-600 dark:text-gray-300 mb-6">
                           Let&apos;s discuss how we can help you achieve your goals with our {active.title.toLowerCase()} services.
                         </p>
                        <div className="space-y-3">
                          <a
                            href={active.link}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4" />
                          </a>
                          <a
                            href="/contact"
                            className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cards Grid */}
      <motion.div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          className
        )}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            layoutId={`card-${service.id}-${id}`}
            variants={cardVariants}
            onClick={() => setActive(service)}
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
                         {/* Image Container */}
             <motion.div 
               layoutId={`image-${service.id}-${id}`} 
               className="relative h-48 overflow-hidden"
               transition={{ duration: 0.3, ease: "easeInOut" }}
             >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="p-6">
                             <motion.h3
                 layoutId={`title-${service.id}-${id}`}
                 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300"
                 transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                {service.title}
              </motion.h3>
              
                             <motion.p
                 layoutId={`description-${service.id}-${id}`}
                 className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
                 transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                {service.description}
              </motion.p>

              {/* Read More Link */}
              <div className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                <span>Click to learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

// Helper functions to get features and benefits for each service
function getServiceFeatures(serviceTitle: string): string[] {
  const featuresMap: Record<string, string[]> = {
    "Web Design & Development": [
      "Responsive & mobile-first design",
      "Custom web application development",
      "E-commerce platform integration",
      "Performance optimization",
      "SEO-friendly architecture"
    ],
    "Mobile App Development": [
      "Native iOS & Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Backend integration",
      "Push notifications"
    ],
    "AI & ML Development": [
      "Custom AI model development",
      "Machine learning algorithms",
      "Natural language processing",
      "Computer vision systems",
      "Predictive analytics"
    ],
    "Search Engine Optimization": [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page & off-page optimization",
      "Local SEO optimization",
      "Performance tracking"
    ],
    "Social Media Marketing": [
      "Multi-platform campaigns",
      "Content strategy & planning",
      "Community engagement",
      "Influencer partnerships",
      "Analytics & reporting"
    ],
    "Content Marketing": [
      "Content strategy development",
      "Blog & article writing",
      "Video content production",
      "Content distribution",
      "SEO optimization"
    ],
    "Web Analytics": [
      "Google Analytics setup",
      "Custom dashboard creation",
      "Conversion tracking",
      "User behavior analysis",
      "Performance reporting"
    ],
    "Design & Print Media": [
      "Logo & brand identity",
      "Marketing collateral design",
      "Print design & production",
      "Brand guidelines",
      "Visual style systems"
    ],
    "Cloud & DevOps": [
      "CI/CD pipeline setup",
      "Cloud infrastructure management",
      "Container orchestration",
      "Monitoring & logging",
      "Security & compliance"
    ]
  };

  return featuresMap[serviceTitle] || [
    "Custom solution development",
    "Professional implementation",
    "Ongoing support",
    "Performance optimization",
    "Quality assurance"
  ];
}

function getServiceBenefits(serviceTitle: string): string[] {
  const benefitsMap: Record<string, string[]> = {
    "Web Design & Development": [
      "Improved user experience",
      "Increased conversion rates",
      "Better search engine rankings",
      "Enhanced brand credibility",
      "Scalable solutions"
    ],
    "Mobile App Development": [
      "Wider audience reach",
      "Enhanced user engagement",
      "Improved customer loyalty",
      "Increased revenue streams",
      "Competitive advantage"
    ],
    "AI & ML Development": [
      "Automated processes",
      "Data-driven insights",
      "Improved decision making",
      "Cost reduction",
      "Innovation leadership"
    ],
    "Search Engine Optimization": [
      "Increased organic traffic",
      "Better search visibility",
      "Higher conversion rates",
      "Long-term sustainable growth",
      "Improved user experience"
    ],
    "Social Media Marketing": [
      "Enhanced brand awareness",
      "Increased engagement",
      "Better customer relationships",
      "Higher website traffic",
      "Improved brand loyalty"
    ],
    "Content Marketing": [
      "Increased brand authority",
      "Better search rankings",
      "Higher engagement rates",
      "Improved lead generation",
      "Long-term value creation"
    ],
    "Web Analytics": [
      "Data-driven decisions",
      "Improved user experience",
      "Better conversion optimization",
      "Performance insights",
      "ROI measurement"
    ],
    "Design & Print Media": [
      "Professional brand image",
      "Consistent visual identity",
      "Enhanced marketing effectiveness",
      "Better customer perception",
      "Competitive differentiation"
    ],
    "Cloud & DevOps": [
      "Faster deployment cycles",
      "Improved reliability",
      "Cost optimization",
      "Better security",
      "Scalable infrastructure"
    ]
  };

  return benefitsMap[serviceTitle] || [
    "Improved efficiency",
    "Cost savings",
    "Better performance",
    "Enhanced user experience",
    "Competitive advantage"
  ];
}
