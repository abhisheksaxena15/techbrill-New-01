"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Crafting elegant, user-first web experiences that inspire and engage across every device.",
      icon: "monitor",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      link: "/services#web",
    },
    {
      title: "Mobile App Development",
      description: "We craft exclusive and reliable mobile apps that connect, inspire, and engage on the go.",
      icon: "smartphone",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      link: "/services#mobile",
    },
    {
      title: "AI & ML Development",
      description: "Empowering businesses with intelligent, scalable AI and ML technologies for innovation.",
      icon: "brain",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      link: "/services#ai-ml",
    },
    {
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
      icon: "search",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      link: "/services#seo",
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build your brand with strategic social media campaigns.",
      icon: "share-2",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      link: "/services#social-media-marketing",
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions.",
      icon: "file-text",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      link: "/services#content",
    },
    {
      title: "Paid Advertising",
      description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms.",
      icon: "trending-up",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      link: "/services#paid-advertising",
    },
    {
      title: "Web Analytics",
      description: "Gain valuable insights into your website performance and user behavior.",
      icon: "bar-chart",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      link: "/services#web-analytics",
    },
    {
      title: "Design & Print Media",
      description: "We offer graphic design and print solutions to create impactful visuals for brand identity.",
      icon: "pen-tool",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
      link: "/services#design-print-media",
    },
  ]

  const duplicatedServices = [...services, ...services]
  const containerRef = useRef<HTMLDivElement | null>(null)
  const containerControls = useAnimation()
  const cardControls = useAnimation()

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
    })
  }, [containerControls])

  const handleMouseEnter = () => {
    containerControls.stop()
    cardControls.start({
      scale: 1.03,
      transition: { duration: 0.2 }
    })
  }

  const handleMouseLeave = () => {
    cardControls.start({ scale: 1, transition: { duration: 0.2 } })
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
    })
  }

  return (
    <>
      <PageHeader title="Our Services" description="Comprehensive IT solutions tailored to your business needs" />

      <section className="py-16">
        <div className="container">
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex flex-row gap-8"
              animate={containerControls}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animate={cardControls}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={service.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Service Process</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We follow a structured approach to ensure that every project is delivered with the highest quality
                standards and meets your business objectives.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description: "We begin by understanding your business needs, goals, and target audience.",
                  },
                  {
                    step: "02",
                    title: "Design & Development",
                    description: "Our team creates prototypes and develops solutions based on the approved designs.",
                  },
                  {
                    step: "03",
                    title: "Testing & Quality Assurance",
                    description:
                      "Rigorous testing ensures that the final product meets all requirements and quality standards.",
                  },
                  {
                    step: "04",
                    title: "Deployment & Support",
                    description: "We deploy the solution and provide ongoing support and maintenance.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="group">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                  <p className="mb-6 max-w-md mx-auto">
                    We specialize in creating tailored solutions to address your unique business challenges.
                  </p>
                  <Button variant="outline" className="bg-white hover:bg-white/90">
                    Contact Our Team
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <div className="h-full w-full bg-gradient-to-r from-primary/10 to-primary/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
