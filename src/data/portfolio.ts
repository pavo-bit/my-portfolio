import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Mayuresh Mohanty',
        title: 'Product Engineer',
        subtitle: 'Product Engineer • Full-Stack Developer • Business Software Builder',
        bio: 'I am a Product Engineer and Full-Stack Developer specializing in Business Software, Full-Stack Development, and AI Integration. I build robust digital platforms and software solutions designed to streamline workflows and deliver high-impact user experiences.',
        avatar: '/logo.svg',
        location: '',
        email: 'mayureshmohanty07@gmail.com',
        phone: '+91 8596010127',
        website: 'https://mayureshmohanty.com',
        languages: [
            { name: 'English', level: 'Native' }
        ],
        socialLinks: [
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/mayuresh-mohanty-11973732a/',
                icon: 'linkedin',
                username: 'mayuresh-mohanty',
            },
            {
                platform: 'GitHub',
                url: 'https://github.com/pavo-bit',
                icon: 'github',
                username: 'pavo-bit',
            },
            {
                platform: 'Email',
                url: 'mailto:mayureshmohanty07@gmail.com',
                icon: 'email',
                username: 'mayureshmohanty07@gmail.com',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/mayuresh_mohanty/',
                icon: 'instagram',
                username: 'mayuresh_mohanty',
            }
        ],
    },
    projects: [
        {
            id: 'school-erp',
            slug: 'school-erp',
            title: 'School ERP',
            description: 'A unified education management platform designed around student, staff, attendance, academic, fee and administrative workflows.',
            problem: 'Schools face operational bottlenecks relying on fragmented systems or paper-based methods for managing students, attendance, and finances, leading to data inconsistency and administrative overhead.',
            solution: 'Developed a centralized ERP system that unifies core administrative workflows. It features role-based access for staff and teachers, automated fee tracking, and a streamlined attendance system.',
            architecture: 'A monolithic Node.js/Express backend connected to a relational PostgreSQL database to enforce strong data integrity, served to a responsive React frontend via RESTful APIs.',
            techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
            tools: ['VS Code', 'Git', 'Postman'],
            status: 'completed',
            demoUrl: '#',
            repoUrl: 'https://github.com/pavo-bit/school-erp',
            startDate: '2023-01-01',
            category: 'Business Software',
            image: '/project/terraflowplatform1.webp',
            features: [
                { title: 'Academic Management', items: ['Student enrollment', 'Class and section assignments', 'Examination scheduling'] },
                { title: 'Financial Operations', items: ['Fee collection', 'Invoice generation', 'Payment tracking'] }
            ]
        },
        {
            id: 'restaurant-management',
            slug: 'restaurant-management',
            title: 'Restaurant Management System',
            description: 'A restaurant operations platform connecting orders, tables, kitchen workflows, inventory and billing.',
            problem: 'Restaurants struggle with miscommunication between front-of-house staff and the kitchen, resulting in delayed orders, inaccurate billing, and poor inventory management.',
            solution: 'Built a real-time operations dashboard that connects table-side ordering directly to kitchen displays. Integrated an inventory tracking module that deducts stock based on recipe usage.',
            architecture: 'Utilized MongoDB for flexible menu schemas, with a Node.js backend handling order state transitions. The React frontend consumes these states to provide real-time updates without heavy polling.',
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
            tools: ['VS Code', 'Git'],
            status: 'completed',
            demoUrl: '#',
            repoUrl: 'https://github.com/pavo-bit/restaurant-management',
            startDate: '2023-05-01',
            category: 'Business Software',
            image: '/project/snbtinplatformpersiapansnbt20251.webp',
            features: [
                { title: 'Order Fulfillment', items: ['Table management', 'Kitchen display system', 'Order status tracking'] },
                { title: 'Operations', items: ['Dynamic menu pricing', 'Inventory depletion tracking', 'Daily sales reporting'] }
            ]
        },
        {
            id: 'book-platform',
            slug: 'book-platform',
            title: 'Book Platform',
            description: 'An intelligent digital reading and book-management platform focused on content organization, processing, reading progress and demand discovery.',
            problem: 'Readers lack a unified platform that not only organizes their digital libraries but also tracks reading progress intuitively while discovering new content.',
            solution: 'Created a SaaS application that allows users to upload, organize, and read digital books. Implemented a progress-tracking engine and a tagging system for efficient content discovery.',
            architecture: 'Built on Next.js leveraging server-side rendering for fast initial loads, backed by a scalable database for storing user libraries and progress states.',
            techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
            tools: ['VS Code', 'Git'],
            status: 'completed',
            demoUrl: '#',
            repoUrl: 'https://github.com/pavo-bit/book-platform',
            startDate: '2023-08-01',
            category: 'Product / SaaS',
            image: '/project/swarmaiblogwriter1.webp',
            features: [
                { title: 'Library Management', items: ['Book uploads', 'Custom collections', 'Progress tracking'] },
                { title: 'Reading Experience', items: ['Customizable reader settings', 'Bookmark synchronization', 'Highlighting'] }
            ]
        },
        {
            id: 'commercial-portfolio',
            slug: 'commercial-portfolio',
            title: 'Commercial Portfolio',
            description: 'A premium interactive portfolio website delivered for a real client.',
            problem: 'The client needed a highly interactive, performant web presence that stood out from standard templates, requiring sophisticated animations without compromising SEO or load times.',
            solution: 'Engineered a bespoke portfolio utilizing advanced animation libraries. Optimized asset delivery and component mounting to ensure 60fps scrolling and interactions.',
            architecture: 'Next.js App Router for optimized static generation, combined with Framer Motion and GSAP for kinetic interactions and timeline-based animations.',
            techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
            tools: ['VS Code', 'Figma'],
            status: 'completed',
            demoUrl: '#',
            repoUrl: 'https://github.com/pavo-bit/commercial-portfolio',
            startDate: '2024-01-01',
            category: 'Client Work',
            image: '/project/creativeportfoliowebsite1.webp',
            features: [
                { title: 'Interactive Design', items: ['Kinetic typography', 'Horizontal scroll sections', 'Custom cursor effects'] },
                { title: 'Performance', items: ['Image optimization', 'Lazy loaded 3D assets', 'Route pre-fetching'] }
            ]
        }
    ],
    productLab: [
        {
            id: 'cryptoverse',
            slug: 'cryptoverse',
            title: 'CryptoVerse',
            description: 'Gamified Digital Reward Platform',
            longDescription: 'An exploration into task-based rewards, referral mechanics, user retention, fraud prevention and sustainable reward economics.',
            techStack: ['Task Engine', 'Reward Engine', 'Referral System', 'Anti-Fraud', 'Reward Sustainability', 'User Retention'],
            tools: [],
            status: 'ongoing',
            startDate: '2024-03-01',
            category: 'Product Experiment · In Development',
            highlights: ['Task-based rewards', 'Reward engine', 'Referral mechanics', 'Fraud prevention', 'Sustainable reward economics']
        }
    ],
    clientWork: [
        {
            id: 'commercial-portfolio-client',
            slug: 'commercial-portfolio-client',
            title: 'Commercial Portfolio Website',
            description: 'A premium portfolio website delivered for a real client.',
            techStack: ['Next.js', 'Framer Motion'],
            tools: ['VS Code'],
            status: 'completed',
            startDate: '2024-01-01',
            category: 'Client Work'
        }
    ],
    experiences: [],
    education: [],
    achievements: [],
    techStack: [],
    hardSkills: [],
    softSkills: [],
    tools: [],
    process: [],
    faqs: [],
    blogs: [],
    gallery: []
};

// ==========================================
// ENVIRONMENT VARIABLES REFERENCE
// ==========================================
// NEXT_PUBLIC_GITHUB_USERNAME=pavo-bit
// GITHUB_TOKEN=your_github_token
// GROQ_API_KEY=your_groq_api_key
// GEMINI_API_KEY=your_gemini_api_key
// EMAIL_USER=your_smtp_email
// EMAIL_APP_PASSWORD=your_smtp_app_password
// ==========================================
