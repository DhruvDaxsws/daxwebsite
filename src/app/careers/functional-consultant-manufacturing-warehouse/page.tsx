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
                        Functional Consultant (Manufacturing and Warehouse Management)
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
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: Functional Consultant (Manufacturing and Warehouse Management)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="font-headline">Job Duties:</h3>
                                <ul>
                                    <li>Facilitate workshops to develop business requirements; create demonstrations to provide proof of concept; plan and assist the team in drafting statements of work to include estimation of effort/cost.</li>
                                    <li>Be part of projects through the requirements definition and solution design phase.</li>
                                    <li>Ensure the overall solution design meets business requirements, fulfils user stories, and leading a team of resources through the build, test, and deployment phases.</li>
                                    <li>Facilitate customers decision-making process and document business processes and prepare functional design document that will drive the development process.</li>
                                    <li>Perform fit-gap analysis and Prototype and configure processes in Microsoft Dynamics 365 Finance and Operations (Production and Warehouse management Modules) to make sure the system works based on customer requirements.</li>
                                    <li>Support testing of the proposed system/solution and train users.</li>
                                    <li>Participates in providing structured support to DAX Software customers, including support for managed service customers and implementation customers.</li>
                                    <li>Troubleshoot support requests, proactively managing and governing assigned support cases according to SLA.</li>
                                    <li>Dynamics 365 Supply Chain and Warehouse Management implementations.</li>
                                    <li>Strong understanding of advanced warehouse management concepts, including pick/pack/ship processes, barcoding, and RFID.</li>
                                    <li>Proven experience in customizing and configuring Dynamics 365 Warehouse Management modules.</li>
                                </ul>
                                <h3 className="font-headline">Requirements:</h3>
                                <ul>
                                    <li>Master’s degree in Computer Science, Computer Engineering, or a related field and four years of experience in the job offered or a related IT position designing and developing Microsoft Dynamics AX solutions. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and six years of experience in the job offered or a related IT position designing and implementing Microsoft Dynamics AX solutions.</li>
                                    <li>Minimum of 5 plus years Dynamics AX/D365 Finance implementation experience.</li>
                                    <li>Proven and verifiable implementations of 2 full lifecycle Dynamics AX (from analysis to deployment)</li>
                                    <li>Minimum 10 years of industry and/or consulting experience.</li>
                                    <li>Extensive experience working in core Manufacturing Procurement, Warehouse and Inventory Management.</li>
                                    <li>Knowledge and/or experience servicing or designing solutions for Manufacturing vertical industries.</li>
                                    <li>Experience working with and/or implementing complimentary third party solutions to D365/AX.</li>
                                    <li>D365 F&O certification in manufacturing and Warehouse and/or related areas.</li>
                                    <li>Extensive Experience with the Microsoft Dynamics 365 Manufacturing module.</li>
                                    <li>Lean Manufacturing Module experience is good to have.</li>
                                    <li>Understands the key activities and deliverables for the client engagement and internal projects, reuses all standard templates and project artifacts and improves quality of DAX Software documentation assets.</li>
                                    <li>Know-how on tools like Jira, Confluence & methodologies like ITIL based processes, Agile Methodology.</li>
                                </ul>
                                <p><strong>Salary:</strong> $122,000.00 per year</p>
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