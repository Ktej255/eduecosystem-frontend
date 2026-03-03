import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch91-l1-q1",
        "question": "The",
        "options": ["1990","2000","2014","1950"],
        "correctAnswerIndex": 1,
        "explanation": "It was set up by a resolution of the Government of India in February 2000."
    },
    {
        "id": "ch91-l1-q2",
        "question": "Who was the",
        "options": ["Justice J.S. Verma","Justice M.N. Venkatachaliah","Justice P.N. Bhagwati","Justice H.L. Dattu"],
        "correctAnswerIndex": 1,
        "explanation": "Former CJI M.N. Venkatachaliah headed the commission."
    },
    {
        "id": "ch91-l1-q3",
        "question": "The NCRWC was mandated to review the working of the Constitution. Did it have the power to",
        "options": ["Yes","No, its terms of reference strictly stated that it should not","the Constitution and must work within the framework of parliamentary democracy.","Only the Preamble.","Only the DPSP."],
        "correctAnswerIndex": 1,
        "explanation": "It was for"
    },
    {
        "id": "ch91-l1-q4",
        "question": "How many",
        "options": ["5","11","15","21"],
        "correctAnswerIndex": 1,
        "explanation": "The commission consisted of 11 members."
    },
    {
        "id": "ch91-l1-q5",
        "question": "The NCRWC submitted its report in which year?",
        "options": ["2000","2002","2005","2010"],
        "correctAnswerIndex": 1,
        "explanation": "The 2-volume report was submitted in March 2002."
    },
    {
        "id": "ch91-l1-q6",
        "question": "The Commission identified",
        "options": ["Strengthening of institutions of parliamentary democracy.","Pace of socio-economic change and development.","Merging of India with other countries.","Electoral reforms."],
        "correctAnswerIndex": 2,
        "explanation": "Merging with others was never a mandate; the focus was on efficiency of internal institutions."
    },
    {
        "id": "ch91-l1-q7",
        "question": "Regarding",
        "options": ["Right to bear arms.","Right to safe drinking water.","Right to free speech only.","Right to property as a fundamental right again."],
        "correctAnswerIndex": 1,
        "explanation": "It recommended several new rights including right to clean environment and safe drinking water."
    },
    {
        "id": "ch91-l1-q8",
        "question": "One of the recommendations of NCRWC was to fix the",
        "options": ["4 years","5 years (with more rigid dissolution rules)","6 years","10 years"],
        "correctAnswerIndex": 1,
        "explanation": "It focused on stability of tenure to prevent frequent mid-term polls."
    },
    {
        "id": "ch91-l1-q9",
        "question": "Did the NCRWC recommend that the PM should be",
        "options": ["Yes","No, it maintained the parliamentary form where PM is appointed by the President from the Lok Sabha.","Only during emergencies.","Only for UTs."],
        "correctAnswerIndex": 1,
        "explanation": "It stayed within the"
    },
    {
        "id": "ch91-l1-q10",
        "question": "Regarding",
        "options": ["Its frequent use.","It should be used only as a matter of last resort.","It should be abolished.","It should be handled by the SC directly."],
        "correctAnswerIndex": 1,
        "explanation": "It echoed the Sarkaria Commission and Bommai judgment on minimizing its use."
    },
    {
        "id": "ch91-l1-q11",
        "question": "The NCRWC suggested that a",
        "options": ["The Governor.","The Lower House of the State Legislature (Vidhan Sabha).","The President.","The PM."],
        "correctAnswerIndex": 1,
        "explanation": "Direct election by the house was suggested to ensure majority support initially."
    },
    {
        "id": "ch91-l1-q12",
        "question": "Who was the",
        "options": ["Subhash Kashyap","M.C. Gupta","Raghavan Pillai","None"],
        "correctAnswerIndex": 1,
        "explanation": "M.C. Gupta served as the Secretary General."
    },
    {
        "id": "ch91-l1-q13",
        "question": "The NCRWC",
        "options": ["One","Two","Ten","Five"],
        "correctAnswerIndex": 1,
        "explanation": "Volume 1 contains the report and Volume 2 contains research papers/consultation papers."
    },
    {
        "id": "ch91-l1-q14",
        "question": "One of the members of the NCRWC, P.A. Sangma, later resigned. He was a former:",
        "options": ["Chief Justice","Speaker of Lok Sabha","President","Army Chief"],
        "correctAnswerIndex": 1,
        "explanation": "Sangma was part of the 11-member body but later left it."
    },
    {
        "id": "ch91-l1-q15",
        "question": "The NCRWC recommended that the",
        "options": ["Direct vote.","The same existing electoral college (no major change proposed).","The SC judges.","The Army."],
        "correctAnswerIndex": 1,
        "explanation": "It did not propose any drastic change to the head of state"
    },
    {
        "id": "ch91-l1-q16",
        "question": "Regarding",
        "options": ["A National Judicial Commission.","A test for judges.","A lottery system.","Allowing the PM to appoint directly."],
        "correctAnswerIndex": 0,
        "explanation": "It wanted a more broad-based panel for judicial appointments."
    },
    {
        "id": "ch91-l1-q17",
        "question": "Was the",
        "options": ["Yes, as part of institutions of stability.","No.","Only for borders.","Only for religion."],
        "correctAnswerIndex": 0,
        "explanation": "Commission looked into all major advisory/constitutional bodies."
    },
    {
        "id": "ch91-l1-q18",
        "question": "The NCRWC suggested that the",
        "options": ["The President.","The Chief Minister of the state concerned.","The PM only.","The Speaker only."],
        "correctAnswerIndex": 1,
        "explanation": "CM consultation was recommended to ensure better functional relations."
    },
    {
        "id": "ch91-l1-q19",
        "question": "Did the NCRWC recommend any changes to the",
        "options": ["Yes, adding more words.","No change was proposed to the Preamble.","Removing",".","Removing","."],
        "correctAnswerIndex": 1,
        "explanation": "It found the Preamble to be a perfect summary of national goals."
    },
    {
        "id": "ch91-l1-q20",
        "question": "The Commission recommended that",
        "options": ["Given a medal.","Barred from holding any ministerial office or any other remunerative political post for at least the remaining term of the house.","Allowed to switch once.","Exiled."],
        "correctAnswerIndex": 1,
        "explanation": "Strengthening Anti-defection law was a major focus."
    },
    {
        "id": "ch91-l1-q21",
        "question": "Wait. Was",
        "options": ["Yes.","No, it avoided such sensitive political reversals in its final report.","Only for Ladakh.","Only for Jammu."],
        "correctAnswerIndex": 1,
        "explanation": "The report was largely balanced and technocratic."
    },
    {
        "id": "ch91-l1-q22",
        "question": "The NCRWC recommended that the",
        "options": ["Appointed for life.","Treated as an impartial person who should resign from their party upon election.","Always from the ruling party.","A non-MP."],
        "correctAnswerIndex": 1,
        "explanation": "To ensure neutrality of the high office."
    },
    {
        "id": "ch91-l1-q23",
        "question": "Which of the following describes the",
        "options": ["Eliminating the rich.","Reviewing the Directive Principles and their implementation status.","Banning all private property.","Focusing only on urban areas."],
        "correctAnswerIndex": 1,
        "explanation": "DPSP implementation for welfare was a core area of study."
    },
    {
        "id": "ch91-l1-q24",
        "question": "The NCRWC",
        "options": ["One volume (Vol 2).","Ten volumes.","Two volumes.","Five volumes."],
        "correctAnswerIndex": 0,
        "explanation": "Volume II contains the research papers and consultation papers."
    },
    {
        "id": "ch91-l1-q25",
        "question": "Did the NCRWC recommend",
        "options": ["Yes.","No, it examined it but did not find it feasible.","Only for government employees.","Only for the rich."],
        "correctAnswerIndex": 1,
        "explanation": "While it wanted more participation, it didn"
    },
    {
        "id": "ch91-l1-q26",
        "question": "The term of",
        "options": ["6 years (Status quo).","5 years.","Life term.","4 years."],
        "correctAnswerIndex": 0,
        "explanation": "It didn"
    },
    {
        "id": "ch91-l1-q27",
        "question": "Wait. Can the recommendations of NCRWC be",
        "options": ["Yes.","No, they are only","and it is for the Parliament to accept and implement them by law/amendment.","Only if the PM signs them.","Only if they are about Fundamental Rights."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch91-l1-q28",
        "question": "The NCRWC suggested that",
        "options": ["Abolished.","Made more empowered and meet regularly.","Renamed as PM","Managed by the Home Minister alone."],
        "correctAnswerIndex": 1,
        "explanation": "Cooperative federalism was a major theme."
    },
    {
        "id": "ch91-l1-q29",
        "question": "Which of the following was a member of the commission who was an",
        "options": ["Justice Venkatachaliah","Justice Sarkaria","None","All were lawyers"],
        "correctAnswerIndex": 2,
        "explanation": "The body was composed of legal experts, administrators, and political figures."
    },
    {
        "id": "ch91-l1-q30",
        "question": "The NCRWC and Sarkaria Commission both emphasized:",
        "options": ["The role of Governor.","Centre-State relations and the misuse of Art 356.","Nuclear bombs.","Railway budgets."],
        "correctAnswerIndex": 1,
        "explanation": "Preventing the erosion of federalism was a shared goal."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch91-l2-q1",
        "question": "The NCRWC",
        "options": ["That the commission would increase taxes.","That the Union government intended to discard the","(especially secularism) and introduce a presidential system.","That the commission would ban all regional parties.","That it would increase the number of states."],
        "correctAnswerIndex": 1,
        "explanation": "This led the government to clarify that the review was within the 1973 Basic Structure doctrine."
    },
    {
        "id": "ch91-l2-q2",
        "question": "Regarding",
        "options": ["The President could never impose his rule.","The President","s report would be curtailed, making it purely based on the Governor","The Governor would become more powerful.","The PM would decide alone."],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch91-l2-q3",
        "question": "Assertion (A): The NCRWC recommended the insertion of Art 21A (Right to Education) into the Constitution.\\nReason (R): It wanted to make the state responsible for providing free and compulsory education to all children aged 6 to 14 years.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This recommendation (along with earlier court rulings) led to the 86th Amendment Act of 2002."
    },
    {
        "id": "ch91-l2-q4",
        "question": "The Commission recommended that",
        "options": ["Legal right.","Fundamental Right (as Article 19-A).","Constitutional right but not fundamental.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted the"
    },
    {
        "id": "ch91-l2-q5",
        "question": "Wait. Can the NCRWC",
        "options": ["No.","Yes, the commission included politicians from across the spectrum (e.g., P.A. Sangma, Sumitra Kulkarni).","Only if they are retired.","Only as observers."],
        "correctAnswerIndex": 1,
        "explanation": "The 11-member body was a mix of jurists, politicians, and distinguished citizens."
    },
    {
        "id": "ch91-l2-q6",
        "question": "One of the recommendations on",
        "options": ["10%","Actually, it recommended that unless a candidate gets 50% + 1 votes (in a run-off system), they should not be declared elected (to ensure majority support).","1/6th of votes polled.","No change was suggested."],
        "correctAnswerIndex": 1,
        "explanation": "This was the"
    },
    {
        "id": "ch91-l2-q7",
        "question": "How does the NCRWC view the",
        "options": ["It wanted it abolished.","It accepted the Basic Structure as a valid judicial doctrine and conducted its review within those limits.","It wanted to expand it.","It ignored it."],
        "correctAnswerIndex": 1,
        "explanation": "The terms of reference specifically mentioned work"
    },
    {
        "id": "ch91-l2-q8",
        "question": "The Commission recommended that the",
        "options": ["The PM agrees.","The Proclamation is approved by the Parliament.","The Supreme Court allows.","New elections are held."],
        "correctAnswerIndex": 1,
        "explanation": "This was to prevent irreversible damage if the proclamation was later found malafide."
    },
    {
        "id": "ch91-l2-q9",
        "question": "The NCRWC suggested that",
        "options": ["Yes.","Actually, it recommended that the","and the Council","Only if the PM decides.","Only for water disputes."],
        "correctAnswerIndex": 1,
        "explanation": "The goal was to make federal coordination more proactive than reactive."
    },
    {
        "id": "ch91-l2-q10",
        "question": "Regarding",
        "options": ["Join the army.","Vote in elections, pay taxes, and foster family values.","Learn Sanskrit.","Plant ten trees every year."],
        "correctAnswerIndex": 1,
        "explanation": "Expanding the moral obligations of the citizen as suggested by the Verma Committee."
    },
    {
        "id": "ch91-l2-q11",
        "question": "Analyze the suggestion on",
        "options": ["Banning it.","Introducing the","(where the house must elect a new PM while removing the old one).","Requiring 75% majority.","Only the President can call for it."],
        "correctAnswerIndex": 1,
        "explanation": "This system (as in Germany) prevents"
    },
    {
        "id": "ch91-l2-q12",
        "question": "The Commission recommended that the",
        "options": ["10% of total house strength.","15% of the strength of the Lower House (Lok Sabha/Vidhan Sabha).","50% of the ruling party.","Exactly 20 ministers."],
        "correctAnswerIndex": 1,
        "explanation": "This recommendation was later implemented by the 91st Amendment Act of 2003."
    },
    {
        "id": "ch91-l2-q13",
        "question": "Did the NCRWC recommend any",
        "options": ["Yes, 33% seats in Lok Sabha and State Assemblies.","No.","Only in Rajya Sabha.","Only for local bodies (where it already exists)."],
        "correctAnswerIndex": 0,
        "explanation": "Empowerment of women through political representation was a key recommendation."
    },
    {
        "id": "ch91-l2-q14",
        "question": "The NCRWC suggested that",
        "options": ["Approval by the Supreme Court.","Scrutiny by a Parliamentary Committee.","A national referendum.","None (Status quo)."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted"
    },
    {
        "id": "ch91-l2-q15",
        "question": "Which of the following describes the",
        "options": ["Lowering the retirement age.","Creation of an","for reducing the pendency of cases.","Abolishing the High Courts.","Allowing the President to override any sentence."],
        "correctAnswerIndex": 1,
        "explanation": "Massive backlog was identified as a failure of"
    },
    {
        "id": "ch91-l2-q16",
        "question": "Wait. Did the NCRWC recommend the",
        "options": ["Yes.","No, it sought to preserve it as a vital federal institution.","Only for financial bills.","Only for small states."],
        "correctAnswerIndex": 1,
        "explanation": "The Upper House"
    },
    {
        "id": "ch91-l2-q17",
        "question": "The Commission recommended that the",
        "options": ["Only MPs.","Status quo: Elected members of both Houses and State Assemblies.","Members of Gram Panchayats.","Only retired judges."],
        "correctAnswerIndex": 1,
        "explanation": "It did not find a strong reason to change the existing representative college."
    },
    {
        "id": "ch91-l2-q18",
        "question": "Regarding",
        "options": ["Banned if it splits.","Actually, it recommended deleting the","(1/3rd) exception to prevent wholesale defection.","Allowed to merge freely.","None of the above."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted to plug the loophole where groups could defect together and avoid disqualification."
    },
    {
        "id": "ch91-l2-q19",
        "question": "Who was the",
        "options": ["P.W. Narasimha Rao","Atal Bihari Vajpayee","Manmohan Singh","Narendra Modi"],
        "correctAnswerIndex": 1,
        "explanation": "The NDA-I government under Vajpayee initiated the review in 2000."
    },
    {
        "id": "ch91-l2-q20",
        "question": "The NCRWC recommended that the",
        "options": ["Judicary.","Parliamentary committee system for pre-audit.","Board of experts (for appointment).","Cabinet."],
        "correctAnswerIndex": 2,
        "explanation": "It wanted a more transparent and consultative process for appointing"
    },
    {
        "id": "ch91-l2-q21",
        "question": "The Commission suggested that",
        "options": ["Yes, for all rights.","Partially, through judicial interpretation, but NCRWC wanted it to be explicit in the constitution.","No.","Only for banks."],
        "correctAnswerIndex": 1,
        "explanation": "Expansion of"
    },
    {
        "id": "ch91-l2-q22",
        "question": "Wait. Which",
        "options": ["Western.","Status quo Western Zone.","Actually, Zonal Councils were reviewed, but membership per se was not the focus of reform.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Gujarat is in the Western Zone."
    },
    {
        "id": "ch91-l2-q23",
        "question": "Regarding",
        "options": ["One month.","Three years.","Ten years.","One year."],
        "correctAnswerIndex": 1,
        "explanation": "Timed and expeditious resolution was needed to prevent multi-decade delays."
    },
    {
        "id": "ch91-l2-q24",
        "question": "The NCRWC",
        "options": ["The private sector.","Governance and administrative delivery in rural areas.","The army.","The railways."],
        "correctAnswerIndex": 1,
        "explanation": "Governance deficit was seen as the main hurdle to constitutional goals."
    },
    {
        "id": "ch91-l2-q25",
        "question": "Did the NCRWC recommend that the PM should always be from the",
        "options": ["Yes.","Actually, it recommended that the PM should be a member of either House, but preferably the Lok Sabha.","Only from Rajya Sabha.","No preference."],
        "correctAnswerIndex": 1,
        "explanation": "It maintained the current flexible model of the parliamentary system."
    },
    {
        "id": "ch91-l2-q26",
        "question": "One of the recommendations for",
        "options": ["A complete ban on politicians.","Disqualification of any person charged with an offence punishable with 5 years or more (if charges are framed by a court).","Only after conviction.","Payment of a fine."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted to stop suspected criminals from contesting even before the final conviction (given the long legal process)."
    },
    {
        "id": "ch91-l2-q27",
        "question": "Wait. Did the NCRWC recommend that the PM",
        "options": ["Yes.","No, that would be a Presidential feature. It only suggested the","as a safeguard.","Only for the first 2 years.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Accountability to the house must remain central to the parliamentary form."
    },
    {
        "id": "ch91-l2-q28",
        "question": "The NCRWC suggested that the",
        "options": ["Abolished.","Made more independent and its resources dedicated to panchayats enlarged.","Merged with RBI.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Financial decentralization was a core recommendation."
    },
    {
        "id": "ch91-l2-q29",
        "question": "Was the",
        "options": ["Yes (within Art 19-1a).","No.","Only for digital media.","Only for government media."],
        "correctAnswerIndex": 0,
        "explanation": "It wanted the"
    },
    {
        "id": "ch91-l2-q30",
        "question": "The NCRWC report is often cited as a",
        "options": ["It was poorly written.","Most of its","structural recommendations were not implemented by successive governments.","It recommended the return of British rule.","None."],
        "correctAnswerIndex": 1,
        "explanation": "While some minor tweaks happened, the major institutional overhauls remain on paper."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch91-l3-q1",
        "question": "Analyze the",
        "options": ["The President alone.","A","(NJC) consisting of the CJI, two senior-most judges of the SC, the Union Law Minister, and one eminent person nominated by the President in consultation with the CJI.","A Parliamentary Committee on Judiciary.","All SC judges voting together."],
        "correctAnswerIndex": 1,
        "explanation": "NCRWC"
    },
    {
        "id": "ch91-l3-q2",
        "question": "Critical evaluation of",
        "options": ["Abolish Art 311 completely.","The protection should not be available to an officer who is caught","in an act of corruption or who has assets disproportionate to his known sources of income.","Increase the protection.","Hand over the cases to the Army."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted to balance the"
    },
    {
        "id": "ch91-l3-q3",
        "question": "The NCRWC examined",
        "options": ["Privileges should never be codified.","Parliament should define and codify the privileges by law, so that they are more certain and subject to judicial review with respect to Fundamental Rights.","Privileges should be abolished.","Privileges should be handled by the SC only."],
        "correctAnswerIndex": 1,
        "explanation": "Codification would end the"
    },
    {
        "id": "ch91-l3-q4",
        "question": "Assertion (A): The NCRWC recommended the deletion of",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 1,
        "explanation": "This was a highly debated recommendation that faced significant political resistance from various quarters."
    },
    {
        "id": "ch91-l3-q5",
        "question": "Analyze the",
        "options": ["Because the PM refused.","Because it felt that the Parliamentary system, despite its instability, provides more executive","to the legislature as compared to the fixed-term Presidential model.","Because it was unconstitutional.","Because only the US uses it."],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch91-l3-q6",
        "question": "The NCRWC proposed the insertion of a new Article (300B) for",
        "options": ["Starting more state companies.","Making the government liable for Torts (wrongs) committed by its servants, making the citizen","Banning all strikes.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Currently, state liability is based on messy case laws; a clear article would help administrative justice."
    },
    {
        "id": "ch91-l3-q7",
        "question": "Evaluate the",
        "options": ["Reducing members.","Making it a","chaired by the President (and not PM) for certain high-level appointments like UPSC, CAG, and Election Commission.","Merging it with the NITI Aayog.","None."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted to insulate key"
    },
    {
        "id": "ch91-l3-q8",
        "question": "The Commission recommended that",
        "options": ["His family.","Private businesses and property (to be placed in a blind trust or similar mechanism to avoid conflict of interest).","His political party.","His citizenship."],
        "correctAnswerIndex": 1,
        "explanation": "Integrity of the"
    },
    {
        "id": "ch91-l3-q9",
        "question": "Analysis of",
        "options": ["Abolished.","Given the right to vote in the election of the President (which they currently don","Always from the ruling party.","All retired actors."],
        "correctAnswerIndex": 1,
        "explanation": "It wanted to grant full parity to nominated members in all house processes."
    },
    {
        "id": "ch91-l3-q10",
        "question": "The NCRWC",
        "options": ["Lack of land.","Lack of","and the","used by powerful landowners to stall the process.","Intervention by foreign countries.","Lack of farmers."],
        "correctAnswerIndex": 1,
        "explanation": "The Commission called for a time-bound completion of pending land distribution cases."
    },
    {
        "id": "ch91-l3-q11",
        "question": "Which of the following describes the",
        "options": ["Merging with the RBI.","Making it a","body independent of the Finance Ministry to ensure better financial reporting.","Abolishing the post.","Making it part of the PMO."],
        "correctAnswerIndex": 1,
        "explanation": "Independence of"
    },
    {
        "id": "ch91-l3-q12",
        "question": "Analysis of",
        "options": ["Indian Medical Service.","Indian Judicial Service (AIJS) and Indian Environmental Service.","Indian Engineering Service as a constitutional body.","None."],
        "correctAnswerIndex": 1,
        "explanation": "These services would ensure uniform standards in justice and environment across the nation."
    },
    {
        "id": "ch91-l3-q13",
        "question": "The Commission recommended that",
        "options": ["Printing their own currency.","The power to levy and collect certain taxes without state interference.","Requesting loans from the IMF.","Direct funding from the PM without state routing."],
        "correctAnswerIndex": 1,
        "explanation": "Financial autonomy is the bedrock of"
    },
    {
        "id": "ch91-l3-q14",
        "question": "In case of a",
        "options": ["Whomever he likes.","The leader of the","that has the largest number of seats, rather than the single largest party.","The oldest MP.","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "Pre-poll alliances are seen as having shared mandates from the people."
    },
    {
        "id": "ch91-l3-q15",
        "question": "Assertion (A): The NCRWC suggested that",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This was a forward-looking recommendation made long before the SC"
    },
    {
        "id": "ch91-l3-q16",
        "question": "What was the NCRWC",
        "options": ["Pardon should be abolished.","It should be subject to judicial review to check against arbitrary or malafide exercise (which the SC already held, but NCRWC wanted it codified).","It should be the final word without any check.","It should be transferred to the SC."],
        "correctAnswerIndex": 1,
        "explanation": "Rule of Law requires even the highest executive discretion to be"
    },
    {
        "id": "ch91-l3-q17",
        "question": "Evaluation of",
        "options": ["Yes.","No, it was satisfied with the existing wording.","Only for children.","Only for refugees."],
        "correctAnswerIndex": 0,
        "explanation": "Modernizing the DPSP with explicit human rights language was suggested."
    },
    {
        "id": "ch91-l3-q18",
        "question": "The Commission recommended that",
        "options": ["The PM says so.","Following a process similar to the impeachment of Judges (to ensure security of tenure and independence).","They finish a 10-year term.","The State Legislature loses confidence in them."],
        "correctAnswerIndex": 1,
        "explanation": "Current"
    },
    {
        "id": "ch91-l3-q19",
        "question": "Critically analyze the",
        "options": ["No limit.","At least 120 days a year for the Lok Sabha and 100 days for the Rajya Sabha.","365 days.","Only 60 days."],
        "correctAnswerIndex": 1,
        "explanation": "Increasing the working days is vital for legislative oversight of the executive."
    },
    {
        "id": "ch91-l3-q20",
        "question": "Who chaired the sub-committee on",
        "options": ["Justice Venkatachaliah.","Actually, the sub-committees are not separately credited in the final main report available in Laxmikanth, but Subhash Kashyap was a key drafting member.","Ambedkar.","Patel."],
        "correctAnswerIndex": 1,
        "explanation": "Kashyap"
    },
    {
        "id": "ch91-l3-q21",
        "question": "Did the NCRWC recommend that",
        "options": ["Yes.","No, it actually wanted to retain the President","Only for UTs.","None."],
        "correctAnswerIndex": 0,
        "explanation": "Mandatory report ensures a formal written basis for such a drastic step."
    },
    {
        "id": "ch91-l3-q22",
        "question": "The NCRWC suggested that",
        "options": ["Every day.","Very sparingly, and only for the purposes mentioned in those articles.","To change the state","To ban regional parties."],
        "correctAnswerIndex": 1,
        "explanation": "Federalism requires the Centre to respect the"
    },
    {
        "id": "ch91-l3-q23",
        "question": "Analysis of",
        "options": ["Abolish it (as it is the stick used with Art 356).","Retain it as it is.","Make it more powerful.","Hand over its use to the SC."],
        "correctAnswerIndex": 0,
        "explanation": "Art 365 allows the President to assume failure of machinery if a state fails to comply with central directions; NCRWC saw it as too punitive."
    },
    {
        "id": "ch91-l3-q24",
        "question": "Which of the following describes the",
        "options": ["PM, Leader of Opposition, and Chief Justice of India.","Only the PM and Home Minister.","The entire Parliament.","The President alone."],
        "correctAnswerIndex": 0,
        "explanation": "This recommendation was finally echoed by the SC in 2023 (Anoop Baranwal case) and subsequently legislated."
    },
    {
        "id": "ch91-l3-q25",
        "question": "Critically analyze",
        "options": ["Because it would make the PM too powerful.","Because it would remove the flexibility of the house to remove a government that has lost its confidence, which is the","of the parliamentary system.","Because it","Because it would increase costs."],
        "correctAnswerIndex": 1,
        "explanation": "Fixed terms are more suitable for Presidential systems (Separation of powers)."
    },
    {
        "id": "ch91-l3-q26",
        "question": "Wait. Which",
        "options": ["Volume I.","Volume II.","Volumes are not divided by topics but by status of reports.","None."],
        "correctAnswerIndex": 2,
        "explanation": "Vol I is the Main Report; Vol II consists of Background Papers."
    },
    {
        "id": "ch91-l3-q27",
        "question": "The NCRWC suggested that",
        "options": ["Only English.","Regional languages in the High Courts (in addition to English) to make justice more accessible to the common man.","Sanskrit for all supreme court orders.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Accessibility is an"
    },
    {
        "id": "ch91-l3-q28",
        "question": "Did the NCRWC recommend that the",
        "options": ["Yes.","No, but it recommended that he/she should be invited to all meetings of the Cabinet relating to legal matters.","Always from the ruling party.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Independence of"
    },
    {
        "id": "ch91-l3-q29",
        "question": "Analyze the",
        "options": ["Abolishing them.","Strengthening the","and ensuring timely elections and devolution of funds.","Merging them into one schedule.","Putting them under the Army."],
        "correctAnswerIndex": 1,
        "explanation": "Empowerment of tribal identities within the Indian union (Ch 88/90 context)."
    },
    {
        "id": "ch91-l3-q30",
        "question": "Who was the",
        "options": ["Subhash Kashyap.","There was no designated Vice-Chairman; all members (except Chair) had equal status.","Justice Sarkaria.","Indira Gandhi."],
        "correctAnswerIndex": 1,
        "explanation": "It was a flat hierarchy beneath Justice Venkatachaliah."
    }
];

export const CHAPTER_91_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
