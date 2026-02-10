export interface Subtopic {
    id: string;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_28_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "De-industrialization (Ruin of Artisans)", status: 'done' },
    { id: '2', name: "Impoverishment of Peasantry (Revenue Systems)", status: 'done' },
    { id: '3', name: "Commercialization of Agriculture", status: 'done' },
    { id: '4', name: "Drain of Wealth Theory", status: 'done' },
    { id: '5', name: "Development of Railways & Industry", status: 'done' },
    { id: '6', name: "Famines in Colonial India", status: 'done' },
];

export const MODERN_CHAPTER_28_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Drain of Wealth' theory was first propounded by:",
        options: ["Jawaharlal Nehru", "Dadabhai Naoroji", "R.C. Dutt", "M.G. Ranade"],
        correctAnswer: 1,
        explanation: "Dadabhai Naoroji in his book 'Poverty and Un-British Rule in India'.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "According to Naoroji, what constituted the 'Drain'?",
        options: ["Only the direct gold exported from India.", "The portion of India's national wealth or resources which was exported to Britain for which India got no economic or material return.", "The taxes paid by the British in India.", "The salaries given to Indian sepoys."],
        correctAnswer: 1,
        explanation: "Unilateral transfer of resources without equivalent returns.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "Who wrote the classic work 'The Economic History of India' (1901)?",
        options: ["Dadabhai Naoroji", "R.C. Dutt", "G.K. Gokhale", "B.G. Tilak"],
        correctAnswer: 1,
        explanation: "Ramesh Chandra Dutt (R.C. Dutt).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'De-industrialization' of India in the 19th century was characterized by:",
        options: ["Increase in the share of manufacturing in GDP.", "The destruction of traditional Indian handicrafts and textiles due to competition from machine-made British goods and one-way free trade.", "Modernization of handlooms.", "The shift of labor from agriculture to industry."],
        correctAnswer: 1,
        explanation: "The ruin of artisans and the 'ruralization' of India.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 5,
        question: "Why did the 'Commercialization of Agriculture' often lead to poverty for Indian peasants?",
        options: ["Peasants were forced to grow cash crops (indigo, cotton, opium) for the world market instead of food crops, making them vulnerable to price fluctuations and lack of food.", "Peasants earned too much money and spent it unwisely.", "The crops didn't grow.", "It led to a shortage of labor."],
        correctAnswer: 0,
        explanation: "Peasants became vulnerable to the world market and middle-men.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 6,
        question: "The 'Permanent Settlement' (1793) introduced by Cornwallis in Bengal:",
        options: ["Made the Zamindars the owners of the land.", "Fixed the revenue demand forever.", "Included the 'Sunset Law'.", "All of the above."],
        correctAnswer: 3,
        explanation: "All are features of the Permanent Settlement.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "In the 'Ryotwari System' (Madras/Bombay), the land revenue was collected:",
        options: ["Through the Zamindars.", "Directly from the cultivators (Ryots).", "Through the village headman.", "Through the local Raja."],
        correctAnswer: 1,
        explanation: "Ryotwari = Direct from Ryot. (Munro and Reed).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Mahalwari System' (North-West) was different because:",
        options: ["It was settled with individual peasants.", "It was settled with the village community or 'Mahal' through the Lambardar (Headman).", "Revenue was never increased.", "It gave land back to the tanners."],
        correctAnswer: 1,
        explanation: "Mahalwari = Village unit (Mahal). Holt Mackenzie.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Indian Enterprise' in modern industry was mostly restricted to which sector in the 19th century?",
        options: ["Steel", "Cotton Textiles (mostly in Bombay/Ahmedabad)", "Jute", "Railways"],
        correctAnswer: 1,
        explanation: "Cotton textiles were the stronghold of Indian capital.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'First Jute Mill' in India was set up in 1855 at:",
        options: ["Bombay", "Rishra (Bengal)", "Madras", "Surat"],
        correctAnswer: 1,
        explanation: "Rishra, near Calcutta.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "What was the main motive of the British in developing 'Railways' in India?",
        options: ["To facilitate the travel of Indian pilgrims.", "To open up the Indian interior for British exports, to transport raw materials to ports, and for military movement.", "To promote Indian industries.", "To provide employment to Indians."],
        correctAnswer: 1,
        explanation: "Strategic and economic interests of Britain.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 12,
        question: "The 'GIP Railway' (Great Indian Peninsula Railway) ran the first train in India in 1853 between:",
        options: ["Calcutta and Raniganj", "Bombay and Thane", "Madras and Arkonam", "Delhi and Agra"],
        correctAnswer: 1,
        explanation: "Bombay and Thane (34 km).",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'One-Way Free Trade' imposed on India meant:",
        options: ["Both India and Britain had no customs duties.", "British goods entered India for free/low duties, while Indian exports to Britain faced high protective duties.", "India could trade with any nation.", "Britain had to pay a tax to India."],
        correctAnswer: 1,
        explanation: "Discriminatory tariff policy.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The 'Indian Famine Code' (1883) was based on the recommendations of the:",
        options: ["Strachey Commission (1880)", "Hunter Commission", "Simon Commission", "Lee Commission"],
        correctAnswer: 0,
        explanation: "Richard Strachey Commission.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Lytton Famine' (1876-78) was particularly scandalous because:",
        options: ["The British exported wheat while Indians were dying.", "The government organized the Delhi Durbar during the famine.", "The government refused to open relief camps.", "Both (a) and (b)."],
        correctAnswer: 3,
        explanation: "Export of grains continued and the Durbar was held while millions died.",
        subtopic: '6',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "Who among the following was a 'Moderate' leader famous for his detailed 'Budget Speeches' exposing the economic fallacies of the British rule?",
        options: ["B.G. Tilak", "G.K. Gokhale", "S.N. Banerjea", "Lala Lajpat Rai"],
        correctAnswer: 1,
        explanation: "Gopal Krishna Gokhale.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The 'TISCO' (Tata Iron and Steel Company) was founded in 1907 by Jamshedji Tata at:",
        options: ["Bhilai", "Sakchi (Jamshedpur)", "Rourkela", "Burnpur"],
        correctAnswer: 1,
        explanation: "Sakchi (later renamed Jamshedpur).",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Home Charges' (a component of the Drain) included:",
        options: ["Salaries and pensions of officials in Britain.", "Interests on the Indian debt.", "Purchase of army stores in Britain.", "All of the above."],
        correctAnswer: 3,
        explanation: "All these were payments made in Britain from Indian revenues.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Karl Marx noted that the British 'broke the entire framework of Indian society' without any visual signs of reconstitution. He was referring to:",
        options: ["The destruction of the Indian village community and its self-sufficiency.", "The introduction of Christianity.", "The partition.", "The army reforms."],
        correctAnswer: 0,
        explanation: "Destruction of the integrated land-and-handicraft self-sufficiency of villages.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 20,
        question: "The 'Sunset Law' was associated with:",
        options: ["Slavery", "Forest Acts", "Permanent Settlement (If the revenue was not paid by sunset of the fixed day, the estate was sold).", "Press Acts"],
        correctAnswer: 2,
        explanation: "Sunset Law of 1794 in Bengal.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Who was the 'father' of the Ryotwari system?",
        options: ["Thomas Munro", "Charles Cornwallis", "Holt Mackenzie", "John Shore"],
        correctAnswer: 0,
        explanation: "Thomas Munro (along with Captain Alexander Read).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The major cause of 'Rural Indebtedness' in British India was:",
        options: ["Lack of rain.", "High land revenue demand + Rigidity in collection + Low prices of produce.", "The habits of the peasants.", "The lack of seeds."],
        correctAnswer: 1,
        explanation: "Feudal/Colonial structure of exploitation.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "The 'Great Famine of Bengal' (1943) caused 3 million deaths. It was primarily a:",
        options: ["Natural disaster (Crop failure).", "Man-made famine (Due to wartime priorities, stockpiling, and policy failures).", "Result of locust attack.", "Result of a tsunami."],
        correctAnswer: 1,
        explanation: "Amartya Sen's analysis: it was a failure of 'entitlements' and distribution during WWII.",
        subtopic: '6',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 24,
        question: "Which Indian leader said, 'The British rule in India is a bleeding to death of the country'?",
        options: ["Dadabhai Naoroji", "Subhash Chandra Bose", "M.G. Ranade", "V.D. Savarkar"],
        correctAnswer: 0,
        explanation: "Dadabhai Naoroji.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "In which year was the 'Indian rupee' delinked from silver and linked to the 'Pound Sterling'?",
        options: ["1893", "1914", "1931", "1947"],
        correctAnswer: 0,
        explanation: "1893 (Closing of Mints).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Planters' in Assam often used the 'Indenture system' which was a form of:",
        options: ["Free Labor", "Contractual Slavery (White-lead semi-slavery)", "Communal farming", "Cooperative farming"],
        correctAnswer: 1,
        explanation: "Worked through the Inland Emigration Act 1859 which made it a criminal offense to quit the plantation.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 27,
        question: "The 'Campbell Commission' (1866) was related to:",
        options: ["Police reforms", "Education", "Famine (Orissa famine)", "Prisons"],
        correctAnswer: 2,
        explanation: "Orissa Famine of 1866.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'McDonnell Commission' (1900) was appointed by:",
        options: ["Lord Lytton", "Lord Curzon", "Lord Lansdowne", "Lord Ripon"],
        correctAnswer: 1,
        explanation: "Lord Curzon (after the famine of 1899-1900).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Who wrote 'Economic History of India beneath Early British Rule'?",
        options: ["R.C. Dutt", "R.P. Dutt", "J.N. Sarkar", "K.P. Jayaswal"],
        correctAnswer: 0,
        explanation: "R.C. Dutt.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'Discriminating Protection' policy initiated in the 1920s benefited which industry the most?",
        options: ["Sugar and Iron & Steel", "Textiles", "Jute", "Chemicals"],
        correctAnswer: 0,
        explanation: "Steel (TISCO) and Sugar were protectively guarded from imports.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Which of the following was NOT a criticism of the Permanent Settlement given by the nationalists?",
        options: ["It led to absenteeism (Zamindars living in cities).", "It neglected the improvements in the soil.", "It created a class of loyalists to British rule.", "It distributed the wealth equally to the tillers."],
        correctAnswer: 3,
        explanation: "It definitely did not distribute wealth to the tillers.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 32,
        question: "The 'Drain' of wealth resulted in the shortfall of 'Capital formation' within India. This is a:",
        options: ["Marxist view.", "Nationalist view.", "Imperialist view.", "Religious view."],
        correctAnswer: 1,
        explanation: "Core nationalist argument for why India didn't industrialize.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "What was the 'Gwynne Committee' related to?",
        options: ["Indianization of Army", "ICS cadre issues", "Police pay", "Postage"],
        correctAnswer: 1,
        explanation: "Related to Indianization of the services.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Indian National Congress' passed its first resolution on the poverty of India and the need for inquiry in its session of:",
        options: ["1885", "1886", "1892", "1905"],
        correctAnswer: 1,
        explanation: "Second session (1886) presided by Naoroji.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The British investment in India was mostly 'External Debt' rather than 'Equity'. This meant:",
        options: ["India had to pay fixed interest regardless of profit.", "Indians owned the companies.", "The British shared the losses.", "There were no taxes."],
        correctAnswer: 0,
        explanation: "Guaranteed interest on rail investment made it a burden for Indian taxpayers.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    }
];

export const MODERN_CHAPTER_28_CONTENT = `
# Chapter 28: Economic Impact of British Rule in India

## BLOCK 1: DE-INDUSTRIALIZATION (1813-1880)
*The Destruction of Handicrafts.*

### 🧵 THE RUIN OF ARTISANS
**The Phenomenon:**
- Before British rule, India was the "Industrial Workshop of the World" (Textiles/Shipbuilding). By 1880, these industries were destroyed.

**Causes:**
1.  **Loss of Royal Patronage:** The collapse of Mughal/Princely courts meant no one bought luxury goods (silks/muslin).
2.  **Competition:** Machine-made goods from Manchester/Lancashire were cheaper and flooded Indian markets.
3.  **Discriminatory Tariffs:** Indian goods faced high duties in Britain (up to 80%), while British goods entered India duty-free.

**The Quote:**
> "The misery hardly finds a parallel in the history of commerce. The bones of the cotton weavers are bleaching the plains of India." — **William Bentinck (1834)**

---

## BLOCK 2: DRAIN OF WEALTH THEORY
*The Economic Bleeding.*

### 💰 THE UNREQUITED EXPORT
**The Concept:**
- India was exporting more than it imported (**Trade Surplus**), but this surplus was not coming back as gold/profit. It was being **siphoned off to Britain**.

**The Theorist:**
- **Dadabhai Naoroji** (The Grand Old Man of India).
- **Book:** *Poverty and Un-British Rule in India*.

**Thesis:** This "Drain" was the main cause of India's poverty.

**Other Critics:**
- **R.C. Dutt:** *Economic History of India*.
- **M.G. Ranade:** *Essays on Indian Economics*.

---

## BLOCK 3: CONSTITUENTS OF THE DRAIN
*Where did the money go?*

### 📉 HOME CHARGES
**Definition:** Expenses incurred in England by the Secretary of State on behalf of India.

**Components:**
1.  **Interest on Public Debt:** (Interest paid on loans taken to fight wars for Britain).
2.  **Pensions:** Pensions of retired British officials/army men who lived in England.
3.  **Store Purchases:** Military equipment and railway stores bought in England.
4.  **Profits:** Profits of private British capital invested in India (Railways, Tea, Coffee) which were remitted back home.

---

## BLOCK 4: RURALIZATION OF INDIA
*Back to the Village.*

### 🌾 PRESSURE ON LAND
**The Cycle:**
- Artisans lost their jobs $\\to$ Moved back to villages.
- They became agricultural laborers or tenants.

**Result:** **Overcrowding of Agriculture.**

**Impact:** This destroyed the balance between agriculture and industry. India became a purely agricultural colony supplying raw material (Cotton/Jute) to British factories.

---

## BLOCK 5: THE RAILWAY FACTOR (1853)
*The Iron Knife.*

### 🚂 SUBSIDIZED EXPLOITATION
**Purpose:** Railways were not built for Indian passengers but for:
1.  **Raw Material extraction:** Moving cotton from hinterland to ports (Bombay).
2.  **Market Penetration:** Moving British cloth from ports to the interior villages.

**Guarantee System:**
- British investors were guaranteed a **5% return** on their capital by the Govt of India (paid from Indian taxes), regardless of profit/loss. This encouraged wasteful spending.

**Tilak's View:** *"It is like decorating another's wife."*

---

## BLOCK 6: COMMERCIALIZATION OF AGRICULTURE
*Food to Cash.*

### 🌿 FORCED CULTIVATION
**The Shift:**
- Farmers were forced or induced to switch from growing food grains (Rice/Wheat) to **Cash Crops** (Indigo, Cotton, Jute, Opium, Tea).

**The Drivers:**
1.  **High Revenue Demand:** Farmers needed cash to pay the rigid British land tax.
2.  **British Industries:** Manchester needed Cotton; Dundee needed Jute; China needed Opium.

**The Trap:**
- Farmers sold their crops at harvest time (low prices) to pay tax/debt and bought food back at lean times (high prices).

**Result:**
- **Loss of Food Security.** When a drought hit, there was no food reserve, leading to massive famines.

---

## BLOCK 7: RISE OF MODERN INDUSTRY
*The Indian Effort.*

### 🏭 COTTON vs JUTE
**Cotton Textile:**
- **First Mill:** Bombay (1854) by **Cowasjee Nanabhoy**.
- **Ownership:** Mostly Indian (Parsis/Gujaratis).
- **Region:** Western India (Bombay/Ahmedabad).

**Jute Textile:**
- **First Mill:** Rishra, Bengal (**1855**).
- **Ownership:** Mostly British (Scottish capital).
- **Region:** Eastern India (Calcutta).

**Steel:**
- **TISCO (1907):** Founded by **Jamsetji Tata** at Jamshedpur (Sakchi). Production started in 1911. It was the symbol of Swadeshi industrial success.

---

## BLOCK 8: THE MANAGING AGENCY SYSTEM
*The Corporate Web.*

### 🕸️ THE BRITISH STRANGLEHOLD
**What was it?** A single British firm (Agency) would manage dozens of separate companies (Tea, Coal, Jute, Shipping).

**Role:** They provided capital and technical expertise but charged high fees and controlled the board of directors.

**Impact:** Even if Indians bought shares in a company, the real control remained with the British Managing Agency (like Andrew Yule, Martin Burn, Bird & Co).

**Criticism:** It checked the growth of independent Indian entrepreneurship.

---

## BLOCK 9: THE FAMINE CYCLE
*Man-made Starvation.*

### 💀 FROM 1866 TO 1943
**Nature:** Famines were no longer just about "shortage of rain"; they were about **"lack of purchasing power."** Food was often available (and even exported) while people starved outside grain silos.

**Major Famines:**
- **Orissa Famine (1866):** 1.3 million dead. Exposed the apathy of the "Laissez-Faire" policy.
- **Great Famine (1876-78):** Madras/Mysore/Bombay. 5 million dead. Triggered the Famine Commission (Strachey).
- **Bengal Famine (1943):** 3 million dead. Caused by war policies (Boat Denial Policy) and hoarding, not just crop failure.

---

## BLOCK 10: STAGES OF COLONIALISM (R.P. Dutt's Analysis)
*The Evolution of Exploitation.*

### 📊 THE THREE PHASES
**Phase 1: Mercantile Phase (1757–1813):**
- **Goal:** Direct Plunder. Buy cheap, sell dear. Monopoly of trade.
- **Mechanism:** Use Bengal's revenue to buy Indian goods (Investments) and export them.

**Phase 2: Industrial Free Trade (1813–1860):**
- **Goal:** Market Expansion. India as a market for British factory goods and source of raw materials.
- **Mechanism:** One-way Free Trade. Railways introduced to penetrate interior markets.

**Phase 3: Financial Capitalism (1860–1947):**
- **Goal:** Investment. Britain had surplus capital.
- **Mechanism:** Investing British capital in India (Railways, Tea, Banks) and earning guaranteed interest. The "Drain" shifts from trade profits to interest payments.

---

## BLOCK 11: THE WAR BOOMS (1914 & 1939)
*Unintended Industrialization.*

### 🏭 IMPORT SUBSTITUTION
**World War I (1914-18):**
- British imports stopped. The Govt had to buy from Indian factories (Steel, Cloth, Jute) for the war effort.
- **Result:** Massive profits for Indian industrialists (Birlas, Tatas).

**World War II (1939-45):**
- Again, imports ceased. Indian industries expanded into new areas (Chemicals, Paper, Sugar).

**Significance:** This created a powerful **Indian Capitalist Class** that supported the Congress (funding the movement) to ensure an independent India would protect their industries.

---

## BLOCK 12: THE BOMBAY PLAN (1944)
*Capitalists for Socialism?*

### 📝 A PLAN FOR DEVELOPMENT
**Authors:** J.R.D. Tata, G.D. Birla, Purshottamdas Thakurdas, and 5 others.

**The Proposal:** A 15-year plan for India's economic development.

**Surprise:** Even these capitalists argued for a **Planned Economy** with a strong Public Sector and government intervention.

**Why?** They knew Indian private capital was too weak to build infrastructure (Roads/Power) and needed the State to do the heavy lifting.

---

## BLOCK 13: IMPERIAL PREFERENCE (1932)
*The Trade Trap.*

### 📜 OTTAWA AGREEMENT
**Context:** The Great Depression (1929) hit world trade. Britain wanted to protect its own industries.

**The Pact:** Signed in Ottawa (1932).

**The Rule:** **"Imperial Preference."**
- India was forced to give preferential lower tariff rates to British goods (Steel/Textiles).
- In return, Britain promised to buy Indian raw materials.

**Impact:** It was a one-sided deal. It hurt non-British imports (like Japanese cloth) and forced India to buy costlier British goods, hindering the growth of Indian industries.

---

## BLOCK 14: RISE OF FICCI (1927)
*The Capitalist Union.*

### 🏢 G.D. BIRLA & PURSHOTTAMDAS
**Context:** Indian capitalists realized they needed a unified voice to fight British commercial interests (like the Associated Chambers of Commerce - ASSOCHAM, which was pro-British).

**Formation:** **Federation of Indian Chambers of Commerce and Industry (FICCI)** founded in 1927.

**Leaders:** G.D. Birla and Purshottamdas Thakurdas.

**Role:** They acted as the "Economic Wing" of the Congress, lobbying for protectionist tariffs and funding the National Movement.

---

## BLOCK 15: DE-URBANIZATION
*The Reverse Flow.*

### 🏚️ RUIN OF CITIES
**The Phenomenon:** While Europe was urbanizing due to the Industrial Revolution, India was de-urbanizing.

**The Victims:** Old manufacturing towns like Dacca (Muslin), Murshidabad (Silk), and Surat (Shipbuilding) lost their population.

**The Shift:** The artisans didn't move to new factory towns (which were few); they moved back to villages to become farm laborers.

**Result:** The percentage of population dependent on agriculture actually **increased** from 63% (1881) to 70% (1941).

---

## BLOCK 16: WILLIAM DIGBY'S ESTIMATE
*The Statistician of Poverty.*

### 📉 "PROSPEROUS" BRITISH INDIA
**The Man:** William Digby, a British author and journalist.

**The Book:** *"Prosperous" British India* (1901) - the title was sarcastic.

**The Data:** He calculated that the daily income of an Indian had fallen to **¾ pence**.

**Significance:** His work provided the statistical ammunition for the Congress to claim that British rule was not "benevolent" but destructive.

---

## BLOCK 17: WHITLEY COMMISSION (1929)
*Labor Conditions.*

### 👷 ROYAL COMMISSION ON LABOR
**Chairman:** J.H. Whitley.

**Mandate:** To investigate the conditions of labor in industrial undertakings and plantations.

**Findings:** It exposed the horrific conditions in factories and the **"Jobber"** system (middlemen who recruited workers and took a cut of their wages).

**Outcome:** Led to minor amendments in the Factories Act but didn't change the structural exploitation.

---

## BLOCK 18: PERMANENT SETTLEMENT (1793)
*The Zamindari System.*

### 🏰 BENGAL, BIHAR, ORISSA
**Architect:** **Lord Cornwallis** (Planned by John Shore).
**Region:** Bengal, Bihar, Orissa, Northern Madras, and Varanasi. (Coverage: 19% of British India).

**Key Features:**
- **Ownership:** **Zamindars** were recognized as owners of the land (not the peasants).
- **Revenue:** Fixed permanently. The State demand would never increase.
- **Sunset Law:** If the Zamindar failed to pay by sunset on a specified date, his estate was auctioned.
- **Division:** 10/11th to Company, 1/11th to Zamindar.

**Impact:** Created a loyal class of landlords but left the peasants (tenants) with no rights, leading to extreme exploitation.

---

## BLOCK 19: RYOTWARI SYSTEM (1820)
*The Peasant as Owner.*

### 🌾 MADRAS & BOMBAY
**Architect:** **Thomas Munro** and **Captain Alexander Read**.
**Region:** Madras, Bombay, parts of Assam and Coorg. (Coverage: 51% of British India - The largest system).

**Key Features:**
- **Ownership:** The **Ryot (peasant)** was recognized as the owner.
- **Revenue:** Collected directly from the peasant.
- **Rates:** Very high (45% to 55% of produce). Not permanent; revised every 20-30 years.

**Impact:** While it removed the Zamindar, the State itself acted like a "Super-Zamindar," confiscating land ruthlessly if taxes weren't paid.

---

## BLOCK 20: MAHALWARI SYSTEM (1822/1833)
*The Village Community.*

### 🏡 PUNJAB & NORTH-WEST
**Architect:** **Holt Mackenzie** (Modified by William Bentinck).
**Region:** North-West Frontier Province, Punjab, Central Provinces, and Agra. (Coverage: 30% of British India).

**Key Features:**
- **Unit:** The tax was assessed on the **Mahal (Village/Estate)** as a whole, not individual fields.
- **Responsibility:** The **Village Headman (Lambardar)** collected it from the community and paid the Govt.

**Impact:** It destroyed the traditional village brotherhood. The Lambardar became an oppressor, and land began to pass into the hands of moneylenders.

---

## BLOCK 21: PLANTATION INDUSTRIES
*The European Monopolies.*

### ☕ TEA, COFFEE & RUBBER
**Tea:**
- **First Garden:** Established in Assam (1835).
- **Company:** Assam Tea Company (1839) was the first.
- **Ownership:** Exclusively European until the 20th century.

**Coffee:**
- **Region:** Coorg, Chikmagalur (Mysore), and Wayanad.
- **Status:** First introduced by Europeans in the 1820s.

**Indigo:**
- **Region:** Bengal and Bihar.
- **Crisis:** The **Indigo Revolt (1859)** in Bengal forced planters to move to Bihar (Champaran), setting the stage for Gandhi's first Satyagraha.

---

## BLOCK 22: CHRONOLOGY OF FAMINE COMMISSIONS
*The Bureaucracy of Death.*

### 📅 THE LIST
| Year | Commission | Chairman | Context |
| :--- | :--- | :--- | :--- |
| **1866** | Campbell Commission | George Campbell | After Orissa Famine. Blamed official apathy. |
| **1880** | Strachey Commission | Richard Strachey | After Great Famine (1876-78). Created Famine Code. |
| **1898** | Lyall Commission | James Lyall | Recommended using non-official charity. |
| **1900** | MacDonnell Commission | Anthony MacDonnell | Appointed by Curzon. Focused on "Moral Strategy" (Prevention). |
| **1945** | Woodhead Commission | John Woodhead | After Bengal Famine (1943). Blamed "man-made" factors. |

---

## BLOCK 23: EVOLUTION OF BANKING
*Financing the Raj.*

### 🏦 PRESIDENCY TO IMPERIAL
**Early Phase:** Agency Houses (Alexander & Co.) started banking but failed.

**Presidency Banks:** Established by the East India Company to facilitate trade.
1.  Bank of Calcutta (1806).
2.  Bank of Bombay (1840).
3.  Bank of Madras (1843).

**Consolidation:** In 1921, these three were merged to form the **Imperial Bank of India**.

**Legacy:** After Independence (1955), the Imperial Bank was nationalized and renamed the **State Bank of India (SBI)**.

---

## BLOCK 24: THE FIRST BUDGET (1860)
*Taxing the Subject.*

### 💼 JAMES WILSON
**Context:** After the 1857 Revolt, the British Government was bankrupt.

**The Man:** James Wilson (Founder of *The Economist* magazine) was sent to India as the first Finance Member.

**The Budget:** He presented India's first Budget in **1860**.

**Income Tax:** He introduced the **Income Tax** for the first time in India (temporarily) to cover the "Mutiny debt."

---

## BLOCK 25: IRRIGATION vs RAILWAYS
*The Misplaced Priority.*

### 💧 ARTHUR COTTON'S PLEA
**The Debate:**
- **Sir Arthur Cotton** (Legendary Engineer) argued for **Canals** (Irrigation + Cheap Transport).
- **British Capitalists** wanted **Railways** (Troop movement + Expensive Transport).

**The Policy:** The Govt poured money into Railways (guaranteed profit) but neglected Irrigation (which would have stopped famines).

**Result:** While Railways expanded rapidly, barely **3%** of India's land was irrigated by government canals by 1900.

**Exceptions:** The Ganges Canal (1854) and the canal colonies in Punjab (Lyallpur) were rare successes.

---

## BLOCK 26: THE RUPEE RATIO CONTROVERSY (1920s)
*The 1s 6d Fight.*

### 💱 CURRENCY WAR
**The Issue:** What should be the value of 1 Rupee against the British Shilling?
- **British View:** **1s 6d** (High Rupee). This made British imports cheaper in India.
- **Indian View:** **1s 4d** (Low Rupee). This made Indian exports competitive.

**The Conflict:** The **Hilton Young Commission (1926)** recommended 1s 6d.

**Resistance:** Indian capitalists (**Purshottamdas Thakurdas**) fought tooth and nail against this "overvalued rupee," arguing it killed Indian industry. The British forced the 1s 6d ratio anyway in 1927.

---

## BLOCK 27: STAGNATION STATISTICS
*The Final Scorecard.*

### 📉 0.4% GROWTH
**The Reality:** Between 1900 and 1947, India's economy was **stagnant**.

- **Per Capita Income:** grew at a microscopic rate of **0.1%** per year.
- **Agriculture:** Food grain availability declined from 200kg per person (1900) to 150kg (1947).

**Conclusion:** The British left India poorer, hungrier, and less industrial than they found it.
`;

