'use client';

import { useParams, notFound } from 'next/navigation';
import { OPENINGS } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CareerDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const opening = OPENINGS.find(o => o.slug === slug);

    if (!opening) {
        notFound();
    }

    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Button variant="ghost" asChild className="mb-8">
                           <Link href="/careers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to all openings</Link>
                        </Button>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold font-headline text-primary">{opening.title}</CardTitle>
                                <p className="text-muted-foreground pt-2">{opening.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mb-6">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{opening.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{opening.type}</span>
                                    </div>
                                </div>

                                <div className="prose dark:prose-invert max-w-none">
                                    <p>
                                        We are seeking a talented and motivated <strong>{opening.title}</strong> to join our dynamic team. In this role, you will be responsible for working on exciting projects and contributing to the success of our clients. If you have a passion for technology and a drive to excel, we want to hear from you.
                                    </p>
                                    <h3 className="font-headline">Key Responsibilities:</h3>
                                    <ul>
                                        <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                                        <li>Ensure the performance, quality, and responsiveness of applications.</li>
                                        <li>Identify and correct bottlenecks and fix bugs.</li>
                                        <li>Help maintain code quality, organization, and automatization.</li>
                                    </ul>
                                    <h3 className="font-headline">Qualifications:</h3>
                                     <ul>
                                        <li>Proven experience as a {opening.title.split(' ').slice(1).join(' ')}.</li>
                                        <li>Strong understanding of the full development lifecycle.</li>
                                        <li>Excellent problem-solving skills and attention to detail.</li>
                                        <li>Ability to work in a fast-paced environment.</li>
                                    </ul>
                                </div>
                                
                                <Button asChild size="lg" className="mt-8">
                                    <Link href="/contact-us">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
