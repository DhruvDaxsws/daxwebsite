
import { buildMetadata } from "../seo";
import AboutUsClientPage from "@/components/about-us-client-page";

export const metadata = buildMetadata({
  title: "About Us | DAX Software Solutions",
  description: "Learn about DAX, a Microsoft Solutions Partner with over 20 years of experience in ERP, CRM, and Power Apps, serving clients globally.",
  canonicalPath: "/about-us",
});

export default function AboutUsPage() {
  return <AboutUsClientPage />;
}
