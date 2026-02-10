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

export const MODERN_CHAPTER_27_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Administrative Policies (Centralization vs Decentralization)", status: 'done' },
    { id: '2', name: "Policy towards Princely States (Recap)", status: 'done' },
    { id: '3', name: "Foreign Policy (Afghanistan, Burma, Tibet)", status: 'done' },
    { id: '4', name: "Social & Cultural Policy", status: 'done' },
    { id: '5', name: "Divide and Rule Strategy", status: 'done' },
];

export const MODERN_CHAPTER_27_MCQS: Question[] = [
    {
        id: 1,
        question: "The British policy of 'Divide and Rule' was most prominently implemented after which major event?",
        options: ["Battle of Plassey", "Revolt of 1857", "Partition of Bengal", "Formation of INC"],
        correctAnswer: 1,
        explanation: "Post 1857, the British decided to drive a wedge between Hindus and Muslims to prevent a united front.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 2,
        question: "Which of the following describes the British attitude towards social reforms after 1857?",
        options: ["Highly proactive and progressive.", "Caution and withdrawal (policy of non-intervention to avoid offending conservative elements).", "Complete ban on all Indian traditions.", "Focusing only on female education."],
        correctAnswer: 1,
        explanation: "The British feared that social reforms (like Sati abolition) had triggered the 1857 revolt, so they became conservative.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "The 'Durand Line' (1893) was demarcated to define the boundary between:",
        options: ["India and China", "India and Afghanistan", "India and Burma", "India and Tibet"],
        correctAnswer: 1,
        explanation: "British India and Afghanistan (Mortimer Durand).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Which Viceroy followed the policy of 'Masterly Inactivity' towards Afghanistan?",
        options: ["Lord Lytton", "John Lawrence", "Lord Curzon", "Lord Dufferin"],
        correctAnswer: 1,
        explanation: "John Lawrence (also followed by Mayo and Northbrook).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Forward Policy' towards Afghanistan, which led to the Second Anglo-Afghan War, was a signature policy of:",
        options: ["Lord Ripon", "Lord Lytton", "Lord Curzon", "Lord Lansdowne"],
        correctAnswer: 1,
        explanation: "Lord Lytton.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Treaty of Gandamak' (1879) was signed between the British and:",
        options: ["The Afghans", "The Burmese", "The Sikhs", "The Gurkhas"],
        correctAnswer: 0,
        explanation: "Afghans (after the Second Anglo-Afghan War).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The First Anglo-Burmese War (1824-26) ended with the Treaty of:",
        options: ["Treaty of Sagaing", "Treaty of Yandabo", "Treaty of Rangoon", "Treaty of Mandalay"],
        correctAnswer: 1,
        explanation: "Treaty of Yandabo (1826).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Younghusband Expedition' (1904) was sent to:",
        options: ["Nepal", "Tibet", "Bhutan", "Sikkim"],
        correctAnswer: 1,
        explanation: "Curzon sent it to Tibet due to fears of Russian influence.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Policy of Equal Federation' (1935-1947) refers to:",
        options: ["The British treating all states as equal to the Crown.", "The attempt to create a federation including both British Provinces and Princely States.", "Granting equal status to Hindus and Muslims.", "The decentralization of finances."],
        correctAnswer: 1,
        explanation: "GOI Act 1935 proposed a federation (which never came into being).",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "The 'McMahon Line' (1914) defines the boundary between:",
        options: ["India and Pakistan", "India and China (Eastern Sector)", "India and Nepal", "India and Afghanistan"],
        correctAnswer: 1,
        explanation: "India and China (Tibet-Shimla Convention).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    }
];
// Note: Extending with more MCQs to reach 35
MODERN_CHAPTER_27_MCQS.push(
    {
        id: 11,
        question: "Under the British, the 'District Officer' (Collector) became the 'kingpin' of local administration. Who introduced this office in its modern form?",
        options: ["Lord Cornwallis", "Warren Hastings", "William Bentinck", "Lord Dalhousie"],
        correctAnswer: 1,
        explanation: "Warren Hastings in 1772.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The British policy towards the 'Muslims' underwent a significant shift after 1870 (following the publication of W.W. Hunter's 'The Indian Mussalmans'). This shift was from:",
        options: ["Hostility to Patronage.", "Patronage to Hostility.", "Neutrality to Persecution.", "Assimilation to Exclusion."],
        correctAnswer: 0,
        explanation: "Initially, the British blamed Muslims for 1857. Later, they decided to patronize them to use as a counter-weight to the Congress.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 13,
        question: "Lord Lytton's 'Statutory Civil Service' (1878-79) proved to be a failure because:",
        options: ["Indians didn't join.", "The British officers resigned.", "It was based on nomination from high-status families rather than merit, and the positions were socially inferior.", "The salary was too high."],
        correctAnswer: 2,
        explanation: "It was a way to keep high-caste Indians separate from the regular ICS.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The first Indian woman to graduate from Calcutta University and address the INC session (1890) was:",
        options: ["Sarojini Naidu", "Kadambini Ganguly", "Annie Besant", "Pandita Ramabai"],
        correctAnswer: 1,
        explanation: "Kadambini Ganguly.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "In the 19th century, the British justified their rule in India through the theory of:",
        options: ["Socialism", "Democratic Peace", "White Man’s Burden / Civilizing Mission", "Marxism"],
        correctAnswer: 2,
        explanation: "The belief that they were in India to civilize the 'backward' natives.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "The 'Grand Delhi Durbar' of 1877 was organized to:",
        options: ["Celebrate the victory in the Afghan war.", "Proclaim Queen Victoria as 'Kaiser-i-Hind' (Empress of India).", "End the famine.", "Coronate King George V."],
        correctAnswer: 1,
        explanation: "By Lord Lytton while South India was facing a severe famine.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Who was the 'Secretary of State for India'?",
        options: ["An official sitting in Calcutta.", "A member of the British Cabinet sitting in London.", "A representative of the Marathas.", "The head of the East India Company."],
        correctAnswer: 1,
        explanation: "Created by the 1858 Act, a British Cabinet minister in London.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Which among the following was the 'Last' major annexation by the British under the Policy of Annexation?",
        options: ["Punjab", "Lower Burma", "Awadh", "Nagpur"],
        correctAnswer: 2,
        explanation: "Awadh (1856). After 1857, annexation of native states stopped.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Indian Forest Act' of 1865 gave the government the right to:",
        options: ["Protect wildlife.", "Declare any land covered with trees as government forest.", "Give land to tribals.", "Export timber for free."],
        correctAnswer: 1,
        explanation: "It was the start of state control over forests for commercial exploitation (railways).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Age of Consent Act' (1891) raised the age of consent for marriage for girls from 10 to:",
        options: ["12", "14", "16", "18"],
        correctAnswer: 0,
        explanation: "12 years (Behramji Malabari's efforts).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Sarda Act' (1929) fixed the minimum age for marriage for boys and girls at:",
        options: ["18 for boys, 14 for girls", "21 for boys, 18 for girls", "15 for boys, 12 for girls", "14 for boys, 10 for girls"],
        correctAnswer: 0,
        explanation: "Harbilas Sarda (18 for boys, 14 for girls).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "British policies in India were aimed at protecting the interests of:",
        options: ["The Indian masses.", "The British manufacturers, merchants, and investors.", "The Princely States exclusively.", "The French allies."],
        correctAnswer: 1,
        explanation: "Economic interests of the metropole (Britain).",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "Who described the 19th-century British administration in India as a 'Despotism tempered by the absence of local knowledge'?",
        options: ["Lord Lytton", "Lord Curzon", "Marquess of Hastings", "Lord Auckland"],
        correctAnswer: 2,
        explanation: "Commonly used to describe the lack of sensitivity towards local conditions.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Council of India' in London was abolished by:",
        options: ["The Act of 1909", "The Act of 1919", "The Act of 1935", "The Act of 1947"],
        correctAnswer: 2,
        explanation: "Act of 1935 abolished it and gave the SOS 'advisers' instead.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The British followed the policy of 'Strict Neutrality' in religious matters after 1857. This was stated in:",
        options: ["The Charter Act of 1853", "The Queen's Proclamation of 1858", "The Act of 1892", "The 1919 Declaration"],
        correctAnswer: 1,
        explanation: "Queen Victoria's proclamation promised no interference in religious beliefs.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Gorkha War' (1814-16) was fought during the tenure of:",
        options: ["Lord Hastings", "Lord Amherst", "Lord Auckland", "Lord Ellenborough"],
        correctAnswer: 0,
        explanation: "Lord Hastings.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Policy of Equal Electorates' was rejected in favor of 'Separate Electorates' to:",
        options: ["Promote democracy.", "Appease the Muslims and divide the nationalist movement.", "Involve the Princes in voting.", "Exclude the British from voting."],
        correctAnswer: 1,
        explanation: "Communal electorates (1909).",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "Which boundary commission was appointed for the partition of Punjab and Bengal in 1947?",
        options: ["Cyril Radcliffe", "Lord Pethick-Lawrence", "Sir Stafford Cripps", "Lord Mountbatten"],
        correctAnswer: 0,
        explanation: "Radcliffe Commission.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Montagu Declaration' of 1917 promised:",
        options: ["Complete Independence.", "Development of self-governing institutions and responsible government as the goal.", "Abolition of the Viceroy’s post.", "Handing over Finance to Indians."],
        correctAnswer: 1,
        explanation: "Gradual development of self-governing institutions.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'First Census' in India (not synchronous) was held in 1872 during the time of:",
        options: ["Lord Lytton", "Lord Mayo", "Lord Ripon", "Lord Curzon"],
        correctAnswer: 1,
        explanation: "Lord Mayo (1872). First synchronous census was 1881 (Ripon).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Official Secrets Act' (1904) was passed by Curzon to:",
        options: ["Protect government data.", "Suppress the freedom of the press and restrict reporting on government activities.", "Promote transparency.", "Allow Indians to see files."],
        correctAnswer: 1,
        explanation: "To curb nationalism by restricting information.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Vandaboo' (Yandabo) Treaty of 1826 was between British and:",
        options: ["Kingdom of Nepal", "Kingdom of Ava (Burma)", "Kingdom of Siam", "Sikh Empire"],
        correctAnswer: 1,
        explanation: "Burma.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Buffer State' policy was most critical for which region according to Curzon?",
        options: ["The North-West Frontier", "The South", "The Eastern Archipelago", "The Central Provinces"],
        correctAnswer: 0,
        explanation: "To keep Russia away from India.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "Why was the 'Subordinate Isolation' policy changed to 'Subordinate Union'?",
        options: ["British were tired of isolation.", "Princes had proved their loyalty in 1857 ('breakwaters to the storm').", "The Princes asked for a union.", "The US pressurized the UK."],
        correctAnswer: 1,
        explanation: "Canning wanted to preserve the states as potential allies against future revolts.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The British created a 'New Class' of loyalists among the Indians who were educated in English. Macaulay called them:",
        options: ["The Native Elite.", "A class of persons Indian in blood and colour, but English in taste, in opinions, in morals and in intellect.", "The Brown Sahibs.", "The Interpreters."],
        correctAnswer: 1,
        explanation: "Direct quote from Macaulay's Minute.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
);

export const MODERN_CHAPTER_27_CONTENT = `
# Chapter 27: Administrative Changes After 1857 (Part 2)

## BLOCK 1: EVOLUTION OF FAMINE POLICY
*From 'Laissez-Faire' to Responsibility.*

### 🌾 STRACHEY TO MACDONNELL
**Strachey Commission (1880):**
- Established the basic **Famine Code**.
- **Principle:** State must provide relief wages to the able-bodied.

**Lyall Commission (1897):**
- Appointed after the 1896-97 famine.
- **Refinement:** Recommended early **suspension of land revenue** and utilizing non-official charity.

**MacDonnell Commission (1900):**
- Appointed by Lord Curzon.
- **Key Shift:** Recommended **"Moral Strategy"**—putting money in people's pockets *before* they start starving (Famine Commissioner to be appointed).
- **Result:** Better preparedness, though famines continued (e.g., Bengal 1943 was a man-made failure of this policy).

---

## BLOCK 2: CURRENCY POLICY
*The Artificial Rupee.*

### 💱 THE EXCHANGE RATE GAME
**The Issue:**
- The British Govt wanted a high exchange rate for the Rupee (to make British imports cheap in India and to make remitting money to London cheaper).

**The Move:**
- They **closed the mints to silver coinage in 1893** and artificially pegged the Rupee to Gold/Sterling (1s 4d).

**Impact:**
- **Indian Exporters:** Suffered (their goods became expensive abroad).
- **British Importers:** Benefited (their cloth became cheaper in India).
- **Nationalist Criticism:** **Dadabhai Naoroji** and the Congress vehemently opposed this "manipulation of exchange."

---

## BLOCK 3: ARMY'S "CLASS COMPANY" SYSTEM
*Divide within the Regiment.*

### ⚔️ BALANCING THE CASTES
**The Tactic:**
- After 1857, the British didn't just segregate the army; they structured it carefully.

**Class Regiments:**
- Pure regiments of one race (e.g., Gurkha, Sikh).

**Class-Company Regiments:**
- **Mixed regiments** where different companies belonged to different castes/races (e.g., 1 company Jat, 1 company Muslim, 1 company Rajput).

**Logic:**
- If one company mutinied, the others (of different castes) would not join them and could be used to suppress them. This was the **"Water-tight Compartment"** policy.

---

## BLOCK 4: NEPAL & BHUTAN POLICY
*Securing the Northern Gate.*

### 🏔️ SAGAULI & SINCHULA
**Nepal (Treaty of Sagauli, 1816):**
- Nepal gave up districts of **Garhwal and Kumaon** (giving British access to Simla/Nainital).
- Accepted a British Resident in Kathmandu.
- **Crucially:** Allowed the British to **recruit Gurkhas** into the army (who became the loyal backbone of the Raj).

**Bhutan (Treaty of Sinchula, 1865):**
- Bhutan surrendered the **passes (Duars)** leading to Assam.
- In return, the British gave an annual subsidy.
- **Significance:** Secured the **tea gardens of Assam** from raids.

---

## BLOCK 5: MISSIONARY POLICY (POST-1858)
*Cautious Neutrality.*

### ✝️ OFFICIAL NEUTRALITY
**Pre-1857:** Active support for missionaries (seen as a cause of 1857 revolt).

**Post-1858:**
- The **Queen's Proclamation** promised **Religious Neutrality**.
- **The Shift:** Officials were banned from openly supporting missionary activities.
- **Reality:** Missionaries continued to work, focusing on education and hospitals (soft power) rather than aggressive conversion, often funded by **"Grants-in-Aid"** for their schools (under Wood's Despatch).

---

## BLOCK 6: THE FIRST WHITE MUTINY (1859)
*The Forgotten Revolt.*

### ⚔️ EUROPEAN TROOPS' REVOLT
**Context:** The Act of 1858 transferred the Company's army to the Crown.

**The Grievance:**
- The European soldiers of the East India Company (who were tough mercenaries) refused to simply be "transferred" like cattle to the Queen's Army without a bounty (bonus) or the right to discharge.

**The Mutiny:**
- They agitated and threatened violence. This is called the **"White Mutiny"** (distinct from the Ilbert Bill controversy).

**The Resolution:**
- The Government had to bow down. They offered a "discharge" option. Over **10,000 soldiers** opted to go home, forcing the Govt to recruit fresh troops from England.

---

## BLOCK 7: ROYAL COMMISSION ON DECENTRALIZATION (1908)
*Why Local Govt Failed.*

### 🏙️ HOBHOUSE COMMISSION
**Chairman:** C.E.H. Hobhouse.

**Diagnosis:** It analyzed why Ripon's "Local Self-Government" hadn't worked.

**Findings:**
- **Lack of Funds:** Local bodies had responsibilities (roads/health) but no independent tax revenue.
- **Official Control:** The **District Collector** still controlled everything.

**Recommendation:**
- It recommended less official interference, but the Govt ignored it until the 1919 reforms.

---

## BLOCK 8: CREATION OF NWFP (1901)
*Curzon's Frontier Strategy.*

### 🏔️ NORTH-WEST FRONTIER PROVINCE
**Context:**
- The tribal areas (Pathans) were previously managed by the Punjab Government. It was chaotic.

**The Move:**
- **Lord Curzon** separated the trans-Indus districts from Punjab and created a new province: **North-West Frontier Province (NWFP)**.

**Policy:**
- It was placed directly under the Central Government (**Chief Commissioner**) to ensure a unified **"Forward Policy"** against the tribes and Russia.

---

## BLOCK 9: RESTORATION OF TALUQDARS (1858)
*Buying Loyalty.*

### 🏰 THE OUDH COMPROMISE
**Pre-1857:** The British had stripped the Taluqdars (Landlords) of Oudh of their lands, which caused them to lead the 1857 Revolt.

**Post-1858 Policy:** Lord Canning reversed this.

**The Deal:**
- The Taluqdars were given back their estates and empowered with magisterial powers. In return, they became the most loyal supporters of the British Raj.

**Impact:** This cemented the **Zamindar-British alliance** that lasted until 1947.

---

## BLOCK 10: EXTERNAL EMIGRATION POLICY
*The Export of Labor.*

### 🚢 THE COOLIE SYSTEM
**Context:** Slavery was abolished in the British Empire in 1833. Sugar plantations in Fiji, Mauritius, South Africa, and the Caribbean needed cheap labor.

**The Policy:**
- The Government of India facilitated the recruitment of **"Indentured Labor" (Girmitiyas)**.

**Conditions:**
- 5-year contracts.
- Brutal conditions akin to slavery.

**Abolition:** Under pressure from nationalists (Gandhi/Gokhale), the system was finally abolished in **1917**.

---

## BLOCK 11: WELBY COMMISSION (1895)
*Investigating the Drain.*

### 💰 ROYAL COMMISSION ON EXPENDITURE
**Context:** Dadabhai Naoroji and others argued that India was being bled dry to pay for British wars and pensions.

**The Commission:** Appointed in 1895 to inquire into Indian expenditure.

**The Member:** **Dadabhai Naoroji** was the first Indian to sit as a member of a Royal Commission.

**Outcome:** It admitted some unfair charges but mostly justified British spending. However, it validated the nationalist claim that India was paying for Imperial wars.

---

## BLOCK 12: CURRENCY COMMITTEES
*Fixing the Rupee.*

### 💱 HERSCHELL & FOWLER
**Herschell Committee (1893):**
- Recommended closing the mints to silver to artificially raise the value of the Rupee.

**Fowler Committee (1898):**
- Recommended that the British Sovereign (Gold Pound) should be legal tender in India. It effectively put India on a **Gold Exchange Standard**.

**Impact:** This fixed the exchange rate at **1s 4d** (1 Rupee = 1 shilling 4 pence), which favored British imports over Indian exports.

---

## BLOCK 13: CONTAGIOUS DISEASES ACTS (1864)
*Protecting the Soldier, Blaming the Woman.*

### ⚕️ HEALTH POLICY FOR TROOPS
**Context:** High rates of venereal disease among British soldiers in India.

**The Policy:** The Contagious Diseases Acts (1864, 1868).

**The Rule:**
- It allowed the police to arrest women suspected of being prostitutes, force them to undergo humiliating medical exams, and lock them in **"Lock Hospitals"** if infected.

**Repeal:** Repealed in **1888** after massive protests by social reformers in England and India.

---

## BLOCK 14: SALT POLICY
*The Tax on Survival.*

### 🧂 THE INLAND CUSTOMS LINE
**Policy:** The Company established a strict monopoly on salt manufacture.

**The Barrier:**
- To prevent "cheap" salt from Princely States entering British territory, they built a **2,500-mile long hedge (The Great Hedge of India)** made of thorns, guarded by 12,000 men.

**Tax:**
- The salt tax was so high (sometimes 1000% of production cost) that it became a primary grievance, eventually leading to Gandhi's Dandi March in 1930.

---

## BLOCK 15: THE WEAPON OF SEDITION (1870)
*The Section that silenced freedom.*

### ⚖️ SECTION 124A
**Context:** The original Indian Penal Code (1860) did not have a specific section for "Sedition."

**The Insertion:**
- It was inserted in **1870** by **Sir James Stephen** (Law Member) specifically to deal with Wahabi rebels and later nationalists.

**The Definition:**
- "Whoever by words... excites or attempts to excite disaffection towards the Government established by law..."

**Famous Victims:** Used against **Bal Gangadhar Tilak** (1897, 1908) and **Mahatma Gandhi** (1922).

**Policy:** It became the primary legal tool to criminalize political dissent.

---

## BLOCK 16: THE CARROT AND STICK POLICY
*Managing the Congress.*

### 🥕 CONCESSION & REPRESSION
**The Strategy:** A three-pronged approach to deal with the Modern Nationalism:

1.  **Repression (The Stick):** Jail the "Extremists" (Tilak/Aurobindo) using mild to harsh laws.
2.  **Conciliation (The Carrot):** Offer minor reforms (1909, 1919) to pacify the "Moderates" (Gokhale).
3.  **Suppression:** Once the Moderates are isolated, crush the Extremists completely.

**Failure:** This worked initially (Surat Split 1907) but failed when Gandhi united both wings in 1920.

---

## BLOCK 17: THE "STEEL FRAME" SPEECH (1922)
*The Reality Check.*

### 🏗️ LLOYD GEORGE'S DECLARATION
**Context:** By 1922, Indians were demanding rapid Indianization of the Civil Services (ICS).

**The Speech:** British PM Lloyd George gave a famous speech in the House of Commons.

**The Quote:** He called the ICS the **"Steel Frame"** of the British administration in India.

**The Meaning:** He declared that whatever changes happen, the character of the British administration must remain British, and the British element in the ICS must be maintained to prevent the structure from collapsing. It was a clear signal that full independence was not on the table.

---

## BLOCK 18: POLICY TOWARDS DEPRESSED CLASSES
*The Late Discovery.*

### 🗳️ FROM APATHY TO PROTECTION
**Phase 1 (Pre-1917): Apathy.**
- The British ignored the Dalits (Depressed Classes) because they didn't want to offend the Orthodox Upper Caste Hindus (their loyalists).

**Phase 2 (Post-1917): Utilization.**
- As the Congress became a mass movement, the British suddenly became "champions" of the Depressed Classes.

**The Goal:** To detach them from the Hindu body and create a separate political bloc (like Muslims).

**Climax:** The **Communal Award (1932)** which granted Separate Electorates to Depressed Classes (thwarted by Gandhi's Poona Pact).

---

## BLOCK 19: POLICY ON ARMS (1878)
*Disarming the Nation.*

### 🔫 THE ARMS ACT
**Context:** Fearing another 1857, the British wanted to ensure Indians could not possess weapons.

**The Act:** Indian Arms Act, 1878 (Lytton).

**The Rule:**
- No Indian could keep a weapon without a license (which was impossible to get).

**The Exception:** Europeans and Anglo-Indians were exempt.

**Gandhi's View:** He called this act the "blackest" of all British laws because it emasculated the entire nation, making them unable to defend themselves.
`;

