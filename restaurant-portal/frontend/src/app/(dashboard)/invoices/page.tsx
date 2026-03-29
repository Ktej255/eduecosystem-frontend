"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, Search, Printer, Download, 
  ExternalLink, User, CreditCard, Loader2, X
} from 'lucide-react';
import { getApiUrl } from '@/lib/api';

interface Invoice {
  id: number;
  invoice_number: string;
  date: string;
  customer_name: string;
  customer_gstin?: string;
  subtotal: number;
  cgst: number;
  sgst: number;
  total: number;
  payment_method: string;
  items: any[];
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/orders/invoices'), { cache: 'no-store' });
      const data = await res.json();
      setInvoices(data);
    } catch (error) {
      console.error("Failed to fetch invoices", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredInvoices = invoices.filter(inv => 
    inv.invoice_number.toLowerCase().includes(search.toLowerCase()) ||
    inv.customer_name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <div className="p-12 text-center animate-pulse"><Loader2 className="animate-spin mx-auto w-12 h-12 text-indigo-600 mb-4" /> Loading Ledger...</div>;

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">TAX INVOICES</h1>
          <p className="text-gray-500 font-medium italic">Compliance and billing archive.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search invoice or customer..."
            className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-4 py-3 font-bold text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 bg-gray-50/50">
              <th className="px-8 py-6">Invoice #</th>
              <th className="px-8 py-6">Date</th>
              <th className="px-8 py-6">Customer</th>
              <th className="px-8 py-6">Total</th>
              <th className="px-8 py-6">Method</th>
              <th className="px-8 py-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredInvoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-8 py-6 font-black text-gray-900">{inv.invoice_number}</td>
                <td className="px-8 py-6 text-sm font-bold text-gray-500">{new Date(inv.date).toLocaleDateString()}</td>
                <td className="px-8 py-6">
                   <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 text-gray-300" />
                      <span className="text-sm font-black text-gray-700">{inv.customer_name}</span>
                   </div>
                </td>
                <td className="px-8 py-6 text-sm font-black text-indigo-600">₹{inv.total.toLocaleString()}</td>
                <td className="px-8 py-6">
                   <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-black uppercase tracking-tight">
                     {inv.payment_method}
                   </span>
                </td>
                <td className="px-8 py-6 text-right">
                   <button 
                    onClick={() => setSelectedInvoice(inv)}
                    className="p-2 hover:bg-gray-200 rounded-full transition-all text-gray-400 hover:text-gray-900"
                   >
                      <ExternalLink className="w-5 h-5" />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedInvoice(null)}></div>
          <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
             {/* Print header (hidden in screen) */}
             <div className="p-10 flex flex-col items-center justify-center text-center space-y-4 border-b border-dashed border-gray-200 bg-gray-50/50">
                <div className="bg-gray-900 text-white p-4 rounded-3xl mb-2">
                   <FileText className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tighter">PIZZA BLITZ</h2>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest space-y-1">
                   <p>TAX INVOICE: {selectedInvoice.invoice_number}</p>
                   <p>DATE: {new Date(selectedInvoice.date).toLocaleDateString()}</p>
                </div>
                <button onClick={() => setSelectedInvoice(null)} className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-all print:hidden">
                   <X className="w-6 h-6 text-gray-400" />
                </button>
             </div>

             <div className="p-10 space-y-8">
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Bill To</h3>
                      <p className="text-sm font-black text-gray-800">{selectedInvoice.customer_name}</p>
                      {selectedInvoice.customer_gstin && <p className="text-[10px] font-bold text-indigo-500">GST: {selectedInvoice.customer_gstin}</p>}
                   </div>
                   <div className="text-right">
                      <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Payment</h3>
                      <p className="text-sm font-black text-gray-800 uppercase italic">{selectedInvoice.payment_method}</p>
                   </div>
                </div>

                <div className="space-y-4 border-y border-dashed border-gray-100 py-6">
                   {selectedInvoice.items && (typeof selectedInvoice.items === 'string' ? JSON.parse(selectedInvoice.items) : selectedInvoice.items).map((item: any, i: number) => (
                     <div key={i} className="flex justify-between items-center text-sm">
                        <span className="font-bold text-gray-600">{item.name} x{item.quantity}</span>
                        <span className="font-black text-gray-900">₹{item.price * item.quantity}</span>
                     </div>
                   ))}
                </div>

                <div className="space-y-2 pt-2">
                   <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>SUBTOTAL</span>
                      <span>₹{selectedInvoice.subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold text-gray-400 italic">
                      <span>CGST (2.5%)</span>
                      <span>₹{selectedInvoice.cgst.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold text-gray-400 italic">
                      <span>SGST (2.5%)</span>
                      <span>₹{selectedInvoice.sgst.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-2xl font-black text-gray-900 pt-4 mt-4 border-t-2 border-gray-900">
                      <span>TOTAL</span>
                      <span className="text-indigo-600">₹{selectedInvoice.total.toLocaleString()}</span>
                   </div>
                </div>

                <div className="flex space-x-3 pt-6 print:hidden">
                   <button 
                    onClick={handlePrint}
                    className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center space-x-2"
                   >
                      <Printer className="w-4 h-4" />
                      <span>Print Thermal</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
      
      {/* Print-only CSS */}
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          .modal-content, .modal-content * { visibility: visible; }
          .modal-content { position: absolute; left: 0; top: 0; width: 3in; }
          .print-hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
