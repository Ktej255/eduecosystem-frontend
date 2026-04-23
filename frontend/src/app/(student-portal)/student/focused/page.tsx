"use client";

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT CONFIG — UPDATE THIS OBJECT WHEN TEJ SHARES NEW SUBJECT PDFs
// Do NOT hardcode cluster names or trap cards inside JSX. Edit only here.
// ═══════════════════════════════════════════════════════════════════════════════

const CLUSTER_NAMES: Record<string, Record<number, string>> = {
  Polity: {
    1: "Preamble & Basic Structure",
    2: "Fundamental Rights",
    3: "DPSP & Fundamental Duties",
    4: "Parliament",
    5: "President, VP, PM & CoM",
    6: "Indian Judiciary",
    7: "Constitutional & Statutory Bodies",
    8: "Federalism & Centre-State Relations",
    9: "Local Government",
    10: "Emergency Provisions",
  },
  Economy: {
    1: "Monetary Policy & RBI",
    2: "Public Finance & Budget",
    3: "Inflation & National Income",
    4: "Banking System",
    5: "Capital Markets & SEBI",
    6: "External Sector & Trade",
    7: "Taxation",
    8: "Industry & Infrastructure",
    9: "Indices & Reports",
    10: "Current Affairs 2024-25",
  },
  // ── Add remaining subjects below when PDFs are shared ──
    "Environment": {
    1: "ECOLOGY FUNDAMENTALS & ECOSYSTEM",
    2: "BIODIVERSITY",
    3: "SPECIES IN NEWS + CONSERVATION",
    4: "PROTECTED AREAS",
    5: "INTERNATIONAL CONVENTIONS",
    6: "CLIMATE CHANGE",
    7: "POLLUTION",
    8: "ENVIRONMENTAL LAWS & GOVERNANCE",
    9: "AGRICULTURE–ENVIRONMENT INTERFACE",
    10: "RENEWABLE ENERGY + EMERGING",
  },
    "Science and Tech": {
    1: "SPACE TECHNOLOGY",
    2: "BIOTECHNOLOGY & GENETICS",
    3: "IT, AI, CYBERSECURITY & DIGITAL INDIA",
    4: "DEFENCE TECHNOLOGY",
    5: "NUCLEAR & ENERGY TECHNOLOGY",
    6: "HEALTH, DISEASE & DIAGNOSTICS",
    7: "NANOTECHNOLOGY + QUANTUM TECHNOLOGY",
    8: "BASIC SCIENCE",
  },
  Agriculture:      { 1: "Agricultural Systems", 2: "Land & Irrigation", 3: "Schemes & Policy" },
  Geography:        { 1: "Physical Geography - Geomorphology", 2: "Physical Geography - Climate & Oceans", 3: "Human Geography", 4: "Maps & Resources" },
  "Ancient History":  { 1: "Prehistoric & Indus Valley", 2: "Vedic & Epic Period", 3: "Mauryan & Post-Mauryan" },
  "Medieval History": { 1: "Delhi Sultanate", 2: "Mughal Empire", 3: "Bhakti & Sufi Movements" },
  "Modern History":   { 1: "1857 & Early Nationalism", 2: "Congress & Mass Movements", 3: "Quit India & Independence", 4: "Social Reform Movements" },
  "Art and Culture":  { 1: "Architecture & Sculpture", 2: "Paintings & Music", 3: "Literature & Philosophy", 4: "Festivals & Traditions" },
  IR:               { 1: "India & Neighbours", 2: "International Organisations", 3: "Regional Groupings", 4: "Foreign Policy & Current Affairs" },
  "Indian Society":   { 1: "Social Structure & Diversity", 2: "Urbanisation & Poverty", 3: "Gender, Tribes & Minorities" },
};

type TrapCard = { wrong_belief: string; correct_fact: string };

const TRAP_CARDS: Record<string, Record<number, TrapCard[]>> = {
  Polity: {
    1: [
      { wrong_belief: "The Berubari Union Case (1960) held that the Preamble IS part of the Constitution.", correct_fact: "Berubari held it is NOT. Kesavananda Bharati (1973) later overruled this." },
      { wrong_belief: "The words 'Socialist,' 'Secular,' 'Integrity' were in the original 1950 Constitution.", correct_fact: "They were added by the 42nd Amendment in 1976 during the Emergency." },
      { wrong_belief: "Ideals of Liberty, Equality and Fraternity came from the Russian Revolution.", correct_fact: "Liberty, Equality, Fraternity → French Revolution. Justice ideals → Russian Revolution." },
    ],
    2: [
      { wrong_belief: "Article 32 allows SC to enforce both FRs and other legal rights.", correct_fact: "Article 32 covers only Fundamental Rights. Article 226 (HC) has wider scope." },
      { wrong_belief: "Article 23 only protects against State exploitation.", correct_fact: "Article 23 explicitly applies to private persons too — anyone who exploits." },
      { wrong_belief: "Bharat Ratna is a 'Title' banned under Article 18.", correct_fact: "Bharat Ratna is a civilian honour, not a 'Title' under Art 18, but still cannot be used as a prefix." },
    ],
    3: [
      { wrong_belief: "DPSPs were borrowed from the United States Constitution.", correct_fact: "DPSPs were borrowed from the Irish Constitution (Eire)." },
      { wrong_belief: "Fundamental Duties apply to all persons in India including foreigners.", correct_fact: "Fundamental Duties apply ONLY to Indian citizens." },
      { wrong_belief: "Swaran Singh Committee recommended both FRs and Fundamental Duties.", correct_fact: "Swaran Singh Committee ONLY recommended Fundamental Duties, not Fundamental Rights." },
    ],
    4: [
      { wrong_belief: "The President can return a Money Bill once for reconsideration.", correct_fact: "The President CANNOT return a Money Bill. Assent is mandatory." },
      { wrong_belief: "Speaker of Lok Sabha is removed by simple majority of members present.", correct_fact: "Speaker is removed by Effective Majority — majority of total membership of the House." },
      { wrong_belief: "Under Anti-Defection, a 1/3rd party split protects from disqualification.", correct_fact: "91st Amendment (2003) removed the 1/3rd split exception. Only a 2/3rd merger provides protection." },
    ],
    5: [
      { wrong_belief: "Nominated MPs participate in Presidential election.", correct_fact: "Nominated MPs do NOT vote. Only elected members of both Houses vote." },
      { wrong_belief: "MLCs (state upper house members) vote in the Presidential election.", correct_fact: "MLCs do NOT participate. Only elected MLAs vote." },
      { wrong_belief: "The Governor is elected by the people of the state.", correct_fact: "The Governor is APPOINTED by the President, not elected." },
    ],
    6: [
      { wrong_belief: "The Speaker of Lok Sabha can vote on all matters including ordinary bills.", correct_fact: "Speaker votes ONLY in case of tie — has casting vote only, no ordinary vote." },
      { wrong_belief: "Constitutional Amendment under Article 368 requires ratification by all state legislatures.", correct_fact: "Only SOME amendments need ratification by HALF the states — not all. Most need special majority only." },
      { wrong_belief: "The 42nd Amendment is called the Mini Constitution because it shortened the Constitution.", correct_fact: "42nd Amendment EXPANDED the Constitution — added Fundamental Duties, changed Preamble, extended Emergency provisions." },
    ],
    7: [
      { wrong_belief: "Panchayati Raj institutions are covered under the Sixth Schedule of the Constitution.", correct_fact: "Panchayati Raj is under the ELEVENTH Schedule (73rd Amendment). Sixth Schedule covers tribal autonomous districts." },
      { wrong_belief: "The District Planning Committee is constituted under the 73rd Constitutional Amendment.", correct_fact: "DPC is constituted under the 74TH Amendment — it plans for both rural and urban areas in a district." },
      { wrong_belief: "Gram Sabha and Gram Panchayat are the same body.", correct_fact: "Gram Sabha = all registered voters of village — the electorate. Gram Panchayat = elected body. Completely different." },
    ],
    8: [
      { wrong_belief: "CAG audits the accounts of the Supreme Court of India.", correct_fact: "CAG audits government accounts — NOT courts. Supreme Court finances are administered separately." },
      { wrong_belief: "The Finance Commission is a permanent constitutional body.", correct_fact: "Finance Commission is constituted every FIVE YEARS — it is not permanent. Each FC submits report and ceases." },
      { wrong_belief: "UPSC conducts recruitment for state government services.", correct_fact: "UPSC conducts Central services recruitment. State Public Service Commissions handle state recruitment." },
    ],
    9: [
      { wrong_belief: "A proclamation of National Emergency automatically dissolves the state legislatures.", correct_fact: "National Emergency does NOT dissolve state legislatures. Only President's Rule dissolves state assembly." },
      { wrong_belief: "Financial Emergency has been proclaimed three times in India's history.", correct_fact: "Financial Emergency under Article 360 has NEVER been proclaimed in India — not even once." },
      { wrong_belief: "During President's Rule the state legislature is always dissolved.", correct_fact: "State legislature can be SUSPENDED or dissolved during President's Rule — not automatic dissolution always." },
    ],
    10: [
      { wrong_belief: "The Supreme Court can strike down a constitutional amendment on any ground.", correct_fact: "SC can strike down amendments ONLY if they violate the Basic Structure doctrine — not on any ground." },
      { wrong_belief: "Fundamental Rights can never be suspended under any circumstance.", correct_fact: "Fundamental Rights CAN be suspended during National Emergency — except Articles 20 and 21." },
      { wrong_belief: "The right to property is a Fundamental Right under Article 300A.", correct_fact: "Right to property is a LEGAL RIGHT under Article 300A — NOT a Fundamental Right since 44th Amendment 1978." },
    ],
  },
  Economy: {
    1: [
      { wrong_belief: "CRR increase leads to credit expansion in the economy.", correct_fact: "CRR increase CONTRACTS credit — banks must park more funds with RBI, reducing lending." },
      { wrong_belief: "MPC targets WPI for inflation control.", correct_fact: "MPC targets CPI at 4% (±2%) as the official inflation target." },
      { wrong_belief: "SDF replaced the Repo Rate as the policy rate in 2022.", correct_fact: "SDF replaced Reverse Repo as the LAF floor only. Repo Rate remains the policy rate." },
    ],
    2: [
      { wrong_belief: "Interest received on loans given by Government is a Capital Receipt.", correct_fact: "It is a Revenue Receipt — interest income does not create or reduce a liability." },
      { wrong_belief: "15th Finance Commission gave 42% devolution same as the 14th FC.", correct_fact: "15th FC gave 41% because J&K became a UT, reducing state share." },
      { wrong_belief: "Charged expenditure is voted on by Parliament.", correct_fact: "Charged expenditure is automatically drawn — Parliament only discusses, never votes on it." },
    ],
    3: [
      { wrong_belief: "WPI captures service sector prices.", correct_fact: "WPI covers goods only. CPI captures both goods and services." },
      { wrong_belief: "Higher Gini coefficient means more economic equality.", correct_fact: "Higher Gini = MORE inequality. 0 is perfect equality, 1 is maximum inequality." },
      { wrong_belief: "Stagflation is resolved by raising interest rates alone.", correct_fact: "No clean monetary solution to stagflation — raising rates controls inflation but worsens unemployment." },
    ],
    4: [
      { wrong_belief: "Payment Banks can give personal loans to customers.", correct_fact: "Payment Banks CANNOT give any loans or credit cards — deposits and payments only." },
      { wrong_belief: "DICGC insures bank deposits up to Rs 1 lakh.", correct_fact: "DICGC coverage was raised to Rs 5 lakh per depositor per bank in February 2020." },
      { wrong_belief: "Atal Pension Yojana (APY) is market-linked like NPS.", correct_fact: "APY provides a GUARANTEED pension of Rs 1000–5000/month. NPS is market-linked." },
    ],
    5: [
      { wrong_belief: "Bond prices rise when the Repo Rate rises.", correct_fact: "Inverse relationship: when Repo Rate rises, existing bond prices FALL." },
      { wrong_belief: "Hedge Funds are Category I AIFs.", correct_fact: "Hedge Funds are Category III AIFs — high-risk, complex strategies." },
      { wrong_belief: "InvIT interest income is tax exempt for investors.", correct_fact: "InvIT interest income distributed to investors is TAXABLE in their hands." },
    ],
    6: [
      { wrong_belief: "REER increase means Indian exports become more competitive.", correct_fact: "REER up = rupee stronger in real terms = exports LESS competitive, imports cheaper." },
      { wrong_belief: "Currency depreciation and devaluation are the same phenomenon.", correct_fact: "Depreciation is market-driven. Devaluation is a deliberate government/RBI policy decision." },
      { wrong_belief: "SDRs are a currency used in international trade settlements.", correct_fact: "SDRs are a reserve asset of the IMF — not a currency and not used in direct trade." },
    ],
    7: [
      { wrong_belief: "Cess revenue is shared with states in the divisible pool.", correct_fact: "Cess is 0% shared with states. 100% retained by the Centre. States get no share." },
      { wrong_belief: "GST covers all goods and services in India.", correct_fact: "Petroleum, alcohol for human consumption, and electricity are OUTSIDE the GST framework." },
      { wrong_belief: "Sale of rural agricultural land attracts capital gains tax.", correct_fact: "Rural agricultural land is NOT a capital asset under the Income Tax Act — no capital gains tax." },
    ],
    8: [
      { wrong_belief: "PLI provides incentive on total production volume.", correct_fact: "PLI incentive is on INCREMENTAL production above the base year threshold only." },
      { wrong_belief: "NaBFID is a commercial bank that accepts public deposits.", correct_fact: "NaBFID is a Development Finance Institution (DFI) — it does NOT accept public deposits." },
      { wrong_belief: "NITI Aayog allocates plan funds to states.", correct_fact: "NITI Aayog is purely advisory — it has NO fund allocation powers at all." },
    ],
    9: [
      { wrong_belief: "Higher GHI rank number means better food security performance.", correct_fact: "Higher GHI rank = MORE hunger. Lower rank = better performance." },
      { wrong_belief: "India's Ease of Doing Business rank was 63rd in 2024.", correct_fact: "World Bank discontinued the EoDB index in 2021. No 2024 ranking exists." },
      { wrong_belief: "Global Innovation Index (GII) is published by WEF.", correct_fact: "GII is published by WIPO (World Intellectual Property Organization), not WEF." },
    ],
    10: [
      { wrong_belief: "Repo Rate is currently 6.5%.", correct_fact: "Two cuts in 2025 brought Repo Rate down to 6.0%. Always verify latest RBI policy." },
      { wrong_belief: "UPS provides the same pension calculation method as OPS.", correct_fact: "OPS = last drawn pay. UPS = average of last 12 months' basic pay. Different calculation." },
      { wrong_belief: "CBDC is a form of cryptocurrency like Bitcoin.", correct_fact: "CBDC is issued by RBI, is legal tender, fully centralized — the opposite of decentralized crypto." },
    ],
  },
  Environment: {
    1: [
      { wrong_belief: "Pyramid of energy can be inverted in aquatic ecosystems.", correct_fact: "Energy pyramid is ALWAYS upright — no exceptions. Only biomass pyramid is inverted in aquatic systems." },
      { wrong_belief: "Pyramid of numbers is always upright in all ecosystems.", correct_fact: "Numbers pyramid CAN be inverted — example: one tree supporting thousands of insects." },
      { wrong_belief: "Pyramid of biomass is always inverted in all ecosystems.", correct_fact: "Biomass pyramid is inverted ONLY in aquatic systems. Always upright in terrestrial ecosystems." },
    ],
    2: [
      { wrong_belief: "India has only 3 biodiversity hotspots.", correct_fact: "India has FOUR hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland (Nicobar only)." },
      { wrong_belief: "Both Andaman and Nicobar Islands are part of the Sundaland hotspot.", correct_fact: "Only NICOBAR Islands are in Sundaland. Andaman Islands are NOT part of any hotspot." },
      { wrong_belief: "High species richness alone qualifies a region as a biodiversity hotspot.", correct_fact: "Hotspot requires 1500+ endemic vascular plants AND 70%+ habitat lost — both criteria simultaneously." },
    ],
    3: [
      { wrong_belief: "NTCA was established in 1973 when Project Tiger was launched.", correct_fact: "NTCA was established by Wildlife Protection Amendment Act 2006 — NOT 1973." },
      { wrong_belief: "Asiatic Lion is found in Gir Forest and Nagarhole National Park.", correct_fact: "Asiatic Lion is found ONLY in Gir Forest, Gujarat — nowhere else in India or the world." },
      { wrong_belief: "Reintroduced cheetahs in India are the same subspecies as the extinct Indian Cheetah.", correct_fact: "Extinct Indian Cheetah = Asiatic subspecies. Reintroduced = African Cheetah — different subspecies entirely." },
    ],
    4: [
      { wrong_belief: "Eco-Sensitive Zones are declared under the Wildlife Protection Act 1972.", correct_fact: "ESZ declared under ENVIRONMENT PROTECTION ACT 1986 — NOT Wildlife Protection Act." },
      { wrong_belief: "Ramsar sites are fully protected areas where no human activity is allowed.", correct_fact: "Ramsar principle is WISE USE — sustainable use allowed if ecological character is maintained." },
      { wrong_belief: "India's first National Park Jim Corbett was established in 1973.", correct_fact: "Jim Corbett established 1936 — NOT 1973. It became first Tiger Reserve in 1973 — different thing." },
    ],
    5: [
      { wrong_belief: "Cartagena Protocol deals with access and benefit sharing from genetic resources.", correct_fact: "Cartagena = BIOSAFETY and GMOs. Access and Benefit Sharing = NAGOYA Protocol. Different protocols." },
      { wrong_belief: "Kigali Amendment is a separate international convention from Montreal Protocol.", correct_fact: "Kigali is an AMENDMENT TO Montreal Protocol — not a separate convention. Adds HFC phase-down." },
      { wrong_belief: "Basel, Rotterdam and Stockholm conventions have different secretariats.", correct_fact: "All THREE share a COMMON secretariat in Geneva. Direct UPSC test point." },
    ],
    6: [
      { wrong_belief: "IPCC conducts original research on climate change.", correct_fact: "IPCC does NOT conduct research — it ASSESSES and synthesises existing scientific literature only." },
      { wrong_belief: "India's NDC commits to Net Zero by 2050.", correct_fact: "India's Net Zero target is 2070 — NOT 2050. 2050 is the target for many developed nations." },
      { wrong_belief: "National Solar Mission is under Ministry of Environment Forest and Climate Change.", correct_fact: "National Solar Mission is under MNRE — Ministry of New and Renewable Energy. Not MoEFCC." },
    ],
    7: [
      { wrong_belief: "High BOD in water indicates clean oxygen-rich water.", correct_fact: "HIGH BOD = high organic pollution = dissolved oxygen DECREASES. Low BOD = clean water." },
      { wrong_belief: "London smog is an oxidising smog formed in hot sunny weather.", correct_fact: "London smog = REDUCING smog, cold foggy weather. Photochemical smog = oxidising, hot sunny weather." },
      { wrong_belief: "Thermal pollution increases dissolved oxygen in water bodies.", correct_fact: "Thermal pollution DECREASES dissolved oxygen — warm water holds less DO, harming aquatic life." },
    ],
    8: [
      { wrong_belief: "Forest Rights Act 2006 is administered by MoEFCC.", correct_fact: "FRA 2006 is under MINISTRY OF TRIBAL AFFAIRS — not MoEFCC. Frequently tested ministry trap." },
      { wrong_belief: "Van Sanrakshan Evam Samvardhan Adhiniyam 2023 is a completely new environmental law.", correct_fact: "VSSEA 2023 is the RENAMED Forest Conservation Act 1980 — not a new law." },
      { wrong_belief: "NGT has jurisdiction over cases under Wildlife Protection Act 1972.", correct_fact: "NGT CANNOT hear WPA cases. WPA is NOT in NGT's Schedule I jurisdiction list." },
    ],
    9: [
      { wrong_belief: "GEAC approves GM crops under the Ministry of Agriculture.", correct_fact: "GEAC is under MoEFCC under EPA 1986 — NOT Ministry of Agriculture." },
      { wrong_belief: "Bt Rice is commercially cultivated in India.", correct_fact: "Only BT COTTON is commercially approved. Bt Brinjal has moratorium. HT Mustard approved but not released." },
      { wrong_belief: "Mycorrhizae help plants in nitrogen fixation.", correct_fact: "Mycorrhizae help absorb PHOSPHORUS — not nitrogen. Nitrogen fixation = Rhizobium, Azotobacter." },
    ],
    10: [
      { wrong_belief: "Blue carbon refers to all carbon stored in the ocean.", correct_fact: "Blue carbon = ONLY mangroves, seagrasses, salt marshes. Open ocean phytoplankton is NOT blue carbon." },
      { wrong_belief: "Green hydrogen is produced from natural gas using steam reforming.", correct_fact: "Green hydrogen = renewable electricity + electrolysis. Natural gas = Grey hydrogen. Natural gas + CCS = Blue hydrogen." },
      { wrong_belief: "National Solar Mission original target was 100 GW by 2030.", correct_fact: "Original target was 100 GW by 2022. Revised to 300 GW by 2030." },
    ],
  },
  "Science and Tech": {
    1: [
      { wrong_belief: "Aryabhata was launched by PSLV, India's first launch vehicle.", correct_fact: "Aryabhata (1975) was launched by a Soviet rocket. Rohini (1980) was first launched by Indian SLV-3." },
      { wrong_belief: "Chandrayaan-1 made India the first country to soft-land on the Moon.", correct_fact: "Chandrayaan-1 deliberately CRASHED MIP probe. Chandrayaan-3 (2023) made India's first soft landing." },
      { wrong_belief: "James Webb Space Telescope is positioned at L1 Lagrange point like Aditya-L1.", correct_fact: "JWST is at L2 — away from Sun, opposite side from L1. Aditya-L1 is at L1 between Earth and Sun." },
    ],
    2: [
      { wrong_belief: "mRNA vaccines alter the DNA of the recipient permanently.", correct_fact: "mRNA vaccines do NOT alter DNA. mRNA degrades within days — DNA is never involved." },
      { wrong_belief: "CRISPR-Cas9 uses DNA as a guide to locate the target sequence.", correct_fact: "CRISPR-Cas9 uses GUIDE RNA (gRNA) — not DNA — to locate the target sequence." },
      { wrong_belief: "Covaxin uses mRNA technology like Pfizer and Moderna vaccines.", correct_fact: "Covaxin uses INACTIVATED VIRUS platform — NOT mRNA. Pfizer and Moderna use mRNA technology." },
    ],
    3: [
      { wrong_belief: "Deep learning is broader than machine learning as it uses more complex algorithms.", correct_fact: "Deep Learning is a SUBSET of Machine Learning which is a subset of AI — DL is narrower, not broader." },
      { wrong_belief: "Majorana 1 quantum chip was developed by Amazon Web Services.", correct_fact: "Majorana 1 was developed by MICROSOFT — directly tested in UPSC 2025. Not AWS." },
      { wrong_belief: "Blockchain technology can only be used for cryptocurrency transactions.", correct_fact: "Blockchain has many non-crypto uses: land records, supply chain, voting, health records, smart contracts." },
    ],
    4: [
      { wrong_belief: "BrahMos is India's hypersonic missile.", correct_fact: "BrahMos is SUPERSONIC (Mach 2.8). Hypersonic = Mach 5+. BrahMos-II under development will be hypersonic." },
      { wrong_belief: "IL-76 is a supersonic combat aircraft operated by the Indian Air Force.", correct_fact: "IL-76 is a HEAVY TRANSPORT aircraft — not a combat jet. Tested directly in UPSC 2025." },
      { wrong_belief: "INS Vikrant is India's first aircraft carrier overall.", correct_fact: "INS Vikrant (2022) is India's first DOMESTICALLY BUILT carrier. INS Vikrant (1961) was purchased from UK." },
    ],
    5: [
      { wrong_belief: "Nuclear fusion produces more radioactive waste than fission.", correct_fact: "Fusion produces FAR LESS long-lived radioactive waste. Products are helium and short-lived materials." },
      { wrong_belief: "RTGs are miniature fission reactors used in space probes.", correct_fact: "RTGs use radioactive DECAY heat — not a fission chain reaction. Tested directly in UPSC 2024." },
      { wrong_belief: "ITER demonstrates nuclear fission power generation at commercial scale.", correct_fact: "ITER is a FUSION experiment — not fission. Located in France. India is a partner country." },
    ],
    6: [
      { wrong_belief: "No virus can infect bacteria.", correct_fact: "BACTERIOPHAGES are viruses that infect bacteria. Directly tested in UPSC 2025 — statement was FALSE." },
      { wrong_belief: "Monoclonal antibodies are naturally produced antibodies extracted from humans.", correct_fact: "Monoclonal antibodies are LABORATORY-PRODUCED by cloning a single immune cell — not natural extracts." },
      { wrong_belief: "RT-PCR is used to detect DNA viruses like Hepatitis B.", correct_fact: "RT-PCR is for RNA VIRUSES — it converts RNA to DNA first. COVID-19 detection used RT-PCR." },
    ],
    7: [
      { wrong_belief: "Quantum computers use binary bits like classical computers but process faster.", correct_fact: "Quantum computers use QUBITS which can be 0, 1, or both simultaneously (superposition) — fundamentally different." },
      { wrong_belief: "Nanotechnology only refers to making objects smaller at nanoscale.", correct_fact: "Nanotechnology involves manipulating matter at 1-100 nanometre scale — materials gain NEW properties at this scale." },
      { wrong_belief: "Quantum entanglement allows faster than light communication between particles.", correct_fact: "Entanglement does NOT allow faster-than-light communication — no information is transmitted through entanglement." },
    ],
    8: [
      { wrong_belief: "Graphene is a form of diamond with enhanced electrical properties.", correct_fact: "Graphene and diamond are both carbon but completely different structures. Graphene = single atomic layer, hexagonal lattice." },
      { wrong_belief: "Quantum dots are quantum computers in nanoscale form.", correct_fact: "Quantum dots are semiconductor NANOCRYSTALS that emit light — used in QLED displays and imaging. Not computers." },
      { wrong_belief: "China has the largest rare earth reserves globally therefore produces the most.", correct_fact: "China dominates PRODUCTION (60%+) due to low-cost processing — but does not have the largest reserves globally." },
    ],
  },
};

const GENERIC_TRAP: TrapCard[] = [
  { wrong_belief: "All facts in isolation are enough for UPSC preparation.", correct_fact: "UPSC tests connections — cause, effect, and constitutional linkage matter most." },
  { wrong_belief: "Memorizing answers is more important than understanding mechanisms.", correct_fact: "Understanding the WHY behind each fact prevents trap questions from tricking you." },
  { wrong_belief: "Recent amendments and current affairs don't matter much for prelims.", correct_fact: "Recent amendments and current affairs are the highest-yield exam traps. Always check the latest position." },
];

function getClusterName(subject: string, cluster: number): string {
  return CLUSTER_NAMES[subject]?.[cluster] ?? `Cluster ${cluster}`;
}

function getTrapCards(subject: string, cluster: number): TrapCard[] {
  return TRAP_CARDS[subject]?.[cluster] ?? GENERIC_TRAP;
}

// ═══════════════════════════════════════════════════════════════
// EXAM CONFIG
// ═══════════════════════════════════════════════════════════════

const EXAM_DATE = new Date("2026-05-24");
const INTENSIVE_START = new Date("2026-05-11");

function getDaysToExam(): number {
  const today = new Date();
  const diff = Math.ceil((EXAM_DATE.getTime() - today.getTime()) / 86400000);
  return Math.max(0, diff);
}

const SUBJECT_SEQUENCE = [
    "Polity",
    "Environment",
    "Science & Technology",
    "Economy",
    "Agriculture",
    "Geography",
    "Ancient History",
    "Medieval History",
    "Modern History",
    "Art and Culture",
    "International Relations",
    "Indian Society"
];

// ═══════════════════════════════════════════════════════════════
// REACT COMPONENT
// ═══════════════════════════════════════════════════════════════

import { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
const API = API_BASE.includes("/api/v1") ? API_BASE : `${API_BASE}/api/v1`;

// BUG 1: Format numbered-statement questions onto separate lines
function formatQuestionText(text: string): JSX.Element {
  const parts = text.split(/(?=\s*\d+\.\s)/g).filter(Boolean);
  if (parts.length <= 1) return <span>{text}</span>;
  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {part.trim()}
        </span>
      ))}
    </span>
  );
}

const C = {
  bg: "var(--fp-bg)",
  surface: "var(--fp-card)",
  border: "var(--fp-border)",
  gold: "var(--fp-accent)",
  goldGlow: "var(--fp-accent-glow)",
  red: "#FF4444",
  green: "#44FF88",
  amber: "#FFB344",
  textPrimary: "var(--fp-text)",
  textMuted: "var(--fp-muted)",
};

export default function FocusedPortalPage() {
  const { user, token } = useAuth();
  const router = useRouter();

  // ── State ──
  const [activeTab, setActiveTab] = useState<'focus' | 'progress' | 'history'>('focus');
  const [dashData, setDashData] = useState<any>(null);
  const [trapFlipped, setTrapFlipped] = useState<boolean[]>([false, false, false]);
  const [studyStarted, setStudyStarted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [showPulse, setShowPulse] = useState(false);
  const [currentPomodoro, setCurrentPomodoro] = useState(1);
  
  const [testStarted, setTestStarted] = useState(false);
  const [showConfidenceAfter, setShowConfidenceAfter] = useState(false);
  const [confidenceBeforeTest, setConfidenceBeforeTest] = useState<string | null>(null);
  const [testQuestions, setTestQuestions] = useState<any[]>([]);
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testReport, setTestReport] = useState<any>(null);
  const [testStartTime, setTestStartTime] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [cumulativeData, setCumulativeData] = useState<any>(null);
  const [historyData, setHistoryData] = useState<any>(null);
  const [progressData, setProgressData] = useState<any>(null);

  // ── Theme ──
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("focused_portal_theme");
    if (stored === "light") setIsDark(false);
  }, []);
  useEffect(() => {
    localStorage.setItem("focused_portal_theme", isDark ? "dark" : "light");
  }, [isDark]);

  // ── Test v2 State ──
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [testConfidence, setTestConfidence] = useState<string[]>([]);
  const [timePerQuestion, setTimePerQuestion] = useState<number[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testQuestionIds, setTestQuestionIds] = useState<number[]>([]);
  const timePerQuestionRef = useRef<number[]>([]);
  const questionStartTimeRef = useRef<number>(0);
  const lastVisibleIndexRef = useRef<number>(0);

  // ── Cluster Navigation State ──
  const [viewMode, setViewMode] = useState<'overview' | 'session'>('overview');
  const [clusters, setClusters] = useState<any[]>([]);
  const [loadingClusters, setLoadingClusters] = useState(false);
  const [selectedClusterInfo, setSelectedClusterInfo] = useState<any>(null);

  // Derived from dashData — subject/cluster come from focused_subject_gates, not a calendar
  const activeTask = dashData?.current_active;
  const currentSubject = activeTask?.subject ?? "Polity";
  const currentCluster = activeTask?.cluster_number ?? 1;
  const currentClusterName = activeTask?.cluster_name ?? getClusterName(currentSubject, currentCluster);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const plannerRef = useRef<HTMLDivElement>(null);

  const trapCards = getTrapCards(currentSubject, currentCluster);

  const authHeader = { Authorization: `Bearer ${token}` };

  // ── Fetch dashboard ──
  const fetchDashboard = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/focused/dashboard`, { headers: authHeader });
      if (res.ok) setDashData(await res.json());
    } catch (e) {
      console.error("Dashboard fetch failed", e);
    }
  }, [token]);

  const fetchCumulative = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/focused/revision-priorities`, { headers: authHeader });
      if (res.ok) setCumulativeData(await res.json());
    } catch (e) { console.error("Cumulative fetch failed", e); }
  }, [token]);

  const fetchClusters = useCallback(async (subj: string) => {
    if (!token) return;
    setLoadingClusters(true);
    try {
      const res = await fetch(`${API}/focused/clusters/${encodeURIComponent(subj)}`, { headers: authHeader });
      if (res.ok) {
        const data = await res.json();
        setClusters(data.clusters || []);
      }
    } catch (e) {
      console.error("Clusters fetch failed", e);
    } finally {
      setLoadingClusters(false);
    }
  }, [token]);

  const fetchHistory = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/focused/history`, { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) setHistoryData(await res.json());
    } catch (e) { console.error("History fetch failed", e); }
  }, [token]);

  const fetchProgress = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/focused/progress`, { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) setProgressData(await res.json());
    } catch (e) { console.error("Progress fetch failed", e); }
  }, [token]);

  useEffect(() => {
    fetchDashboard();
    fetchCumulative();
    fetchHistory();
    fetchProgress();
  }, [fetchDashboard, fetchCumulative, fetchHistory, fetchProgress]);

  useEffect(() => {
    if (currentSubject) {
      fetchClusters(currentSubject);
    }
  }, [currentSubject, fetchClusters]);

  // ── Timer ──
  useEffect(() => {
    if (timerRunning && timerSeconds > 0) {
      timerRef.current = setTimeout(() => setTimerSeconds(s => s - 1), 1000);
    } else if (timerRunning && timerSeconds === 0) {
      setTimerRunning(false);
      setShowPulse(true);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [timerRunning, timerSeconds]);

  const startTimer = () => { setStudyStarted(true); setTimerRunning(true); };

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const submitPulse = async (pulse: "RED" | "YELLOW" | "GREEN") => {
    if (!token) return;
    try {
      await fetch(`${API}/focused/pomodoro/complete`, {
        method: "POST",
        headers: { ...authHeader, "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: currentSubject, 
          cluster_number: currentCluster, 
          cluster_name: currentClusterName,
          pomodoro_number: currentPomodoro, confidence_pulse: pulse, duration_minutes: 25,
        }),
      });
    } catch (e) { console.error(e); }
    setPomodoroCount(c => c + 1);
    setCurrentPomodoro(p => p + 1);
    setShowPulse(false);
    setTimerSeconds(25 * 60);
    fetchDashboard();
  };

  // ── Test ──
  // Flow: START → load questions → answer each (reveal after each) → confidence → submit
  const startTestSequence = async () => {
    if (!token) return;
    setError(null);
    try {
      const res = await fetch(`${API}/focused/test/${encodeURIComponent(currentSubject)}/${currentCluster}`, { headers: authHeader });
      if (!res.ok) throw new Error("Could not load test questions.");
      const data = await res.json();
      if (!data.questions?.length) throw new Error("No questions available for this cluster yet.");
      setTestQuestions(data.questions);
      setTestStarted(true);
      setTestStartTime(Date.now());
      setTestAnswers({});
      setShowConfidenceAfter(false);
      setTestConfidence(new Array(data.questions.length).fill(""));
      setTimePerQuestion(new Array(data.questions.length).fill(0));
      setQuestionStartTime(Date.now());
      setTestQuestionIds(data.questions.map((q: any) => q.id));
      timePerQuestionRef.current = new Array(data.questions.length).fill(0);
      questionStartTimeRef.current = Date.now();
      lastVisibleIndexRef.current = 0;
      document.documentElement.requestFullscreen().catch(() => {});
    } catch (e: any) {
      setError(e.message);
    }
  };

  const CONFIDENCE_PILLS = ["Short Shot", "50/50", "Other", "Only One Known", "Blind Guess", "Skip"];

  const selectAnswerByIndex = (qIndex: number, option: string) => {
    setTestAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const setConfidenceByIndex = (qIndex: number, value: string) => {
    setTestConfidence(prev => {
      const next = [...prev];
      next[qIndex] = value;
      return next;
    });
    // Skip clears any selected answer for this question
    if (value === "Skip") {
      setTestAnswers(prev => {
        const next = { ...prev };
        delete next[qIndex];
        return next;
      });
    }
  };

  const submitTest = async () => {
    if (!token || !user) return;
    setIsSubmitting(true);
    if (document.fullscreenElement) document.exitFullscreen();
    timePerQuestionRef.current[lastVisibleIndexRef.current] += Date.now() - questionStartTimeRef.current;
    const answersArray = testQuestions.map((q, i) => testAnswers[i] || "Skip");
    const questionIds = testQuestions.map(q => q.id);
    const timesArray = timePerQuestionRef.current.map(t => t || 0);
    try {
      const res = await fetch(`${API}/focused/test/submit`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: currentSubject,
          cluster_id: currentCluster,
          question_ids: questionIds,
          answers: answersArray,
          confidence: testConfidence,
          time_per_question: timesArray,
        }),
      });
      const data = await res.json();
      setTestReport(data.report ?? data);
      setTestSubmitted(true);
      fetchDashboard();
      fetchCumulative();
      fetchHistory();
      fetchProgress();
    } catch (e) { console.error(e); }
    setIsSubmitting(false);
  };

  // ── Timer display ──
  const timerDisplay = `${String(Math.floor(timerSeconds / 60)).padStart(2, "0")}:${String(timerSeconds % 60).padStart(2, "0")}`;
  const timerPercent = ((25 * 60 - timerSeconds) / (25 * 60)) * 100;

  // ── Helpers ──
  const dateStr = new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const morningDone = dashData?.morning_pomodoros_done ?? pomodoroCount;
  const eveningDone = dashData?.evening_test_done ?? testSubmitted;

  // ── Handlers ──
  const handleClusterSelect = (cluster: any) => {
    setSelectedClusterInfo(cluster);
    setViewMode('session');
    // If the cluster has a custom cluster_number, we can use it, otherwise fall back
    // The session view currently uses currentCluster from dashData
  };

  const handleBackToOverview = () => {
    setViewMode('overview');
    fetchClusters(currentSubject);
  };

  // ── Sub-Components ──
  const ClusterOverviewScreen = () => {
    if (loadingClusters) {
      return <div style={{ padding: 40, textAlign: "center", color: C.textMuted }}>Mapping neural clusters...</div>;
    }

    if (clusters.length === 0) {
      return (
        <div style={{ textAlign: "center", padding: 60, backgroundColor: C.surface, borderRadius: 24, border: `1px dashed ${C.border}` }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>No content available for {currentSubject} yet.</h2>
          <p style={{ color: C.textMuted }}>Admin is currently uploading the detailed PDF content for this segment.</p>
        </div>
      );
    }

    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {clusters.map((cl) => {
          const isRecommended = cl.is_recommended_next;
          
          return (
            <div 
              key={cl.cluster_number}
              style={{ 
                backgroundColor: C.surface, 
                border: `1px solid ${isRecommended ? C.gold : C.border}`,
                borderRadius: 20,
                padding: 24,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxShadow: isRecommended ? `0 0 20px ${C.goldGlow}` : "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                if (isRecommended) e.currentTarget.style.boxShadow = `0 10px 30px ${C.goldGlow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                if (isRecommended) e.currentTarget.style.boxShadow = `0 0 20px ${C.goldGlow}`;
              }}
              onClick={() => handleClusterSelect(cl)}
            >
              {isRecommended && (
                <div style={{ 
                  position: "absolute", top: -12, left: 24, 
                  backgroundColor: C.gold, color: "#000", fontSize: 10, fontWeight: 800, 
                  padding: "4px 10px", borderRadius: 10, letterSpacing: "0.05em"
                }}>
                  RECOMMENDED NEXT
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: C.textMuted }}>CLUSTER {cl.cluster_number}</p>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{cl.cluster_name}</h3>
                </div>
                <div style={{ 
                  padding: "4px 8px", borderRadius: 6, fontSize: 10, fontWeight: 700,
                  backgroundColor: cl.status === 'completed' ? "rgba(68,255,136,0.1)" : cl.status === 'in_progress' ? "rgba(255,179,68,0.1)" : "rgba(255,255,255,0.05)",
                  color: cl.status === 'completed' ? C.green : cl.status === 'in_progress' ? C.amber : C.textMuted,
                  border: `1px solid ${cl.status === 'completed' ? C.green : cl.status === 'in_progress' ? C.amber : C.border}`,
                  textTransform: "uppercase"
                }}>
                  {cl.status.replace('_', ' ')}
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cl.topics.map((t: string, i: number) => (
                  <span key={i} style={{ 
                    fontSize: 10, padding: "4px 8px", borderRadius: 6, 
                    backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`, color: C.textMuted
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
                {cl.status === 'completed' ? (
                  <>
                    <div style={{ 
                      flex: 1, padding: "10px", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                      backgroundColor: "rgba(68,255,136,0.05)", color: C.green, fontSize: 12, fontWeight: 700, border: `1px solid ${C.green}`
                    }}>
                      ✓ DONE
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleClusterSelect(cl); }}
                      style={{ 
                        padding: "10px 16px", borderRadius: 10, backgroundColor: "transparent", 
                        border: `1px solid ${C.gold}`, color: C.gold, fontSize: 12, fontWeight: 700, cursor: "pointer"
                      }}
                    >
                      REVISE
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleClusterSelect(cl); }}
                    style={{ 
                      width: "100%", padding: "12px", borderRadius: 12, cursor: "pointer", border: "none",
                      backgroundColor: cl.status === 'in_progress' ? C.amber : C.gold,
                      color: "#000", fontSize: 14, fontWeight: 700
                    }}
                  >
                    {cl.status === 'in_progress' ? 'CONTINUE' : 'START'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const answeredCount = testStarted
    ? testQuestions.filter((_, i) => testAnswers[i] !== undefined || testConfidence[i] === "Skip").length
    : 0;
  const hasWarning = (i: number) => !!(testConfidence[i] && testConfidence[i] !== "Skip" && !testAnswers[i]);

  return (
    <div style={{
      ...({
        "--fp-bg": isDark ? "#0A0A0F" : "#f5f5f5",
        "--fp-card": isDark ? "#13131A" : "#ffffff",
        "--fp-border": isDark ? "#1E1E2E" : "#dddddd",
        "--fp-text": isDark ? "#F0F0F5" : "#1a1a1a",
        "--fp-muted": isDark ? "#6B7280" : "#555555",
        "--fp-accent": isDark ? "#C9A84C" : "#b8860b",
        "--fp-accent-glow": isDark ? "rgba(201,168,76,0.15)" : "rgba(184,134,11,0.12)",
      } as React.CSSProperties),
      backgroundColor: C.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: C.textPrimary
    }}>
      
      {/* ── Theme Toggle ── */}
      {(!testStarted || testSubmitted) && (
        <button onClick={() => setIsDark(d => !d)} style={{
          position: "fixed", top: 16, right: 16, zIndex: 1000,
          padding: "6px 12px", borderRadius: 999, border: `1px solid ${C.border}`,
          backgroundColor: C.surface, cursor: "pointer", fontSize: 16,
          color: C.textPrimary,
        }}>
          {isDark ? "☀️" : "🌙"}
        </button>
      )}

      {/* ── Desktop Header ── */}
      <div style={{ 
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: "rgba(10,12,14,0.8)", backdropFilter: "blur(12px)", 
        borderBottom: `1px solid ${C.border}`,
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: C.gold, boxShadow: `0 0 10px ${C.gold}` }} />
          <span style={{ color: C.textPrimary, fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>SARIT FOCUSED</span>
        </div>

        <div style={{ display: "flex", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 4 }}>
          {(['focus', 'progress', 'history'] as const).map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "6px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer",
                backgroundColor: activeTab === t ? (isDark ? C.gold : '#1a1a1a') : 'transparent',
                color: activeTab === t ? (isDark ? '#000' : '#ffffff') : (isDark ? '#888888' : '#333333'),
                border: activeTab !== t && !isDark ? '1px solid #cccccc' : 'none',
                transition: "all 0.2s",
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: C.textMuted, fontSize: 12 }}>{getDaysToExam()} days to D-Day</span>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "32px 24px" }}>
        
        {/* Layout Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: activeTab === 'focus' ? "300px 1fr 340px" : "1fr",
          gap: 32, 
          alignItems: "start"
        }}>

          {/* ═══════════════════════════════════════════════════════════════
              ZONE 1: SUBJECT PROGRESS (Left)
          ═══════════════════════════════════════════════════════════════ */}
          {(activeTab === 'focus' || activeTab === 'progress') && (
            <div style={{ display: activeTab === 'progress' ? 'grid' : 'block', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.05em", color: C.gold }}>SUBJECT PROGRESS</h3>
                  <span style={{ fontSize: 11, color: C.textMuted }}>{dashData?.gate_completions ?? 0}/12 Completed</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {SUBJECT_SEQUENCE.map((s, idx) => {
                    const status = dashData?.subject_map?.[s] ?? "LOCKED";
                    const isActive = currentSubject === s;
                    const isDone = status === "COMPLETED" || status === "PASSED";
                    
                    return (
                      <div key={idx} style={{ 
                        display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", 
                        borderRadius: 12, backgroundColor: isActive ? "rgba(201,168,76,0.08)" : "transparent",
                        border: `1px solid ${isActive ? C.gold : "transparent"}`,
                        opacity: status === "LOCKED" ? 0.4 : 1
                      }}>
                        <div style={{ 
                          width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                          backgroundColor: isDone ? "rgba(68,255,136,0.1)" : isActive ? C.gold : "rgba(255,255,255,0.05)",
                          border: `1px solid ${isDone ? C.green : isActive ? C.gold : C.border}`,
                          fontSize: 10, color: isDone ? C.green : isActive ? "#000" : C.textMuted
                        }}>
                          {isDone ? "✓" : idx + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: isActive ? C.gold : C.textPrimary }}>{s}</p>
                          <p style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase" }}>{status}</p>
                        </div>
                        {isActive && <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.gold, boxShadow: `0 0 6px ${C.gold}` }} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}




          {/* ═══════════════════════════════════════════════════════════════
              ZONE 2: CONTENT GRID OR SESSION VIEW (Center)
          ═══════════════════════════════════════════════════════════════ */}
          {(activeTab === 'focus') && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
                <div>
                  <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.03em" }}>
                    {viewMode === 'overview' ? `${currentSubject} Clusters` : (selectedClusterInfo?.cluster_name ?? currentClusterName)}
                  </h1>
                  <p style={{ color: C.textMuted, fontSize: 14 }}>
                    {currentSubject} {viewMode === 'session' && `· Cluster ${selectedClusterInfo?.cluster_number ?? currentCluster}`} · Path to 24th May
                  </p>
                </div>
                {viewMode === 'session' && (
                  <button 
                    onClick={handleBackToOverview}
                    style={{ 
                      padding: "8px 16px", borderRadius: 10, backgroundColor: "rgba(255,255,255,0.05)", 
                      color: C.textMuted, border: `1px solid ${C.border}`, fontSize: 13, fontWeight: 600, cursor: "pointer"
                    }}
                  >
                    ← All Clusters
                  </button>
                )}
              </div>

              {viewMode === 'overview' ? (
                <ClusterOverviewScreen />
              ) : (
                <>
                  {/* Study Block */}
                  <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 24, padding: 32, marginBottom: 24, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", backgroundColor: C.gold }} />
                
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
                  <div>
                    <p style={{ color: C.gold, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>☀ Morning Block</p>
                    <h2 style={{ fontSize: 20, fontWeight: 700 }}>Intensive Study</h2>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600 }}>POMODOROS</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: C.gold }}>{currentPomodoro}/4</p>
                  </div>
                </div>

                {/* Pomodoro Timer or Confidence Pulse */}
                {showPulse ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                     <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 24 }}>How do you feel about Cluster {currentCluster}?</p>
                     <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                        {(["RED", "YELLOW", "GREEN"] as const).map(p => (
                          <button key={p} onClick={() => submitPulse(p)} style={{
                            padding: "16px 32px", borderRadius: 16, fontWeight: 700, border: "none", cursor: "pointer",
                            backgroundColor: p === "RED" ? "rgba(255,68,68,0.15)" : p === "YELLOW" ? "rgba(255,179,68,0.15)" : "rgba(68,255,136,0.15)",
                            color: p === "RED" ? C.red : p === "YELLOW" ? C.amber : C.green,
                          }}>
                              {p === "RED" ? "🔴 Low" : p === "YELLOW" ? "🟡 Mid" : "🟢 High"}
                          </button>
                        ))}
                     </div>
                  </div>
                ) : studyStarted ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 40, backgroundColor: "rgba(255,255,255,0.02)", padding: 24, borderRadius: 20 }}>
                     <div style={{ position: "relative", width: 120, height: 120 }}>
                        <svg width="120" height="120" style={{ transform: "rotate(-90deg)" }}>
                          <circle cx="60" cy="60" r="54" fill="none" stroke={C.border} strokeWidth="6" />
                          <circle cx="60" cy="60" r="54" fill="none" stroke={C.gold} strokeWidth="6"
                            strokeDasharray={`${2 * Math.PI * 54}`}
                            strokeDashoffset={`${2 * Math.PI * 54 * (1 - timerPercent / 100)}`}
                            strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s linear" }}
                          />
                        </svg>
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700 }}>
                          {timerDisplay.split(':')[0]}
                        </div>
                     </div>
                     <div style={{ flex: 1 }}>
                        <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 12 }}>Time remaining for Pomodoro {currentPomodoro}</p>
                        <div style={{ display: "flex", gap: 12 }}>
                          <button onClick={() => setTimerRunning(!timerRunning)} style={{
                            padding: "12px 24px", borderRadius: 12, backgroundColor: C.gold, color: "#000", fontWeight: 700, border: "none", cursor: "pointer"
                          }}>
                            {timerRunning ? "Pause" : "Resume"}
                          </button>
                          <button onClick={() => setStudyStarted(false)} style={{
                            padding: "12px 24px", borderRadius: 12, backgroundColor: "transparent", color: C.textMuted, border: `1px solid ${C.border}`, cursor: "pointer"
                          }}>Reset</button>
                        </div>
                     </div>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => setStudyStarted(true)} style={{
                      width: "100%", padding: "20px", borderRadius: 16, backgroundColor: C.gold, color: "#000", fontWeight: 800, fontSize: 16, border: "none", cursor: "pointer"
                    }}>
                      🚀 BEGIN STUDY SESSION
                    </button>
                    <p style={{ textAlign: "center", marginTop: 16, color: C.textMuted, fontSize: 12 }}>Estimated duration: 25 mins + 5 min break</p>
                  </div>
                )}
              </div>

              {/* Evening Block */}
              <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", backgroundColor: eveningDone ? C.green : C.amber }} />
                
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
                  <div>
                    <p style={{ color: eveningDone ? C.green : C.amber, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>🌙 Evening Practice</p>
                    <h2 style={{ fontSize: 20, fontWeight: 700 }}>Knowledge Verification</h2>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600 }}>STATUS</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: eveningDone ? C.green : C.amber }}>{eveningDone ? "COMPLETED" : "PENDING"}</p>
                  </div>
                </div>

                {error && (
                  <div style={{ backgroundColor: "rgba(255,68,68,0.1)", border: `1px solid ${C.red}`, borderRadius: 12, padding: 16, marginBottom: 20, fontSize: 13, color: C.red }}>
                    ⚠ {error}
                  </div>
                )}

                {testStarted && !testSubmitted ? (
                  <div style={{ padding: "24px 0", textAlign: "center", color: C.textMuted }}>
                    <p style={{ fontSize: 14, fontWeight: 600 }}>Test in progress...</p>
                    <p style={{ fontSize: 12, marginTop: 8 }}>{answeredCount}/{testQuestions.length} answered</p>
                  </div>
                ) : testSubmitted ? (
                  <div>
                    <p style={{ color: C.green, fontWeight: 700, fontSize: 16, marginBottom: 16 }}>✓ Report Ready</p>
                    <pre style={{
                      backgroundColor: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`,
                      borderRadius: 12, padding: 16, fontSize: 11, color: C.textMuted,
                      overflowX: "auto", whiteSpace: "pre-wrap", maxHeight: 400, overflowY: "auto"
                    }}>
                      {JSON.stringify(testReport, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <button onClick={startTestSequence} style={{
                    width: "100%", padding: "20px", borderRadius: 16, backgroundColor: "transparent", color: C.amber, fontWeight: 700, border: `2px dashed ${C.amber}`, cursor: "pointer",
                  }}>
                    {eveningDone ? "✓ COMPLETED TODAY" : "START VERIFICATION"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}

          {/* ═══════════════════════════════════════════════════════════════
              ZONE 3: INSIGHTS & HISTORY (Right)
          ═══════════════════════════════════════════════════════════════ */}
          {(activeTab === 'focus' || activeTab === 'history') && (
            <div style={{ display: activeTab === 'history' ? 'grid' : 'block', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              
              {/* Stats Card */}
              <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 24, padding: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.05em", color: C.gold, marginBottom: 20 }}>YOUR STATS</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 16, border: `1px solid ${C.border}` }}>
                    <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 600 }}>STREAK</p>
                    <p style={{ fontSize: 24, fontWeight: 700, color: C.gold }}>🔥 {dashData?.streak ?? 0}</p>
                  </div>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 16, border: `1px solid ${C.border}` }}>
                    <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 600 }}>TOTAL POMO</p>
                    <p style={{ fontSize: 24, fontWeight: 700, color: C.gold }}>🎯 {dashData?.total_pomodoros ?? 0}</p>
                  </div>
                </div>
              </div>

              {/* Revision Priorities */}
              <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 24, padding: 24 }}>
                <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.05em", color: C.red, marginBottom: 20 }}>REVISION PRIORITIES</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {cumulativeData?.subjects?.length > 0 ? (
                    cumulativeData.subjects.map((s: any, i: number) => (
                      <div key={i} style={{
                        padding: 14, borderRadius: 16, backgroundColor: "rgba(255,68,68,0.04)",
                        border: `1px solid ${s.priority === "HIGH" ? "rgba(255,68,68,0.2)" : C.border}`
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 14, fontWeight: 700 }}>{s.subject}</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, backgroundColor: s.priority === "HIGH" ? C.red : C.amber, color: "#000", fontWeight: 700 }}>{s.priority}</span>
                        </div>
                        <p style={{ fontSize: 11, color: C.textMuted }}>Last verification: {s.gate_score ?? 0}/10</p>
                      </div>
                    ))
                  ) : (
                    <div style={{ textAlign: "center", padding: "20px 0", color: C.textMuted }}>
                      <p style={{ fontSize: 13 }}>No flags yet.</p>
                      <p style={{ fontSize: 11, marginTop: 4 }}>Complete your first gate test to see insights.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* BUG 7+8: Test History */}
              {activeTab === 'history' && historyData?.history?.length > 0 && (
                <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 24, padding: 24, marginTop: 24 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.05em", color: C.gold, marginBottom: 20 }}>TEST HISTORY</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {historyData.history.map((r: any) => (
                      <div key={r.id} style={{ padding: 14, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}` }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 13, fontWeight: 700 }}>{r.subject} — Cluster {r.cluster_number}</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: r.percentage >= 60 ? C.green : r.percentage >= 40 ? C.amber : C.red }}>
                            {r.score}/{r.total_questions} ({r.percentage.toFixed(0)}%)
                          </span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ fontSize: 11, color: C.textMuted }}>{r.date}</span>
                          {r.improvement !== 0 && (
                            <span style={{ fontSize: 11, color: r.improvement > 0 ? C.green : C.red, fontWeight: 600 }}>
                              {r.improvement > 0 ? '↑' : '↓'} {Math.abs(r.improvement).toFixed(1)}%
                            </span>
                          )}
                        </div>
                        {r.weak_topics?.length > 0 && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                            {r.weak_topics.slice(0, 4).map((t: string, i: number) => (
                              <span key={i} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, backgroundColor: "rgba(255,68,68,0.08)", color: C.red, border: `1px solid rgba(255,68,68,0.2)` }}>{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      {/* ── BUG 6 + BUG 2: MCQ Fullscreen Overlay (fixed position, correct pill order) ── */}
      <style>{`@keyframes fspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      {testStarted && !testSubmitted && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          zIndex: 9999, overflowY: 'auto',
          backgroundColor: isDark ? '#0a0a0a' : '#f5f5f5',
          padding: 0,
        }}>
          <button
            onClick={() => { if (document.fullscreenElement) document.exitFullscreen(); setTestStarted(false); setTestAnswers({}); setTestConfidence([]); }}
            style={{
              position: 'fixed', top: 16, right: 16, zIndex: 10000,
              width: 40, height: 40, borderRadius: '50%',
              border: `1px solid ${C.border}`,
              backgroundColor: isDark ? 'rgba(10,10,15,0.9)' : '#ffffff',
              color: C.textPrimary, fontSize: 18, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>

          <div style={{ maxWidth: 800, margin: '0 auto', padding: 16, paddingBottom: 80 }}>
            <p style={{ color: C.textMuted, fontSize: 12, padding: '12px 0 8px', fontWeight: 600 }}>
              {currentSubject} — {currentClusterName} · {answeredCount}/{testQuestions.length} answered
            </p>

            {testQuestions.map((q, qIndex) => {
              const selected = testAnswers[qIndex];
              const conf = testConfidence[qIndex];
              const warn = hasWarning(qIndex);
              return (
                <div key={q.id}
                  ref={(el) => {
                    if (!el) return;
                    const obs = new IntersectionObserver(([entry]) => {
                      if (entry.isIntersecting && lastVisibleIndexRef.current !== qIndex) {
                        const now = Date.now();
                        timePerQuestionRef.current[lastVisibleIndexRef.current] += now - questionStartTimeRef.current;
                        questionStartTimeRef.current = now;
                        lastVisibleIndexRef.current = qIndex;
                      }
                    }, { threshold: 0.5 });
                    obs.observe(el);
                  }}
                  style={{
                    marginBottom: 24, padding: 20, borderRadius: 12,
                    backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                    border: `1px solid ${warn ? C.red : C.border}`,
                  }}>
                  <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 700, marginBottom: 10 }}>Q{qIndex + 1} / {testQuestions.length}</p>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.7, marginBottom: 16 }}>
                    {formatQuestionText(q.question_text ?? q.text ?? '')}
                  </p>

                  {/* Options first (BUG 2 fix) */}
                  {conf !== 'Skip' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                      {(['A', 'B', 'C', 'D'] as const).map(key => {
                        const optionText = q[`option_${key.toLowerCase()}`] ?? (q.options || {})[key];
                        if (!optionText) return null;
                        const isSelected = selected === key;
                        return (
                          <button
                            key={key}
                            onClick={() => selectAnswerByIndex(qIndex, key)}
                            style={{
                              textAlign: 'left', padding: '13px 16px', borderRadius: 12, cursor: 'pointer',
                              width: '100%', minHeight: 52,
                              border: `1px solid ${isSelected ? '#4A90E2' : C.border}`,
                              backgroundColor: isSelected ? 'rgba(74,144,226,0.1)' : isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                              color: isSelected ? '#4A90E2' : C.textPrimary,
                              transition: 'all 0.15s', fontWeight: isSelected ? 600 : 400,
                              whiteSpace: 'normal', wordBreak: 'break-word',
                            }}
                          >
                            <strong>{key}.</strong> {optionText}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p style={{ fontSize: 12, color: '#555', fontStyle: 'italic', marginBottom: 16 }}>Skipped — will count as wrong</p>
                  )}

                  {/* Confidence pills below options (BUG 2 fix) */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: warn ? 8 : 0 }}>
                    {CONFIDENCE_PILLS.map(pill => {
                      const isSkip = pill === 'Skip';
                      const isActive = conf === pill;
                      return (
                        <button
                          key={pill}
                          onClick={() => setConfidenceByIndex(qIndex, pill)}
                          style={{
                            padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                            border: `1px solid ${isActive ? (isSkip ? '#555' : C.gold) : C.border}`,
                            backgroundColor: isActive ? (isSkip ? 'rgba(255,255,255,0.06)' : C.goldGlow) : 'transparent',
                            color: isActive ? (isSkip ? '#888' : C.gold) : isSkip ? '#555' : C.textMuted,
                            transition: 'all 0.15s',
                          }}
                        >{pill}</button>
                      );
                    })}
                  </div>

                  {warn && (
                    <p style={{ fontSize: 11, color: C.red, marginTop: 8, fontWeight: 600 }}>⚠ Please select an answer</p>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={submitTest}
            disabled={isSubmitting}
            style={{
              position: 'fixed', bottom: 0, left: 0, width: '100%',
              padding: 16, zIndex: 10000,
              backgroundColor: isSubmitting ? 'rgba(212,175,55,0.5)' : '#d4af37',
              color: '#000', border: 'none', fontSize: 16, fontWeight: 700,
              cursor: isSubmitting ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            {isSubmitting ? (
              <>
                <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid #000', borderTopColor: 'transparent', borderRadius: '50%', animation: 'fspin 0.8s linear infinite' }} />
                Generating your report...
              </>
            ) : `Submit Test (${answeredCount}/${testQuestions.length})`}
          </button>
        </div>
      )}
    </div>
  );
}
