"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

/* ─── Design Tokens: Ascetic Authority ──────────────────────────────────────
   Obsidian background + antique gold accents — zero purple anywhere.
   ─────────────────────────────────────────────────────────────────────────── */
const T = {
  obsidian: "#0c0c0e",
  surface: "#14141a",
  surfaceHigh: "#1c1c26",
  border: "#2a2a3a",
  gold: "#c9a84c",
  goldLight: "#e4c97e",
  goldDim: "#7d6530",
  cream: "#f0e6cc",
  muted: "#7a7a8a",
  danger: "#c0392b",
};

/* ─── Social Proof Data ─────────────────────────────────────────────────────*/
const TESTIMONIALS = [
  { name: "Priya S.", rank: "UPSC Prelims 2024 Qualifier", text: "The AI caught exactly where my polity preparation was weak. Unreal clarity in 30 minutes." },
  { name: "Arjun M.", rank: "IAS Aspirant, Delhi", text: "I've spent lakhs on coaching. This single session was more targeted than six months of class." },
  { name: "Sneha R.", rank: "State PCS Final Year", text: "Tej bhai's method is different. The diagnostic AI maps your actual gaps — not generic gaps." },
];

const STATS = [
  { value: "2,400+", label: "Aspirants Diagnosed" },
  { value: "87%", label: "Report Clarity Within Session" },
  { value: "₹0", label: "Cost of Doing Nothing" },
];

/* ─── Form State Type ────────────────────────────────────────────────────────*/
interface FormState {
  name: string;
  email: string;
  whatsapp: string;
}

/* ─── Countdown Timer ────────────────────────────────────────────────────────*/
function useCountdown(endTime: Date) {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = endTime.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ h: 0, m: 0, s: 0 });
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  return timeLeft;
}

/* ─── Particle Background ─────────────────────────────────────────────────── */
function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vy: -(Math.random() * 0.3 + 0.1),
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity})`;
        ctx.fill();
        p.y += p.vy;
        if (p.y < 0) p.y = canvas.height;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────────*/
export default function FunnelLandingPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", whatsapp: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"form" | "processing" | "redirect">("form");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Offer expires midnight IST
  const offerEnd = useRef((() => {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d;
  })());
  const countdown = useCountdown(offerEnd.current);

  // Rotate testimonials
  useEffect(() => {
    const id = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.whatsapp.trim()) {
      setError("Please fill all fields to continue.");
      return;
    }
    const phoneClean = form.whatsapp.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      setError("Enter a valid WhatsApp number.");
      return;
    }
    setError("");
    setLoading(true);
    setStep("processing");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payment/create-guest-order`,
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          whatsapp: phoneClean,
          amount: 99,
          product_id: "vsl_funnel_99",
        }
      );

      const { payment_session_id, order_id } = res.data;

      // Load Cashfree JS SDK and open payment modal
      const cf = (window as unknown as Record<string, unknown>).Cashfree as {
        init: (cfg: Record<string, unknown>) => void;
        open: (cfg: Record<string, unknown>) => void;
      } | undefined;

      if (cf) {
        cf.init({ mode: "production" });
        cf.open({
          paymentSessionId: payment_session_id,
          redirectTarget: "_self",
          onSuccess: () => {
            setStep("redirect");
            window.location.href = `/funnel/pending?order_id=${order_id}&email=${encodeURIComponent(form.email)}&token=${res.data.session_token || ""}`;
          },
          onFailure: () => {
            setError("Payment was not completed. Please try again.");
            setStep("form");
            setLoading(false);
          },
        });
      } else {
        // Fallback: redirect to Cashfree hosted page
        window.location.href = `https://payments.cashfree.com/forms/session/${payment_session_id}`;
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStep("form");
      setLoading(false);
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* Load Cashfree SDK */}
      <script src="https://sdk.cashfree.com/js/v3/cashfree.js" async />

      <div style={{ background: T.obsidian, minHeight: "100vh", color: T.cream, fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

        {/* ── Urgency Banner ─────────────────────────────────────────────── */}
        <div style={{ background: T.goldDim, textAlign: "center", padding: "8px 16px", fontSize: 13, letterSpacing: "0.04em" }}>
          <span style={{ color: T.goldLight }}>⚡ OFFER CLOSES IN &nbsp;</span>
          <span style={{ color: "#fff", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
            {pad(countdown.h)}:{pad(countdown.m)}:{pad(countdown.s)}
          </span>
          <span style={{ color: T.goldLight }}>&nbsp;— Only ₹99 today</span>
        </div>

        {/* ── Hero Section ───────────────────────────────────────────────── */}
        <section style={{ position: "relative", overflow: "hidden", padding: "64px 20px 48px", textAlign: "center" }}>
          <GoldParticles />

          {/* Radial glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600, height: 600,
            background: `radial-gradient(circle, ${T.goldDim}22 0%, transparent 70%)`,
            pointerEvents: "none", zIndex: 0,
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
            {/* Badge */}
            <span style={{
              display: "inline-block", border: `1px solid ${T.gold}`,
              color: T.gold, fontSize: 11, letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "4px 14px",
              borderRadius: 100, marginBottom: 24,
            }}>
              AI-Powered UPSC Diagnostic
            </span>

            <h1 style={{ fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", color: T.cream }}>
              What If Your UPSC Problem<br />
              <span style={{ color: T.gold }}>Was Found in 30 Minutes?</span>
            </h1>

            <p style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#b0a090", lineHeight: 1.7, marginBottom: 32, maxWidth: 560, marginInline: "auto" }}>
              Skip the guessing. A 5-step AI session maps your exact gaps in Polity, History, and Strategy — then shows you what to do next.
            </p>

            {/* Stats Row */}
            <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 40 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: T.gold }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: T.muted, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Arrow */}
            <div style={{ color: T.gold, fontSize: 28, animation: "bounce 1.5s infinite" }}>↓</div>
          </div>
        </section>

        {/* ── What You Get ─────────────────────────────────────────────────── */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 48px" }}>
          <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 700, color: T.cream, marginBottom: 28 }}>
            Your 30-Minute AI Diagnostic
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "🧠", title: "Step 1", desc: "5-min AI diagnostic — tell it where you're stuck" },
              { icon: "🎬", title: "Step 2", desc: "Targeted video on your biggest weak area" },
              { icon: "💬", title: "Step 3", desc: "AI discusses what you just watched with you" },
              { icon: "🎬", title: "Step 4", desc: "Second video — strategy & answer writing" },
              { icon: "🔥", title: "Step 5", desc: "Tej's personal intro + your next move" },
            ].map(item => (
              <div key={item.title} style={{
                background: T.surface, border: `1px solid ${T.border}`,
                borderRadius: 12, padding: "20px 16px",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = T.goldDim)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = T.border)}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ color: T.gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: "#a09080", fontSize: 14, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────────── */}
        <section style={{ background: T.surface, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, padding: "40px 20px" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <div style={{ minHeight: 100, transition: "opacity 0.4s" }}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: T.cream, fontStyle: "italic", marginBottom: 16 }}>
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>
              <div style={{ color: T.gold, fontWeight: 700, fontSize: 14 }}>{TESTIMONIALS[activeTestimonial].name}</div>
              <div style={{ color: T.muted, fontSize: 12 }}>{TESTIMONIALS[activeTestimonial].rank}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer",
                    background: i === activeTestimonial ? T.gold : T.border, transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Payment Form ──────────────────────────────────────────────────── */}
        <section id="get-access" style={{ maxWidth: 480, margin: "0 auto", padding: "56px 20px 80px" }}>
          <div style={{
            background: T.surface, border: `1px solid ${T.gold}44`,
            borderRadius: 16, padding: "36px 28px",
            boxShadow: `0 0 60px ${T.gold}18`,
          }}>
            {/* Price Block */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ color: T.muted, fontSize: 13, textDecoration: "line-through", marginBottom: 4 }}>₹5,000</div>
              <div style={{ fontSize: 52, fontWeight: 900, color: T.gold, lineHeight: 1 }}>₹99</div>
              <div style={{ color: T.muted, fontSize: 13, marginTop: 4 }}>One-time · Full 30-min session · Instant access</div>
            </div>

            {step === "redirect" ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>✅</div>
                <p style={{ color: T.gold, fontWeight: 600 }}>Payment confirmed. Taking you in…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {(["name", "email", "whatsapp"] as const).map(field => (
                  <div key={field} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", color: T.muted, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                      {field === "whatsapp" ? "WhatsApp Number" : field === "email" ? "Email Address" : "Full Name"}
                    </label>
                    <input
                      id={`funnel-${field}`}
                      type={field === "email" ? "email" : field === "whatsapp" ? "tel" : "text"}
                      placeholder={field === "name" ? "Your full name" : field === "email" ? "you@email.com" : "10-digit mobile"}
                      value={form[field]}
                      onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                      disabled={loading}
                      style={{
                        width: "100%", boxSizing: "border-box",
                        background: T.surfaceHigh, border: `1px solid ${T.border}`,
                        color: T.cream, borderRadius: 8, padding: "12px 14px",
                        fontSize: 15, outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = T.gold)}
                      onBlur={e => (e.currentTarget.style.borderColor = T.border)}
                    />
                  </div>
                ))}

                {error && (
                  <p style={{ color: T.danger, fontSize: 13, marginBottom: 12, textAlign: "center" }}>{error}</p>
                )}

                <button
                  id="funnel-pay-btn"
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%", padding: "16px",
                    background: loading ? T.goldDim : `linear-gradient(135deg, #b8860b, ${T.gold}, #e4c97e)`,
                    border: "none", borderRadius: 10, cursor: loading ? "not-allowed" : "pointer",
                    color: "#0c0c0e", fontWeight: 800, fontSize: 17,
                    letterSpacing: "0.02em", transition: "opacity 0.2s, transform 0.15s",
                    transform: "scale(1)",
                  }}
                  onMouseEnter={e => !loading && (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {loading ? "Opening Payment…" : "Start My Diagnostic — ₹99"}
                </button>

                <p style={{ textAlign: "center", fontSize: 11, color: T.muted, marginTop: 12 }}>
                  🔒 Secured by Cashfree · UPI, Cards, NetBanking accepted
                </p>
              </form>
            )}
          </div>

          {/* Guarantee */}
          <div style={{ textAlign: "center", marginTop: 24, color: T.muted, fontSize: 13 }}>
            <span style={{ color: T.gold }}>★</span> 100% clarity guaranteed or we'll personally walk through it with you.
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────────────── */}
        <footer style={{ borderTop: `1px solid ${T.border}`, padding: "24px 20px", textAlign: "center" }}>
          <p style={{ color: T.muted, fontSize: 12, margin: 0 }}>
            © 2026 EduEcosystem · Sarit Classes · &nbsp;
            <a href="/privacy" style={{ color: T.muted, textDecoration: "underline" }}>Privacy</a>
            &nbsp;·&nbsp;
            <a href="/terms" style={{ color: T.muted, textDecoration: "underline" }}>Terms</a>
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        input::placeholder { color: #4a4a5a; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>
    </>
  );
}
