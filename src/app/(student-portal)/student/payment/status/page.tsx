"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  
  const [status, setStatus] = useState<"LOADING" | "PAID" | "PENDING" | "FAILED" | "ERROR">("LOADING");
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;

  const verifyPayment = useCallback(async () => {
    if (!orderId) {
      setStatus("ERROR");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      
      const response = await fetch(`${apiUrl}/api/v1/payment/verify/${orderId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Verification failed");
      }

      const data = await response.json();
      
      if (data.status === "PAID") {
        setStatus("PAID");
      } else if (data.status === "PENDING" || data.status === "ACTIVE") {
        if (retryCount < MAX_RETRIES) {
          setStatus("PENDING");
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 3000);
        } else {
          setStatus("FAILED");
        }
      } else {
        setStatus("FAILED");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      setStatus("ERROR");
    }
  }, [orderId, retryCount]);

  useEffect(() => {
    // Only run verification when status is LOADING or PENDING
    if (status === "LOADING" || status === "PENDING") {
      verifyPayment();
    }
  }, [verifyPayment, status]);

  return (
    <div className="w-full max-w-md space-y-8 p-8 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm text-center">
      {status === "LOADING" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Checking Payment Status...</h2>
          <p className="text-gray-400">Please wait while we verify your transaction.</p>
        </div>
      )}
      
      {status === "PENDING" && (
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Verifying payment...</h2>
          <p className="text-gray-400">Waiting for confirmation from the payment gateway. (Attempt {retryCount}/{MAX_RETRIES})</p>
        </div>
      )}

      {status === "PAID" && (
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">Payment Successful!</h2>
          <p className="text-gray-400 mb-8">Your account has been updated. You now have access to your content.</p>
          <Link href="/student/dashboard" passHref>
            <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      )}

      {(status === "FAILED" || status === "ERROR") && (
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Payment Failed</h2>
          <p className="text-gray-400 mb-8">We could not verify your payment. Please contact support if you were charged.</p>
          <Button 
            onClick={() => window.history.back()} 
            className="w-full bg-gray-700 hover:bg-gray-600 text-white"
          >
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentStatusContent />
      </Suspense>
    </div>
  );
}
