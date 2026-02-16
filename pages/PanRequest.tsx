
import React, { useState } from 'react';
import { FileText, Send, ShieldCheck, Loader2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { saveOrder } from '../supabase.ts';

const PanRequest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'New PAN Card',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await saveOrder({
      customer_name: formData.name,
      phone: formData.phone,
      service_type: 'PAN Card Service',
      details: formData.type,
      message: formData.requirements
    });

    const message = `Hello Bublu Xerox Point, I need PAN card service:%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Request Type:* ${formData.type}%0A*Message:* ${formData.requirements || 'N/A'}%0A%0AWhat documents should I send?`;
    
    setLoading(false);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-blue-700 py-8 px-8 text-white">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FileText /> PAN Card Request
            </h1>
            <p className="mt-2 text-blue-100 opacity-90">Apply for new PAN or corrections with professional assistance.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="As per Aadhaar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['New PAN Card', 'Correction', 'Reprint'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: t })}
                    className={`py-3 px-4 rounded-xl border font-semibold transition-all ${
                      formData.type === t 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message or Specific Request</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]"
                placeholder="Mention any issues or specific requirements..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              ></textarea>
            </div>

            <div className="flex gap-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-100 items-start">
              <ShieldCheck className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
              <p className="text-sm text-yellow-800 italic">
                Your request will be recorded securely in our database for processing.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
              {loading ? 'Saving Request...' : 'Connect via WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PanRequest;