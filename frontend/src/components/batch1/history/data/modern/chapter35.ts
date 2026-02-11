
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

export const MODERN_CHAPTER_35_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Evolution & Composition (1934-1946)", status: 'done' },
    { id: '2', name: "Committees & Drafting (Ambedkar, Rau, Mukherjee)", status: 'done' },
    { id: '3', name: "Enactment, Symbols & Artists", status: 'done' },
    { id: '4', name: "Sources & Critical Analysis", status: 'done' },
    { id: '5', name: "Key Personalities & The Women Members", status: 'done' },
];

export const MODERN_CHAPTER_35_MCQS: Question[] = [
    {
        id: 1,
        question: "Who was the Constitutional Advisor to the Constituent Assembly?",
        options: ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Sir B.N. Rau", "K.M. Munshi"],
        correctAnswer: 2,
        explanation: "Sir B.N. Rau prepared the initial draft based on reports from various committees before the Drafting Committee sat.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who was the calligrapher of the original Indian Constitution?",
        options: ["Nandalal Bose", "Prem Behari Narain Raizada", "Beohar Rammanohar Sinha", "Vasant Krishan Vaidya"],
        correctAnswer: 1,
        explanation: "Prem Behari Narain Raizada wrote the English version in a flowing Italic style without charging a fee.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Objectives Resolution' was moved by:",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "J.B. Kripalani"],
        correctAnswer: 1,
        explanation: "Moved by Nehru on Dec 13, 1946, it laid down the philosophy of the constitution structure.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Which country is the source of the 'Directive Principles of State Policy' (DPSP)?",
        options: ["USA", "Canada", "Ireland", "USSR"],
        correctAnswer: 2,
        explanation: "The concept of DPSP was borrowed from the Irish Constitution.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Who served as the first Speaker of the Lok Sabha (Independent India's Parliament)?",
        options: ["Dr. Rajendra Prasad", "G.V. Mavalankar", "Sardar Patel", "Hukam Singh"],
        correctAnswer: 1,
        explanation: "G.V. Mavalankar chaired the Assembly when it met as a Legislative body.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Grammar of Anarchy' speech was delivered by:",
        options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel", "Mahatma Gandhi"],
        correctAnswer: 1,
        explanation: "Ambedkar warned against unconstitutional methods (Satyagraha/Bandhs) in his concluding speech on Nov 25, 1949.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 7,
        question: "How many women members were there in the Constituent Assembly?",
        options: ["10", "12", "15", "20"],
        correctAnswer: 2,
        explanation: "There were 15 women members, including Sarojini Naidu, Hansa Mehta, and Durgabai Deshmukh.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The First Constitutional Amendment Act (1951) was passed by:",
        options: ["The First Lok Sabha", "The Constituent Assembly (Provisional Parliament)", "The Rajya Sabha", "The Supreme Court"],
        correctAnswer: 1,
        explanation: "It was passed by the Provisional Parliament (the Constituent Assembly transformed) before the first general elections.",
        subtopic: '3',
        cognitiveLevel: "Tricky"
    },
    {
        id: 9,
        question: "To which committee did the 'Sapru Report' (1945) contribute significantly?",
        options: ["Union Powers Committee", "Advisory Committee on Fundamental Rights", "Steering Committee", "States Committee"],
        correctAnswer: 1,
        explanation: "The Sapru Report suggested the distinction between Justiciable (FRs) and Non-Justiciable (DPSPs) rights.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "Which of the following was NOT in the original Constitution of 1950?",
        options: ["Fundamental Rights", "Directive Principles", "Fundamental Duties", "Emergency Provisions"],
        correctAnswer: 2,
        explanation: "Fundamental Duties were added later in 1976 by the 42nd Amendment.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
];


export const MODERN_CHAPTER_35_CONTENT = `
# Chapter 35: Making of the Constitution

## BLOCK 1: THE EVOLUTION OF DEMAND
*From Idea to Reality.*

### 💡 M.N. ROY TO CABINET MISSION
- **1934:** **M.N. Roy** (Communist pioneer) first proposed the idea of a Constituent Assembly.
- **1935:** The INC officially demanded it.
- **1940:** The British accepted it in principle in the "**August Offer**".
- **1942:** Cripps Mission proposed a draft, but it was rejected (Post-dated cheque).
- **1946:** **Cabinet Mission Plan** finally laid down the scheme for the Assembly.

---

## BLOCK 2: COMPOSITION OF THE ASSEMBLY (1946)
*Who were they?*

### 🗳️ INDIRECT ELECTION
**Total Strength:** 389 (originally).
- **296** from British India (11 Governors' Provinces).
- **93** from Princely States.

**Method of Election:**
- Not by direct vote of people.
- Elected by the members of the **Provincial Legislative Assemblies** (Single Transferable Vote).

**Seats Allocation:** Divided among three communities: **Muslims, Sikhs, and General**.
**Post-Partition:** After Pakistan was formed, the Muslim League members left. The strength fell to **299**.

---

## BLOCK 3: THE FIRST MEETING (Dec 9, 1946)
*A House Divided.*

### 🏛️ THE EMPTY BENCHES
**Date:** December 9, 1946.
**Attendance:** Only 211 members attended. The Muslim League boycotted it, demanding Pakistan. The Princely States also stayed away initially.

**President:**
- **Dr. Sachchidanand Sinha** (oldest member) was elected **Temporary President** (French practice).
- **Dr. Rajendra Prasad** was elected **Permanent President** on Dec 11, 1946.

**Vice-Presidents:** H.C. Mookherjee and V.T. Krishnamachari.

---

## BLOCK 4: OBJECTIVES RESOLUTION (Dec 13, 1946)
*The Soul of the Constitution.*

### 📜 NEHRU'S VISION
**Mover:** **Jawaharlal Nehru**.
**Content:** It laid down the philosophy of the constitution structure:
- India to be an Independent Sovereign Republic.
- Territories to form a Union.
- Power derived from the People.
- Justice, Equality, Freedom, and Safeguards for Minorities.

**Adoption:** Unanimously adopted on **January 22, 1947**.
**Legacy:** Its modified version became the **Preamble** of the Constitution.

---

## BLOCK 5: THE DRAFTING COMMITTEE (Aug 29, 1947)
*The Seven Wise Men.*

### ✒️ AMBEDKAR'S TEAM
**Chairman:** **Dr. B.R. Ambedkar**.
**Members:**
1.  N. Gopalaswami Ayyangar.
2.  Alladi Krishnaswami Ayyar.
3.  Dr. K.M. Munshi.
4.  Syed Mohammad Saadullah.
5.  N. Madhava Rau (Replaced B.L. Mitter).
6.  T.T. Krishnamachari (Replaced D.P. Khaitan).

**Task:** To scrutinize the draft prepared by the Constitutional Advisor (B.N. Rau) and prepare the final draft for discussion.

---

## BLOCK 6: THE MAJOR COMMITTEES
*The Pillars of the Draft.*

### 🏛️ WHO LED WHAT?
Apart from the Drafting Committee, there were 8 Major Committees. Knowing the Chairman is crucial:
- **Union Powers Committee:** Jawaharlal Nehru.
- **Union Constitution Committee:** Jawaharlal Nehru.
- **Provincial Constitution Committee:** Sardar Patel.
- **Advisory Committee on Fundamental Rights & Minorities:** Sardar Patel.
    - *Sub-Committee on Fundamental Rights:* J.B. Kripalani.
    - *Sub-Committee on Minorities:* H.C. Mookherjee.
- **Rules of Procedure Committee:** Dr. Rajendra Prasad.
- **Steering Committee:** Dr. Rajendra Prasad.
- **States Committee (Negotiating with States):** Jawaharlal Nehru.

---

## BLOCK 7: SOURCES OF THE CONSTITUTION
*The Bag of Borrowings.*

### 🌍 BEST OF THE WORLD
The framers did not invent; they selected.
- **Government of India Act, 1935:** The structural blueprint (Federal Scheme, Office of Governor, Judiciary, Public Service Commissions).
- **USA:** Fundamental Rights, Independence of Judiciary, Judicial Review, Impeachment of President, Preamble.
- **UK:** Parliamentary Government, Rule of Law, Single Citizenship, Bicameralism.
- **Ireland:** Directive Principles of State Policy (DPSP), Nomination of members to Rajya Sabha.
- **Canada:** Federation with a strong Centre, Residuary powers to Centre.
- **Australia:** Concurrent List, Joint Sitting of Parliament.
- **USSR:** Fundamental Duties (added later in 1976), Ideal of Justice.
- **Weimar Constitution (Germany):** Suspension of Fundamental Rights during Emergency.

---

## BLOCK 8: THE 15 WOMEN MEMBERS
*The Mothers of the Constitution.*

### 👩⚖️ SAROJINI TO DAKSHAYANI
There were **15 women** in the Constituent Assembly. Key figures included:
- **Sarojini Naidu:** The Nightingale of India.
- **Hansa Mehta:** Champion of human rights (changed "All men are born equal" to "All human beings" in the UN Declaration).
- **Dakshayani Velayudhan:** The only Dalit woman member.
- **Rajkumari Amrit Kaur:** Later the first Health Minister.
- **Sucheta Kripalani:** Later the first woman CM.
- **Durgabai Deshmukh:** A criminal lawyer and freedom fighter.
- **Begum Aizaz Rasul:** The only Muslim woman member.

---

## BLOCK 9: ENACTMENT vs COMMENCEMENT
*Two Birthdays.*

### 🗓️ NOV 26 vs JAN 26
**Date of Adoption:** **November 26, 1949**.
- **Status:** The Constitution was passed and signed.
- **Provisions Enforced:** Only citizenship, elections, and provisional parliament came into force immediately.
- **Preamble:** Enacted on this date.

**Date of Commencement:** **January 26, 1950**.
- **Why this date?** To commemorate **Purna Swaraj Day** (Jan 26, 1930).
- **Status:** The remaining provisions (Fundamental Rights, etc.) came into force. India became a Republic.

---

## BLOCK 10: CRITICISM OF THE ASSEMBLY
*The Skeptics.*

### ⚖️ "PARADISE OF LAWYERS"
- **Not Representative:** Members were not directly elected by the people (based on restricted franchise of 1935 Act).
- **Sovereignty:** It was created by the British Parliament (Cabinet Mission), though it acted independently.
- **Congress Dominated:** Granville Austin famously said, "The Assembly was the Congress and the Congress was India."
- **Lawyer-Politician Domination:** The language was too legalistic, leading critics to call it a "Paradise of Lawyers."

---

## BLOCK 11: THE SCRIBES & ARTISTS
*Handwritten, not Printed.*

### ✒️ RAIZADA & BOSE
The original Constitution was not printed; it was handwritten and illuminated.
**The Calligrapher:** **Prem Behari Narain Raizada**.
- **Style:** He wrote the English version in a flowing Italic style.
- **Fee:** He refused to charge a single penny. His only condition was to write his name on every page and his grandfather's name on the last page.

**The Artists:** **Nandalal Bose** and his students from Shantiniketan.
- **Task:** They decorated the borders of every page with art depicting India's history (Mohenjodaro, Ramayana, Akbar, Shivaji, Gandhi).
- **Preamble:** **Beohar Rammanohar Sinha** (student of Bose) illuminated the Preamble page.

**Hindi Version:** The calligraphy was done by **Vasant Krishan Vaidya**.

---

## BLOCK 12: THE SYMBOLS & OFFICERS
*The Administrative Backbone.*

### 🐘 THE ELEPHANT SEAL
**The Symbol:** The Constituent Assembly adopted the **Elephant** as its symbol (Seal).
**Constitutional Advisor:** **Sir B.N. Rau**. (He prepared the initial draft before the Drafting Committee sat).
**Chief Draftsman:** **S.N. Mukherjee**. (He was responsible for the complex legal language and structure of the draft).
**Secretary:** H.V.R. Iyengar.

---

## BLOCK 13: THE FINAL STATISTICS
*The Effort in Numbers.*

### 📊 2 YEARS, 11 MONTHS, 18 DAYS
**Time Taken:** 2 years, 11 months, and 18 days.
**Sessions:** 11 sessions covering 165 days.
**Expenditure:** Approx ₹64 Lakh.
**Countries Visited:** The drafters studied the constitutions of about 60 countries.
**Amendments:**
- **Proposed:** 7,635.
- **Discussed:** 2,473. (This shows how rigorous the debate was).

---

## BLOCK 14: THE LAST MEETING (Jan 24, 1950)
*The Signing Ceremony.*

### ✍️ 284 SIGNATURES
**Date:** January 24, 1950 (Two days before Republic Day).
**Event:** The Assembly met for the last time to sign the official copies.
**Signatories:** **284 members** were present and signed the document.
- **First Signatory:** Jawaharlal Nehru.
- **Last Signatory:** Dr. Rajendra Prasad.
**Rain:** It was drizzling outside, which was considered a good omen.

---

## BLOCK 15: SEAT DISTRIBUTION (1946)
*The Political Map.*

### 🗳️ CONGRESS DOMINANCE
**Before Partition (July 1946 Election results):**
- **Congress:** 208 seats.
- **Muslim League:** 73 seats.
- **Independents/Others:** 15 seats (including Dr. Ambedkar, initially elected from Bengal).

**Note:** After Partition, Ambedkar lost his Bengal seat and had to be re-elected from Bombay (via M.R. Jayakar's resignation) to ensure he stayed in the Assembly.

---

## BLOCK 16: THE DUAL ROLE (1947-1949)
*One Body, Two Jobs.*

### 🏛️ PRASAD vs MAVALANKAR
The Indian Independence Act, 1947 made the Constituent Assembly a sovereign body with two separate functions:
1.  **Constituent Body:** To draft the Constitution.
    - **Chaired by:** **Dr. Rajendra Prasad**.
2.  **Legislative Body:** To make ordinary laws for the Dominion of India (The first Parliament).
    - **Chaired by:** **G.V. Mavalankar**.

**Schedule:** The Assembly met as a Constituent body in the morning and as a Legislative body in the afternoon (or on separate days). This continued until Nov 26, 1949.

---

## BLOCK 17: ADOPTION OF SYMBOLS
*Dates Matter.*

### 🇮🇳 JULY 22 vs JAN 24
The Assembly performed other sovereign functions besides drafting:
- **National Flag:** Adopted on **July 22, 1947**. (Designed by Pingali Venkayya).
- **Commonwealth Membership:** Ratified India's membership in May 1949.
- **National Anthem:** (Jana Gana Mana) Adopted on **January 24, 1950**.
- **National Song:** (Vande Mataram) Adopted on **January 24, 1950**.
- **First President:** Elected **Dr. Rajendra Prasad** as the first President of India on January 24, 1950.

---

## BLOCK 18: EXPERT COMMITTEE OF THE CONGRESS (1946)
*The Backroom Boys.*

### 🧠 GRANVILLE AUSTIN'S VIEW
**Context:** Before the Assembly met, the Congress appointed an Expert Committee in July 1946 to prepare the material.
**Members:** Jawaharlal Nehru (Chairman), Asaf Ali, K.M. Munshi, N. Gopalaswami Ayyangar, K.T. Shah, D.R. Gadgil, Humayun Kabir, K. Santhanam.
**Significance:** Granville Austin (British historian) noted that it was this committee that "set India on the road to her present constitution" by drafting the Objectives Resolution before the Assembly even sat.

---

## BLOCK 19: DR. AMBEDKAR'S TITLES
*The Man of the Moment.*

### ⚖️ MODERN MANU
Dr. B.R. Ambedkar is recognized by three major titles for his role:
1.  **Father of the Constitution of India.**
2.  **Chief Architect of the Constitution.**
3.  **Modern Manu** (Referring to the ancient lawgiver Manu, but rewriting the laws for equality).

---

## BLOCK 20: HINDI TRANSLATION
*The Language Gap.*

### 📝 58th AMENDMENT (1987)
**Original:** The Constitution was written and enacted in English.
**Hindi:** A Hindi translation was signed by the members, but it did not have the same legal authority as the English text initially.
**The Fix:** The **58th Constitutional Amendment Act (1987)** inserted Article 394-A, which gave the Hindi translation the same legal authority as the English text and authorized the President to publish updated Hindi versions.

---

## BLOCK 21: THE MISSING GIANTS
*The Architects Outside.*

### 🕊️ GANDHI & JINNAH
**Mahatma Gandhi:** He was never a member of the Constituent Assembly. He believed the real work was in the villages (Noakhali) healing the wounds of partition, not in the halls of Delhi drafting laws.
**M.A. Jinnah:** He was elected as a member but never attended the Indian Constituent Assembly. He became the President of the Pakistan Constituent Assembly in Karachi.
**Result:** The Constitution was framed by their lieutenants (Nehru, Patel, Ambedkar), not by the supreme leaders themselves.

---

## BLOCK 22: ARTICLE 395 (The Repeal)
*Killing the British Laws.*

### 🚫 REPEALING THE ACTS
The Constitution didn't just "start"; it had to legally stop the previous regime.
**Article 395:** The last article of the original Constitution.
**Action:** It explicitly repealed:
1.  The Indian Independence Act, 1947.
2.  The Government of India Act, 1935.
**Exception:** The Abolition of Privy Council Jurisdiction Act, 1949 was not repealed immediately to allow pending cases to finish.

---

## BLOCK 23: THE FRANCHISE REALITY
*Who elected them?*

### 🗳️ ONLY 10% VOTED
**Critique:** The Constituent Assembly was elected by the Provincial Assemblies.
**The Base:** The Provincial Assemblies (elected in 1946) were chosen on a **Limited Franchise** (based on tax, property, and education).
**The Stat:** Only about **10% of the Indian population** had the right to vote in 1946.
**The Counter-Argument:** The Assembly was not directly elected by "We the People" in a universal vote. However, the first General Election (1952) ratified their work by re-electing the same leaders (Nehru, etc.) with a massive mandate.

---

## BLOCK 24: FIRST CABINET OF FREE INDIA (1947)
*Who held what?*

### 🏛️ THE KEY PORTFOLIOS
Do not confuse this with the Interim Government (1946). This is the Cabinet after Aug 15, 1947.
- **Jawaharlal Nehru:** PM, External Affairs, Science.
- **Sardar Patel:** Home, Information & Broadcasting, States.
- **Dr. Rajendra Prasad:** Food & Agriculture.
- **Maulana Abul Kalam Azad:** Education.
- **Dr. John Mathai:** Railways & Transport.
- **R.K. Shanmukham Chetty:** Finance.
- **Dr. B.R. Ambedkar:** Law.
- **Jagjivan Ram:** Labour.
- **Sardar Baldev Singh:** Defence.
- **Rajkumari Amrit Kaur:** Health.
- **C.H. Bhabha:** Commerce.
- **Rafi Ahmed Kidwai:** Communication.
- **Dr. Syama Prasad Mookerjee:** Industries & Supplies.
- **V.N. Gadgil:** Works, Mines & Power.

---

## BLOCK 25: THE PROVISIONAL PARLIAMENT (1950-52)
*The Gap Period.*

### ⚖️ FIRST AMENDMENT
**Context:** The Constitution came into force on Jan 26, 1950. The First General Elections were held in 1951-52.
**Who ruled in between?** The Constituent Assembly transformed into the **Provisional Parliament of India**.
**Uniqueness:** This Provisional Parliament passed the **First Constitutional Amendment Act (1951)** (which added the 9th Schedule to protect land reforms) before the first elected Lok Sabha was even born.

---

## BLOCK 26: INTERIM GOVERNMENT (1946)
*The Cabinet Before Independence.*

### 🏛️ LIAQUAT & MANDAL
Students often confuse this with the 1947 Cabinet. This government included Muslim League members.
- **Finance:** Held by **Liaquat Ali Khan** (Muslim League). He famously obstructed Congress proposals.
- **Law:** Held by **Jogendra Nath Mandal** (Muslim League). Note: Ambedkar became Law Minister only in 1947.
- **Railways:** Asaf Ali.
- **Education:** C. Rajagopalachari.
- **Health:** Ghazanfar Ali Khan.
- **Vice-President of Council:** Jawaharlal Nehru.

---

## BLOCK 27: CHANGES BY INDEPENDENCE ACT (1947)
*The Legal Shift.*

### 📜 SOVEREIGN & LEGISLATIVE
The Indian Independence Act, 1947 made 3 fundamental changes to the Assembly:
1.  **Sovereign Body:** It could frame any constitution and repeal any British law (including the Independence Act itself).
2.  **Legislative Body:** It became the Parliament. (Constituent duty chaired by Prasad, Legislative duty chaired by Mavalankar).
3.  **Reduction in Strength:** Muslim League members (from Pakistan areas) withdrew. Strength dropped from 389 to 299.

---

## BLOCK 28: TRIBAL SUB-COMMITTEES
*Protecting the Indigenous.*

### 🏔️ BORDOLOI & THAKKAR
Under the Advisory Committee (Patel), there were two crucial sub-committees for tribals:
- **North-East Frontier Tribal Areas:** Chaired by **Gopinath Bordoloi**.
    - **Outcome:** The **6th Schedule** (Autonomous District Councils for Assam, Meghalaya, Tripura, Mizoram).
- **Excluded & Partially Excluded Areas (Other than Assam):** Chaired by **A.V. Thakkar** (Thakkar Bapa).
    - **Outcome:** The **5th Schedule** (Tribal Advisory Councils for mainland India).

---

## BLOCK 29: THE FIRST DRAFT (Oct 1947)
*The Blueprint.*

### 📝 B.N. RAU'S DRAFT
**The Constitutional Advisor:** **Sir B.N. Rau** prepared the initial draft based on reports from various committees.
**Date:** October 1947.
**Content:** It contained 243 Articles and 13 Schedules.
**Ambedkar's Role:** The Drafting Committee (under Ambedkar) scrutinized this draft and prepared the **Final Draft (Feb 1948)** with 315 Articles and 8 Schedules.

---

## BLOCK 30: SEAT BREAKDOWN (British India)
*The Numbers Game.*

### 🗳️ 296 SEATS
Before the Princely States joined, the 296 seats of British India were divided by community:
- **General (Hindus + Others):** 210 seats.
- **Muslims:** 78 seats.
- **Sikhs:** 4 seats.

- **Congress won:** 208.
- **Muslim League won:** 73.
- **Unionist/Independents:** 15.

---

## BLOCK 31: SAPRU COMMITTEE REPORT (1945)
*The Blueprint for Rights.*

### 📜 JUSTICIABLE vs NON-JUSTICIABLE
**Context:** Before the Assembly met, the **Tej Bahadur Sapru Committee (1945)** was tasked with defining the rights of citizens.
**The Innovation:** It was this committee that suggested dividing rights into two categories:
1.  **Justiciable:** Rights that can be enforced in court (became **Fundamental Rights**, Part III).
2.  **Non-Justiciable:** Rights that are guidelines for the state (became **Directive Principles of State Policy**, Part IV).
**Legacy:** This resolved the conflict between "Political Democracy" (FRs) and "Social/Economic Democracy" (DPSPs).

---

## BLOCK 32: THE THREE READINGS
*The Legislative Grinder.*

### 📚 DRAFT TO ACT
The Final Draft introduced by Dr. Ambedkar went through three rigorous readings:
1.  **First Reading (Nov 4, 1948):** General discussion on the Draft Constitution. Lasted 5 days.
2.  **Second Reading (Nov 15, 1948 – Oct 17, 1949):** Clause-by-clause consideration. This was the marathon phase where 7,653 amendments were proposed and 2,473 were discussed.
3.  **Third Reading (Nov 14, 1949):** Dr. Ambedkar moved the motion "The Constitution as settled by the Assembly be passed."

---

## BLOCK 33: THE CHIEF WHIP
*The Floor Manager.*

### 📢 SATYA NARAYAN SINHA
**The Role:** In a house of roughly 300 members with intense debates, someone had to manage the time, discipline, and voting.
**The Man:** **Satya Narayan Sinha** acted as the Chief Whip of the Congress party in the Constituent Assembly.
**Significance:** Without his floor management, the debates (which were already lengthy) might have dragged on for years.

---

## BLOCK 34: THE "GRAMMAR OF ANARCHY"
*The Final Warning.*

### 🎙️ NOV 25, 1949
In his concluding speech, Dr. Ambedkar gave three warnings for the future of Indian democracy:
1.  **Grammar of Anarchy:** "We must abandon the bloody methods of revolution (Satyagraha/Bandhs). When constitutional methods are open, there is no justification for unconstitutional methods."
2.  **Bhakti in Politics:** "Bhakti in religion may be a road to salvation, but in politics, Bhakti or hero-worship is a sure road to degradation and eventual dictatorship."
3.  **Social Democracy:** "Political democracy cannot last unless there lies at the base of it social democracy (Liberty, Equality, Fraternity)."

---

## BLOCK 35: THE CRITICISMS
*What they said then.*

### ⚖️ "SACK OF 1935"
- **P.R. Deshmukh:** Called the Constitution a "slavish imitation of the West" and effectively "the Government of India Act, 1935 with only adult franchise added."
- **K. Hanumanthaiya:** Said "We wanted the music of Veena or Sitar, but here we have the music of an English band."
- **Loknath Misra:** Called it a "slavish surrender to the West."
- **Ivor Jennings:** Called it "far too large and rigid."

---

## BLOCK 36: THE ANCESTORS (1928 & 1931)
*The Real First Drafts.*

### 📜 ROOTS OF THE REPUBLIC
The Constitution didn't appear from a vacuum in 1946. It had two major indigenous ancestors:
- **Nehru Report (1928):** Drafted by Motilal Nehru.
    - **Contribution:** First demand for Universal Adult Franchise and Fundamental Rights (19 rights listed).
- **Karachi Resolution (1931):** Drafted by Jawaharlal Nehru.
    - **Contribution:** It defined what Swaraj would mean for the masses—Economic freedom, secularism, and protection of minorities.
**Note:** The 1946 Assembly essentially codified these promises made during the freedom struggle.

---

## BLOCK 37: THE LANGUAGE BATTLE (Sept 1949)
*The Most Divisive Debate.*

### 🗣️ HINDI vs NON-HINDI
**The Conflict:** The Assembly was split between the "Hindi Wallahs" (led by Purushottam Das Tandon, Seth Govind Das) and the non-Hindi members (led by T.T. Krishnamachari, G. Durgabai).
**The Threat:** T.T. Krishnamachari famously warned of a "**partition**" of the South if Hindi was forced.
**The Compromise:** The **Munshi-Ayyangar Formula** (Sept 14, 1949).
- Hindi = **Official Language** (Not National Language).
- English = Continued for 15 years.
- Numerals = **International form** (1, 2, 3) not Devanagari (१, २, ३).

---

## BLOCK 38: THE PREAMBLE PROTOCOL
*Why Last?*

### 🗓️ ENACTED AFTER THE ACT
**The Procedure:** In most countries, the Preamble is drafted first. In India, it was enacted last (after the entire Constitution was passed).
**The Reason:** To ensure that the Preamble was in perfect conformity with the Constitution. If the Constitution changed during debate, the Preamble had to reflect that.
**The Vote:** The motion was: "The Preamble stands part of the Constitution." It was adopted on **Nov 26, 1949**.

---

## BLOCK 39: S.N. MUKHERJEE
*The Unsung Architect.*

### 🏗️ CHIEF DRAFTSMAN
**Role:** While Ambedkar was the Chairman and political face, **S.N. Mukherjee** was the **Chief Draftsman**.
**Contribution:** He was the man who actually put the complex ideas into precise legal language. Ambedkar famously credited him in the Assembly, saying his ability to put the most intricate proposals into legal form was "uncanny."

---

## BLOCK 40: WHAT WAS MISSING (1950)?
*The Original vs Today.*

### ❌ NOT IN 1950
The Original Constitution of 1950 did **NOT** contain:
- **Fundamental Duties:** Added in 1976 (42nd Amendment).
- **Socialist, Secular, Integrity:** These 3 words were added to the Preamble in 1976.
- **Tribunals:** Added in 1976 (Part XIV-A).
- **Panchayats/Municipalities:** Added in 1992 (73rd/74th Amendment) as constitutional bodies.
`;

