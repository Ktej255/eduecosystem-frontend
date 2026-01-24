
export interface ResumeData {
    personal: {
        name: string;
        title: string;
        email: string;
        phone: string;
        location: string;
        summary: string;
    };
    education: {
        degree: string;
        institution: string;
        year: string;
        details?: string;
    }[];
    experience: {
        role: string;
        company: string;
        duration: string;
        description: string[];
    }[];
    skills: {
        category: string;
        items: string[];
    }[];
    achievements: string[];
    certifications: {
        name: string;
        year: string;
    }[];
    languages: string[];
}

export const SUNITA_RESUME: ResumeData = {
    personal: {
        name: "Sunita Kumari",
        title: "Senior English Instructor & PGT English",
        email: "sunita10.in@gmail.com",
        phone: "+91 8209884010",
        location: "Mahendragarh, Haryana",
        summary: "Dedicated and result-oriented English Educator with 10+ years of experience in fostering communication skills and academic excellence. Expert in curriculum development, phonetics, and student-centered pedagogy. Consistently maintained 100% pass rates in Board exams and successfully transitioned to hybrid digital learning models."
    },
    education: [
        {
            degree: "M.A. in English",
            institution: "Rajasthan University",
            year: "2015"
        },
        {
            degree: "Bachelor of Education (B.Ed.)",
            institution: "Raj Rishi Bhartrihari Matsya University, Alwar",
            year: "2016"
        },
        {
            degree: "Bachelor of Arts (B.A.)",
            institution: "Punjab University",
            year: "2010"
        }
    ],
    experience: [
        {
            role: "English Instructor",
            company: "Raath International School, Dughera",
            duration: "2014 – 2015",
            description: [
                "Delivered engaging lectures on English literature and linguistics.",
                "Mentored students for Inter-School Declamation competitions, securing District-level awards.",
                "Commended for exceptional classroom management and parent interactions."
            ]
        },
        {
            role: "PGT English",
            company: "RPS School, Mohindergarh",
            duration: "2012",
            description: [
                "Assessed student progress through standardized testing and personalized feedback.",
                "Organized co-curricular activities including drama and creative writing workshops."
            ]
        },
        {
            role: "Senior English Teacher",
            company: "Various Prestigious Institutions",
            duration: "2012 – Present",
            description: [
                "Served at H.D. Sr. Sec. School (Jhajjar), Modern Public School, Devyani International, and others.",
                "Maintained a consistent 100% pass rate in English for 10th and 12th Board classes.",
                "Improved average English proficiency scores by 30% through 'Language Lab' sessions.",
                "Transitioned physical classrooms to hybrid models during 2020-21 using digital tools."
            ]
        }
    ],
    skills: [
        {
            category: "Core Competencies",
            items: ["Curriculum Planning", "Classroom Management", "Board Exam Preparation", "Student Counseling"]
        },
        {
            category: "Pedagogy",
            items: ["Phonetics", "Creative Writing", "Hybrid Learning", "Language Lab Management"]
        }
    ],
    achievements: [
        "Maintained 100% pass result in English for Board-bound classes (10th & 12th).",
        "Developed 'Grammar-Made-Easy' handbook for middle school students.",
        "Awarded First Prize in District-level Creative Writing mentorship.",
        "Recognized for Excellence in Classroom Management at RPS School."
    ],
    certifications: [
        { name: "REET Level 2 Qualified", year: "2021 & 2022" },
        { name: "CTET Level 1 & Level 2 Qualified", year: "2019" }
    ],
    languages: ["English (Expert)", "Hindi (Native)", "Punjabi (Fluent)"]
};
