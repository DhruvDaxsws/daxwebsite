
import GovernmentClientPage from "@/components/government-client-page";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Government ERP Solutions | Microsoft Dynamics 365 | DAX",
  description: "DAX provides secure, compliant, and cost-effective ERP solutions for government agencies using Microsoft Dynamics 365, Power Apps, and Azure.",
  canonicalPath: "/government",
});


export default function GovernmentPage() {
  return <GovernmentClientPage />;
}
