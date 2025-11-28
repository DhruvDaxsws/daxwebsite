import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SERVICES, TEAM_MEMBERS, CASE_STUDIES } from '@/lib/content';
import { AiSuggester } from '@/components/ai-suggester';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const caseStudyImages = CASE_STUDIES.map(cs => ({
    ...cs,
    image: PlaceHolderImages.find(img => img.id === cs.imageId)
  }));
  const teamImages = TEAM_MEMBERS.map(tm => ({
    ...tm,
    image: PlaceHolderImages.find(img => img.id === tm.imageId)
  }));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Accelerate Your Business Growth with ConsultFast
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We provide expert consulting services to help you overcome challenges, innovate, and achieve your strategic objectives.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Services</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our expert consultants provide a range of services to help your business thrive.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 xl:grid-cols-4 mt-12">
            {SERVICES.map((service) => (
              <Card key={service.title} className="text-center h-full flex flex-col">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h3 className="text-lg font-bold font-headline">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Suggester Section */}
      <section id="ai-suggester" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-card">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Not Sure Where to Start?</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Let our AI assistant guide you. Describe your business challenge and get instant service recommendations.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
                <AiSuggester />
            </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Success Stories</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Proven Track Record</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore how we've helped businesses like yours achieve remarkable results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {caseStudyImages.map((study) => (
              <Card key={study.title} className="overflow-hidden">
                {study.image && (
                  <Image
                    src={study.image.imageUrl}
                    alt={study.image.description}
                    data-ai-hint={study.image.imageHint}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{study.title}</CardTitle>
                  <CardDescription>{study.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{study.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/case-studies">View All Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Experts</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The brilliant minds behind our success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
            {teamImages.map((member) => (
              <div key={member.name} className="flex flex-col items-center space-y-2">
                <Avatar className="h-24 w-24">
                  {member.image && (
                    <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />
                  )}
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-4">
              <Button asChild>
                <Link href="/team">More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's talk about how ConsultFast can help you achieve your goals. Schedule a free consultation today.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
