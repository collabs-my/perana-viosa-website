"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, DollarSign } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";

// Styled testimonial card component
const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <StyledWrapper>
        <div className="card">
          <div className="header">
            <div className="image">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="name">{testimonial.name}</p>
              <p className="role">{testimonial.role}</p>
            </div>
          </div>
          <p className="message">
            {testimonial.content}
          </p>
        </div>
      </StyledWrapper>
    </motion.div>
  );
};

const StyledWrapper = styled.div`
  .card {
    background-color: rgba(243, 244, 246, 1);
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 40px -20px rgba(5, 5, 5, 0.3);
  }

  .header {
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .header .image {
    height: 4rem;
    width: 4rem;
    border-radius: 9999px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .stars {
    display: flex;
    justify-content: flex-start;
    grid-gap: 0.125rem;
    gap: 0.125rem;
    color: #fe6601;
    margin-bottom: 0.5rem;
  }

  .stars svg {
    height: 1rem;
    width: 1rem;
  }

  .name {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: rgba(55, 65, 81, 1);
  }

  .role {
    margin: 0;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #fe6601;
    font-weight: 500;
  }

  .message {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin: 0;
    color: rgba(107, 114, 128, 1);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
      padding: 1.5rem;
    }

    .header {
      gap: 0.75rem;
    }

    .header .image {
      height: 3rem;
      width: 3rem;
    }
  }
`;

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
      content: "Prenessa introduced me to new PR and Marketing elements, explaining each detail and how to apply it. Your ability to nurture and teach others conveys great leadership skills. You're a connection cultivator, together with your network.",
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
      industry: "Technology",
      video: "/SaaS%20Startup.mp4"
    },
    {
      icon: DollarSign,
      title: "E-commerce Brand",
      metric: "45% Cost Reduction",
      description: "Optimized their ad spend while maintaining the same conversion volume",
      industry: "Retail",
      video: "/E-commerce%20Brand.mp4"
    },
    {
      icon: Users,
      title: "Professional Services",
      metric: "250% Revenue Growth",
      description: "Built a complete marketing funnel that tripled their monthly recurring revenue",
      industry: "Consulting",
      video: "/Professional%20Services.mp4"
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
              Don't just take our word for it
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable growth and marketing success.
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
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 relative overflow-hidden">
                    {/* Background Video */}
                    <div className="absolute inset-0 z-0">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={study.video} type="video/mp4" />
                      </video>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                    </div>

                    <CardContent className="p-6 relative z-10">
                      <div className="bg-orange-500 bg-opacity-90 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-orange-300 font-medium mb-2">{study.industry}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{study.title}</h4>
                      <div className="text-2xl font-bold text-green-400 mb-3">{study.metric}</div>
                      <p className="text-gray-200">{study.description}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
