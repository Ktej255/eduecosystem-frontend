// UPSC CSAT Practice Set - Day 11 (January 11)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_11_PASSAGES: CSATPassage[] = [
    {
        id: 40,
        title: "Frontier Science (Quantum Physics)",
        content: `Imagine a diamond. You probably thought of a clear and flawless gemstone used in jewellery. But to a physicist, a perfect diamond might actually be boring. Something magical happens when the diamond is just a little 'broken'. For decades, scientists have been fascinated by a type of defect in the diamond crystal lattice called the nitrogen-vacancy (NV) centre. A diamond is a rigid grid of carbon atoms; an NV centre occurs where one carbon atom is replaced by a nitrogen atom and the spot next to it is made vacant.

The NV centre behaves like a single atom trapped in a solid cage, giving it remarkable abilities. The centre has a property called spin. Think of it as a small magnetic arrow. Because the NV centre is trapped inside the diamond structure, it is shielded from much of the noise that would otherwise scramble its spin. This helps the spin stay coherent for longer. This is useful because scientists can then measure how the spin's internal energy levels respond to the environment, including very weak magnetic or electric fields. This makes NV centres some of the world's smallest and most precise sensors.

Recently, researchers from Austria and Japan yesterday packed about 9 trillion NV centres into a diamond and placed it inside a superconducting microwave cavity. They observed a phenomenon called 'superradiance'. Usually, when excited spins release energy, they do so randomly (fluorescence). But here, the spins synchronised, emitting a quick, bright burst of microwave light. This suggests that packing NV centres could pave the way for a 'superradiant maser' (microwave laser) or ultra-stable frequency sources for time-keeping. This challenges the notion that defects are always detrimental; in the quantum world, a 'broken' diamond is a sensor and a source of coherent radiation.`
    },
    {
        id: 41,
        title: "Plant Biology (Phyto-acoustics)",
        content: `Do you play music to your plants? This was asked of the famous plant biologist James Wong. While plants have neither ears nor brains, research shows they can detect vibrations. In one study, a mustard family plant, exposed to the sound of caterpillars chewing, produced higher levels of bitter toxins as a defence. Remarkably, these plants distinguished the vibrations of leaf munchers from those of wind or insect mating calls.

What has the latest research into this evergreen question shown? According to the California Learning Resource Network, the germination of a plant seed is affected when sound is heard (sonic stimulation). Interestingly, the specific frequency range increases water uptake and seed metabolism. Natural sounds, for example, the frequency range of soothing tones and classical music, seem to affect gene expression and hormone regulation. In contrast, dissonant sounds such as explosives or crackers retard seed growth.

An article in Yale Environmental Review (2024) pointed out that using music to enhance crop growth is fascinating as well as crucial for sustainable agriculture. In 2015, researchers reported playing light classical and meditation music to marigold and chickpea plants; they grew taller and stronger than those exposed to no music. In 2022, K.R. Shivanna highlighted that these aspects of 'psychoacoustics' were mentioned by the physicist J.C. Bose long ago. Instead of blasting crackers during festivals which hinders plant life, playing soothing music could actually help plants grow better.`
    },
    {
        id: 42,
        title: "Environment (Grasslands & Climate)",
        content: `The United Nations has declared 2026 to be the 'International Year for Rangelands and Pastoralists'. In 2022, a group of scientists wrote an open letter urging the parties of the UN Framework Convention on Climate Change (UNFCCC) to broaden their goals to be inclusive of all biomes on earth, but especially grasslands and savannahs. Their letter warned that even though savannahs are potentially better carbon sinks, forests have hogged the limelight in global climate negotiations. The recent announcement of the Tropical Forest Forever Facility (TFFF) at COP30 was exciting, but it failed to include other major biomes like the Cerrado or the Pantanal.

"Everyone is facing the effects of climate change, but the desert people are facing some of the harshest effects," said Samantha Murray of the Indigenous Desert Alliance. Grasslands are one of the most threatened ecosystems in the world. They have suffered rapid habitat loss due to conversion to forests and plantations, the spread of invasive species, and the extraction of fossil fuels. In addition, many governments have suppressed indigenous land management techniques such as controlled fires.

For India, recognizing grasslands is crucial. A white paper by the Ashoka Trust for Research in Ecology and the Environment (ATREE) argued that grasslands must be recognized in the country's Nationally Determined Contributions (NDCs). While the Union Environment Ministry considers grasslands for afforestation purposes, the Ministry of Rural Development publishes the "wasteland atlas of India" that often includes grasslands. By recognizing grasslands as a crucial carbon sink, the Indian government can move away from forest-focused carbon sequestration schemes and give its own climate mitigation efforts a boost.`
    },
    {
        id: 43,
        title: "Public Health (Privatisation & Policy)",
        content: `The state of healthcare in India has repeatedly been in the news. From fake medicines to unethical clinical trials, countless people have suffered. At the same time, risk factors for disease are steadily rising due to policy gaps and systemic failures. The consumption of ultra-processed foods is driving an epidemic of non-communicable diseases. Access to good health remains a privilege that only a few can afford. Privatisation further compounds the problem. With private equity increasingly driving India's private healthcare industry, doctors are now expected to meet monthly targets, much like in any profit-driven sector. Through schemes such as AB-PMJAY and public-private partnerships, public money is increasingly shunted to the private sector.

Privatisation has also impacted medical education. With most private medical colleges charging upwards of ₹40 lakhs for undergraduate training, doctors are forced to shift their focus from understanding the social causes of disease to earning enough to recover the massive investment. Rudolf Virchow, a German pathologist, argued that "medicine is a social science" and that "politics is nothing else but medicine on a large scale." He recognized that disease was not merely a biological event but a political and social outcome shaped by poverty and exclusion.

In India, the physician's role has never been confined to diagnosis and treatment alone. Doctors occupy a unique position of trust and moral authority. They must ask why outpatient departments are crowded with patients presenting advanced stages of disease; why medicines are unaffordable; why kidney failure is rising. It is not neutrality but a conscious choice to forgo influence. In a deeply unequal society, doctors can amplify lived realities. Their social standing combines with ethical obligation to act as agents of social change.`
    }
];

export const DAY_11_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Quantum Physics
    {
        id: 196,
        passageId: 40,
        question: "According to the passage, why is the \"nitrogen-vacancy (NV) centre\" in a diamond considered scientifically valuable?",
        options: [
            "Because it makes the diamond appear clearer and more flawless for jewellery.",
            "Because it shields the spin from external noise, allowing it to stay coherent longer and act as a precise sensor for weak fields.",
            "Because it turns the diamond into a superconductor at room temperature.",
            "Because it replaces all carbon atoms with nitrogen, creating a new element."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"shielded from much of the noise... stay coherent for longer... measure how the spin's internal energy levels respond... makes NV centres some of the world's smallest and most precise sensors.\""
    },
    {
        id: 197,
        passageId: 40,
        question: "The passage describes a recent experiment involving \"superradiance\". What does this phenomenon entail in the context of NV centres?",
        options: [
            "The random emission of green light by individual atoms.",
            "The absorption of all microwave energy by the diamond.",
            "The synchronised release of energy by trillions of spins in a bright, quick burst of microwave light.",
            "The shattering of the diamond crystal due to intense heat."
        ],
        correctAnswer: 2,
        explanation: "The text describes superradiance as: \"spins synchronised, emitting a quick, bright burst of microwave light.\""
    },
    {
        id: 198,
        passageId: 40,
        question: "What is the \"defect\" specifically referred to in the passage?",
        options: [
            "A crack on the surface of the diamond.",
            "A spot in the crystal lattice where a carbon atom is replaced by a nitrogen atom and the adjacent spot is vacant.",
            "The presence of radioactive isotopes in the diamond.",
            "A diamond that has been cut incorrectly."
        ],
        correctAnswer: 1,
        explanation: "The text defines the defect: \"an NV centre occurs where one carbon atom is replaced by a nitrogen atom and the spot next to it is made vacant.\""
    },
    {
        id: 199,
        passageId: 40,
        question: "Based on the text, what is a potential future application of the \"superradiant maser\" technology?",
        options: [
            "Cutting steel in industrial factories.",
            "Creating ultra-stable frequency sources for precision time-keeping.",
            "Replacing all fibre optic cables.",
            "Generating electricity for households."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"pave the way for a 'superradiant maser'... or ultra-stable frequency sources for time-keeping.\""
    },
    {
        id: 200,
        passageId: 40,
        question: "The author uses the phrase \"a perfect diamond might actually be boring\" to imply that:",
        options: [
            "Flawless diamonds have no market value.",
            "Scientific utility often arises from anomalies or defects (like NV centres) rather than structural perfection.",
            "Physicists prefer coal over diamonds.",
            "Perfect diamonds cannot interact with light."
        ],
        correctAnswer: 1,
        explanation: "The text contrasts the \"boring\" perfect diamond with the \"magical\" things that happen when it is \"broken\" (defective), implying scientific value lies in the defect."
    },
    // Passage 2: Plant Biology
    {
        id: 201,
        passageId: 41,
        question: "The passage cites a study on the \"mustard family plant\" to demonstrate that:",
        options: [
            "Plants enjoy classical music more than rock music.",
            "Plants can distinguish specific threat-related vibrations (caterpillars chewing) from benign sounds (wind) and activate defence mechanisms.",
            "Plants have ears located in their roots.",
            "Caterpillars are attracted to the sound of wind."
        ],
        correctAnswer: 1,
        explanation: "The text says the plant \"distinguished the vibrations of leaf munchers from those of wind... produced higher levels of bitter toxins as a defence.\""
    },
    {
        id: 202,
        passageId: 41,
        question: "According to the text, how does \"sonic stimulation\" (specific frequency ranges) primarily affect seed germination?",
        options: [
            "It increases water uptake and seed metabolism.",
            "It prevents the seed from absorbing water.",
            "It changes the color of the flower.",
            "It creates a vacuum around the seed."
        ],
        correctAnswer: 0,
        explanation: "The text states: \"specific frequency range increases water uptake and seed metabolism.\""
    },
    {
        id: 203,
        passageId: 41,
        question: "The passage distinguishes between the effects of \"natural/soothing sounds\" and \"dissonant sounds\". What is the difference?",
        options: [
            "Natural sounds retard growth, while dissonant sounds accelerate it.",
            "Natural sounds affect gene expression/hormone regulation positively, while dissonant sounds (explosives) retard seed growth.",
            "Both have the exact same effect on plant height.",
            "Plants ignore dissonant sounds completely."
        ],
        correctAnswer: 1,
        explanation: "The text contrasts natural/soothing tones (affect gene expression/hormone regulation) with dissonant sounds (explosives) which \"retard seed growth.\""
    },
    {
        id: 204,
        passageId: 41,
        question: "Who is the Indian scientist mentioned in the text as having highlighted aspects of \"psychoacoustics\" long ago?",
        options: [
            "C.V. Raman",
            "Homi Bhabha",
            "J.C. Bose",
            "Vikram Sarabhai"
        ],
        correctAnswer: 2,
        explanation: "The text mentions: \"highlighted these aspects of 'psychoacoustics' were mentioned by the physicist J.C. Bose long ago.\""
    },
    {
        id: 205,
        passageId: 41,
        question: "The overarching argument for using music in agriculture, as presented in the passage, is:",
        options: [
            "To entertain the farmers while they work.",
            "To reduce environmental harm and support sustainable agriculture by enhancing crop growth through non-chemical means.",
            "To keep birds away from the crops.",
            "To increase the price of the vegetables."
        ],
        correctAnswer: 1,
        explanation: "The text concludes: \"sustainable agriculture... playing soothing music could actually help plants grow better.\""
    },
    // Passage 3: Grasslands
    {
        id: 206,
        passageId: 42,
        question: "What is the primary grievance raised by scientists regarding global climate negotiations and funds like the TFFF?",
        options: [
            "They believe forests are not important for climate change.",
            "They argue that forests have \"hogged the limelight,\" leading to the exclusion/neglect of other critical biomes like grasslands and savannahs which are also effective carbon sinks.",
            "They want the UN to stop declaring International Years.",
            "They believe the TFFF fund is too small to be effective."
        ],
        correctAnswer: 1,
        explanation: "The text mentions the letter warned that \"forests have hogged the limelight... TFFF... failed to include other major biomes like the Cerrado or the Pantanal.\""
    },
    {
        id: 207,
        passageId: 42,
        question: "The passage mentions a conflict in Indian policy regarding grasslands. What is this conflict?",
        options: [
            "The Ministry of Environment wants to burn grasslands, while the Ministry of Rural Development wants to save them.",
            "The Environment Ministry views them for afforestation, while the Rural Development Ministry classifies them as \"wastelands,\" leading to their neglect as unique ecosystems.",
            "The government has banned all grazing in grasslands.",
            "Grasslands are fully protected under the Forest Rights Act."
        ],
        correctAnswer: 1,
        explanation: "The text notes the Environment Ministry considers them for afforestation, while Rural Development publishes a \"wasteland atlas... that often includes grasslands,\" indicating conflicting/neglectful classification."
    },
    {
        id: 208,
        passageId: 42,
        question: "According to the text, why are grasslands considered \"one of the most threatened ecosystems\"?",
        options: [
            "Because of the excessive growth of trees.",
            "Due to conversion to forests/plantations, spread of invasive species, extraction of fossil fuels, and suppression of indigenous management (controlled fires).",
            "Because animals refuse to graze on them.",
            "Because they contribute to global warming."
        ],
        correctAnswer: 1,
        explanation: "The text lists causes: \"conversion to forests... spread of invasive species... extraction of fossil fuels... suppressed indigenous... controlled fires.\""
    },
    {
        id: 209,
        passageId: 42,
        question: "The author suggests that including grasslands in India's NDCs (Nationally Determined Contributions) would:",
        options: [
            "Reduce India's carbon credit rating.",
            "Boost climate mitigation efforts by diversifying beyond forest-focused sequestration.",
            "Force India to import grass from Africa.",
            "Violate the Paris Agreement."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"By recognizing grasslands as a crucial carbon sink... move away from forest-focused... give its own climate mitigation efforts a boost.\""
    },
    {
        id: 210,
        passageId: 42,
        question: "The \"Indigenous Desert Alliance\" is mentioned to highlight:",
        options: [
            "The opposition to solar power in deserts.",
            "The harsh effects of climate change on desert people and the importance of managing vast desert grasslands.",
            "A political party in Australia.",
            "The need for more water in deserts."
        ],
        correctAnswer: 1,
        explanation: "Samantha Murray of the Alliance says \"desert people are facing some of the harshest effects,\" highlighting the human/ecological dimension."
    },
    // Passage 4: Public Health
    {
        id: 211,
        passageId: 43,
        question: "The author cites Rudolf Virchow's statement that \"medicine is a social science\" to argue that:",
        options: [
            "Doctors should study sociology instead of biology.",
            "Disease is not just a biological event but a result of political and social factors like poverty and exclusion.",
            "Medicine should be free for everyone.",
            "Politics should be banned in hospitals."
        ],
        correctAnswer: 1,
        explanation: "The text quotes Virchow: \"disease was not merely a biological event but a political and social outcome shaped by poverty and exclusion.\""
    },
    {
        id: 212,
        passageId: 43,
        question: "What is the \"double burden\" of privatisation described in the passage?",
        options: [
            "Private hospitals are too clean and too expensive.",
            "It drives profit-driven targets in healthcare (shunting public money to private sectors) and makes medical education expensive, forcing doctors to focus on earnings rather than social causes.",
            "It forces patients to buy insurance they don't need.",
            "It reduces the number of private medical colleges."
        ],
        correctAnswer: 1,
        explanation: "The text connects privatisation to \"doctors expected to meet monthly targets\" (profit) and \"medical colleges charging upwards of ₹40 lakhs... forced to shift their focus... to earning enough.\""
    },
    {
        id: 213,
        passageId: 43,
        question: "The passage criticizes the current public health approach for:",
        options: [
            "Focusing too much on preventing diseases.",
            "Shunting public money to the private sector through schemes like AB-PMJAY instead of strengthening the public system.",
            "Banning private practice for government doctors.",
            "Importing too many foreign medicines."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"Through schemes such as AB-PMJAY... public money is increasingly shunted to the private sector.\""
    },
    {
        id: 214,
        passageId: 43,
        question: "According to the author, why do doctors have a \"moral authority\" to act as agents of social change?",
        options: [
            "Because they are the wealthiest members of society.",
            "Because they occupy a unique position of trust, witness human suffering firsthand (policy failures), and can amplify the lived realities of those who lack voice.",
            "Because the government has appointed them as political leaders.",
            "Because they have studied political science."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"Doctors occupy a unique position of trust... witness firsthand... how policy decisions translate into human suffering... amplify lived realities.\""
    },
    {
        id: 215,
        passageId: 43,
        question: "Which of the following is identified as a driver of the \"epidemic of non-communicable diseases\" in the text?",
        options: [
            "The consumption of ultra-processed foods.",
            "The lack of vaccination programs.",
            "The overuse of antibiotics.",
            "The genetic mutations in the Indian population."
        ],
        correctAnswer: 0,
        explanation: "The text lists \"consumption of ultra-processed foods\" as driving an epidemic of non-communicable diseases."
    }
];

export const DAY_11_SESSION = {
    day: 11,
    title: "Quantum Physics, Plant Biology & Climate Policy",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Quantum NV Centres", "Plant Vibrations", "Grasslands Sink", "Healthcare Privatisation"]
};
