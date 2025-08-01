import React from 'react';
import { Mic, Camera, Settings, Users, Zap, Volume2, Lightbulb, Film } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800/60 to-gray-700/40" style={{ backgroundColor: '#1a1f24' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive audio-visual solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Sound & Lighting */}
      <section id="sound-lighting" className="py-20" style={{ backgroundColor: '#242b32' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">Sound & Lighting</h2>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Professional-grade audio and lighting equipment with expert setup and management for any venue or event size.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Volume2 className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Audio Systems</h3>
                    <p className="text-gray-300">High-quality sound reinforcement, wireless microphones, mixing consoles, and monitoring systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Lighting Design</h3>
                    <p className="text-gray-300">LED stage lighting, architectural lighting, mood lighting, and intelligent lighting systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Settings className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
                    <p className="text-gray-300">On-site technicians, equipment setup, sound checking, and live event management</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/Steller Party.jpg"
                alt="Professional lighting setup at event"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography & Videography */}
      <section id="photography" className="py-20" style={{ backgroundColor: '#1a1f24' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/Photo and Video.webp"
                alt="Professional video camera equipment"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-lg"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">Photography & Videography</h2>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Professional event coverage, promotional content creation, and post-production services to capture and preserve your most important moments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Camera className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Event Photography</h3>
                    <p className="text-gray-300">High-resolution event coverage, portraits, group photos, and candid moments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Film className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Video Production</h3>
                    <p className="text-gray-300">Multi-camera setups, live streaming, promotional videos, and event documentaries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Post-Production</h3>
                    <p className="text-gray-300">Professional editing, color correction, audio enhancement, and delivery in multiple formats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installations & Consulting */}
      <section id="installations" className="py-20" style={{ backgroundColor: '#242b32' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">Installations </h2>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Permanent AV installations and technical consulting services for venues, businesses, and organizations requiring ongoing audio-visual solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Settings className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Permanent Installations</h3>
                    <p className="text-gray-300">Fixed audio systems, lighting installations, projection systems, and control interfaces</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Consulting</h3>
                    <p className="text-gray-300">Computer systems, network infrastructure, and integrated technology solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Training & Support</h3>
                    <p className="text-gray-300">User training, ongoing maintenance, and 24/7 technical support services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/Audio-Visual-Simpletech.jpg"
                alt="Professional audio mixing console"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section id="consultation" className="py-20" style={{ backgroundColor: '#1a1f24' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Consultation meeting"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-lg"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">Consultation Services</h2>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Expert consultation and tailored solutions to help you make informed decisions about your audio-visual needs and technical requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Project Planning</h3>
                    <p className="text-gray-300">Comprehensive assessment of your requirements, venue analysis, and customized solution design</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Advisory</h3>
                    <p className="text-gray-300">Equipment recommendations, system design, and technology integration guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Settings className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Budget Optimization</h3>
                    <p className="text-gray-300">Cost-effective solutions that maximize value while meeting your specific needs and constraints</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #0077b3, #004466)' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a customized quote for your specific requirements
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
          >
            Get Your Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;