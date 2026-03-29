"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, Clock, ClipboardList, 
  TrendingUp, Star, Award, Search, 
  ChevronRight, Plus, Loader2, Save
} from 'lucide-react';
import { getApiUrl } from '@/lib/api';

interface Shift {
  id: number;
  date: string;
  staff_name: string;
  role: string;
  shift_start: string;
  shift_end: string;
  notes: string;
}

interface Performance {
  staff_name: string;
  days_worked: number;
  avg_revenue_on_shift_days: number;
  best_day_revenue: number;
  worst_day_revenue: number;
}

export default function ShiftsPage() {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [performance, setPerformance] = useState<Performance[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    staff_name: '',
    role: 'Cook',
    shift_start: '09:00',
    shift_end: '18:00',
    notes: ''
  });

  const fetchData = async () => {
    try {
      const [shiftsRes, perfRes] = await Promise.all([
        fetch(getApiUrl('/api/v1/restaurant/shifts/'), { cache: 'no-store' }),
        fetch(getApiUrl('/api/v1/restaurant/shifts/performance'), { cache: 'no-store' })
      ]);
      const shiftsData = await shiftsRes.json();
      const perfData = await perfRes.json();
      setShifts(shiftsData);
      setPerformance(perfData);
    } catch (error) {
      console.error("Failed to fetch shift data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/shifts/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormData({ ...formData, staff_name: '', notes: '' });
        fetchData();
      }
    } catch (error) {
      console.error("Failed to log shift", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-8 flex justify-center"><Loader2 className="animate-spin text-indigo-600 w-12 h-12" /></div>;

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">SHIFT LOGS</h1>
          <p className="text-gray-500 font-medium">Track staff presence and performance metrics.</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-2xl">
          <Users className="w-8 h-8 text-indigo-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shift Logging Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col h-full">
            <h3 className="text-lg font-black text-gray-800 mb-6 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-indigo-600" />
              Log New Shift
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Date</label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Staff Member</label>
                <input 
                  type="text" 
                  placeholder="Employee Name"
                  value={formData.staff_name}
                  onChange={e => setFormData({...formData, staff_name: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Role</label>
                <select 
                  value={formData.role}
                  onChange={e => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
                >
                  <option>Manager</option>
                  <option>Cook</option>
                  <option>Cashier</option>
                  <option>Delivery</option>
                  <option>Helper</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Start Time</label>
                  <input 
                    type="time" 
                    value={formData.shift_start}
                    onChange={e => setFormData({...formData, shift_start: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">End Time</label>
                  <input 
                    type="time" 
                    value={formData.shift_end}
                    onChange={e => setFormData({...formData, shift_end: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Notes</label>
                <textarea 
                  rows={2}
                  placeholder="Optional notes..."
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-xl p-3 font-bold text-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-indigo-600 text-white rounded-2xl py-4 font-black uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                {submitting ? <Loader2 className="animate-spin w-5 h-5" /> : <Save className="w-5 h-5" />}
                <span>Record Shift</span>
              </button>
            </form>
          </div>
        </div>

        {/* Shift History & Performance */}
        <div className="lg:col-span-2 space-y-8">
          {/* Performance Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-16 h-16 text-emerald-600" />
              </div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Top Revenue Driver</h3>
              <p className="text-2xl font-black text-gray-900 tracking-tight">{performance[0]?.staff_name || 'N/A'}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm font-black text-emerald-500">₹{Math.round(performance[0]?.avg_revenue_on_shift_days || 0).toLocaleString()}</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase italic">Avg. Daily Revenue</span>
              </div>
            </div>

            <div className="bg-indigo-600 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group text-white">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-4">Total Workforce</h3>
              <p className="text-3xl font-black tracking-tight">{performance.length} Staff Members</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm font-bold opacity-80 italic">Active in System</span>
              </div>
            </div>
          </div>

          {/* Recent Shifts Table */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
             <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest">Recent Activity</h3>
                <ClipboardList className="w-5 h-5 text-gray-400" />
             </div>
             <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Staff Member</th>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4">Time Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {shifts.map((s) => (
                      <tr key={s.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="px-6 py-4 text-sm font-bold text-gray-500 whitespace-nowrap">{new Date(s.date).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-black">
                              {s.staff_name.charAt(0)}
                            </div>
                            <span className="text-sm font-black text-gray-900">{s.staff_name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-black uppercase tracking-tight italic">
                            {s.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-gray-400">
                          {s.shift_start} - {s.shift_end}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
