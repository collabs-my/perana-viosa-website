"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Gift, Shield, Users } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/20 to-orange-800/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
              <Clock className="w-4 h-4 mr-2" />
              Limited Availability: Only 12 new clients per quarter
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to transform your marketing?
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed"
          >
            Join the 50+ businesses that have already transformed their marketing with Perana Viosa. 
            Your competitors aren&apos;t waiting—and neither should you.
          </motion.p>

          {/* Value props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Gift className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">FREE $500 Audit</div>
                <div className="text-sm opacity-80">Comprehensive marketing review</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">90-Day Guarantee</div>
                <div className="text-sm opacity-80">Results or free service</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Expert Team</div>
                <div className="text-sm opacity-80">C-level marketing leadership</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="bg-white text-[#1d5191] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-modern"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1d5191] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Download Free Marketing Guide
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm opacity-80 mb-4">
              ✓ No long-term contracts  ✓ Cancel anytime  ✓ Results guaranteed
            </p>
            <p className="text-xs opacity-60">
              Trusted by startups and small businesses across 4 continents
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
