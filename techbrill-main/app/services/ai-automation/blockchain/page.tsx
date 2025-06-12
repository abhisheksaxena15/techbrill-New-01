'use client';

import React from 'react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlockchainPage() {
  return (
    <div>
      <PageHeader 
        title="Blockchain" 
        description="Building secure and transparent solutions with Blockchain technology"
      />

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">What is Blockchain?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Blockchain is a decentralized, distributed ledger technology that records transactions across many computers. This structure makes it virtually impossible to alter previous records, creating a secure, transparent, and tamper-evident system. It&apos;s the foundation for cryptocurrencies like Bitcoin, but its applications extend far beyond digital currency, impacting various sectors through its ability to establish trust and efficiency in peer-to-peer transactions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At its core, blockchain operates as a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a network. Assets can be tangible (a house, a car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At TechBrill Solutions, we help businesses leverage the power of blockchain to build trust, improve efficiency, and create innovative solutions across various industries, including finance, supply chain, healthcare, and more. Our expertise enables organizations to explore and implement blockchain technology for secure transactions, transparent supply chains, and decentralized applications.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Benefits of Blockchain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
              <p className="text-gray-700 dark:text-gray-300">Cryptographic security and distributed nature make blockchain highly resistant to tampering and fraud.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Greater Transparency</h3>
              <p className="text-gray-700 dark:text-gray-300">All participants in the network can access the same real-time information, fostering trust and accountability.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Increased Efficiency</h3>
              <p className="text-gray-700 dark:text-gray-300">Streamline processes and eliminate intermediaries, leading to faster and more cost-effective transactions.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Immutability</h3>
              <p className="text-gray-700 dark:text-gray-300">Once a transaction is recorded on the blockchain, it cannot be altered or deleted, providing a permanent audit trail.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Faster Transactions</h3>
              <p className="text-gray-700 dark:text-gray-300">Blockchain enables near-instantaneous transactions and settlements, especially for cross-border payments.</p>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Improved Traceability</h3>
              <p className="text-gray-700 dark:text-gray-300">Easily track the origin and history of assets and transactions on the blockchain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Addressing Your Blockchain Challenges</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
            {/* Placeholder: List common pain points and how your service addresses them */}
            <li>Pain Point 1: Briefly describe the pain point and your solution.</li>
            {/* Add more pain points */}
          </ul>
        </div>
      </section>

      {/* Case Studies/Success Stories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Blockchain Case Studies</h2>
          {/* Placeholder: Showcase relevant case studies or testimonials */}
          {/* Add case studies */} 
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Blockchain Solutions?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your Blockchain needs.</p>
          <Button variant="secondary" size="lg" className="group">
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Our Blockchain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Blockchain Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Our expert team provides end-to-end blockchain development services, from designing and implementing custom blockchain networks to developing smart contracts and decentralized applications (dApps). We help you build secure, scalable, and efficient blockchain solutions tailored to your specific business needs.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Custom Blockchain Development: Building tailored blockchain solutions for unique requirements.</li>
                <li>• Smart Contract Development & Auditing: Creating and securing self-executing contracts.</li>
                <li>• dApp Development: Designing and building decentralized applications.</li>
                <li>• Blockchain Integration Services: Connecting blockchain with existing systems.</li>
                <li>• Private & Consortium Blockchain Solutions: Developing permissioned blockchain networks for specific groups.</li>
              </ul>
            </div>

            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Blockchain Consulting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We offer strategic blockchain consulting services to help you understand the potential of blockchain for your business. We conduct feasibility studies, analyze use cases, develop tokenization strategies, perform security audits, and provide guidance on regulatory compliance to ensure a successful blockchain adoption.</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Blockchain Strategy & Consulting: Defining how blockchain can align with your business goals.</li>
                <li>• Feasibility Studies & Use Case Analysis: Evaluating the viability of blockchain for specific applications.</li>
                <li>• Tokenization Strategy: Planning the creation and management of digital tokens.</li>
                <li>• Blockchain Security Audits: Assessing the security of your blockchain implementation.</li>
                <li>• Regulatory Compliance Guidance: Navigating the legal and regulatory landscape of blockchain.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 