// Art & Culture Flashcards - Complete Collection
// Covers Architecture, Dance, Music, Paintings, Literature, and Festivals

export interface ArtCultureFlashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

export const artCultureFlashcards: ArtCultureFlashcard[] = [
    // Architecture
    {
        id: "ac-01",
        front: "What are the three temple architecture styles in India?",
        back: "1. Nagara (North) - curvilinear shikhara, no boundary wall. 2. Dravida (South) - pyramidal vimana, elaborate gopurams. 3. Vesara (Deccan) - mix of both. Example: Khajuraho (Nagara), Brihadeswara (Dravida).",
        subject: "Art & Culture",
        topic: "Architecture",
        tags: ["Temples", "Architecture"],
        difficulty: "medium"
    },
    {
        id: "ac-02",
        front: "What are the features of Indo-Islamic architecture?",
        back: "Synthesis of Indian and Islamic: Domes, minarets, arches (true arch), geometric patterns, calligraphy. No human figures. Examples: Qutub Minar, Taj Mahal, Humayun's Tomb. Pietra Dura inlay work.",
        subject: "Art & Culture",
        topic: "Architecture",
        tags: ["Islamic", "Architecture"],
        difficulty: "medium"
    },
    {
        id: "ac-03",
        front: "What is Stupa architecture?",
        back: "Buddhist monument with: Anda (dome), Harmika (square platform), Chhatra (umbrella), Medhi (circular terrace), Torana (gateway). Sanchi Stupa (oldest surviving), Bharhut, Amaravati. Contains relics.",
        subject: "Art & Culture",
        topic: "Architecture",
        tags: ["Buddhist", "Stupa"],
        difficulty: "medium"
    },

    // Dance Forms
    {
        id: "ac-04",
        front: "What are the 8 classical dance forms of India?",
        back: "1. Bharatanatyam (TN), 2. Kathak (North), 3. Kathakali (Kerala), 4. Odissi (Odisha), 5. Kuchipudi (AP), 6. Manipuri (Manipur), 7. Mohiniyattam (Kerala), 8. Sattriya (Assam). All based on Natyashastra.",
        subject: "Art & Culture",
        topic: "Dance",
        tags: ["Classical Dance"],
        difficulty: "easy"
    },
    {
        id: "ac-05",
        front: "What distinguishes Kathakali?",
        back: "Kerala's dance-drama with elaborate makeup (chutti), costumes, and facial expressions. Characters: Pacha (green - noble), Kathi (knife - villains), Thaadi (beard). Stories from Ramayana, Mahabharata.",
        subject: "Art & Culture",
        topic: "Dance",
        tags: ["Kathakali", "Kerala"],
        difficulty: "medium"
    },
    {
        id: "ac-06",
        front: "What is the Natyashastra?",
        back: "Ancient Sanskrit treatise on performing arts by Bharata Muni (200 BCE - 200 CE). Covers drama, dance, music. Defines 8 Rasas (emotions): Shringara, Hasya, Karuna, Raudra, Veera, Bhayanaka, Bibhatsa, Adbhuta. Later added Shanta.",
        subject: "Art & Culture",
        topic: "Literature",
        tags: ["Natyashastra", "Dance"],
        difficulty: "hard"
    },

    // Music
    {
        id: "ac-07",
        front: "What is the difference between Hindustani and Carnatic music?",
        back: "Hindustani (North): Persian influence, khyal/thumri styles, sitar/tabla. Carnatic (South): Temple tradition, kriti compositions, veena/mridangam. Both use ragas (melody) and talas (rhythm).",
        subject: "Art & Culture",
        topic: "Music",
        tags: ["Music", "Classical"],
        difficulty: "medium"
    },
    {
        id: "ac-08",
        front: "What is a Raga?",
        back: "Melodic framework with specific ascending (arohana) and descending (avarohana) notes. Creates mood (rasa). Examples: Bhairavi (morning), Yaman (evening), Malhar (rain). Each raga suited to specific time/season.",
        subject: "Art & Culture",
        topic: "Music",
        tags: ["Raga", "Music"],
        difficulty: "medium"
    },

    // Paintings
    {
        id: "ac-09",
        front: "What are the major schools of Indian painting?",
        back: "Mughal (realistic, Persian influence), Rajput (romantic, Hindu themes - Mewar, Bundi, Kishangarh), Pahari (hills - Kangra, Basohli), Deccan (Hyderabad, Bijapur), Bengal (Abanindranath Tagore).",
        subject: "Art & Culture",
        topic: "Paintings",
        tags: ["Paintings", "Miniature"],
        difficulty: "hard"
    },
    {
        id: "ac-10",
        front: "What makes Ajanta Paintings unique?",
        back: "Buddhist cave paintings (2nd BCE - 6th CE). Fresco technique (wet plaster). Themes: Jataka tales, Buddha life. Famous: Padmapani and Vajrapani murals. Naturalistic style. UNESCO World Heritage.",
        subject: "Art & Culture",
        topic: "Paintings",
        tags: ["Ajanta", "Buddhist"],
        difficulty: "medium"
    },
    {
        id: "ac-11",
        front: "What is Warli Art?",
        back: "Tribal art from Maharashtra (Warli tribe). White paste on mud walls. Geometric shapes: circles, triangles, squares. Depicts daily life, farming, festivals. Tarpa dance circle is iconic motif.",
        subject: "Art & Culture",
        topic: "Folk Art",
        tags: ["Warli", "Tribal"],
        difficulty: "easy"
    },

    // Festivals & Traditions
    {
        id: "ac-12",
        front: "What are the major harvest festivals of India?",
        back: "Pongal (Tamil Nadu - Thai month), Makar Sankranti (pan-India - Jan 14), Baisakhi (Punjab - April), Onam (Kerala - Chingam), Bihu (Assam - April). Celebrate agricultural prosperity.",
        subject: "Art & Culture",
        topic: "Festivals",
        tags: ["Festivals", "Harvest"],
        difficulty: "easy"
    },
    {
        id: "ac-13",
        front: "What is Kumbh Mela?",
        back: "World's largest religious gathering. Held every 12 years at 4 sites: Prayagraj (Ganga-Yamuna-Saraswati), Haridwar (Ganga), Ujjain (Shipra), Nashik (Godavari). UNESCO Intangible Cultural Heritage.",
        subject: "Art & Culture",
        topic: "Festivals",
        tags: ["Kumbh", "Religious"],
        difficulty: "easy"
    },

    // Literature & Languages
    {
        id: "ac-14",
        front: "What are the classical languages of India?",
        back: "6 classical languages: Sanskrit, Tamil, Telugu, Kannada, Malayalam, Odia. Criteria: 1500+ year history, original literary tradition, distinct from modern form. Tamil is oldest living language.",
        subject: "Art & Culture",
        topic: "Literature",
        tags: ["Languages", "Classical"],
        difficulty: "medium"
    },
    {
        id: "ac-15",
        front: "What is Sangam Literature?",
        back: "Ancient Tamil literature (300 BCE - 300 CE) from three Sangams at Madurai. Secular and devotional poetry. Describes Muvendhar (Chera, Chola, Pandya). Tolkappiyam is oldest Tamil grammar. Tirukural by Thiruvalluvar.",
        subject: "Art & Culture",
        topic: "Literature",
        tags: ["Sangam", "Tamil"],
        difficulty: "hard"
    }
];
