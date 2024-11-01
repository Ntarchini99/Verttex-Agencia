import React from 'react';
import { Code2, Palette, Layout, Share2, ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import PortfolioGrid from './components/PortfolioGrid';
import CompanyTypes from './components/CompanyTypes';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
            alt="Office workspace"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Elevate Your <span className="text-violet-400">Digital Presence</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We craft exceptional digital experiences through innovative web development, 
                captivating design, and strategic social media management.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 text-lg font-medium text-white bg-violet-600 rounded-full hover:bg-violet-700 transition-colors inline-flex items-center"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#portfolio"
                  className="px-8 py-3 text-lg font-medium text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-violet-500/20 rounded-full blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1115&h=1115"
                  alt="Digital Marketing"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: 'Web Development', desc: 'Custom websites and web applications built with modern technologies' },
              { icon: Layout, title: 'UX/UI Design', desc: 'User-centered design solutions that drive engagement and conversion' },
              { icon: Palette, title: 'Graphic Design', desc: 'Eye-catching visuals that communicate your brand message' },
              { icon: Share2, title: 'Social Media', desc: 'Strategic social media management to grow your online presence' }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioGrid />
      </section>

      {/* Company Types Section */}
      <section id="about">
        <CompanyTypes />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Verttex</h2>
            <p className="text-gray-400">Transforming ideas into digital reality.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@verttex.com</li>
              <li>+1 (234) 567-8900</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Verttex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;