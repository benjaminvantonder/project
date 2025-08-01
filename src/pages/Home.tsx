import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Camera, Mic, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#1a1f24' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60" style={{ backgroundColor: '#242b32' }}></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(/services-event-support2_Nero_AI_Image_Upscaler_Photo_Face.jpeg)'
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence in Sound,
            </span>
            <br />
            <span className="text-white">Light, and Vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Professional audio-visual solutions that transform your events into unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20" style={{ backgroundColor: '#1a1f24' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-blue-400">Steller Industries</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Since 2014, we've been delivering exceptional audio-visual solutions that exceed expectations. 
              Our commitment to excellence and innovation has made us the trusted partner for events of all different kinds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-600/30 hover:border-blue-500/40 transition-all duration-300" style={{ backgroundColor: '#242b32' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Excellence</h3>
              <p className="text-gray-300">
                Industry-leading equipment and expertise ensure flawless execution for every project
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-600/30 hover:border-blue-500/40 transition-all duration-300" style={{ backgroundColor: '#242b32' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored packages designed to meet your specific event requirements and budget
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-600/30 hover:border-blue-500/40 transition-all duration-300" style={{ backgroundColor: '#242b32' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"> Consultation services </h3>
              <p className="text-gray-300">
                Get in touch and let us assist you with tailored solutions for your sound, lighting, video, or installation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" style={{ backgroundColor: '#242b32' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300">
              Comprehensive solutions for all your audio-visual needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services#sound-lighting" className="group">
              <div className="p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105" style={{ backgroundColor: '#1a1f24' }}>
                <Mic className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Sound & Lighting</h3>
                <p className="text-gray-300">Professional audio and lighting for any venue and event.</p>
              </div>
            </Link>

            <Link to="/services#photography" className="group">
              <div className="p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105" style={{ backgroundColor: '#1a1f24' }}>
                <Camera className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Photography & Video</h3>
                <p className="text-gray-300">Capture your moments with professional quality</p>
              </div>
            </Link>

            <Link to="/services#installations" className="group">
              <div className="p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105" style={{ backgroundColor: '#1a1f24' }}>
                <Settings className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Installations</h3>
                <p className="text-gray-300">Permanent AV solutions and technical consulting</p>
              </div>
            </Link>

            <Link to="/services#events" className="group">
              <div className="p-6 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105" style={{ backgroundColor: '#1a1f24' }}>
                <Play className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Consultation Services</h3>
                <p className="text-gray-300"> Tailored solutions for your exact needs.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #0077b3, #004466)' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can bring your vision to life with our professional services
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;