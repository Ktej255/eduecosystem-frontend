"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Utensils, Truck, MapPin, 
  Plus, Trash2, CheckCircle, Clock, 
  Receipt, CreditCard, Banknote, Loader2, X
} from 'lucide-react';
import { getApiUrl } from '@/lib/api';

interface Table {
  id: number;
  table_number: string;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved';
  current_order_id?: number;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderRecord {
  id: number;
  order_type: string;
  table_number: string;
  total_amount: number;
  status: string;
  payment_method: string;
  created_at: string;
}

export default function OrdersPage() {
  const [tables, setTables] = useState<Table[]>([]);
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [totalToday, setTotalToday] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [showOrderPanel, setShowOrderPanel] = useState(false);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [orderType, setOrderType] = useState('dine-in');
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', quantity: 1 });
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const fetchData = async () => {
    try {
      const [tableRes, orderRes] = await Promise.all([
        fetch(getApiUrl('/api/v1/restaurant/orders/tables'), { cache: 'no-store' }),
        fetch(getApiUrl('/api/v1/restaurant/orders/today'), { cache: 'no-store' })
      ]);
      const tableData = await tableRes.json();
      const orderData = await orderRes.json();
      setTables(tableData);
      setOrders(orderData.orders || []);
      setTotalToday(orderData.total_collected_today || 0);
    } catch (error) {
      console.error("Failed to fetch order data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price) return;
    setCart([...cart, { 
      name: newItem.name, 
      price: parseFloat(newItem.price), 
      quantity: newItem.quantity 
    }]);
    setNewItem({ name: '', price: '', quantity: 1 });
  };

  const calculateSubtotal = () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const subtotal = calculateSubtotal();
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;

  const handlePlaceOrder = async (closeImmediately = false) => {
    try {
      const res = await fetch(getApiUrl('/api/v1/restaurant/orders/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order_type: orderType,
          table_number: selectedTable?.table_number,
          items: cart,
          payment_method: paymentMethod
        })
      });
      const data = await res.json();
      
      if (closeImmediately) {
        await fetch(getApiUrl(`/api/v1/restaurant/orders/${data.order_id}/close`), {
          method: 'PATCH'
        });
      }
      
      setCart([]);
      setShowOrderPanel(false);
      fetchData();
    } catch (error) {
      console.error("Failed to place order", error);
    }
  };

  if (loading) return <div className="p-12 text-center animate-pulse"><Loader2 className="animate-spin mx-auto w-12 h-12 text-indigo-600 mb-4" /> Loading POS...</div>;

  return (
    <div className="relative min-h-[85vh]">
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">TABLES & POS</h1>
            <p className="text-gray-500 font-medium italic">Active session: ₹{totalToday.toLocaleString()} collected today</p>
          </div>
          <div className="flex space-x-2">
             <button 
               onClick={() => { setSelectedTable(null); setOrderType('takeaway'); setShowOrderPanel(true); }}
               className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center"
             >
                <Plus className="w-5 h-5 mr-2" /> NEW TAKEAWAY
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table Map */}
          <div className="lg:col-span-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tables.map(table => (
                  <button 
                    key={table.id}
                    disabled={table.status === 'occupied'}
                    onClick={() => { setSelectedTable(table); setOrderType('dine-in'); setShowOrderPanel(true); }}
                    className={`p-8 rounded-[2.5rem] border-4 shadow-xl transition-all flex flex-col items-center justify-center space-y-4 ${
                      table.status === 'occupied' ? 'bg-rose-50 border-rose-100 text-rose-500 cursor-not-allowed opacity-80' : 
                      table.status === 'reserved' ? 'bg-amber-50 border-amber-100 text-amber-500' :
                      'bg-white border-transparent hover:border-emerald-100 hover:bg-emerald-50 text-emerald-600'
                    }`}
                  >
                     <Utensils className={`w-8 h-8 ${table.status === 'occupied' ? 'opacity-50' : 'animate-bounce'}`} />
                     <div className="text-center">
                        <span className="block text-2xl font-black">{table.table_number}</span>
                        <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Cap: {table.capacity}</span>
                     </div>
                     <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-full ${
                        table.status === 'available' ? 'bg-emerald-100' : 'bg-gray-100'
                     }`}>
                        {table.status}
                     </span>
                  </button>
                ))}
             </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-4 space-y-6">
             <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                   <h3 className="text-xs font-black text-gray-800 uppercase tracking-widest">Today's Orders</h3>
                   <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px] font-black">{orders.length}</span>
                </div>
                <div className="max-h-[500px] overflow-y-auto divide-y divide-gray-50 p-2">
                   {orders.map(order => (
                     <div key={order.id} className="p-4 flex justify-between items-center group hover:bg-indigo-50/10 rounded-2xl transition-all">
                        <div className="flex items-center space-x-3">
                           <div className={`p-2 rounded-xl ${order.order_type === 'dine-in' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
                              {order.order_type === 'dine-in' ? <Utensils className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                           </div>
                           <div>
                              <p className="text-xs font-black text-gray-900">#ORD-{order.id} {order.table_number && `@ ${order.table_number}`}</p>
                              <p className="text-[10px] font-bold text-gray-400 uppercase">{new Date(order.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-black text-gray-800">₹{order.total_amount}</p>
                           <span className={`text-[8px] font-black uppercase px-1.5 rounded ${order.status === 'closed' ? 'text-emerald-500' : 'text-amber-500'}`}>{order.status}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Slide-in Order Panel */}
      {showOrderPanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setShowOrderPanel(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
             <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                <div>
                   <h2 className="text-2xl font-black text-gray-900">NEW {orderType.toUpperCase()}</h2>
                   <p className="text-xs font-bold text-gray-400 tracking-widest">{selectedTable ? `TABLE ${selectedTable.table_number}` : 'COUNTER ORDER'}</p>
                </div>
                <button onClick={() => setShowOrderPanel(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                   <X className="w-6 h-6 text-gray-400" />
                </button>
             </div>

             <div className="flex-grow overflow-y-auto p-8 space-y-8">
                {/* Item Adder */}
                <div className="space-y-4">
                   <div className="grid grid-cols-12 gap-2">
                      <input 
                        className="col-span-6 bg-gray-50 border-none rounded-xl p-3 text-sm font-bold" 
                        placeholder="Item Name" 
                        value={newItem.name}
                        onChange={e => setNewItem({...newItem, name: e.target.value})}
                      />
                      <input 
                        className="col-span-3 bg-gray-50 border-none rounded-xl p-3 text-sm font-bold" 
                        placeholder="Price" 
                        type="number"
                        value={newItem.price}
                        onChange={e => setNewItem({...newItem, price: e.target.value})}
                      />
                      <button 
                        onClick={handleAddItem}
                        className="col-span-3 bg-gray-900 text-white rounded-xl flex items-center justify-center"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                   </div>
                </div>

                {/* Cart Table */}
                <div className="space-y-4">
                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Order Items</h3>
                   <div className="space-y-3">
                      {cart.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                           <div className="font-black text-gray-800 text-sm">
                              {item.name} <span className="text-indigo-600 ml-1">x{item.quantity}</span>
                           </div>
                           <div className="flex items-center space-x-4 font-black">
                              <span className="text-gray-900 text-sm">₹{item.price * item.quantity}</span>
                              <button onClick={() => setCart(cart.filter((_, i) => i !== idx))}><Trash2 className="w-4 h-4 text-rose-400" /></button>
                           </div>
                        </div>
                      ))}
                      {cart.length === 0 && <p className="text-center text-gray-400 italic text-sm py-4">Your cart is empty</p>}
                   </div>
                </div>

                {/* Summary */}
                <div className="p-6 bg-gray-50 rounded-3xl space-y-3 border border-gray-100">
                   <div className="flex justify-between text-sm font-bold text-gray-500">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-sm font-bold text-gray-500">
                      <span>GST (5%)</span>
                      <span>₹{tax.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-xl font-black text-gray-900 pt-3 border-t border-gray-200">
                      <span>TOTAL</span>
                      <span className="text-indigo-600">₹{total.toLocaleString()}</span>
                   </div>
                </div>
             </div>

             <div className="p-8 border-t border-gray-100 space-y-4">
                <div className="flex space-x-2 mb-4">
                   {['Cash', 'UPI', 'Card'].map(m => (
                     <button 
                        key={m}
                        onClick={() => setPaymentMethod(m)}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          paymentMethod === m ? 'bg-gray-900 text-white shadow-xl' : 'bg-gray-50 text-gray-400'
                        }`}
                     >
                        {m}
                     </button>
                   ))}
                </div>
                <div className="flex space-x-3">
                   <button 
                    onClick={() => handlePlaceOrder(false)}
                    className="flex-1 py-4 border-2 border-gray-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-50 active:scale-95 transition-all"
                   >
                     Send to Kitchen
                   </button>
                   <button 
                    onClick={() => handlePlaceOrder(true)}
                    className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-emerald-100 hover:bg-emerald-600 active:scale-95 transition-all"
                   >
                     Collect & Close
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
