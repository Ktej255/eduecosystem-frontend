import { SubjectConfig, WeeklyScheduleData } from "@/components/upsc/common/framework/SubjectPlanner";
import { Atom, Microscope, Rocket, Cpu } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const SCIENCE_TECH_MODULES = [
    {
        id: "1",
        title: "Biology & Health",
        description: "Cell biology, Human physiology, Diseases, and Vaccines.",
        icon: React.createElement(Microscope),
        color: "green",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "Physics & Chemistry",
        description: "Scientific principles, optics, sound, nanotechnology, and nuclear physics.",
        icon: React.createElement(Atom),
        color: "blue",
        topicRange: [16, 25] as [number, number]
    },
    {
        id: "3",
        title: "Space & Defense",
        description: "ISRO missions, satellites, launch vehicles, and DRDO missiles.",
        icon: React.createElement(Rocket),
        color: "orange",
        topicRange: [26, 40] as [number, number]
    },
    {
        id: "4",
        title: "Emerging Technologies",
        description: "AI, Blockchain, 5G, Biotech, and Robotics.",
        icon: React.createElement(Cpu),
        color: "violet",
        topicRange: [41, 55] as [number, number]
    }
];

// Real UPSC Science & Technology Topics organized by Module
const SCIENCE_TECH_TOPICS = [
    // Module 1: Biology & Health (1-15)
    { id: 1, title: "Cell Biology Fundamentals", moduleId: "1", priority: "High", staticFocus: "Cell structure, organelles", keyConcepts: ["Mitochondria", "Nucleus", "Ribosomes"], currentAffairsCount: 2 },
    { id: 2, title: "DNA & Genetics", moduleId: "1", priority: "High", staticFocus: "DNA structure, genes, chromosomes", keyConcepts: ["Double Helix", "Genetic Code"], currentAffairsCount: 4 },
    { id: 3, title: "Human Body Systems", moduleId: "1", priority: "Medium", staticFocus: "Digestive, respiratory, circulatory", keyConcepts: ["Organs", "Functions"], currentAffairsCount: 2 },
    { id: 4, title: "Infectious Diseases", moduleId: "1", priority: "High", staticFocus: "Bacteria, viruses, protozoa", keyConcepts: ["Pathogens", "Transmission"], currentAffairsCount: 6 },
    { id: 5, title: "Vaccines & Immunology", moduleId: "1", priority: "High", staticFocus: "Immune system, vaccine types", keyConcepts: ["Antibodies", "mRNA Vaccines"], currentAffairsCount: 8 },
    { id: 6, title: "Nutrition & Deficiencies", moduleId: "1", priority: "Medium", staticFocus: "Vitamins, minerals, disorders", keyConcepts: ["Scurvy", "Night Blindness"], currentAffairsCount: 2 },
    { id: 7, title: "Biotechnology Basics", moduleId: "1", priority: "High", staticFocus: "Genetic engineering, cloning", keyConcepts: ["GMO", "CRISPR"], currentAffairsCount: 7 },
    { id: 8, title: "CRISPR Gene Editing", moduleId: "1", priority: "High", staticFocus: "Cas9, gene therapy applications", keyConcepts: ["Gene Editing", "Ethical Issues"], currentAffairsCount: 6 },
    { id: 9, title: "Stem Cells", moduleId: "1", priority: "Medium", staticFocus: "Types, applications, ethics", keyConcepts: ["Pluripotent", "Regenerative Medicine"], currentAffairsCount: 4 },
    { id: 10, title: "Biodiversity & Conservation", moduleId: "1", priority: "Medium", staticFocus: "Species loss, protected areas", keyConcepts: ["Hotspots", "Red List"], currentAffairsCount: 5 },
    { id: 11, title: "Pharmacology Basics", moduleId: "1", priority: "Low", staticFocus: "Drug types, antibiotics", keyConcepts: ["AMR", "Drug Resistance"], currentAffairsCount: 4 },
    { id: 12, title: "Health Schemes in India", moduleId: "1", priority: "High", staticFocus: "Ayushman Bharat, AIIMS network", keyConcepts: ["PM-JAY", "Universal Health"], currentAffairsCount: 5 },
    { id: 13, title: "Epidemic & Pandemic Response", moduleId: "1", priority: "High", staticFocus: "COVID-19, preparedness", keyConcepts: ["Contact Tracing", "Containment"], currentAffairsCount: 6 },
    { id: 14, title: "Microbiology", moduleId: "1", priority: "Medium", staticFocus: "Bacteria, fungi, viruses", keyConcepts: ["Microbiome", "Probiotics"], currentAffairsCount: 3 },
    { id: 15, title: "Genetics & Heredity", moduleId: "1", priority: "Medium", staticFocus: "Mendel's laws, inheritance patterns", keyConcepts: ["Dominant", "Recessive"], currentAffairsCount: 2 },

    // Module 2: Physics & Chemistry (16-25)
    { id: 16, title: "Laws of Motion & Mechanics", moduleId: "2", priority: "Medium", staticFocus: "Newton's laws, momentum", keyConcepts: ["Force", "Acceleration"], currentAffairsCount: 1 },
    { id: 17, title: "Light & Optics", moduleId: "2", priority: "Medium", staticFocus: "Reflection, refraction, lenses", keyConcepts: ["Total Internal Reflection", "Fiber Optics"], currentAffairsCount: 2 },
    { id: 18, title: "Sound & Waves", moduleId: "2", priority: "Low", staticFocus: "Frequency, wavelength, ultrasonics", keyConcepts: ["Sonar", "Ultrasound"], currentAffairsCount: 1 },
    { id: 19, title: "Electricity & Magnetism", moduleId: "2", priority: "Medium", staticFocus: "Current, voltage, electromagnetism", keyConcepts: ["Motors", "Generators"], currentAffairsCount: 2 },
    { id: 20, title: "Nuclear Physics", moduleId: "2", priority: "High", staticFocus: "Fission, fusion, radioactivity", keyConcepts: ["Nuclear Reactors", "Half-life"], currentAffairsCount: 5 },
    { id: 21, title: "Nuclear Energy in India", moduleId: "2", priority: "High", staticFocus: "DAE, nuclear plants, thorium", keyConcepts: ["BARC", "Three-stage program"], currentAffairsCount: 4 },
    { id: 22, title: "Nanotechnology", moduleId: "2", priority: "High", staticFocus: "Nanomaterials, applications", keyConcepts: ["Carbon Nanotubes", "Nanomedicine"], currentAffairsCount: 5 },
    { id: 23, title: "Chemical Elements & Reactions", moduleId: "2", priority: "Low", staticFocus: "Periodic table, bonding", keyConcepts: ["Acids", "Bases", "pH"], currentAffairsCount: 1 },
    { id: 24, title: "Fuels & Combustion", moduleId: "2", priority: "Medium", staticFocus: "Fossil fuels, hydrogen", keyConcepts: ["Green Hydrogen", "Biofuels"], currentAffairsCount: 6 },
    { id: 25, title: "Materials Science", moduleId: "2", priority: "Medium", staticFocus: "Polymers, composites, alloys", keyConcepts: ["Graphene", "Superconductors"], currentAffairsCount: 4 },

    // Module 3: Space & Defense (26-40)
    { id: 26, title: "Indian Space Program: ISRO", moduleId: "3", priority: "High", staticFocus: "History, organization, achievements", keyConcepts: ["Vikram Sarabhai", "Thumba"], currentAffairsCount: 7 },
    { id: 27, title: "Launch Vehicles: PSLV & GSLV", moduleId: "3", priority: "High", staticFocus: "Stages, capabilities, records", keyConcepts: ["Cryogenic Engine", "104 Satellites"], currentAffairsCount: 6 },
    { id: 28, title: "Chandrayaan Missions", moduleId: "3", priority: "High", staticFocus: "Moon exploration, findings", keyConcepts: ["Vikram Lander", "Pragyan Rover"], currentAffairsCount: 8 },
    { id: 29, title: "Mangalyaan & Mars Exploration", moduleId: "3", priority: "High", staticFocus: "Mars Orbiter Mission", keyConcepts: ["Cheapest Mars Mission", "Methane Detection"], currentAffairsCount: 4 },
    { id: 30, title: "Gaganyaan: Human Spaceflight", moduleId: "3", priority: "High", staticFocus: "India's crewed mission", keyConcepts: ["Vyommitra", "GSLV Mk III"], currentAffairsCount: 7 },
    { id: 31, title: "Satellite Types & Applications", moduleId: "3", priority: "High", staticFocus: "Communication, navigation, remote sensing", keyConcepts: ["INSAT", "IRNSS/NavIC"], currentAffairsCount: 5 },
    { id: 32, title: "NavIC Navigation System", moduleId: "3", priority: "Medium", staticFocus: "Indian GPS alternative", keyConcepts: ["IRNSS", "Regional Coverage"], currentAffairsCount: 4 },
    { id: 33, title: "Remote Sensing & GIS", moduleId: "3", priority: "Medium", staticFocus: "Earth observation, mapping", keyConcepts: ["Cartosat", "RISAT"], currentAffairsCount: 3 },
    { id: 34, title: "Space Debris & Sustainability", moduleId: "3", priority: "Medium", staticFocus: "Kessler syndrome, mitigation", keyConcepts: ["LEO Cleanup", "ISRO Project NETRA"], currentAffairsCount: 3 },
    { id: 35, title: "DRDO Overview", moduleId: "3", priority: "High", staticFocus: "Defense research organization", keyConcepts: ["Labs", "Self-reliance"], currentAffairsCount: 5 },
    { id: 36, title: "Missiles: Agni, Prithvi, BrahMos", moduleId: "3", priority: "High", staticFocus: "Ballistic and cruise missiles", keyConcepts: ["ICBM", "Mach Speed"], currentAffairsCount: 6 },
    { id: 37, title: "Anti-Satellite Weapons (ASAT)", moduleId: "3", priority: "Medium", staticFocus: "Mission Shakti", keyConcepts: ["Kinetic Kill", "Space Warfare"], currentAffairsCount: 3 },
    { id: 38, title: "Fighter Aircraft & UAVs", moduleId: "3", priority: "Medium", staticFocus: "Tejas, Rafale, drones", keyConcepts: ["LCA", "Swarm Drones"], currentAffairsCount: 5 },
    { id: 39, title: "Defense Production & Atmanirbharta", moduleId: "3", priority: "High", staticFocus: "Make in India for defense", keyConcepts: ["Positive Indigenization List"], currentAffairsCount: 6 },
    { id: 40, title: "Cyber Security & Defense", moduleId: "3", priority: "High", staticFocus: "CERT-In, cyber warfare", keyConcepts: ["Encryption", "Critical Infrastructure"], currentAffairsCount: 5 },

    // Module 4: Emerging Technologies (41-55)
    { id: 41, title: "Artificial Intelligence Basics", moduleId: "4", priority: "High", staticFocus: "ML, neural networks", keyConcepts: ["Deep Learning", "Training Data"], currentAffairsCount: 8 },
    { id: 42, title: "AI Applications & Ethics", moduleId: "4", priority: "High", staticFocus: "Healthcare, finance, governance", keyConcepts: ["Bias", "Explainability"], currentAffairsCount: 7 },
    { id: 43, title: "India's AI Strategy", moduleId: "4", priority: "High", staticFocus: "NITI Aayog AI roadmap", keyConcepts: ["AI for All", "National AI Portal"], currentAffairsCount: 5 },
    { id: 44, title: "Internet of Things (IoT)", moduleId: "4", priority: "Medium", staticFocus: "Sensors, smart devices", keyConcepts: ["Smart Cities", "Industrial IoT"], currentAffairsCount: 4 },
    { id: 45, title: "5G Technology", moduleId: "4", priority: "High", staticFocus: "Spectrum, use cases, rollout", keyConcepts: ["Millimeter Wave", "Low Latency"], currentAffairsCount: 6 },
    { id: 46, title: "Blockchain Technology", moduleId: "4", priority: "High", staticFocus: "Distributed ledger, consensus", keyConcepts: ["Smart Contracts", "Decentralization"], currentAffairsCount: 5 },
    { id: 47, title: "Cryptocurrency & CBDC", moduleId: "4", priority: "High", staticFocus: "Bitcoin, RBI Digital Rupee", keyConcepts: ["e₹", "Mining"], currentAffairsCount: 7 },
    { id: 48, title: "Quantum Computing", moduleId: "4", priority: "High", staticFocus: "Qubits, superposition", keyConcepts: ["Quantum Supremacy", "DST Mission"], currentAffairsCount: 5 },
    { id: 49, title: "Robotics & Automation", moduleId: "4", priority: "Medium", staticFocus: "Industrial robots, service robots", keyConcepts: ["Cobots", "RPA"], currentAffairsCount: 4 },
    { id: 50, title: "3D Printing / Additive Manufacturing", moduleId: "4", priority: "Medium", staticFocus: "Prototyping, bioprinting", keyConcepts: ["Aerospace", "Medical Implants"], currentAffairsCount: 3 },
    { id: 51, title: "Electric Vehicles", moduleId: "4", priority: "High", staticFocus: "Battery tech, charging infrastructure", keyConcepts: ["FAME-II", "Lithium-ion"], currentAffairsCount: 7 },
    { id: 52, title: "Renewable Energy Tech", moduleId: "4", priority: "High", staticFocus: "Solar, wind, hydrogen", keyConcepts: ["Green Hydrogen Mission"], currentAffairsCount: 8 },
    { id: 53, title: "Biometric & Digital Identity", moduleId: "4", priority: "Medium", staticFocus: "Aadhaar, facial recognition", keyConcepts: ["UIDAI", "Privacy Concerns"], currentAffairsCount: 4 },
    { id: 54, title: "Data Protection & Privacy", moduleId: "4", priority: "High", staticFocus: "DPDP Act, GDPR comparison", keyConcepts: ["Consent", "Data Principal"], currentAffairsCount: 6 },
    { id: 55, title: "Semiconductors & Chip Manufacturing", moduleId: "4", priority: "High", staticFocus: "India Semiconductor Mission", keyConcepts: ["Fab", "Chennai-Dholera Corridor"], currentAffairsCount: 7 }
] as any[];

const SCIENCE_TECH_CHAPTERS = SCIENCE_TECH_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 10,
    slots: 2
}));

const SCIENCE_TECH_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 24,
        totalPages: 100,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9, 10],
            friday: [11, 12],
            saturday: ["Biology Mock Test 1"],
            sunday: [1, 2, 3, 4, 5]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 90,
        days: {
            monday: [16, 17, 18],
            tuesday: [26, 27],
            wednesday: [28, 29],
            thursday: [30, 31],
            friday: [41, 42],
            saturday: ["Space & Tech Mock"],
            sunday: [16, 26, 28, 41]
        }
    },
    // More weeks
];

export const SCIENCE_TECH_CONFIG: SubjectConfig = {
    id: "science-tech",
    title: "Science & Technology",
    subtitle: "General Science to Cutting-Edge Developments",
    totalChapters: 55,
    totalParts: 4,
    modules: SCIENCE_TECH_MODULES,
    topics: SCIENCE_TECH_TOPICS,
    chapters: SCIENCE_TECH_CHAPTERS,
    schedules: SCIENCE_TECH_SCHEDULE,
    colors: {
        primary: "violet",
        heroGradient: "from-violet-800 via-purple-900 to-indigo-900"
    },
    basePath: "/student/upsc/science-tech"
};
