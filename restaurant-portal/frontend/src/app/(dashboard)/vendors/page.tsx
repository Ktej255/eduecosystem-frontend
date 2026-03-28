"use client";
import React, { useState, useEffect } from 'react';
import { Users, Phone, MessageSquare, Plus, ShoppingCart, Send, Loader2 } from 'lucide-react';
import { getApiUrl } from '@/lib/api';

interface Vendor {
  id: string;
  name: string;
  phone: string;
  whatsapp_number: string;
  items_supplied: string;
}

interface Order {
  vendor_name: string;
  whatsapp_number: string;
  items: string[];
}

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newVendor, setNewVendor] = useState({
    name: '',
    phone: '',
    whatsapp_number: '',
    items_supplied: ''
  });
  const [generatedOrders, setGeneratedOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/vendors/'));
      if (res.ok) {
        const data = await res.json();
        setVendors(data);
      }
    } catch (error) {
      console.error("Failed to fetch vendors", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateVendor = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/vendors/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVendor)
      });
      if (res.ok) {
        setNewVendor({ name: '', phone: '', whatsapp_number: '', items_supplied: '' });
        fetchVendors();
      }
    } catch (error) {
      console.error("Failed to create vendor", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateOrders = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/vendors/generate-order'), {
        method: 'POST'
      });
      if (res.ok) {
        const data = await res.json();
        setGeneratedOrders(data.orders || []);
      }
    } catch (error) {
      console.error("Failed to generate orders", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = (number: string, message: string) => {
    const encoded = encodeURIComponent(message);
    const cleanNumber = number.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vendor Management</h1>
          <p className="text-gray-500 text-sm">Manage suppliers and automate procurement.</p>
        </div>
        <button 
          onClick={generateOrders}
          disabled={isSubmitting}
          className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
          <span>Generate Tomorrow's Order</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-fit">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-2 text-orange-600" />
            Add New Vendor
          </h3>
          <form onSubmit={handleCreateVendor} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Vendor Name</label>
              <input 
                type="text" 
                required
                value={newVendor.name}
                onChange={e => setNewVendor({...newVendor, name: e.target.value})}
                className="w-full mt-1 p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="e.g. Fresh Dairy Co."
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
              <input 
                type="text" 
                required
                value={newVendor.phone}
                onChange={e => setNewVendor({...newVendor, phone: e.target.value})}
                className="w-full mt-1 p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="e.g. +91 9876543210"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">WhatsApp Number</label>
              <input 
                type="text" 
                required
                value={newVendor.whatsapp_number}
                onChange={e => setNewVendor({...newVendor, whatsapp_number: e.target.value})}
                className="w-full mt-1 p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="e.g. 919876543210"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Items Supplied</label>
              <textarea 
                required
                value={newVendor.items_supplied}
                onChange={e => setNewVendor({...newVendor, items_supplied: e.target.value})}
                className="w-full mt-1 p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all h-24"
                placeholder="e.g. Milk, Cheese, Paneer"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white p-4 rounded-2xl font-bold hover:bg-black transition-all disabled:opacity-50"
            >
              Add Vendor
            </button>
          </form>
        </div>

        {/* List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-orange-600" />
              Active Vendors
            </h3>
            {isLoading ? (
              <div className="py-12 text-center text-gray-400 animate-pulse">Loading suppliers...</div>
            ) : vendors.length === 0 ? (
              <div className="py-12 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                No vendors added yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="p-4 border border-gray-100 rounded-2xl hover:border-orange-200 transition-all group">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">{vendor.name}</h4>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <Phone className="w-3 h-3 mr-1" />
                          {vendor.phone}
                        </div>
                      </div>
                      <a 
                        href={`https://wa.me/${vendor.whatsapp_number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="mt-3 text-xs text-gray-400 line-clamp-2">
                       {vendor.items_supplied}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Generated Orders */}
          {generatedOrders.length > 0 && (
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 animate-in fade-in slide-in-from-top-4">
              <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                <Send className="w-5 h-5 mr-2" />
                Tomorrow's Predicted Orders
              </h3>
              <div className="space-y-3">
                {generatedOrders.map((order, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm">
                    <div>
                      <p className="font-bold text-gray-900">{order.vendor_name}</p>
                      <p className="text-xs text-gray-500">{order.items.join(', ')}</p>
                    </div>
                    <a 
                      href={getWhatsAppLink(order.whatsapp_number, `Order for tomorrow: ${order.items.join(', ')}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs font-bold hover:bg-green-700 transition-all flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
