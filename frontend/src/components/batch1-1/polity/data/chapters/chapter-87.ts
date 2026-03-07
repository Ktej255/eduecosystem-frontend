import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch87-l1-q1",
        "question": "Pressure groups are also known as:",
        "options": ["Interest groups","Vestiges of power","Administrative groups","Judicial groups"],
        "correctAnswerIndex": 0,
        "explanation": "Pressure groups are also known as interest groups or vested groups because they represent specific interests in society."
    },
    {
        "id": "ch87-l1-q2",
        "question": "Which of the following is a primary characteristic of a pressure group?",
        "options": ["They contest elections to capture power.","They are organized groups that seek to influence government policy from the outside.","They are part of the formal government structure.","Their membership is always compulsory."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike political parties, pressure groups do not contest elections; they attempt to influence government decisions from the outside."
    },
    {
        "id": "ch87-l1-q3",
        "question": "The term",
        "options": ["United Kingdom","India","USA","France"],
        "correctAnswerIndex": 2,
        "explanation": "The term"
    },
    {
        "id": "ch87-l1-q4",
        "question": "According to Almond and Powell, pressure groups that are formally organized and have professional staff are classified as:",
        "options": ["Institutional pressure groups","Associational pressure groups","Non-associational pressure groups","Anomic pressure groups"],
        "correctAnswerIndex": 1,
        "explanation": "Associational pressure groups are specialized organizations formed for interest articulation, such as trade unions and business chambers."
    },
    {
        "id": "ch87-l1-q5",
        "question": "Which of the following is the largest and most influential business pressure group in India?",
        "options": ["FICCI (Federation of Indian Chambers of Commerce and Industry)","AITUC (All India Trade Union Congress)","ABVP (Akhil Bharatiya Vidyarthi Parishad)","ASSOCHAM"],
        "correctAnswerIndex": 0,
        "explanation": "FICCI is the largest and oldest apex business organization in India."
    },
    {
        "id": "ch87-l1-q6",
        "question": "",
        "options": ["Jawaharlal Nehru","Mahatma Gandhi","Sardar Patel","Subhash Chandra Bose"],
        "correctAnswerIndex": 1,
        "explanation": "FICCI was established in 1927 on the advice of Mahatma Gandhi by G.D. Birla and Purshottamdas Thakurdas."
    },
    {
        "id": "ch87-l1-q7",
        "question": "The",
        "options": ["N.M. Joshi","Lala Lajpat Rai","B.P. Wadia","V.V. Giri"],
        "correctAnswerIndex": 1,
        "explanation": "Lala Lajpat Rai was the first president of AITUC, founded in 1920."
    },
    {
        "id": "ch87-l1-q8",
        "question": "Which type of pressure group is characterized by spontaneous breakthroughs into the political system, such as riots, demonstrations, and assassinations?",
        "options": ["Associational groups","Non-associational groups","Anomic groups","Institutional groups"],
        "correctAnswerIndex": 2,
        "explanation": "Anomic pressure groups are characterized by spontaneous actions and lack a formal structure or permanent organization."
    },
    {
        "id": "ch87-l1-q9",
        "question": "The",
        "options": ["Business group","Religious/Ideological group","Agrarian group","Student group"],
        "correctAnswerIndex": 1,
        "explanation": "RSS is an ideological and cultural organization that acts as a powerful pressure group in Indian politics."
    },
    {
        "id": "ch87-l1-q10",
        "question": "The",
        "options": ["Small-scale farmers","Foreign and British-origin business houses (historically)","Trade unions","Public sector employees"],
        "correctAnswerIndex": 1,
        "explanation": "ASSOCHAM was historically representative of foreign/British business interests, while FICCI represented indigenous ones."
    },
    {
        "id": "ch87-l1-q11",
        "question": "Which agrarian pressure group was highly influential during the Green Revolution, led by Mahendra Singh Tikait?",
        "options": ["Bharatiya Kisan Union (BKU)","All India Kisan Sabha","Shetkari Sanghatana","Hind Kisan Panchayat"],
        "correctAnswerIndex": 0,
        "explanation": "The BKU, under Mahendra Singh Tikait, became a major force for agrarian interests in North India during and after the Green Revolution."
    },
    {
        "id": "ch87-l1-q12",
        "question": "The",
        "options": ["BJP","CPI","Indian National Congress","CPI(M)"],
        "correctAnswerIndex": 2,
        "explanation": "INTUC is affiliated with the Indian National Congress."
    },
    {
        "id": "ch87-l1-q13",
        "question": "Which student organization is affiliated with the Communist Party of India (Marxist)?",
        "options": ["NSUI","ABVP","SFI (Student Federation of India)","AISF"],
        "correctAnswerIndex": 2,
        "explanation": "SFI is the student wing of the CPI(M)."
    },
    {
        "id": "ch87-l1-q14",
        "question": "The",
        "options": ["Linguistic group","Caste group","Religious group","Tribal group"],
        "correctAnswerIndex": 2,
        "explanation": "VHP is one of the most prominent religious/communal pressure groups in India."
    },
    {
        "id": "ch87-l1-q15",
        "question": "Which of the following is a",
        "options": ["Tamil Sangh","Shiv Sena (in its early phase)","Hindi Sahitya Sammelan","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "All these groups have at various times been organized around linguistic identity to influence policy."
    },
    {
        "id": "ch87-l1-q16",
        "question": "Pressure groups use the method of",
        "options": ["Contesting elections for the Lok Sabha.","Persuading public officials and legislators to favor the group","Overthrowing the government through a coup.","Filing cases in the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Lobbying involves contacting and influencing legislators and officials to secure favorable policy outcomes."
    },
    {
        "id": "ch87-l1-q17",
        "question": "Which tribal organization led the movement for the creation of a separate Jharkhand state?",
        "options": ["Jharkhand Mukti Morcha (in its role as a pressure group)","Tribal League of Assam","United Mizo Organisation","Naga National Council"],
        "correctAnswerIndex": 0,
        "explanation": "JMM acted as a powerful tribal pressure group before becoming a formal political party in power."
    },
    {
        "id": "ch87-l1-q18",
        "question": "The",
        "options": ["Trade Union","Professional association of doctors","Business pressure group","Agrarian group"],
        "correctAnswerIndex": 2,
        "explanation": "CII is a major business-led and business-managed organization representing Indian industry."
    },
    {
        "id": "ch87-l1-q19",
        "question": "Which pressure group is an example of a",
        "options": ["Karni Sena","Jat Mahasabha","Maratha Kranti Morcha","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These groups are founded on caste identity and mobilize their communities to demand reservations or other benefits."
    },
    {
        "id": "ch87-l1-q20",
        "question": "The",
        "options": ["BJP","Indian National Congress","AAP","TMC"],
        "correctAnswerIndex": 1,
        "explanation": "NSUI is the student wing affiliated with the Indian National Congress."
    },
    {
        "id": "ch87-l1-q21",
        "question": "Groups that exist within organizations like the civil services or the army are called:",
        "options": ["Associational groups","Institutional pressure groups","Anomic groups","Tribal groups"],
        "correctAnswerIndex": 1,
        "explanation": "Institutional pressure groups are formal groups within government departments or established institutions."
    },
    {
        "id": "ch87-l1-q22",
        "question": "The",
        "options": ["RSS/BJP","Congress","Left Front","BSP"],
        "correctAnswerIndex": 0,
        "explanation": "BMS is the largest trade union in India and is part of the Sangh Parivar."
    },
    {
        "id": "ch87-l1-q23",
        "question": "Which method is NOT typically used by pressure groups in India?",
        "options": ["Electioneering (supporting specific candidates)","Propagandizing","Directly making laws in Parliament","Public debating"],
        "correctAnswerIndex": 2,
        "explanation": "Pressure groups do not have legislative power; they can only influence the lawmakers who sit in Parliament."
    },
    {
        "id": "ch87-l1-q24",
        "question": "The",
        "options": ["1920","1936","1947","1952"],
        "correctAnswerIndex": 1,
        "explanation": "The All India Kisan Sabha (AIKS) was established in Lucknow in 1936."
    },
    {
        "id": "ch87-l1-q25",
        "question": "Which organization represents the interests of the",
        "options": ["NASSCOM","FICCI","SEBI","TRAI"],
        "correctAnswerIndex": 0,
        "explanation": "NASSCOM is the apex body for the Indian IT-BPM industry."
    },
    {
        "id": "ch87-l1-q26",
        "question": "",
        "options": ["Professional degrees","Kinship, lineage, or ethnic/religious identity","Modern industrial interests","Political party membership"],
        "correctAnswerIndex": 1,
        "explanation": "Non-associational groups are informal and based on traditional identities rather than specialized interests."
    },
    {
        "id": "ch87-l1-q27",
        "question": "The",
        "options": ["Business group","Professional association","Religious group","Anomic group"],
        "correctAnswerIndex": 1,
        "explanation": "IMA is a professional association of doctors practicing modern medicine."
    },
    {
        "id": "ch87-l1-q28",
        "question": "Which pressure group fought for the",
        "options": ["MKSS (Mazdoor Kisan Shakti Sangathan)","PUCL (People","Greenpeace India","Narmada Bachao Andolan"],
        "correctAnswerIndex": 0,
        "explanation": "Aruna Roy"
    },
    {
        "id": "ch87-l1-q29",
        "question": "",
        "options": ["First chamber","Invisible empire","Third chamber","Judicial arm"],
        "correctAnswerIndex": 2,
        "explanation": "S.E. Finer referred to pressure groups as the"
    },
    {
        "id": "ch87-l1-q30",
        "question": "Which organization is a leading agrarian pressure group in Maharashtra, founded by Sharad Joshi?",
        "options": ["Shetkari Sanghatana","Bharatiya Kisan Union","All India Kisan Congress","Kisan Sabha"],
        "correctAnswerIndex": 0,
        "explanation": "Shetkari Sanghatana, led by Sharad Joshi, represents large-scale farmers and focuses on free-market prices for agricultural produce."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch87-l2-q1",
        "question": "Which of the following best describes the difference between a",
        "options": ["Parties seek to influence policy; Groups seek to win elections.","Parties have a broad, multi-issue agenda; Groups usually focus on specific, narrow interests.","Parties are informal; Groups are always constitutional bodies.","Parties are for the elite; Groups are for the masses."],
        "correctAnswerIndex": 1,
        "explanation": "Political parties aim to capture power and handle a vast array of national issues, while pressure groups act from the outside on specific localized or sectoral interests."
    },
    {
        "id": "ch87-l2-q2",
        "question": "Pressure groups in India often resort to",
        "options": ["Paying cash to MPs on the floor of the House.","Providing technical data and research to parliamentary standing committees and bureaucrats.","Directly appointing their members as Cabinet Ministers.","Stopping the Supreme Court from hearing cases."],
        "correctAnswerIndex": 1,
        "explanation": "Lobbying in India is largely an informal process of information sharing, providing expertise, and drafting memorandums for committees and officials."
    },
    {
        "id": "ch87-l2-q3",
        "question": "The",
        "options": ["Secret negotiations with the Prime Minister.","Mass mobilization and","(Public Hearings) to build public opinion.","Organizing a military coup.","Boycotting all elections for 20 years."],
        "correctAnswerIndex": 1,
        "explanation": "MKSS used grassroots mobilization and the innovative concept of"
    },
    {
        "id": "ch87-l2-q4",
        "question": "Why are",
        "options": ["Because they have a higher number of members.","Because they possess","and","that the government needs for economic planning.","Because they are mentioned in the Constitution.","Because trade unions are illegal in India."],
        "correctAnswerIndex": 1,
        "explanation": "The government"
    },
    {
        "id": "ch87-l2-q5",
        "question": "An",
        "options": ["The government is very efficient.","The formal channels of communication between the people and the government are blocked or unresponsive.","A new political party is formed.","The Stock Market is at an all-time high."],
        "correctAnswerIndex": 1,
        "explanation": "Anomic behavior (riots, protests) is usually a symptom of"
    },
    {
        "id": "ch87-l2-q6",
        "question": "",
        "options": ["Political parties use caste for","and vote-bank consolidation.","Caste associations provide social security to their members.","Caste groups can mobilize large numbers of people for protests (e.g., Maratha or Jat agitations).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Caste remains a primary identity in India, allowing for easy mobilization and use as a negotiation tool with political parties."
    },
    {
        "id": "ch87-l2-q7",
        "question": "Which technique is a pressure group using when it files a",
        "options": ["Electioneering.","Judicial Lobbying / Litigation.","Propagandizing.","Anomic breakthrough."],
        "correctAnswerIndex": 1,
        "explanation": "Filing PILs is a form of"
    },
    {
        "id": "ch87-l2-q8",
        "question": "The",
        "options": ["Bureaucrats are the ones who draft the details of legislation and rules (delegated legislation).","Bureaucrats are elected every five years.","The Prime Minister has no power over bureaucrats.","Bureaucrats are members of the pressure groups themselves."],
        "correctAnswerIndex": 0,
        "explanation": "Since bureaucrats handle the implementation and the micro-details of rules (delegated legislation), groups lobby them to influence the"
    },
    {
        "id": "ch87-l2-q9",
        "question": "What is",
        "options": ["Contesting for the post of President.","Supporting candidates who are sympathetic to the group","Counting the votes in the polling booth.","Banning other parties from contesting."],
        "correctAnswerIndex": 1,
        "explanation": "Electioneering involves helping friendly candidates get elected so that the group has"
    },
    {
        "id": "ch87-l2-q10",
        "question": "The",
        "options": ["Institutional group.","Ideological / Promotional pressure group.","Agrarian group.","Business group."],
        "correctAnswerIndex": 1,
        "explanation": "Greenpeace is an ideological group that promotes a cause (environment) rather than just the narrow material interests of its members."
    },
    {
        "id": "ch87-l2-q11",
        "question": "How do pressure groups contribute to",
        "options": ["By ensuring that only the majority","By providing a platform for diverse interests to compete and represent their views to the state.","By replacing the Parliament.","By making the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Pluralism suggests that multiple groups competing for influence prevents any single group from becoming too dominant, thus protecting democracy."
    },
    {
        "id": "ch87-l2-q12",
        "question": "The",
        "options": ["Only cares about the rich.","Combined social activism with legal battles and international advocacy.","Was led by the President of India.","Had its own army."],
        "correctAnswerIndex": 1,
        "explanation": "NBA represents a hybrid model of a social movement and a pressure group, using multidimensional tactics across local, national, and international stages."
    },
    {
        "id": "ch87-l2-q13",
        "question": "In the",
        "options": ["Only during the voting in Parliament.","During","and","","Only after the law is repealed.","During the National Anthem."],
        "correctAnswerIndex": 1,
        "explanation": "Pressure groups are most effective during the early stages of thinking and drafting, where they can suggest ideas or block unfavorable ones."
    },
    {
        "id": "ch87-l2-q14",
        "question": "Which of the following describes",
        "options": ["Groups formed by college students.","Formally organized groups within the government machinery (e.g., IAS Association, Army Officers","Groups that have no office.","Groups that only work in banks."],
        "correctAnswerIndex": 1,
        "explanation": "These are groups that exist for other purposes (like governance) but act as interest groups to protect their members"
    },
    {
        "id": "ch87-l2-q15",
        "question": "The",
        "options": ["Non-existent.","One of","where groups provide votes/funds and parties provide policy patronage.","Based on the groups giving orders to the parties.","Strictly regulated by the Chief Justice."],
        "correctAnswerIndex": 1,
        "explanation": "In India, most large pressure groups (especially trade and student unions) are directly or indirectly linked to political parties."
    },
    {
        "id": "ch87-l2-q16",
        "question": "Why is",
        "options": ["Because Indians don","Because India lacks a formal","making many interactions informal or opaque.","Because the Parliament is closed to outsiders.","Because only the President can be lobbied."],
        "correctAnswerIndex": 1,
        "explanation": "Without a specific law, lobbying often happens behind closed doors, leading to its perception as"
    },
    {
        "id": "ch87-l2-q17",
        "question": "Pressure groups use",
        "options": ["Brainwash the opposition.","Influence","so that the public puts pressure on the government.","Sell their products.","Hide their real intentions."],
        "correctAnswerIndex": 1,
        "explanation": "By winning over public opinion, groups make it difficult for the government to ignore their demands for fear of losing popular support."
    },
    {
        "id": "ch87-l2-q18",
        "question": "The",
        "options": ["Build more bars.","Regulate the legal profession and influence laws related to the judiciary.","Select the Prime Minister.","Manage the railway system."],
        "correctAnswerIndex": 1,
        "explanation": "Professional associations (doctors, lawyers, engineers) act to maintain the standards of their profession and lobby for favorable legal frameworks."
    },
    {
        "id": "ch87-l2-q19",
        "question": "What is a",
        "options": ["A group that represents the interests of the entire nation.","A group that represents a specific section of society (e.g., Teachers, Workers, or Doctors).","A group that has sections in every city.","A group that is divided into many small parts."],
        "correctAnswerIndex": 1,
        "explanation": "Sectional groups seek to promote the interests of a specific part of the population, often material interests like pay or working conditions."
    },
    {
        "id": "ch87-l2-q20",
        "question": "The",
        "options": ["Institutional groups.","Associational agrarian pressure groups to force a","","The Supreme Court to make laws.","Small-scale industries."],
        "correctAnswerIndex": 1,
        "explanation": "The BKU led a massive, organized, and sustained protest that eventually resulted in the repeal of the three farm laws, a rare instance of full policy reversal."
    },
    {
        "id": "ch87-l2-q21",
        "question": "Can a pressure group become a",
        "options": ["No, the law forbids it.","Yes, many parties like the Shiv Sena or the AAP had their origins in pressure groups or social movements.","Only if the President permits.","Only after 100 years."],
        "correctAnswerIndex": 1,
        "explanation": "If a group finds that lobbying from outside is not enough, it may formalize into a political party to directly compete for power (e.g., AAP from the IAC movement)."
    },
    {
        "id": "ch87-l2-q22",
        "question": "The",
        "options": ["Writing letters to editors and sending memorandums to Ministers.","Sending secret codes to foreign countries.","Replacing the post office.","Writing poems for the Prime Minister."],
        "correctAnswerIndex": 0,
        "explanation": "This is a basic form of lobbying—keeping the group"
    },
    {
        "id": "ch87-l2-q23",
        "question": "Which group would likely lobby for",
        "options": ["AITUC.","CII (Confederation of Indian Industry).","SFI.","Arya Samaj."],
        "correctAnswerIndex": 1,
        "explanation": "As a business chamber, CII represents the interests of capital owners/managers who want lower costs and fewer labor restrictions."
    },
    {
        "id": "ch87-l2-q24",
        "question": "The",
        "options": ["Economic interest.","Religion and Ideology.","Linguistic identity.","Sports."],
        "correctAnswerIndex": 1,
        "explanation": "These are groups formed around shared religious values and cultural ideologies to influence public life and policy."
    },
    {
        "id": "ch87-l2-q25",
        "question": "What is the",
        "options": ["They provide too much information.","They may lead to","or represent narrow interests at the cost of the","","They make the government too strong.","They reduce the number of holidays."],
        "correctAnswerIndex": 1,
        "explanation": "Over-representation of specific interests can lead to the government becoming"
    },
    {
        "id": "ch87-l2-q26",
        "question": "",
        "options": ["Being too modern.","Promoting","over","","Having too much money.","Working only for graduates."],
        "correctAnswerIndex": 1,
        "explanation": "Critics argue that mobilization based purely on caste identity can fragment society and distract from objective economic/social goals."
    },
    {
        "id": "ch87-l2-q27",
        "question": "A",
        "options": ["It seeks to promote a cause that benefits society as a whole (e.g., clean air).","It is funded by the government.","It has no members.","It only works in public parks."],
        "correctAnswerIndex": 0,
        "explanation": "Sectional groups seek member benefits; public interest groups (or promotional groups) seek collective benefits for all."
    },
    {
        "id": "ch87-l2-q28",
        "question": "Which of the following is a",
        "options": ["Writing a research paper.","Strikes, Dharnas, and Bandhs.","Sending an email to the PMO.","Watching the news."],
        "correctAnswerIndex": 1,
        "explanation": "Direct action involves taking physical steps to obstruct the normal functioning of administration to force it to listen."
    },
    {
        "id": "ch87-l2-q29",
        "question": "The",
        "options": ["Better fishing nets.","Protecting the livelihoods of traditional fishers from industrial trawling and ocean pollution.","Increasing the price of fish.","Building more aquariums."],
        "correctAnswerIndex": 1,
        "explanation": "Traditional occupational groups use pressure tactics to save their livelihoods from new technologies or corporate competition."
    },
    {
        "id": "ch87-l2-q30",
        "question": "When a pressure group",
        "options": ["A bribe.","Specialized information and talking points to influence the legislative discussion.","A new suit for the MP.","A map of the Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch87-l3-q1",
        "question": "How has the role of international pressure groups like the",
        "options": ["By directly passing laws in the Indian Parliament.","By creating","through international treaties and providing technical roadmaps for the","initiative.","By funding the election campaigns of green-energy parties.","By appointing the Union Minister of Power."],
        "correctAnswerIndex": 1,
        "explanation": "Globalized lobbying involves Supranational groups setting standards or providing technical/political frameworks that countries adopt to remain competitive or compliant."
    },
    {
        "id": "ch87-l3-q2",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. The amendments significantly tightened the oversight on NGOs, affecting those that use foreign funds for advocacy and lobbying."
    },
    {
        "id": "ch87-l3-q3",
        "question": "The",
        "options": ["A physical door in the Parliament house.","The movement of high-ranking bureaucrats and military officers into lucrative positions in corporate lobbying firms or industry chambers (like CII/FICCI) immediately after retirement.","The frequent changes in political party leadership.","The process of voters changing their minds every five years."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch87-l3-q4",
        "question": "How does the",
        "options": ["By contesting local Panchayat elections as a separate political party.","By leveraging","to influence local administration regarding micro-finance, liquor bans, and sanitation policies.","By providing security to the District Magistrate.","By replacing the role of the local police."],
        "correctAnswerIndex": 1,
        "explanation": "SHGs allow women at the grassroots level to pool their resources and voices to demand better services and policy changes from the local state machinery."
    },
    {
        "id": "ch87-l3-q5",
        "question": "In 2024–2026,",
        "options": ["Using AI to write letters to the President.","Using Big Data and social media algorithms to create","and mobilize","to force immediate government response.","Hiring computer engineers to count votes.","Deleting the government"],
        "correctAnswerIndex": 1,
        "explanation": "Modern advocacy uses technology to target specific voter segments and create viral narratives that can rapidly change the political priority of a government."
    },
    {
        "id": "ch87-l3-q6",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation.","Both A and R are true but R is NOT the correct explanation.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is FALSE; anomic behavior (violence/unrest) is a sign of *failure* in the institutional mechanisms of a democracy, though Reason R correctly explains why it happens."
    },
    {
        "id": "ch87-l3-q7",
        "question": "Regarding",
        "options": ["The government arrests the heads of major corporations.","A regulatory agency, created to act in the public interest, instead advances the commercial or political concerns of the special interest groups that dominate the industry it is regulatory.","The Parliament abolishes all regulatory bodies.","A company captures a government building."],
        "correctAnswerIndex": 1,
        "explanation": "Regulatory capture is a corruption of the democratic process where the"
    },
    {
        "id": "ch87-l3-q8",
        "question": "The",
        "options": ["The ban on firecrackers (supporting environmental groups).","The introduction of the","in OBC reservation (supporting specific caste-interest groups).","The","judgment (supporting digital rights groups).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The judiciary often provides a faster and more receptive channel for pressure groups than the legislature, leading to"
    },
    {
        "id": "ch87-l3-q9",
        "question": "What is the",
        "options": ["Planting artificial grass in government offices.","Creating a fake","movement that appears to be spontaneous and citizen-led but is actually funded and orchestrated by a corporate or political interest.","Sending anonymous emails to the Prime Minister.","Funding only those parties that use green symbols."],
        "correctAnswerIndex": 1,
        "explanation": "Astroturfing is a"
    },
    {
        "id": "ch87-l3-q10",
        "question": "The",
        "options": ["Unions are now only interested in the GDP.","Unions are moving away from being mere appendages of political parties towards focusing on specific shop-floor issues and worker benefits.","Unions have stopped protesting.","Unions only accept payments in digital currency."],
        "correctAnswerIndex": 1,
        "explanation": "Economic unionism focuses on bread-and-butter issues like wages and and safety, rather than following the ideological agenda of a parent political party."
    },
    {
        "id": "ch87-l3-q11",
        "question": "",
        "options": ["Voting in the Rajya Sabha.","Shaping the","and","on issues like the gig economy, climate change, and education.","Working as government clerks.","Posting pictures with the Chief Justice."],
        "correctAnswerIndex": 1,
        "explanation": "Influencers act as intermediate interest articulators, translating complex policy into viral content that forces political response through sheer numbers of"
    },
    {
        "id": "ch87-l3-q12",
        "question": "Consider the",
        "options": ["Institutional group within the Ministry of IT.","Associational pressure group providing","and","to protect the interests of the Indian tech industry.","Anomic group organizing street riots for faster internet.","International organization like the UN."],
        "correctAnswerIndex": 1,
        "explanation": "Associational groups provide technical depth to policy-making, helping the state navigate complex new domains like AI."
    },
    {
        "id": "ch87-l3-q13",
        "question": "Which of the following is a",
        "options": ["The","under Article 19(1)(b) is subject to",".","The","can be used to deny groups access to government data.","Both (a) and (b).","There are no legal barriers to pressure groups in India."],
        "correctAnswerIndex": 2,
        "explanation": "While the Constitution provides the right to associate, the state maintains several legal tools to restrict group activity if it threatens order or state interest."
    },
    {
        "id": "ch87-l3-q14",
        "question": "The",
        "options": ["The abolition of the IAS.","High data prices and certain restrictive clauses in the Digital Personal Data Protection Act.","The building of new roads.","The conduct of elections in winter."],
        "correctAnswerIndex": 1,
        "explanation": "Sectoral associations like IAMAI focus on policy that directly impacts the growth and regulation of their specific industry."
    },
    {
        "id": "ch87-l3-q15",
        "question": "In a",
        "options": ["The state officially recognizes and grants a monopoly of representation to certain","organizations (like a single national labor union).","Anyone can form a group and compete for influence.","Groups are banned.","The state is run by a private company."],
        "correctAnswerIndex": 0,
        "explanation": "Corporatism is a top-down model where the state"
    },
    {
        "id": "ch87-l3-q16",
        "question": "How do",
        "options": ["By using the Gram Sabha","consent","By declaring independence from India.","By stopping the Governor from visiting the area.","By printing their own money."],
        "correctAnswerIndex": 0,
        "explanation": "PESA provides a legal veto/consultation power to Gram Sabhas, which tribal groups use to ensure their rights are not bypassed by the state."
    },
    {
        "id": "ch87-l3-q17",
        "question": "Which of the following describes the",
        "options": ["People traveling on buses for free to reach a protest.","Individuals benefiting from the group","The government providing free cars to group leaders.","Members leaving the group during a crisis."],
        "correctAnswerIndex": 1,
        "explanation": "The free-rider problem makes it difficult for groups to fund themselves or maintain active membership if the benefit they provide is a"
    },
    {
        "id": "ch87-l3-q18",
        "question": "The",
        "options": ["Local caste sabhas.","Supranational pressure groups and powerful state actors influencing domestic policy.","Small student unions.","The Indian Railway Union."],
        "correctAnswerIndex": 1,
        "explanation": "External actors use financial or legal pressure to force sovereign states to change their internal policies (e.g., on carbon emissions or labor standards)."
    },
    {
        "id": "ch87-l3-q19",
        "question": "In the context of the 2026 UPSC curriculum,",
        "options": ["Only talk and don","Influence the","and","through high-level research and networking.","Are funded by the Prime Minister.","Have no office building."],
        "correctAnswerIndex": 1,
        "explanation": "Think tanks act as"
    },
    {
        "id": "ch87-l3-q20",
        "question": "The",
        "options": ["Lack of independent funding, leading to reliance on political party patronage.","Too much internal democracy.","The groups being too large.","The Constitution banning all groups."],
        "correctAnswerIndex": 0,
        "explanation": "Dependency on party funds often turns a pressure group into a mere wing of a political party, losing its ability to challenge its"
    },
    {
        "id": "ch87-l3-q21",
        "question": "When a pressure group targets the",
        "options": ["To change the result of an election.","To influence the","or","to favor their ideological stance.","To arrest the judges.","To close the courts."],
        "correctAnswerIndex": 1,
        "explanation": "Interest groups try to ensure that judicial personnel have a certain"
    },
    {
        "id": "ch87-l3-q22",
        "question": "The",
        "options": ["Higher taxes on farmers.","Mere temporary loan waivers and subsidies.","Abolition of all markets.","Making agriculture a central subject."],
        "correctAnswerIndex": 1,
        "explanation": "The focus has shifted from short-term relief (subsidies) to long-term structural legal protection of income (MSP law)."
    },
    {
        "id": "ch87-l3-q23",
        "question": "Which document is the primary source for pressure groups to track the government",
        "options": ["The Indian Penal Code.","The","and the","","The local newspaper","The private diary of the PM."],
        "correctAnswerIndex": 1,
        "explanation": "The Budget and the Economic Survey signal where the government intends to spend money and what reforms it is planning next."
    },
    {
        "id": "ch87-l3-q24",
        "question": "",
        "options": ["They are created by an Act of Parliament and have the legal power to license and discipline their members.","They can make their own laws for the country.","They are part of the Supreme Court.","They don"],
        "correctAnswerIndex": 0,
        "explanation": "Statutory bodies like the MCI/NMC or ICAI have professional mandates that are recognized and enforced by the state."
    },
    {
        "id": "ch87-l3-q25",
        "question": "The",
        "options": ["A fistfight.","The National Green Tribunal (NGT) or the","(EIA) process.","The group with the most members.","Deleting the other group"],
        "correctAnswerIndex": 1,
        "explanation": "The NGT acts as a specialized quasi-judicial body to resolve the competition between growth and conservation."
    },
    {
        "id": "ch87-l3-q26",
        "question": "Why is the",
        "options": ["Because it is always written in a foreign language.","Because it is","and","designed to serve the group","Because it is too detailed.","Because only the government can have information."],
        "correctAnswerIndex": 1,
        "explanation": "Groups only provide data that supports their claim, requiring lawmakers to seek multiple sources for a balanced view."
    },
    {
        "id": "ch87-l3-q27",
        "question": "",
        "options": ["Two groups fight each other.","An individual belongs to multiple pressure groups with conflicting interests, leading to moderated political behavior.","The President puts pressure on the Prime Minister.","A group changes its name."],
        "correctAnswerIndex": 1,
        "explanation": "If a person is across multiple groups, they are less likely to hold extreme views, as they see the merit in different interests."
    },
    {
        "id": "ch87-l3-q28",
        "question": "In 2026,",
        "options": ["Their huge wealth.","Their ability to","through coordinated app log-outs and gaining","","Support from the World Bank.","The abolition of smartphones."],
        "correctAnswerIndex": 1,
        "explanation": "Gig workers leverage the urban dependency on apps to create visibility and put pressure on both corporations and the state."
    },
    {
        "id": "ch87-l3-q29",
        "question": "The",
        "options": ["Article 17 (Abolition of Untouchability).","Article 19(1)(a) and 19(1)(c) (Freedom of speech and association).","Article 21 (Right to Life).","Article 25 (Freedom of Religion)."],
        "correctAnswerIndex": 1,
        "explanation": "The right to speak and form groups is the constitutional foundation for all interest articulation and lobbying."
    },
    {
        "id": "ch87-l3-q30",
        "question": "What is the",
        "options": ["That all groups have equal influence.","That a few powerful groups (mostly business and military) hold the real power.","That only people with PhDs can join groups.","That the Prime Minister is the head of all groups."],
        "correctAnswerIndex": 1,
        "explanation": "Elite theory argues that the"
    }
];

export const CHAPTER_87_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
