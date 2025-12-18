
import QuickFixPackagesClientPage from "@/components/quick-fix-packages-client-page";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Quick-Fix ERP Packages | DAX Software Solutions",
  description: "Address common ERP issues like data migration, integration failures, and performance bottlenecks with DAX's quick-fix packages.",
  canonicalPath: "/quick-fix-packages",
});

export default function QuickFixPackagesPage() {
  return <QuickFixPackagesClientPage />;
}
