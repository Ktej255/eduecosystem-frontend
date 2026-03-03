import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch8-l1-q1",
        "question": "In which Part of the Constitution are the Fundamental Rights enshrined?",
        "options": ["Part II","Part III","Part IV","Part V"],
        "correctAnswerIndex": 1,
        "explanation": "The Fundamental Rights are enshrined in Part III of the Constitution from Articles 12 to 35."
    },
    {
        "id": "ch8-l1-q2",
        "question": "The framers of the Indian Constitution derived inspiration for Fundamental Rights from the constitution of which country?",
        "options": ["Britain","Ireland","USSR","USA"],
        "correctAnswerIndex": 3,
        "explanation": "The framers derived inspiration from the Constitution of USA (i.e., Bill of Rights)."
    },
    {
        "id": "ch8-l1-q3",
        "question": "Part III of the Constitution is rightly described as the:",
        "options": ["Magna Carta of India","Soul of the Constitution","Instrument of Instructions","Identity Card of the Constitution"],
        "correctAnswerIndex": 0,
        "explanation": "Part III of the Constitution is rightly described as the Magna Carta of India. It contains a very long and comprehensive list of"
    },
    {
        "id": "ch8-l1-q4",
        "question": "Originally, the Constitution provided for how many Fundamental Rights?",
        "options": ["Six","Seven","Eight","Ten"],
        "correctAnswerIndex": 1,
        "explanation": "Originally, the Constitution provided for seven Fundamental Rights. The Right to Property was deleted later."
    },
    {
        "id": "ch8-l1-q5",
        "question": "Which Fundamental Right was deleted from the list of Fundamental Rights by the 44th Amendment Act, 1978?",
        "options": ["Right to Freedom of Religion","Right against Exploitation","Right to Property","Cultural and Educational Rights"],
        "correctAnswerIndex": 2,
        "explanation": "The right to property was deleted from the list of Fundamental Rights by the 44th Amendment Act, 1978. It is now a legal right under Article 300-A."
    },
    {
        "id": "ch8-l1-q6",
        "question": "Fundamental Rights are meant for promoting the ideal of:",
        "options": ["Social democracy","Political democracy","Economic democracy","Cultural democracy"],
        "correctAnswerIndex": 1,
        "explanation": "The Fundamental Rights are meant for promoting the ideal of political democracy. They prevent the establishment of an authoritarian and despotic rule in the country."
    },
    {
        "id": "ch8-l1-q7",
        "question": "Are the Fundamental Rights absolute in nature?",
        "options": ["Yes, they are absolute and immune from any interference.","No, they are not absolute but qualified. The state can impose reasonable restrictions on them.","Yes, except during a financial emergency.","No, they are entirely subject to the absolute discretion of Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "Some of them are available only to the citizens while others are available to all persons. However, they are not absolute but qualified. The state can impose"
    },
    {
        "id": "ch8-l1-q8",
        "question": "If a person",
        "options": ["No, they must first exhaust all remedies in lower courts.","Yes, they can directly go to the Supreme Court, which can issue writs for their restoration.","No, only the High Courts have original jurisdiction over Fundamental Rights.","Yes, but only if Parliament grants permission."],
        "correctAnswerIndex": 1,
        "explanation": "They are defended and guaranteed by the Supreme Court. Hence, the aggrieved person can directly go to the Supreme Court (not necessarily by way of appeal against the judgement of the high courts)."
    },
    {
        "id": "ch8-l1-q9",
        "question": "Which of the following Fundamental Rights CANNOT be suspended during a National Emergency?",
        "options": ["Articles 14 and 15","Articles 19 and 20","Articles 20 and 21","Articles 21 and 22"],
        "correctAnswerIndex": 2,
        "explanation": "Fundamental Rights can be suspended during the operation of a National Emergency except the rights guaranteed by Articles 20 and 21."
    },
    {
        "id": "ch8-l1-q10",
        "question": "Which Article defines the term",
        "options": ["Article 12","Article 13","Article 14","Article 15"],
        "correctAnswerIndex": 0,
        "explanation": "Article 12 has defined the term"
    },
    {
        "id": "ch8-l1-q11",
        "question": "Article 13 declares that all laws that are inconsistent with or in derogation of any of the fundamental rights shall be void. This doctrine is known as the doctrine of:",
        "options": ["Separation of Powers","Judicial Review","Eminent Domain","Pith and Substance"],
        "correctAnswerIndex": 1,
        "explanation": "Article 13 expressly provides for the doctrine of judicial review. This power has been conferred on the Supreme Court (Article 32) and the high courts (Article 226)."
    },
    {
        "id": "ch8-l1-q12",
        "question": "Article 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws. Is this right available to foreigners?",
        "options": ["No, it is strictly for Indian citizens only.","Yes, it is available to all persons, whether citizens or foreigners.","Yes, but only to citizens of Commonwealth countries.","No, because foreigners are not subject to Indian laws."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court held that where Article 14 uses the word"
    },
    {
        "id": "ch8-l1-q13",
        "question": "Article 15 provides that the State shall not discriminate against any citizen on grounds ONLY of:",
        "options": ["Religion, race, caste, sex or place of birth","Religion, race, caste, sex, residence or descent","Religion, language, caste, sex or wealth","Religion, race, ideology, sex or place of birth"],
        "correctAnswerIndex": 0,
        "explanation": "Article 15 provides that the State shall not discriminate against any citizen on grounds only of religion, race, caste, sex or place of birth."
    },
    {
        "id": "ch8-l1-q14",
        "question": "Article 16 guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. Can the State make provisions for the reservation of appointments in favor of backward classes?",
        "options": ["No, reservation violates the basic principle of equality of opportunity.","Yes, Article 16 permits the State to make reservations for any backward class of citizens not adequately represented.","Yes, but only in the private sector.","No, only Parliament can make such reservations, not the State."],
        "correctAnswerIndex": 1,
        "explanation": "Article 16 provides for equality of opportunity... However, there are exceptions: The State can provide for reservation of appointments or posts in favour of any backward class that is not adequately represented in the state services."
    },
    {
        "id": "ch8-l1-q15",
        "question": "Which Article of the Constitution abolishes",
        "options": ["Article 16","Article 17","Article 18","Article 19"],
        "correctAnswerIndex": 1,
        "explanation": "Article 17 abolishes"
    },
    {
        "id": "ch8-l1-q16",
        "question": "Article 18 abolishes titles. Which of the following titles are NOT prohibited by Article 18?",
        "options": ["Hereditary titles like Maharaja or Raj Bahadur","Titles conferred by foreign states","Military and academic distinctions","Titles of nobility like Duke or Earl"],
        "correctAnswerIndex": 2,
        "explanation": "Article 18 abolishes titles and makes four provisions... It prohibits the state from conferring any title (except a military or academic distinction) on any body, whether a citizen or a foreigner."
    },
    {
        "id": "ch8-l1-q17",
        "question": "Article 19 guarantees to all citizens six rights. Which of the following is NOT one of the six rights currently guaranteed under Article 19?",
        "options": ["Right to freedom of speech and expression","Right to assemble peaceably and without arms","Right to acquire, hold and dispose of property","Right to form associations or unions"],
        "correctAnswerIndex": 2,
        "explanation": "Originally, Article 19 contained seven rights. But, the right to acquire, hold and dispose of property was deleted by the 44th Amendment Act of 1978. The remaining six are speech, assembly, association, movement, residence, and profession."
    },
    {
        "id": "ch8-l1-q18",
        "question": "Article 20 grants protection against arbitrary and excessive punishment to an accused person. It provides three specific protections. Which of the following is NOT one of them?",
        "options": ["No ex-post-facto law","No double jeopardy","No self-incrimination","Right to speedy trial"],
        "correctAnswerIndex": 3,
        "explanation": "Article 20 contains three provisions: No ex-post-facto law, No double jeopardy (not punished for the same offence more than once), and No self-incrimination (cannot be compelled to be a witness against himself). The Right to speedy trial falls under Article 21"
    },
    {
        "id": "ch8-l1-q19",
        "question": "Which Article declares that no person shall be deprived of his life or personal liberty except according to procedure established by law?",
        "options": ["Article 20","Article 21","Article 22","Article 23"],
        "correctAnswerIndex": 1,
        "explanation": "Article 21 declares that no person shall be deprived of his life or personal liberty except according to procedure established by law. This right is available to both citizens and non-citizens."
    },
    {
        "id": "ch8-l1-q20",
        "question": "Which Amendment Act famously added Article 21A, making elementary education a Fundamental Right?",
        "options": ["44th Amendment Act, 1978","73rd Amendment Act, 1992","86th Amendment Act, 2002","97th Amendment Act, 2011"],
        "correctAnswerIndex": 2,
        "explanation": "Article 21A, declaring that the State shall provide free and compulsory education to all children of the age of six to fourteen years, was added by the 86th Constitutional Amendment Act of 2002."
    },
    {
        "id": "ch8-l1-q21",
        "question": "Article 22 grants protection to persons who are arrested or detained. A person arrested and detained in custody must be produced before the nearest magistrate within a period of:",
        "options": ["12 hours","24 hours","48 hours","72 hours"],
        "correctAnswerIndex": 1,
        "explanation": "Article 22 protects against arbitrary arrest. The arrested person has the right to be produced before a magistrate within 24 hours including the journey time."
    },
    {
        "id": "ch8-l1-q22",
        "question": "Article 23 prohibits traffic in human beings, begar (forced labour) and other similar forms of forced labour. This right is available to:",
        "options": ["Only citizens","Both citizens and non-citizens","Only women and children","Only Scheduled Castes and Scheduled Tribes"],
        "correctAnswerIndex": 1,
        "explanation": "Article 23 prohibits traffic in human beings, begar and other similar forms of forced labour. This right is available to both citizens and non-citizens."
    },
    {
        "id": "ch8-l1-q23",
        "question": "Under Article 24, employment of children below what age is completely prohibited in any factory, mine, or other hazardous activities?",
        "options": ["12 years","14 years","16 years","18 years"],
        "correctAnswerIndex": 1,
        "explanation": "Article 24 prohibits the employment of children below the age of 14 years in any factory, mine or other hazardous activities like construction work or railway."
    },
    {
        "id": "ch8-l1-q24",
        "question": "Article 25 says that all persons are equally entitled to freedom of conscience and the right to freely profess, practice, and propagate religion. However, these rights are subject to:",
        "options": ["Public order, morality, and health","Public opinion, tradition, and state security","Parliamentary approval every 5 years","The consent of the majority community"],
        "correctAnswerIndex": 0,
        "explanation": "Article 25 guarantees freedom of conscience... However, these rights are subject to public order, morality, health and other provisions relating to fundamental rights."
    },
    {
        "id": "ch8-l1-q25",
        "question": "Which Article grants religious denominations the right to establish and maintain institutions for religious and charitable purposes and to manage their own affairs in matters of religion?",
        "options": ["Article 25","Article 26","Article 27","Article 28"],
        "correctAnswerIndex": 1,
        "explanation": "Article 26 deals with the freedom to manage religious affairs. Every religious denomination or any of its section shall have the right to establish and maintain institutions, etc."
    },
    {
        "id": "ch8-l1-q26",
        "question": "Under Article 28, is religious instruction permitted in educational institutions wholly maintained out of State funds?",
        "options": ["Yes, if the students voluntarily request it.","Yes, provided it is outside regular school hours.","No, religious instruction is completely prohibited in institutions wholly maintained out of State funds.","No, unless the President gives special permission."],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 28, no religious instruction shall be provided in any educational institution wholly maintained out of State funds."
    },
    {
        "id": "ch8-l1-q27",
        "question": "Which Article provides that any section of the citizens residing in any part of India having a distinct language, script, or culture of its own, shall have the right to conserve the same?",
        "options": ["Article 28","Article 29","Article 30","Article 32"],
        "correctAnswerIndex": 1,
        "explanation": "Article 29 provides that any section of the citizens residing in any part of India having a distinct language, script or culture of its own, shall have the right to conserve the same."
    },
    {
        "id": "ch8-l1-q28",
        "question": "Article 30 grants the right to establish and administer educational institutions to:",
        "options": ["All citizens universally.","Only religious and linguistic minorities.","Only linguistic minorities.","State Governments exclusively."],
        "correctAnswerIndex": 1,
        "explanation": "Article 30 grants rights to minorities (religious or linguistic) to establish and administer educational institutions of their choice."
    },
    {
        "id": "ch8-l1-q29",
        "question": "Dr. B.R. Ambedkar called Article 32 the most important Article of the Constitution. What does Article 32 guarantee?",
        "options": ["The right to life and personal liberty.","The right to constitutional remedies—the right to move the Supreme Court for the enforcement of Fundamental Rights.","The right to vote in general elections.","The right to property."],
        "correctAnswerIndex": 1,
        "explanation": "Article 32 confers the right to remedies for the enforcement of the fundamental rights of an aggrieved citizen. In other words, the right to get the Fundamental Rights protected is in itself a fundamental right."
    },
    {
        "id": "ch8-l1-q30",
        "question": "Which Article empowers Parliament to restrict or abrogate the Fundamental Rights of the members of armed forces, para-military forces, police forces, and intelligence agencies?",
        "options": ["Article 31","Article 32","Article 33","Article 34"],
        "correctAnswerIndex": 2,
        "explanation": "Article 33 empowers the Parliament to restrict or abrogate the fundamental rights of the members of armed forces, para-military forces, police forces, intelligence agencies and analogous forces."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch8-l2-q1",
        "question": "Consider the definition of",
        "options": ["Any private company registered under the Companies Act, regardless of its functions.","A private body working as an instrument or agency of the State.","A purely private educational institution not receiving any government aid.","A private cooperative society formed voluntarily by citizens."],
        "correctAnswerIndex": 1,
        "explanation": "According to the Supreme Court, even a private body or an agency working as an instrument of the State falls within the meaning of the"
    },
    {
        "id": "ch8-l2-q2",
        "question": "Article 13 declares that laws inconsistent with Fundamental Rights shall be void. The term",
        "options": ["Constitutional Amendments only.","Permanent laws (Acts of Parliament/State Legislatures) and temporary laws (ordinances) only.","Permanent laws, temporary laws, statutory instruments (orders, bye-laws, rules), and non-legislative sources of law (custom/usage).","Only laws passed by the British Parliament prior to 1947."],
        "correctAnswerIndex": 2,
        "explanation": "The term"
    },
    {
        "id": "ch8-l2-q3",
        "question": "Assertion (A): Article 14 permits",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is true; Article 14 forbids class legislation (arbitrary discrimination) but permits reasonable classification (based on intelligible differentia having a rational nexus to the objective). Reason R is false; equality does NOT mean identical treatment for people in radically different circumstances (that would be inequality in practice)."
    },
    {
        "id": "ch8-l2-q4",
        "question": "The concept of",
        "options": ["No person is above the law and there are no special privileges for anyone.","The absence of any arbitrary power in the hands of the executive.","Equality of treatment under equal circumstances, both in the privileges conferred and liabilities imposed.","The State must guarantee equal income to all citizens."],
        "correctAnswerIndex": 2,
        "explanation": ""
    },
    {
        "id": "ch8-l2-q5",
        "question": "Article 15 prohibits discrimination on grounds",
        "options": ["Making a law reserving 100% jobs for men in the military.","Making special provisions for women and children (e.g., reservation of seats for women in local bodies or free education for children).","Providing special land grants exclusively based on a citizen","Denying access to public wells solely based on caste."],
        "correctAnswerIndex": 1,
        "explanation": "Article 15 permits three critical exceptions: (1) special provisions for women and children (Art 15(3)), (2) special provisions for the advancement of socially and educationally backward classes or SC/STs (Art 15(4)), and (3) reservations in educational institutions for these groups (Art 15(5))."
    },
    {
        "id": "ch8-l2-q6",
        "question": "Consider the provisions of Article 16 regarding public employment. The State can prescribe",
        "options": ["The State Legislature concerned.","The Parliament of India.","The Governor of the State.","The Supreme Court of India."],
        "correctAnswerIndex": 1,
        "explanation": "Article 16 allows residence as a condition, but this power vests EXCLUSIVELY with the Parliament, not state legislatures, to maintain the fundamental unity of Indian citizenship."
    },
    {
        "id": "ch8-l2-q7",
        "question": "Under Article 16(4), the State can reserve appointments or posts for any backward class of citizens. What is the constitutionally mandated condition that must be satisfied for the State to exercise this power?",
        "options": ["The class must constitute at least 50% of the state","The class must be recognized by the United Nations.","The backward class must NOT be adequately represented in the services under the State, in the opinion of the State.","The class must have an annual income below the poverty line."],
        "correctAnswerIndex": 2,
        "explanation": "Article 16(4) permits the State to provide for reservation in favor of any backward class which, in the opinion of the State, is NOT adequately represented in the State services."
    },
    {
        "id": "ch8-l2-q8",
        "question": "Article 19 guarantees six fundamental freedoms. However, these are not absolute. Which of the following is a constitutionally recognized",
        "options": ["Protecting the business interests of multinational corporations.","Preventing the criticism of the Prime Minister","Contempt of court, defamation, and incitement to an offence.","Maintaining the ideological purity of the ruling party."],
        "correctAnswerIndex": 2,
        "explanation": "The State can impose reasonable restrictions on the exercise of the freedom of speech and expression on the grounds of sovereignty and integrity of India, security of the state, friendly relations with foreign states, public order, decency or morality, contempt of court, defamation, and incitement to an offence."
    },
    {
        "id": "ch8-l2-q9",
        "question": "Examine the",
        "options": ["Only external movement is protected by Article 19.","Only internal movement (right to move inside the country) is protected by Article 19.","Both internal and external movement are protected by Article 19.","Neither is protected by Article 19; they fall under Article 21."],
        "correctAnswerIndex": 1,
        "explanation": "Article 19 protects only the right to move inside the country (internal). The right to move out of the country and the right to come back (external) is protected by Article 21 (right to life and personal liberty) as established in the Menaka Gandhi case."
    },
    {
        "id": "ch8-l2-q10",
        "question": "Article 20 provides protection against",
        "options": ["A person cannot be tried in two different courts simultaneously.","A person cannot be forced to give a blood/DNA sample.","A person cannot be convicted for an act that wasn","A person cannot be held in police custody for more than 24 hours without a charge sheet."],
        "correctAnswerIndex": 2,
        "explanation": "An ex-post-facto law is one that imposes penalties retrospectively (retroactively). Article 20(1) prohibits the State from enacting retrospective criminal legislation."
    },
    {
        "id": "ch8-l2-q11",
        "question": "Consider the protection regarding",
        "options": ["Yes, double jeopardy applies universally to all state proceedings.","No, the protection against double jeopardy is available ONLY in proceedings before a court of law or a judicial tribunal.","Yes, but only if the punishment involves reduction in rank.","No, unless the President explicitly pardons them."],
        "correctAnswerIndex": 1,
        "explanation": "The protection against double jeopardy is available only in proceedings before a court of law or a judicial tribunal. It does NOT apply in departmental or administrative proceedings as they are not of a judicial nature."
    },
    {
        "id": "ch8-l2-q12",
        "question": "The ambit of Article 21 (Protection of Life and Personal Liberty) was vastly expanded by the Supreme Court in the Menaka Gandhi case (1978). While the A.K. Gopalan case (1950) offered protection only against arbitrary executive action, the Menaka Gandhi case extended it to offer protection against:",
        "options": ["Private individuals taking the law into their own hands.","Arbitrary legislative action (meaning a law itself must be reasonable, fair, and just).","Decisions made by foreign tribunals.","Corporate environmental violations directly."],
        "correctAnswerIndex": 1,
        "explanation": "In Menaka Gandhi (1978), the SC ruled that the"
    },
    {
        "id": "ch8-l2-q13",
        "question": "Which of the following rights has been explicitly recognized by the Supreme Court as inherently falling under the umbrella of",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The SC has expanded Article 21 to include dozens of rights (speedy trial, against solitary confinement, right to privacy, etc.). However, there is NO fundamental right to strike or lockout (these are governed by industrial laws)."
    },
    {
        "id": "ch8-l2-q14",
        "question": "Article 22 provides safeguards against arbitrary arrest and detention. However, these safeguards (right to be informed, right to legal practitioner, right to be produced before a magistrate in 24 hours) are NOT available to two categories of persons. Who are they?",
        "options": ["Women and minors.","Enemy aliens and persons arrested under a preventive detention law.","Foreign diplomats and UN officials.","Persons accused of murder and terrorism."],
        "correctAnswerIndex": 1,
        "explanation": "Article 22(3) explicitly states that the punitive detention safeguards do NOT apply to (a) an enemy alien, and (b) a person arrested or detained under any law providing for preventive detention."
    },
    {
        "id": "ch8-l2-q15",
        "question": "In the context of Preventive Detention under Article 22, the detention of a person cannot exceed a certain standard time period unless an advisory board reports sufficient cause for extended detention. What was the standard maximum period established in the original Constitution (and practically in force today)?",
        "options": ["One month","Three months","Six months","One year"],
        "correctAnswerIndex": 1,
        "explanation": "The detention of a person cannot exceed three months unless an advisory board (consisting of high court judges) reports sufficient cause for extended detention. (Note: The 44th CAA 1978 tried to reduce this to 2 months, but that provision has not been brought into force yet)."
    },
    {
        "id": "ch8-l2-q16",
        "question": "Assertion (A): Article 23 prohibits",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion A is false because the State CAN compel work under its exception. Reason R is true: Article 23 explicitly permits the State to impose compulsory service for public purposes (e.g., military or social service), provided it doesn"
    },
    {
        "id": "ch8-l2-q17",
        "question": "Article 25 guarantees the",
        "options": ["It includes the fundamental right to forcibly convert another person to one","It only allows for the private practice of religion at home.","It includes the right to transmit and disseminate one","It is restricted only to linguistic minorities."],
        "correctAnswerIndex": 2,
        "explanation": "The right to propagate does not include a fundamental right to convert another person to one"
    },
    {
        "id": "ch8-l2-q18",
        "question": "While Article 25 guarantees the rights of individuals, Article 26 protects the rights of",
        "options": ["It should be a collection of individuals who have a system of beliefs (doctrines) which they regard as conducive to their spiritual well-being.","It should possess a common organization.","It should be designated by a distinctive name.","It must have existed prior to the adoption of the Constitution in 1950."],
        "correctAnswerIndex": 3,
        "explanation": "The SC outlined three conditions: a system of beliefs/doctrines, a common organization, and a distinctive name. E.g., Ramakrishna Mission and Ananda Marga are denominations. There is no historical timeline requirement pre-1950."
    },
    {
        "id": "ch8-l2-q19",
        "question": "Article 27 states that no person shall be compelled to pay any taxes for the promotion or maintenance of any particular religion. Does this prohibit the State from levying",
        "options": ["Yes, fees and taxes are treated identically under Article 27.","No, it only prohibits",", not","levied to provide secular services or regulation (like crowd control or sanitation at a religious site).","Yes, the State must fund all pilgrim services from the general exchequer without collecting anything from pilgrims.","No, the State can levy taxes, but they must be redistributed to all religions equally."],
        "correctAnswerIndex": 1,
        "explanation": "Article 27 prohibits only the levy of a tax, not a fee. A fee can be levied on pilgrims to provide them with some special service or safety measures. Also, the state can use tax money for the promotion of ALL religions equally, it just can"
    },
    {
        "id": "ch8-l2-q20",
        "question": "Consider Article 30 which grants the right to establish educational institutions. The Supreme Court has classified minority educational institutions into three types. Which type is entirely free to manage its own affairs without ANY administrative, syllabus, or academic standards imposed by the State?",
        "options": ["Institutions that seek recognition as well as aid from the State.","Institutions that seek only recognition from the State and not aid.","Institutions that neither seek recognition nor aid from the State.","Even institutions that seek neither recognition nor aid are completely subject to general laws regarding syllabus and academic standards."],
        "correctAnswerIndex": 3,
        "explanation": "Even institutions that neither seek recognition nor aid (the third type) are free to manage their affairs, BUT they are still subject to general laws of the land regarding syllabus, academic standards, hygiene, employment laws, etc. No institution is entirely immune from State standards."
    },
    {
        "id": "ch8-l2-q21",
        "question": "Article 32 gives the Supreme Court the power to issue",
        "options": ["Mandamus","Certiorari","Quo-Warranto","Prohibition"],
        "correctAnswerIndex": 2,
        "explanation": "Quo-Warranto (meaning"
    },
    {
        "id": "ch8-l2-q22",
        "question": "Which of the following writs CANNOT be issued against a private individual or a private body?",
        "options": ["Habeas Corpus","Mandamus","Prohibition","Both Mandamus and Prohibition"],
        "correctAnswerIndex": 3,
        "explanation": "Habeas corpus can be issued against both public authorities and private individuals. However, Mandamus (command to a public official) and Prohibition (to a lower court/tribunal) cannot be issued against purely private individuals or bodies."
    },
    {
        "id": "ch8-l2-q23",
        "question": "Consider the constitutional power to issue writs for the enforcement of Fundamental Rights. What is the fundamental difference between the writ jurisdiction of the Supreme Court (Article 32) and the High Courts (Article 226)?",
        "options": ["The Supreme Court can issue writs only for Fundamental Rights, whereas High Courts can issue writs for Fundamental Rights AND for any other purpose (ordinary legal rights).","The High Court","s.","The Supreme Court can refuse to exercise its writ jurisdiction, but High Courts cannot refuse.","Only the High Court can issue the writ of Injunction."],
        "correctAnswerIndex": 0,
        "explanation": "The SC can issue writs ONLY for the enforcement of Fundamental Rights. HCs can issue writs for Fundamental Rights AND"
    },
    {
        "id": "ch8-l2-q24",
        "question": "Article 33 gives Parliament the power to restrict Fundamental Rights for armed forces to ensure discipline. Does a state legislature have concurrent power to modify these rights for the state police force?",
        "options": ["Yes, because police and public order are State subjects.","No, the power to make laws under Article 33 is conferred ONLY on Parliament.","Yes, if the Governor grants assent.","No, only the President via ordinance can do this."],
        "correctAnswerIndex": 1,
        "explanation": "The power to make laws under Article 33 is conferred ONLY on Parliament and not on state legislatures, ensuring uniform discipline across forces nationwide."
    },
    {
        "id": "ch8-l2-q25",
        "question": "Article 34 provides for the restriction on fundamental rights while",
        "options": ["It defines the precise circumstances and procedures for declaring martial law in Article 34.","The Constitution does not define the concept of",", leaving it implicit and referring to it only in the context of indemnifying acts done during its operation.","It equates martial law exactly with a National Emergency under Article 352.","It bans martial law completely across the territory of India."],
        "correctAnswerIndex": 1,
        "explanation": "The concept of"
    },
    {
        "id": "ch8-l2-q26",
        "question": "Which of the following Fundamental Rights are available ONLY to citizens of India and denied to friendly aliens?",
        "options": ["Articles 14, 20, 21, 21A, 22","Articles 15, 16, 19, 29, 30","Articles 23, 24, 25, 26, 27","All Fundamental Rights are available to friendly aliens."],
        "correctAnswerIndex": 1,
        "explanation": "The Fundamental Rights available ONLY to citizens (and not to aliens) are 15, 16 (equality of opportunity), 19 (six freedoms), 29 and 30 (cultural and educational rights)."
    },
    {
        "id": "ch8-l2-q27",
        "question": "Consider the protection under Article 20(3):",
        "options": ["Oral testimony in court.","Documentary evidence based on personal knowledge.","Compulsory production of material objects, thumb impressions, specimens of signature, or blood specimens.","Narco-analysis tests conducted with physical compulsion."],
        "correctAnswerIndex": 2,
        "explanation": "The protection does not extend to: (i) compulsory production of material objects, (ii) compulsion to give thumb impression, specimen signature, blood specimens, and (iii) compulsory exhibition of the body. It essentially protects against conveying personal knowledge involuntarily."
    },
    {
        "id": "ch8-l2-q28",
        "question": "Under the original Constitution, what was the status of the",
        "options": ["It was completely absent from Part III.","It was guaranteed under Article 19(1)(f) and Article 31 as a Fundamental Right.","It was an ordinary legal right under Article 300.","It was a Directive Principle of State Policy."],
        "correctAnswerIndex": 1,
        "explanation": "Originally, the right to property was a Fundamental Right under Article 19(1)(f) (right to acquire, hold, dispose property) and Article 31 (deprivation of property by law and compensation). Both were repealed by the 44th Amendment in 1978."
    },
    {
        "id": "ch8-l2-q29",
        "question": "The",
        "options": ["The Prime Minister and Chief Ministers.","The President of India and the Governors of States.","The Chief Justice of India.","Members of Parliament (for acts committed outside parliament)."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 361, the President of India and the Governor of States enjoy exceptions: no criminal proceedings whatsoever can be instituted or continued against them in any court during their term of office."
    },
    {
        "id": "ch8-l2-q30",
        "question": "Article 21A mandates free and compulsory education for children. To implement this Fundamental Right, which major legislation was enacted by Parliament?",
        "options": ["The Right of Children to Free and Compulsory Education (RTE) Act, 2009.","The National Education Policy (NEP) Act, 2020.","The Sarva Shiksha Abhiyan Act, 2001.","The Protection of Child Rights Act, 2005."],
        "correctAnswerIndex": 0,
        "explanation": "In pursuance of Article 21A, the Parliament enacted the Right of Children to Free and Compulsory Education (RTE) Act, 2009. This Act represents the consequential legislation envisaged under Article 21A."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch8-l3-q1",
        "question": "Consider the constitutional doctrine of",
        "options": ["It is a legal right, and an aggrieved person can directly approach the Supreme Court under Article 32 if deprived of their property.","It is a constitutional right, but not a fundamental right; deprivation requires authority of law, and an aggrieved person can approach the High Court under Article 226, but not the Supreme Court under Article 32.","It is merely a statutory right governed exclusively by state-level Land Acquisition Acts, with no overarching constitutional protection.","It remains a fundamental right only for religious and linguistic minorities establishing educational institutions."],
        "correctAnswerIndex": 1,
        "explanation": "Article 300-A ("
    },
    {
        "id": "ch8-l3-q2",
        "question": "Article 21 has been expansively interpreted by the Supreme Court over decades. Which landmark case fundamentally shifted judicial interpretation from the narrow A.K. Gopalan standard (only executive restraint) to the broad",
        "options": ["Kesavananda Bharati v. State of Kerala (1973)","Menaka Gandhi v. Union of India (1978)","I.R. Coelho v. State of Tamil Nadu (2007)","Puttaswamy v. Union of India (2017)"],
        "correctAnswerIndex": 1,
        "explanation": "The Menaka Gandhi case (1978) was the watershed moment. The SC ruled that Article 21"
    },
    {
        "id": "ch8-l3-q3",
        "question": "The",
        "options": ["Articles 14, 19, and 21","Articles 15, 16, and 29","Articles 32, 226, and 136","Articles 20, 21, and 22"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch8-l3-q4",
        "question": "Examine the",
        "options": ["Yes, if the institution receives substantial state aid.","No, minority educational institutions are completely exempt from the State","Yes, but only in professional courses like medicine and engineering.","No, but the State can mandate reservation of teaching posts within the institution."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (Pramati Educational and Cultural Trust case, 2014) and Article 15(5) explicitly exempt BOTH aided and unaided minority educational institutions (established under Art 30) from state-mandated reservation policies for students, preserving their autonomous administrative character."
    },
    {
        "id": "ch8-l3-q5",
        "question": "Assertion (A): The freedom of speech and expression (Article 19(1)(a)) does not explicitly mention",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Unlike the US Constitution which explicitly mentions press freedom, the Indian Constitution"
    },
    {
        "id": "ch8-l3-q6",
        "question": "Consider the constitutional validity of",
        "options": ["Preventive detention can be enacted by both the Parliament and State Legislatures concurrently for reasons of security of state and maintenance of public order.","A detainee must be communicated the grounds of detention as soon as possible, but authorities can refuse to disclose facts considered against the",".","A detainee cannot be held beyond three months without the approval of an Advisory Board.","The Constitution strictly limits the maximum period of preventive detention to six months, beyond which a constitutional amendment is required."],
        "correctAnswerIndex": 3,
        "explanation": "Statement D is incorrect. The Constitution does NOT fix a maximum 6-month period. Parliament has the authority (under Art 22(7)) to prescribe the maximum period for which any person may in any class or classes of cases be detained under a preventive detention law."
    },
    {
        "id": "ch8-l3-q7",
        "question": "Under Article 16(4A), introduced by the 77th Amendment (1995) and modified by the 85th Amendment (2001), the State is empowered to make provisions for reservation in matters of",
        "options": ["All Backward Classes (including OBCs).","Only Scheduled Castes and Scheduled Tribes (SCs/STs).","Linguistic Minorities in their respective domicile states.","Economically Weaker Sections (EWS)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 16(4A) explicitly empowers the State to make any provision for reservation in matters of PROMOTION with consequential seniority, to any class or classes of posts in the services under the State in favor of the Scheduled Castes (SCs) and the Scheduled Tribes (STs) only. OBCs get reservation in initial appointment (16(4)) but not in promotion."
    },
    {
        "id": "ch8-l3-q8",
        "question": "Examine the",
        "options": ["Pre-constitutional laws that violate Fundamental Rights are","permanently and cannot be revived even if the Constitution is amended later.","A pre-constitutional law violating a Fundamental Right is not entirely dead; it is merely overshadowed (eclipsed) by the Fundamental Right and remains dormant. If a constitutional amendment removes the inconsistency, the law becomes active again.","Any state law that contradicts a central law is eclipsed and rendered void.","Fundamental Rights are temporarily eclipsed during a National Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Eclipse (established in Bhikaji Narain Dhakras v. State of MP) states that a pre-constitutional law inconsistent with Part III is not void ab initio (dead from the start). It is merely eclipsed by the fundamental right. If an amendment removes the shadow of that right, the law revives."
    },
    {
        "id": "ch8-l3-q9",
        "question": "In the landmark Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) judgment, a 9-judge bench of the Supreme Court unanimously declared the",
        "options": ["Right to Freedom of Religion (Article 25).","Right to Equality (Article 14).","Right against Exploitation (Article 23).","Right to Life and Personal Liberty (Article 21) and as a part of the freedoms guaranteed by Part III."],
        "correctAnswerIndex": 3,
        "explanation": "The Supreme Court unanimously ruled that the right to privacy is protected as an intrinsic part of the right to life and personal liberty under Article 21 and as a part of the freedoms guaranteed by Part III of the Constitution."
    },
    {
        "id": "ch8-l3-q10",
        "question": "Consider the power of issuing writs under Article 32 (Supreme Court) and Article 226 (High Court). What is meant by the assertion that the Supreme Court",
        "options": ["The Supreme Court can originate a writ petition, but it cannot exclusively decide the outcome without consulting the High Court.","An aggrieved citizen can approach the Supreme Court directly (original), but the High Courts also share this power concurrently (not exclusive) under Article 226.","The Supreme Court can issue writs for all legal rights originally, but shares exclusive jurisdiction over Fundamental Rights with Parliament.","The Supreme Court exclusively issues writs, but original petitions must start at the District Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 32 allows direct approach to the SC without going through appeals (Original jurisdiction). However, it is"
    },
    {
        "id": "ch8-l3-q11",
        "question": "Article 15(6) and 16(6) were inserted by the 103rd Constitutional Amendment Act (2019) to provide a maximum of 10% reservation for Economically Weaker Sections (EWS). Which groups are NOT eligible for this specific 10% EWS quota?",
        "options": ["Only citizens living below the poverty line irrespective of caste.","Only citizens in rural areas.","Citizens who are already covered under the SC, ST, and Socially and Educationally Backward Classes (OBC) reservations.","Citizens from linguistic minorities."],
        "correctAnswerIndex": 2,
        "explanation": "The 10% EWS quota deliberately targets the"
    },
    {
        "id": "ch8-l3-q12",
        "question": "Consider the",
        "options": ["Article 14 (Equality)","Article 19(1)(a) (Freedom of Speech and Expression)","Article 21 (Life and Liberty)","Both Article 19(1)(a) and Article 21"],
        "correctAnswerIndex": 3,
        "explanation": "The Supreme Court has consistently ruled that the Right to Information is a fundamental right implicit under both Article 19(1)(a) (as you cannot express yourself without information) and Article 21 (right to life implies a right to know about things affecting life, like the environment or governance)."
    },
    {
        "id": "ch8-l3-q13",
        "question": "Which of the following restrictions on the",
        "options": ["The restriction based on",".","The restriction authorizing the State to","associated with religious practice.","The explicit constitutional provision in Article 25(2)(b) allowing the State to provide for",".","The","formulated by the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Article 25(2)(b) specifically saves the power of the State to make laws providing for social welfare and reform or the throwing open of Hindu religious institutions of a public character to all classes and sections of Hindus (which historically targeted the evil of untouchability and temple entry bans)."
    },
    {
        "id": "ch8-l3-q14",
        "question": "The",
        "options": ["If the center and states pass conflicting laws on fundamental rights, they are severed permanently.","If an offending provision of a statute can be separated from the valid provisions, only the offending provision is declared void, saving the rest of the statute.","Fundamental Rights are severed from Directive Principles in cases of conflict.","Judicial review completely severs the legislative branch"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 13, laws are void only"
    },
    {
        "id": "ch8-l3-q15",
        "question": "Under the",
        "options": ["Yes, the constitutional ban is absolute across all sectors without exception.","No, it explicitly permits children below 14 to work in family businesses or non-hazardous environments after school hours or during vacations.","Yes, but the State can temporarily suspend it during economic emergencies.","No, only the UN Conventions ban it entirely; the Indian Constitution permits it for agricultural labor."],
        "correctAnswerIndex": 1,
        "explanation": "Article 24 specifically prohibits hazardous employment (factories, mines). It does not explicitly ban harmless or non-hazardous work. The Child and Adolescent Labour (Prohibition and Regulation) Act, 1986 (amended 2016) completely prohibits employment of children below 14 in all occupations, EXCEPT helping in family enterprises after school/vacations."
    },
    {
        "id": "ch8-l3-q16",
        "question": "The power of Parliament to modify Fundamental Rights for armed forces under Article 33 is sweeping. Which of the following forces or categories of workers have been held by the Supreme Court to fall under the ambit of Article 33?",
        "options": ["Only combatant ranks in the Army, Navy, and Air Force.","Combatants, as well as non-combatants like barbers, carpenters, mechanics, cooks, and sweepers functioning within the armed forces.","All Central Government employees, including railway workers.","Only Central Armed Police Forces (CAPFs), but not state police forces."],
        "correctAnswerIndex": 1,
        "explanation": "The expression"
    },
    {
        "id": "ch8-l3-q17",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Article 300A merely says deprivation must be by"
    },
    {
        "id": "ch8-l3-q18",
        "question": "Consider the constitutional protection under Article 20(1) regarding ex-post-facto laws. An individual is facing a civil tax liability case, and the government passes a retroactive tax law demanding higher taxes for the previous five years. Does Article 20(1) protect the individual from this retroactive tax liability?",
        "options": ["Yes, Article 20(1) prohibits all retrospective laws, civil or criminal.","Yes, because taxation is considered a confiscatory punishment under the Constitution.","No, the protection against ex-post-facto laws extends only to criminal laws, not to civil laws or tax laws.","No, unless the individual is concurrently facing a criminal trial."],
        "correctAnswerIndex": 2,
        "explanation": "The protection under Article 20(1) (ex-post-facto laws) is available strictly in criminal proceedings. It does not apply to civil laws or tax laws, meaning the legislature can validly enact retrospective taxation or civil liabilities."
    },
    {
        "id": "ch8-l3-q19",
        "question": "The Armed Forces (Special Powers) Act (AFSPA) provides sweeping powers to armed forces in",
        "options": ["It is justified under Article 33, which limits their fundamental rights.","It is justified under Article 34, provided martial law has been officially declared.","It is justified under Article 355 (duty of the Union to protect states) combined with the legislative competence derived from the 7th Schedule; it does not explicitly rely on martial law (Art 34) as AFSPA operates in non-martial law civilian environments.","The Supreme Court struck down AFSPA as unconstitutional in 2016."],
        "correctAnswerIndex": 2,
        "explanation": "AFSPA is a statutory law passed under the Union"
    },
    {
        "id": "ch8-l3-q20",
        "question": "Which of the following constitutional provisions operates as an explicit exception to Fundamental Rights, saving laws giving effect to certain Directive Principles from being declared unconstitutional on grounds of violating Articles 14 and 19?",
        "options": ["Article 31A","Article 31B","Article 31C","Article 35"],
        "correctAnswerIndex": 2,
        "explanation": "Article 31C (inserted by 25th CAA, 1971) explicitly protects laws giving effect to the Directive Principles contained in Article 39(b) [equitable distribution of resources] and 39(c) [prevention of wealth concentration] from being challenged on the grounds of contravening Articles 14 and 19."
    },
    {
        "id": "ch8-l3-q21",
        "question": "The Supreme Court formulated the",
        "options": ["To prove that the deity was a","under Article 12.","To determine if the exclusion of women aged 10-50 was an","part of the Hindu religion. If not essential, it loses constitutional protection under Article 25 against Article 14 (Equality) claims.","To establish that the temple received state funding and thus fell under Article 28.","To justify the temple"],
        "correctAnswerIndex": 1,
        "explanation": "The ERP test determines whether a practice is so fundamental to a religion that altering it would change the nature of the religion itself. In Sabarimala, the SC majority held that the exclusionary practice was not an"
    },
    {
        "id": "ch8-l3-q22",
        "question": "Consider the constitutional definition and protection of",
        "options": ["Yes, Article 29 defines it numerically as any group constituting less than 50% of the national population.","Yes, Article 30 defines it as exclusively religious and linguistic communities recognized by the Central Government.","No, the term","is not explicitly defined anywhere in the Constitution.","Yes, the 42nd Amendment added a detailed definition to the 3rd Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution uses the word"
    },
    {
        "id": "ch8-l3-q23",
        "question": "When evaluating the tension between Fundamental Rights (Part III) and Directive Principles of State Policy (Part IV), the Minerva Mills case (1980) established a foundational principle. What was the core holding regarding this relationship?",
        "options": ["Fundamental Rights are permanently supreme and Directive Principles are legally meaningless.","Directive Principles completely supersede Fundamental Rights whenever the State enacts social welfare legislation.","The Indian Constitution is founded on the bedrock of the","between Fundamental Rights and Directive Principles; they are complementary, not competing.","The President determines which Part assumes supremacy during a crisis."],
        "correctAnswerIndex": 2,
        "explanation": "In Minerva Mills (1980), the SC ruled that the Constitution is founded on the bedrock of balance between Part III and Part IV. To give absolute primacy to one over the other is to disturb the harmony of the Constitution, which is a"
    },
    {
        "id": "ch8-l3-q24",
        "question": "Article 22(4) deals with Preventive Detention. The 44th Amendment Act (1978) sought to reduce the maximum period of preventive detention without obtaining the opinion of an advisory board from 3 months to 2 months. What is the current operational legal status of this reduction?",
        "options": ["It has been actively strictly enforced since 1978.","The Supreme Court struck down the reduction in 1980.","The provision has not yet been brought into force; hence, the original period of 3 months still continues in practice.","It was repealed by the 59th Amendment during the Punjab crisis."],
        "correctAnswerIndex": 2,
        "explanation": "Interestingly, the provision of the 44th CAA bringing down the period from three months to two months has NEVER been brought into force by notification. Hence, the original constitutional provision of three months is ostensibly still the functional law."
    },
    {
        "id": "ch8-l3-q25",
        "question": "Article 16(5) provides a specific exception to the general rule of non-discrimination in public employment on the grounds of religion. What does this exception permit?",
        "options": ["It allows the State to reserve 15% of all government jobs for religious minorities.","It permits a law requiring that the incumbent of an office in a religious or denominational institution must belong to that particular religion.","It allows the military to recruit exclusively from specific martial religions.","It permits religious taxes to strictly fund the salaries of temple priests."],
        "correctAnswerIndex": 1,
        "explanation": "Article 16(5) states that a law can provide that the incumbent of an office in connection with the affairs of any religious or denominational institution or any member of the governing body thereof shall be a person professing a particular religion or belonging to a particular denomination. This is logical and exempt from the secular employment rule."
    },
    {
        "id": "ch8-l3-q26",
        "question": "Under the Ninth Schedule, created by the 1st Constitutional Amendment (Article 31B), laws placed within it were intended to be completely immune from judicial review on the grounds of violating Fundamental Rights. However, in the I.R. Coelho case (2007), what critical restriction did the Supreme Court place on the",
        "options": ["It declared the entire Ninth Schedule retrospectively unconstitutional.","It ruled that only agricultural land reform laws can be placed in the Ninth Schedule.","It ruled that laws placed in the Ninth Schedule AFTER April 24, 1973 (Kesavananda Bharati judgment date) ARE subject to judicial review if they violate the","(which includes Articles 14, 15, 19, 21).","It transferred the power of judicial review of Ninth Schedule laws solely to the President."],
        "correctAnswerIndex": 2,
        "explanation": "The SC held that there is no blanket immunity. Any law inserted into the Ninth Schedule after April 24, 1973, is open to challenge if it violates the basic structure of the Constitution (derived from the rights under Art 14, 15, 19, and 21)."
    },
    {
        "id": "ch8-l3-q27",
        "question": "Consider the mechanism of issuing the writ of",
        "options": ["Against a lower court to compel it to exercise its jurisdiction.","Against an inferior tribunal to perform a statutory duty.","Against the President of India or the State Governors for the performance of their constitutional duties.","Against a municipal corporation compelling it to enforce bylaws."],
        "correctAnswerIndex": 2,
        "explanation": "Mandamus cannot be issued against the President of India or the State Governors. It also cannot be issued against a private individual/body, to enforce departmental instructions lacking statutory force, or when the duty is discretionary rather than mandatory."
    },
    {
        "id": "ch8-l3-q28",
        "question": "Assertion (A): A corporation set up under an Act of Parliament (like ONGC or LIC) is considered",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. The SC (RD Shetty case, Ajay Hasia case) evolved tests to determine if a body is an"
    },
    {
        "id": "ch8-l3-q29",
        "question": "The Right to Education (Article 21A) guarantees free and compulsory education to all children aged 6 to 14. How has the Supreme Court interpreted the obligation of UNAIDED private minority educational institutions regarding the RTE Act",
        "options": ["They are fully bound by the RTE mandate, as education is a universal right.","They are exempt from the 25% RTE reservation mandate, as forcing it upon them violates their autonomy guaranteed under Article 30(1).","They must provide 10% reservation instead of 25%.","They are bound by it only if they are recognized by the CBSE/ICSE."],
        "correctAnswerIndex": 1,
        "explanation": "In Pramati Educational and Cultural Trust v. Union of India (2014), a Constitution Bench of the Supreme Court held that the RTE Act, 2009 is inapplicable to both aided and unaided minority educational institutions, as compelling them to admit students out of the mandate would abrogate their right under Article 30(1)."
    },
    {
        "id": "ch8-l3-q30",
        "question": "Which of the following constitutional Articles allows the state to utilize forced labor conceptually, not as",
        "options": ["Article 15(4)","Article 33","Article 23(2) itself allows this exception explicitly.","Article 352 (National Emergency) explicitly overrides Article 23."],
        "correctAnswerIndex": 2,
        "explanation": "Article 23(1) prohibits forced labor/begar. However, Article 23(2) provides an explicit exception:"
    }
];

export const CHAPTER_8_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
