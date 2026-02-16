
import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { SHOP_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to {SHOP_NAME}</h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bublu Xerox Point was established with a simple mission: to provide high-quality digital 
                services and printing solutions to our local community with reliability and trust.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Specializing in PVC Card printing and PAN Card facilitation, we use modern technology 
                to ensure your documents are of professional studio quality. Whether it's a student needing 
                notes printed or a professional requiring official ID cards, we serve everyone with care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-700"><CheckCircle size={20}/></div>
                  <span className="font-semibold text-gray-800">Quality Focused</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-700"><CheckCircle size={20}/></div>
                  <span className="font-semibold text-gray-800">Fast Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-700"><CheckCircle size={20}/></div>
                  <span className="font-semibold text-gray-800">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-700"><CheckCircle size={20}/></div>
                  <span className="font-semibold text-gray-800">Affordable</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/shop/800/600" 
                alt="Shop Experience" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-blue-200">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p className="text-blue-200">Prints Monthly</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <p className="text-blue-200">PAN Cards Processed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-200">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6"><Award size={28} /></div>
              <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
              <p className="text-gray-600">We don't compromise on ink or paper quality. Every print is clear and vivid.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6"><Users size={28} /></div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-600">Confused about documentation? We guide you through every step of PAN or Online forms.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6"><Target size={28} /></div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">Your satisfaction and time are our priority. We ensure quick service every time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
