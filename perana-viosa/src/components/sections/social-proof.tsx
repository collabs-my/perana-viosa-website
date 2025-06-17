"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, DollarSign } from "lucide-react";
import Image from "next/image";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Stephanie Wium",
      role: "Expert Canva Coach",
      content: "Prenessa has been rock-solid behind me with marketing advice and direction. Receiving a strategy document helped me and I loved that her ideas balanced my own levels of comfort with a definite push outside of that.",
      rating: 5,
      image: "/Stephanie Wium.jpg"
    },
    {
      name: "Mosima Phale",
      role: "Sima Speaks",
      content: "Prenessa introduced me to new PR and Marketing elements, explaining each detail and how to apply it. Your ability to nurture and teach others conveys great leadership skills. You&apos;re a connection cultivator, together with your network.",
      rating: 5,
      image: "/Mosima Phale.jpg"
    },
    {
      name: "Tshepiso Sibisi",
      role: "Mwari Pizza House",
      content: "I met Prenessa over LinkedIn. In a period of 6 months she has left an incredible impact in my life and business. Words cannot describe my gratitude. Through her mentorship, I had a highly experienced sounding board for any plans or ideas I had.",
      rating: 5,
      image: "/Tshepiso Sibisi.webp"
    }
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "SaaS Startup",
      metric: "300% Lead Increase",
      description: "Transformed their lead generation from 50 to 200 qualified leads per month in 90 days",
      industry: "Technology"
    },
    {
      icon: DollarSign,
      title: "E-commerce Brand",
      metric: "45% Cost Reduction",
      description: "Optimized their ad spend while maintaining the same conversion volume",
      industry: "Retail"
    },
    {
      icon: Users,
      title: "Professional Services",
      metric: "250% Revenue Growth",
      description: "Built a complete marketing funnel that tripled their monthly recurring revenue",
      industry: "Consulting"
    }
  ];

  const stats = [
    { number: "50+", label: "Businesses Transformed" },
    { number: "35%", label: "Average Cost Reduction" },
    { number: "90", label: "Days to Results" },
    { number: "4", label: "Continents Served" }
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
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Proven Results & Happy Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Don&apos;t just take our word for it
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve helped businesses like yours achieve remarkable growth and marketing success.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#EE3331' }}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Case studies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Case Study Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <CardContent className="p-6">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <study.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="text-sm text-red-600 font-medium mb-2">{study.industry}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h4>
                      <div className="text-2xl font-bold text-green-600 mb-3">{study.metric}</div>
                      <p className="text-gray-600">{study.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-gray-300 mb-4" />
                      <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
