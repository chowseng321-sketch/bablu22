
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MessageCircle, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import PhotoOrder from './pages/PhotoOrder.tsx';
import PanRequest from './pages/PanRequest.tsx';
import OnlineOrder from './pages/OnlineOrder.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import { SHOP_NAME, WHATSAPP_NUMBER } from './constants.tsx';

// Helper to scroll to top on every navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Reusable Logo Component
export const Logo = ({ className = "h-10 w-10" }) => (
  <div className={`${className} rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-[#FF00FF]`}>
    <img 
      src="./logo.png" 
      alt="Bublu Xerox Point Logo" 
      className="w-full h-full object-cover object-top scale-110"
      style={{ filter: 'brightness(1.05)' }}
      onError={(e) => {
        (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Bublu+Xerox&background=FF00FF&color=fff&bold=true';
      }}
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Photo Print', path: '/order-photo' },
    { name: 'PAN Card', path: '/pan-request' },
    { name: 'Online Order', path: '/online-order' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <Logo className="h-10 w-10 md:h-11 md:w-11" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-blue-700 leading-tight hidden sm:block">{SHOP_NAME}</span>
                <span className="text-lg font-bold text-blue-700 sm:hidden">Bublu Xerox</span>
                <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase hidden md:block">Digital Excellence</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-all font-semibold shadow-sm"
            >
              <MessageCircle size={18} />
              Chat
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="block w-full text-center mt-4 bg-green-500 text-white px-4 py-3 rounded-md font-bold"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-14 w-14 border-white/20" />
              <h2 className="text-2xl font-bold">{SHOP_NAME}</h2>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Your one-stop destination for all digital services, high-quality PVC card printing, 
              official document processing, and studio-grade photography prints.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1EYzRk6QR8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors p-2 bg-white/10 rounded-full"
                title="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 bg-white/10 rounded-full"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 bg-white/10 rounded-full"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 underline underline-offset-8 decoration-blue-500">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2 text-sm"><ChevronRight size={14} /> Services</Link></li>
              <li><Link to="/order-photo" className="hover:text-white transition-colors flex items-center gap-2 text-sm"><ChevronRight size={14} /> Photo Print</Link></li>
              <li><Link to="/pan-request" className="hover:text-white transition-colors flex items-center gap-2 text-sm"><ChevronRight size={14} /> PAN Card</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2 text-sm"><ChevronRight size={14} /> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 underline underline-offset-8 decoration-blue-500">Working Hours</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex justify-between text-sm"><span>Mon - Sat:</span> <span>09:00 AM - 08:00 PM</span></li>
              <li className="flex justify-between text-sm"><span>Sunday:</span> <span className="text-yellow-400">Closed</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-8 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const StickyWhatsApp = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl whatsapp-pulse hover:bg-green-600 transition-transform active:scale-95"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle size={32} />
  </a>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/order-photo" element={<PhotoOrder />} />
            <Route path="/pan-request" element={<PanRequest />} />
            <Route path="/online-order" element={<OnlineOrder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <StickyWhatsApp />
      </div>
    </Router>
  );
}
