import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

export default function DentistWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl text-slate-900">SmileCare</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-slate-700 hover:text-teal-600 transition font-medium">Home</a>
            <a href="#services" className="text-slate-700 hover:text-teal-600 transition font-medium">Services</a>
            <a href="#about" className="text-slate-700 hover:text-teal-600 transition font-medium">About</a>
            <a href="#contact" className="text-slate-700 hover:text-teal-600 transition font-medium">Contact</a>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 text-teal-600 font-semibold hover:bg-teal-50 rounded-lg transition">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-slate-700 font-medium">Home</a>
              <a href="#services" className="text-slate-700 font-medium">Services</a>
              <a href="#about" className="text-slate-700 font-medium">About</a>
              <a href="#contact" className="text-slate-700 font-medium">Contact</a>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Your Smile,
                <span className="block bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Experience advanced dental care in a comfortable, modern environment. From routine cleanings to cosmetic dentistry, we're here to keep your smile healthy and beautiful.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-xl transition text-lg">
                Schedule Your Visit
              </button>
              <button className="px-8 py-4 border-2 border-teal-500 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition text-lg">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-teal-600">15+</p>
                <p className="text-slate-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">5000+</p>
                <p className="text-slate-600 text-sm">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">4.9★</p>
                <p className="text-slate-600 text-sm">Patient Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl h-96 sm:h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">😁</div>
                <p className="text-slate-700 font-semibold">Modern Dental Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Comprehensive dental solutions for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🦷', title: 'Dental Cleaning', desc: 'Professional cleaning and plaque removal' },
              { icon: '✨', title: 'Whitening', desc: 'Brighten your smile with our advanced whitening' },
              { icon: '🛡️', title: 'Root Canal', desc: 'Pain-free root canal treatment' },
              { icon: '🪥', title: 'Fillings', desc: 'Durable and aesthetic filling solutions' },
              { icon: '👑', title: 'Crowns & Bridges', desc: 'Restore missing or damaged teeth' },
              { icon: '😊', title: 'Cosmetic Dentistry', desc: 'Transform your smile with veneers & bonding' },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-teal-500 transition group">
                <p className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</p>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl h-96 sm:h-[500px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">👨‍⚕️</p>
              <p className="text-slate-700 font-semibold">Dr. James Mitchell, DDS</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Meet Our Team</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Led by Dr. James Mitchell with over 15 years of experience in general and cosmetic dentistry, our team is dedicated to providing exceptional care in a welcoming environment.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Advanced Technology</h4>
                  <p className="text-slate-600">Digital imaging and latest equipment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Comfortable Experience</h4>
                  <p className="text-slate-600">Sedation options and relaxing environment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Family Friendly</h4>
                  <p className="text-slate-600">Caring for patients of all ages</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900">Insurance Accepted</h4>
                  <p className="text-slate-600">We work with most major insurance plans</p>
                </div>
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 text-teal-600 font-bold text-lg hover:text-teal-700 transition">
              Read Full Bio <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">What Our Patients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', rating: 5, text: 'Best dental experience ever! The team is friendly and professional.' },
              { name: 'Michael Chen', rating: 5, text: 'Dr. Mitchell made my root canal painless. Highly recommended!' },
              { name: 'Emma Davis', rating: 5, text: 'Beautiful new smile after my cosmetic work. Couldn\'t be happier!' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Get In Touch</h2>
            <p className="text-slate-600 text-lg mb-8">
              Have questions or ready to schedule your appointment? Contact us today!
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600">123 Smile Street, Dentist City, DC 12345</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Hours</h4>
                  <p className="text-slate-600">Mon-Fri: 9AM - 6PM<br/>Sat: 10AM - 4PM<br/>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-slate-900 font-semibold mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none transition" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-slate-900 font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none transition" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-slate-900 font-semibold mb-2">Message</label>
              <textarea rows="5" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:outline-none transition" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-lg">SmileCare Dental</span>
            </div>
            <p className="text-slate-400 text-sm">© 2024 SmileCare Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
