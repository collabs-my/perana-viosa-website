"use client";

import { Button } from "@/components/ui/button";
import BookFreeCallButton from "@/components/ui/book-free-call-button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    // Check if video file is accessible
    fetch('/PerVer.mp4', { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          console.log('Video file is accessible');
        } else {
          console.error('Video file not found or not accessible');
        }
      })
      .catch(error => {
        console.error('Error checking video file:', error);
      });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"

        onError={(e) => {
          console.error('Video error:', e);
          // Hide video on error and show fallback background
          (e.target as HTMLVideoElement).style.display = 'none';
        }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onLoadedData={() => console.log('Video loaded')}
        onPlay={() => console.log('Video started playing')}
      >
        <source src="/PerVer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">


          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white bg-opacity-20 text-white border-white border-opacity-30">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 50+ businesses across 4 continents
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Get a complete{" "}
            <span className="gradient-text">C-level marketing team</span>{" "}
            for less than one hire
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Guaranteed results in 90 days or we work for free until you get them.
            <span className="font-semibold text-white"> 35% average cost-per-lead reduction</span> across 50+ businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <BookFreeCallButton />
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white border-opacity-50 text-orange-600 hover:border-orange-600 hover:text-orange-600 hover:bg-white transition-all duration-300"
            >
              Download Free Guide
            </Button>
          </motion.div>

          {/* Value propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-white">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold">35% Cost Reduction</div>
                <div className="text-sm text-white text-opacity-80">Average across clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold">50+ Businesses</div>
                <div className="text-sm text-white text-opacity-80">Successfully scaled</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Star className="w-6 h-6 text-orange-400 fill-current" />
              </div>
              <div className="text-left">
                <div className="font-semibold">90-Day Guarantee</div>
                <div className="text-sm text-white text-opacity-80">Results or free service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white border-opacity-60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
