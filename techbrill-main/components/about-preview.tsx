"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function AboutPreview() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="scale" delay={0.2}>
            <div className="relative">
              <div className="relative h-64 md:h-80 lg:h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about/18771.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg max-w-xs text-center md:text-left"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <blockquote className="text-xs md:text-sm italic">
                  &ldquo;We believe that our growth depends on our clients&apos; growth. Your success is our success.&rdquo;
                </blockquote>
              </motion.div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fade" delay={0.3}>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Who We Are</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </AnimatedSection>

            <AnimatedText
              text="We deal with the aspects of professional IT Services"
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight"
              delay={0.4}
            />

            <AnimatedSection animation="fade" delay={0.5}>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                Founded in 2017 in Noida, India, TechBrill Solutions has rapidly grown into a leading IT service
                provider and brand communication company. Our team of passionate designers, developers, and digital
                strategists share one goal: delivering high-performance digital solutions that drive real business
                growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                We&apos;ve successfully partnered with startups and enterprise-level clients across industries including
                healthcare, finance, education, and retail. Our approach combines technical expertise with creative
                innovation to build scalable, secure, and user-friendly solutions tailored to your specific business
                goals.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                At TechBrill, we stand for brilliance, diligence, and commitment to core values of collaboration. We
                tackle every challenge with determination and creativity, ensuring we reach our common goal no matter
                the impediment.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.6}>
              <Link href="/about">
                <Button className="group">
                  Learn More About Us{" "}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
