import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Clock, Shield, Users } from "lucide-react";

const OurAssurance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate percent: section top in view
        let percent =
          ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100;
        percent = Math.max(0, Math.min(100, percent));
        setScrollPercent(percent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      icon: <Eye className="w-8 h-8 text-blue-800" />,
      bg: "bg-blue-100",
      title: "100% Transparency",
      desc: "Complete visibility into project progress, timelines, and deliverables. No hidden costs or surprise changes.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      bg: "bg-green-100",
      title: "95% On Time Delivery",
      desc: "Proven track record of meeting deadlines with quality deliverables. We value your time and business commitments.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Free 30 Days Support",
      desc: "Complimentary post-launch support to ensure smooth operation and address any issues that may arise.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      bg: "bg-orange-100",
      title: "Flexible Engagement",
      desc: "Adaptable working models to suit your project needs, timeline, and budget requirements.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-16 bg-white"
    >
      <div className="container mx-auto text-center max-w-6xl">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
          ASSURANCE TO YOU
        </h3>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Our Commitment and Guarantee
        </h2>
        <p className="text-base text-gray-600 max-w-xl mx-auto mt-1 leading-relaxed">
          We promise quality, transparency, and reliability from consultation to post-launch support and ensure your website meets expectations, delivers results, and drives success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center text-center p-6 rounded-lg bg-slate-100 shadow-sm overflow-hidden transition-transform duration-200 group"
              whileHover={{
                y: -6,
                boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {/* Scroll gradient line */}
              <div className="absolute top-0 left-0 h-1 rounded-t-lg bg-red-600"
                   style={{ width: `${scrollPercent}%` }}></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAssurance;
