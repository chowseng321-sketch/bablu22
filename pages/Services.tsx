
import React from 'react';
import { CreditCard, FileText, Image as ImageIcon, Printer, Globe, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, GALLERY_ITEMS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From essential documents to digital applications, we provide fast and reliable 
            services tailored to your needs.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex-shrink-0 flex items-center justify-center">
                {service.id === 'pvc-card' && <CreditCard size={32} />}
                {service.id === 'pan-card' && <FileText size={32} />}
                {service.id === 'photo-print' && <ImageIcon size={32} />}
                {service.id === 'xerox' && <Printer size={32} />}
                {service.id === 'online-services' && <Globe size={32} />}
              </div>
              <div className="flex-grow">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.fullDetails || service.description}</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  {service.id === 'photo-print' ? (
                    <Link to="/order-photo" className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2">
                      Order Photos <ArrowRight size={18} />
                    </Link>
                  ) : service.id === 'pan-card' ? (
                    <Link to="/pan-request" className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2">
                      Apply Now <ArrowRight size={18} />
                    </Link>
                  ) : (
                    <Link to="/online-order" className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2">
                      Order Online <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Gallery</h2>
            <p className="text-gray-600">See examples of our high-quality printing and digital work.</p>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-xl">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md mb-2 w-fit">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <div className="mt-2 flex items-center text-blue-100 text-sm gap-1">
                    <Eye size={16} /> Preview Quality
                  </div>
                </div>
                {/* Fixed Label for Mobile/No-hover */}
                <div className="p-4 md:hidden">
                   <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                   <h4 className="text-gray-900 font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-3xl p-8 text-center border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Want something similar?</h3>
            <p className="text-blue-700 mb-6 max-w-xl mx-auto">
              All these items were completed for local customers in record time. Send us your requirements on WhatsApp for a quick consultation.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md">
              Contact Us Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;