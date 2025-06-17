"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Lottie from "lottie-react";

// Import animation JSON files
import burningCashAnimation from "../../../public/Burning Cash on Failed Campaigns.json";
import chaoticMarketingAnimation from "../../../public/Marketing Feels Chaotic & Reactive.json";
import cantScaleAnimation from "../../../public/Can't Scale Past Current Revenue.json";

export function ProblemSection() {
  const problems = [
    {
      animation: burningCashAnimation,
      title: "Burning Cash on Failed Campaigns",
      description: "You're spending $2K-10K monthly on marketing with poor ROI. Every failed campaign feels like money down the drain.",
      stat: "$50K+",
      statLabel: "Average wasted annually"
    },
    {
      animation: chaoticMarketingAnimation,
      title: "Marketing Feels Chaotic & Reactive",
      description: "Despite having budget, your marketing lacks strategy. You're constantly putting out fires instead of building systems.",
      stat: "73%",
      statLabel: "Of startups lack marketing strategy"
    },
    {
      animation: cantScaleAnimation,
      title: "Can't Scale Past Current Revenue",
      description: "You've hit a plateau. Traditional agencies promise the world but deliver mediocre results that don't move the needle.",
      stat: "6 months",
      statLabel: "Average time stuck at plateau"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              The Hidden Cost of Marketing Chaos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your marketing is costing you more than you think
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day without a strategic marketing operation is a day your competitors gain ground. 
              Here&apos;s what&apos;s really happening to your business:
            </p>
          </motion.div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                  <Lottie
                    animationData={problem.animation}
                    loop={true}
                    autoplay={true}
                    style={{ width: 80, height: 80 }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-3xl font-bold text-red-600 mb-1">{problem.stat}</div>
                  <div className="text-sm text-gray-500">{problem.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cost calculation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-red-100"
          >
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Real Cost of Inaction
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$150K+</div>
                  <div className="text-gray-600">Full-time CMO salary</div>
                  <div className="text-sm text-gray-500 mt-1">Plus benefits & equity</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">6-12 months</div>
                  <div className="text-gray-600">Time to find & onboard</div>
                  <div className="text-sm text-gray-500 mt-1">If you find the right person</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$500K+</div>
                  <div className="text-gray-600">Lost opportunity cost</div>
                  <div className="text-sm text-gray-500 mt-1">While competitors gain market share</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                <strong>Bottom line:</strong> The longer you wait to fix your marketing, the more expensive it becomes. 
                Your competitors aren't waiting—and neither should you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
