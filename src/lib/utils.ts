import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}


let stripePromise: Promise<Stripe | null>;
 export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};
