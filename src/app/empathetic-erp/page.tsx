
import EmpatheticErpClientPage from "@/components/empathetic-erp-client-page";
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Empathetic ERP: The Key to Success | DAX Software Solutions",
  description: "Learn about the Empathetic ERP approach, focusing on user needs, stakeholder engagement, and change management for successful implementations.",
  canonicalPath: "/empathetic-erp",
});

export default function EmpatheticErpPage() {
    return <EmpatheticErpClientPage />;
}
