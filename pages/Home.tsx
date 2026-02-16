
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  FileText, 
  Image as ImageIcon, 
  Star,
  ShieldCheck,
  Zap,
  Clock,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { SERVICES, TESTIMONIALS as STATIC_TESTIMONIALS, SHOP_NAME, SHOP_TAGLINE, WHATSAPP_NUMBER } from '../constants.tsx';
import { supabase } from '../supabase.ts';
import { Testimonial } from '../types.ts';

const HomeLogo = () => (
  <div className="relative inline-block mb-6 group">
    <div className="absolute inset-0 bg-[#FF00FF] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
    <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity animate-pulse"></div>
    
    <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto bg-[#FF00FF] transition-transform duration-500 group-hover:scale-105">
      <img 
        src="./logo.png" 
        alt="Bublu Xerox Point Logo" 
        className="w-full h-full object-cover object-top scale-110"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Bublu+Xerox&background=FF00FF&color=fff&bold=true&size=512';
        }}
      />
    </div>
  </div>
);

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(STATIC_TESTIMONIALS);
  const defaultWhatsAppMsg = encodeURIComponent(`Hello ${SHOP_NAME}, I would like to inquire about your services.`);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('id', { ascending: true });
      
      if (!error && data && data.length > 0) {
        setTestimonials(data);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="border-r border-b border-white/20"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <HomeLogo />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight drop-shadow-md">
              {SHOP_NAME}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-8 bg-blue-300 opacity-50"></div>
              <p className="text-lg md:text-2xl text-blue-100 font-medium tracking-wide">
                {SHOP_TAGLINE}
              </p>
              <div className="h-px w-8 bg-blue-300 opacity-50"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link to="/services" className="bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                Our Services
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultWhatsAppMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95">
                <MessageCircle size={22} />
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-900">Secure Service</h3>
              <p className="text-sm text-gray-500">Safe document handling</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-900">Instant Prints</h3>
              <p className="text-sm text-gray-500">Fast turnaround time</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-900">Professional Quality</h3>
              <p className="text-sm text-gray-500">Premium machines & ink</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-900">Highly Rated</h3>
              <p className="text-sm text-gray-500">Trusted by 1000+ customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.id === 'pvc-card' && <CreditCard size={32} />}
                  {service.id === 'pan-card' && <FileText size={32} />}
                  {service.id === 'photo-print' && <ImageIcon size={32} />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative shadow-sm border border-gray-100">
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <p className="font-bold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-700 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need something printed quickly?</h2>
            <p className="text-xl mb-8 opacity-90">Send us your documents on WhatsApp and pick them up when they are ready!</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultWhatsAppMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all shadow-xl hover:scale-105 active:scale-95">
              <MessageCircle size={28} />
              Start WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}