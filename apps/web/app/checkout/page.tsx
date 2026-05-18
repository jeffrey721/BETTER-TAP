import type { Metadata } from "next";
import { CheckoutFlow } from "@/components/checkout-flow";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your Better Tap order — pay by credit card, Google Pay, Apple Pay, Amazon Pay, Cash App, PayPal, or Klarna.",
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ option?: string }>;
}) {
  const { option = "installments" } = await searchParams;
  return <CheckoutFlow initialOption={option} />;
}
