
import PrivacyPolicyClientPage from "@/components/privacy-policy-client-page";
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Privacy Policy | DAX Software Solutions",
  description: "Read the DAX Software Solutions privacy policy to understand how we collect, use, and protect your personal information in accordance with GDPR and other regulations.",
  canonicalPath: "/privacy-policy",
});


export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />;
}
