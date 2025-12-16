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
                        Senior ERP Developer
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
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: Senior ERP Developer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="font-headline">Job Duties:</h3>
                                <ul>
                                    <li>Analyze clients' IT solutions requirements and design, develop, and implement Enterprise Resource Planning (ERP) solutions for the company's clients.</li>
                                    <li>Meet with clients to understand their business processes and organizational structure and develop project requirements based on operational needs and infrastructure capabilities.</li>
                                    <li>Create design documentation and corresponding technical specifications using technologies such as Microsoft Dynamics 365, SQL Server, Visual Studio, XX++, C#, .Net, PowerBI, Azure, ASP.Net, Trace Parser, SQL Profile, and API developer.</li>
                                    <li>Develop the business process management software to automate workflow, increase productivity and customer retention, and decrease company production costs.</li>
                                    <li>Design data analysis models for the supply chain process of the ERP software to provide the client with a competitive advantage over its competitors.</li>
                                    <li>Lead the project team throughout ERP development, including coding, source control management, continuous integration, building processes, testing, and operations.</li>
                                    <li>Analyze the quality and performance of ERP solutions and develop strategies to detect, diagnose, and resolve software and network issues.</li>
                                    <li>Perform unit testing NUnit & supporting frameworks (moq, Microsoft Fakes) and integration testing of the new supply chain.</li>
                                    <li>Determine performance and operational-based indicators to track inventory information and back-end processes.</li>
                                    <li>Consult with clients on business optimization and reporting requirements best practices with the use of Power BI and Apps analytics.</li>
                                    <li>Facilitate user success by writing D365 code, developing methods to integrate D365 with third party platforms, and performing gap analysis between AX/D365 F&O functionality and end user requirements.</li>
                                    <li>Analyze the migration of the client's data to be utilized by the ERP post development.</li>
                                    <li>Stay abreast of the latest technological advances and industry trends in ERP to ensure optimal performance and effective software development.</li>
                                </ul>
                                <h3 className="font-headline">Requirements:</h3>
                                <ul>
                                    <li>The position requires a Master’s degree in Computer Science, Computer Engineering, or a related field and two years of experience in the job offered or a related position. This may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and five years of experience in the job offered or a related position.</li>
                                    <li>It requires skills and knowledge in Microsoft Dynamics AX, SQL Server, Visual Studio, X++, C#.Net, Azure, ASP.Net, Trace Parser, SQL Profiler, API development, and Interface development.</li>
                                    <li>The position requires little travel -24 % of the work time several days but less than 60 days per year throughout the U.S.</li>
                                </ul>
                                <p><strong>Salary:</strong> $176,134.00 per year</p>
                                <p><strong>Job Site:</strong> Woodland Hills, CA</p>
                                <p>Email Resume to: DAX Software Solutions, Inc. at <a href="mailto:apply@daxsws.com">apply@daxsws.com</a> or <a href="#apply-form" onClick={(e) => {e.preventDefault(); scrollToForm();}}>apply here</a></p>
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