"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"
import Link from "next/link"
import { HeroHighlight } from "./BackgroundBeams"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <HeroHighlight className="w-full h-full" containerClassName="absolute inset-0">
        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-20">
              <AnimatedText
                text="Innovative IT Solutions for Your Business Growth"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight mb-8 text-center lg:text-left font-montserrat"
                delay={0.2}
              />
              <AnimatedSection delay={0.4} animation="fade">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
                  We deliver cutting-edge technology solutions that help businesses transform, innovate, and thrive in the
                  digital era. Our expert team turns your vision into reality with precision and creativity.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.6} animation="fade">
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="group text-lg font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Get Started{" "}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Button>
                  <Link href="/services">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-lg font-semibold px-8 py-6 text-primary border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.8} animation="slide">
                <div className="mt-16 flex flex-wrap justify-center gap-12 lg:gap-16 lg:flex-nowrap">
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">20+</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">100+</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy Clients</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.5} animation="scale">
              <div className="relative z-20">
                <motion.div
                  className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                    alt="IT professionals working together"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">24/7 Support Available</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Trusted by 100+ Clients</span>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </HeroHighlight>
    </section>
  )
}
