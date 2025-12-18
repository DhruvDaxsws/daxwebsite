
import ImplementationClientPage from "@/components/implementation-client-page";
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Dynamics 365 Implementation Services | DAX Software Solutions",
  description: "DAX offers expert Dynamics 365 implementation, greenfield projects, broken implementation rescue, and upgrades to transform your ERP and CRM systems.",
  canonicalPath: "/implementation",
});

export default function ImplementationPage() {
  return <ImplementationClientPage />;
}
