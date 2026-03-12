export interface MainsAngle {
    likelyQuestion: string;
    structure: string[];
    keywords: string[];
}

export const ANCIENT_MAINS_ANGLES: Record<number, MainsAngle> = {
    1: {
        likelyQuestion: "Discuss the impact of climatic changes on the transition from Mesolithic to Neolithic periods in India.",
        structure: [
            "Holocene transition leading to warmer, stable climate.",
            "Shift from nomadic hunting to sedentary domestication.",
            "Development of microliths and specialized toolkits."
        ],
        keywords: ["Holocene Epoch", "Sedentary life", "Microliths", "Domestication"]
    },
    2: {
        likelyQuestion: "How did the geographical location of Harappan sites influence their trade and urban planning?",
        structure: [
            "Proximity to Indus and tributaries for internal transport.",
            "Coastal ports like Lothal for link to Mesopotamia.",
            "Grid pattern and drainage as response to flood risks."
        ],
        keywords: ["Citadel", "Drainage System", "Maritime Trade", "Lost-wax Tech"]
    },
    3: {
        likelyQuestion: "Analyze the significance of the Chalcolithic culture as a transition between the Neolithic and the Bronze Age.",
        structure: [
            "Introduction of first metal (copper) alongside stone tools.",
            "Emergence of distinct regional cultures like Ahar, Kayatha, and Malwa.",
            "Growth of specialized crafts and early beginnings of urbanization."
        ],
        keywords: ["Chalcolithic", "Copper age", "Regional cultures", "Black and Red Ware"]
    },
    4: {
        likelyQuestion: "Examine the religious and economic significance of Indus Valley seals.",
        structure: [
            "Seals as marks of identity and ownership in long-distance trade.",
            "Depiction of Pashupati and Mother Goddess as seeds of later Hinduism.",
            "Steatite carving reflecting advanced aesthetic and technical skill."
        ],
        keywords: ["Proto-Shiva", "Sealings", "Steatite", "Zebu Motif"]
    },
    5: {
        likelyQuestion: "Discuss the characteristic features of Harappan urbanism and its impact on contemporary civilizations.",
        structure: [
            "Highly planned cities with grid layout and advanced drainage.",
            "Standardization of bricks, weights, and measures.",
            "Impact on regional trade networks and resource management."
        ],
        keywords: ["Urbanism", "Standardization", "Citadel", "Great Bath"]
    },
    6: {
        likelyQuestion: "To what extent did the geographical factors influence the emergence and decline of the Indus Valley Civilization?",
        structure: [
            "Role of Indus floods in agricultural surplus and supporting urbanization.",
            "Strategic location near coastal routes facilitating maritime trade with Mesopotamia (Meluha).",
            "Environmental degradation and hydrological shifts (drying of Sarasvati) as a primary cause of urban collapse."
        ],
        keywords: ["Hydrological shift", "Urbanization", "Bronze Age", "Recessional Farming"]
    },
    7: {
        likelyQuestion: "Compare and contrast the political and social structure of the Early Vedic and Later Vedic periods.",
        structure: [
            "Shift from tribal (Jana) to territorial (Janapada) organizations.",
            "Transition from egalitarian society to a more complex varna-based hierarchy.",
            "Changing status of women and the role of tribal assemblies (Sabha and Samiti)."
        ],
        keywords: ["Rig Veda", "Sabha/Samiti", "Varna System", "Pastoralism"]
    },
    8: {
        likelyQuestion: "Examine the factors that led to the rise of territorial states (Janapadas) in the Later Vedic period.",
        structure: [
            "Agricultural expansion due to the use of iron tools (PGW culture).",
            "Emergence of a regular taxation system and administrative machinery.",
            "Growth of fixed settlements and territorial identity."
        ],
        keywords: ["Janapada", "Iron Age", "PGW", "Bali/Bhaga"]
    },
    9: {
        likelyQuestion: "Discuss the causes for the rise of heterodox sects like Jainism and Buddhism in the 6th century BC.",
        structure: [
            "Reaction against complex Vedic rituals and animal sacrifices.",
            "Social discontent among Vaishyas and Kshatriyas with Brahmanical hegemony.",
            "Impact of iron-age urbanization and the need for new ethical frameworks."
        ],
        keywords: ["Heterodox", "Ahimsa", "Middle Path", "Tirthankara"]
    },
    10: {
        likelyQuestion: "Analyze the factors that contributed to the rise of Magadha as the first pre-eminent empire in ancient India.",
        structure: [
            "Strategic location of Rajgir and Pataliputra (Jaladurga).",
            "Abundance of iron ore resources for weaponry and agriculture.",
            "Visionary leadership of Bimbisara, Ajatashatru, and the Nandas."
        ],
        keywords: ["Mahajanapada", "Magadha", "Haryanka", "Chariots"]
    },
    11: {
        likelyQuestion: "Evaluate the impact of the Iranian and Macedonian invasions on the political and cultural life of ancient India.",
        structure: [
            "Introduction of Aramaic script and Kharosthi in the Northwest.",
            "Cultural synthesis and the development of Gandhara art.",
            "Opening of new land and sea routes for trade and communication."
        ],
        keywords: ["Achaemenid", "Alexander", "Gandhara Art", "Cultural Synthesis"]
    },
    12: {
        likelyQuestion: "Discuss the various sources that help in reconstructing the history of the Maurya Empire.",
        structure: [
            "Literary sources: Arthashastra, Indica, and Buddhist texts.",
            "Epigraphic sources: Ashokan edicts (Major and Minor).",
            "Archaeological findings: NBPW pottery and structural remains."
        ],
        keywords: ["Epigraphy", "Indica", "NBPW", "Megasthenes"]
    },
    13: {
        likelyQuestion: "Examine the concept of Ashoka's Dhamma and its role as a unifying force in his vast empire.",
        structure: [
            "Dhamma as an ethical code rather than a dogmatic religion.",
            "Emphasis on social harmony, tolerance, and respect towards elders.",
            "Use of Dhamma Mahamattas to spread and implement these principles."
        ],
        keywords: ["Dhamma", "Paternal Despotism", "Edicts", "Non-violence"]
    },
    14: {
        likelyQuestion: "Discuss the role of Kautilya's Arthashastra in shaping the administrative centralized character of the Mauryan Empire.",
        structure: [
            "Centralized bureaucracy and the hierarchical role of Adhyakshas (Superintendents).",
            "The establishment of a sophisticated intelligence and espionage network (Gudha Purushas).",
            "State control and monopolies over critical economic resources like mines and forests.",
            "Saptanga theory as the organic conception of the state."
        ],
        keywords: ["Bureaucratic Despotism", "Saptanga Theory", "Realpolitik", "Dharmasthiya"]
    },
    15: {
        likelyQuestion: "Analyze the significance of the Indo-Greeks and Scythians in introducing new elements into Indian culture and administration.",
        structure: [
            "Introduction of high-quality gold coinage and Greek artistic techniques.",
            "The title of 'Basileus' and the concept of divine kingship.",
            "Impact on astronomy, medicine, and calendar systems."
        ],
        keywords: ["Basileus", "Indo-Greeks", "Shakas", "Gold Coins"]
    },
    16: {
        likelyQuestion: "Examine the role of the Satavahanas in bridging the cultures of North and South India.",
        structure: [
            "Patronage to both Brahmanism and Buddhism (Amravati school).",
            "Administrative link through the Ahamara system and land grants.",
            "Maritime trade and connections with both coastal regions."
        ],
        keywords: ["Satavahanas", "Matriliny", "Prakrit", "Amravati Art"]
    },
    17: {
        likelyQuestion: "Discuss the social and economic life reflected in the Sangam literature of ancient South India.",
        structure: [
            "Tinai system: Five physiological divisions and their respective lifestyles.",
            "Vibrant internal and overseas trade (Indo-Roman trade).",
            "Status of women and the significance of warrior ethics (Hero stones)."
        ],
        keywords: ["Sangam", "Tinai", "Puhar", "Indo-Roman Trade"]
    },
    18: {
        likelyQuestion: "Evaluate the contribution of Kanishka to the spread of Buddhism and the development of Indian art.",
        structure: [
            "Patronage to Mahayana Buddhism and the 4th Buddhist Council.",
            "Development of Gandhara and Mathura schools of art.",
            "Propagation of Buddhism along the Silk Road through Central Asia."
        ],
        keywords: ["Kushans", "Kanishka", "Silk Road", "Mahayana"]
    },
    19: {
        likelyQuestion: "Examine the factors that led to the emergence of the Gupta Empire and its consolidation in Northern India.",
        structure: [
            "Support from powerful clans like the Lichchhavis.",
            "Strategic use of matrimonial alliances and military conquests.",
            "Effective use of resources from the fertile Gangetic plain."
        ],
        keywords: ["Gupta Empire", "Lichchhavis", "Matrimonial Alliance", "Prashasti"]
    },
    20: {
        likelyQuestion: "Analyze the reasons for labeling the Gupta period as the 'Golden Age' of Indian history.",
        structure: [
            "Flourishing of Sanskrit literature (Kalidasa) and science (Aryabhatta).",
            "Stability and prosperity reflected in high-purity gold dinars.",
            "Evolution of temple architecture (Panchayatana style)."
        ],
        keywords: ["Golden Age", "Nava-ratnas", "Brahmanical Revival", "Siddhantas"]
    },
    21: {
        likelyQuestion: "Discuss the administrative and cultural achievements of Harshavardhana of Kanauj.",
        structure: [
            "Shift of capital from Thanesar to Kanauj and its political significance.",
            "Patronage to literature (Banabhatta) and Nalanda University.",
            "Periodic religious assemblies at Prayag and the visit of Xuanzang."
        ],
        keywords: ["Harsha", "Kanauj", "Xuanzang", "Nalanda"]
    },
    22: {
        likelyQuestion: "Examine the contribution of the Pallavas and Chalukyas to the development of South Indian temple architecture.",
        structure: [
            "Evolution from rock-cut (Mamallapuram) to structural temples (Kanchi).",
            "Dravidian style elements introduced by the Pallavas.",
            "Vesara style experiments by the Chalukyas at Aihole and Pattadakal."
        ],
        keywords: ["Pallava", "Chalukya", "Dravida", "Vesara"]
    },
    23: {
        likelyQuestion: "Analyze the main philosophical systems (Darsanas) that emerged in ancient India.",
        structure: [
            "Six orthodox systems (Sankhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta).",
            "The concept of Brahman, Atman, and Moksha as central themes.",
            "Transition from ritualistic Vedic focus to philosophical enquiry."
        ],
        keywords: ["Darsanas", "Upanishad", "Brahman", "Moksha"]
    },
    24: {
        likelyQuestion: "Evaluate the advancements made in science and technology during the ancient period in India.",
        structure: [
            "Achievements in Mathematics (Concept of Zero, Decimal system).",
            "Progress in Medicine and Surgery (Sushruta and Charaka).",
            "Excellence in metallurgy (Mehrauli Iron Pillar)."
        ],
        keywords: ["Aryabhatta", "Metallurgy", "Ayurveda", "Decimal System"]
    },
    25: {
        likelyQuestion: "Discuss the evolution of Sanskrit literature from the Vedic period to the classical Gupta age.",
        structure: [
            "Vedic texts, Epics (Ramayana, Mahabharata), and Puranas.",
            "Development of Classical Sanskrit drama and poetry (Kalidasa).",
            "Establishment of Panini's grammar as the standard for literary expression."
        ],
        keywords: ["Sanskrit", "Kalidasa", "Epics", "Ashtadhyayi"]
    },
    26: {
        likelyQuestion: "Analyze the legacy of ancient Indian culture and its influence on Southeast Asian civilizations.",
        structure: [
            "Diffusion of Indian religions (Hinduism and Buddhism) through trade and cultural contact.",
            "Impact on art, architecture (Borobudur, Angkor Wat), and scripts.",
            "Transmission of administrative and legal concepts based on Dharmashastras."
        ],
        keywords: ["Greater India", "Cultural Diffusion", "Sanskritization", "Maritime Trade"]
    },
    27: {
        likelyQuestion: "Trace the sequence of social changes in ancient India with reference to the varna and jati systems.",
        structure: [
            "Origin of Varna in the Rig Vedic period and its hardening in the Later Vedic age.",
            "Proliferation of Jatis (castes) due to occupational specialization and inter-mixing.",
            "Concept of untouchability and the changing social status of Shudras and women."
        ],
        keywords: ["Varna", "Jati", "Sanskaras", "Social Stratification"]
    }
};
// Add more as needed for all 27 chapters
