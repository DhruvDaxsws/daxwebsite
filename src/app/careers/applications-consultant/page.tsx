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
                        Applications Consultant
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
                            <CardTitle className="text-2xl font-bold font-headline">Job Title: Applications Consultant</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="font-headline">Job Duties:</h3>
                                <p>DAX Software Solutions, Inc. is seeking a Software Developers with BFSI, Supply Chain domain experience, Legacy Data Migration and ETL tools knowledge. Dynamics 365 F&O, Integration, Technical Architect, Code migration, go live management, AX2012 R3, D365 F&O, SSRS, and the upgrade, data management. The position will primarily be responsible interface with key stakeholders and apply your technical proficiency across different stages of the Software Development Life Cycle including Data Migration & Requirements Elicitation, Application Architecture definition and Design. You will play an important role in creating the high-level design artifacts. You will also deliver high quality code deliverables for a module, lead validation for all types of testing and support activities related to implementation, transition, and warranty. You will be part of a learning culture, where teamwork and collaboration are encouraged, excellence is rewarded, and diversity is respected and valued.</p>
                                
                                <h3 className="font-headline">Key Responsibilities (Essential Duties and Functions)</h3>
                                <ul>
                                    <li>Collaborate with clients to gather and analyze business requirements for their migration to Dynamics 365.</li>
                                    <li>Participate and contribute to the requirements elicitation process and create requirements documentation.</li>
                                    <li>Participate in creating application architecture document to provide deliverables in line with architectural requirements.</li>
                                    <li>Assist in the Design and implement system configurations, customizations, and extensions using C# and X++ / JavaScript programming languages.</li>
                                    <li>Create design artifacts and support prototyping through creation of POCs.</li>
                                    <li>Access the legacy ERP systems to: 1. Understand the data structure 2. Define the migration scope 3. Select appropriate ETL (extract – transform – load) tools 4. Develop a strategy to import relevant and updated data from historical records. Then, drive the data migration process from legacy ERP systems to Microsoft D365 F&O</li>
                                    <li>Develops Informatica Cloud IDMC/IICS mappings and mapping tasks using ODBC and API based data integration and design task flows.</li>
                                    <li>Deliver high quality code deliverables and support peers in quality checks such that design requirements are met.</li>
                                    <li>Create user documentation for the assigned modules, Lead validation activities for the assigned modules for all types of testing e.g., Functional, Integration, System, User Experience etc.</li>
                                    <li>Support the creation of “Go Live” plan (change management request) and manage assigned activities in the plan.</li>
                                    <li>Perform root-cause analysis of any issues that arise post-implementation and work on appropriate solutions.</li>
                                    <li>Participate in Knowledge Transfer sessions, prepare system appreciation documents and support the transition process.</li>
                                    <li>Conduct impact analysis of issues logged, prioritize, and ensure that production support is provided as per committed SLAs.</li>
                                </ul>

                                <h3 className="font-headline">Requirements:</h3>
                                <ul>
                                    <li>Bachelor’s degree in engineering/computer-related discipline, or equivalent experience required.</li>
                                    <li>At least 2 years of experience in end-to-end implementation of projects in data migrations, Integration using etl tools -Informatica.</li>
                                    <li>Dynamics 365 F&O ERP knowledge.</li>
                                    <li>2+ years of Cloud (AWS / Azure) experience.</li>
                                    <li>Leadership/Management skill.</li>
                                    <li>Excellent communication skills – will be working with Sr Leadership and entire implementation team.</li>
                                </ul>

                                <h3 className="font-headline">Knowledge/Skill Requirement</h3>
                                <ul>
                                    <li>Good understanding of data architecture, data integration, data quality and data architecture.</li>
                                    <li>Experience in Relational Modeling, Dimensional Modeling and Modeling of Unstructured Data.</li>
                                    <li>Proven experience as a Dynamics AX or D365 Consultant, with a focus on migration and upgrade projects.</li>
                                    <li>Strong expertise in Informatica PowerCenter and Informatica Cloud IDMC/IICS, specifically pertaining on API data integration and Cloud-Based ODBC data integration.</li>
                                    <li>Strong expertise in designing and developing data integration / migration solutions.</li>
                                    <li>Experience working with data in multiple ERP and data movement technologies.</li>
                                    <li>Advanced knowledge of SQL databases and queries.</li>
                                    <li>Advanced knowledge of CDC (Change Data Capture) & CT (Change Tracking) inner workings.</li>
                                    <li>Experience with normalizing and de-normalizing data.</li>
                                    <li>Work experience in Cloud technologies and DevOps is preferred.</li>
                                    <li>Excellent analytical and problem-solving skills with the ability to translate business requirements into technical solutions.</li>
                                    <li>Ability to work in teams in a diverse, multi-stakeholder environment comprising of Business and Technology teams.</li>
                                    <li>Microsoft certifications in Dynamics 365 or related technologies are a plus.</li>
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
                    {/* Placeholder for a form component */}
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