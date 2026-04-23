"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { CheckCircle2, Sparkles, ShieldCheck, Zap } from "lucide-react";

/* ─── UI Constants (Ascetic Authority) ─────────────────────────────────── */
const T = {
  obsidian: "#0c0c0e",
  surface: "#14141a",
  border: "#2a2a3a",
  gold: "#c9a84c",
  goldDim: "#7d6530",
  cream: "#f0e6cc",
  muted: "#7a7a8a",
};

export default function Offer299Page() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
  });

  useEffect(() => {
    // Load Cashfree SDK
    const s = document.createElement("script");
    s.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { if (document.body.contains(s)) document.body.removeChild(s); };
  }, []);

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.full_name || !formData.email || !formData.whatsapp) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/payment/create-guest-order", {
        ...formData,
        subject_id: "focused_portal_299"
      });

      const cf = (window as any).Cashfree;
      if (cf) {
        const cashfree = cf({ mode: "production" }); // Assuming production as per project state
        cashfree.checkout({ 
          paymentSessionId: res.data.payment_session_id, 
          redirectTarget: "_self" 
        });
      } else {
        window.location.href = `https://payments.cashfree.com/forms/session/${res.data.payment_session_id}`;
      }
    } catch (err: any) {
      console.error("Payment initialization failed", err);
      alert("Payment failed to initialize. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      background: T.obsidian, 
      minHeight: "100vh", 
      color: T.cream, 
      fontFamily: "var(--font-geist-sans), sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        
        {/* Header Section */}
        <header style={{ marginBottom: 40 }}>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: 8, 
            padding: "8px 16px", 
            background: `${T.gold}15`, 
            borderRadius: 30,
            border: `1px solid ${T.gold}33`,
            marginBottom: 24
          }}>
            <Sparkles size={14} color={T.gold} />
            <span style={{ fontSize: 12, fontWeight: 700, color: T.gold, letterSpacing: "0.1em" }}>LIMITED OFFER</span>
          </div>
          <h1 style={{ 
            fontSize: 42, 
            fontWeight: 900, 
            lineHeight: 1.1, 
            marginBottom: 16,
            color: T.cream
          }}>
            30 दिन। <br/>
            एक सिस्टम। <br/>
            <span style={{ color: T.gold }}>₹299।</span>
          </h1>
        </header>

        {/* Feature List */}
        <div style={{ 
          background: T.surface, 
          border: `1px solid ${T.border}`,
          borderRadius: 20, 
          padding: "32px",
          marginBottom: 32,
          textAlign: "left",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: `${T.gold}22`, borderRadius: "50%", padding: 6 }}>
                 <CheckCircle2 size={18} color={T.gold} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>Smart Revision Tracker</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: `${T.gold}22`, borderRadius: "50%", padding: 6 }}>
                <Zap size={18} color={T.gold} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>Daily MCQ Practice</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: `${T.gold}22`, borderRadius: "50%", padding: 6 }}>
                <ShieldCheck size={18} color={T.gold} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>Gap Identifier</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <form onSubmit={handleEnroll} style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: 16,
          background: T.surface,
          padding: "32px",
          borderRadius: 20,
          border: `1px solid ${T.border}`
        }}>
          <input 
            type="text" 
            placeholder="Full Name"
            required
            value={formData.full_name}
            onChange={e => setFormData({...formData, full_name: e.target.value})}
            style={{
              padding: "16px 20px",
              background: T.obsidian,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              color: T.cream,
              fontSize: 15,
              outline: "none"
            }}
          />
          <input 
            type="email" 
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            style={{
              padding: "16px 20px",
              background: T.obsidian,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              color: T.cream,
              fontSize: 15,
              outline: "none"
            }}
          />
           <input 
            type="tel" 
            placeholder="WhatsApp Number"
            required
            value={formData.whatsapp}
            onChange={e => setFormData({...formData, whatsapp: e.target.value})}
            style={{
              padding: "16px 20px",
              background: T.obsidian,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              color: T.cream,
              fontSize: 15,
              outline: "none"
            }}
          />

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              marginTop: 8,
              padding: "18px", 
              background: T.gold, 
              color: T.obsidian, 
              fontWeight: 900, 
              fontSize: 18, 
              border: "none", 
              borderRadius: 12, 
              cursor: "pointer", 
              boxShadow: `0 8px 24px ${T.gold}33`,
              opacity: loading ? 0.7 : 1,
              transition: "transform 0.2s"
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            {loading ? "PROCESSING..." : "Enroll Now — ₹299"}
          </button>
          
          <p style={{ fontSize: 12, color: T.muted, marginTop: 8 }}>
            Instant access after successful payment.
          </p>
        </form>

        <footer style={{ marginTop: 40, color: T.muted, fontSize: 13 }}>
          © EduEcosystem By Sarit Classes
        </footer>
      </div>
    </div>
  );
}
