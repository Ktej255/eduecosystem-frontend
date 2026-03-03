import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch83-l1-q1",
        "question": "Which Constitutional Amendment Act reduced the voting age from 21 years to 18 years?",
        "options": ["42nd Amendment Act","44th Amendment Act","61st Amendment Act","73rd Amendment Act"],
        "correctAnswerIndex": 2,
        "explanation": "The 61st Constitutional Amendment Act (1988) reduced the voting age from 21 years to 18 years for the Lok Sabha and state assembly elections."
    },
    {
        "id": "ch83-l1-q2",
        "question": "The",
        "options": ["Judicial Reforms","Electoral Reforms","Police Reforms","Administrative Reforms"],
        "correctAnswerIndex": 1,
        "explanation": "The Dinesh Goswami Committee was appointed in 1990 to study and suggest various electoral reforms."
    },
    {
        "id": "ch83-l1-q3",
        "question": "Electronic Voting Machines (EVMs) were used for the first time in all the constituencies of a State (Goa) in:",
        "options": ["1990","1999","2004","2009"],
        "correctAnswerIndex": 1,
        "explanation": "EVMs were used for the first time in all the constituencies of a state (Goa) in 1999."
    },
    {
        "id": "ch83-l1-q4",
        "question": "The",
        "options": ["Criminalization of politics.","State funding of elections.","Use of EVMs.","Registration of political parties."],
        "correctAnswerIndex": 1,
        "explanation": "The Indrajit Gupta Committee (1998) was set up to examine the issue of state funding of elections."
    },
    {
        "id": "ch83-l1-q5",
        "question": "Which committee was appointed in 1974 by Jayaprakash Narayan to suggest electoral reforms?",
        "options": ["Tarkunde Committee","Vohra Committee","Tankha Committee","Jeevan Reddy Committee"],
        "correctAnswerIndex": 0,
        "explanation": "The Tarkunde Committee was appointed in 1974 by Jayaprakash Narayan (under the aegis of Citizens for Democracy) to suggest electoral reforms."
    },
    {
        "id": "ch83-l1-q6",
        "question": "The",
        "options": ["Goa","Nagaland","Rajasthan","Gujarat"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT was first used in a bye-election for the Noksen assembly constituency in Nagaland in 2013."
    },
    {
        "id": "ch83-l1-q7",
        "question": "The",
        "options": ["A re-election is held.","The candidate with the next highest votes is declared the winner.","The seat remains vacant.","The Governor appoints a representative."],
        "correctAnswerIndex": 1,
        "explanation": "In India, even if NOTA receives the most votes, the candidate with the highest number of votes (excluding NOTA) is declared the winner."
    },
    {
        "id": "ch83-l1-q8",
        "question": "According to the current law, the campaigning period (gap between last date of withdrawal and polling) has been reduced to:",
        "options": ["20 days","14 days","7 days","48 hours"],
        "correctAnswerIndex": 1,
        "explanation": "The campaign period was reduced from 21 days to 14 days in 1996 based on the Goswami Committee"
    },
    {
        "id": "ch83-l1-q9",
        "question": "The",
        "options": ["Use of muscle power in elections.","Nexus between politicians, criminals, and bureaucrats.","Simultaneous elections.","Voting rights for NRIs."],
        "correctAnswerIndex": 1,
        "explanation": "The Vohra Committee (1993) was set up to study the problem of the nexus between politicians, criminals, and bureaucrats."
    },
    {
        "id": "ch83-l1-q10",
        "question": "A candidate can contest from a maximum of how many constituencies in one General Election?",
        "options": ["One","Two","Three","Four"],
        "correctAnswerIndex": 1,
        "explanation": "As per the 1996 amendments, a candidate can contest from a maximum of two constituencies in a single general election (Lok Sabha or state assembly)."
    },
    {
        "id": "ch83-l1-q11",
        "question": "Which committee suggested the",
        "options": ["Tarkunde Committee","Dinesh Goswami Committee","Wanchoo Committee","Thungon Committee"],
        "correctAnswerIndex": 0,
        "explanation": "The Tarkunde Committee (1974) suggested that the current First-Past-The-Post system should be replaced by a variant of the List System (proportional representation)."
    },
    {
        "id": "ch83-l1-q12",
        "question": "The use of",
        "options": ["1999","2004","2009","2014"],
        "correctAnswerIndex": 1,
        "explanation": "EVMs were used in all polling stations in the country for the first time during the 2004 Lok Sabha General Elections."
    },
    {
        "id": "ch83-l1-q13",
        "question": "The",
        "options": ["M.S. Gill","T.N. Seshan","J.M. Lyngdoh","S.Y. Quraishi"],
        "correctAnswerIndex": 1,
        "explanation": "T.N. Seshan (CEC 1990-1996) aggressively introduced and implemented Voter Photo Identity Cards (EPICs)."
    },
    {
        "id": "ch83-l1-q14",
        "question": "The",
        "options": ["Senior Citizens","Visually Impaired","Hearing Impaired","Illiterate voters"],
        "correctAnswerIndex": 1,
        "explanation": "The Braille feature on EVM balloting units is intended to allow visually impaired electors to cast their votes independently."
    },
    {
        "id": "ch83-l1-q15",
        "question": "Under the current reforms, the",
        "options": ["Year (Jan 1st)","Quarter (Jan 1, Apr 1, Jul 1, Oct 1)","Six months","Five years"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Laws (Amendment) Act, 2021 introduced four qualifying dates in a year (January 1, April 1, July 1, and October 1)."
    },
    {
        "id": "ch83-l1-q16",
        "question": "The",
        "options": ["Vohra Committee Report","Sarkaria Commission Report","Goswami Committee Report","Padmanabhaiah Committee Report"],
        "correctAnswerIndex": 0,
        "explanation": "The Vohra Committee (1993) reported on the nexus between criminals, politicians, and bureaucrats."
    },
    {
        "id": "ch83-l1-q17",
        "question": "Which reform allows",
        "options": ["VVPAT","ETPBS (Electronically Transmitted Postal Ballot System)","RVM (Remote Voting Machine)","EVM-V2"],
        "correctAnswerIndex": 1,
        "explanation": "ETPBS allows service voters to receive their postal ballot electronically, download it, and send it back via post."
    },
    {
        "id": "ch83-l1-q18",
        "question": "The",
        "options": ["Parliament","Supreme Court","Election Commission of India","NITI Aayog"],
        "correctAnswerIndex": 2,
        "explanation": "National Voters"
    },
    {
        "id": "ch83-l1-q19",
        "question": "The maximum expenditure limit for a candidate contesting a Lok Sabha election in a large state was recently hiked to approximately:",
        "options": ["₹50 Lakhs","₹70 Lakhs","₹95 Lakhs","₹1.2 Crore"],
        "correctAnswerIndex": 2,
        "explanation": "Expenditure limits were increased in 2022; for Lok Sabha in large states, it is ₹95 lakhs (up from ₹70 lakhs)."
    },
    {
        "id": "ch83-l1-q20",
        "question": "Which committee recommended the",
        "options": ["Hota Committee","Santhanam Committee","Dinesh Goswami Committee","Kothari Commission"],
        "correctAnswerIndex": 2,
        "explanation": "The Dinesh Goswami Committee (1990) recommended that the administrative machinery should remain neutral during elections."
    },
    {
        "id": "ch83-l1-q21",
        "question": "The",
        "options": ["Kerala","Tamil Nadu","West Bengal","Rajasthan"],
        "correctAnswerIndex": 0,
        "explanation": "The MCC was first introduced in the 1960 Assembly elections in Kerala."
    },
    {
        "id": "ch83-l1-q22",
        "question": "The",
        "options": ["Speed up the counting process.","Hide the voting pattern of a particular booth to prevent post-poll victimization.","Detect fake votes.","Allow NRIs to vote."],
        "correctAnswerIndex": 1,
        "explanation": "The Totaliser counts votes from multiple EVMs at once to hide booth-wise voting patterns, protecting voters from profiling or victimization."
    },
    {
        "id": "ch83-l1-q23",
        "question": "Which amendment ensured that the number of seats in the Lok Sabha remained frozen based on the 1971 census until 2026?",
        "options": ["42nd Amendment","84th Amendment","91st Amendment","101st Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 84th Amendment Act (2001) extended the freeze on seats in Lok Sabha and state assemblies until 2026."
    },
    {
        "id": "ch83-l1-q24",
        "question": "The",
        "options": ["Foreign governments to fund parties.","Corporate entities to donate to political parties in a transparent manner.","Candidates to borrow money from the RBI.","The EC to manage the personal assets of MPs."],
        "correctAnswerIndex": 1,
        "explanation": "The Electoral Trust Scheme (2013) allows corporate entities and individuals to contribute to political parties through trusts, ensuring transparency."
    },
    {
        "id": "ch83-l1-q25",
        "question": "The",
        "options": ["At the very top.","In the middle.","At the very end (last button).","It is a separate machine."],
        "correctAnswerIndex": 2,
        "explanation": "The NOTA button is placed at the very end of the candidate list on the EVM balloting unit."
    },
    {
        "id": "ch83-l1-q26",
        "question": "Which committee recommended that the EC should be a multi-member body?",
        "options": ["Tarkunde Committee","Goswami Committee","Both (a) and (b)","Neither (a) nor (b)"],
        "correctAnswerIndex": 2,
        "explanation": "Both the Tarkunde Committee (1975) and the Goswami Committee (1990) recommended that the EC should be a three-member body."
    },
    {
        "id": "ch83-l1-q27",
        "question": "",
        "options": ["It is a specific","in RPA 1951.","It is monitored through the","(MCMC).","It is a Fundamental Right violation.","It is handled by the Press Council of India only."],
        "correctAnswerIndex": 1,
        "explanation": "The EC uses MCMCs at district and state levels to monitor and certify advertisements and identify instances of"
    },
    {
        "id": "ch83-l1-q28",
        "question": "The",
        "options": ["Check their name in the voter list.","Report violations of the Model Code of Conduct.","Chat with the Prime Minister.","Download their Voter ID."],
        "correctAnswerIndex": 1,
        "explanation": "C-VIGIL (Citizens"
    },
    {
        "id": "ch83-l1-q29",
        "question": "Which reform specifically targeted",
        "options": ["RPA Amendment 2003","61st Amendment","44th Amendment","97th Amendment"],
        "correctAnswerIndex": 0,
        "explanation": "The RPA (Amendment) Act, 2003 introduced proxy voting for service voters belonging to the armed forces."
    },
    {
        "id": "ch83-l1-q30",
        "question": "The",
        "options": ["Compulsory voting.","Simultaneous Elections (One Nation One Election).","Proportional Representation.","All of the above."],
        "correctAnswerIndex": 1,
        "explanation": "The 170th Law Commission report (1999) advocated for simultaneous elections to the Lok Sabha and state assemblies."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch83-l2-q1",
        "question": "The",
        "options": ["Introduced VVPAT.","Struck down Section 8(4) of the RPA 1951, leading to immediate disqualification of convicted legislators.","Made Aadhaar-Voter ID linking mandatory.","Allowed NRIs to vote via proxy."],
        "correctAnswerIndex": 1,
        "explanation": "Lily Thomas (2013) struck down Section 8(4) of the RPA 1951, ensuring that convicted MPs/MLAs are immediately disqualified without waiting for appeals."
    },
    {
        "id": "ch83-l2-q2",
        "question": "What was the primary recommendation of the",
        "options": ["It should be a single-member body.","It should be a three-member body.","It should be headed by the Chief Justice.","It should be abolished."],
        "correctAnswerIndex": 1,
        "explanation": "The Tarkunde Committee (1975) recommended that the EC should be a multi-member (three-member) body."
    },
    {
        "id": "ch83-l2-q3",
        "question": "In the context of",
        "options": ["Provided to all independent candidates.","Only in","(facilities like fuel, paper) rather than cash, and only to recognized parties.","Based on the number of followers on social media.","Provided only for the Rajya Sabha elections."],
        "correctAnswerIndex": 1,
        "explanation": "The Indrajit Gupta Committee (1998) recommended state funding in kind (fuel, paper, etc.) and only to recognized political parties."
    },
    {
        "id": "ch83-l2-q4",
        "question": "Why was the",
        "options": ["It increased the number of seats in Lok Sabha.","It brought the","(18-21 age group) into the political mainstream.","It reserved seats for women.","It allowed NRIs to contest."],
        "correctAnswerIndex": 1,
        "explanation": "By reducing the voting age from 21 to 18, the 61st Amendment significantly expanded the electorate and empowered the youth."
    },
    {
        "id": "ch83-l2-q5",
        "question": "The",
        "options": ["Jan 1, Apr 1, Jul 1, Oct 1","Jan 1, Mar 1, Jun 1, Sep 1","Every month.","Only once a year (Jan 1)."],
        "correctAnswerIndex": 0,
        "explanation": "The four qualifying dates are the 1st of January, April, July, and October."
    },
    {
        "id": "ch83-l2-q6",
        "question": "Under the current",
        "options": ["Only on the final day of voting.","From the start of the first phase of polling until the conclusion of the last phase.","For 48 hours before the counting starts.","Only if the EC finds them biased."],
        "correctAnswerIndex": 1,
        "explanation": "Exit poll results cannot be published from the commencement of polling in the first phase until half an hour after the conclusion of polling in the last phase of an election."
    },
    {
        "id": "ch83-l2-q7",
        "question": "Which of the following describes",
        "options": ["Voting via an app.","A service voter (like armed forces) appointing a person to vote on their behalf.","Voting by post.","Allowing family members to vote for each other."],
        "correctAnswerIndex": 1,
        "explanation": "Proxy voting allows service voters (armed forces) to appoint a proxy to cast their vote at their polling booth."
    },
    {
        "id": "ch83-l2-q8",
        "question": "The",
        "options": ["Pay a higher security deposit.","Declare their educational qualifications, assets, liabilities, and criminal antecedents on an affidavit.","Pass a literacy test.","Be below 70 years of age."],
        "correctAnswerIndex": 1,
        "explanation": "Following the ADR judgment, candidates are mandated to file an affidavit (Form 26) disclosing their criminal history, educational background, and finances."
    },
    {
        "id": "ch83-l2-q9",
        "question": "",
        "options": ["Conducting live polls.","Seamless registration and de-duplication of voters across the country.","Monitoring the speech of candidates.","Hack-proofing the EVMs."],
        "correctAnswerIndex": 1,
        "explanation": "ERONet is a unified platform used for voter registration and cleaning up (purifying) the electoral rolls to remove duplicates."
    },
    {
        "id": "ch83-l2-q10",
        "question": "Is the",
        "options": ["Yes, the MCC Act, 2010.","No, it is a set of guidelines agreed upon by parties, though its violations can trigger action under the IPC or RPA.","Yes, under the 1996 amendments.","No, it is only a voluntary code for individuals."],
        "correctAnswerIndex": 1,
        "explanation": "The MCC is not a statute but an set of consensus-based guidelines. However, many of its provisions are mirrored in the RPA-1951, which are legally enforceable."
    },
    {
        "id": "ch83-l2-q11",
        "question": "What is the primary conceptual difference between an",
        "options": ["Opinion polls are taken after voting; Exit polls before.","Opinion polls are allowed throughout the election; Exit polls are never allowed.","Exit polls are banned from the start of the first phase until the end of the last phase; Opinion polls are restricted only during the 48-hour silence period.","There is no legal difference between them."],
        "correctAnswerIndex": 2,
        "explanation": "Exit polls are strictly banned during the entire polling period across all phases. Opinion polls are restricted only during the 48 hours ending with the conclusion of the poll."
    },
    {
        "id": "ch83-l2-q12",
        "question": "The",
        "options": ["To make EVMs run without electricity.","To provide a physical trail for the voter to verify that their vote was cast correctly and to enable a paper audit.","To allow the counting of votes by machines rather than humans.","To reduce the cost of printing ballots."],
        "correctAnswerIndex": 1,
        "explanation": "The Voter Verifiable Paper Audit Trail (VVPAT) provides a physical slip that the voter can view for 7 seconds to confirm their choice, ensuring transparency."
    },
    {
        "id": "ch83-l2-q13",
        "question": "The",
        "options": ["Abolished the use of paper ballots.","Struck down the protection for sitting MPs/MLAs from immediate disqualification upon conviction.","Made voting mandatory for all graduates.","Directed the government to fund political parties."],
        "correctAnswerIndex": 1,
        "explanation": "Lily Thomas (2013) invalidated Section 8(4) of the RPA 1951, which previously gave sitting legislators 3 months to appeal before being disqualified."
    },
    {
        "id": "ch83-l2-q14",
        "question": "Why is the",
        "options": ["To save money for the government.","To discourage","or independent candidates and strengthen the organized party system.","Because independent candidates are not allowed to spend money.","It was a typing error in the report."],
        "correctAnswerIndex": 1,
        "explanation": "Limiting funding to recognized parties aims to prevent proliferation of non-serious candidates and promote a stable, organized political system."
    },
    {
        "id": "ch83-l2-q15",
        "question": "The",
        "options": ["Because it would allow any fake FIR to stop a candidate from contesting.","Because it would increase the number of jails.","Because judges would become more powerful than the PM.","Because the Constitution does not allow framing of charges."],
        "correctAnswerIndex": 0,
        "explanation": "Critics argue that disqualifying candidates simply upon framing of charges could lead to politically motivated cases being filed to bar opponents from contesting."
    },
    {
        "id": "ch83-l2-q16",
        "question": "The",
        "options": ["The issue of high election costs and the disruption of governance due to the frequent Model Code of Conduct.","The problem of EVM hacking.","The low voter turnout in cities.","The lack of political parties in India."],
        "correctAnswerIndex": 0,
        "explanation": "Simultaneous polling aims to reduce repeated election expenses and governance paralysis caused by the Model Code of Conduct being in force multiple times."
    },
    {
        "id": "ch83-l2-q17",
        "question": "The",
        "options": ["If NOTA wins, a re-election is mandatory.","Symbolic, as the candidate with the most votes wins regardless of NOTA","It disqualifies the winning candidate if NOTA is in second place.","It forces the EC to use paper ballots next time."],
        "correctAnswerIndex": 1,
        "explanation": "While NOTA provides a symbolic choice to reject all candidates, the individual with the highest votes wins, even if NOTA receives more votes."
    },
    {
        "id": "ch83-l2-q18",
        "question": "How does the",
        "options": ["It allows people to vote from their mobile phones.","It helps in weeding out","and duplicate entries in the electoral rolls across different states.","It makes the Voter ID look better.","It is used to track which party a person voted for."],
        "correctAnswerIndex": 1,
        "explanation": "Aadhaar linking assists in biometric de-duplication, ensuring a single person doesn"
    },
    {
        "id": "ch83-l2-q19",
        "question": "The",
        "options": ["It loses three consecutive elections.","It was registered through fraud or has become defunct/unconstitutional (per the Supreme Court).","It criticizes the Election Commission.","It has less than 1,000 members."],
        "correctAnswerIndex": 1,
        "explanation": "The EC has limited powers to de-register parties except in cases of fraud or groups that have ceased to follow the principles of the Constitution."
    },
    {
        "id": "ch83-l2-q20",
        "question": "The",
        "options": ["That they have time to rest.","The neutrality of the permanent executive and to prevent","arrangements while in service.","That they forget all government secrets.","That they learn the local language of their constituency."],
        "correctAnswerIndex": 1,
        "explanation": "The cooling-off period is aimed at maintaining the impartiality of civil servants by preventing them from expecting political rewards for their actions while in office."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch83-l3-q1",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. The 2021 amendment introduced voluntary Aadhaar-Voter ID linking, four qualifying dates, and gender-neutral language (replacing"
    },
    {
        "id": "ch83-l3-q2",
        "question": "In 2024-2025, the Supreme Court struck down the",
        "options": ["RPA 1951, Income Tax Act, and Companies Act.","Only the RPA 1951.","The Constitution of India.","The RBI Act only."],
        "correctAnswerIndex": 0,
        "explanation": "The Electoral Bonds Scheme involved amendments to the Representation of the People Act 1951, the Income Tax Act 1961, the Companies Act 2013, and the RBI Act 1934."
    },
    {
        "id": "ch83-l3-q3",
        "question": "Regarding the",
        "options": ["It can be filed in the Supreme Court for both Parliament and Assembly elections.","It can be filed only in the High Court of the concerned state.","It must be filed within 24 hours of the results.","It can be filed by any citizen of India, regardless of whether they are a voter in that constituency."],
        "correctAnswerIndex": 1,
        "explanation": "An election petition can be filed only in the High Court of the concerned state to challenge the election result. It must be filed within 45 days of the election result."
    },
    {
        "id": "ch83-l3-q4",
        "question": "Assertion (A): The orders of the Delimitation Commission cannot be questioned in any court of law.\\nReason (R): This is to ensure that the electoral process is not stalled by frequent litigations regarding boundary changes.",
        "options": ["Both A and R are true and R is the correct explanation.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Delimitation Commission orders have the force of law and cannot be challenged in any court. This is to ensure timely elections without boundary disputes causing delays."
    },
    {
        "id": "ch83-l3-q5",
        "question": "Which of the following is an",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "Requisitioning premises and countermanding elections are administrative powers. Expenditure limits are fixed by the Central Government in consultation with the EC."
    },
    {
        "id": "ch83-l3-q6",
        "question": "The",
        "options": ["Allowed the EC to ban criminal candidates.","Allowed convicted MPs/MLAs to continue in office if they filed an appeal within 3 months.","Mandatory retirement for politicians at 75.","Reservation for women in the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Section 8(4) provided a 3-month protection window for sitting legislators to file an appeal against their conviction and stay their disqualification."
    },
    {
        "id": "ch83-l3-q7",
        "question": "In the context of 2026,",
        "options": ["Constitution","Conduct of Elections Rules, 1961","RPA 1950","Citizenship Act"],
        "correctAnswerIndex": 1,
        "explanation": "Implementing remote voting for internal migrants would likely require amendments to the Conduct of Elections Rules, 1961 and the Representation of the People Act."
    },
    {
        "id": "ch83-l3-q8",
        "question": "Under Section 126 of the RPA 1951, the",
        "options": ["24 hours","48 hours","72 hours","12 hours"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch83-l3-q9",
        "question": "The",
        "options": ["The power to make laws that override Parliament.","The inherent power to issue directions in areas where the law is silent, to ensure free and fair elections.","The power to arrest the Prime Minister.","The power to dissolve the Judiciary."],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 grants the EC"
    },
    {
        "id": "ch83-l3-q10",
        "question": "If a person is",
        "options": ["RPA 1950 (Section 16)","RPA 1951","Citizenship Act, 1955","Passport Act"],
        "correctAnswerIndex": 0,
        "explanation": "Section 16 of the RPA 1950 specifies that a person is disqualified from the electoral roll if they are not a citizen of India."
    },
    {
        "id": "ch83-l3-q11",
        "question": "In the Anoop Baranwal v. Union of India (2023) case, the Supreme Court changed the appointment process of Election Commissioners. However, the Parliament subsequently enacted the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023. What is the key difference?",
        "options": ["The Act replaced the Chief Justice of India with a Union Cabinet Minister in the Selection Committee.","The Act made the Selection Committee","The Act gave the Leader of the Opposition the power of Veto.","The Act removed the Prime Minister from the committee."],
        "correctAnswerIndex": 0,
        "explanation": "The 2023 Act specifies a selection committee consisting of the PM, a Union Cabinet Minister, and the Leader of the Opposition, removing the CJI who was part of the court-mandated interim committee."
    },
    {
        "id": "ch83-l3-q12",
        "question": "Regarding the",
        "options": ["It was only available for National Parties.","It violated the","for voters under Article 19(1)(a).","It allowed foreign companies to vote in Indian elections.","It was not passed as a Money Bill."],
        "correctAnswerIndex": 1,
        "explanation": "The Court held that anonymous political funding via electoral bonds violated the voters"
    },
    {
        "id": "ch83-l3-q13",
        "question": "Consider the following statements regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The Kovind Committee report suggested that synchronizing LS and Assembly elections would only require a simple constitutional amendment, whereas local body synchronization would require state ratification."
    },
    {
        "id": "ch83-l3-q14",
        "question": "The",
        "options": ["Internet-based voting through a secure cloud.","A standalone non-networked system similar to the current EVM, but with a multi-constituency dynamic ballot display.","Blockchain-based authentication of biometric data.","Bluetooth-enabled counting through the voter"],
        "correctAnswerIndex": 1,
        "explanation": "The RVM is a standalone, non-networked device that allows a single polling booth to handle multiple constituencies through a dynamic display."
    },
    {
        "id": "ch83-l3-q15",
        "question": "",
        "options": ["The candidate is still declared the winner if they have the most votes among all human candidates.","The election is declared null and void, and a re-poll is held.","The candidate is barred from contesting for 6 years.","The seat remains vacant until the next general election."],
        "correctAnswerIndex": 0,
        "explanation": "Currently in India, NOTA has only a symbolic value. The candidate with the highest number of votes is declared the winner even if NOTA is the leading vote-getter."
    },
    {
        "id": "ch83-l3-q16",
        "question": "Assertion (A): The Election Commission has demanded the power to punish for its own",
        "options": ["Both A and R are true and R is the correct explanation.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The EC has argued that in the absence of contempt powers, it cannot effectively deal with baseless attacks on the electoral system"
    },
    {
        "id": "ch83-l3-q17",
        "question": "In 2025, the Supreme Court ruled on the",
        "options": ["Counting all slips would manually delay results by weeks and introduce human error.","The VVPAT paper is too fragile for mass counting.","The Election Commission does not have enough staff to count paper.","Only the Prime Minister is authorized to see all slips."],
        "correctAnswerIndex": 0,
        "explanation": "The Court concluded that 100% manual counting of VVPAT slips would be counter-productive, causing massive delays and potential human errors that exceed the error rate of machines."
    },
    {
        "id": "ch83-l3-q18",
        "question": "The",
        "options": ["The reservation for women is only for night-time sessions of Parliament.","The reservation will cease to have effect 15 years after the date of its commencement, unless extended by law.","The Act will only apply to the states where the sun sets after 6 PM.","The Act will expire if a woman is not elected as the Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "The Women"
    },
    {
        "id": "ch83-l3-q19",
        "question": "Which reform is intended to prevent",
        "options": ["Including the photograph of the candidate on the EVM balloting unit.","Increasing the security deposit to ₹10 lakhs.","Forcing candidates to change their names.","Removing the party symbol from the EVM."],
        "correctAnswerIndex": 0,
        "explanation": "Photographs of candidates on the EVM balloting unit and ballot papers were introduced in 2015 to help voters distinguish between candidates with identical or similar names."
    },
    {
        "id": "ch83-l3-q20",
        "question": "Regarding the",
        "options": ["It fails to contest any election (Parliamentary or State) for 10 consecutive years.","It fails to maintain and submit its audited accounts for three consecutive years.","Both (a) and (b).","It loses its","status."],
        "correctAnswerIndex": 2,
        "explanation": "The Law Commission recommended that the EC should be able to de-register parties that are essentially inactive or fail to comply with basic transparency and audit requirements."
    },
    {
        "id": "ch83-l3-q21",
        "question": "The",
        "options": ["All candidates with even one FIR must be disqualified.","Political parties must publish the reasons for selecting a candidate with criminal antecedents, and why a person without such antecedents could not be selected.","Only the President can decide who is a","","The EC must pay the legal fees of the candidates."],
        "correctAnswerIndex": 1,
        "explanation": "Building on the Public Interest Foundation case, the Court emphasizes that parties must provide reasons (other than"
    },
    {
        "id": "ch83-l3-q22",
        "question": "The",
        "options": ["In the reservation of seats in the Lok Sabha.","Replacing the term","with","to allow husbands of female service members to be registered as service voters.","Allowing transgender people to contest for the first time.","Making the Chief Election Commissioner"],
        "correctAnswerIndex": 1,
        "explanation": "The 2021 amendment made the language gender-neutral for service voters, ensuring that husbands of female officers can also register as service voters."
    },
    {
        "id": "ch83-l3-q23",
        "question": "The",
        "options": ["Print Media only.","Television and all","or","","Private conversations between friends.","Social media posts by private citizens without political affiliation."],
        "correctAnswerIndex": 1,
        "explanation": "Section 126 prohibits public meetings and campaigning via electronic media (TV/Radio) during the 48-hour period prior to the close of poll. Print media is currently exempt."
    },
    {
        "id": "ch83-l3-q24",
        "question": "In the context of",
        "options": ["Fingerprint scanning at the booth.","Algorithmic matching of names and addresses, bolstered by voluntary Aadhaar-Voter ID linking.","Satellite tracking of voters.","A mandatory interview with the Booth Level Officer."],
        "correctAnswerIndex": 1,
        "explanation": "De-duplication involves comparing the database of voters to find similar names and biometrics (via Aadhaar if linked) to eliminate multiple entries for a single person."
    },
    {
        "id": "ch83-l3-q25",
        "question": "The",
        "options": ["They are considered","by the committee.","To encourage the development of an organized, stable, and multi-party democratic system.","They do not have a bank account.","The government has no way to track their spending."],
        "correctAnswerIndex": 1,
        "explanation": "The committee aimed to strengthen political parties as institutional foundations of democracy rather than providing public funds to unaffiliated individuals."
    },
    {
        "id": "ch83-l3-q26",
        "question": "Regarding",
        "options": ["Trusts are anonymous; Bonds were transparent.","Trusts must file annual reports with the EC detailing the donors and the recipient parties; Bonds allowed anonymous corporate funding.","Trusts can only receive money from foreign governments.","There is no difference; both were struck down."],
        "correctAnswerIndex": 1,
        "explanation": "Electoral Trusts are regulated by the IT Act and must disclose their receipts and disbursements to the EC, whereas Electoral Bonds offered anonymity to donors."
    },
    {
        "id": "ch83-l3-q27",
        "question": "The",
        "options": ["Directly under the State Government","On","to the Election Commission and subject to its control and superintendence.","Acting as the Governor of the state.","Immune from all laws."],
        "correctAnswerIndex": 1,
        "explanation": "During elections, the entire administrative machinery involved in polls, including the CEO, is deemed to be on deputation to the EC and follows its directives."
    },
    {
        "id": "ch83-l3-q28",
        "question": "Which Parliamentary Committee usually examines the reports and recommendations of the Election Commission for legislative action?",
        "options": ["Public Accounts Committee.","Estimates Committee.","Department-related Standing Committee on Personnel, Public Grievances, Law and Justice.","Committee on Private Members"],
        "correctAnswerIndex": 2,
        "explanation": "This Standing Committee is responsible for reviewing legislative matters related to elections and the Election Commission."
    },
    {
        "id": "ch83-l3-q29",
        "question": "The",
        "options": ["The right of a voter to forget their past vote.","The demand that the criminal record of a candidate be removed from the public domain after 20 years.","The deletion of a voter","A candidate"],
        "correctAnswerIndex": 1,
        "explanation": "In the digital age, some candidates argue for a"
    },
    {
        "id": "ch83-l3-q30",
        "question": "If the Election Commission finds that",
        "options": ["Permanently ban the constituency from elections.","Recommend to the President to postpone or countermand the election in that specific constituency (e.g., RK Nagar or Vellore cases).","Increase the tax for the voters in that area.","Arrest all the voters in the area."],
        "correctAnswerIndex": 1,
        "explanation": "The EC can countermand or postpone elections in specific constituencies if it determines that extensive bribery or cash distribution has made a fair poll impossible."
    }
];

export const CHAPTER_83_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
