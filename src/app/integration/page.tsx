
import IntegrationClientPage from "@/components/integration-client-page";
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Dynamics 365 Integration Services | DAX Software Solutions",
  description: "DAX offers seamless Dynamics 365 integration with your existing applications using Power Apps, Dell Boomi, Celigo, and microservices.",
  canonicalPath: "/integration",
});

export default function IntegrationPage() {
    return <IntegrationClientPage />;
}
