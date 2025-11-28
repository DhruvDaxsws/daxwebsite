import { Activity, BarChart3, Briefcase, Users, Bot, Rocket, Target, Zap } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/team', label: 'Our Team' },
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
    { name: 'Alice Johnson', role: 'Founder & CEO', imageId: 'team-member-1', bio: 'With over 20 years of experience in strategic consulting, Alice leads our team with a passion for innovation and client success.' },
    { name: 'Bob Williams', role: 'Head of Strategy', imageId: 'team-member-2', bio: 'Bob is a master of market dynamics and corporate strategy, helping businesses navigate complex challenges with confidence.' },
    { name: 'Charlie Brown', role: 'Lead Analyst', imageId: 'team-member-3', bio: 'Charlie\'s analytical prowess turns raw data into actionable insights, driving informed decision-making for our clients.' },
    { name: 'Diana Miller', role: 'Operations Expert', imageId: 'team-member-4', bio: 'Diana specializes in optimizing business processes for maximum efficiency and scalability.' },
    { name: 'Ethan Davis', role: 'Data Scientist', imageId: 'team-member-5', bio: 'Ethan leverages advanced analytics and machine learning to uncover hidden opportunities and drive growth.' },
    { name: 'Fiona Garcia', role: 'Marketing Strategist', imageId: 'team-member-6', bio: 'Fiona crafts compelling brand narratives and data-driven marketing campaigns that resonate with target audiences.' },
    { name: 'George Rodriguez', role: 'Senior Project Manager', imageId: 'team-member-7', bio: 'George ensures that every client project is delivered on time, within budget, and exceeds expectations.' },
    { name: 'Helen Wilson', role: 'Business Development Manager', imageId: 'team-member-8', bio: 'Helen builds strong client relationships and identifies new opportunities for collaboration and growth.' },
];

export const CASE_STUDIES = [
    { 
        title: 'Digital Transformation for a Retail Giant', 
        client: 'GlobalMart Inc.', 
        imageId: 'case-study-1',
        summary: 'We spearheaded a complete digital overhaul for GlobalMart, resulting in a 40% increase in online sales and a 25% improvement in operational efficiency.',
        challenge: 'GlobalMart was facing stiff competition from online-native retailers and struggling with an outdated legacy IT infrastructure. Customer engagement was low, and operational costs were high.',
        solution: 'Our team developed a multi-phase digital transformation strategy. This included migrating to a cloud-based infrastructure, implementing a new e-commerce platform with personalized customer experiences, and automating key supply chain processes.',
        outcome: 'Achieved a 40% year-over-year increase in online sales. Reduced operational costs by 25% through automation. Customer satisfaction scores improved by 35%.',
        icons: [Rocket, Zap, Target]
    },
    { 
        title: 'Market Entry Strategy for a Tech Startup', 
        client: 'InnovateIO', 
        imageId: 'case-study-2',
        summary: 'Guided InnovateIO through a successful entry into the competitive SaaS market, securing 10,000 users within the first six months.',
        challenge: 'InnovateIO had a groundbreaking product but lacked a clear strategy for entering a crowded market. They needed to identify the right target audience and differentiate themselves from established players.',
        solution: 'We conducted extensive market research to identify a niche audience segment. We then developed a go-to-market strategy that focused on content marketing, strategic partnerships, and a freemium pricing model to drive user acquisition.',
        outcome: 'Successfully acquired 10,000 active users in 6 months. Achieved a 15% conversion rate from free to paid plans. Established InnovateIO as a key player in their niche.',
        icons: [BarChart3, Users, Target]
    },
    { 
        title: 'AI-Powered Automation for Logistics', 
        client: 'SwiftLogistics', 
        imageId: 'case-study-3',
        summary: 'Implemented an AI-driven logistics platform for SwiftLogistics, reducing delivery times by 30% and cutting fuel costs by 15%.',
        challenge: 'SwiftLogistics was struggling with inefficient routing, high fuel consumption, and manual dispatch processes that led to delays and errors.',
        solution: 'Our solution involved developing a custom AI platform that optimized delivery routes in real-time, automated the dispatch process, and provided predictive maintenance alerts for their fleet. The platform integrated with their existing TMS.',
        outcome: 'Reduced average delivery times by 30%. Cut fuel costs by 15% through optimized routing. Eliminated 95% of manual dispatching errors.',
        icons: [Bot, Rocket, Zap]
    },
    { 
        title: 'Optimizing Manufacturing for Scale', 
        client: 'MechanoCorp', 
        imageId: 'case-study-4',
        summary: 'Revamped MechanoCorp\'s production line using lean manufacturing principles, increasing output by 50% without additional capital expenditure.',
        challenge: 'MechanoCorp was unable to meet growing demand due to production bottlenecks and an inefficient factory layout. They were considering a costly expansion.',
        solution: 'We performed a thorough analysis of their production floor and implemented lean manufacturing techniques, including value stream mapping and 5S organization. We redesigned the workflow and trained staff on the new, more efficient processes.',
        outcome: 'Increased production output by 50%. Reduced waste and material handling time by 40%. Avoided a multi-million dollar factory expansion.',
        icons: [Briefcase, Zap, Rocket]
    },
    { 
        title: 'Enhancing Customer Experience for a Bank', 
        client: 'SecureTrust Bank', 
        imageId: 'case-study-5',
        summary: 'Redesigned the entire customer journey for SecureTrust Bank, leading to a 20-point increase in their Net Promoter Score (NPS).',
        challenge: 'SecureTrust Bank had low customer satisfaction ratings and a high churn rate due to a fragmented and impersonal digital banking experience.',
        solution: 'We mapped the end-to-end customer journey and identified key pain points. We then co-designed a new omnichannel experience with the bank, focusing on seamless transitions between mobile, web, and in-person banking, and personalized financial advice.',
        outcome: 'Net Promoter Score (NPS) increased by 20 points. Digital customer engagement rose by 60%. Customer churn was reduced by 18% in the first year.',
        icons: [Users, Target, Bot]
    },
    { 
        title: 'Building a Data-Driven Culture', 
        client: 'HealthForward', 
        imageId: 'case-study-6',
        summary: 'Empowered HealthForward with a modern data stack and analytics training, transforming them into a data-driven organization.',
        challenge: 'HealthForward, a healthcare provider, collected vast amounts of data but lacked the tools and skills to derive meaningful insights for improving patient care.',
        solution: 'We implemented a modern data warehouse, integrated disparate data sources, and deployed a self-service BI tool. We also conducted organization-wide training to foster data literacy and a culture of evidence-based decision-making.',
        outcome: 'Enabled clinicians to access real-time patient data dashboards. Identified key factors that improved patient outcomes by 22%. Reduced administrative overhead by 15% through data automation.',
        icons: [BarChart3, Bot, Activity]
    }
];
