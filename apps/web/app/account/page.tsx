import type { Metadata } from "next";
import { AccountPortal } from "@/components/account-portal";

export const metadata: Metadata = {
  title: "My Account",
  description:
    "Sign in to your Better Tap account — track your installation, manage filters, get support, and refer friends.",
};

export default function AccountPage() {
  return <AccountPortal />;
}
