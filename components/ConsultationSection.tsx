import React from "react";
import Image from "next/image";

export default function ConsultationSection({ bgImage = "/images/services/web-design-hero.jpg" }) {
  return (
    <section className="relative min-h-[70vh] w-full md:py-16">
      {/* Background Image */}
      <Image 
        src={bgImage} 
        alt="Consultation Background" 
        fill 
        className="object-cover object-center z-0" 
        priority 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm" />
      
      {/* Container with unified styling */}
      <div className="relative z-20 container mx-auto flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 py-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Experts Are Here to<br />Ignite Your Digital Journey
          </h2>
          <p className="text-lg md:text-xl text-center mb-4">
            Book A Free Consultation Call With Our Experts Today
          </p>
          <div className="hidden md:block rounded-md h-1 w-40 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 flex items-center justify-center px-4 py-12 md:pl-0">
          <form className="bg-white/95 dark:bg-[#181828]/95 rounded-xl shadow-lg p-8 w-full max-w-xl space-y-5">
            {/* Name and Email in same row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-900 dark:text-white mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-900 dark:text-white mb-1">Email ID*</label>
                <input
                  type="email"
                  className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Contact and Service in same row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-900 dark:text-white mb-1">Contact Number*</label>
                <input
                  type="tel"
                  className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                  placeholder="Enter your contact"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-900 dark:text-white mb-1">Select Service</label>
                <select className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none">
                  <option value="">Select</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI & ML Solutions</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="consulting">IT Consultancy</option>
                </select>
              </div>
            </div>

            {/* Project description */}
            <div>
              <label className="block text-gray-900 dark:text-white mb-1">
                Describe Your Project/Idea In Brief*
              </label>
              <textarea
                className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                rows={3}
                placeholder="This helps us come back better prepared"
                required
              />
            </div>

            {/* CAPTCHA verification */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-900 dark:text-white">5 + 7 =</span>
              <input
                type="text"
                className="w-16 rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-2 py-1 outline-none"
                placeholder="?"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}