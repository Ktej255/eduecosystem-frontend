export interface Flashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    year?: number;
    tags: string[];
}

export const historyFlashcards: Flashcard[] = [
    {
        id: "hist_2023_01",
        front: "Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, was located in which region?",
        back: "Andhra (located on the banks of Krishna river).",
        subject: "History",
        topic: "Ancient India",
        year: 2023,
        tags: ["Buddhism", "Mahasanghikas", "Ancient Geography"]
    },
    {
        id: "hist_2022_01",
        front: "Who among the following was associated with the introduction of Ryotwari Settlement in India?",
        back: "Alexander Read and Thomas Munro.",
        subject: "History",
        topic: "Modern India",
        year: 2022,
        tags: ["Land Revenue", "British Rule", "Ryotwari"]
    },
    {
        id: "hist_2021_01",
        front: "With reference to Chausath Yogini Temple situated near Morena, distinguish its unique architectural feature.",
        back: "It is a circular temple built during the reign of Kachchhapaghata dynasty. It is the only circular temple built in India (though others exist). It is believed to have inspired the design of the Indian Parliament House.",
        subject: "History",
        topic: "Art & Culture",
        year: 2021,
        tags: ["Architecture", "Temples", "Kachchhapaghata"]
    },
    {
        id: "hist_2020_01",
        front: "The Vital-Vidvansak, the first monthly journal to have the untouchable people as its target audience was published by?",
        back: "Gopal Baba Walangkar.",
        subject: "History",
        topic: "Modern India",
        year: 2020,
        tags: ["Social Reform", "Journals", "Dalit Movement"]
    },
    {
        id: "hist_2019_01",
        front: "With reference to the Swadeshi Movement, consider the 'Barisal Sarvaswa' and who led it?",
        back: "Ashwini Kumar Dutt led the Swadeshi movement in Barisal (Bengal).",
        subject: "History",
        topic: "Modern India",
        year: 2019,
        tags: ["National Movement", "Swadeshi", "Bengal"]
    }
];
