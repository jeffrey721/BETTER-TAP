import type { Metadata } from "next";
import { CrmConsole } from "@/components/crm-console";

export const metadata: Metadata = {
  title: "Admin CRM",
  description: "Better Tap internal customer-service CRM console.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <CrmConsole />;
}
