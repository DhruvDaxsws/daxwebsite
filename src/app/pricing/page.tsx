
import PricingClientPage from "@/components/pricing-client-page";
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Pricing & Plans | DAX Software Solutions",
  description: "Explore flexible pricing models for Dynamics 365 services at DAX, including quick-fix packages, subscription plans, and pay-as-you-go options.",
  canonicalPath: "/pricing",
});

export default function PricingPage() {
    return <PricingClientPage />;
}
