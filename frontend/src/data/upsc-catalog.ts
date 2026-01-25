import { BookOpen, Landmark, Globe, BrainCircuit, Coins, Leaf, Palette, Atom } from 'lucide-react';

export interface UPSCBook {
    id: string;
    title: string;
    author?: string;
    description: string;
    price: number;
    discountedPrice: number;
    coverImage?: string;
    isNCERT?: boolean;
    category?: string; // For grouping like "Modern India", "Ancient", etc.
}

export interface UPSCSubject {
    id: string;
    title: string;
    description: string;
    icon: any; // Lucide icon
    color: string;
    bgColor: string;
    books: UPSCBook[];
}

export const UPSC_CATALOG: UPSCSubject[] = [
    {
        id: 'polity',
        title: 'Polity',
        description: 'Indian Constitution and Political System',
        icon: BookOpen,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        books: [
            {
                id: 'laxmikanth',
                title: 'Indian Polity by M. Laxmikanth',
                author: 'M. Laxmikanth',
                description: 'The bible of Indian Polity for UPSC aspirants. 8th Edition with 100+ chapters.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'dd-basu',
                title: 'Introduction to the Constitution of India',
                author: 'D.D. Basu',
                description: 'Comprehensive constitutional law reference with detailed analysis.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'ncert-polity-11',
                title: 'Indian Constitution at Work (Class 11)',
                description: 'Fundamental understanding of the Indian Constitution. 10 chapters.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            },
            {
                id: 'ncert-polity-12',
                title: 'Politics in India Since Independence (Class 12)',
                description: 'Post-independence political developments in India. 9 chapters.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            }
        ]
    },
    {
        id: 'history',
        title: 'History',
        description: 'Ancient, Medieval, Modern & World History',
        icon: Landmark,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        books: [
            // Modern History
            {
                id: 'spectrum',
                title: 'A Brief History of Modern India',
                author: 'Rajiv Ahir',
                description: 'Comprehensive coverage of modern Indian history from 1707 to Independence.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Modern History'
            },
            {
                id: 'bipin-chandra',
                title: 'India\'s Struggle for Independence',
                author: 'Bipin Chandra',
                description: 'Detailed account of the Indian freedom movement.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Modern History'
            },
            {
                id: 'ncert-history-12-3',
                title: 'Themes in Indian History III (Class 12)',
                description: 'Modern India - Colonial period to Independence.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Modern History'
            },

            // Ancient History
            {
                id: 'ancient-india-rs-sharma',
                title: 'India\'s Ancient Past',
                author: 'R.S. Sharma',
                description: 'Comprehensive study of Ancient India from prehistoric times to 1200 AD.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Ancient History'
            },
            {
                id: 'ncert-history-12-1',
                title: 'Themes in Indian History I (Class 12)',
                description: 'Ancient India - Harappan to Mauryan Empire.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Ancient History'
            },
            {
                id: 'ncert-history-6',
                title: 'Our Pasts I (Class 6)',
                description: 'Introduction to Ancient Indian History.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Ancient History'
            },

            // Medieval History
            {
                id: 'medieval-india-satish-chandra',
                title: 'History of Medieval India',
                author: 'Satish Chandra',
                description: 'Detailed analysis of medieval Indian history (800-1700 AD).',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Medieval History'
            },
            {
                id: 'ncert-history-12-2',
                title: 'Themes in Indian History II (Class 12)',
                description: 'Medieval India - Mughals and Bhakti movement.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Medieval History'
            },
            {
                id: 'ncert-history-7',
                title: 'Our Pasts II (Class 7)',
                description: 'Introduction to Medieval Indian History.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Medieval History'
            },

            // World History
            {
                id: 'modern-world-history-norman-lowe',
                title: 'Mastering Modern World History',
                author: 'Norman Lowe',
                description: 'Essential for Mains GS1: World History from 1900s.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'World History'
            },
            {
                id: 'history-world-arjun-dev',
                title: 'History of the World',
                author: 'Arjun Dev',
                description: 'NCERT based world history covering major revolutions and wars.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'World History'
            }
        ]
    },
    {
        id: 'geography',
        title: 'Geography',
        description: 'Physical, Indian & Human Geography',
        icon: Globe,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        books: [
            // Physical Geography
            {
                id: 'savinder-singh',
                title: 'Physical Geography',
                author: 'Savinder Singh',
                description: 'The standard textbook for Physical Geography concepts.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Physical Geography'
            },
            {
                id: 'gc-leong',
                title: 'Certificate Physical and Human Geography',
                author: 'G.C. Leong',
                description: 'Most trusted book for Physical Geography fundamentals.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Physical Geography'
            },
            {
                id: 'ncert-geography-11',
                title: 'Fundamentals of Physical Geography (Class 11)',
                description: 'Core concepts of Physical Geography.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Physical Geography'
            },

            // Indian Geography
            {
                id: 'majid-husain',
                title: 'Geography of India',
                author: 'Majid Husain',
                description: 'Comprehensive coverage of Indian Geography for UPSC.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Indian Geography'
            },
            {
                id: 'khullar',
                title: 'India: A Comprehensive Geography',
                author: 'D.R. Khullar',
                description: 'Detailed study of Indian Geography with maps and data.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false,
                category: 'Indian Geography'
            },
            {
                id: 'ncert-geography-12',
                title: 'India: People and Economy (Class 12)',
                description: 'Human and Economic Geography of India.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true,
                category: 'Indian Geography'
            }
        ]
    },
    {
        id: 'economy',
        title: 'Economy',
        description: 'Indian Economy & Macroeconomics',
        icon: Coins,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        books: [
            {
                id: 'ramesh-singh',
                title: 'Indian Economy',
                author: 'Ramesh Singh',
                description: 'The most comprehensive book on Indian Economy for UPSC.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'sriram-ias',
                title: 'Indian Economy by Sriram IAS',
                author: 'Sriram IAS',
                description: 'Concise notes on Indian Economy with current affairs.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'ncert-economy-11',
                title: 'Indian Economic Development (Class 11)',
                description: 'Foundation of Indian Economy and development policies.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            },
            {
                id: 'ncert-economy-12',
                title: 'Macroeconomics (Class 12)',
                description: 'Understanding macroeconomic concepts and policies.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            }
        ]
    },
    {
        id: 'environment',
        title: 'Environment',
        description: 'Ecology, Biodiversity & Climate Change',
        icon: Leaf,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        books: [
            {
                id: 'shankar-ias',
                title: 'Environment by Shankar IAS',
                author: 'Shankar IAS Academy',
                description: 'The definitive guide for Environment & Ecology for UPSC.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'pd-sharma',
                title: 'Ecology and Environment',
                author: 'P.D. Sharma',
                description: 'Comprehensive textbook on Ecology and Environmental Science.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'ncert-biology-12',
                title: 'Biology (Class 12) - Ecology Unit',
                description: 'Chapters on Ecology, Biodiversity, and Environmental Issues.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            }
        ]
    },
    {
        id: 'science',
        title: 'Science & Tech',
        description: 'General Science & Recent Developments',
        icon: Atom,
        color: 'text-violet-600',
        bgColor: 'bg-violet-50',
        books: [
            {
                id: 'science-tech-tmh',
                title: 'Science & Technology for Civil Services',
                author: 'Ravi P. Agrahari',
                description: 'Comprehensive coverage of S&T topics for UPSC.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'ncert-science-10',
                title: 'Science (Class 10)',
                description: 'Foundation of Physics, Chemistry, and Biology.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            },
            {
                id: 'ncert-physics-11',
                title: 'Physics Part I (Class 11)',
                description: 'Fundamental concepts of Physics.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            },
            {
                id: 'ncert-chemistry-11',
                title: 'Chemistry Part I (Class 11)',
                description: 'Basic concepts of Chemistry.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            }
        ]
    },
    {
        id: 'art_culture',
        title: 'Art & Culture',
        description: 'Indian Heritage, Art Forms & Architecture',
        icon: Palette,
        color: 'text-pink-600',
        bgColor: 'bg-pink-50',
        books: [
            {
                id: 'nitin-singhania',
                title: 'Indian Art and Culture',
                author: 'Nitin Singhania',
                description: 'The most popular book on Art & Culture for UPSC.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'ccrt',
                title: 'An Introduction to Indian Art (CCRT)',
                description: 'Official CCRT publication on Indian Art history.',
                price: 2999,
                discountedPrice: 299,
                isNCERT: false
            },
            {
                id: 'ncert-fine-arts-11',
                title: 'An Introduction to Indian Art (Class 11)',
                description: 'NCERT textbook covering Indian Art from prehistoric to modern times.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            },
            {
                id: 'ncert-fine-arts-12',
                title: 'Indian Art and Culture (Class 12)',
                description: 'Detailed study of Indian art forms, architecture, and cultural heritage.',
                price: 0,
                discountedPrice: 0,
                isNCERT: true
            }
        ]
    }
];
