import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch84-l1-q1",
        "question": "The study of voting behaviour is technically known as:",
        "options": ["Sociology","Psephology","Philately","Demography"],
        "correctAnswerIndex": 1,
        "explanation": "Psephology is the statistical study of elections and trends in voting."
    },
    {
        "id": "ch84-l1-q2",
        "question": "Which of the following is considered the most pervasive factor in Indian voting behaviour, especially in rural areas?",
        "options": ["Education","Caste","Foreign Policy","Environmental issues"],
        "correctAnswerIndex": 1,
        "explanation": "Caste remains a deep-seated and pervasive factor in Indian voting behaviour, particularly in rural constituencies."
    },
    {
        "id": "ch84-l1-q3",
        "question": "The concept of",
        "options": ["Votes only after receiving money.","Is traditionally and ideologically tied to a particular political party regardless of the candidate.","Votes only for the winner.","Never votes."],
        "correctAnswerIndex": 1,
        "explanation": "A committed voter is one whose loyalty to a party is fixed by ideology or tradition, and who remains relatively unaffected by shifting campaigns or candidates."
    },
    {
        "id": "ch84-l1-q4",
        "question": "In the context of Indian elections, the",
        "options": ["The tendency of voters to always re-elect the sitting representative.","The disadvantage or resentment against the current government leading to its defeat.","The legal right of a minister to vote.","The use of government machinery by the ruling party."],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch84-l1-q5",
        "question": "Which of the following has historically been a significant",
        "options": ["Gross Domestic Product (GDP)","Religion and Communalism","Fiscal Deficit","Space Research"],
        "correctAnswerIndex": 1,
        "explanation": "Religion and communal identities have often acted as potent emotional triggers in Indian electoral mobilization."
    },
    {
        "id": "ch84-l1-q6",
        "question": "The",
        "options": ["Men not allowing women to vote.","The difference between the voter turnout of men and women.","Women being barred from contesting.","The number of women in the Cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "The gender gap typically refers to the difference in turnout between male and female voters."
    },
    {
        "id": "ch84-l1-q7",
        "question": "In which decade did",
        "options": ["1950s","1970s","2000s","1960s"],
        "correctAnswerIndex": 2,
        "explanation": "The 2000s saw a shift in several states towards"
    },
    {
        "id": "ch84-l1-q8",
        "question": "",
        "options": ["1952 and 1957","1971, 1984, and 2014","1996 and 1998","All elections are waves"],
        "correctAnswerIndex": 1,
        "explanation": "Elections in 1971 (Indira wave), 1984 (Sympathy/Rajiv wave), and 2014 (Modi wave) are classic examples where charismatic leadership defined the outcome."
    },
    {
        "id": "ch84-l1-q9",
        "question": "The influence of",
        "options": ["North India","South India and the North-East","Only in Union Territories","It has no influence"],
        "correctAnswerIndex": 1,
        "explanation": "Linguistic identity is a major factor in South Indian states and the North-East, often driving regional party formations."
    },
    {
        "id": "ch84-l1-q10",
        "question": "The term",
        "options": ["Votes in different states.","Is undecided and whose vote can shift based on immediate issues or the campaign.","Votes while travelling on a boat.","Votes for two parties at once."],
        "correctAnswerIndex": 1,
        "explanation": "Floating voters are those who do not have a fixed party allegiance and make their choice based on the prevailing situation or campaign promises."
    },
    {
        "id": "ch84-l1-q11",
        "question": "How does",
        "options": ["Political parties nominate candidates based on the numerical strength of a caste in a constituency.","Voters tend to vote for a candidate of their own caste (",").","Political parties form alliances based on caste equations (e.g., social engineering).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Caste influences elections through candidate selection, voter preference, and the strategic formation of socio-political alliances."
    },
    {
        "id": "ch84-l1-q12",
        "question": "The rise of",
        "options": ["The decline of the All-India Services.","The mobilization of voters based on specific markers like caste, religion, or ethnicity.","The increase in the price of gold.","The use of social media for the first time in 1951."],
        "correctAnswerIndex": 1,
        "explanation": "Identity politics involves political mobilization based on the interests and perspectives of social groups defined by specific identity markers."
    },
    {
        "id": "ch84-l1-q13",
        "question": "",
        "options": ["Votes for their favorite candidate regardless of chances.","Votes for a candidate other than their preferred one to prevent an even less desirable candidate from winning.","Sells their vote for a high price.","Votes for all candidates on the ballot."],
        "correctAnswerIndex": 1,
        "explanation": "Tactical voting is a strategic choice made to ensure a preferred outcome (or prevent a worse one) when the voter"
    },
    {
        "id": "ch84-l1-q14",
        "question": "What has been the impact of",
        "options": ["It has completely abolished caste-based voting.","It has led to a more critical evaluation of government performance and","","It has reduced the voter turnout.","It has made the role of regional parties irrelevant."],
        "correctAnswerIndex": 1,
        "explanation": "As literacy increases, voters tend to evaluate governments based on performance, services, and developmental outcomes rather than just traditional identities."
    },
    {
        "id": "ch84-l1-q15",
        "question": "The",
        "options": ["Providing a legal contract for voters.","Outlining the party","Threatening the voters.","Listing the personal assets of the party leader."],
        "correctAnswerIndex": 1,
        "explanation": "A manifesto is a public declaration of policy and aims, issued before an election, intended to win voter support through concrete promises."
    },
    {
        "id": "ch84-l1-q16",
        "question": "In recent years, the",
        "options": ["Higher female turnout and policies specifically targeted at women (e.g., cash transfers, gas connections).","A constitutional amendment forcing women to vote for one party.","Men losing interest in voting.","The abolition of the secret ballot."],
        "correctAnswerIndex": 0,
        "explanation": "Rising female turnout and"
    },
    {
        "id": "ch84-l1-q17",
        "question": "Which of the following is a",
        "options": ["National Security","International Trade","Accessibility and performance of the local MLA","The name of the Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "In state-level assembly elections, local issues and the direct accessibility of the candidate (MLA) are more significant than in national parliamentary polls."
    },
    {
        "id": "ch84-l1-q18",
        "question": "",
        "options": ["Providing long-term infrastructure.","Distribution of cash, liquor, or gifts just before the election (","distribution).","Investing in the Stock Market.","Reducing the income tax for everyone."],
        "correctAnswerIndex": 1,
        "explanation": "Immediate distributive measures on the eve of elections are often used to sway undecided or poor voters, despite being illegal under the MCC."
    },
    {
        "id": "ch84-l1-q19",
        "question": "The",
        "options": ["First Estate","Second Estate","Third Estate","Fourth Estate"],
        "correctAnswerIndex": 3,
        "explanation": "The press (and now digital media) is traditionally referred to as the"
    },
    {
        "id": "ch84-l1-q20",
        "question": "Does",
        "options": ["Yes, it is the top priority.","No, it is generally considered a","issue compared to local/economic issues.","Only if there is a war.","It is the only factor considered."],
        "correctAnswerIndex": 1,
        "explanation": "Issues like national security and foreign policy are usually"
    },
    {
        "id": "ch84-l1-q21",
        "question": "Consider the following statements regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "Statement 2 is incorrect. The EC bans"
    },
    {
        "id": "ch84-l1-q22",
        "question": "In 2024-2025, the concept of the",
        "options": ["Are not allowed to speak at the polling booth.","Do not disclose their true preference to surveyors or the media but turn out to vote for a specific party.","Are physically unable to speak.","Vote only through postal ballots."],
        "correctAnswerIndex": 1,
        "explanation": "Silent voters are those who keep their political preference private, often leading to surprises in survey outcomes or"
    },
    {
        "id": "ch84-l1-q23",
        "question": "Regarding",
        "options": ["Voters always reject the ruling party after 5 years.","Voters are increasingly","their votes—voting differently for the State Assembly and the Lok Sabha based on the level of government performance.","Development has no impact on voting.","Only religious issues matter in cities."],
        "correctAnswerIndex": 1,
        "explanation": "Voters are increasingly sophisticated, often rewarding a party at the national level while punishing it at the state level (or vice versa) based on performance."
    },
    {
        "id": "ch84-l1-q24",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "In India, caste status often aligns with economic standing, so demands for"
    },
    {
        "id": "ch84-l1-q25",
        "question": "Which of the following has been a",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "Modern elections are heavily influenced by algorithmic targeting, social media echo chambers, and the use of influencers to shape voter perception."
    },
    {
        "id": "ch84-l1-q26",
        "question": "The",
        "options": ["Rural voters only care about religion.","Urban voters are generally more concerned with","and infrastructure, while rural voters focus more on","and community identity.","Urban turnout is always 100%.","There is no difference in their concerns."],
        "correctAnswerIndex": 1,
        "explanation": "Urban and rural electorates have distinct priorities: urban voters emphasize ease of living and services, while rural voters focus on agriculture and community ties."
    },
    {
        "id": "ch84-l1-q27",
        "question": "Youth Voting (18-25 age group) in 2026 is expected to be driven primarily by:",
        "options": ["Traditional family party loyalty.","Employment opportunities, digital economy, and education reforms.","The 1975 Emergency history.","Re-introduction of the monarchy."],
        "correctAnswerIndex": 1,
        "explanation": "Youth voters are less bound by traditional loyalties and are highly focused on"
    },
    {
        "id": "ch84-l1-q28",
        "question": "The",
        "options": ["Distributing free refrigerators.","Dividing the electorate into two distinct, often antagonistic, camps based on religious identity to consolidate a","","Moving the polling booth to the North Pole.","Encouraging everyone to pray before voting."],
        "correctAnswerIndex": 1,
        "explanation": "Polarization is a strategy used to sharpen social divisions, ensuring that the majority or minority votes as a consolidated block."
    },
    {
        "id": "ch84-l1-q29",
        "question": "Which of the following describes the",
        "options": ["People voting for a party because it is expected to win (the","psychology).","People voting for a party that uses a wagon as its symbol.","Candidates traveling in a wagon to campaign.","A ban on all political rallies."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch84-l1-q30",
        "question": "In the context of 2026,",
        "options": ["Manually counting every vote.","Using AI to show personalized advertisements to voters based on their online behavior and preferences.","Replacing the Election Commission with a computer.","Forcing people to vote through their smartwatches."],
        "correctAnswerIndex": 1,
        "explanation": "Algorithm-driven campaigning uses big data and AI to personalize political messages, effectively targeting individual psychological profiles."
    },
    {
        "id": "ch84-l1-q31",
        "question": "The study of voting behaviour is technically known as:",
        "options": ["Sociology","Psephology","Philately","Demography"],
        "correctAnswerIndex": 1,
        "explanation": "Psephology is the statistical study of elections and trends in voting."
    },
    {
        "id": "ch84-l1-q32",
        "question": "Which of the following is considered the most pervasive factor in Indian voting behaviour, especially in rural areas?",
        "options": ["Education","Caste","Foreign Policy","Environmental issues"],
        "correctAnswerIndex": 1,
        "explanation": "Caste remains a deep-seated and pervasive factor in Indian voting behaviour, particularly in rural constituencies."
    },
    {
        "id": "ch84-l1-q33",
        "question": "The concept of",
        "options": ["Votes only after receiving money.","Is traditionally and ideologically tied to a particular political party regardless of the candidate.","Votes only for the winner.","Never votes."],
        "correctAnswerIndex": 1,
        "explanation": "A committed voter is one whose loyalty to a party is fixed by ideology or tradition, and who remains relatively unaffected by shifting campaigns or candidates."
    },
    {
        "id": "ch84-l1-q34",
        "question": "In the context of Indian elections, the",
        "options": ["The tendency of voters to always re-elect the sitting representative.","The disadvantage or resentment against the current government leading to its defeat.","The legal right of a minister to vote.","The use of government machinery by the ruling party."],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch84-l1-q35",
        "question": "Which of the following has historically been a significant",
        "options": ["Gross Domestic Product (GDP)","Religion and Communalism","Fiscal Deficit","Space Research"],
        "correctAnswerIndex": 1,
        "explanation": "Religion and communal identities have often acted as potent emotional triggers in Indian electoral mobilization."
    },
    {
        "id": "ch84-l1-q36",
        "question": "The",
        "options": ["Men not allowing women to vote.","The difference between the voter turnout of men and women.","Women being barred from contesting.","The number of women in the Cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "The gender gap typically refers to the difference in turnout between male and female voters."
    },
    {
        "id": "ch84-l1-q37",
        "question": "In which decade did",
        "options": ["1950s","1970s","2000s","1960s"],
        "correctAnswerIndex": 2,
        "explanation": "The 2000s saw a shift in several states towards"
    },
    {
        "id": "ch84-l1-q38",
        "question": "",
        "options": ["1952 and 1957","1971, 1984, and 2014","1996 and 1998","All elections are waves"],
        "correctAnswerIndex": 1,
        "explanation": "Elections in 1971 (Indira wave), 1984 (Sympathy/Rajiv wave), and 2014 (Modi wave) are classic examples where charismatic leadership defined the outcome."
    },
    {
        "id": "ch84-l1-q39",
        "question": "The influence of",
        "options": ["North India","South India and the North-East","Only in Union Territories","It has no influence"],
        "correctAnswerIndex": 1,
        "explanation": "Linguistic identity is a major factor in South Indian states and the North-East, often driving regional party formations."
    },
    {
        "id": "ch84-l1-q40",
        "question": "The term",
        "options": ["Votes in different states.","Is undecided and whose vote can shift based on immediate issues or the campaign.","Votes while travelling on a boat.","Votes for two parties at once."],
        "correctAnswerIndex": 1,
        "explanation": "Floating voters are those who do not have a fixed party allegiance and make their choice based on the prevailing situation or campaign promises."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch84-l2-q1",
        "question": "How does",
        "options": ["Political parties nominate candidates based on the numerical strength of a caste in a constituency.","Voters tend to vote for a candidate of their own caste (",").","Political parties form alliances based on caste equations (e.g., social engineering).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Caste influences elections through candidate selection, voter preference, and the strategic formation of socio-political alliances."
    },
    {
        "id": "ch84-l2-q2",
        "question": "The rise of",
        "options": ["The decline of the All-India Services.","The mobilization of voters based on specific markers like caste, religion, or ethnicity.","The increase in the price of gold.","The use of social media for the first time in 1951."],
        "correctAnswerIndex": 1,
        "explanation": "Identity politics involves political mobilization based on the interests and perspectives of social groups defined by specific identity markers."
    },
    {
        "id": "ch84-l2-q3",
        "question": "",
        "options": ["Votes for their favorite candidate regardless of chances.","Votes for a candidate other than their preferred one to prevent an even less desirable candidate from winning.","Sells their vote for a high price.","Votes for all candidates on the ballot."],
        "correctAnswerIndex": 1,
        "explanation": "Tactical voting is a strategic choice made to ensure a preferred outcome (or prevent a worse one) when the voter"
    },
    {
        "id": "ch84-l2-q4",
        "question": "What has been the impact of",
        "options": ["It has completely abolished caste-based voting.","It has led to a more critical evaluation of government performance and","","It has reduced the voter turnout.","It has made the role of regional parties irrelevant."],
        "correctAnswerIndex": 1,
        "explanation": "As literacy increases, voters tend to evaluate governments based on performance, services, and developmental outcomes rather than just traditional identities."
    },
    {
        "id": "ch84-l2-q5",
        "question": "The",
        "options": ["Providing a legal contract for voters.","Outlining the party","Threatening the voters.","Listing the personal assets of the party leader."],
        "correctAnswerIndex": 1,
        "explanation": "A manifesto is a public declaration of policy and aims, issued before an election, intended to win voter support through concrete promises."
    },
    {
        "id": "ch84-l2-q6",
        "question": "In recent years, the",
        "options": ["Higher female turnout and policies specifically targeted at women (e.g., cash transfers, gas connections).","A constitutional amendment forcing women to vote for one party.","Men losing interest in voting.","The abolition of the secret ballot."],
        "correctAnswerIndex": 0,
        "explanation": "Rising female turnout and"
    },
    {
        "id": "ch84-l2-q7",
        "question": "Which of the following is a",
        "options": ["National Security","International Trade","Accessibility and performance of the local MLA","The name of the Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "In state-level assembly elections, local issues and the direct accessibility of the candidate (MLA) are more significant than in national parliamentary polls."
    },
    {
        "id": "ch84-l2-q8",
        "question": "",
        "options": ["Providing long-term infrastructure.","Distribution of cash, liquor, or gifts just before the election (","distribution).","Investing in the Stock Market.","Reducing the income tax for everyone."],
        "correctAnswerIndex": 1,
        "explanation": "Immediate distributive measures on the eve of elections are often used to sway undecided or poor voters, despite being illegal under the MCC."
    },
    {
        "id": "ch84-l2-q9",
        "question": "The",
        "options": ["First Estate","Second Estate","Third Estate","Fourth Estate"],
        "correctAnswerIndex": 3,
        "explanation": "The press (and now digital media) is traditionally referred to as the"
    },
    {
        "id": "ch84-l2-q10",
        "question": "Does",
        "options": ["Yes, it is the top priority.","No, it is generally considered a","issue compared to local/economic issues.","Only if there is a war.","It is the only factor considered."],
        "correctAnswerIndex": 1,
        "explanation": "Issues like national security and foreign policy are usually"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch84-l3-q1",
        "question": "Consider the following statements regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "Statement 2 is incorrect. The EC bans"
    },
    {
        "id": "ch84-l3-q2",
        "question": "In 2024-2025, the concept of the",
        "options": ["Are not allowed to speak at the polling booth.","Do not disclose their true preference to surveyors or the media but turn out to vote for a specific party.","Are physically unable to speak.","Vote only through postal ballots."],
        "correctAnswerIndex": 1,
        "explanation": "Silent voters are those who keep their political preference private, often leading to surprises in survey outcomes or"
    },
    {
        "id": "ch84-l3-q3",
        "question": "Regarding",
        "options": ["Voters always reject the ruling party after 5 years.","Voters are increasingly","their votes—voting differently for the State Assembly and the Lok Sabha based on the level of government performance.","Development has no impact on voting.","Only religious issues matter in cities."],
        "correctAnswerIndex": 1,
        "explanation": "Voters are increasingly sophisticated, often rewarding a party at the national level while punishing it at the state level (or vice versa) based on performance."
    },
    {
        "id": "ch84-l3-q4",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "In India, caste status often aligns with economic standing, so demands for"
    },
    {
        "id": "ch84-l3-q5",
        "question": "Which of the following has been a",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "Modern elections are heavily influenced by algorithmic targeting, social media echo chambers, and the use of influencers to shape voter perception."
    },
    {
        "id": "ch84-l3-q6",
        "question": "The",
        "options": ["Rural voters only care about religion.","Urban voters are generally more concerned with","and infrastructure, while rural voters focus more on","and community identity.","Urban turnout is always 100%.","There is no difference in their concerns."],
        "correctAnswerIndex": 1,
        "explanation": "Urban and rural electorates have distinct priorities: urban voters emphasize ease of living and services, while rural voters focus on agriculture and community ties."
    },
    {
        "id": "ch84-l3-q7",
        "question": "Youth Voting (18-25 age group) in 2026 is expected to be driven primarily by:",
        "options": ["Traditional family party loyalty.","Employment opportunities, digital economy, and education reforms.","The 1975 Emergency history.","Re-introduction of the monarchy."],
        "correctAnswerIndex": 1,
        "explanation": "Youth voters are less bound by traditional loyalties and are highly focused on"
    },
    {
        "id": "ch84-l3-q8",
        "question": "The",
        "options": ["Distributing free refrigerators.","Dividing the electorate into two distinct, often antagonistic, camps based on religious identity to consolidate a","","Moving the polling booth to the North Pole.","Encouraging everyone to pray before voting."],
        "correctAnswerIndex": 1,
        "explanation": "Polarization is a strategy used to sharpen social divisions, ensuring that the majority or minority votes as a consolidated block."
    },
    {
        "id": "ch84-l3-q9",
        "question": "Which of the following describes the",
        "options": ["People voting for a party because it is expected to win (the","psychology).","People voting for a party that uses a wagon as its symbol.","Candidates traveling in a wagon to campaign.","A ban on all political rallies."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch84-l3-q10",
        "question": "In the context of 2026,",
        "options": ["Manually counting every vote.","Using AI to show personalized advertisements to voters based on their online behavior and preferences.","Replacing the Election Commission with a computer.","Forcing people to vote through their smartwatches."],
        "correctAnswerIndex": 1,
        "explanation": "Algorithm-driven campaigning uses big data and AI to personalize political messages, effectively targeting individual psychological profiles."
    }
];

export const CHAPTER_84_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
