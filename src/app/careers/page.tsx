
import CareersClientPage from '@/components/careers-client-page';
import { buildMetadata } from '../seo';

export const metadata = buildMetadata({
  title: "Careers | Join Our Team at DAX Software Solutions",
  description: "Explore career opportunities at DAX. We're looking for talented individuals to join our global team of Dynamics 365 experts and revolutionize business solutions.",
  canonicalPath: "/careers",
});

export default function CareersPage() {
  return <CareersClientPage />;
}
