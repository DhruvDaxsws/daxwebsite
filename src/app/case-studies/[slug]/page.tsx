

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

function renderContent(content: string) {
    const lines = content.trim().split('\n');
    let currentList: React.ReactNode[] = [];
    const renderedElements: React.ReactNode[] = [];

    const closeList = () => {
        if (currentList.length > 0) {
            renderedElements.push(<ul key={`list-${renderedElements.length}`} className="space-y-3">{currentList}</ul>);
            currentList = [];
        }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('#### ')) {
            closeList();
            renderedElements.push(<h4 key={i} className="text-xl font-bold font-headline mt-6 mb-2">{line.substring(5)}</h4>);
        } else if (line.startsWith('### ')) {
            closeList();
            renderedElements.push(<h3 key={i} className="text-2xl font-bold font-headline mt-8 mb-4">{line.substring(4)}</h3>);
        } else if (line.startsWith('## ')) {
            closeList();
            renderedElements.push(<h2 key={i} className="text-3xl font-bold font-headline mt-10 mb-4">{line.substring(3)}</h2>);
        } else if (line.startsWith('- ')) {
            currentList.push(
                <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-base">{line.substring(2)}</span>
                </li>
            );
        } else {
            closeList();
            if (line.trim()) {
              if (line.includes('[E-INVOICE-PROCESS-FLOW-IMAGE]')) {
                const eInvoiceImage = PlaceHolderImages.find(p => p.id === 'e-invoice-process-flow');
                 if(eInvoiceImage) {
                    renderedElements.push(
                        <div key="e-invoice-image" className="my-8 text-center">
                            <Image src={eInvoiceImage.imageUrl} alt={eInvoiceImage.description} data-ai-hint={eInvoiceImage.imageHint} width={800} height={400} className="mx-auto" />
                        </div>
                    );
                 }
              } else {
                renderedElements.push(<p key={i}>{line}</p>);
              }
            }
        }
    }
    
    closeList();

    return renderedElements;
}


export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === study.imageId);

  return (
    <div className="bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-primary font-semibold">Case Study</p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mt-2 max-w-4xl mx-auto">
            {study.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {study.summary}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg rounded-2xl">
          {image && (
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-h2:text-accent dark:prose-h2:text-white">
                {renderContent(study.details)}
            </div>
          </CardContent>
        </Card>
         <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
      </div>
       <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground">
                        Looking for Dynamics 365 stabilization and managed services?
                    </h2>
                     <p className="text-lg text-gray-300">With 20+ years of industry experience in ERP and CRM, DAX is proficient in crafting tailored solutions to meet the needs of businesses.</p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}
