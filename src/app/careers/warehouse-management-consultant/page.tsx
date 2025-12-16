'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CareerDetailPage() {
    const scrollToForm = () => {
        document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="bg-background">
            <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
                        Warehouse Management Consultant
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">Woodland Hills, CA</p>
                    <Button onClick={scrollToForm} size="lg" className="mt-8">
                        APPLY NOW
                    </Button>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: Warehouse Management Consultant</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="font-headline">Job Duties:</h3>
                                <ul>
                                    <li>Experienced D365 Advanced Warehouse Consultant with Supply chain to join our team for an overseas project. The ideal candidate will have a deep understanding of the Dynamics 365 Supply Chain Management suite, including Advanced Warehouse Management and Inventory Management.</li>
                                    <li>Provide ongoing solutions to DAX customers to support their Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
                                    <li>Identify and analyze client requirements and recommend solutions that align with their business objectives.</li>
                                    <li>Configure and customize Dynamics 365 Supply Chain and Warehouse Management modules to meet client requirements.</li>
                                    <li>Develop and implement warehouse processes and workflows to optimize efficiency and accuracy.</li>
                                    <li>Train clients on the use of Dynamics 365 Supply Chain and Warehouse Management applications.</li>
                                    <li>Provide ongoing support and maintenance services to ensure the stability and performance of client implementations.</li>
                                    <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
                                    <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
                                    <li>Lead and be part of project implementation team on need basis and provide support for different projects.</li>
                                </ul>
                                <h3 className="font-headline">Requirements:</h3>
                                <ul>
                                    <li><strong>Educational Requirement:</strong> Bachelor’s degree in computer science, Computer Engineering, Business Management, or a related field.</li>
                                    <li>Experience in Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
                                    <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
                                    <li>Proven experience in customizing and configuring Dynamics 365 Supply Chain and Warehouse Management modules.</li>
                                    <li>D365 certification in Supply Chain Management or related areas.</li>
                                    <li>Excellent problem-solving skills and ability to analyze complex business requirements.</li>
                                    <li>Excellent communication and interpersonal skills.</li>
                                    <li>Ability to travel as required to support client implementations.</li>
                                    <li>Certifications in Dynamics 365 Warehouse</li>
                                </ul>
                                <p><strong>Salary:</strong> $130,000.00 per year</p>
                                <p><strong>Job Site:</strong> Woodland Hills, CA</p>
                                <p>Email Resume to: DAX Software Solutions, Inc. at <a href="mailto:contact@daxsws.com">contact@daxsws.com</a> or <a href="#apply-form" onClick={(e) => {e.preventDefault(); scrollToForm();}}>apply here</a></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

             <section id="apply-form" className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold font-headline text-center">Apply for this job now</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground">Form component will be added here.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}