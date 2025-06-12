import React from "react";

export default function ConsultationSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[70vh] w-full bg-gradient-to-r from-[#4c1d95] via-[#120624] to-[#0891b2] dark:from-[#4c1d95] dark:via-[#120624] dark:to-[#0891b2] bg-[#f1f5f9]">
      {/* Left Side: Text */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12 text-white dark:text-white text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Technology Experts Are<br />Change Catalysts
        </h2>
        <p className="text-lg md:text-xl">
          Book A Free Consultation Call With Our Experts Today
        </p>
      </div>
      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <form className="bg-white dark:bg-[#181828] rounded-xl shadow-lg p-8 w-full max-w-md space-y-5">
          <div>
            <label className="block text-gray-900 dark:text-white mb-1">Full Name</label>
            <input
              type="text"
              className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-900 dark:text-white mb-1">E-mail ID*</label>
            <input
              type="email"
              className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 dark:text-white mb-1">Contact Number*</label>
            <input
              type="tel"
              className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 dark:text-white mb-1">Select a Budget Range</label>
            <select className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none">
              <option value="">Select</option>
              <option value="1">Less than $5,000</option>
              <option value="2">$5,000 - $20,000</option>
              <option value="3">$20,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-900 dark:text-white mb-1">
              Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*
            </label>
            <textarea
              className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
              rows={3}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="nda" className="accent-blue-500" />
            <label htmlFor="nda" className="text-gray-900 dark:text-white text-sm">
              Include Copy of a Non-Disclosure Agreement
            </label>
          </div>
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
            Request Proposal
          </button>
        </form>
      </div>
    </section>
  );
}