"use client";
import { useEffect, useState } from "react";
import Razorpay from "razorpay";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

const useRazorpay = (options: RazorpayOptions) => {
  const [rzp, setRzp] = useState<Razorpay | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const razorpayInstance = new (window as any).Razorpay(options);
      setRzp(razorpayInstance);
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return rzp;
};

const RazorpayCheckout = () => {
  const options: RazorpayOptions = {
    key: "rzp_test_xwpFCon24tjLhm",
    amount: 100,
    currency: "INR",
    handler: function (response) {
      // Handle success callback
      console.log("Payment success", response);
    },
    prefill: {
      name: "Your Name",
      email: "your.email@example.com",
      contact: "1234567890",
    },
    theme: {
      color: "#000000",
    },
  };

  const rzp = useRazorpay(options);

  const handlePayment = () => {
    if (rzp) {
      rzp.open();
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default RazorpayCheckout;
