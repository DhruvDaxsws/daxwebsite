
import { buildMetadata } from '../seo';
import TermsOfUseClientPage from '@/components/terms-of-use-client-page';

export const metadata = buildMetadata({
  title: "Terms of Use | DAX Software Solutions",
  description: "Read the terms of use for the DAX Software Solutions website. Understand the conditions for using our site and its content.",
  canonicalPath: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return <TermsOfUseClientPage />;
}
