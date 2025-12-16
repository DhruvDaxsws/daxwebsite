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
                        Technical Consultant
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
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: Technical Consultant</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="font-headline">Job Duties:</h3>
                                <ul>
                                    <li>Work with Lead Solutions Architect and Financial Consultants to provide Microsoft Dynamics AX/ Finance and Operations Enterprise Resource Planning (ERP) consulting services.</li>
                                    <li>Lead the requirement gathering process by meeting with business process leaders to determine business requirements.</li>
                                    <li>Work with Customers on Implementation and Managed service side of business.</li>
                                    <li>Help junior resources during solution process with understanding the problem and towards right resources to research, solutions based on customer needs.</li>
                                    <li>Write the code in D365 F&O/Dynamics AX to achieve the user requirements.</li>
                                    <li>Worked in writing interfaces to integrate D365 F&O/Dynamics AX with different third-party systems.</li>
                                    <li>Utilizing Manufacturing, Supply Chain, Warehouse, Finance modules process knowledge to understand the new system’s impact on Trade and Logistics, HR and Finance management.</li>
                                    <li>Perform Gap analysis between AX functionality and end user requirement.</li>
                                    <li>Train/Write design documentation and corresponding technical specifications.</li>
                                    <li>Train/Write test scenarios and cases and perform unit testing.</li>
                                    <li>Perform production migration using data sets.</li>
                                    <li>Train end users on their customized AX solutions.</li>
                                    <li>Work with different partners/solution providers and deliver timely solutions to clients.</li>
                                    <li>Troubleshooting different performance issues for optimizations and suggesting performance tuning solutions.</li>
                                    <li>Help setup go-live checklist and ensure support to customers as well as help with issue debugging and resolution.</li>
                                </ul>
                                <h3 className="font-headline">Requirements:</h3>
                                <ul>
                                    <li>Bachelor’s degree in Computer Science, Computer Engineering, or a related field and minimum two years of experience in the job offered or a related IT position designing and developing Microsoft Dynamics AX solutions.</li>
                                    <li>The position requires the ability to use Microsoft Dynamics AX, SQL Server, Visual Studio, X++, C#, .Net, PowerBI, Azure, ASP.Net, Trace Parser, SQL Profiler, API developer, and Interface development.</li>
                                    <li>Hands-on experience on Microsoft’s Dynamics AX/D365 F&O ERP suite.</li>
                                    <li>Extensive programming experience in different MS programming languages.</li>
                                    <li>Certifications in Dynamics AX/D365 Finance and Operations.</li>
                                    <li>In-depth experience integrating with 3rd party applications.</li>
                                </ul>
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