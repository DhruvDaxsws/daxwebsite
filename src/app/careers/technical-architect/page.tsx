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
                        Technical Architect
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
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: Technical Architect</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="font-headline">Job Duties:</h3>
                                <ul>
                                    <li>Analyze clients’ business requirements and design, develop, and implement Microsoft Dynamics 365/AX and Enterprise Resource Planning (ERP) software solutions to meet customer needs.</li>
                                    <li>Meet with clients to understand their business processes and organizational structure and determine the issues affecting their current IT architecture, specifically pertaining to their supply chain processes.</li>
                                    <li>Develop project requirements based on operational needs and infrastructure capabilities and design ERP solutions that meet business requirements.</li>
                                    <li>Review all technical information with clients to ensure that the newly developed architecture aligns with specific business processes and plan the software development process in coordination with Lead Solutions Architects.</li>
                                    <li>Work with the project team on all aspects of the application development process including coding, source control management, continuous integration, building processes, testing, and operations.</li>
                                    <li>Write comprehensive code to achieve user requirements, streamline the back-end operations, and increase overall company efficiency.</li>
                                    <li>Migrate the company’s Trade and Logistics, HR, and Financial Management data to the ERP system upon conclusion of development.</li>
                                    <li>Test the functionality and responsiveness of the ERP system and create reports regarding application performance, processing speeds, application memory and database, and network updates.</li>
                                    <li>Provide technical support to all application users and develop new solutions and functionalities as needed to improve productivity.</li>
                                    <li>Stay abreast of the latest technological advances and industry trends in ERP to ensure optimal performance and effective software development.</li>
                                </ul>
                                <h3 className="font-headline">Requirements:</h3>
                                <ul>
                                    <li>The position requires a Master’s degree in Computer Science, Computer Engineering, or a related field and two years of experience in the job offered or a related position. The requirement may be substituted with a Bachelor’s degree in Computer Science, Computer Engineering, or a related field and five years of experience in the job offered or a related position.</li>
                                    <li>The position requires skills and knowledge in Microsoft Dynamics 365/AX, SQL, C#, and PowerBI.</li>
                                </ul>
                                <p><strong>Working hours:</strong> 40 hours/week</p>
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