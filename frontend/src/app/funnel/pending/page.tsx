"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/lib/api";

/* ─── Minimal Verification Page (Ascetic Authority) ─────────────────────── */
export default function FunnelPendingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("order_id");
  const email = searchParams.get("email");

  const [status, setStatus] = useState<"pending" | "success" | "timeout" | "error">("pending");
  const [retryCount, setRetryCount] = useState(0);
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!orderId) {
      setStatus("error");
      return;
    }

    // Start polling every 3 seconds
    const startPolling = () => {
      pollTimerRef.current = setInterval(async () => {
        try {
          // Centralized api helper already includes /api/v1/
          const res = await api.get(`/payment/verify/${orderId}`);
          
          if (res.data.status === "success" || res.data.order_status === "PAID") {
            setStatus("success");
            clearInterval(pollTimerRef.current!);
            
            // Wait 2s to show success before redirecting to session
            // In a real scenario, we'd fetch the session token here
            // For now, redirect to /funnel/session?order_id=...
            const token = searchParams.get("token");
            setTimeout(() => {
              router.push(`/funnel/session?token=${token || ""}`);
            }, 2000);
          }
        } catch (err) {
          console.error("Polling error:", err);
        }
      }, 3000);
    };

    startPolling();

    // Timeout after 2 minutes
    const timeoutTimer = setTimeout(() => {
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
        setStatus("timeout");
      }
    }, 120000);

    return () => {
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
      clearTimeout(timeoutTimer);
    };
  }, [orderId, router, email]);

  return (
    <div style={{
      background: "#0c0c0e",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#f0e6cc",
      fontFamily: "'Inter', sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      {status === "pending" && (
        <>
          <div className="spinner" style={{
            width: "50px",
            height: "50px",
            border: "3px solid rgba(201, 168, 76, 0.1)",
            borderTop: "3px solid #c9a84c",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "24px"
          }} />
          <h1 style={{ color: "#c9a84c", fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>
            Verifying your payment...
          </h1>
          <p style={{ color: "#7a7a8a", fontSize: "15px" }}>
            Please wait. Do not close this page.
          </p>
        </>
      )}

      {status === "success" && (
        <>
          <div style={{ fontSize: "50px", marginBottom: "20px" }}>✅</div>
          <h1 style={{ color: "#c9a84c", fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>
            Payment Verified
          </h1>
          <p style={{ color: "#7a7a8a", fontSize: "15px" }}>
            Entering your personal diagnostic session now...
          </p>
        </>
      )}

      {status === "timeout" && (
        <div style={{ maxWidth: "400px" }}>
          <div style={{ fontSize: "50px", marginBottom: "20px" }}>⏳</div>
          <h1 style={{ color: "#c9a84c", fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>
            Verification is taking longer than expected
          </h1>
          <p style={{ color: "#7a7a8a", fontSize: "15px", lineHeight: "1.6" }}>
            Payment processing can sometimes take a few minutes. Check your email for a confirmation link, or you can stay on this page.
          </p>
        </div>
      )}

      {status === "error" && (
        <div style={{ maxWidth: "400px" }}>
          <div style={{ fontSize: "50px", marginBottom: "20px" }}>❌</div>
          <h1 style={{ color: "#c9a84c", fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>
            Invalid Request
          </h1>
          <p style={{ color: "#7a7a8a", fontSize: "15px" }}>
            We couldn't find a valid order ID. Please return to the landing page.
          </p>
          <button 
            onClick={() => router.push("/funnel")}
            style={{
              marginTop: "24px",
              background: "#c9a84c",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#0c0c0e",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            Return Home
          </button>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
