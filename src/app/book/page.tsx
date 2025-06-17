"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, CheckCircle, User, Mail, Phone, Building, ExternalLink, Sparkles, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import { createCalendarEvent, createGoogleCalendarLink, sendBookingConfirmation, type BookingData } from "@/lib/calendar";

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [calendarLink] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const services = [
    {
      id: "audit",
      title: "Free Marketing Audit",
      duration: "45 minutes",
      description: "Comprehensive review of your current marketing strategy with actionable insights",
      price: "Free",
      badge: "Most Popular",
      badgeColor: "bg-green-600",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      features: ["Website Analysis", "SEO Review", "Social Media Audit", "Competitor Analysis"]
    },
    {
      id: "consultation",
      title: "Strategy Consultation",
      duration: "60 minutes",
      description: "Deep-dive consultation to develop a custom marketing strategy for your business",
      price: "$150",
      badge: "Best Value",
      badgeColor: "bg-orange-600",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-500",
      features: ["Business Analysis", "Custom Strategy", "Action Plan", "Q&A Session"]
    },
    {
      id: "discovery",
      title: "Discovery Call",
      duration: "30 minutes",
      description: "Initial conversation to understand your needs and explore how we can help",
      price: "Free",
      badge: "",
      badgeColor: "",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      features: ["Needs Assessment", "Service Overview", "Pricing Discussion", "Next Steps"]
    }
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    // Don&apos;t auto-advance to next step - user will click Continue button
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate booking process
      console.log("Processing booking...", {
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        ...formData
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Move to confirmation step
      setStep(4);
    } catch (error) {
      console.error("Error processing booking:", error);
      // Handle error (you might want to show an error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  // const generateCalendarDates = () => {
  //   const dates = [];
  //   const today = new Date();
  //   for (let i = 1; i <= 14; i++) {
  //     const date = new Date(today);
  //     date.setDate(today.getDate() + i);
  //     dates.push(date);
  //   }
  //   return dates;
  // };

  const generateCalendarGrid = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Get first day of current month and next month
    const firstDayCurrentMonth = new Date(currentYear, currentMonth, 1);
    const firstDayNextMonth = new Date(currentYear, currentMonth + 1, 1);

    // Get the day of week for first day (0 = Sunday, 1 = Monday, etc.)
    const startDayCurrentMonth = firstDayCurrentMonth.getDay();
    const startDayNextMonth = firstDayNextMonth.getDay();

    // Get number of days in each month
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInNextMonth = new Date(currentYear, currentMonth + 2, 0).getDate();

    const currentMonthGrid = [];
    const nextMonthGrid = [];

    // Generate current month grid
    for (let i = 0; i < startDayCurrentMonth; i++) {
      currentMonthGrid.push(null); // Empty cells for days before month starts
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isAvailable = date > today; // Only future dates are available
      currentMonthGrid.push({ date, isAvailable });
    }

    // Generate next month grid
    for (let i = 0; i < startDayNextMonth; i++) {
      nextMonthGrid.push(null);
    }

    for (let day = 1; day <= daysInNextMonth; day++) {
      const date = new Date(currentYear, currentMonth + 1, day);
      nextMonthGrid.push({ date, isAvailable: true });
    }

    return { currentMonthGrid, nextMonthGrid, currentMonth, currentYear };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-all duration-200">
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:text-orange-600" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-500">Step {step} of 4</div>
              <div className="hidden sm:flex items-center space-x-1">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      step >= stepNumber ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Modern Progress Bar */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              {[
                { number: 1, title: "Service", icon: <Sparkles className="w-4 h-4" /> },
                { number: 2, title: "Schedule", icon: <Calendar className="w-4 h-4" /> },
                { number: 3, title: "Details", icon: <User className="w-4 h-4" /> },
                { number: 4, title: "Confirm", icon: <CheckCircle className="w-4 h-4" /> }
              ].map((stepItem, index) => (
                <div key={stepItem.number} className="flex flex-col items-center relative">
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="absolute top-6 left-full w-full h-0.5 bg-gray-200 hidden md:block">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
                        style={{ width: step > stepItem.number ? '100%' : '0%' }}
                      />
                    </div>
                  )}

                  {/* Step Circle */}
                  <div
                    className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      step >= stepItem.number
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 border-orange-500 text-white shadow-lg shadow-orange-500/25"
                        : step === stepItem.number
                        ? "border-orange-500 text-orange-600 bg-orange-50"
                        : "border-gray-300 text-gray-400 bg-white"
                    }`}
                  >
                    {step > stepItem.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      stepItem.icon
                    )}

                    {/* Pulse animation for current step */}
                    {step === stepItem.number && (
                      <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Step Label */}
                  <div className="mt-3 text-center">
                    <div className={`text-sm font-medium ${
                      step >= stepItem.number ? "text-orange-600" : "text-gray-500"
                    }`}>
                      {stepItem.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Service Selection */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                      Choose Your Service
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Select the service that best fits your needs. All consultations include actionable insights you can implement immediately.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <Card
                        className="relative h-full cursor-pointer border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                        {/* Badge */}
                        {service.badge && (
                          <div className={`absolute top-6 right-6 ${service.badgeColor} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg`}>
                            {service.badge}
                          </div>
                        )}

                        <div className="relative p-8">
                          {/* Icon */}
                          <div className="text-center mb-8">
                            <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                              <div className="text-white">
                                {service.icon}
                              </div>
                              {/* Glow effect */}
                              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                              {service.title}
                            </h3>

                            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-4">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">{service.duration}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 mb-8 leading-relaxed text-center">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div className="mb-8">
                            <div className="grid grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Price and CTA */}
                          <div className="text-center">
                            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
                              {service.price}
                            </div>
                            <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                              Select This Service
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                    Select Date & Time
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Choose your preferred date and time slot. All times are in your local timezone.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {/* Date Selection */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <Calendar className="w-6 h-6 mr-3 text-orange-600" />
                      Select Date
                    </h3>

                    {(() => {
                      const { currentMonthGrid, nextMonthGrid, currentMonth, currentYear } = generateCalendarGrid();
                      const monthNames = [
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                      ];
                      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

                      return (
                        <div className="space-y-8">
                          {/* Current Month */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">
                              {monthNames[currentMonth]} {currentYear}
                            </h4>

                            {/* Day headers */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {dayNames.map(day => (
                                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                                  {day}
                                </div>
                              ))}
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-1">
                              {currentMonthGrid.map((dayData, index) => {
                                if (!dayData) {
                                  return <div key={index} className="h-10" />;
                                }

                                const { date, isAvailable } = dayData;
                                const dateStr = date.toISOString().split('T')[0];
                                const isSelected = selectedDate === dateStr;
                                const isToday = date.toDateString() === new Date().toDateString();

                                return (
                                  <motion.button
                                    key={dateStr}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.02 }}
                                    whileHover={isAvailable ? { scale: 1.1 } : {}}
                                    whileTap={isAvailable ? { scale: 0.95 } : {}}
                                    onClick={() => isAvailable && handleDateSelect(dateStr)}
                                    disabled={!isAvailable}
                                    className={`relative h-10 w-full rounded-lg text-sm font-medium transition-all duration-200 ${
                                      isSelected
                                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                                        : isAvailable
                                        ? "hover:bg-orange-50 hover:text-orange-600 text-gray-700 border border-gray-200"
                                        : "text-gray-300 cursor-not-allowed"
                                    } ${isToday && !isSelected ? "ring-2 ring-orange-200" : ""}`}
                                  >
                                    {date.getDate()}
                                    {isToday && (
                                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
                                    )}
                                  </motion.button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Next Month */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">
                              {monthNames[(currentMonth + 1) % 12]} {currentMonth === 11 ? currentYear + 1 : currentYear}
                            </h4>

                            {/* Day headers */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {dayNames.map(day => (
                                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                                  {day}
                                </div>
                              ))}
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-1">
                              {nextMonthGrid.slice(0, 21).map((dayData, index) => { // Show only first 3 weeks
                                if (!dayData) {
                                  return <div key={index} className="h-10" />;
                                }

                                const { date, isAvailable } = dayData;
                                const dateStr = date.toISOString().split('T')[0];
                                const isSelected = selectedDate === dateStr;

                                return (
                                  <motion.button
                                    key={dateStr}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.02 }}
                                    whileHover={isAvailable ? { scale: 1.1 } : {}}
                                    whileTap={isAvailable ? { scale: 0.95 } : {}}
                                    onClick={() => isAvailable && handleDateSelect(dateStr)}
                                    disabled={!isAvailable}
                                    className={`relative h-10 w-full rounded-lg text-sm font-medium transition-all duration-200 ${
                                      isSelected
                                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                                        : isAvailable
                                        ? "hover:bg-orange-50 hover:text-orange-600 text-gray-700 border border-gray-200"
                                        : "text-gray-300 cursor-not-allowed"
                                    }`}
                                  >
                                    {date.getDate()}
                                  </motion.button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </Card>
                </motion.div>

                {/* Time Selection */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <Clock className="w-6 h-6 mr-3 text-orange-600" />
                      Select Time
                    </h3>
                    {selectedDate ? (
                      <div className="space-y-6">
                        {/* Selected Date Display */}
                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                          <div className="text-center">
                            <p className="text-sm font-medium text-orange-600 mb-1">Selected Date</p>
                            <p className="text-lg font-bold text-orange-700">
                              {new Date(selectedDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>

                        {/* Morning Times */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            Morning (9:00 AM - 12:00 PM)
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            {timeSlots.filter(time => {
                              const hour = parseInt(time.split(':')[0]);
                              return hour >= 9 && hour < 12;
                            }).map((time, index) => {
                              const isSelected = selectedTime === time;
                              return (
                                <motion.button
                                  key={time}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleTimeSelect(time)}
                                  className={`relative p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isSelected
                                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                                      : "border border-gray-200 hover:border-orange-300 hover:bg-orange-50 bg-white text-gray-700"
                                  }`}
                                >
                                  {time}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Afternoon Times */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                            Afternoon (2:00 PM - 5:00 PM)
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            {timeSlots.filter(time => {
                              const hour = parseInt(time.split(':')[0]);
                              return hour >= 14;
                            }).map((time, index) => {
                              const isSelected = selectedTime === time;
                              const displayTime = time.replace(/^(\d{1,2}):(\d{2})$/, (match, h, m) => {
                                const hour = parseInt(h);
                                const period = hour >= 12 ? 'PM' : 'AM';
                                const displayHour = hour > 12 ? hour - 12 : hour;
                                return `${displayHour}:${m} ${period}`;
                              });

                              return (
                                <motion.button
                                  key={time}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleTimeSelect(time)}
                                  className={`relative p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isSelected
                                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                                      : "border border-gray-200 hover:border-orange-300 hover:bg-orange-50 bg-white text-gray-700"
                                  }`}
                                >
                                  {displayTime}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Continue Button */}
                        {selectedTime && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="pt-4"
                          >
                            <button
                              onClick={() => setStep(3)}
                              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                              Continue to Contact Information
                            </button>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-16 text-gray-500">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-10 h-10 text-gray-400" />
                          </div>
                          <p className="text-lg font-medium">Please select a date first</p>
                          <p className="text-sm text-gray-400 mt-2">Choose from the available dates on the left</p>
                        </motion.div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                    Your Information
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Please provide your contact details so we can prepare for your consultation.
                  </p>
                </motion.div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Form */}
                  <div className="lg:col-span-2">
                    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <form onSubmit={handleFormSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              <User className="w-4 h-4 inline mr-2 text-orange-600" />
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="John Doe"
                              className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              <Mail className="w-4 h-4 inline mr-2 text-orange-600" />
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              placeholder="john@company.com"
                              className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                            />
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              <Phone className="w-4 h-4 inline mr-2 text-orange-600" />
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="+1 (555) 123-4567"
                              className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              <Building className="w-4 h-4 inline mr-2 text-orange-600" />
                              Company Name
                            </label>
                            <Input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              placeholder="Your Company"
                              className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Tell us about your marketing challenges
                          </label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Describe your current marketing situation, goals, and any specific challenges you're facing..."
                            rows={5}
                            className="w-full border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200 resize-none"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="flex space-x-4 pt-4"
                        >
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="flex-1 h-12 border-2 border-gray-300 hover:border-gray-400 rounded-xl font-semibold transition-all duration-200"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 h-12 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Processing...</span>
                              </div>
                            ) : (
                              "Confirm Booking"
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </Card>
                  </div>

                  {/* Booking Summary Sidebar */}
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 border-0 shadow-lg sticky top-8">
                        <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
                          Booking Summary
                        </h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600 font-medium">Service:</span>
                            <span className="font-semibold text-gray-900 text-right">
                              {services.find(s => s.id === selectedService)?.title}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600 font-medium">Date:</span>
                            <span className="font-semibold text-gray-900 text-right">
                              {new Date(selectedDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600 font-medium">Time:</span>
                            <span className="font-semibold text-gray-900">{selectedTime}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-gray-600 font-medium">Duration:</span>
                            <span className="font-semibold text-gray-900">
                              {services.find(s => s.id === selectedService)?.duration}
                            </span>
                          </div>
                          <div className="border-t border-orange-200 pt-4 mt-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 font-semibold">Total:</span>
                              <span className="text-2xl font-bold text-orange-600">
                                {services.find(s => s.id === selectedService)?.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                {/* Success Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                  className="relative mb-12"
                >
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 animate-pulse" />
                    {/* Inner circle */}
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                      <CheckCircle className="w-16 h-16 text-green-600" />
                    </div>
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent mb-6">
                    Booking Confirmed!
                  </h1>

                  <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    🎉 Thank you for booking with Perana Viosa! We&apos;ve sent a confirmation email with all the details and a calendar invite. Get ready for an amazing consultation!
                  </p>
                </motion.div>

                {/* Add to Calendar CTA */}
                {calendarLink && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-12"
                  >
                    <Card className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 border-0 shadow-xl">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <h4 className="font-bold text-lg mb-2">Add to Google Calendar</h4>
                          <p className="text-orange-100">Don&apos;t forget your appointment! Add it to your calendar now.</p>
                        </div>
                        <a
                          href={calendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Add to Calendar
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                )}

                {/* What's Next Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-12"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What&apos;s Next?</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: <Mail className="w-6 h-6" />,
                        title: "Check Your Email",
                        description: "You'll receive a confirmation email with the meeting link and preparation materials.",
                        gradient: "from-blue-500 to-blue-600"
                      },
                      {
                        icon: <Calendar className="w-6 h-6" />,
                        title: "Add to Calendar",
                        description: "The calendar invite has been sent to help you remember the appointment.",
                        gradient: "from-green-500 to-green-600"
                      },
                      {
                        icon: <CheckCircle className="w-6 h-6" />,
                        title: "Prepare for Success",
                        description: "Review the preparation guide we've sent to make the most of your consultation.",
                        gradient: "from-purple-500 to-purple-600"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      >
                        <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    onClick={() => {
                      setStep(1);
                      setSelectedService("");
                      setSelectedDate("");
                      setSelectedTime("");
                      setFormData({name: "", email: "", phone: "", company: "", message: ""});
                    }}
                    variant="outline"
                    className="px-8 py-3 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 rounded-xl font-semibold transition-all duration-300"
                  >
                    Book Another Appointment
                  </Button>
                  <Link href="/">
                    <Button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Return to Home
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
