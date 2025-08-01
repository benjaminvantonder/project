import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Event Coordinator, CERT",
      content:
        "Steller Industries transformed our annual conference with their professional audio-visual setup. The team's attention to detail and technical expertise made our event seamless and memorable.",
      rating: 5,
      company: "CERT",
    },
    {
      name: "Dr. Michael Roberts",
      role: "Director, Veritas Academics",
      content:
        "We've been working with Steller Industries for three years now. Their permanent installation in our auditorium has been flawless, and their ongoing support is exceptional.",
      rating: 5,
      company: "Veritas Academics",
    },
    {
      name: "Amanda Thompson",
      role: "Wedding Planner",
      content:
        "As a wedding planner, I need vendors I can trust completely. Steller Industries delivers every time - professional service, stunning results, and stress-free execution.",
      rating: 5,
      company: "Elite Weddings",
    },
    {
      name: "Marcus Johnson",
      role: "MTSA Event Manager",
      content:
        "The modeling competition wouldn't have been the same without Steller's lighting design and photography services. They captured every moment perfectly and created an amazing atmosphere.",
      rating: 5,
      company: "MTSA",
    },
    {
      name: "Jennifer Lee",
      role: "Corporate Events Manager",
      content:
        "Professional, reliable, and creative - exactly what we need for our high-profile corporate events. Steller Industries consistently exceeds our expectations.",
      rating: 5,
      company: "TechCorp Solutions",
    },
    {
      name: "David Parker",
      role: "Venue Manager",
      content:
        "The permanent sound system installation has revolutionized our venue. Customers constantly compliment the audio quality, and maintenance has been virtually non-existent.",
      rating: 5,
      company: "Grand Events Hall",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-br from-gray-800/60 to-gray-700/40"
        style={{ backgroundColor: "#1a1f24" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experiences with Steller
            Industries
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20" style={{ backgroundColor: "#242b32" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative border border-gray-600/30 rounded-lg p-8 md:p-12"
            style={{ backgroundColor: "#1a1f24" }}
          >
            <Quote className="h-12 w-12 text-blue-400 mb-6" />

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <div className="text-white">
                <p className="font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-blue-400 font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-blue-400" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-blue-400"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20" style={{ backgroundColor: "#1a1f24" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
                style={{ backgroundColor: "#242b32" }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="text-white">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20" style={{ backgroundColor: "#242b32" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">
            Trusted by Industry Leaders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/RVC.png"
                alt="RVC Music Studios"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/VA.png"
                alt="Veritas Academics"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/Younique MA.png"
                alt="Younique Model Academy"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/Allstar Modles SA.png"
                alt="All-Star Models SA"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/Ashton John's.png"
                alt="Ashton John's Private School"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/National Beauty Pagents SA.png"
                alt="National Beauty Pageants South Africa"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/Pagent Festival.png"
                alt="Pageant Festival South Africa"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/Little-Leaders.png"
                alt="Little Leaders Exclusive Private Pre-school"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/Cert SA.png"
                alt="CERT - Community Emergency Response Team"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center h-40 hover:bg-white/15 transition-colors">
              <img
                src="/MTSA.png"
                alt="MTSA"
                className="max-h-28 max-w-full object-contain"
              />
            </div>
          </div>

          <p className="text-gray-400 mt-8">
            Join these organizations and many more who trust Steller Industries
            for their audio-visual needs
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(to right, #0077b3, #004466)" }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Experience the excellence that has earned us these testimonials
          </p>
          <a
            href="./contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
