"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ServicesPage() {

  {/*const services = [
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
  } */}




  return (
    <>
      {/* <section className="py-16">
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
      </section> */}







      <main className='bg-white text-gray-900'>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/it-consultancy-hero.jpg" alt="Web Design Hero" fill className="object-cover object-center z-0" priority />
          {/* Dark Linear Gradient Overlay with Blur */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          {/* Centered Content */}
          <div id="contact-form01"className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: '-2rem' }}>
            <motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The solutions you look for are right here
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button size="lg" className="bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button size="lg" variant="outline" className="border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full sm:w-auto">View Portfolio</Button>
              </motion.div>
            </motion.div>
          </div>
          {/* Scroll Down Indicator (if space allows) */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-7 h-7 text-white opacity-80" />
          </motion.div>
        </section>
      </main>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white">
              What We Offer
            </h2>
            <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Assiting your bussiness with robust services and meeting your <span className="text-blue-800 font-bold">Digital Requirements</span></h2>
            <div className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-4"></div>

          </div>

          {/* Web Design & Development */}
          <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Web Design & Development
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Crafting elegant, user-first web experiences that inspire and engage across every device. Our web development solutions combine cutting-edge technology with intuitive design principles to create responsive, fast, and scalable websites that drive business growth and deliver exceptional user experiences.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Responsive & mobile-first web design</li>
                <li>Custom web application development</li>
                <li>E-commerce platform integration</li>
                <li>Performance optimization & SEO-friendly architecture</li>
              </ul>
              <a href="services\it-services\web-design-development" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                        alt="Web Design & Development"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
                        alt="Web Development Process"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Mobile App Development
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                We craft exclusive and reliable mobile apps that connect, inspire, and engage on the go. Our mobile development expertise spans native and cross-platform solutions, ensuring your app delivers optimal performance, seamless user experience, and robust functionality across iOS and Android devices.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Native iOS & Android app development</li>
                <li>Cross-platform solutions with React Native & Flutter</li>
                <li>App Store optimization & deployment</li>
                <li>Backend integration & API development</li>
              </ul>
              <a href="services\it-services\mobile-app-development" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
                        alt="Mobile App Development"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/web-design-hero.jpg"
                        alt="Mobile App Design"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* AI & ML Development */}
          <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                AI & ML Development
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Empowering businesses with intelligent, scalable AI and ML technologies for innovation. We develop custom artificial intelligence solutions that automate processes, enhance decision-making, and unlock new possibilities through advanced machine learning algorithms, natural language processing, and computer vision capabilities.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Custom AI model development & training</li>
                <li>Machine learning algorithm implementation</li>
                <li>Natural language processing & chatbots</li>
                <li>Computer vision & image recognition systems</li>
              </ul>
              <a href="services\it-services\ai-ml-development" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                <CarouselContent>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                        alt="AI & ML Development"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                        alt="Machine Learning Solutions"
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

          {/* Search Engine Optimization */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Search Engine Optimization
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Boost your online visibility and drive organic traffic with our data-driven SEO strategies. Our comprehensive approach combines technical optimization, content strategy, and performance analytics to improve your search rankings, increase qualified traffic, and maximize your digital presence across search engines.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Technical SEO audits & optimization</li>
                <li>Keyword research & content strategy</li>
                <li>On-page & off-page SEO implementation</li>
                <li>Local SEO & Google My Business optimization</li>
              </ul>
              <a href="services\digital-marketing\search-engine-optimization" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                        alt="Search Engine Optimization"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                        alt="SEO Analytics"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Social Media Marketing */}
          <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Social Media Marketing
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Engage your audience and build your brand with strategic social media campaigns. Our social media marketing expertise helps businesses create compelling content, build community engagement, and drive meaningful interactions across platforms while measuring ROI and optimizing campaign performance.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Social media strategy & content planning</li>
                <li>Multi-platform campaign management</li>
                <li>Community engagement & influencer partnerships</li>
                <li>Social media analytics & performance tracking</li>
              </ul>
              <a href="services\digital-marketing\social-media-marketing" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                        alt="Social Media Marketing"
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
                        alt="Social Media Strategy"
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

          {/* Content Marketing */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Content Marketing
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Create compelling content that resonates with your audience and drives conversions. Our content marketing approach combines strategic planning, creative storytelling, and data-driven insights to produce engaging content that builds brand authority, nurtures leads, and converts prospects into loyal customers.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Content strategy & editorial calendar development</li>
                <li>Blog writing & thought leadership articles</li>
                <li>Video content & multimedia production</li>
                <li>Content distribution & amplification strategies</li>
              </ul>
              <a href="services\digital-marketing\content-marketing" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                        alt="Content Marketing"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                        alt="Content Creation"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Paid Advertising */}
          {/*<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Paid Advertising
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Maximize your ROI with targeted paid advertising campaigns across multiple platforms. Our paid advertising expertise includes strategic campaign planning, audience targeting, creative optimization, and continuous performance monitoring to ensure your advertising budget delivers maximum impact and measurable results.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Google Ads & Microsoft Advertising campaigns</li>
                <li>Social media advertising (Facebook, LinkedIn, Twitter)</li>
                <li>Display & retargeting campaign management</li>
                <li>Campaign optimization & A/B testing</li>
              </ul>
              <a href="services\digital-marketing\web-analytics" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4100 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                        alt="Paid Advertising"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                        alt="Digital Advertising"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div> */}

          {/* Web Analytics */}
          <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Web Analytics
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                Gain valuable insights into your website performance and user behavior with comprehensive web analytics solutions. We implement advanced tracking systems, create custom dashboards, and provide actionable insights that help optimize user experience, improve conversion rates, and drive data-informed business decisions.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Google Analytics 4 setup & configuration</li>
                <li>Custom dashboard creation & reporting</li>
                <li>Conversion tracking & goal optimization</li>
                <li>User behavior analysis & heatmap implementation</li>
              </ul>
              <a href="services\digital-marketing\web-analytics" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3900 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                        alt="Web Analytics"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                        alt="Analytics Dashboard"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Design & Print Media */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Design & Print Media
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                We offer graphic design and print solutions to create impactful visuals for brand identity. Our design expertise encompasses everything from logo creation and brand guidelines to marketing materials and print campaigns that effectively communicate your brand message and create lasting impressions.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>Logo design & brand identity development</li>
                <li>Marketing collateral & brochure design</li>
                <li>Print design & production coordination</li>
                <li>Brand guidelines & visual style systems</li>
              </ul>
              <a href="services/digital-marketing/design-print-media" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium mt-4 transition-colors duration-200">
                Read More <span className="ml-1">→</span>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4300 })]}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1639717995202-02db625f64a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Design & Print Media"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  {/* <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
                        alt="Graphic Design"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem> */}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-blue-700 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                Our sevices at a Glance
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                Our Service <span className="italic text-blue-800 dark:text-blue-200">Process</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-700 mx-auto mb-4 sm:mb-6"></div>
              <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                We follow a structured approach to ensure that every project is delivered with the highest quality standards and meets your business objectives.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white dark:text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
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
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-600/5"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 mx-4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Need a Custom Solution?
                  </h3>
                  <p className="mb-6 max-w-sm mx-auto text-gray-700 dark:text-gray-300">
                    We specialize in creating tailored solutions to address your unique business challenges.
                  </p>
                  <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white group">
                    <a href="/contact">
                    Contact Our Team 
                    </a>
                    
                  </Button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
