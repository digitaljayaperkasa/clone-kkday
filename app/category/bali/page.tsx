'use client';

import { 
  Search, Globe, User, Menu, MapPin, Ticket, Car, Camera, Utensils, Star, 
  ChevronRight, ChevronLeft, Facebook, Instagram, Youtube, Twitter, 
  Calendar, Filter, Heart, ThumbsUp, Flame, DollarSign, ChevronDown, 
  ShieldCheck, CheckCircle2, Clock, Languages, ShoppingBag, Baby, Bus, Settings2
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Mock Data for Bali ---
const baliProducts = [
  {
    id: 1,
    title: 'Bali Day Tour: Ubud Monkey Forest, Rice Terrace & Tanah Lot Sunset',
    location: 'Ubud, Bali',
    rating: 4.8,
    reviews: 12450,
    price: 35.00,
    originalPrice: 45.00,
    discount: '22% OFF',
    image: 'https://picsum.photos/seed/bali1/600/600',
    tags: ['KKday Signature Tours', 'Instant Confirmation', 'Shared tour'],
    booked: '60K+'
  },
  {
    id: 2,
    title: 'Nusa Penida Day Tour from Bali | Kelingking Beach, Broken Beach & Angel Billabong',
    location: 'Nusa Penida, Bali',
    rating: 4.7,
    reviews: 8900,
    price: 42.50,
    originalPrice: 55.00,
    discount: '23% OFF',
    image: 'https://picsum.photos/seed/bali2/600/600',
    tags: ['Bestseller', 'Instant Confirmation', 'Private tour'],
    booked: '45K+'
  },
  {
    id: 3,
    title: 'Mount Batur Sunrise Trekking Experience with Natural Hot Spring',
    location: 'Kintamani, Bali',
    rating: 4.9,
    reviews: 5600,
    price: 28.00,
    originalPrice: 40.00,
    discount: '30% OFF',
    image: 'https://picsum.photos/seed/bali3/600/600',
    tags: ['Top Rated', 'Early Departure', 'Shared tour'],
    booked: '20K+'
  },
  {
    id: 4,
    title: 'Bali Swing and Tegenungan Waterfall Day Tour',
    location: 'Gianyar, Bali',
    rating: 4.6,
    reviews: 3412,
    price: 15.50,
    originalPrice: 22.00,
    discount: '29% OFF',
    image: 'https://picsum.photos/seed/bali4/600/600',
    tags: ['Must Go', 'Instant Confirmation', 'Shared tour'],
    booked: '10K+'
  },
  {
    id: 5,
    title: 'Ayung River White Water Rafting Adventure in Ubud',
    location: 'Ubud, Bali',
    rating: 4.7,
    reviews: 2403,
    price: 18.75,
    originalPrice: 28.17,
    discount: '33% OFF',
    image: 'https://picsum.photos/seed/bali5/600/600',
    tags: ['Adventure', 'Instant Confirmation', 'Shared tour'],
    booked: '15K+'
  }
];

const filterCategories = [
  'Half-day/Full-day Tours',
  'Walking Tours',
  'Sightseeing Bus Tours',
  'Boat & Yacht Tours',
  'Wildlife Tours',
  'Multi-Day Tours',
  'Food Tours',
  'Hiking Tours'
];

const languages = ['English', 'Bahasa Indonesia', 'Chinese', 'Japanese', 'Korean'];

const faqs = [
  {
    question: "What are some recommended family-friendly activities for a trip to Bali?",
    answer: "For a trip to Bali, there are many options suitable for family fun. You can take your children to experience beach activities, such as surfing lessons at Kuta Beach or enjoying sunset dinners in Jimbaran Bay. Additionally, the Bali Safari and Marine Park offer opportunities for close encounters with animals, while the Monkey Forest allows children to observe playful monkeys."
  },
  {
    question: "How can I manage my travel budget for a first-time Bali tour?",
    answer: "Managing your budget in Bali involves accommodation, transportation, and activities. Private drivers are affordable and convenient. For dining, local 'warungs' offer delicious food at low prices. Booking activities like Nusa Penida tours or sunrise treks in advance on KKday can often save you 20-30% compared to on-site prices."
  }
];

export default function BaliCategory() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tighter text-blue-500 cursor-pointer">
              KKday
            </div>
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-96">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input type="text" placeholder="Search Bali activities" className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none" />
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-blue-500">
              <Globe className="w-4 h-4" />
              <span>EN / USD</span>
            </div>
            <div className="cursor-pointer hover:text-blue-500">Log In</div>
            <div className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer transition-colors">
              Sign Up
            </div>
          </div>
        </div>
      </nav>

      {/* --- Page Header --- */}
      <div className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-xs text-slate-400 mb-4 gap-2">
            <span>Home</span> <ChevronRight className="w-3 h-3" /> 
            <span>Indonesia</span> <ChevronRight className="w-3 h-3" /> 
            <span className="text-slate-600 font-medium">Bali</span>
          </nav>
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Popular Sightseeing Tours in Bali</h1>
          
          {/* Search Bar Component from Sample */}
          <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-4 border border-slate-100">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 flex-1">
              <MapPin className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium mr-4 border-r pr-4">Bali</span>
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input type="text" placeholder="What activities would you like to experience?" className="text-sm w-full outline-none" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content Layout --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Sidebar Filters --- */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
            {/* Date Picker Placeholder */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-600">Select Dates</span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>

            {/* Trusted Partner Switch */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">Trusted Partner</span>
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                </div>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all"></div>
                </div>
              </div>
              <p className="text-xs text-slate-400">Merchants certified by KKday for quality service</p>
            </div>

            {/* KKday Signature Switch */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold">KKday Signature Tour</span>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all"></div>
                </div>
              </div>
              <p className="text-xs text-slate-400">Comfortable private tours with guaranteed quality</p>
            </div>

            {/* Categories Filter */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold mb-4">Categories</h3>
              <div className="space-y-3">
                {filterCategories.map((cat, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      <div className="w-2 h-2 bg-blue-500 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <span className="text-sm text-slate-600 group-hover:text-blue-500 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Filter */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold mb-6">Budget (US$)</h3>
              <div className="relative h-1 bg-slate-100 rounded-full mb-4">
                <div className="absolute left-0 right-0 h-full bg-blue-500 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm"></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>US$0</span>
                <span>US$500+</span>
              </div>
            </div>

            {/* Service Guarantee */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-sm font-bold mb-4">Service Guarantee</h3>
              <div className="space-y-3">
                {['Instant Confirmation', 'Easy Refund', 'Receive Voucher Instantly'].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center group-hover:border-blue-500 transition-colors"></div>
                    <span className="text-sm text-slate-600 group-hover:text-blue-500 transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* --- Results Area --- */}
          <main className="flex-1">
            {/* Sorting Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="text-sm">
                <span className="font-bold text-blue-500">9,046</span> experiences found
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="text-slate-900">Sort by:</span>
                <button className="flex items-center gap-1 text-blue-500">
                  <ThumbsUp className="w-3 h-3" /> KKday suggestions
                </button>
                <button className="flex items-center gap-1 hover:text-slate-600">
                  <Flame className="w-3 h-3" /> Popularity
                </button>
                <button className="flex items-center gap-1 hover:text-slate-600">
                  <Star className="w-3 h-3" /> Ratings
                </button>
                <button className="flex items-center gap-1 hover:text-slate-600">
                  <DollarSign className="w-3 h-3" /> Price: low to high
                </button>
              </div>
            </div>

            {/* Product Cards List */}
            <div className="space-y-4">
              {baliProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -2 }}
                  className="flex flex-col md:flex-row bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="relative w-full md:w-60 h-60 flex-shrink-0">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-white/90 backdrop-blur p-1.5 rounded-full shadow-sm">
                        <Heart className="w-4 h-4 text-slate-400 hover:text-red-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 text-blue-500 fill-blue-500" />
                        <span className="text-xs font-bold text-slate-900">{product.rating}</span>
                        <span className="text-xs text-slate-400">({product.reviews})・{product.booked} booked</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-500 transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-100 flex items-center gap-1">
                            {tag.includes('Signature') && <ShieldCheck className="w-3 h-3 text-blue-500" />}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between border-t pt-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 line-through">US$ {product.originalPrice.toFixed(2)}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">from</span>
                          <span className="text-xl font-black text-slate-900">US$ {product.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3, 4, 5, '...', 7].map((page, i) => (
                <button 
                  key={i} 
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${page === 1 ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* --- Reviews Section --- */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10">Featured Comments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Anonymous User</div>
                    <div className="text-[10px] text-slate-400">Family Traveller</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  &quot;The driver was very friendly and professional. We visited the Ubud Monkey Forest and the rice terraces. Everything was well-organized and we had a great time!&quot;
                </p>
                <div className="text-[10px] text-slate-400">2026/03/25</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <h3 className={`text-base font-bold transition-colors ${openFaq === idx ? 'text-blue-500' : 'text-slate-800 group-hover:text-blue-500'}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-slate-500 leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
