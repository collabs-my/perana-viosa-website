"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "How is this different from hiring a traditional marketing agency?",
      answer: "Traditional agencies often use junior staff and cookie-cutter approaches. We provide senior-level strategic leadership with a fractional CMO model, meaning you get C-level expertise at a fraction of the cost. Plus, our 90-day guarantee ensures you see results or we work for free."
    },
    {
      question: "What if I&apos;m not ready for a full marketing overhaul?",
      answer: "That's perfectly fine! We offer three service levels to meet you where you are. Start with our Marketing Education & Training, move to Managed Marketing Services, or jump straight to Fractional CMO services. Every engagement begins with a free consultation to determine the best fit."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "Most clients see initial improvements within 30 days and significant results within 90 days. Our guarantee ensures that if you don't see measurable improvement in 90 days, we'll continue working at no cost until you do. The timeline depends on your current situation and chosen service level."
    },
    {
      question: "Do you work with businesses outside of the US?",
      answer: "Absolutely! We've successfully worked with businesses across 4 continents. Our services are designed for English-speaking markets including the US, UK, Australia, Canada, and South Africa. All our sessions are conducted virtually, making geography irrelevant."
    },
    {
      question: "What's included in the free consultation?",
      answer: "Your free consultation includes a comprehensive marketing audit (normally a $500 value), strategic recommendations tailored to your business, and a clear roadmap for improvement. There's no sales pressure—just valuable insights you can implement immediately."
    },
    {
      question: "How do you ensure the quality of your contractors?",
      answer: "All our contractors are experienced professionals who don't need training or management. They're vetted through our rigorous selection process and have proven track records. Plus, every project is overseen by our fractional CMO to ensure quality and strategic alignment."
    },
    {
      question: "What if I already have an internal marketing team?",
      answer: "Perfect! We often work alongside existing teams to provide strategic leadership and fill skill gaps. Our fractional CMO can mentor your team, optimize your processes, and ensure everyone is working toward the same strategic goals. We complement rather than replace your existing resources."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "We believe in earning your business every month. While we recommend at least 90 days to see meaningful results (which is why we guarantee it), there are no long-term contracts. You can adjust or pause services as your business needs change."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Got questions? We&apos;ve got answers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the most common questions we get from business owners considering our services.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Additional help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help! Book a free consultation and get all your questions answered by our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:admin@peranaviosa.co.za"
                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                admin@peranaviosa.co.za
              </a>
              <span className="hidden sm:block text-gray-400">•</span>
              <a
                href="tel:+27123456789"
                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                Schedule a call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
