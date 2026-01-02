// Day 2 Flashcards - Batch 1, 6-7 PM Session
// Topics: Making of the Constitution & Salient Features of the Constitution
// Based on M. Laxmikanth's Indian Polity

import { Flashcard } from '../flashcard-utils';

export const DAY2_FLASHCARDS: Flashcard[] = [
    // ========== CHAPTER 2: MAKING OF THE CONSTITUTION ==========

    // --- Demand for Constituent Assembly ---
    {
        id: 'd2-ca-demand-1',
        front: 'Who first proposed the idea of a Constituent Assembly for India, and in which year?',
        back: 'M.N. Roy, a pioneer of the communist movement in India, first proposed the idea in 1934.',
        category: 'fact',
        source: 'Making of the Constitution',
        highlight: true
    },
    {
        id: 'd2-ca-demand-2',
        front: 'When did the Indian National Congress (INC) officially demand a Constituent Assembly?',
        back: '1935. The INC officially demanded a Constituent Assembly to frame the Constitution of India.',
        category: 'fact',
        source: 'Making of the Constitution'
    },
    {
        id: 'd2-ca-demand-3',
        front: "What was Jawaharlal Nehru's declaration in 1938 regarding the Constituent Assembly?",
        back: 'Nehru declared that the Constitution of free India must be framed, without outside interference, by a Constituent Assembly elected on the basis of adult franchise.',
        category: 'fact',
        source: 'Making of the Constitution',
        highlight: true
    },
    {
        id: 'd2-ca-demand-4',
        front: 'When did the British Government accept the demand for a Constituent Assembly?',
        back: 'The demand was accepted in principle in August 1940 through the "August Offer".',
        category: 'fact',
        source: 'Making of the Constitution'
    },
    {
        id: 'd2-ca-demand-5',
        front: 'What was the Cripps Mission (1942) and why was it rejected?',
        back: 'Sir Stafford Cripps came with a draft proposal for an independent constitution. It was rejected by the Muslim League, which wanted India divided into two autonomous states with two separate Constituent Assemblies.',
        category: 'fact',
        source: 'Making of the Constitution'
    },
    {
        id: 'd2-ca-demand-6',
        front: 'What was the Cabinet Mission (1946) and how did it address the Muslim League demand?',
        back: 'The Cabinet Mission rejected the idea of two Constituent Assemblies but put forth a scheme for a single Constituent Assembly that more or less satisfied the Muslim League.',
        category: 'fact',
        source: 'Making of the Constitution',
        highlight: true
    },

    // --- Composition of the Constituent Assembly ---
    {
        id: 'd2-ca-comp-1',
        front: 'What was the total strength of the Constituent Assembly and when was it constituted?',
        back: 'Total Strength: 389 members. Constituted in November 1946 under the Cabinet Mission Plan scheme.',
        category: 'fact',
        source: 'Making of the Constitution',
        highlight: true
    },
    {
        id: 'd2-ca-comp-2',
        front: 'How were seats divided between British India and Princely States in the Constituent Assembly?',
        back: '296 seats for British India (292 from Governor's Provinces + 4 from Chief Commissioner's Provinces) and 93 seats for Princely States.',
    category: 'fact',
    source: 'Making of the Constitution'
    },
{
    id: 'd2-ca-comp-3',
        front: 'What was the basis for seat allocation in the Constituent Assembly?',
            back: 'Seats were allotted in proportion to population—roughly one seat for every million population.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-comp-4',
        front: 'How were seats in British India divided among communities?',
            back: 'Seats were divided among three principal communities—Muslims, Sikhs, and General (all except Muslims and Sikhs)—in proportion to their population.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-comp-5',
        front: 'What was the method of election for British India and Princely States representatives?',
            back: 'British India: Indirect Election by Provincial Legislative Assembly members via proportional representation with single transferable vote.\nPrincely States: Nominated by the heads of the Princely States.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-comp-6',
        front: 'What was the nature of the Constituent Assembly (elected or nominated)?',
            back: 'It was a PARTLY ELECTED and PARTLY NOMINATED body. Members were not directly elected by the people on the basis of adult franchise.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-comp-7',
        front: 'What were the results of the 1946 Constituent Assembly elections?',
            back: 'INC won 208 seats, Muslim League won 73 seats, Independents/Others won 15 seats. The 93 Princely State seats remained initially vacant.',
                category: 'fact',
                    source: 'Making of the Constitution'
},

// --- Working of the Constituent Assembly ---
{
    id: 'd2-ca-work-1',
        front: 'When was the first meeting of the Constituent Assembly held, and who boycotted it?',
            back: 'December 9, 1946. Attended by 211 members. The Muslim League boycotted the meeting, insisting on a separate state of Pakistan.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-work-2',
        front: 'Who was the Temporary President of the Constituent Assembly, and why?',
            back: 'Dr. Sachchidanand Sinha, the oldest member, was elected (following the French practice).',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-work-3',
        front: 'Who was the Permanent President of the Constituent Assembly and when was he elected?',
            back: 'Dr. Rajendra Prasad was elected on December 11, 1946.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-work-4',
        front: 'Who were the Vice-Presidents of the Constituent Assembly?',
            back: 'H.C. Mukherjee and V.T. Krishnamachari.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-work-5',
        front: 'Who moved the Objectives Resolution, when, and what became of it?',
            back: 'Jawaharlal Nehru moved it on December 13, 1946. Unanimously adopted on January 22, 1947. Its modified version forms the Preamble of the present Constitution.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},

// --- Changes by Independence Act of 1947 ---
{
    id: 'd2-ca-indep-1',
        front: 'What three changes did the Indian Independence Act of 1947 make to the Constituent Assembly?',
            back: '1. Made it a Fully Sovereign Body.\n2. Made it a Legislative Body (Parliament).\n3. Reduced its strength from 389 to 299 after partition.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-indep-2',
        front: 'After Independence, the Constituent Assembly had two distinct functions. What were they, and who chaired each?',
            back: '1. Constitution-making: Chaired by Dr. Rajendra Prasad.\n2. Legislating (Law-making): Chaired by G.V. Mavalankar.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},

// --- Other Functions of CA ---
{
    id: 'd2-ca-func-1',
        front: 'List important functions performed by the Constituent Assembly besides making the Constitution.',
            back: '• Ratified India's Commonwealth membership(May 1949).\n• Adopted National Flag(July 22, 1947).\n• Adopted National Anthem(Jan 24, 1950).\n• Adopted National Song(Jan 24, 1950).\n• Elected Dr.Rajendra Prasad as first President(Jan 24, 1950).',
    category: 'fact',
        source: 'Making of the Constitution'
},

// --- Major Committees and Chairmen ---
{
    id: 'd2-ca-comm-1',
        front: 'Who chaired the Union Powers Committee and Union Constitution Committee?',
            back: 'Jawaharlal Nehru.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-comm-2',
        front: 'Who chaired the Provincial Constitution Committee?',
            back: 'Sardar Vallabhbhai Patel.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-comm-3',
        front: 'Who chaired the Drafting Committee?',
            back: 'Dr. B.R. Ambedkar.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-comm-4',
        front: 'Who chaired the Advisory Committee on Fundamental Rights, Minorities, etc.?',
            back: 'Sardar Vallabhbhai Patel.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-comm-5',
        front: 'Who chaired the Rules of Procedure Committee and the Steering Committee?',
            back: 'Dr. Rajendra Prasad chaired both.',
                category: 'fact',
                    source: 'Making of the Constitution'
},

// --- Drafting Committee ---
{
    id: 'd2-ca-draft-1',
        front: 'When was the Drafting Committee set up and what was its task?',
            back: 'Set up on August 29, 1947. Entrusted with preparing a draft of the new Constitution.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-draft-2',
        front: 'Who were the original 7 members of the Drafting Committee?',
            back: '1. Dr. B.R. Ambedkar (Chairman)\n2. N. Gopalaswamy Ayyangar\n3. Alladi Krishnaswamy Ayyar\n4. Dr. K.M. Munshi\n5. Syed Mohammad Saadullah\n6. B.L. Mitter (later replaced by N. Madhava Rau)\n7. D.P. Khaitan (later replaced by T.T. Krishnamachari)',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},

// --- Enactment and Enforcement ---
{
    id: 'd2-ca-enact-1',
        front: 'When was the Constitution of India finally adopted?',
            back: 'November 26, 1949. Dr. Ambedkar moved the motion "The Constitution as settled by the Assembly be passed."',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-enact-2',
        front: 'What did the original Constitution of India (1949) contain?',
            back: 'A Preamble, 395 Articles, and 8 Schedules.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-enact-3',
        front: "What titles are given to Dr. B.R. Ambedkar for his role in making the Constitution?",
            back: "'Father of the Constitution of India' and 'Chief Architect of the Constitution'.",
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-enact-4',
        front: 'When did the Constitution of India come into full effect, and why was that date chosen?',
            back: 'January 26, 1950 (Republic Day). Chosen to commemorate the "Purna Swaraj" declaration of 1930.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-enact-5',
        front: 'Which provisions of the Constitution came into force on November 26, 1949 (partially)?',
            back: 'Citizenship, Elections, Provisional Parliament, Temporary & Transitional Provisions.',
                category: 'fact',
                    source: 'Making of the Constitution'
},

// --- Criticism of CA ---
{
    id: 'd2-ca-crit-1',
        front: 'List the major criticisms leveled against the Constituent Assembly.',
            back: '1. Not a Representative Body (not directly elected).\n2. Not a Sovereign Body (created by British proposals).\n3. Time-Consuming (2 years, 11 months, 18 days).\n4. Dominated by Congress.\n5. Lawyer-Politician Domination (led to bulky Constitution).\n6. Dominated by Hindus.',
                category: 'fact',
                    source: 'Making of the Constitution'
},
{
    id: 'd2-ca-crit-2',
        front: 'Who said "The Assembly was the Congress and the Congress was India"?',
            back: 'Granville Austin.',
                category: 'fact',
                    source: 'Making of the Constitution',
                        highlight: true
},
{
    id: 'd2-ca-crit-3',
        front: 'Who called the Constituent Assembly "A body of Hindus"?',
            back: 'Lord Viscount Simon.',
                category: 'fact',
                    source: 'Making of the Constitution'
},

// ========== CHAPTER 3: SALIENT FEATURES OF THE CONSTITUTION ==========

// --- Introduction ---
{
    id: 'd2-sf-intro-1',
        front: "Which amendment is known as the 'Mini-Constitution' and why?",
            back: '42nd Amendment Act (1976). It brought extensive changes to the Constitution.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-intro-2',
        front: "What did the Kesavananda Bharati Case (1973) establish?",
            back: "The Supreme Court ruled that Article 368 does not enable Parliament to alter the 'Basic Structure' of the Constitution.",
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Lengthiest Written Constitution ---
{
    id: 'd2-sf-length-1',
        front: 'What is the status of the Indian Constitution in terms of length?',
            back: 'It is the LENGTHIEST of all written constitutions in the world.',
                category: 'concept',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-length-2',
        front: 'What did the original (1949) Constitution contain?',
            back: 'Preamble, 395 Articles (in 22 Parts), and 8 Schedules.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-length-3',
        front: 'What does the present Constitution contain (approx.)?',
            back: 'Preamble, about 470 Articles (in 25 Parts), and 12 Schedules.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-length-4',
        front: 'What are the reasons for the bulkiness of the Indian Constitution?',
            back: '1. Geographical factors (vastness and diversity).\n2. Historical factors (influence of GOI Act 1935).\n3. Single Constitution for Centre and States.\n4. Dominance of Legal Luminaries in the Constituent Assembly.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Drawn from Various Sources ---
{
    id: 'd2-sf-source-1',
        front: "What did Dr. Ambedkar say about the sources of the Indian Constitution?",
            back: 'He proudly acclaimed that it was framed after "ransacking all the known Constitutions of the World."',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-source-2',
        front: 'From which source is the Structural Part of the Constitution largely derived?',
            back: 'Government of India Act of 1935.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-source-3',
        front: 'From which countries are Fundamental Rights and Directive Principles borrowed?',
            back: 'Fundamental Rights: USA. Directive Principles: Ireland.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-source-4',
        front: 'From which country is the concept of Cabinet Government and Parliamentary relations borrowed?',
            back: 'Britain (UK).',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Blend of Rigidity and Flexibility ---
{
    id: 'd2-sf-rigid-1',
        front: 'What is a Rigid Constitution? Give an example.',
            back: 'A constitution that requires a special procedure for amendment. Example: USA.',
                category: 'concept',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-rigid-2',
        front: 'What is a Flexible Constitution? Give an example.',
            back: 'A constitution that can be amended by the same procedure as ordinary laws. Example: UK.',
                category: 'concept',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-rigid-3',
        front: 'How does Article 368 provide for a synthesis of rigidity and flexibility?',
            back: 'Three methods:\n1. Some provisions: Special majority of Parliament.\n2. Some provisions: Special majority + Ratification by half the states.\n3. Some provisions: Simple majority (outside Article 368).',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Federal System with Unitary Bias ---
{
    id: 'd2-sf-fed-1',
        front: 'List the Federal Features of the Indian Constitution.',
            back: 'Two governments, division of powers, written Constitution, supremacy of Constitution, rigidity, independent judiciary, bicameralism.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-fed-2',
        front: 'List the Unitary (Non-Federal) Features of the Indian Constitution.',
            back: 'Strong Centre, single Constitution, single citizenship, flexibility, integrated judiciary, appointment of Governor by Centre, All-India services, emergency provisions.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-fed-3',
        front: "How does Article 1 describe India? Is the term 'Federation' used?",
            back: "Article 1 describes India as a 'Union of States'. The term 'Federation' is NOWHERE used in the Constitution.",
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-fed-4',
        front: "How did K.C. Wheare describe the Indian federal system?",
            back: "'Quasi-Federal'.",
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-fed-5',
        front: "How did Granville Austin describe the Indian federal system?",
            back: "'Co-operative Federalism'.",
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Parliamentary Form of Government ---
{
    id: 'd2-sf-parl-1',
        front: 'Which model of government does the Indian Constitution adopt?',
            back: 'British Parliamentary System (Westminster Model), not the American Presidential System.',
                category: 'concept',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-parl-2',
        front: 'What are the key features of the Parliamentary Form of Government?',
            back: '• Nominal and real executives.\n• Majority party rule.\n• Collective responsibility to legislature.\n• Ministers are members of legislature.\n• Leadership of PM or CM.\n• Dissolution of Lower House.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-parl-3',
        front: 'How does the Indian Parliament differ from the British Parliament?',
            back: '1. Indian Parliament is NOT sovereign (constrained by Constitution).\n2. India has an elected head (Republic), Britain has a hereditary head (Monarchy).',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Synthesis of Parliamentary Sovereignty & Judicial Supremacy ---
{
    id: 'd2-sf-synth-1',
        front: 'What is the Indian synthesis of Parliamentary Sovereignty and Judicial Supremacy?',
            back: 'The Supreme Court can declare parliamentary laws unconstitutional (judicial review), while Parliament can amend most of the Constitution (constituent power).',
                category: 'concept',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Integrated and Independent Judiciary ---
{
    id: 'd2-sf-jud-1',
        front: 'What is meant by an Integrated Judiciary?',
            back: 'A single system of courts enforces both central laws and state laws. Hierarchy: SC -> HCs -> Subordinate Courts.',
                category: 'concept',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-jud-2',
        front: 'How does the Constitution ensure the independence of the Judiciary?',
            back: 'Security of tenure, fixed service conditions, expenses from Consolidated Fund, ban on practice after retirement, separation of judiciary from executive (Article 50).',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Fundamental Rights ---
{
    id: 'd2-sf-fr-1',
        front: 'What are Fundamental Rights and where are they located?',
            back: 'They are justiciable rights (enforceable by courts) guaranteed in Part III of the Constitution. An aggrieved person can directly approach the Supreme Court under Article 32.',
                category: 'concept',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-fr-2',
        front: 'List the Six Fundamental Rights.',
            back: '1. Right to Equality (Art 14-18)\n2. Right to Freedom (Art 19-22)\n3. Right against Exploitation (Art 23-24)\n4. Right to Freedom of Religion (Art 25-28)\n5. Cultural & Educational Rights (Art 29-30)\n6. Right to Constitutional Remedies (Art 32)',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-fr-3',
        front: 'Name the five writs that the Supreme Court can issue under Article 32.',
            back: 'Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-fr-4',
        front: 'Which two Fundamental Rights cannot be suspended even during a National Emergency?',
            back: 'Article 20 (Protection in respect of conviction for offences) and Article 21 (Right to Life and Personal Liberty).',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Directive Principles ---
{
    id: 'd2-sf-dpsp-1',
        front: "What did Dr. Ambedkar say about the Directive Principles?",
            back: "He described them as a 'novel feature' of the Constitution.",
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-dpsp-2',
        front: 'What is the purpose and nature of Directive Principles (Part IV)?',
            back: 'Purpose: To promote social and economic democracy (Welfare State).\nNature: Non-justiciable (cannot be enforced by courts).',
                category: 'concept',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-dpsp-3',
        front: 'How are Directive Principles classified?',
            back: 'Socialistic, Gandhian, and Liberal-Intellectual.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-dpsp-4',
        front: 'What was the ruling in the Minerva Mills Case (1980) regarding FR and DPSP?',
            back: 'The Constitution is founded on the bedrock of the BALANCE between Fundamental Rights and Directive Principles.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Fundamental Duties ---
{
    id: 'd2-sf-fd-1',
        front: 'When and how were Fundamental Duties added to the Constitution?',
            back: 'Added by the 42nd Amendment Act (1976) on the recommendation of the Swaran Singh Committee. They are in Part IV-A, Article 51-A.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-fd-2',
        front: 'How many Fundamental Duties are there now?',
            back: '11 Fundamental Duties. (The 11th was added by the 86th Amendment Act of 2002).',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-fd-3',
        front: 'Are Fundamental Duties justiciable?',
            back: 'No, they are Non-Justiciable.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Secular State ---
{
    id: 'd2-sf-sec-1',
        front: "When was the term 'secular' added to the Preamble?",
            back: 'By the 42nd Amendment Act of 1976.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-sec-2',
        front: "What is India's concept of secularism?",
            back: 'Positive Secularism: Giving equal respect to all religions (Sarva Dharma Sama Bhava), rather than complete separation (Western negative concept).',
                category: 'concept',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Universal Adult Franchise ---
{
    id: 'd2-sf-uaf-1',
        front: 'What is Universal Adult Franchise?',
            back: 'Every citizen not less than 18 years of age has a right to vote without discrimination of caste, race, religion, sex, literacy, or wealth.',
                category: 'concept',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-uaf-2',
        front: 'When and how was the voting age reduced from 21 to 18?',
            back: 'In 1989, by the 61st Constitutional Amendment Act of 1988.',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Single Citizenship ---
{
    id: 'd2-sf-cit-1',
        front: 'What is the difference between Indian and American citizenship concepts?',
            back: 'USA: Dual Citizenship (National + State).\nIndia: Single Citizenship (only Indian citizenship).',
                category: 'concept',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},

// --- Independent Bodies ---
{
    id: 'd2-sf-ind-1',
        front: 'Name the key Independent Bodies established by the Constitution.',
            back: '• Election Commission\n• Comptroller and Auditor-General (CAG)\n• Union Public Service Commission (UPSC)\n• State Public Service Commission (SPSC)',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-ind-2',
        front: "What is the role of the CAG?",
            back: 'To audit the accounts of the Central and State governments. Known as the Guardian of the Public Purse.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Emergency Provisions ---
{
    id: 'd2-sf-emerg-1',
        front: 'What are the three types of Emergencies under the Constitution?',
            back: '1. National Emergency (Article 352): War, external aggression, or armed rebellion.\n2. State Emergency / President's Rule(Article 356 & 365): Failure of constitutional machinery.\n3.Financial Emergency(Article 360): Threat to financial stability.',
    category: 'fact',
        source: 'Salient Features of the Constitution',
            highlight: true
},
{
    id: 'd2-sf-emerg-2',
        front: 'What is the effect of Emergency Provisions on the federal structure?',
            back: 'The federal structure converts into a unitary one without a formal amendment of the Constitution.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Three-tier Government ---
{
    id: 'd2-sf-3tier-1',
        front: 'Which amendments added a third tier of government (Local Government)?',
            back: '73rd and 74th Amendment Acts (1992).',
                category: 'fact',
                    source: 'Salient Features of the Constitution',
                        highlight: true
},
{
    id: 'd2-sf-3tier-2',
        front: 'What did the 73rd Amendment add?',
            back: 'Constitutional recognition to Panchayats (Rural local government) by adding Part IX and Schedule 11.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-3tier-3',
        front: 'What did the 74th Amendment add?',
            back: 'Constitutional recognition to Municipalities (Urban local government) by adding Part IX-A and Schedule 12.',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},

// --- Co-operative Societies ---
{
    id: 'd2-sf-coop-1',
        front: 'Which amendment gave constitutional status to Co-operative Societies?',
            back: '97th Constitutional Amendment Act (2011).',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
{
    id: 'd2-sf-coop-2',
        front: 'What did the 97th Amendment Act add to the Constitution?',
            back: '• Made right to form co-operative societies a Fundamental Right (Article 19).\n• Added new DPSP (Article 43-B).\n• Added Part IX-B ("The Co-operative Societies").',
                category: 'fact',
                    source: 'Salient Features of the Constitution'
},
];

export default DAY2_FLASHCARDS;
