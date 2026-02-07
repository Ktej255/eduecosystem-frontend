export interface ArticleMemoryItem {
    id: string;
    article: string;
    provision: string;
    mnemonic: string;
    visualHint: string; // Icon identifier
    category: 'Fundamental Rights' | 'DPSP' | 'Union Executive' | 'Parliament' | 'Emergency' | 'Constitutional Bodies';
    explanation: string;
}

export const ARTICLE_MEMORY_DATA: ArticleMemoryItem[] = [
    // FUNDAMENTAL RIGHTS
    {
        id: "art-14",
        article: "Article 14",
        provision: "Equality before Law",
        mnemonic: "E-14 (Equality for All)",
        visualHint: "Scale",
        category: "Fundamental Rights",
        explanation: "The State shall not deny to any person equality before the law or the equal protection of the laws."
    },
    {
        id: "art-17",
        article: "Article 17",
        provision: "Abolition of Untouchability",
        mnemonic: "1-7 = Un-Touch (Rhyme)",
        visualHint: "HandBan",
        category: "Fundamental Rights",
        explanation: "Untouchability is abolished and its practice in any form is forbidden."
    },
    {
        id: "art-19",
        article: "Article 19",
        provision: "Six Freedoms",
        mnemonic: "SAM ROPE (Speech, Assembly, Metro/Move, Reside, Occupation, Profession - wait, property is gone!)",
        visualHint: "Wind",
        category: "Fundamental Rights",
        explanation: "Protection of certain rights regarding freedom of speech etc."
    },
    {
        id: "art-21",
        article: "Article 21",
        provision: "Protection of Life and Personal Liberty",
        mnemonic: "21 gun salute for LIFE",
        visualHint: "Heart",
        category: "Fundamental Rights",
        explanation: "No person shall be deprived of his life or personal liberty except according to procedure established by law."
    },
    {
        id: "art-32",
        article: "Article 32",
        provision: "Right to Constitutional Remedies",
        mnemonic: "Heart and Soul (Ambedkar)",
        visualHint: "Shield",
        category: "Fundamental Rights",
        explanation: "Remedies for enforcement of rights conferred by this Part (Writs)."
    },

    // DPSP
    {
        id: "art-40",
        article: "Article 40",
        provision: "Organization of Village Panchayats",
        mnemonic: "4-0 = 40 Villagers sitting together",
        visualHint: "Users",
        category: "DPSP",
        explanation: "The State shall take steps to organize village panchayats."
    },
    {
        id: "art-44",
        article: "Article 44",
        provision: "Uniform Civil Code",
        mnemonic: "4 = 4 (Uniform Digits)",
        visualHint: "Scale",
        category: "DPSP",
        explanation: "The State shall endeavor to secure for the citizens a uniform civil code throughout the territory of India."
    },
    {
        id: "art-51a",
        article: "Article 51A",
        provision: "Fundamental Duties",
        mnemonic: "51A -> My Duties",
        visualHint: "Salute",
        category: "DPSP",
        explanation: "It shall be the duty of every citizen of India..."
    },

    // UNION EXECUTIVE
    {
        id: "art-52",
        article: "Article 52",
        provision: "The President of India",
        mnemonic: "52 -> 5 (Pandavas) -> Head of Family -> President",
        visualHint: "Crown",
        category: "Union Executive",
        explanation: "There shall be a President of India."
    },
    {
        id: "art-61",
        article: "Article 61",
        provision: "Impeachment of President",
        mnemonic: "6-1 -> Kick ONE out (Impeachment)",
        visualHint: "Gavel",
        category: "Union Executive",
        explanation: "Procedure for impeachment of the President."
    },
    {
        id: "art-72",
        article: "Article 72",
        provision: "Pardoning Power of President",
        mnemonic: "72 -> Saath Do (Forgive me)",
        visualHint: "Dove",
        category: "Union Executive",
        explanation: "Power of President to grant pardons, etc., and to suspend, remit or commute sentences."
    },
    {
        id: "art-76",
        article: "Article 76",
        provision: "Attorney General of India",
        mnemonic: "7-6 -> Top Lawyer Fixes Sixes",
        visualHint: "Briefcase",
        category: "Union Executive",
        explanation: "President shall appoint a person who is qualified to be appointed a Judge of the Supreme Court to be Attorney General."
    },

    // PARLIAMENT
    {
        id: "art-108",
        article: "Article 108",
        provision: "Joint Sitting of Parliament",
        mnemonic: "108 -> Ambulance (Emergency Meeting/Joint Sitting)",
        visualHint: "Users",
        category: "Parliament",
        explanation: "Joint sitting of both Houses in certain cases."
    },
    {
        id: "art-110",
        article: "Article 110",
        provision: "Definition of Money Bill",
        mnemonic: "110 -> Money Money (Ten Rupees)",
        visualHint: "Banknote",
        category: "Parliament",
        explanation: "Definition of 'Money Bill'."
    },
    {
        id: "art-112",
        article: "Article 112",
        provision: "Annual Financial Statement (Budget)",
        mnemonic: "1-1-2 -> One for One and Two (Yearly Plan)",
        visualHint: "FileChart",
        category: "Parliament",
        explanation: "President shall in respect of every financial year cause to be laid before both the Houses... Annual Financial Statement."
    },

    // EMERGENCY
    {
        id: "art-352",
        article: "Article 352",
        provision: "National Emergency",
        mnemonic: "3-5-2 -> War is due (Emergency)",
        visualHint: "Siren",
        category: "Emergency",
        explanation: "Proclamation of Emergency (National)."
    },
    {
        id: "art-356",
        article: "Article 356",
        provision: "President's Rule (State Emergency)",
        mnemonic: "352 + 4 = 356 (State Failure)",
        visualHint: "BuildingAlert",
        category: "Emergency",
        explanation: "Provisions in case of failure of constitutional machinery in States."
    },
    {
        id: "art-360",
        article: "Article 360",
        provision: "Financial Emergency",
        mnemonic: "360 -> Circle -> 0 Money -> Financial Emergency",
        visualHint: "WalletOff",
        category: "Emergency",
        explanation: "Provisions as to financial emergency."
    },

    // CONSTITUTIONAL BODIES
    {
        id: "art-280",
        article: "Article 280",
        provision: "Finance Commission",
        mnemonic: "280 -> Two-Eight-Zero -> Money Hero",
        visualHint: "Coins",
        category: "Constitutional Bodies",
        explanation: "President shall... constitute a Finance Commission."
    },
    {
        id: "art-324",
        article: "Article 324",
        provision: "Election Commission",
        mnemonic: "3-2-4 -> Free to Vote",
        visualHint: "VoteBox",
        category: "Constitutional Bodies",
        explanation: "Superintendence, direction and control of elections to be vested in an Election Commission."
    }
];
