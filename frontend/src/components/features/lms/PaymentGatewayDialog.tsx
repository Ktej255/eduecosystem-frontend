"use client";

import { useState } from "react";
import { X, CreditCard, CheckCircle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import api from "@/lib/api";

interface PaymentGatewayDialogProps {
  open: boolean;
  onClose: () => void;
  courseId: number;
  courseTitle: string;
  price: number;
  onSuccess: () => void;
}

declare global {
  interface Window {
    Cashfree: any;
  }
}

const paymentGateways = [
  {
    id: "cashfree",
    name: "Cashfree Payments",
    description: "Credit/Debit Cards, UPI, Netbanking",
    icon: "💳",
    popular: true,
    color: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20",
  },
];

export function PaymentGatewayDialog({
  open,
  onClose,
  courseId,
  courseTitle,
  price,
  onSuccess,
}: PaymentGatewayDialogProps) {
  const [selectedGateway, setSelectedGateway] = useState<string>("cashfree");
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [validatingCoupon, setValidatingCoupon] = useState(false);
  const [finalPrice, setFinalPrice] = useState(price);

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;

    try {
      setValidatingCoupon(true);
      const response = await api.post("/coupons/validate", {
        code: couponCode.toUpperCase(),
        course_id: courseId,
        original_price: price,
      });

      if (response.data.valid) {
        setAppliedCoupon(response.data);
        setFinalPrice(response.data.final_price);
        alert(
          `✅ ${response.data.message}\nDiscount: ₹${response.data.discount_amount}\nFinal Price: ₹${response.data.final_price}`,
        );
      } else {
        alert(`❌ ${response.data.message}`);
        setAppliedCoupon(null);
        setFinalPrice(price);
      }
    } catch (error: any) {
      alert(error.response?.data?.detail || "Failed to validate coupon");
      setAppliedCoupon(null);
      setFinalPrice(price);
    } finally {
      setValidatingCoupon(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setFinalPrice(price);
  };

  const handlePayment = async () => {
    try {
      setLoading(true);

      if (selectedGateway === "cashfree") {
        await handleCashfreePayment();
      }
    } catch (error: any) {
      console.error("Payment failed:", error);
      alert(
        error.response?.data?.detail || "Payment failed. Please try again.",
      );
      setLoading(false);
    }
  };

  const handleCashfreePayment = async () => {
    try {
      setLoading(true);
      // 1. Get Session ID from backend
      const requestPayload: any = {
        course_id: courseId,
        payment_provider: 'cashfree'
      };

      if (appliedCoupon?.coupon?.code) {
        requestPayload.coupon_code = appliedCoupon.coupon.code;
      }

      const response = await api.post("/course-payments/create-cashfree-order", requestPayload);
      const { payment_session_id } = response.data;

      if (!payment_session_id) {
        throw new Error("Invalid session ID returned from the server.");
      }

      // 2. Initialize Cashfree via script if not present
      if (!window.Cashfree) {
        await loadCashfreeScript();
      }

      // 3. Trigger checkout natively
      const cashfree = window.Cashfree({
        mode: process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "production" : "sandbox",
      });

      const checkoutOptions = {
        paymentSessionId: payment_session_id,
        redirectTarget: "_self"
      };

      console.log("CASHFREE DEBUG:", {
        sessionId: payment_session_id,
        mode: process.env.NEXT_PUBLIC_ENVIRONMENT,
        cashfreeLoaded: typeof window !== 'undefined' && 
                        typeof window.Cashfree !== 'undefined'
      });

      try {
        const result = await cashfree.checkout(checkoutOptions);

        if (result.error) {
          console.error("CASHFREE ERROR:", result.error);
          alert(result.error.message || "Payment failed. Please try again.");
          setLoading(false);
          return;
        }

        if (result.redirect) {
          // Payment is redirecting — this is normal
          console.log("CASHFREE: Redirecting to payment page...");
          return;
        }

        if (result.paymentDetails) {
          console.log("CASHFREE: Payment completed", result.paymentDetails);
          onSuccess();
          onClose();
        }
      } catch (checkoutError: any) {
        console.error("CASHFREE CHECKOUT EXCEPTION:", checkoutError);
        alert("Could not open payment page. Please refresh and try again.");
        setLoading(false);
      }

    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.detail || err.message || "Checkout initialization failed");
      setLoading(false);
    }
  };

  const loadCashfreeScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-800 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">
            Select Payment Method
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose your preferred payment gateway
          </DialogDescription>
        </DialogHeader>

        {/* Course Summary */}
        <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground text-sm">Course</span>
            <span className="text-white font-medium text-sm">
              {courseTitle}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Total Amount</span>
            <span className="text-cyan-400 font-bold text-xl">
              ₹{price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-3">
          {paymentGateways.map((gateway) => (
            <button
              key={gateway.id}
              onClick={() => setSelectedGateway(gateway.id)}
              className={`w-full border-2 rounded-lg p-4 transition ${selectedGateway === gateway.id
                ? "border-cyan-500 bg-cyan-500/10"
                : `border-gray-700 ${gateway.color}`
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{gateway.icon}</div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">
                        {gateway.name}
                      </span>
                      {gateway.popular && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {gateway.description}
                    </p>
                  </div>
                </div>
                {selectedGateway === gateway.id && (
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Coupon Code Section */}
        {!appliedCoupon ? (
          <div className="mt-4 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm font-medium">
                Have a coupon code?
              </span>
            </div>
            <div className="flex gap-2">
              <Input
                value={couponCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCouponCode(e.target.value.toUpperCase())
                }
                placeholder="Enter code"
                className="bg-gray-800 border-gray-700 text-white uppercase"
                disabled={validatingCoupon}
              />
              <Button
                onClick={handleApplyCoupon}
                disabled={validatingCoupon || !couponCode.trim()}
                className="bg-green-600 hover:bg-green-500"
              >
                {validatingCoupon ? "..." : "Apply"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 bg-green-500/10 rounded-lg p-4 border border-green-500/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-medium">
                  {appliedCoupon.coupon.code}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={removeCoupon}
                className="text-red-400 hover:text-red-300 h-auto p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Original Price:</span>
                <span>₹{price}</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>Discount:</span>
                <span>-₹{appliedCoupon.discount_amount}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-green-500/20">
                <span>Final Price:</span>
                <span>₹{finalPrice}</span>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3 mt-4">
          <p className="text-xs text-blue-200/80">
            🔒 All payments are secure and encrypted. Your payment information
            is never stored on our servers.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
            className="flex-1 border-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={handlePayment}
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Pay ₹{finalPrice.toFixed(2)}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
