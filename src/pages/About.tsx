import React from 'react';
import { Calendar, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800/60 to-gray-700/40" style={{ backgroundColor: '#1a1f24' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Steller Industries</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of excellence in audio-visual solutions, driven by passion for perfection and commitment to our clients
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20" style={{ backgroundColor: '#242b32' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Founded in 2014</h3>
                    <p className="text-gray-300">
                      Started as a small audio-visual service provider with a vision to deliver exceptional quality and reliability in every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Rebranded in 2024</h3>
                    <p className="text-gray-300">
                      Evolved into Steller Industries to better reflect our comprehensive services and commitment to stellar quality in everything we do.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
                    <p className="text-gray-300">
                      Built a reputation for excellence with recurring clients in events, pageants, corporate functions, and permanent installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional event setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20" style={{ backgroundColor: '#1a1f24' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're driven by core principles that guide every project and client relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-gray-600/30" style={{ backgroundColor: '#242b32' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We never compromise on quality. Every project receives our full attention to detail and commitment to perfection.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-gray-600/30" style={{ backgroundColor: '#242b32' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Reliability</h3>
              <p className="text-gray-300">
                Dependable service delivery, on-time performance, and consistent quality that our clients can trust.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-gray-600/30" style={{ backgroundColor: '#242b32' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Customer-First</h3>
              <p className="text-gray-300">
                Your vision and satisfaction drive everything we do. We listen, understand, and deliver beyond expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "Steller" */}
      <section className="py-20" style={{ backgroundColor: '#242b32' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8"> So Why Steller and Not Stellar?</h2>
          <div className="border border-gray-600/30 rounded-lg p-8" style={{ backgroundColor: '#1a1f24' }}>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At Steller Industries, our name is more than just a word—it’s a reflection of who we are and what we do. We chose "Steller" because it sounds like "stellar," representing excellence, but with a unique twist. The "elle" in the middle is a deliberate design choice, symbolizing both aspects of our business: sound (since it sounds like "stellar") and visual creativity (as the spelling is more visually distinctive, just like our photography and videography work). It’s a name that embodies our commitment to delivering top-tier sound, lighting, and visual experiences—because in everything we do, we aim to be truly Steller!
            </p>
            <p className="text-lg text-gray-400">
              Just like the word itself, we're recognizable for our quality, yet memorable for our unique character and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #0077b3, #004466)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Built by Professionals</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            Our experienced team combines technical expertise with creative vision to deliver exceptional results for every client.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">10+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">500+</div>
              <div className="text-gray-200">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">50+</div>
              <div className="text-gray-200">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;