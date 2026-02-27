"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Cashfree: any;
  }
}

export default function SubscriptionPage() {
  const [isLoading, setIsLoading] = useState(false);
  // TODO: This should come from auth context or be fetched from API
  const [isPremium] = useState(false);
  const router = useRouter();

  const loadCashfreeScript = () => {
    return new Promise((resolve, reject) => {
      if (window.Cashfree) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payment/create-order`,
        { tier: "premium" },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      const { payment_session_id } = response.data;

      if (!payment_session_id) {
        throw new Error("Invalid session ID returned from the server.");
      }

      await loadCashfreeScript();

      const cashfree = window.Cashfree({
        mode: process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "production" : "sandbox",
      });

      let checkoutOptions = {
        paymentSessionId: payment_session_id,
        redirectTarget: "_self"
      };

      cashfree.checkout(checkoutOptions).then((result: any) => {
        if (result.error) {
          toast.error("Payment failed: " + result.error.message);
          setIsLoading(false);
        }
        if (result.redirect) {
          console.log("Redirecting for payment");
        }
        if (result.paymentDetails) {
          toast.success("Payment Successful! Premium Access Unlocked.");
          // Reload or redirect securely
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });

    } catch (error: any) {
      console.error("Checkout failed:", error);
      toast.error(error.response?.data?.detail || error.message || "Failed to start checkout");
      setIsLoading(false);
    }
  };

  const handleManage = async () => {
    // Managing subscriptions on Cashfree or directly via self-serve UI
    toast.info("Billing portal integration with Cashfree is pending.");
  };

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Unlock the full potential of your learning journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Free</CardTitle>
            <CardDescription>
              Essential features for every student
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-4xl font-bold mb-6">
              $0
              <span className="text-lg font-normal text-muted-foreground">
                /mo
              </span>
            </div>
            <ul className="space-y-3">
              <FeatureItem text="Access to basic courses" />
              <FeatureItem text="Community forums" />
              <FeatureItem text="Basic progress tracking" />
              <FeatureItem text="Limited AI Tutor queries" />
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" disabled>
              Current Plan
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="flex flex-col border-primary shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
            POPULAR
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Premium</CardTitle>
            <CardDescription>
              Advanced tools for serious learners
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-4xl font-bold mb-6">
              $19
              <span className="text-lg font-normal text-muted-foreground">
                /mo
              </span>
            </div>
            <ul className="space-y-3">
              <FeatureItem text="Unlimited AI Tutor access" />
              <FeatureItem text="Live classes & webinars" />
              <FeatureItem text="Verified certificates" />
              <FeatureItem text="Code review & debugging" />
              <FeatureItem text="Priority support" />
              <FeatureItem text="Offline downloads (Mobile)" />
            </ul>
          </CardContent>
          <CardFooter>
            {isPremium ? (
              <Button
                className="w-full"
                onClick={handleManage}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <CreditCard className="mr-2 h-4 w-4" />
                )}
                Manage Subscription
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={handleSubscribe}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Upgrade to Premium"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="h-4 w-4 text-primary" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
