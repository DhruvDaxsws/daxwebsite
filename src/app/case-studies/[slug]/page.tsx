
import { CASE_STUDIES } from '@/lib/content';
import { buildMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import CaseStudySlugClientPage from '@/components/case-study-slug-client-page';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = CASE_STUDIES.find((cs) => cs.slug === params.slug);

  if (!study) {
    return buildMetadata({
        title: 'Case Study Not Found',
        description: 'The case study you are looking for does not exist.',
    });
  }

  return buildMetadata({
    title: `${study.title} | Case Study`,
    description: study.summary,
    canonicalPath: `/case-studies/${study.slug}`,
    ogType: 'article',
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    return <CaseStudySlugClientPage slug={params.slug} />;
}
