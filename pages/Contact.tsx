
import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ChevronDown, Facebook } from 'lucide-react';
import { WHATSAPP_NUMBER, SHOP_NAME, FAQS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">Have a question or need a quick quote? Reach out to us!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-xl"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600 font-medium">+91 {WHATSAPP_NUMBER.slice(2)}</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4">
                <div className="bg-green-500 text-white p-3 rounded-xl"><MessageCircle size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-green-700 font-bold hover:underline">Chat Now</a>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                <div className="bg-blue-700 text-white p-3 rounded-xl"><Facebook size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Facebook Page</h4>
                  <a 
                    href="https://www.facebook.com/share/1EYzRk6QR8/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 font-bold hover:underline"
                  >
                    Follow Bublu Xerox
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex items-start gap-4">
                <div className="bg-gray-700 text-white p-3 rounded-xl"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600">Bublu Xerox Point, Local Market Area, Your City, State, ZIP</p>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex items-start gap-4">
                <div className="bg-indigo-600 text-white p-3 rounded-xl"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Opening Hours</h4>
                  <p className="text-gray-600 text-sm">Mon - Sat: 09:00 AM - 08:00 PM</p>
                  <p className="text-red-600 text-sm font-semibold">Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2 bg-gray-200 rounded-3xl overflow-hidden relative h-[400px] lg:h-auto border border-gray-300">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
                <MapPin size={48} className="mb-4 opacity-50" />
                <p className="font-semibold text-lg">Google Map Location</p>
                <p className="text-sm">Bublu Xerox Point is located at the center of the market.</p>
                <a 
                  href={`https://www.google.com/maps/search/Bublu+Xerox+Point`} 
                  target="_blank" 
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
                >
                  View on Maps
                </a>
              </div>
              <img src="https://picsum.photos/seed/map/1200/800" alt="Map View" className="w-full h-full object-cover opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-800">
                  {faq.question}
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
