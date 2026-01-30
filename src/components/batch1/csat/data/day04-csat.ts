// UPSC CSAT Practice Set - Day 04 (January 4)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_04_PASSAGES: CSATPassage[] = [
    {
        id: 13, // Continuing numbering (4 per day)
        title: "Biodiversity (Assam's Wetlands)",
        content: `With winter, tiny moving specks appearing on the sky over Assam mark the arrival of avian guests that flock to riverbeds, wetlands, and natural and artificial reservoirs. To escape the biting cold of Siberian, Tibetan, and European landscapes, every year several migratory birds flock to wetlands and Ramsar sites in Assam. This year too, these winged guests have made their way to birding spots in the northeastern State, boosting its biodiversity and ecotourism initiatives. Vibrant migratory species such as white-fronted geese, pied avocets, greylag geese, ruddy shelducks, falcated ducks, ferruginous pochards, northern pintails, great crested grebes, and bar-headed geese – known for their high-altitude migratory flight – have arrived to roost in the State's wetlands.

Despite threats posed by unsustainable development activities to waterbodies and wildlife reserves, Assam remains an important seasonal hub for migratory birds. Some of the popular birding destinations in the State include Deepor Beel in Kamrup Metropolitan district; Maguri Motapung Beel in Tinsukia; Poni Diling Beel in Sivasagar; the lakes within the Kaziranga National Park and Tiger Reserve; and the largest of all, Son Beel in Karimganj district. Apart from these regular stopovers, the winter visitors also explore new and picturesque locations each year. Assam has long hosted these long-distance travellers with sustained conservation efforts, which continue to be strengthened to protect their habitats.`
    },
    {
        id: 14,
        title: "Social Justice (Acid Attacks)",
        content: `In 2023, 57 reported acid attacks took place in West Bengal, 31 in Uttar Pradesh, and 15 in Gujarat. According to the National Crime Records Bureau (NCRB), there were 207 reported cases of acid attacks in 2023, yet the conviction rate remains low. Of 703 acid attack cases in Indian courts in 2023 (including pending ones), there were only 16 convictions and 27 acquittals. Survivor Shaheen Malik’s case highlights the judicial insensitivity; she did not get a verdict for 16 years, and the accused were acquitted. The crime is severely underreported due to societal stigma, family pressure, and fear of retaliation.

Section 124 of the Bharatiya Nyaya Sanhita (BNS) mandates a minimum punishment of 10 years in prison up to life imprisonment, and a "just and reasonable" fine to meet the victim's medical expenses. The law also requires all public and private hospitals to provide free treatment to victims. In 2013, the Supreme Court mandated the regulation of acid sales, with a photo ID for buyers and a register of purchases, but this is poorly implemented. Survivors have called for a more comprehensive ban. In contrast, neighbouring Bangladesh passed stringent laws against acid sales and attacks in 2002, accompanied by large-scale awareness campaigns, after which the number of reported attacks has fallen 15% to 20% each year; from 494 attacks in 2002, there were only 13 in 2024.`
    },
    {
        id: 15,
        title: "Science & Tech (Asteroid Bennu)",
        content: `In 2020, NASA’s OSIRIS-REx mission collected samples from asteroid Bennu. On December 2, three teams published papers reporting Bennu contains sugar and other important molecules required to form RNA, and is also surprisingly abundant in supernova dust. Scientists reported finding ribose, the sugar molecule required for RNA, and glucose. Together with previous findings of amino acids and nucleobases, the entire inventory of molecules scientists believe are needed for life have now been confirmed on Bennu.

The findings strengthen the ‘RNA world’ hypothesis: that early life used RNA as a source of genetic information and for catalytic functions, before DNA and proteins evolved. According to the study, the abundance of asteroids like Bennu in the inner solar system would have provided sugars and amino acids, leading to the formation of life on earth more than 3.5 billion years ago. Scientists also found evidence of chemical reactions between ices forming polymer molecules before the ices melted. Bennu also showed unusually abundant presolar grains, especially supernova dust. The concentration of presolar grains was at least 6x higher than in other similar asteroids. These grains originated from various types of stars, with high concentrations from supernovae.`
    },
    {
        id: 16,
        title: "Environment (Cauvery Pollution)",
        content: `Along its course, the Cauvery receives water from multiple tributaries but reservoirs like the Mettur Dam regulate its flow. For generations, the river sustained temple towns and planting seasons. Today, it absorbs sullage and sewage that cities and industries are unable or unwilling to treat. Only a fraction of the sewage generated across the basin is treated adequately. The rest enters the river largely untreated. Clandestine dumping of waste is common. When surplus water is released (from dams), industrial effluents are allegedly discharged into the river under the cover of night.

At Mettur, where industrial clusters draw water, dyeing and bleaching units discharge effluents. In Erode, one of the most acute urban pressure points, tanneries remain the most contaminated source. Wastewater from many units enters streams such as Pichaikaranpallam, which drain into the river. Erode generates 35 to 40 MLD of sewage, but only about 8 MLD is treated. The Central Pollution Control Board classified this stretch as polluted. Further downstream, in Tiruppur, the Noyyal river (a tributary) brings effluents from dyeing units. A 2021 study published in Science of the Total Environment examined the presence of pharmaceutically active compounds. Researchers detected substances such as caffeine, carbamazepine, diclofenac, and triclosan at most sampling locations. High chemical concentrations cause the soil to silt up and harden, preventing roots from penetrating.`
    }
];

export const DAY_04_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Assam Wetlands (Questions 1-5)
    {
        id: 61,
        passageId: 13,
        question: "Which one of the following statements best reflects the central theme of the passage?",
        options: [
            "The impact of climate change on the migration patterns of Siberian birds.",
            "The role of Assam's wetlands as a critical seasonal habitat for migratory birds despite developmental threats.",
            "The economic potential of Deepor Beel as a tourist destination.",
            "The decline in the population of bar-headed geese due to pollution in Assam."
        ],
        correctAnswer: 1,
        explanation: "The text focuses on migratory birds arriving in Assam's wetlands and the dual reality of them being an 'important seasonal hub' despite 'threats posed by unsustainable development.'"
    },
    {
        id: 62,
        passageId: 13,
        question: "According to the passage, which of the following is NOT listed as a location where migratory birds are found in Assam?",
        options: ["Maguri Motapung Beel", "Son Beel", "Loktak Lake", "Poni Diling Beel"],
        correctAnswer: 2,
        explanation: "Loktak Lake is in Manipur. The text lists Deepor Beel, Maguri Motapung Beel, Poni Diling Beel, and Son Beel."
    },
    {
        id: 63,
        passageId: 13,
        question: "The passage mentions the \"bar-headed geese\" specifically for which characteristic?",
        options: [
            "Their vibrant white-fronted plumage.",
            "Their high-altitude migratory flight.",
            "Their status as an endangered species.",
            "Their nesting habits in artificial reservoirs."
        ],
        correctAnswer: 1,
        explanation: "The text explicitly describes 'bar-headed geese – known for their high-altitude migratory flight.'"
    },
    {
        id: 64,
        passageId: 13,
        question: "What is the author’s stance on the relationship between \"development\" and \"biodiversity\" in the context of Assam?",
        options: [
            "Development has completely destroyed the habitat, forcing birds to find new locations.",
            "Sustainable development has successfully eliminated all threats to wildlife.",
            "Threats from unsustainable development activities exist, yet the state remains a vital hub due to conservation efforts.",
            "The author suggests that development activities should be banned in all wetland areas."
        ],
        correctAnswer: 2,
        explanation: "The text states: 'Despite threats posed by unsustainable development... Assam remains an important seasonal hub... sustained conservation efforts continue.'"
    },
    {
        id: 65,
        passageId: 13,
        question: "Based on the passage, the arrival of these \"winged guests\" contributes primarily to:",
        options: [
            "The agricultural output of the state by controlling pests.",
            "The state's biodiversity and ecotourism initiatives.",
            "The reduction of water levels in artificial reservoirs.",
            "The increase in fish production in Son Beel."
        ],
        correctAnswer: 1,
        explanation: "The text states their arrival is 'boosting its biodiversity and ecotourism initiatives.'"
    },

    // Passage 2: Acid Attacks (Questions 6-10)
    {
        id: 66,
        passageId: 14,
        question: "Based on the passage, which of the following best explains the low conviction rate in acid attack cases in India?",
        options: [
            "The lack of stringent laws punishing the crime.",
            "The absence of medical evidence in most cases.",
            "Factors such as judicial delays, poor investigation, and witnesses/victims turning hostile due to pressure or settlements.",
            "The fact that most acid attacks are accidental."
        ],
        correctAnswer: 2,
        explanation: "The text mentions 'police investigation was shoddy... evidence ignored... judicial insensitivity' and Shaheen Malik's case highlights extreme delays and pressure."
    },
    {
        id: 67,
        passageId: 14,
        question: "What distinction does the passage draw between India and Bangladesh regarding acid attacks?",
        options: [
            "Bangladesh has failed to control acid attacks while India has succeeded.",
            "India relies on social awareness while Bangladesh relies on police enforcement.",
            "Bangladesh successfully reduced attacks from 494 to 13 through stringent laws and awareness, whereas India struggles with poor implementation and rising cases.",
            "Bangladesh has completely banned the production of acid, whereas India has not."
        ],
        correctAnswer: 2,
        explanation: "The text says Bangladesh passed 'stringent laws... accompanied by large-scale public awareness campaigns' leading to a massive drop."
    },
    {
        id: 68,
        passageId: 14,
        question: "According to the text, Section 124 of the Bharatiya Nyaya Sanhita (BNS) includes which of the following provisions?",
        options: [
            "Minimum punishment of 10 years imprisonment only.",
            "A \"just and reasonable\" fine to cover the victim's medical expenses only.",
            "1 and 3 only",
            "1, 2, and 3 (including Mandatory death penalty)"
        ],
        correctAnswer: 2,
        explanation: "The text says Section 124 mandates 'minimum punishment of 10 years... up to life' and a 'just and reasonable' fine. It does not mention a mandatory death penalty."
    },
    {
        id: 69,
        passageId: 14,
        question: "The Supreme Court's 2013 mandate regarding acid sales requires:",
        options: [
            "A total ban on the sale of all corrosive substances.",
            "Buyers to provide a photo ID and sellers to maintain a register of purchases.",
            "Acid to be sold only in government hospitals.",
            "Buyers to obtain a license from the District Magistrate."
        ],
        correctAnswer: 1,
        explanation: "The text states the 2013 mandate requires 'a photo ID for buyers, and sellers required to keep a register of purchases.'"
    },
    {
        id: 70,
        passageId: 14,
        question: "The passage cites the \"Shaheen Malik\" case primarily to illustrate:",
        options: [
            "The success of the Brave Souls Foundation in securing convictions.",
            "The effectiveness of the Delhi High Court in speeding up trials.",
            "The \"denial of justice\" caused by extreme judicial delay (16 years) and insensitivity leading to acquittal.",
            "The importance of financial compensation over legal rights."
        ],
        correctAnswer: 2,
        explanation: "The text uses her case to show 'denial of justice' where she 'did not get a verdict for 16 years' and suffered 'extreme judicial insensitivity.'"
    },

    // Passage 3: Asteroid Bennu (Questions 11-15)
    {
        id: 71,
        passageId: 15,
        question: "The discovery of ribose on Asteroid Bennu is significant because:",
        options: [
            "It proves that life currently exists on Bennu.",
            "Ribose is the sugar molecule required for RNA, supporting the theory that asteroids delivered key ingredients for life to Earth.",
            "It indicates that Bennu was once a planet like Earth.",
            "It suggests that Bennu is made entirely of sugar and ice."
        ],
        correctAnswer: 1,
        explanation: "The text states findings 'strengthen the ‘RNA world’ hypothesis... asteroids... would have provided sugars... leading to the formation of life.'"
    },
    {
        id: 72,
        passageId: 15,
        question: "The \"RNA world hypothesis\" mentioned in the passage proposes that:",
        options: [
            "DNA evolved before RNA and proteins.",
            "Early life relied on RNA for both genetic information and catalytic functions before DNA and proteins evolved.",
            "Life on Earth originated solely from volcanic activity.",
            "RNA can only be formed in the presence of liquid water on Earth."
        ],
        correctAnswer: 1,
        explanation: "The text defines it as: 'early life used RNA as a source of genetic information and for catalytic functions, before DNA and proteins evolved.'"
    },
    {
        id: 73,
        passageId: 15,
        question: "What are \"presolar grains\" as described in the context of the passage?",
        options: [
            "Grains of sand found on Mars.",
            "Dust particles that formed from the sun's surface.",
            "Dust particles, including supernova dust, that originated from stars before the sun formed.",
            "Frozen water droplets found in the asteroid belt."
        ],
        correctAnswer: 2,
        explanation: "The text says 'presolar grains... especially supernova dust... originated from various types of stars... from a time before the sun formed.'"
    },
    {
        id: 74,
        passageId: 15,
        question: "The passage notes that the concentration of presolar grains on Bennu was \"at least 6x higher\" than in other similar asteroids. What does this suggest about Bennu?",
        options: [
            "Bennu is much younger than other asteroids.",
            "Bennu formed in a part of space where supernova dust was present in abundant quantities.",
            "Bennu has been contaminated by space debris from Earth.",
            "Bennu is rapidly disintegrating into dust."
        ],
        correctAnswer: 1,
        explanation: "The text says concentrations were highest for grains of supernova origin, indicating it formed in a part of space where such dust was abundant."
    },
    {
        id: 75,
        passageId: 15,
        question: "Correct/Incorrect check: Bennu contains amino acids, evidence of early polymer formation, and OSIRIS-REx successfully collected samples.",
        options: [
            "Only amino acids were found, but no nucleobases.",
            "Sample collection was confirmed and entire inventory for life confirmed.",
            "Mission failed to find sugars.",
            "Mission failed to return."
        ],
        correctAnswer: 1,
        explanation: "The text states 'entire inventory of molecules... needed for life have now been confirmed on Bennu' and 'NASA’s OSIRIS-REx mission collected samples'."
    },

    // Passage 4: Cauvery Pollution (Questions 16-20)
    {
        id: 76,
        passageId: 16,
        question: "According to the passage, what is the primary behavior of industries regarding effluent discharge during the release of surplus water from dams?",
        options: [
            "They shut down operations to prevent overflow.",
            "They use the opportunity to allegedly discharge effluents into the river under the cover of night, masking the pollution.",
            "They increase their treatment capacity to match the water flow.",
            "They divert the effluents to agricultural fields."
        ],
        correctAnswer: 1,
        explanation: "The text states: 'When surplus water is released... industrial effluents are allegedly discharged into the river under the cover of night.'"
    },
    {
        id: 77,
        passageId: 16,
        question: "The passage highlights a \"2021 study\" that detected which specific type of contamination in the Cauvery?",
        options: [
            "Heavy metals like lead and mercury only.",
            "Radioactive waste from nuclear plants.",
            "Pharmaceutically active compounds like caffeine, antibiotics, and painkillers (diclofenac).",
            "Microplastics from textile industries only."
        ],
        correctAnswer: 2,
        explanation: "The text mentions the study detected 'pharmaceutically active compounds' including 'caffeine, carbamazepine, diclofenac, and triclosan'."
    },
    {
        id: 78,
        passageId: 16,
        question: "Which of the following locations is correctly paired with its primary source of industrial pollution as mentioned in the text?",
        options: [
            "Erode – Software Parks",
            "Tiruppur – Tanneries",
            "Erode – Tanneries",
            "Mettur – Automobile manufacturing"
        ],
        correctAnswer: 2,
        explanation: "The text explicitly states: 'In Erode... tanneries remain the most contaminated source.' (Tiruppur is linked to dyeing units)."
    },
    {
        id: 79,
        passageId: 16,
        question: "What is the impact of \"high chemical concentrations\" on agriculture mentioned in the passage?",
        options: [
            "It increases the crop yield by providing extra nutrients.",
            "It causes the soil to silt up and harden, preventing roots from penetrating.",
            "It attracts pests that destroy crops.",
            "It lowers the soil pH, making it too acidic for rice."
        ],
        correctAnswer: 1,
        explanation: "The text states: 'High chemical concentrations cause the soil to silt up and harden, preventing roots from penetrating.'"
    },
    {
        id: 80,
        passageId: 16,
        question: "The passage suggests that the \"Central Pollution Control Board\" (CPCB) has:",
        options: [
            "Classified the Erode stretch of the Cauvery as polluted.",
            "Declared the Cauvery water fit for drinking without treatment.",
            "Shut down all industries in Tiruppur.",
            "Built 40 new sewage treatment plants in Mettur."
        ],
        correctAnswer: 0,
        explanation: "The text states: 'The Central Pollution Control Board classified this stretch [Erode] as polluted.'"
    }
];

export const DAY_04_SESSION = {
    day: 4,
    title: "Biodiversity, Social Justice, Bennu & Cauvery",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Assam's Wetlands", "Acid Attacks", "Asteroid Bennu", "Cauvery Pollution"]
};
