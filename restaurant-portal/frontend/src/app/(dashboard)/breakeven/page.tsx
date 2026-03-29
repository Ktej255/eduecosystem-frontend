"use client";

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, PieChart as PieChartIcon, Target, Scale, 
  ArrowUpCircle, ArrowDownCircle, Info, Loader2, Save
} from 'lucide-react';
import { getApiUrl } from '@/lib/api';

interface BreakEvenData {
  month: string;
  fixed_costs: { rent: number; salaries: number; utilities: number; other: number; total: number };
  avg_order_value: number;
  daily_breakeven_revenue: number;
  daily_breakeven_orders: number;
  today_revenue: number;
  today_estimated_orders: number;
  today_above_breakeven: boolean;
  monthly_total_cost_estimate: number;
  status_message: string;
}

export default function BreakevenPage() {
  const [data, setData] = useState<BreakEvenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    month: new Date().toISOString().split('T')[0].substring(0, 7),
    rent: 0,
    salaries: 0,
    utilities: 0,
    other_fixed: 0,
    avg_order_value: 250
  });

  const fetchData = async () => {
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/stats/breakeven'), { cache: 'no-store' });
      const jsonData = await res.json();
      setData(jsonData);
      if (jsonData.fixed_costs) {
        setFormData({
          month: jsonData.month,
          rent: jsonData.fixed_costs.rent,
          salaries: jsonData.fixed_costs.salaries,
          utilities: jsonData.fixed_costs.utilities,
          other_fixed: jsonData.fixed_costs.other,
          avg_order_value: jsonData.avg_order_value
        });
      }
    } catch (error) {
      console.error("Failed to fetch breakeven data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const queryParams = new URLSearchParams({
        month: formData.month,
        rent: formData.rent.toString(),
        salaries: formData.salaries.toString(),
        utilities: formData.utilities.toString(),
        other_fixed: formData.other_fixed.toString(),
        avg_order_value: formData.avg_order_value.toString()
      });
      const res = await fetch(getApiUrl(`/api/v1/restaurant/stats/breakeven/setup?${queryParams.toString()}`), {
        method: 'POST'
      });
      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error("Failed to save fixed costs", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-12 text-center animate-pulse"><Loader2 className="animate-spin mx-auto w-12 h-12 text-indigo-600 mb-4" /> Calculating Margins...</div>;

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center">
            BREAK-EVEN ARCHITECTURE
            <span className="ml-3 px-2 py-0.5 bg-gray-900 text-white text-[10px] uppercase tracking-tighter rounded font-black">Admin Access</span>
          </h1>
          <p className="text-gray-500 font-medium italic">Predictive profitability analysis for {data?.month}.</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-2xl">
          <Scale className="w-8 h-8 text-indigo-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Status Display */}
        <div className="lg:col-span-8 flex flex-col space-y-8">
           <div className={`p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center border-4 ${
             data?.today_above_breakeven ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'
           }`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 {data?.today_above_breakeven ? <ArrowUpCircle className="w-32 h-32" /> : <ArrowDownCircle className="w-32 h-32" />}
              </div>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Daily Break-even Revenue Target</h3>
              <p className="text-7xl font-black text-gray-900 tracking-tighter mb-4 italic">₹{data?.daily_breakeven_revenue.toLocaleString()}</p>
              <p className={`text-xl font-black uppercase tracking-widest px-6 py-2 rounded-full mb-8 ${
                data?.today_above_breakeven ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
              }`}>
                {data?.today_above_breakeven ? 'HEALTHY' : 'BELOW MARGIN'}
              </p>
              
              <div className="w-full max-w-lg bg-gray-200/50 h-3 rounded-full mb-6 overflow-hidden">
                 <div 
                   className={`h-full transition-all duration-1000 ${data?.today_above_breakeven ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]'}`} 
                   style={{ width: `${Math.min(100, (data?.today_revenue || 0) / (data?.daily_breakeven_revenue || 1) * 100)}%` }}
                 ></div>
              </div>
              
              <p className="font-bold text-gray-600 flex items-center space-x-2">
                 <Info className="w-4 h-4" />
                 <span>{data?.status_message}</span>
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center space-x-6">
                 <div className="bg-indigo-50 p-4 rounded-3xl">
                    <Target className="w-8 h-8 text-indigo-600" />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Breakeven Volume</h3>
                    <p className="text-3xl font-black text-gray-900 leading-none mt-1">{data?.daily_breakeven_orders} <span className="text-sm">orders/day</span></p>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase italic">Projected at ₹{data?.avg_order_value} avg</p>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center space-x-6">
                 <div className="bg-indigo-50 p-4 rounded-3xl">
                    <BarChart3 className="w-8 h-8 text-indigo-600" />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Est. Monthly Opex</h3>
                    <p className="text-3xl font-black text-gray-900 leading-none mt-1">₹{Math.round(data?.monthly_total_cost_estimate || 0).toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase italic">Includes Fixed + Variable</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Configuration Panel */}
        <div className="lg:col-span-4 h-full">
           <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 h-full sticky top-8">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Financial Configuration</h3>
              <form onSubmit={handleSave} className="space-y-4">
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Analysis Month</label>
                    <input type="month" className="bg-transparent border-none p-0 w-full font-black text-gray-800" value={formData.month} onChange={e => setFormData({...formData, month: e.target.value})} />
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Monthly Rent (₹)</label>
                    <input type="number" className="bg-transparent border-none p-0 w-full font-black text-gray-800" value={formData.rent} onChange={e => setFormData({...formData, rent: parseFloat(e.target.value)})} />
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Monthly Salaries (₹)</label>
                    <input type="number" className="bg-transparent border-none p-0 w-full font-black text-gray-800" value={formData.salaries} onChange={e => setFormData({...formData, salaries: parseFloat(e.target.value)})} />
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Utilities (₹)</label>
                    <input type="number" className="bg-transparent border-none p-0 w-full font-black text-gray-800" value={formData.utilities} onChange={e => setFormData({...formData, utilities: parseFloat(e.target.value)})} />
                 </div>
                 <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Other Fixed Costs (₹)</label>
                    <input type="number" className="bg-transparent border-none p-0 w-full font-black text-gray-800" value={formData.other_fixed} onChange={e => setFormData({...formData, other_fixed: parseFloat(e.target.value)})} />
                 </div>
                 <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <label className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1 block">Avg Order Value (₹)</label>
                    <input type="number" className="bg-transparent border-none p-0 w-full font-black text-indigo-900" value={formData.avg_order_value} onChange={e => setFormData({...formData, avg_order_value: parseFloat(e.target.value)})} />
                 </div>

                 <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full bg-gray-900 text-white rounded-2xl py-5 font-black uppercase tracking-widest shadow-xl hover:bg-black active:scale-95 transition-all flex items-center justify-center space-x-2"
                 >
                    {submitting ? <Loader2 className="animate-spin w-5 h-5" /> : <Save className="w-5 h-5" />}
                    <span>Sync Financials</span>
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
