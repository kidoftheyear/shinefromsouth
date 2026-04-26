/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Droplets, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CreditCard, 
  Instagram, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  Award,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImg from './assets/images/hero_neon_car_1777187215447.png';
import pressureImg from './assets/images/pressure_washing_hero_1777187240712.png';
import ceramicImg from './assets/images/ceramic_coating_close_up_1777187264640.png';
import gallery1 from './assets/images/gallery_1.jpg';
import gallery2 from './assets/images/gallery_2.jpg';
import gallery3 from './assets/images/gallery_3.jpg';
import gallery4 from './assets/images/gallery_4.jpg';
import gallery5 from './assets/images/gallery_5.jpg';

// Images from previous generation
const IMAGES = {
  hero: heroImg,
  pressure: pressureImg,
  ceramic: ceramicImg,
  gallery: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5
  ]
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-md"
        >
          <div className="bg-deep-black border-2 border-neon-lime p-8 w-full max-w-lg relative shadow-[0_0_50px_rgba(189,255,0,0.1)]">
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <h2 className="text-4xl font-anton uppercase text-white mb-8 tracking-tighter">
              BOOK YOUR <span className="text-neon-lime">SHINE</span>
            </h2>
            <form action="https://formsubmit.co/shinefromsouth@gmail.com" method="POST" className="space-y-6">
               <input type="hidden" name="_subject" value="New Booking Request - Shine South" />
               <input type="hidden" name="_captcha" value="false" />
               
               <div>
                 <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Full Name</label>
                 <input type="text" name="name" required className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-lime transition-colors outline-none font-bold" placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Phone Number</label>
                 <input type="tel" name="phone" required className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-lime transition-colors outline-none font-bold" placeholder="(256) 555-5555" />
               </div>
               <div>
                 <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Email Address</label>
                 <input type="email" name="email" required className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-lime transition-colors outline-none font-bold" placeholder="john@example.com" />
               </div>
               <div>
                 <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Type of Service</label>
                 <select name="service" required className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-lime transition-colors outline-none font-bold appearance-none">
                   <option value="Mobile Detailing">Mobile Detailing</option>
                   <option value="Ceramic Coating">Ceramic Coating</option>
                   <option value="Paint Correction">Paint Correction</option>
                   <option value="House Washing">House Washing</option>
                   <option value="Driveway Scouring">Driveway Scouring</option>
                   <option value="Roof Soft Wash">Roof Soft Wash</option>
                 </select>
               </div>
               <button type="submit" className="w-full bg-neon-lime text-black font-black py-5 uppercase tracking-tighter hover:bg-white transition-colors text-xl mt-4">
                 Submit Request
               </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-black/95 py-4 border-b border-soft-gray' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-lime flex items-center justify-center rounded-sm">
            <Car className="text-black w-6 h-6" />
          </div>
          <span className="font-anton text-3xl font-bold tracking-tight uppercase leading-none">
            Shine <span className="text-neon-lime">South</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-black uppercase text-xs tracking-widest">
          <a href="#services" className="hover:text-neon-lime transition-colors">Services</a>
          <a href="#shine-club" className="hover:text-neon-lime transition-colors">Shine Club</a>
          <a href="#gallery" className="hover:text-neon-lime transition-colors">Gallery</a>
          <button onClick={onBookClick} className="bg-neon-lime text-black px-6 py-2 rounded-sm font-black hover:bg-white transition-colors">Book Now</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-deep-black z-[60] p-8 flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-8 right-8" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-anton uppercase">Services</a>
            <a href="#shine-club" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-anton uppercase">Shine Club</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-5xl font-anton uppercase text-neon-lime">Gallery</a>
            <button onClick={() => { setMobileMenuOpen(false); onBookClick(); }} className="bg-neon-lime text-black px-12 py-4 rounded-sm font-black text-2xl uppercase">Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Shine From South Hero" 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-12">
            <span className="tagline-strip">Mobile • Licensed • Insured</span>
          </div>
          
          <h1 className="headline-anton text-[clamp(4rem,15vw,10rem)] mb-8 leading-[0.85]">
            SHINE ON <br/>
            <span className="text-neon-lime neon-glow">ALABAMA.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl font-semibold leading-relaxed">
            The premier high-performance mobile detailing and soft wash service serving Madison County. We bring the street-style luxury finish directly to your home or office.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onBookClick} className="bg-neon-lime text-black px-12 py-6 rounded-sm font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-white transition-colors group">
              Start Your Shine <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-sm font-black text-xl uppercase tracking-tighter hover:bg-white/10 transition-colors">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 overflow-hidden pointer-events-none opacity-30">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-8xl font-anton text-transparent stroke-1 stroke-white/40 uppercase px-8">WE COME TO YOU • SHINE SOUTH • MOBILE DETAILING • MADISON COUNTY •</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { icon: <Clock />, label: "7 DAYS A WEEK", sub: "8:00 AM — 8:00 PM" },
    { icon: <MapPin />, label: "WE COME TO YOU", sub: "MADISON • HUNTSVILLE • DECATUR" },
    { icon: <ShieldCheck />, label: "LICENSED", sub: "TOTAL PROPERTY CARE" },
    { icon: <Smartphone />, label: "PAY EASY", sub: "APPLE PAY • CASHAPP • CARDS" },
  ];

  return (
    <section className="bg-neon-lime border-y border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center py-10 px-6 border-r border-black/5 last:border-r-0 text-black text-center">
             <span className="font-anton text-3xl mb-1 tracking-tighter">{item.label}</span>
             <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<'auto' | 'washing'>('auto');

  const detailing = [
    { id: "01", title: "Mobile Detailing", desc: "Precision interior and exterior care for those who demand showroom perfection anywhere.", price: "From $150" },
    { id: "02", title: "Ceramic Coating", desc: "Paint correction and long-term protection packages to keep your investment shining.", price: "From $500", highlight: true },
    { id: "03", title: "Paint Correction", desc: "Advanced orbital buffing and scratch removal for a mirror-like finish.", price: "Quote Only" },
    { id: "04", title: "Fleet Services", desc: "Professional maintenance for company trucks and utility vehicles across North Alabama.", price: "Contract Rates" },
  ];

  const washing = [
    { id: "01", title: "House Washing", desc: "Gentle soft wash for home siding. Removes mold, algae, and grime safely.", price: "From $250" },
    { id: "02", title: "Driveway Scouring", desc: "High-pressure concrete restoration for driveways, sidewalks, and patios.", price: "From $100" },
    { id: "03", title: "Roof Soft Wash", desc: "Non-pressure chemical treatment to eliminate black streaks and organic growth.", price: "Quote Only" },
    { id: "04", title: "Commercial Power", desc: "Heavy-duty cleaning for storefronts, parking lots, and industrial surfaces.", price: "From $150" },
  ];

  const currentServices = activeTab === 'auto' ? detailing : washing;

  return (
    <section id="services" className="py-24 bg-deep-black border-b border-soft-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div>
            <span className="text-neon-lime font-black uppercase tracking-[0.4em] text-xs mb-4 block">Hybrid Care Solutions</span>
            <h2 className="text-7xl md:text-8xl headline-anton leading-none">
              PRECISION <br/>
              <span className="text-white/20">SERVICES</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 bg-soft-gray p-1 rounded-sm">
            <button 
              onClick={() => setActiveTab('auto')}
              className={`px-8 py-3 font-black uppercase text-xs tracking-widest transition-all ${activeTab === 'auto' ? 'bg-neon-lime text-black' : 'text-white/40'}`}
            >
              Auto Detailing
            </button>
            <button 
              onClick={() => setActiveTab('washing')}
              className={`px-8 py-3 font-black uppercase text-xs tracking-widest transition-all ${activeTab === 'washing' ? 'bg-neon-lime text-black' : 'text-white/40'}`}
            >
              Pressure Washing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-soft-gray border-y border-soft-gray">
          <AnimatePresence mode="wait">
            {currentServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-deep-black p-10 flex flex-col justify-between group h-full"
              >
                <div>
                  <span className="text-neon-lime font-anton text-xl mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">/{service.id}</span>
                  <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{service.title}</h3>
                  <p className="text-sm text-white/40 mb-8 leading-relaxed font-semibold">{service.desc}</p>
                </div>
                <div className="flex justify-between items-end">
                   <span className="text-lg font-anton text-neon-lime tracking-widest">{service.price}</span>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-neon-lime group-hover:text-black transition-all">
                      <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ShineClub = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="shine-club" className="py-24 relative overflow-hidden bg-deep-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-neon-lime text-black p-12 md:p-24 rounded-sm flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
            <span className="text-[25rem] font-anton leading-none tracking-tighter -mr-20 -mt-20">20%</span>
          </div>

          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-3 bg-black text-neon-lime px-4 py-2 font-black uppercase text-xs tracking-widest mb-8">
              <Award className="w-4 h-4" /> The Shine Club
            </div>
            <h2 className="text-6xl md:text-8xl headline-anton mb-8 leading-[0.85]">
              LOYALTY <br/>
              GETS SHINY.
            </h2>
            <p className="text-xl font-bold mb-10 max-w-md opacity-80">
              Unlimited maintenance for members. Join the inner circle and keep that street-style luxury finish 365 days a year.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
               {[
                  "20% OFF EVERY VISIT",
                  "PRIORITY SCHEDULING",
                  "MEMBER GIFT BAGS",
                  "VIP SPECIAL OFFERS"
               ].map(perk => (
                 <div key={perk} className="flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                   <span className="font-black uppercase text-xs tracking-wider">{perk}</span>
                 </div>
               ))}
            </div>
            <button onClick={onBookClick} className="bg-black text-neon-lime font-black px-12 py-5 rounded-sm text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-colors">
              Join the Club
            </button>
          </div>

          <div className="relative z-10 w-full lg:w-1/3 aspect-square flex items-center justify-center">
             <div className="w-full h-full border-4 border-black/10 rounded-full flex flex-col items-center justify-center">
                <span className="text-9xl font-anton leading-none">20%</span>
                <span className="font-black uppercase tracking-widest text-sm">Off Forever</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  return (
    <section id="gallery" className="py-24 bg-deep-black border-t border-soft-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <h2 className="text-7xl headline-anton leading-none">@SHINEFROM<br/><span className="text-neon-lime">THESOUTH</span></h2>
            <p className="text-white/20 tracking-[0.5em] uppercase text-xs font-black mt-4">The Street Style Gallery</p>
          </div>
          <button className="bg-white/5 border border-white/10 text-white px-8 py-3 font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-neon-lime hover:text-black transition-all rounded-sm">
            <Instagram className="w-4 h-4" /> Latest Drops
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {IMAGES.gallery.map((img, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden bg-soft-gray rounded-sm">
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt="" />
              <div className="absolute inset-0 bg-neon-lime/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-black p-6">
                 <span className="font-anton text-2xl mb-2">SHINE ON</span>
                 <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-black" />)}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-24 border-t border-soft-gray">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-neon-lime flex items-center justify-center rounded-sm">
              <Car className="text-black w-6 h-6" />
            </div>
            <span className="font-anton text-2xl tracking-tighter uppercase leading-none">Shine <span className="text-neon-lime">South</span></span>
          </div>
          <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em] leading-loose max-w-xs mb-10">
            Madison County's premier mobile hybrid detailing service. Licensed, insured, and built for performance.
          </p>
          <div className="flex gap-4">
             <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-neon-lime hover:text-black cursor-pointer transition-all rounded-sm">
               <Instagram className="w-5 h-5" />
             </div>
             <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-neon-lime hover:text-black cursor-pointer transition-all rounded-sm">
               <MapPin className="w-5 h-5" />
             </div>
          </div>
        </div>

        <div>
           <h4 className="font-black uppercase text-xs tracking-[0.4em] mb-10 text-white/20">Operational Zones</h4>
           <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-white/50">
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Huntsville, AL</li>
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Decatur, AL</li>
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Hazel Green, AL</li>
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Madison, AL</li>
           </ul>
        </div>

        <div>
           <h4 className="font-black uppercase text-xs tracking-[0.4em] mb-10 text-white/20">Company Flow</h4>
           <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-white/50">
             <li className="hover:text-neon-lime transition-colors cursor-pointer text-neon-lime italic">The Shine Club</li>
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Mobile Care</li>
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Paint Coating</li>
             <li className="hover:text-neon-lime transition-colors cursor-pointer">Property Hygiene</li>
           </ul>
        </div>

        <div>
           <h4 className="font-black uppercase text-xs tracking-[0.4em] mb-10 text-white/20">Client Direct</h4>
           <p className="text-white/50 text-xs font-black mb-10 tracking-widest leading-loose uppercase">
             Shine South Mobile Detailing<br/>
             Open 7 Days: 8AM — 8PM
           </p>
           <div className="bg-neon-lime p-6 rounded-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 block text-black/40">Secure Payments</span>
              <div className="flex gap-4 items-center">
                 <CreditCard className="text-black/60 w-6 h-6" />
                 <Smartphone className="text-black/60 w-6 h-6" />
                 <span className="text-black font-black text-[10px] uppercase tracking-widest">Apple Pay Accepted</span>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10 text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">
        <span>© 2026 Shine From South Detailing</span>
        <span className="text-neon-lime opacity-50">Shine On Alabama</span>
        <div className="flex gap-12">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

const QuoteSection = () => {
  return (
    <section id="book" className="py-24 bg-deep-black border-t border-soft-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-7xl md:text-8xl headline-anton leading-none mb-12">
              GET A <br/>
              <span className="text-neon-lime neon-glow">QUICK QUOTE</span>
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="font-anton text-3xl text-neon-lime opacity-30 leading-none">01</span>
                <div>
                  <h4 className="font-black uppercase text-lg tracking-tight mb-2">Select Your Package</h4>
                  <p className="text-white/40 text-sm font-semibold max-w-xs">Pick the precision detailing or hybrid washing service you need.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-anton text-3xl text-neon-lime opacity-30 leading-none">02</span>
                <div>
                  <h4 className="font-black uppercase text-lg tracking-tight mb-2">Tell Us Where</h4>
                  <p className="text-white/40 text-sm font-semibold max-w-xs">We work mobile across Huntsville, Madison, and Decatur.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-anton text-3xl text-neon-lime opacity-30 leading-none">03</span>
                <div>
                  <h4 className="font-black uppercase text-lg tracking-tight mb-2">Secure Your Spot</h4>
                  <p className="text-white/40 text-sm font-semibold max-w-xs">Book your time and we'll be there, fully licensed and insured.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-soft-gray p-10 md:p-14 rounded-sm relative shadow-2xl">
            <form action="https://formsubmit.co/shinefromsouth@gmail.com" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="Quick Quote Request - Shine South" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Your Name</label>
                  <input type="text" name="name" required className="w-full bg-deep-black border-b-2 border-white/10 py-3 text-white focus:border-neon-lime transition-colors outline-none font-bold" placeholder="First & Last" />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Phone Line</label>
                  <input type="tel" name="phone" required className="w-full bg-deep-black border-b-2 border-white/10 py-3 text-white focus:border-neon-lime transition-colors outline-none font-bold" placeholder="(256) --- ----" />
                </div>
              </div>
              <div>
                <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Service Level</label>
                <select name="service" required className="w-full bg-deep-black border-b-2 border-white/10 py-3 text-white focus:border-neon-lime transition-colors outline-none appearance-none font-bold">
                  <option value="High Performance Detailing" className="bg-deep-black">HIGH PERFORMANCE DETAILING</option>
                  <option value="Hybrid Property Care" className="bg-deep-black">HYBRID PROPERTY CARE</option>
                  <option value="Ceramic Coating Bundle" className="bg-deep-black">CERAMIC COATING BUNDLE</option>
                  <option value="The Shine Club" className="bg-deep-black">THE SHINE CLUB (RECURRING)</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Subject / Specs</label>
                <textarea name="details" required className="w-full bg-deep-black border-b-2 border-white/10 py-3 text-white focus:border-neon-lime transition-colors outline-none h-24 font-bold resize-none" placeholder="Vehicle make, model, or property type..."></textarea>
              </div>
              <button type="submit" className="w-full bg-neon-lime text-black font-black py-5 rounded-sm text-xl uppercase tracking-tighter hover:bg-white transition-colors">
                Fire Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-deep-black selection:bg-neon-lime selection:text-black">
      <Navbar onBookClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <Features />
      <Services />
      <ShineClub onBookClick={() => setIsBookingModalOpen(true)} />
      <InstagramFeed />
      <QuoteSection />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
