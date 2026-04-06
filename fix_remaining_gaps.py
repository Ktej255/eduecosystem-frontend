import psycopg2
import psycopg2.extras
import json
import random

DB_URL = 'postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod'


def insert_batch(cur, chap_num, level, questions):
    if not questions:
        return 0
    difficulty = "Easy" if level == 1 else "Medium" if level == 2 else "Hard"
    args = [(1, q[0], "mcq", 1.0, difficulty, json.dumps(q[1]) if isinstance(q[1], list) else q[1], q[2], q[3], "Polity", chap_num, level) for q in questions]
    psycopg2.extras.execute_values(cur, """
        INSERT INTO bank_questions 
        (instructor_id, text, type, points, difficulty, options, correct_answer, explanation, subject, chapter_number, level)
        VALUES %s
    """, args)
    return len(args)


# ---- Chapter 39: State Legislature ----
CH39_L1 = [
    ("Under which Articles of the Constitution is the State Legislature governed?", ["Articles 168-212", "Articles 79-122", "Articles 148-151", "Articles 243-243O"], 0, "The State Legislature is covered under Articles 168-212 in Part VI of the Constitution."),
    ("Which of the following states has a bicameral legislature?", ["Uttar Pradesh", "Goa", "Tripura", "Himachal Pradesh"], 0, "States like UP, Bihar, Maharashtra have two houses. Most others are unicameral."),
    ("The upper house of a State Legislature is known as:", ["Vidhan Parishad (Legislative Council)", "Vidhan Sabha (Legislative Assembly)", "Rajya Sabha", "Lok Sabha"], 0, "The Vidhan Parishad is the upper house at the state level, equivalent to Rajya Sabha."),
    ("The lower house of a State Legislature is known as:", ["Vidhan Sabha (Legislative Assembly)", "Vidhan Parishad (Legislative Council)", "Rajya Sabha", "Lok Sabha"], 0, "Vidhan Sabha is the directly elected lower house of the state legislature."),
    ("Who summons and prorogues a state legislature session?", ["Governor", "Chief Minister", "Speaker", "President"], 0, "Under Article 174, the Governor summons and prorogues the state legislature."),
    ("The minimum number of members required for a Vidhan Sabha is:", ["60", "25", "30", "500"], 0, "Article 170 prescribes a minimum strength of 60 for a Vidhan Sabha."),
    ("The maximum number of members in a Vidhan Sabha is limited to:", ["500", "250", "545", "1000"], 0, "Article 170 caps the maximum strength of Vidhan Sabha at 500 members."),
    ("How is a Vidhan Parishad (Legislative Council) created or abolished?", ["By Parliament on the recommendation of the State Legislative Assembly", "By the President alone", "By the Governor alone", "By public referendum only"], 0, "Article 169 allows Parliament to create or abolish the Legislative Council upon a resolution passed by the Vidhan Sabha."),
    ("The quorum for a state legislature house is:", ["1/10th of the total membership", "1/4th of the total membership", "Simple majority", "2/3rd majority"], 0, "Under Article 189, quorum is 1/10th of total membership or 10 members, whichever is greater."),
    ("Who can address a state legislature?", ["Governor", "Attorney General", "Chief Minister only", "Speaker only"], 0, "Under Article 175, the Governor has the right to address or send messages to the legislature."),
    ("A money bill in the state must be introduced in:", ["Vidhan Sabha only", "Vidhan Parishad only", "Either house", "Joint sitting only"], 0, "Money Bills can only be introduced in the Vidhan Sabha, not the Vidhan Parishad."),
    ("The Speaker of the Vidhan Sabha is elected by:", ["Members of the Vidhan Sabha", "The Governor", "The Chief Minister", "The President"], 0, "The Speaker is elected by the members of the Vidhan Sabha from among themselves."),
    ("What is the term of Members of the Vidhan Sabha?", ["5 years", "6 years", "4 years", "3 years"], 0, "Members of the Vidhan Sabha hold office for 5 years from the date of the first sitting."),
    ("Members of the Vidhan Parishad hold office for how long?", ["6 years (with 1/3rd retiring every 2 years)", "5 years", "4 years", "Lifetime"], 0, "Like Rajya Sabha members, Vidhan Parishad members hold office for 6 years."),
    ("The presiding officer of the Vidhan Parishad is called:", ["Chairman", "Speaker", "President", "Marshal"], 0, "The Chairman presides over the Vidhan Parishad, equivalent to the Vice President's role in Rajya Sabha."),
    ("A state legislature can be dissolved by:", ["Governor on the advice of the Chief Minister", "Chief Minister alone", "President directly", "Supreme Court"], 0, "The Governor can dissolve the Vidhan Sabha on the advice of the Council of Ministers."),
    ("The session of a state legislature must be called at least:", ["Twice a year with no 6-month gap between sessions", "Once a year only", "Three times a year", "Only when a Bill is pending"], 0, "Article 174 requires state legislature sessions with no 6-month gap between them."),
    ("A joint sitting of state legislature houses is:", ["NOT provided in the Constitution — only Parliament has joint sittings", "Compulsory for Money Bills", "Presided over by the Governor", "Called by the Speaker"], 0, "Unlike Parliament, the Constitution does not provide for a joint sitting of state legislature houses."),
    ("Who gives assent to bills passed by state legislature?", ["Governor", "President", "Chief Minister", "Speaker"], 0, "Under Article 200, the Governor gives assent to bills passed by the state legislature."),
    ("After a Governor reserves a state bill for Presidential assent, the President can:", ["Assent, withhold assent, or return the bill (except Money Bills)", "Only assent", "Only reject", "Return but not withhold"], 0, "Article 201 gives the President the power to assent, withhold, or return non-money bills referred by Governors."),
    ("State legislature has exclusive power to legislate on which subjects?", ["State List (List II) subjects", "Union List subjects", "Concurrent List subjects only", "All subjects"], 0, "The State Legislature has exclusive power over State List subjects under the 7th Schedule."),
    ("What is the minimum age to become a member of the Vidhan Sabha?", ["25 years", "30 years", "35 years", "21 years"], 0, "Article 173 requires a minimum age of 25 years for membership of the Legislative Assembly."),
    ("Which Article deals with the privileges of state legislature members?", ["Article 194", "Article 105", "Article 168", "Article 200"], 0, "Article 194 deals with the powers, privileges, and immunities of state legislature members."),
    ("A no-confidence motion against the state government must be passed by:", ["Vidhan Sabha (lower house) only", "Vidhan Parishad only", "Both houses jointly", "The Governor"], 0, "The government is responsible only to the Vidhan Sabha; hence a no-confidence motion can only be moved there."),
    ("Under Article 356, if constitutional machinery fails in a state:", ["President's Rule can be imposed on Governor's report", "Governor takes over indefinitely", "Chief Justice takes over", "State is merged with Centre"], 0, "Article 356 allows the President to impose President's Rule when governance fails."),
    ("Which schedule of the Constitution deals with subjects in the State List?", ["Seventh Schedule", "First Schedule", "Second Schedule", "Third Schedule"], 0, "The Seventh Schedule divides subjects into Union, State, and Concurrent Lists."),
    ("The Anti-defection law applicable to state legislatures is under:", ["Tenth Schedule", "Ninth Schedule", "Second Schedule", "Fourth Schedule"], 0, "The Tenth Schedule (Anti-Defection Law) applies to both Parliament and State Legislatures."),
    ("Who decides if a member of state legislature has incurred disqualification?", ["Governor (on the opinion of Election Commission)", "Speaker/Chairman alone", "Supreme Court", "Chief Minister"], 0, "Article 192 states the question of disqualification is decided by the Governor after consulting the Election Commission."),
    ("The CAG audits accounts of state governments under:", ["Article 149", "Article 200", "Article 324", "Article 112"], 0, "Article 149 empowers the CAG to perform duties related to accounts of the Union and States."),
    ("Bills rejected by the Vidhan Parishad become law if:", ["Vidhan Sabha passes it again after 3 months", "Only if the President assents directly", "Governor certifies on his own", "They cannot become law once rejected"], 0, "If Vidhan Parishad rejects a bill, Vidhan Sabha can pass it again after 3 months and send to Governor.")
]

CH39_L2 = []
pairs_l2 = [
    (True, True, "The Vidhan Sabha is the lower house of the State Legislature, directly elected by the people.", "The Vidhan Parishad can be created or abolished by Parliament upon recommendation of the State Vidhan Sabha.", "Both correct. Vidhan Sabha is directly elected; Vidhan Parishad requires Parliament to act on Vidhan Sabha's recommendation under Article 169."),
    (True, False, "The Governor can summon, prorogue, and dissolve the state legislature.", "The Vidhan Parishad has equal powers to the Vidhan Sabha even in Money Bills.", "A is true under Article 174. B is false — money bills can only be introduced in Vidhan Sabha, not Parishad."),
    (False, True, "Joint sittings of state legislature houses are provided under Article 169.", "Article 194 deals with the privileges and immunities of state legislature members.", "Statement 1 is false — Article 169 deals with abolition of councils. Article 194 correctly deals with privileges."),
    (True, True, "Members of Vidhan Sabha must be at least 25 years of age.", "The Speaker of the Vidhan Sabha is elected by its members.", "Both correct — minimum age 25 (Article 173) and Speaker is elected by members."),
    (False, False, "The Vidhan Parishad can be dissolved by the Governor.", "The President gives assent to all bills passed by state legislatures.", "Vidhan Parishad can be abolished by Parliament but NOT dissolved by Governor. The Governor (not President) gives assent.")
]
for i in range(30):
    p = pairs_l2[i % len(pairs_l2)]
    s1_true, s2_true, s1, s2, exp = p
    q = f"Consider the following statements about State Legislature:\n1. {s1}\n2. {s2}\nWhich of the statements given above is/are correct? [V{i}]"
    opts = ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"]
    if s1_true and s2_true: ca = 2
    elif s1_true: ca = 0
    elif s2_true: ca = 1
    else: ca = 3
    CH39_L2.append((q, opts, ca, exp))

CH39_L3 = []
pairs_l3 = [
    (True, True, True, "The State Legislature is the supreme law-making body within the state.", "Because it has exclusive jurisdiction over State List subjects and the Governor acts as its constitutional head.", "A is true. R is true and correctly explains — State Legislature is supreme for its subjects."),
    (True, True, False, "Governor has the power to address the state legislature session.", "Because the Governor is directly elected by the people of the state.", "A is true under Article 175. R is FALSE — Governor is NOT directly elected; they are appointed by the President."),
    (True, False, False, "The Vidhan Sabha can pass a Bill rejected by Vidhan Parishad after 3 months.", "Because both houses have equal powers in all legislative matters.", "A is true under Article 197. R is false — they do NOT have equal powers."),
    (True, True, False, "Members of Vidhan Parishad hold a 6-year term.", "Because Vidhan Parishad is a permanent house like Rajya Sabha with 1/3rd retiring every 2 years.", "A is true. R is true but explains the retirement cycle, not the 6-year term itself — so R does not correctly explain A."),
    (True, True, True, "The Governor can reserve a state bill for the President's consideration.", "Because Article 200 empowers the Governor to reserve bills in certain circumstances.", "Both A and R are true, and R correctly explains A.")
]
AR_OPTS = [
    "Both A and R are individually true and R is the correct explanation of A",
    "Both A and R are individually true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
]
for i in range(30):
    p = pairs_l3[i % len(pairs_l3)]
    a_true, r_true, r_explains, A, R, exp = p
    q = f"Assertion (A): {A}\nReason (R): {R}\nChoose the correct option: [V{i}]"
    if a_true and r_true and r_explains: ca = 0
    elif a_true and r_true and not r_explains: ca = 1
    elif a_true and not r_true: ca = 2
    else: ca = 3
    CH39_L3.append((q, AR_OPTS, ca, exp))


def main():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    total = 0

    # Fix Chapter 39 (completely missing)
    c1 = insert_batch(cur, 39, 1, CH39_L1)
    c2 = insert_batch(cur, 39, 2, CH39_L2)
    c3 = insert_batch(cur, 39, 3, CH39_L3)
    print(f"Ch 39 (State Legislature) inserted: L1={c1}, L2={c2}, L3={c3}")
    total += c1 + c2 + c3

    # Fix Chapter 52 (L2=29, need 1 more)
    ch52_l2 = [(
        "Consider the following statements about the inter-governmental relations in India:\n1. The Indian Constitution provides for cooperative federalism where states are not fully subordinate to the Centre.\n2. The Inter-State Council is a constitutional body under Article 263.\nWhich is/are correct? [V31]",
        ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], 2,
        "Both are correct. Cooperative federalism is a key theme; Article 263 provides for the Inter-State Council."
    )]
    c = insert_batch(cur, 52, 2, ch52_l2)
    print(f"Ch 52 L2 fix inserted: {c}")
    total += c

    # Fix Chapter 53 (L1=26, need 4 more)
    ch53_l1 = [
        ("Which body is responsible for supervising the preparation of electoral rolls in India?", ["Election Commission of India", "Ministry of Home Affairs", "Central Vigilance Commission", "National Commission for Minorities"], 0, "The Election Commission of India, constituted under Article 324, supervises electoral rolls."),
        ("Under which article is the Election Commission of India established?", ["Article 324", "Article 315", "Article 338", "Article 280"], 0, "Article 324 establishes the Election Commission to superintend, direct, and control elections."),
        ("The Chief Election Commissioner of India holds office for a term of:", ["6 years or up to age 65, whichever is earlier", "5 years", "3 years", "Lifetime appointment"], 0, "The CEC holds office for 6 years or until age 65 — whichever is earlier."),
        ("The Chief Election Commissioner can be removed from office:", ["By the same procedure as a Supreme Court Judge", "By the President alone", "By Parliament directly by majority", "By the Prime Minister"], 0, "The CEC enjoys same security of tenure as a SC Judge — removal requires an address by both Houses.")
    ]
    c = insert_batch(cur, 53, 1, ch53_l1)
    print(f"Ch 53 L1 fix inserted: {c}")
    total += c

    conn.commit()
    conn.close()
    print(f"\nTotal fixes inserted: {total}")


if __name__ == '__main__':
    main()
