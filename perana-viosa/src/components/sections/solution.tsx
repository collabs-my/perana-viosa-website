"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, BookOpen, ArrowRight, Shield } from "lucide-react";

export function SolutionSection() {
  const services = [
    {
      icon: Users,
      title: "Fractional CMO Services",
      description: "Get a seasoned marketing executive at a fraction of the cost. Perfect for funded startups with $75K-250K revenue.",
      features: [
        "Strategic marketing leadership",
        "Monthly strategy sessions",
        "Performance tracking & optimization",
        "Team training & development"
      ],
      badge: "Most Popular",
      badgeColor: "bg-orange-600"
    },
    {
      icon: Target,
      title: "Managed Marketing Services",
      description: "Complete marketing execution by experienced contractors who don&apos;t need training or management.",
      features: [
        "Campaign creation & management",
        "Content production",
        "Lead generation systems",
        "Marketing automation setup"
      ],
      badge: "Best Value",
      badgeColor: "bg-green-600"
    },
    {
      icon: BookOpen,
      title: "Marketing Education & Training",
      description: "Cutting-edge training that evolves with the marketing landscape. Unlike any course you&apos;ve taken before.",
      features: [
        "Live interactive workshops",
        "Constantly updated curriculum",
        "Real-world case studies",
        "Ongoing support community"
      ],
      badge: "New",
      badgeColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              The Perana Viosa Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Three ways we transform your marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service you need most, or combine them for maximum impact. 
              Every client gets a complimentary consultation to find the perfect fit.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 relative overflow-hidden">
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {service.badge}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Guarantee section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12 border border-orange-200 text-center"
          >
            <div className="btn-red w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              90-Day Results Guarantee
            </h3>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              We&apos;re so confident in our approach that we guarantee results in 90 days.
              If you don&apos;t see measurable improvement, we&apos;ll continue working for free until you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="btn-red text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-gray-500">
                No commitment required • Free $500 marketing audit included
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
