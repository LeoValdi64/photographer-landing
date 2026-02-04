'use client';

import { useState } from 'react';
import {
  Camera,
  Heart,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

const portfolioItems = [
  { id: 1, category: 'portraits', src: 'https://picsum.photos/seed/portrait1/600/800', title: 'Natural Light Portrait' },
  { id: 2, category: 'weddings', src: 'https://picsum.photos/seed/wedding1/600/800', title: 'Beach Wedding' },
  { id: 3, category: 'commercial', src: 'https://picsum.photos/seed/commercial1/600/800', title: 'Product Shot' },
  { id: 4, category: 'landscapes', src: 'https://picsum.photos/seed/landscape1/800/600', title: 'Mountain Vista' },
  { id: 5, category: 'portraits', src: 'https://picsum.photos/seed/portrait2/600/800', title: 'Studio Portrait' },
  { id: 6, category: 'weddings', src: 'https://picsum.photos/seed/wedding2/600/800', title: 'Garden Ceremony' },
  { id: 7, category: 'commercial', src: 'https://picsum.photos/seed/commercial2/600/800', title: 'Brand Campaign' },
  { id: 8, category: 'landscapes', src: 'https://picsum.photos/seed/landscape2/800/600', title: 'Coastal Sunset' },
];

const testimonials = [
  {
    name: 'Sarah & Michael',
    event: 'Wedding',
    text: 'Alexis captured our special day perfectly. Every photo tells a story and brings back beautiful memories.',
    rating: 5,
  },
  {
    name: 'Jennifer Thompson',
    event: 'Portrait Session',
    text: 'The most comfortable photoshoot I ever had. Alexis has a gift for making you feel at ease.',
    rating: 5,
  },
  {
    name: 'TechStart Inc.',
    event: 'Commercial',
    text: 'Professional, creative, and delivered beyond expectations. Our product photos have never looked better.',
    rating: 5,
  },
];

const services = [
  {
    title: 'Portrait Session',
    price: '$299',
    features: ['1-2 Hour Session', '25 Edited Photos', 'Online Gallery', '2 Locations'],
    popular: false,
  },
  {
    title: 'Wedding Package',
    price: '$2,499',
    features: ['Full Day Coverage', '300+ Edited Photos', 'Engagement Session', 'Premium Album'],
    popular: true,
  },
  {
    title: 'Commercial',
    price: '$499',
    features: ['Half Day Session', '50 Edited Photos', 'Commercial License', 'Quick Turnaround'],
    popular: false,
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredPortfolio =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-semibold tracking-tight">Alexis Morgan</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</a>
              <a href="#testimonials" className="text-sm text-neutral-400 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="px-4 py-2 bg-amber-500 text-neutral-950 rounded-full text-sm font-medium hover:bg-amber-400 transition-colors">
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#portfolio" className="block text-neutral-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" className="block text-neutral-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="block text-neutral-400 hover:text-white transition-colors">Services</a>
              <a href="#testimonials" className="block text-neutral-400 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="inline-block px-4 py-2 bg-amber-500 text-neutral-950 rounded-full text-sm font-medium">
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1920/1080)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-amber-500 font-medium tracking-widest uppercase mb-4">Photography Studio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Alexis Morgan
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Capturing life&apos;s most precious moments with artistry and passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-amber-500 text-neutral-950 rounded-full font-medium hover:bg-amber-400 transition-all hover:scale-105"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-neutral-700 rounded-full font-medium hover:border-amber-500 hover:text-amber-500 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <a href="#portfolio" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-500" />
        </a>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Camera, value: '500+', label: 'Sessions' },
              { icon: Heart, value: '150+', label: 'Weddings' },
              { icon: Award, value: '12', label: 'Awards' },
              { icon: Users, value: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-neutral-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-widest uppercase mb-2">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'portraits', 'weddings', 'commercial', 'landscapes'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-neutral-950'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-amber-500 text-sm uppercase tracking-wider mb-1">{item.category}</p>
                    <p className="text-xl font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/photographer/800/1000"
                  alt="Alexis Morgan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 rounded-2xl p-6 text-neutral-950">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </div>
            </div>
            
            <div>
              <p className="text-amber-500 font-medium tracking-widest uppercase mb-2">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Capturing Stories Through My Lens</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                With over a decade of experience in professional photography, I&apos;ve dedicated my career to capturing the authentic moments that make life beautiful. My approach combines technical expertise with artistic vision to create images that resonate emotionally.
              </p>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Whether it&apos;s the joy of a wedding day, the personality in a portrait, or the precision of commercial work, I bring the same passion and attention to detail to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-2xl font-bold text-amber-500">500+</p>
                  <p className="text-neutral-500 text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-500">12</p>
                  <p className="text-neutral-500 text-sm">Industry Awards</p>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-amber-500 font-medium hover:gap-4 transition-all"
              >
                Let&apos;s Work Together <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-widest uppercase mb-2">What I Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold">Services & Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  service.popular
                    ? 'bg-amber-500 text-neutral-950'
                    : 'bg-neutral-900 border border-neutral-800'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-950 text-amber-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className={`text-4xl font-bold mb-6 ${service.popular ? 'text-neutral-950' : 'text-amber-500'}`}>
                  {service.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Star className={`w-4 h-4 ${service.popular ? 'text-neutral-950' : 'text-amber-500'}`} />
                      <span className={service.popular ? 'text-neutral-800' : 'text-neutral-400'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-medium transition-colors ${
                    service.popular
                      ? 'bg-neutral-950 text-amber-500 hover:bg-neutral-800'
                      : 'bg-amber-500 text-neutral-950 hover:bg-amber-400'
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-medium tracking-widest uppercase mb-2">Client Love</p>
            <h2 className="text-4xl md:text-5xl font-bold">What They Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/cta/1920/600)' }}
        >
          <div className="absolute inset-0 bg-neutral-950/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl text-neutral-400 mb-8">
            Let&apos;s capture your story together. Book your session today.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-amber-500 text-neutral-950 rounded-full font-medium hover:bg-amber-400 transition-all hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-amber-500 font-medium tracking-widest uppercase mb-2">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-neutral-400 mb-8">
                Have a project in mind? I&apos;d love to hear from you. Send me a message and let&apos;s create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Email</p>
                    <p className="font-medium">hello@alexismorgan.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm">Studio</p>
                    <p className="font-medium">Los Angeles, California</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-neutral-950 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="wedding">Wedding Package</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 text-neutral-950 rounded-xl font-medium hover:bg-amber-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-500" />
              <span className="font-semibold">Alexis Morgan Photography</span>
            </div>
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
