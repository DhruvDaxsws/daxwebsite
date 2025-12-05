import { Activity, BarChart3, Briefcase, Users, Bot, Rocket, Target, Zap, Smile, BookOpen, UserCheck, BriefcaseBusiness, Settings, Award } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/implementation', label: 'Implementation' },
  { href: '/integration', label: 'Integration' },
  { href: '/government', label: 'Government' },
  { href: '/pricing', label: 'Pricing' },
];

export const RESOURCE_CENTER_LINKS = [
    { href: '/resource-center', label: 'Resource Center' },
    { href: '/empathetic-erp', label: 'Empathetic ERP' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
];

export const SERVICES = [
  {
    icon: Activity,
    title: 'Business Strategy',
    id: 'strategy',
    description: 'We help you define your vision, mission, and long-term goals. Our data-driven approach ensures your strategy is robust and adaptable to market changes.',
    details: 'Our Business Strategy service includes market positioning, competitive analysis, and strategic planning to ensure sustainable growth. We work with you to create a clear roadmap for success.'
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    id: 'analysis',
    description: 'Understand your market landscape, identify opportunities, and gain a competitive edge with our comprehensive market analysis services.',
    details: 'We provide in-depth market research, customer segmentation, and trend analysis. Our insights help you make informed decisions and capture new market share.'
  },
  {
    icon: Briefcase,
    title: 'Operational Efficiency',
    id: 'efficiency',
    description: 'Streamline your processes, reduce costs, and improve productivity. We identify bottlenecks and implement efficient solutions tailored to your business.',
    details: 'Our experts analyze your current operations to identify areas for improvement. We implement lean methodologies and technology solutions to boost your bottom line.'
  },
  {
    icon: Users,
    title: 'Organizational Development',
    id: 'development',
    description: 'Build a high-performing team and a culture of success. We offer leadership training, team building, and change management support.',
    details: 'We help you align your organizational structure with your strategic goals. Our services include talent management, leadership development, and fostering a culture of innovation.'
  },
];

export const TEAM_MEMBERS = [
    { name: 'Sanjeev Munjal', role: 'Founder & Managing Partner', imageId: 'leadership-1' },
    { name: 'Munish Sethi', role: 'Founder & Managing Partner', imageId: 'leadership-2' },
    { name: 'Puneet Nasa', role: 'Managing Partner', imageId: 'leadership-3' },
    { name: 'Anuj Rastogi', role: 'Senior Technical Architect', imageId: 'team-member-5' },
    { name: 'Vijaya Bhaskar Sanyela', role: 'Dynamics 365 Technical Architect', imageId: 'team-member-6' },
    { name: 'Gajendiran Govindraj', role: 'Dynamics 365 Technical Architect', imageId: 'team-member-7' },
    { name: 'Vikas Mehta', role: 'Dynamics 365 Technical Architect', imageId: 'team-member-8' },
    { name: 'Mohit Khanna', role: 'Functional Solution Architect', imageId: 'team-member-9' },
    { name: 'Ashish Srivastava', role: 'Technical Architect', imageId: 'team-member-10' },
    { name: 'Tamil Magal Radhakrishnan', role: 'Technical Architect', imageId: 'team-member-11' },
    { name: 'Raghu Ram', role: 'Functional Production Consultant', imageId: 'team-member-12' },
    { name: 'Hung Phan', role: 'Dynamics 365 F&O Technical Consultant', imageId: 'team-member-13' },
];

export const CASE_STUDIES = [
    {
        title: 'OCR (Optical Character Recognition) for Vendor Invoice Automation',
        summary: 'Research shows that companies using OCR for automated data entry from invoices process 25-60% more invoices than companies using manual data entry.',
        imageId: 'case-study-1'
    },
    {
        title: 'D365 F&O Implementation/Manages Support for a leading Fast Food Manufacturer and Retail Company',
        summary: 'D365 F&O offers a comprehensive suite of features for managing all aspects of a retail business, including finance, supply chain management, manufacturing, project management, and customer relationship management (CRM).',
        imageId: 'case-study-2'
    },
    {
        title: 'Post Go-Live Stabilization and Managed Services for a Leading Hydroponics Company',
        summary: 'Managed services can help businesses reduce IT costs by 20-40% by offloading the management of applications to a specialized provider. Learn how one of the kleading Hydroponics company optimised it AMS costs with DAX.',
        imageId: 'case-study-3'
    },
    {
        title: 'D365 F&O Managed Support Service for a Leading Real Estate Company',
        summary: 'By leveraging DAX\'s AMS, real estate companies can gain a competitive advantage by reducing IT costs, improving application performance, and enhancing customer experience.',
        imageId: 'case-study-4'
    },
    {
        title: 'D365 Field Service integrated with F&O Implementation for a US Based Systems Integrator',
        summary: 'Dynamics 365 Field Service is a leading cloud-based field service management (FSM) solution, with over 200,000 organizations using it worldwid. Learn how it turn out to be a great solution for of the organizations.',
        imageId: 'case-study-5'
    },
    {
        title: 'Implementation of Dynamics 365 Business Central',
        summary: 'Business Central has experienced rapid growth since its launch in 2018, with over 70,000 customers worldwide and a growing partner ecosystem. Discover how DAX implemented Business Central for one of our critical client.',
        imageId: 'case-study-6'
    },
    {
        title: 'D365 Field Service integrated with F&O Implementation for a Security System Service Provider',
        summary: 'Dynamics 365 Field Service empowers field technicians to be more efficient. Learn how a security system provider improved its field operations with this module.',
        imageId: 'case-study-7'
    },
    {
        title: 'Power Apps Portal Solution for a US based Non-Profit Organization',
        summary: 'Power Apps is a low-code platform, enabling anyone with minimal coding experience to create custom business applications. Learn how it helped NGO workers to save cost ans time.',
        imageId: 'case-study-8'
    },
    {
        title: 'Model Driven Power Apps based Solution for Education Business',
        summary: 'Create adaptive learning apps that cater to individual student needs and learning styles via power Apps! Develop more such interesting apps via power apps with DAX\'s help.',
        imageId: 'case-study-9'
    },
    {
        title: 'D365 F&O Implementation for the largest Cannabis Company in Medical Usage',
        summary: 'The cannabis industry is subject to a complex and ever-evolving regulatory landscape. D365 F&O helps cannabis businesses to comply with these regulations by providing features for track-and-trace, labeling, and reporting.',
        imageId: 'case-study-10'
    },
    {
        title: 'CRM Upgrade for a diversified Financial Services Organization',
        summary: 'CRM provide a wealth of customer data, enabling financial institutions to gain insights into customer behavior, preferences, and financial needs. Learn how CRM Upgrade landed this organization ahead of its competitors.',
        imageId: 'case-study-11'
    },
    {
        title: 'CRM Implementation for a leading IT Services Company',
        summary: 'CRM is proven to drive business growth, with companies that implement CRM experiencing an average sales increase of 12% and a customer retention rate increase of 27%. Learn more about how this IT Services organization improved reduced its operation costs via right CRM Implementation partner.',
        imageId: 'case-study-12'
    },
    {
        title: 'Dell Boomi Integration',
        summary: 'Looking for integrations? Can I engage Dell Boomi for my integration projects? How exactly Dell Boomi helps with integrations? This case study unravels how Dell Boomi transforms integration projects, answering all your questions.',
        imageId: 'case-study-13'
    },
    {
        title: 'Salesforce Implementations and Integrations with Dynamics 365',
        summary: 'Salesforce and Dynamics 365 represent two leading cloud-based enterprise software platforms, and their integration has become increasingly popular among businesses seeking to unify their customer relationship management (CRM) and enterprise resource planning (ERP). Want to learn how it\'s done?',
        imageId: 'case-study-14'
    },
    {
        title: 'Implementation of PTO Functionality for one of the major security solutions providers',
        summary: 'Know how the implementation of PTO functionality streamlined processes, reduced administrative workload by 40%.',
        imageId: 'case-study-15'
    },
    {
        title: 'CRM Implementation For A Leading Security System Management Company',
        summary: 'Specialized in crafting security solutions tailored to specific needs, serving government, education, and more.',
        imageId: 'case-study-16'
    },
    {
        title: 'Electronic Invoicing using D365 Finance and Operations',
        summary: 'Optimize your billing process with Electronic Invoicing in D365 Finance and Operations, ensuring automation, compliance, and efficiency.',
        imageId: 'case-study-17'
    }
];

export const METRICS = [
    { icon: BriefcaseBusiness, value: '12+', label: 'Successful B2B Industries in 2022-2023' },
    { icon: Smile, value: '25+', label: 'Happy CIOs, CTOs, and COOs' },
    { icon: Settings, value: '10+', label: 'Continuous Enhancements' },
    { icon: UserCheck, value: '55+', label: 'Professional Advisors Globally' },
    { icon: Award, value: '6+', label: 'Certifications on average per employee' },
    { icon: Briefcase, value: '20+', label: 'Years of Experience of our Senior Architects' }
];
