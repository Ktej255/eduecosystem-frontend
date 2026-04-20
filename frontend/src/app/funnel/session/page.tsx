"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import { Send, User, Bot, Sparkles, Clock, ArrowRight } from "lucide-react";

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

interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ─── VideoStep Component ───────────────────────────────────────────────── */
function VideoStep({ 
  playerId = "vsl-player-1",
  videoId, 
  title, 
  nextStepLabel, 
  onComplete,
  sessionData,
  autoAdvance = false
}: { 
  playerId?: string;
  videoId: string; 
  title: string; 
  nextStepLabel: string; 
  onComplete: () => void;
  sessionData: any;
  autoAdvance?: boolean;
}) {
  const playerRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Ensure YouTube API is loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player(playerId, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          enablejsapi: 1,
          showinfo: 0
        },
        events: {
          onStateChange: (event: any) => {
            if (autoAdvance && event.data === (window as any).YT.PlayerState.ENDED) {
              onComplete();
            }
          }
        }
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    const interval = setInterval(() => {
      if (playerRef.current?.getCurrentTime) {
        const current = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        if (duration > 0) {
          setProgress((current / duration) * 100);
        }
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      playerRef.current?.destroy?.();
    };
  }, [videoId, playerId, autoAdvance, onComplete]);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <header style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: T.gold }} />
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: T.gold }}>{title}</span>
      </header>
      <div style={{ 
        position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", 
        background: "#000", borderRadius: 8, border: `2px solid ${T.gold}`,
        boxShadow: `0 0 25px ${T.gold}44`
      }}>
        <div id={playerId} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
      </div>
      {!autoAdvance && (
        <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
          <button 
            onClick={onComplete}
            style={{ 
              background: T.gold, color: T.obsidian, fontWeight: 900, 
              padding: "18px 36px", borderRadius: 8, border: "none", 
              cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
              boxShadow: `0 4px 20px ${T.gold}33`, transition: "transform 0.2s",
              opacity: progress > 80 ? 1 : 0.7
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {nextStepLabel} <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── ChatStep Component ───────────────────────────────────────────────── */
function ChatStep({ title, openingMessage, step, token, sessionData, onComplete, transitionPhrase }: any) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "assistant", content: openingMessage }]);
  }, [openingMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await api.post(`/funnel/session/${token}/chat`, { step, message: userMsg });
      const aiReply = res.data.reply;
      setMessages(prev => [...prev, { role: "assistant", content: aiReply }]);

      if (res.data.is_complete || aiReply.toLowerCase().includes(transitionPhrase.toLowerCase())) {
        setTimeout(onComplete, 2000);
      }
    } catch (err) {
      console.error("Chat error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "calc(100vh - 70px)", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "16px 24px", borderBottom: `1px solid ${T.border}` }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: T.gold, letterSpacing: "0.05em" }}>{title}</span>
      </header>
      <main style={{ flex: 1, overflowY: "auto", padding: "40px 20px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", gap: 16, flexDirection: msg.role === "assistant" ? "row" : "row-reverse" }}>
              <div style={{ 
                width: 36, height: 36, borderRadius: "50%", background: msg.role === "assistant" ? T.goldDim : T.surface,
                display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${T.gold}44`
              }}>
                {msg.role === "assistant" ? <Sparkles size={18} color={T.gold} /> : <User size={18} color={T.muted} />}
              </div>
              <div style={{ 
                maxWidth: "85%", padding: "16px 20px", borderRadius: 16, lineHeight: 1.65, fontSize: 15,
                background: msg.role === "assistant" ? T.surface : "transparent",
                border: msg.role === "assistant" ? `1px solid ${T.border}` : `1px solid ${T.gold}44`,
                color: msg.role === "assistant" ? T.cream : T.gold,
                boxShadow: msg.role === "assistant" ? "0 4px 20px rgba(0,0,0,0.3)" : "none"
              }}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && <div style={{ color: T.muted, fontSize: 13, paddingLeft: 52 }}>Tej AI is thinking...</div>}
          <div ref={scrollRef} />
        </div>
      </main>
      <footer style={{ padding: "24px 20px 40px", background: `linear-gradient(to top, ${T.obsidian}, transparent)` }}>
        <form onSubmit={handleSend} style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <input 
            value={input} onChange={e => setInput(e.target.value)}
            placeholder="Share your thoughts..." disabled={loading}
            style={{ 
              width: "100%", background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 30, padding: "16px 24px", color: T.cream, outline: "none", fontSize: 15,
              boxShadow: "0 0 30px rgba(0,0,0,0.4)"
            }}
          />
          <button type="submit" disabled={loading || !input.trim()} style={{ 
            position: "absolute", right: 8, top: 8, background: T.gold, border: "none", 
            borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", 
            cursor: "pointer", opacity: loading ? 0.5 : 1
          }}>
            <Send size={16} color="#000" />
          </button>
        </form>
      </footer>
    </div>
  );
}

/* ─── OfferStep Component (Final Approved) ──────────────────────────────── */
function OfferStep({ token, sessionData, T }: any) {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [declined, setDeclined] = useState(false);
  const OFFER_DURATION = 300; 

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { if (document.body.contains(s)) document.body.removeChild(s); };
  }, []);

  useEffect(() => {
    const initOffer = async () => {
      try {
        let res = await api.get(`/funnel/session/${token}`);
        let shownAt = res.data.offer_shown_at;
        if (!shownAt) {
          await api.patch(`/funnel/session/${token}/step`, { step: 7 });
          res = await api.get(`/funnel/session/${token}`);
          shownAt = res.data.offer_shown_at;
        }
        if (shownAt) {
          const tick = () => {
            const elapsed = Math.floor((Date.now() - new Date(shownAt).getTime()) / 1000);
            setRemaining(Math.max(0, OFFER_DURATION - elapsed));
          };
          tick();
          const id = setInterval(tick, 1000);
          return () => clearInterval(id);
        }
      } catch (err) { console.error("Offer init failed", err); }
    };
    initOffer();
  }, [token]);

  const handlePay = async () => {
    if (loading || (remaining !== null && remaining <= 0)) return;
    setLoading(true);
    try {
      const res = await api.post("/payment/create-guest-order", {
        full_name: sessionData.name,
        email: sessionData.email,
        whatsapp: sessionData.phone || sessionData.whatsapp,
        subject_id: "focused_portal_2500"
      });
      const cf = (window as any).Cashfree;
      if (cf) {
        cf({ mode: "sandbox" }).checkout({ paymentSessionId: res.data.payment_session_id, redirectTarget: "_self" });
      } else {
        window.location.href = `https://payments.cashfree.com/forms/session/${res.data.payment_session_id}`;
      }
    } catch (err) { alert("Initialization failed. Please refresh."); } finally { setLoading(false); }
  };

  const handleDecline = async () => {
    setDeclined(true);
    try { await api.patch(`/funnel/session/${token}/step`, { step: 7, declined: true }); } catch (e) {}
  };

  if (remaining === null) return <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: T.gold }}>Preparing your offer...</div>;
  if (remaining <= 0) return <div style={{ padding: 100, textAlign: "center", color: T.muted }}><h2>OFFER EXPIRED</h2></div>;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 20px" }}>
      <header style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ border: `1px solid ${T.gold}44`, display: "inline-block", padding: "4px 12px", borderRadius: 4, color: T.gold, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 16 }}>STEP 7/7: YOUR FINAL STEP</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: T.cream }}>Imagine what <span style={{ color: T.gold }}>30 days</span> looks like.</h1>
      </header>
      <div style={{ background: T.surface, border: `2px solid ${T.gold}`, borderRadius: 20, padding: 48, position: "relative", boxShadow: `0 0 40px ${T.gold}15` }}>
        <div style={{ position: "absolute", top: 20, right: 24, background: "#000", color: T.gold, padding: "6px 14px", borderRadius: 6, fontFamily: "monospace", fontSize: 18, fontWeight: 700 }}>{Math.floor(remaining/60)}:{(remaining%60).toString().padStart(2, "0")}</div>
        <p style={{ color: "#b0a090", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>We found the gap. Now you have a choice: go back to generic methods, or join the **Focused Portal**.</p>
        <div style={{ fontSize: 64, fontWeight: 900, color: T.gold, lineHeight: 1, marginBottom: 40 }}>₹2,500</div>
        <button onClick={handlePay} disabled={loading} style={{ width: "100%", padding: 22, background: T.gold, color: "#000", fontWeight: 900, fontSize: 20, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: `0 10px 30px ${T.gold}44` }}>{loading ? "INITIALIZING..." : "JOIN NOW →"}</button>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          {declined ? <p style={{ color: T.muted }}>Report will be sent via WhatsApp.</p> : <button onClick={handleDecline} style={{ background: "none", border: "none", color: T.muted, textDecoration: "underline", cursor: "pointer", fontSize: 13 }}>I'll think about it</button>}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────────────── */
function VSLSessionPageContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [step, setStep] = useState(1);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    if (!token) return;
    const fetchSession = async () => {
      try {
        const res = await api.get(`/funnel/session/${token}`);
        setSessionData(res.data);
        setStep(res.data.current_step || 1);
      } catch (err) { console.error("Session load failed", err); }
    };
    fetchSession();
  }, [token]);

  const updateStep = async (newStep: number, delay = 0) => {
    try {
      if (token) await api.patch(`/funnel/session/${token}/step`, { step: newStep });
      setTimeout(() => setStep(newStep), delay);
    } catch (e) {}
  };

  if (!token) return <div style={{ color: "red", padding: 100, textAlign: "center" }}>Invalid Session Token</div>;

  return (
    <div style={{ background: T.obsidian, minHeight: "100vh", color: T.cream }}>
      {step === 1 && (
        <ChatStep 
          title="STEP 1/7: AI DIAGNOSTIC"
          openingMessage="Welcome. I am Tej AI. In the next 30 minutes, we are going to find exactly where your UPSC preparation is leaking. Let's start with the basics: How long have you been preparing?"
          step={1} token={token} sessionData={sessionData}
          onComplete={() => updateStep(2)}
          transitionPhrase="Watch this short video"
        />
      )}
      {step === 2 && (
        <VideoStep 
          playerId="vsl-player-1" videoId={sessionData?.config?.vsl_video_1_id || "dQw4w9WgXcQ"}
          title="STEP 2/7: THE PERSPECTIVE" nextStepLabel="I'm ready to continue →"
          onComplete={() => updateStep(3)} sessionData={sessionData}
        />
      )}
      {step === 3 && (
        <ChatStep 
          title="STEP 3/7: DEEP DIAGNOSTIC"
          openingMessage="So, what was your first reaction to that? Did anything click for you — or did something confuse you?"
          step={3} token={token} sessionData={sessionData}
          onComplete={() => updateStep(4)}
          transitionPhrase="one more thing I want to show you"
        />
      )}
      {step === 4 && (
        <VideoStep 
          playerId="vsl-player-2" videoId={sessionData?.config?.vsl_video_2_id || "dQw4w9WgXcQ"}
          title="STEP 4/7: THE METHOD" nextStepLabel="Continue →"
          onComplete={() => updateStep(5)} sessionData={sessionData}
        />
      )}
      {step === 5 && (
        <ChatStep 
          title="STEP 5/7: YOUR BREAKTHROUGH"
          openingMessage="You know what just happened in the last 30 minutes? You experienced what every student inside our full program gets — every single day. How are you feeling about your preparation right now?"
          step={5} token={token} sessionData={sessionData}
          onComplete={() => updateStep(6)}
          transitionPhrase="what 30 days looks like"
        />
      )}
      {step === 6 && (
        <VideoStep 
          playerId="vsl-player-3" videoId={sessionData?.config?.vsl_video_3_id || "dQw4w9WgXcQ"}
          title="STEP 6/7: TEJ'S VISION" nextStepLabel="See the offer →"
          onComplete={() => updateStep(7)} sessionData={sessionData}
          autoAdvance={true}
        />
      )}
      {step === 7 && <OfferStep token={token} sessionData={sessionData} T={T} />}
    </div>
  );
}

export default function VSLSessionPage() {
  return (
    <Suspense fallback={
      <div style={{background:"#0c0c0e",
        minHeight:"100vh", display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
        <p style={{color:"#c9a84c"}}>Loading...</p>
      </div>
    }>
      <VSLSessionPageContent />
    </Suspense>
  );
}
