export interface CATopic {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  sourceUrl: string;
  relatedChapter: string;
}

export const currentAffairsData: CATopic[] = [
  {
    id: "ca-01",
    title: "Electoral Bonds Verdict (Feb 2024)",
    summary: "The Supreme Court struck down the Electoral Bonds scheme as unconstitutional, citing it as an infringement on the voters' right to information under Article 19(1)(a).",
    keyPoints: [
      "SBI ordered to disclose all donation data to the Election Commission.",
      "The court rejected the government's argument of donor anonymity for curbing black money.",
      "Considered the most significant polity judgment of the decade.",
    ],
    sourceUrl: "https://www.livelaw.in/top-stories/electoral-bonds-case-supreme-court-judgment-live-updates-249534",
    relatedChapter: "Elections",
  },
  {
    id: "ca-02",
    title: "SC/ST Sub-classification (Aug 2024)",
    summary: "A seven-judge constitution bench of the Supreme Court allowed states to sub-classify Scheduled Castes and Scheduled Tribes for providing internal reservation.",
    keyPoints: [
      "Overruled the 2004 E.V. Chinnaiah judgment.",
      "States must provide empirical data to justify sub-classification.",
      "The 'Creamy Layer' principle's applicability to SC/ST reservation is now a major debate point.",
    ],
    sourceUrl: "https://www.thehindu.com/news/national/supreme-court-allows-states-to-sub-classify-sc-st-for-quota/article68471181.ece",
    relatedChapter: "Federal Structure",
  },
  {
    id: "ca-03",
    title: "CEC and Other ECs Appointment Act, 2023",
    summary: "The new law changed the selection committee for the Chief Election Commissioner and other Election Commissioners to include the PM, a Union Minister, and the Leader of Opposition.",
    keyPoints: [
      "The Chief Justice of India (CJI) was removed from the selection committee proposed by the SC earlier.",
      "Concerns raised over the independence of the Election Commission under the new appointments process.",
      "The law was challenged in the Supreme Court, but the court refused to stay the appointments.",
    ],
    sourceUrl: "https://indianexpress.com/article/explained/explained-politics/cec-appointment-bill-passed-parliament-9076046/",
    relatedChapter: "Constitutional Bodies",
  },
  {
    id: "ca-04",
    title: "129th Constitutional Amendment Bill (ONOE)",
    summary: "The One Nation, One Election (ONOE) bill was introduced to amend Articles 83 and 172 to synchronize Lok Sabha and State Assembly elections.",
    keyPoints: [
      "Recommended by the High-Level Committee headed by Former President Ram Nath Kovind.",
      "Aims to reduce election expenditure and governance paralysis during model code periods.",
      "Requires ratification by half of the states for certain amendments.",
    ],
    sourceUrl: "https://pib.gov.in/PressNoteDetails.aspx?NoteId=151834",
    relatedChapter: "Elections",
  },
  {
    id: "ca-05",
    title: "Bulldozer Justice Guidelines (Nov 2024)",
    summary: "The Supreme Court laid down pan-India guidelines against punitive demolitions of properties, stating the executive cannot replace the judiciary.",
    keyPoints: [
      "Prior notice of at least 15 days must be given before any demolition.",
      "Demolition cannot be used as a penalty for alleged crimes without due process.",
      "Violations of these guidelines can lead to contempt of court and personal liability for officers.",
    ],
    sourceUrl: "https://www.livelaw.in/top-stories/bulldozer-justice-supreme-court-lays-down-guidelines-for-demolition-of-properties-275143",
    relatedChapter: "Fundamental Rights",
  },
];
