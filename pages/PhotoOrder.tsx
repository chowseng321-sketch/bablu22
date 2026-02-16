
import React, { useState } from 'react';
import { Camera, Send, Plus, Minus, Loader2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { saveOrder } from '../supabase.ts';

const PhotoOrder: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: 'Passport Size',
    quantity: 1,
    instructions: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save to Supabase first
    await saveOrder({
      customer_name: formData.name,
      phone: formData.phone,
      service_type: 'Photo Print',
      details: `${formData.size} (Qty: ${formData.quantity})`,
      message: formData.instructions
    });

    const message = `Hello Bublu Xerox Point, I want to order photo prints:%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Size:* ${formData.size}%0A*Quantity:* ${formData.quantity}%0A*Instructions:* ${formData.instructions || 'None'}%0A%0AI will send the photo(s) now.`;
    
    setLoading(false);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const sizes = ['Passport Size', '4x6 (Standard)', '5x7', '8x10', 'Custom Size'];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-blue-700 py-8 px-8 text-white">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Camera /> Photo Print Order
            </h1>
            <p className="mt-2 text-blue-100 opacity-90">Get high-quality glossy/matte photo prints delivered at our shop.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo Size</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              >
                {sizes.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="w-32">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <div className="flex items-center border border-gray-200 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                  className="p-3 text-gray-500 hover:text-blue-600"
                >
                  <Minus size={20} />
                </button>
                <span className="flex-grow text-center font-bold">{formData.quantity}</span>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                  className="p-3 text-gray-500 hover:text-blue-600"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Instructions (Optional)</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                placeholder="Mention any specific crop or edit requirements..."
                value={formData.instructions}
                onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              ></textarea>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-700 leading-relaxed">
                <strong>Note:</strong> After clicking submit, your order will be recorded and you will be redirected to WhatsApp to send your photo files.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
              {loading ? 'Processing...' : 'Submit Order to WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhotoOrder;