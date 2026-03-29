"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, Phone, MessageSquare, Plus, ShoppingCart, 
  Send, Loader2, TrendingUp, TrendingDown, Search, 
  Package, ChevronRight, Activity, AlertCircle 
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'vendors' | 'prices'>('vendors');
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

  // Price Tracker State
  const [priceHistoryData, setPriceHistoryData] = useState<any>(null);
  const [priceAlerts, setPriceAlerts] = useState<any[]>([]);
  const [priceItemSearch, setPriceItemSearch] = useState('');
  const [priceEntry, setPriceEntry] = useState({
    vendor_id: '',
    item_name: '',
    price_per_unit: '',
    unit: 'kg'
  });

  const fetchData = async () => {
    setIsLoading(true);
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

  const fetchPriceAlerts = async () => {
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/vendors/prices/alerts/increases'));
      if (res.ok) {
        const data = await res.json();
        setPriceAlerts(data.alerts || []);
      }
    } catch (error) {
       console.error("Failed to fetch alerts", error);
    }
  };

  useEffect(() => {
    fetchData();
    if (activeTab === 'prices') {
      fetchPriceAlerts();
    }
  }, [activeTab]);

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
        fetchData();
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

  const handleRecordPrice = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/vendors/prices'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vendor_id: parseInt(priceEntry.vendor_id),
          item_name: priceEntry.item_name,
          price_per_unit: parseFloat(priceEntry.price_per_unit),
          unit: priceEntry.unit
        })
      });
      if (res.ok) {
        setPriceEntry({ ...priceEntry, item_name: '', price_per_unit: '' });
        fetchPriceAlerts();
      }
    } catch (error) {
      console.error("Failed to record price", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const searchPriceHistory = async () => {
    if (!priceItemSearch) return;
    const res = await fetch(getApiUrl(`/api/v1/restaurant/vendors/prices/${priceItemSearch}`));
    if (res.ok) {
      const data = await res.json();
      setPriceHistoryData(data);
    }
  };

  const getWhatsAppLink = (number: string, message: string) => {
    const encoded = encodeURIComponent(message);
    const cleanNumber = number.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="flex space-x-2">
           <button 
            onClick={() => setActiveTab('vendors')}
            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'vendors' ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
           >
             Supplier Directory
           </button>
           <button 
            onClick={() => setActiveTab('prices')}
            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'prices' ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
           >
             Price Intelligence
           </button>
        </div>
        <button 
          onClick={generateOrders}
          disabled={isSubmitting}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 text-[10px] uppercase font-black"
        >
          {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-4 h-4" />}
          <span>Auto-Procure</span>
        </button>
      </div>

      {activeTab === 'vendors' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
          {/* Form */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 h-fit">
            <h3 className="text-sm font-black text-gray-900 mb-6 flex items-center uppercase tracking-widest">
              <Plus className="w-5 h-5 mr-3 text-indigo-600" />
              Add New Vendor
            </h3>
            <form onSubmit={handleCreateVendor} className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Vendor Name</label>
                <input 
                  type="text" required value={newVendor.name}
                  onChange={e => setNewVendor({...newVendor, name: e.target.value})}
                  className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-gray-700"
                  placeholder="e.g. Fresh Dairy Co."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Phone</label>
                    <input 
                      type="text" required value={newVendor.phone}
                      onChange={e => setNewVendor({...newVendor, phone: e.target.value})}
                      className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-gray-700"
                    />
                 </div>
                 <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">WhatsApp</label>
                    <input 
                      type="text" required value={newVendor.whatsapp_number}
                      onChange={e => setNewVendor({...newVendor, whatsapp_number: e.target.value})}
                      className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-gray-700"
                    />
                 </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Items Supplied</label>
                <textarea 
                  required value={newVendor.items_supplied}
                  onChange={e => setNewVendor({...newVendor, items_supplied: e.target.value})}
                  className="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all h-24 font-bold text-gray-700 resize-none"
                  placeholder="e.g. Milk, Cheese, Paneer"
                />
              </div>
              <button 
                type="submit" disabled={isSubmitting}
                className="w-full bg-gray-900 text-white p-4 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50 shadow-xl"
              >
                Onboard Vendor
              </button>
            </form>
          </div>

          {/* List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h3 className="text-sm font-black text-gray-900 mb-6 flex items-center uppercase tracking-widest">
                <Users className="w-5 h-5 mr-3 text-indigo-600" />
                Strategic Suppliers
              </h3>
              {isLoading ? (
                <div className="py-12 text-center text-gray-400 animate-pulse"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vendors.map((vendor) => (
                    <div key={vendor.id} className="p-6 border border-gray-100 rounded-[2rem] hover:border-indigo-200 transition-all group bg-gray-50/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-black text-gray-900">{vendor.name}</h4>
                          <div className="flex items-center text-gray-400 text-[10px] font-bold mt-1 uppercase">
                            <Phone className="w-3 h-3 mr-1" />
                            {vendor.phone}
                          </div>
                        </div>
                        <a 
                          href={`https://wa.me/${vendor.whatsapp_number}`} target="_blank" rel="noopener noreferrer"
                          className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                        >
                          <MessageSquare className="w-5 h-5" />
                        </a>
                      </div>
                      <div className="mt-4 text-[10px] font-bold text-gray-500 line-clamp-2 italic uppercase">
                         {vendor.items_supplied}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {generatedOrders.length > 0 && (
              <div className="bg-indigo-600 p-8 rounded-[3rem] shadow-2xl animate-in slide-in-from-top-4 text-white relative overflow-hidden">
                <ShoppingCart className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-8 -mt-8" />
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center">
                  <Send className="w-5 h-5 mr-3" />
                  Tomorrow's Predicted Orders
                </h3>
                <div className="space-y-3">
                  {generatedOrders.map((order, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl flex justify-between items-center border border-white/10">
                      <div>
                        <p className="font-black text-white">{order.vendor_name}</p>
                        <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-tight">{order.items.join(', ')}</p>
                      </div>
                      <a 
                        href={getWhatsAppLink(order.whatsapp_number, `Order for tomorrow: ${order.items.join(', ')}`)}
                        target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all"
                      >
                        Send WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-bottom-4 duration-500">
           {/* Price Entry */}
           <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                 <h3 className="text-sm font-black text-gray-900 mb-6 uppercase tracking-widest">Update Market Price</h3>
                 <form onSubmit={handleRecordPrice} className="space-y-4">
                    <div>
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Select Vendor</label>
                       <select 
                        required className="w-full p-3 bg-gray-50 border-none rounded-xl font-bold text-gray-700"
                        value={priceEntry.vendor_id} onChange={e => setPriceEntry({...priceEntry, vendor_id: e.target.value})}
                       >
                          <option value="">Choose Supplier...</option>
                          {vendors.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                       </select>
                    </div>
                    <div>
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Item Name</label>
                       <input 
                        required className="w-full p-3 bg-gray-50 border-none rounded-xl font-bold text-gray-700"
                        value={priceEntry.item_name} onChange={e => setPriceEntry({...priceEntry, item_name: e.target.value})}
                        placeholder="e.g. Cheese"
                       />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Price (₹)</label>
                          <input 
                           type="number" required className="w-full p-3 bg-gray-50 border-none rounded-xl font-bold text-gray-700"
                           value={priceEntry.price_per_unit} onChange={e => setPriceEntry({...priceEntry, price_per_unit: e.target.value})}
                          />
                       </div>
                       <div>
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Unit</label>
                          <input 
                           required className="w-full p-3 bg-gray-50 border-none rounded-xl font-bold text-gray-700"
                           value={priceEntry.unit} onChange={e => setPriceEntry({...priceEntry, unit: e.target.value})}
                          />
                       </div>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-indigo-100 mt-4">Record Price</button>
                 </form>
              </div>

              {/* Price Alerts */}
              <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100">
                 <h3 className="text-xs font-black text-amber-900 mb-4 uppercase tracking-widest flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Market Alerts
                 </h3>
                 <div className="space-y-3">
                    {priceAlerts.map((alert, i) => (
                      <div key={i} className="flex justify-between items-center">
                         <span className="text-sm font-black text-amber-800">{alert.item}</span>
                         <span className="text-xs font-black text-rose-600">+{alert.increase_pct}% ↑</span>
                      </div>
                    ))}
                    {priceAlerts.length === 0 && <p className="text-xs text-amber-600 italic">No significant price hikes detected.</p>}
                 </div>
              </div>
           </div>

           {/* Price History Search */}
           <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                 <div className="flex space-x-4 mb-8">
                    <input 
                      className="flex-grow p-4 bg-gray-50 border-none rounded-2xl font-black text-gray-800"
                      placeholder="Enter item name to track history..."
                      value={priceItemSearch} onChange={e => setPriceItemSearch(e.target.value)}
                    />
                    <button onClick={searchPriceHistory} className="bg-gray-900 text-white px-8 rounded-2xl font-black uppercase tracking-widest shadow-xl">Audit</button>
                 </div>

                 {priceHistoryData ? (
                   <div className="space-y-6 animate-in fade-in duration-500">
                      <div className="flex items-center justify-between">
                         <h4 className="text-2xl font-black text-gray-900">{priceHistoryData.item.toUpperCase()}</h4>
                         <span className={`px-4 py-1 rounded-full text-[10px] font-black ${priceHistoryData.price_change_pct > 0 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                           {priceHistoryData.price_change_pct > 0 ? '+' : ''}{priceHistoryData.price_change_pct}% OVERALL TREND
                         </span>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                         <div className="overflow-x-auto">
                            <table className="w-full">
                               <thead>
                                  <tr className="text-left text-[9px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                                     <th className="pb-3 px-4">Date</th>
                                     <th className="pb-3 px-4">Vendor</th>
                                     <th className="pb-3 px-4">Price</th>
                                  </tr>
                               </thead>
                               <tbody className="divide-y divide-gray-100">
                                  {priceHistoryData.history.map((h: any, i: number) => (
                                    <tr key={i} className="text-sm font-bold text-gray-700">
                                       <td className="py-4 px-4">{new Date(h.recorded_date).toLocaleDateString()}</td>
                                       <td className="py-4 px-4 uppercase text-[10px]">{h.vendor_name}</td>
                                       <td className="py-4 px-4 font-black text-indigo-600">₹{h.price_per_unit}/{h.unit}</td>
                                    </tr>
                                  ))}
                               </tbody>
                            </table>
                         </div>
                      </div>
                   </div>
                 ) : (
                   <div className="py-24 text-center text-gray-300 italic font-medium">Search an item to visualize cost architecture over time.</div>
                 )}
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
