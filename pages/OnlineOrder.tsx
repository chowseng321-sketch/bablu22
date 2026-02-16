
import React, { useState } from 'react';
import { ShoppingBag, Send, FileUp, Loader2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { saveOrder } from '../supabase.ts';

const OnlineOrder: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: 'Printout/Xerox',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await saveOrder({
      customer_name: formData.name,
      service_type: formData.service,
      details: 'Online Order Center',
      message: formData.message
    });

    const message = `Hello Bublu Xerox Point, I want to place an order:%0A%0A*Name:* ${formData.name}%0A*Service:* ${formData.service}%0A*Details:* ${formData.message}%0A%0AHow should I proceed?`;
    
    setLoading(false);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const servicesList = [
    'Printout/Xerox',
    'PVC Card Printing',
    'Online Form Filling',
    'Lamination',
    'School/College Projects',
    'Other'
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-blue-700 py-8 px-8 text-white">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <ShoppingBag /> Online Order Center
            </h1>
            <p className="mt-2 text-blue-100 opacity-90">Order any of our services remotely. Just fill this and chat.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none min-h-[150px]"
                placeholder="Describe your requirements (no. of copies, color/B&W, etc.)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
              <FileUp className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-blue-800">Ready to upload files?</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Clicking submit saves your details and opens WhatsApp for file attachment.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
              {loading ? 'Processing Order...' : 'Submit Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrder;