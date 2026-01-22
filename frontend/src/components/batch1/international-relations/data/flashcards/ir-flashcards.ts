// International Relations Flashcards - Complete Collection
// Covers India's Foreign Policy, International Organizations, and Global Issues

export interface IRFlashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

export const irFlashcards: IRFlashcard[] = [
    // India's Foreign Policy
    {
        id: "ir-01",
        front: "What are the basic principles of India's foreign policy?",
        back: "Panchsheel (1954): Mutual respect, non-aggression, non-interference, equality, peaceful coexistence. Non-Alignment during Cold War. Now: Strategic Autonomy, Multi-alignment, Neighborhood First.",
        subject: "International Relations",
        topic: "Foreign Policy",
        tags: ["Foreign Policy", "Panchsheel"],
        difficulty: "easy"
    },
    {
        id: "ir-02",
        front: "What is India's Neighborhood First Policy?",
        back: "Priority to South Asian neighbors (SAARC countries). Focus: Connectivity, trade, people-to-people ties. Challenges: China's influence, Pakistan relations. BIMSTEC as alternative platform.",
        subject: "International Relations",
        topic: "Foreign Policy",
        tags: ["Neighborhood", "SAARC"],
        difficulty: "medium"
    },
    {
        id: "ir-03",
        front: "What is the Quad?",
        back: "Quadrilateral Security Dialogue: India, USA, Japan, Australia. Indo-Pacific focus. Aims: Free and open Indo-Pacific, counter China's assertiveness. Working groups on vaccines, climate, technology.",
        subject: "International Relations",
        topic: "Groupings",
        tags: ["Quad", "Indo-Pacific"],
        difficulty: "easy"
    },
    {
        id: "ir-04",
        front: "What is BRICS?",
        back: "Brazil, Russia, India, China, South Africa (+ new members from 2024). Represents emerging economies. New Development Bank (HQ Shanghai). Focus: Reform of global financial architecture, South-South cooperation.",
        subject: "International Relations",
        topic: "Groupings",
        tags: ["BRICS", "Emerging"],
        difficulty: "easy"
    },

    // International Organizations
    {
        id: "ir-05",
        front: "What are the main organs of the United Nations?",
        back: "6 principal organs: General Assembly (193 members), Security Council (5P+10), ECOSOC, ICJ (The Hague), Secretariat (SG), Trusteeship (suspended). India seeks permanent UNSC seat.",
        subject: "International Relations",
        topic: "UN",
        tags: ["UN", "Security Council"],
        difficulty: "medium"
    },
    {
        id: "ir-06",
        front: "What is the G20?",
        back: "Group of 20: Major economies (85% global GDP). India hosted 2023 Presidency. Focus: Global economic governance, climate finance, digital public infrastructure. Annual Leaders' Summit.",
        subject: "International Relations",
        topic: "Groupings",
        tags: ["G20", "Economy"],
        difficulty: "easy"
    },
    {
        id: "ir-07",
        front: "What is SCO?",
        back: "Shanghai Cooperation Organisation: China, Russia, India, Pakistan + Central Asian states. Focus: Security, counter-terrorism (RATS), economic cooperation. India joined 2017. Samarkand Declaration.",
        subject: "International Relations",
        topic: "Groupings",
        tags: ["SCO", "Security"],
        difficulty: "medium"
    },
    {
        id: "ir-08",
        front: "What is ASEAN?",
        back: "Association of Southeast Asian Nations: 10 members including Indonesia, Singapore, Vietnam. India is Dialogue Partner (ASEAN+3, EAS). Act East Policy engages ASEAN. HQ: Jakarta.",
        subject: "International Relations",
        topic: "Groupings",
        tags: ["ASEAN", "East Asia"],
        difficulty: "medium"
    },

    // Bilateral Relations
    {
        id: "ir-09",
        front: "What characterizes India-US relations?",
        back: "Comprehensive Global Strategic Partnership. Defense: LEMOA, COMCASA, BECA agreements. Trade: ~$200 billion. Issues: H-1B visas, trade deficit. Shared concerns on China.",
        subject: "International Relations",
        topic: "Bilateral",
        tags: ["USA", "Defense"],
        difficulty: "medium"
    },
    {
        id: "ir-10",
        front: "What are the India-China disputes?",
        back: "Border: LAC (3,488 km), Aksai Chin, Arunachal. Recent: Galwan clash (2020). Trade: $100+ billion but deficit. BRI opposition. Tibet, Dalai Lama as irritant. Balancing cooperation and competition.",
        subject: "International Relations",
        topic: "Bilateral",
        tags: ["China", "Border"],
        difficulty: "hard"
    },
    {
        id: "ir-11",
        front: "What is India's Act East Policy?",
        back: "Evolution of Look East Policy (1991). Focus: ASEAN, Japan, Korea, Australia. Three Cs: Commerce, Culture, Connectivity. Northeast India as gateway. Counters China's influence.",
        subject: "International Relations",
        topic: "Foreign Policy",
        tags: ["Act East", "ASEAN"],
        difficulty: "medium"
    },

    // Global Issues
    {
        id: "ir-12",
        front: "What is India's position on climate change?",
        back: "Common But Differentiated Responsibilities (CBDR). NDC: 45% emission intensity reduction by 2030, 50% non-fossil energy. Net Zero by 2070. International Solar Alliance founder. Climate finance demands.",
        subject: "International Relations",
        topic: "Climate",
        tags: ["Climate", "UNFCCC"],
        difficulty: "medium"
    },
    {
        id: "ir-13",
        front: "What is the Nuclear Non-Proliferation Treaty (NPT)?",
        back: "1968 treaty preventing nuclear weapons spread. 5 recognized nuclear states (P5). India NOT a signatory (considers it discriminatory). India has No-First-Use policy.",
        subject: "International Relations",
        topic: "Nonproliferation",
        tags: ["NPT", "Nuclear"],
        difficulty: "medium"
    },
    {
        id: "ir-14",
        front: "What is the International Solar Alliance (ISA)?",
        back: "India-France initiative (2015 Paris). 120+ member countries. Focus: Solar energy deployment in tropical countries. HQ: Gurugram, India. First treaty-based organization HQ in India.",
        subject: "International Relations",
        topic: "Groupings",
        tags: ["ISA", "Solar", "India"],
        difficulty: "easy"
    },
    {
        id: "ir-15",
        front: "What is India's diaspora policy?",
        back: "35+ million Indian diaspora (largest in world). OCI/PIO cards. Pravasi Bharatiya Divas (Jan 9). Remittances: $100+ billion/year (world's highest). Brain drain vs. brain gain debates.",
        subject: "International Relations",
        topic: "Diaspora",
        tags: ["Diaspora", "Remittances"],
        difficulty: "easy"
    }
];
