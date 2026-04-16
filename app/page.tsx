'use client';

import { Search, Globe, User, Menu, MapPin, Ticket, Car, Camera, Utensils, Star, ChevronRight, ChevronLeft, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Mock Data ---
const categories = [
  { name: 'Tours', icon: Camera, color: 'bg-blue-100 text-blue-600' },
  { name: 'Tickets', icon: Ticket, color: 'bg-orange-100 text-orange-600' },
  { name: 'Transport', icon: Car, color: 'bg-green-100 text-green-600' },
  { name: 'Dining', icon: Utensils, color: 'bg-red-100 text-red-600' },
  { name: 'Wifi & SIM', icon: Globe, color: 'bg-purple-100 text-purple-600' },
];

const destinations = [
  { name: 'Bali', image: 'https://picsum.photos/seed/bali/400/300', href: '/category/bali' },
  { name: 'Tokyo', image: 'https://picsum.photos/seed/tokyo/400/300' },
  { name: 'Seoul', image: 'https://picsum.photos/seed/seoul/400/300' },
  { name: 'Taipei', image: 'https://picsum.photos/seed/taipei/400/300' },
  { name: 'Bangkok', image: 'https://picsum.photos/seed/bangkok/400/300' },
  { name: 'Osaka', image: 'https://picsum.photos/seed/osaka/400/300' },
];

const topActivities = [
  {
    id: 1,
    title: 'Tokyo Disneyland & DisneySea 1-Day Passport',
    location: 'Tokyo, Japan',
    rating: 4.8,
    reviews: 12450,
    price: 58.50,
    image: 'https://picsum.photos/seed/disney/600/400',
    tag: 'Bestseller'
  },
  {
    id: 2,
    title: 'Taipei 101 Observatory E-Ticket',
    location: 'Taipei, Taiwan',
    rating: 4.7,
    reviews: 8900,
    price: 18.20,
    image: 'https://picsum.photos/seed/taipei101/600/400',
    tag: 'Instant Confirmation'
  },
  {
    id: 3,
    title: 'Nami Island & Petite France Day Tour',
    location: 'Seoul, South Korea',
    rating: 4.6,
    reviews: 5600,
    price: 45.00,
    image: 'https://picsum.photos/seed/nami/600/400',
    tag: 'Top Rated'
  },
  {
    id: 4,
    title: 'Universal Studios Japan Studio Pass',
    location: 'Osaka, Japan',
    rating: 4.9,
    reviews: 15200,
    price: 62.00,
    image: 'https://picsum.photos/seed/usj/600/400',
    tag: 'Must Go'
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-blue-500' : 'text-white'}`}>
              KKday
            </div>
            <div className={`hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-80 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input type="text" placeholder="Search destination or activity" className="bg-transparent border-none focus:ring-0 text-sm w-full" />
            </div>
          </div>
          
          <div className={`flex items-center gap-6 text-sm font-medium ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
            <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-blue-400">
              <Globe className="w-4 h-4" />
              <span>EN / USD</span>
            </div>
            <div className="cursor-pointer hover:text-blue-400">Log In</div>
            <div className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${isScrolled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white text-blue-500 hover:bg-slate-100'}`}>
              Sign Up
            </div>
            <Menu className="w-6 h-6 md:hidden cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://picsum.photos/seed/travel/1920/1080" 
          alt="Travel Hero" 
          fill 
          className="object-cover brightness-75"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Find your special local experience
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto"
          >
            <div className="flex items-center w-full px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
              <MapPin className="w-5 h-5 text-blue-500 mr-3" />
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="w-full text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Categories --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${cat.color}`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-slate-700">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Popular Destinations --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Destinations</h2>
          <div className="flex items-center text-blue-500 font-semibold cursor-pointer hover:underline">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest, idx) => (
            <Link key={idx} href={dest.href || '#'}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white font-bold">{dest.name}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Top Activities --- */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Top Activities</h2>
              <p className="text-slate-500">Handpicked experiences you shouldn&apos;t miss</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topActivities.map((activity) => (
              <motion.div 
                key={activity.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-52">
                  <Image 
                    src={activity.image} 
                    alt={activity.title} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {activity.tag}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-slate-400 text-xs mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {activity.location}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-3 line-clamp-2 h-12 group-hover:text-blue-500 transition-colors">
                    {activity.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold">{activity.rating}</span>
                    <span className="text-xs text-slate-400">({activity.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="text-xs text-slate-400">From</div>
                    <div className="text-lg font-black text-slate-900">
                      <span className="text-sm font-normal mr-1">USD</span>
                      {activity.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why KKday --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl font-bold mb-16">Why book with KKday?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Star className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
            <p className="text-slate-500 leading-relaxed">We carefully select and verify every experience to ensure the highest quality for your trip.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Ticket className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Instant Confirmation</h3>
            <p className="text-slate-500 leading-relaxed">Book on the go and receive your e-tickets instantly. No more waiting in long lines.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Local Experts</h3>
            <p className="text-slate-500 leading-relaxed">Connect with local experts who know the best hidden gems and authentic experiences.</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-black text-white mb-6 tracking-tighter">KKday</div>
              <p className="text-sm leading-relaxed mb-6">
                KKday is the leading e-commerce platform that connects travelers with authentic local experiences.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">About KKday</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Media Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Partnerships</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Affiliate Program</li>
                <li className="hover:text-white cursor-pointer transition-colors">Supply with Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">B2B Solutions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 KKday. All rights reserved.</p>
            <div className="flex gap-6">
              <span>English (US)</span>
              <span>USD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
