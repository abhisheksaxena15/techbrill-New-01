'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Layout, PenTool, Code, Rocket, X } from 'lucide-react';

const STEPS = [
    {
    key: "E-commerce",
    label: "E-commerce",
    icon: (
        <div className="text-4xl">🛒</div>
    ),
    heading: "Step 1: E-commerce",
    description: (
        <div className="text-justify leading-relaxed">
            <p>We build scalable online platforms using technologies like Magento and Shopify to create seamless shopping experiences.</p>
            <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside mt-4">
                <li>Magento</li>
                <li>Shopify</li>
                <li>WooCommerce</li>
            </ul>
        </div>
    ),
    image: "/images/services/ecommerce.jpg",
},
    {
        key: "FinTech",
        label: "FinTech",
        icon: (
            <div className="text-4xl">💳</div>
        ),
        heading: "Step 2: FinTech & Banking",
        description: (
            <div className="text-justify leading-relaxed">
                <p>We develop secure healthcare apps for patient management, telemedicine, and health monitoring with IoT and HL7/FHIR integration.</p>
                <ul className="grid grid-cols-2 gap-x list-disc list-inside">
                    <li>Blockchain</li>
                    <li>AI-based Fraud Detection</li>
                    <li>Secure APIs</li>
                </ul>
            </div>
        ),
        image: "/images/services/fintech.jpg",
    },
    {
        key: "Healthcare",
        label: "Healthcare",
        icon: (
            <div className="text-4xl">🏥</div>
        ),
        heading: "Step 3: Healthcare",
        description: (
            <div className="text-justify leading-relaxed">
                <p>Our financial solutions use blockchain and AI-based fraud detection to enable secure transactions and smarter money management.

</p>
                <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside">
                    <li>IoT</li>
                    <li>HL7/FHIR Integration</li>
                    <li>Telemedicine Platforms</li>
                </ul>
            </div>
        ),
        image: "/images/services/health.webp",
    },
    {
        key: "Education",
        label: "Education",
        icon: (
            <div className="text-4xl">🎓</div>
        ),
        heading: "Step 4: Education & eLearning",
        description: (
            <div className="text-justify leading-relaxed">
                <p>We create engaging learning environments with LMS and AR/VR, making education more interactive and accessible.</p>
                <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside">
                    <li>Learning Management Systems (LMS)</li>
                    <li>AR/VR for Learning</li>
                </ul>
            </div>
        ),
        image: "/images/services/edu.avif",
    },
    {
        key: "Retail",
        label: "Retail",
        icon: (
            <div className="text-4xl">🏬</div>
        ),
        heading: "Step 5: Retail & Supply Chain",
        description: (
            <div className="text-justify leading-relaxed">
                <p>We optimize retail operations and inventory using ERP integrations and RFID for enhanced efficiency and analytics.</p>
                <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside">
                    <li>ERP Integrations</li>
                    <li>RFID</li>
                    <li>Predictive Analytics</li>
                </ul>
            </div>
        ),
        image: "/images/services/rental.jpeg",
    },
];
export default function WorkProcessTech({ steps = STEPS }: { steps?: typeof STEPS }) {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 md:px-16 max-w-full bg-white">
            <div className="text-center mb-10">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
                    Industry Expertise
                </span>
                    Transforming Industries Through Specialized Technology
                </motion.h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-3 rounded-full mt-3" />
                <motion.p
                    className="text-base text-gray-600   max-w-xl mx-auto mt-1 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
We combine domain expertise with advanced technology to create solutions that address the unique challenges and opportunities of each industry                </motion.p>
            </div>

            {/* Icons Row */}
            {/* Icons Row */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {steps.map((step, idx) => (
                    <button
                        key={step.key}
                        onClick={() => setActive(idx)}
                        className="flex flex-col items-center justify-center 
                 w-32 h-32 md:w-36 md:h-36 
                 bg-white shadow-md rounded-xl 
                 hover:shadow-lg hover:scale-105 transition-transform
                 focus:outline-none"
                    >
                        <div className="text-4xl">{step.icon}</div>
                        <span className="mt-3 text-sm md:text-base font-medium text-gray-700">
                            {step.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {active !== null && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-6 relative"
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
                                onClick={() => setActive(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-700">
                                        {steps[active].heading}
                                    </h3>
                                    <div className="text-gray-600">{steps[active].description}</div>
                                </div>
                                <div className="flex-1">
                                    <img
                                        src={steps[active].image}
                                        alt={steps[active].label}
                                        className="rounded-xl object-cover shadow-md w-full md:h-72"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
