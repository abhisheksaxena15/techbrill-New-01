import React from "react";
import Image from "next/image";

const steps = [
  {
    img: "/images/process-1.jpg",
    step: "01",
    title: "Choose a Service",
    desc: "Choose the service you need to get started and kick off your project with us.",
  },
  {
    img: "/images/process-2.jpg",
    step: "02",
    title: "Schedule a Meeting",
    desc: "Schedule a meeting to discuss your requirements and align on the best approach forward.",
  },
  {
    img: "/images/process-3.jpg",
    step: "03",
    title: "Receive Custom Plan",
    desc: "Receive a custom plan tailored to your business needs, goals, and project requirements.",
  },
  {
    img: "/images/process-4.jpg",
    step: "04",
    title: "Let's Make it Happen",
    desc: "We're ready—let's build, launch, and grow your business together.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-medium uppercase tracking-wide text-sm">
            How It Work
          </span>
          <h2 className="tmt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
            Check Out Our Work <span className="italic text-blue-700">Process</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 text-base">
          </p>
          <div className="mx-auto w-16 h-1 bg-blue-700 rounded mt-6"></div>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-700">
            Explore our result-driven digital marketing services designed to boost brand visibility, attract customers, and accelerate business growth in today’s fast-paced digital world.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, idx) => (
            <div key={step.step} className="flex flex-col items-center text-center flex-1 relative">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow">
                  {step.step}
                </span>
              </div>
              <h3 className="text-neutral-800 text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="h-14 text-gray-600 text-sm">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2">
                  <svg width="60" height="24" fill="none" viewBox="0 0 60 24">
                    <path d="M0 12h56m0 0l-6-6m6 6l-6 6" stroke="#b0b7c3" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}