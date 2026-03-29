"use client";

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, Target, Activity, 
  Award, AlertCircle, ShoppingBag, PieChart,
  RefreshCw, Crown, ChevronRight, Info, Scale, 
  Trash2, ArrowUpRight, ArrowDownRight, Loader2,
  MessageSquare
} from 'lucide-react';
import { getApiUrl } from '@/lib/api';

interface HealthScore {
  health_score: number;
  grade: string;
  color: string;
  breakdown: {
    [key: string]: { score: number; value: number; label: string };
  };
  recommendation: string;
}

interface TargetStatus {
  month: string;
  monthly_target: number;
  revenue_so_far: number;
  target_achieved_pct: number;
  daily_average: number;
  required_daily_to_hit_target: number;
  days_remaining: number;
  projected_month_total: number;
  on_track: boolean;
  status_message: string;
}

interface CeoSummary {
  period: string;
  this_week_revenue: number;
  last_week_revenue: number;
  week_on_week_change: number;
  direction: "up" | "down";
  profit_margin: number;
  best_day: { date: string; revenue: number };
  worst_day: { date: string; revenue: number };
  top_waste_item: { item: string; cost: number };
  ai_recommendation: string;
}

interface ProfitabilityItem {
  item: string;
  selling_price: number;
  cost_to_make: number;
  margin: number;
  margin_percent: number;
  rating: string;
}

export default function CeoDashboard() {
  const [healthData, setHealthData] = useState<HealthScore | null>(null);
  const [targetData, setTargetData] = useState<TargetStatus | null>(null);
  const [summaryData, setSummaryData] = useState<CeoSummary | null>(null);
  const [profitability, setProfitability] = useState<ProfitabilityItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [health, target, summary, profit] = await Promise.all([
        fetch(getApiUrl('/api/v1/restaurant/stats/insights/health-score')).then(res => res.json()),
        fetch(getApiUrl('/api/v1/restaurant/stats/target/status')).then(res => res.json()),
        fetch(getApiUrl('/api/v1/restaurant/stats/ceo-summary')).then(res => res.json()),
        fetch(getApiUrl('/api/v1/restaurant/menu/profitability')).then(res => res.json())
      ]);
      setHealthData(health);
      setTargetData(target);
      setSummaryData(summary);
      setProfitability(profit.items || []);
    } catch (error) {
      console.error("Failed to fetch CEO insights", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // Auto-refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  if (loading && !healthData) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Assembling CEO Intelligence Suite...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-tr from-amber-400 to-yellow-600 p-3 rounded-2xl shadow-lg ring ring-amber-100">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight flex items-center">
              CEO COMMAND CENTER
              <span className="ml-3 px-2 py-0.5 bg-gray-900 text-white text-[10px] uppercase tracking-tighter rounded font-black">Admin Level 4</span>
            </h1>
            <p className="text-gray-500 font-medium text-sm flex items-center">
              Real-time strategic oversight for Pizza Blitz Corp.
              <span className="ml-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={async () => {
              const res = await fetch(getApiUrl('/api/v1/restaurant/stats/insights/weekly-summary-report'));
              const data = await res.json();
              window.open(data.whatsapp_link, '_blank');
            }}
            className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-2xl shadow-lg hover:bg-emerald-700 transition-all text-xs font-black uppercase tracking-widest"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Cast Weekly Pulse</span>
          </button>
          
          <button 
            onClick={fetchData} 
            className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-[10px] font-black text-gray-700 hover:text-indigo-600 uppercase tracking-widest"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Force Sync Architecture</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Health Gauge Area */}
        <div className="lg:col-span-4 bg-white p-10 rounded-[3rem] shadow-xl shadow-indigo-50 border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-10">Operational Health Index</h3>
          
          <div className="relative w-64 h-64 mb-8">
            {/* Circular Gauge SVG */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 110}
                strokeDashoffset={2 * Math.PI * 110 * (1 - (healthData?.health_score || 0) / 100)}
                strokeLinecap="round"
                className={`transition-all duration-1000 ${
                  healthData?.color === 'green' ? 'text-emerald-500' :
                  healthData?.color === 'blue' ? 'text-indigo-500' :
                  healthData?.color === 'yellow' ? 'text-amber-500' : 'text-rose-500'
                }`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-7xl font-black text-gray-900 leading-none">{healthData?.health_score}</span>
              <span className="text-xs font-black text-gray-400 mt-2 uppercase tracking-tight">/ 100 Points</span>
            </div>
          </div>

          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest mb-4 ring-4 ring-opacity-10 ${
              healthData?.color === 'green' ? 'bg-emerald-50 text-emerald-600 ring-emerald-100' :
              healthData?.color === 'blue' ? 'bg-indigo-50 text-indigo-600 ring-indigo-100' :
              healthData?.color === 'yellow' ? 'bg-amber-50 text-amber-600 ring-amber-100' : 'bg-rose-50 text-rose-600 ring-rose-100'
            }`}>
              {healthData?.grade}
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs">{healthData?.recommendation}</p>
          </div>
        </div>

        {/* Breakdown & Target Metrics */}
        <div className="lg:col-span-8 flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Target Status Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-[3rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Target className="w-24 h-24" />
               </div>
               <h3 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-6">Monthly Revenue Target</h3>
               <div className="flex justify-between items-end mb-4">
                 <div>
                    <p className="text-4xl font-black tracking-tighter italic">₹{targetData?.revenue_so_far.toLocaleString()}</p>
                    <p className="text-[10px] font-bold text-indigo-300 uppercase opacity-70">Current Intake ({targetData?.month})</p>
                 </div>
                 <div className="text-right">
                    <p className="text-2xl font-black text-white">{targetData?.target_achieved_pct}%</p>
                    <p className="text-[10px] font-bold text-indigo-300 uppercase opacity-70">Achieved</p>
                 </div>
               </div>
               
               <div className="w-full bg-indigo-500/20 h-4 rounded-full mb-8 backdrop-blur-md border border-white/5">
                 <div 
                   className="bg-gradient-to-r from-indigo-400 to-indigo-300 h-full rounded-full transition-all duration-1000 relative shadow-[0_0_20px_rgba(129,140,248,0.5)]" 
                   style={{ width: `${Math.min(100, targetData?.target_achieved_pct || 0)}%` }}
                 >
                   <div className="absolute right-0 top-0 bottom-0 w-1 bg-white ring ring-indigo-400"></div>
                 </div>
               </div>

               <div className="flex items-center space-x-3 text-sm p-4 bg-white/5 rounded-2xl border border-white/10 italic">
                  {targetData?.on_track ? <TrendingUp className="text-emerald-400 w-4 h-4" /> : <TrendingDown className="text-amber-400 w-4 h-4" />}
                  <span className="font-bold opacity-90">{targetData?.status_message}</span>
               </div>
            </div>

            {/* WOW Summary Card */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-100 relative">
               <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Week-on-Week Velocity</h3>
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-5xl font-black text-gray-900">₹{summaryData?.this_week_revenue.toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] font-black text-gray-400 mt-2 uppercase tracking-tighter italic">7-Day Aggregated Revenue</p>
                  </div>
                  <div className={`p-4 rounded-3xl flex flex-col items-center ${summaryData?.direction === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {summaryData?.direction === 'up' ? <ArrowUpRight className="w-8 h-8" /> : <ArrowDownRight className="w-8 h-8" />}
                    <span className="text-xs font-black mt-1">{summaryData?.week_on_week_change}%</span>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Profit Margin</p>
                    <p className="text-lg font-black text-gray-800">{summaryData?.profit_margin}%</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Top Loss Factor</p>
                    <p className="text-sm font-black text-rose-500 truncate">{summaryData?.top_waste_item.item}</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Health Breakdown Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.values(healthData?.breakdown || {}).map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-xl font-black text-gray-900 mb-2">{item.value}{item.label.includes('%') ? '%' : ''}</p>
                <div className="w-full h-1 bg-gray-100 rounded-full">
                   <div 
                    className={`h-full rounded-full ${item.score > 20 ? 'bg-emerald-500' : item.score > 10 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${(item.score / 25) * 100}%` }}
                   ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Profitability Matrix */}
      <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
        <div className="p-10 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-black text-gray-900 italic tracking-tighter">Profitability Matrix</h3>
            <p className="text-gray-500 text-xs font-bold uppercase opacity-80 mt-1">Algorithm-Calculated Menu Margins</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-3xl flex items-center space-x-3">
             <Scale className="text-indigo-600 w-6 h-6" />
             <div className="text-xs font-black text-indigo-900 leading-tight">
                DYNAMIC COST<br/>ANALYSIS ACTIVE
             </div>
          </div>
        </div>
        
        <div className="overflow-x-auto p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-5">Product Identity</th>
                <th className="px-6 py-5">Retail Price</th>
                <th className="px-6 py-5">Material Cost</th>
                <th className="px-6 py-5">Gross Yield</th>
                <th className="px-6 py-5">Margin %</th>
                <th className="px-6 py-5 text-right">Audit Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {profitability.map((item, idx) => (
                <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-black text-gray-800 tracking-tight">{item.item}</td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-600">₹{item.selling_price}</td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-400 italic">₹{item.cost_to_make}</td>
                  <td className="px-6 py-5 text-sm font-black text-emerald-600">₹{item.margin}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-2">
                       <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500" style={{ width: `${item.margin_percent}%` }}></div>
                       </div>
                       <span className="text-sm font-black text-gray-900">{item.margin_percent}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      item.rating.includes('⭐') ? 'bg-amber-100 text-amber-700' :
                      item.rating.includes('✅') ? 'bg-emerald-100 text-emerald-700' :
                      item.rating.includes('⚠️') ? 'bg-indigo-100 text-indigo-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {item.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Day Performance Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-gray-50 flex items-center space-x-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="bg-emerald-500 p-4 rounded-3xl shadow-lg ring ring-emerald-100">
               <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Peak Performance</p>
               <p className="text-xl font-black text-gray-900">{summaryData?.best_day.date}</p>
               <p className="text-xs font-bold text-emerald-600 italic">₹{summaryData?.best_day.revenue.toLocaleString()}</p>
            </div>
         </div>

         <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-gray-50 flex items-center space-x-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="bg-amber-500 p-4 rounded-3xl shadow-lg ring ring-amber-100">
               <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <div>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Low Velocity Point</p>
               <p className="text-xl font-black text-gray-900">{summaryData?.worst_day.date}</p>
               <p className="text-xs font-bold text-amber-600 italic">₹{summaryData?.worst_day.revenue.toLocaleString()}</p>
            </div>
         </div>

         <div className="bg-indigo-600 p-8 rounded-[3rem] shadow-2xl shadow-indigo-200 flex flex-col justify-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="flex items-center space-x-3 mb-2">
               <Info className="w-5 h-5 text-indigo-300" />
               <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">AI Strategic Counsel</p>
            </div>
            <p className="text-sm font-bold leading-relaxed italic pr-4">"{summaryData?.ai_recommendation}"</p>
         </div>
      </div>
    </div>
  );
}
