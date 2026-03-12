// Topic 1: Historical Evolution
// Regulating Act 1773 to Independence Act 1947

import { PolityTopic } from '../polity-types';

export const topic01HistoricalEvolution: PolityTopic = {
    id: 1,
    module: 'I',
    title: 'Historical Evolution',
    syllabusTag: 'Module I: Constitutional Framework',

    staticFocus: 'Regulating Act 1773 to Independence Act 1947 (Focus: 1919 & 1935 Acts)',

    coreArticles: [], // Historical topic - no specific articles

    keyConcepts: [
        // 1. Regulating Act of 1773
        {
            term: 'Regulating Act of 1773: Significance',
            definition: 'First step by British Government to control and regulate EIC affairs. Laid foundations of central administration in India.',
        },
        {
            term: 'Regulating Act 1773: Governor-General',
            definition: 'Designated Governor of Bengal as \'Governor-General of Bengal\' (GGB). First GGB: Lord Warren Hastings.',
        },
        {
            term: 'Regulating Act 1773: Centralization',
            definition: 'Governors of Bombay and Madras presidencies made subordinate to Governor-General of Bengal.',
        },
        {
            term: 'Regulating Act 1773: Judiciary',
            definition: 'Established Supreme Court at Calcutta (1774) with 1 Chief Justice and 3 other judges.',
        },

        // 2. Amending Act of 1781 (Act of Settlement)
        {
            term: 'Amending Act of 1781: Purpose',
            definition: 'To rectify defects of Regulating Act 1773. Known as Act of Settlement.',
        },
        {
            term: 'Amending Act 1781: Jurisdiction Limits',
            definition: 'Exempted Governor-General, Council, and company servants from Supreme Court jurisdiction for official actions.',
        },
        {
            term: 'Amending Act 1781: Revenue',
            definition: 'Excluded revenue matters and collection from Supreme Court jurisdiction.',
        },
        {
            term: 'Amending Act 1781: Personal Law',
            definition: 'Required court to administer personal law of defendants (Hindu law for Hindus, etc.).',
        },
        {
            term: 'Amending Act 1781: Appeals',
            definition: 'Appeals from Provincial Courts went to Governor-General-in-Council, NOT Supreme Court.',
        },

        // 3. Pitt’s India Act of 1784
        {
            term: 'Pitt’s India Act 1784: Dual Government',
            definition: 'Established Dual Government system: Court of Directors (Commercial) and Board of Control (Political).',
        },
        {
            term: 'Pitt’s India Act 1784: Board of Control',
            definition: 'New body to manage Political Affairs. Supervised all civil/military govt and revenues.',
        },
        {
            term: 'Pitt’s India Act 1784: Significance',
            definition: 'Company territories called "British Possessions in India" for first time. British Govt given supreme control.',
        },

        // 4. Act of 1786
        {
            term: 'Act of 1786: Context',
            definition: 'Enacted to fulfill Lord Cornwallis demands to accept Governor-General post.',
        },
        {
            term: 'Act of 1786: Provisions',
            definition: '1. Power to override council in special cases. 2. He became Commander-in-Chief.',
        },

        // 5. Charter Act of 1793
        {
            term: 'Charter Act of 1793: Power Extension',
            definition: 'Extended overriding power of Cornwallis to all future Governor-Generals and Governors.',
        },
        {
            term: 'Charter Act of 1793: Trade',
            definition: 'Extended EIC trade monopoly in India for another 20 years.',
        },
        {
            term: 'Charter Act of 1793: BOC Payment',
            definition: 'Members of Board of Control and staff to be paid out of Indian revenues.',
        },

        // 6. Charter Act of 1813
        {
            term: 'Charter Act 1813: Monopoly',
            definition: 'Ended EIC trade monopoly in India (except tea and trade with China). Trade open to all British subjects.',
        },
        {
            term: 'Charter Act 1813: Sovereignty',
            definition: 'Asserted sovereignty of British Crown over Company territories.',
        },
        {
            term: 'Charter Act 1813: Religion & Education',
            definition: 'Allowed Christian missionaries. Provided for western education. Allocated 1 Lakh rupees for education.',
        },
        {
            term: 'Charter Act 1813: Taxation',
            definition: 'Authorized Local Governments to impose taxes on persons.',
        },

        // 7. Charter Act of 1833
        {
            term: 'Charter Act 1833: Significance',
            definition: 'Final step towards Centralization in British India.',
        },
        {
            term: 'Charter Act 1833: Governor-General',
            definition: 'Governor-General of Bengal became Governor-General of India (GGI). Vested with all civil/military powers. First GGI: Lord William Bentinck.',
        },
        {
            term: 'Charter Act 1833: Legislative Powers',
            definition: 'Deprived Governors of Bombay/Madras of legislative powers. Laws called "Acts" (previously "Regulations").',
        },
        {
            term: 'Charter Act 1833: Commercial Body',
            definition: 'EIC ended as commercial body, became purely administrative.',
        },
        {
            term: 'Charter Act 1833: Law Member',
            definition: 'Introduced Law Member (Macaulay) to Governor-General\'s Council.',
        },

        // 8. Charter Act of 1853
        {
            term: 'Charter Act 1853: Separation of Powers',
            definition: 'Separated legislative and executive functions of GG Council for first time.',
        },
        {
            term: 'Charter Act 1853: Legislative Council',
            definition: 'Added 6 legislative councilors to create Indian (Central) Legislative Council (mini-parliament).',
        },
        {
            term: 'Charter Act 1853: Civil Services',
            definition: 'Introduced open competition for civil services. Covenanted service open to Indians (Macaulay Committee).',
        },
        {
            term: 'Charter Act 1853: Local Representation',
            definition: 'Introduced local representation in Indian Legislative Council for first time.',
        },

        // 9. Government of India Act of 1858
        {
            term: 'GOI Act 1858: Title',
            definition: 'Known as \'Act for the Good Government of India\'.',
        },
        {
            term: 'GOI Act 1858: Power Transfer',
            definition: 'Rule of Company replaced by Rule of Crown.',
        },
        {
            term: 'GOI Act 1858: Viceroy',
            definition: 'GG of India designated as Viceroy of India (Crown representative). First Viceroy: Lord Canning.',
        },
        {
            term: 'GOI Act 1858: Abolition',
            definition: 'Abolished Board of Control and Court of Directors (Double Govt ended). Ended Doctrine of Lapse.',
        },
        {
            term: 'GOI Act 1858: Secretary of State',
            definition: 'Established Secretary of State for India (British cabinet member) with 15-member Council.',
        },

        // 10. Indian Councils Act of 1861
        {
            term: 'Indian Councils Act 1861: Decentralization',
            definition: 'Restored legislative powers to Bombay/Madras (reversing 1833 centralization).',
        },
        {
            term: 'Indian Councils Act 1861: Representation',
            definition: 'Associated Indians with law-making. 3 Indians nominated: Raja of Banaras, Maharaja of Patiala, Sir Dinkar Rao.',
        },
        {
            term: 'Indian Councils Act 1861: Ordinances',
            definition: 'Empowered Viceroy to issue ordinances during emergency.',
        },
        {
            term: 'Indian Councils Act 1861: Portfolio System',
            definition: 'Gave statutory recognition to Portfolio System (introduced by Lord Canning).',
        },

        // 11. Indian Councils Act of 1892
        {
            term: 'Indian Councils Act 1892: Elections',
            definition: 'Marked beginning of representative system (indirect elections).',
        },
        {
            term: 'Indian Councils Act 1892: Functions',
            definition: 'Legislative councils given power to discuss budget and address questions to Executive.',
        },
        {
            term: 'Indian Councils Act 1892: Nomination',
            definition: 'Non-official members nominated on recommendation of provincial councils/Bengal Chamber.',
        },

        // 12. Indian Councils Act of 1909 (Morley-Minto)
        {
            term: 'Act of 1909: Direct Elections',
            definition: 'Introduced element of elections to Legislative Councils for first time.',
        },
        {
            term: 'Act of 1909: Separate Electorates',
            definition: 'Introduced communal representation for Muslims (Separate Electorate).',
        },
        {
            term: 'Act of 1909: Executive Council',
            definition: 'Indians associated with Executive Councils. Satyendra Prasad Sinha first member (Law Member).',
        },

        // 13. Government of India Act of 1919 (Montagu-Chelmsford)
        {
            term: 'Act of 1919: Objective',
            definition: 'Aimed for "Responsible Government".',
        },
        {
            term: 'Act of 1919: Diarchy',
            definition: 'Introduced Diarchy in provinces. Transferred (Governor+Ministers) vs Reserved (Governor+Council) subjects.',
        },
        {
            term: 'Act of 1919: Bicameralism',
            definition: 'Introduced bicameralism (two houses) at Centre for first time.',
        },
        {
            term: 'Act of 1919: Communal Rep',
            definition: 'Extended separate electorates to Sikhs, Indian Christians, Anglo-Indians, Europeans.',
        },
        {
            term: 'Act of 1919: High Commissioner',
            definition: 'Created office of High Commissioner for India in London.',
        },

        // 14. Government of India Act of 1935
        {
            term: 'Act of 1935: All-India Federation',
            definition: 'Proposed Federation of provinces + princely states (never came into being).',
        },
        {
            term: 'Act of 1935: Provincial Autonomy',
            definition: 'Abolished dyarchy in provinces, introduced Provincial Autonomy.',
        },
        {
            term: 'Act of 1935: Residuary Powers',
            definition: 'Vested in Viceroy (Governor-General).',
        },
        {
            term: 'Act of 1935: Communal Rep Extension',
            definition: 'Extended separate electorates to Depressed Classes (SC), Women, and Labor.',
        },
        {
            term: 'Act of 1935: Institutions',
            definition: 'Established RBI, Federal Court (1937), Federal/Provincial Public Service Commissions.',
        },

        // 15. Indian Independence Act of 1947
        {
            term: 'Act of 1947: Sovereignty',
            definition: 'Declared India independent/sovereign from Aug 15, 1947.',
        },
        {
            term: 'Act of 1947: Partition',
            definition: 'Created India and Pakistan dominions with right to secede from Commonwealth.',
        },
        {
            term: 'Act of 1947: Constituent Assembly',
            definition: 'Empowered CAs to frame constitution and repeal any British Act.',
        },
        {
            term: 'Act of 1947: Abolition',
            definition: 'Abolished offices of Secretary of State and Viceroy.',
        },
        {
            term: 'Act of 1947: Princely States',
            definition: 'Granted freedom to join India/Pakistan or remain independent.',
        },
    ],

    prelimsPointers: [
        // 1773
        { fact: 'Regulating Act 1773: First step to regulate EIC affairs', category: 'Act' },
        { fact: 'First Governor-General of Bengal: Lord Warren Hastings', category: 'Person' },
        { fact: 'Supreme Court established at Calcutta (1774) by 1773 Act', category: 'Act' },
        { fact: '1773 Act made Bombay/Madras governors subordinate to Bengal', category: 'Act' },

        // 1781
        { fact: 'Amending Act 1781 known as Act of Settlement', category: 'Act' },
        { fact: '1781 Act exempted GG & Council from SC jurisdiction', category: 'Act' },
        { fact: 'Revenue matters excluded from Supreme Court by 1781 Act', category: 'Act' },

        // 1784
        { fact: 'Pitt\'s India Act 1784 established Double Government', category: 'Act' },
        { fact: 'Board of Control created by 1784 Act for Political Affairs', category: 'Body' },
        { fact: 'Court of Directors managed Commercial Affairs (1784)', category: 'Body' },
        { fact: 'Company territories called "British Possessions" first in 1784', category: 'Fact' },

        // 1786
        { fact: 'Act of 1786 enacted for Lord Cornwallis demands', category: 'Act' },
        { fact: 'Cornwallis given power to override council', category: 'Person' },
        { fact: 'Cornwallis became Commander-in-Chief', category: 'Person' },

        // 1793
        { fact: 'Charter Act 1793 extended monopoly for 20 years', category: 'Act' },
        { fact: 'BOC members paid out of Indian revenues (1793)', category: 'Act' },

        // 1813
        { fact: 'Charter Act 1813 ended EIC monopoly (except tea/China)', category: 'Act' },
        { fact: 'Christian missionaries allowed by 1813 Act', category: 'Act' },
        { fact: '1 Lakh rupees for education allocated by 1813 Act', category: 'Act' },
        { fact: 'Local Govts authorized to impose taxes (1813)', category: 'Act' },

        // 1833
        { fact: 'Charter Act 1833: Final step towards Centralization', category: 'Act' },
        { fact: 'First Governor-General of India: Lord William Bentinck', category: 'Person' },
        { fact: '1833 Act ended EIC as commercial body', category: 'Act' },
        { fact: 'Law Member (Macaulay) added to Council (1833)', category: 'Person' },
        { fact: 'Laws called "Acts" instead of "Regulations" (1833)', category: 'Fact' },

        // 1853
        { fact: 'Charter Act 1853 separated Legislative & Executive functions', category: 'Act' },
        { fact: 'Indian (Central) Legislative Council created (1853)', category: 'Body' },
        { fact: 'Open competition for Civil Services introduced (1853)', category: 'Act' },
        { fact: 'Macaulay Committee associated with Civil Services', category: 'Committee' },
        { fact: 'Local representation introduced in Legislative Council (1853)', category: 'Act' },

        // 1858
        { fact: 'GOI Act 1858 known as "Act for Good Government"', category: 'Act' },
        { fact: 'First Viceroy of India: Lord Canning', category: 'Person' },
        { fact: '1858 Act abolished Double Govt (BOC/COD)', category: 'Act' },
        { fact: 'Secretary of State for India office created (1858)', category: 'Body' },
        { fact: 'Doctrine of Lapse ended by 1858 Act', category: 'Act' },

        // 1861
        { fact: 'Indian Councils Act 1861 initiated Decentralization', category: 'Act' },
        { fact: 'Portfolio System statutory recognition: 1861 Act', category: 'Act' },
        { fact: 'Ordinance making power given to Viceroy (1861)', category: 'Act' },
        { fact: '3 Indians nominated to Council (1861): Banaras, Patiala, Dinkar Rao', category: 'Person' },

        // 1892
        { fact: 'Act of 1892 introduced indirect elections', category: 'Act' },
        { fact: 'Legislative Councils got power to discuss Budget (1892)', category: 'Act' },

        // 1909
        { fact: 'Act of 1909 known as Morley-Minto Reforms', category: 'Act' },
        { fact: 'Separate Electorate for Muslims introduced (1909)', category: 'Act' },
        { fact: 'First Indian in Viceroy Executive Council: SP Sinha', category: 'Person' },

        // 1919
        { fact: 'Act of 1919 known as Montagu-Chelmsford Reforms', category: 'Act' },
        { fact: 'Dyarchy introduced in Provinces (1919)', category: 'Act' },
        { fact: 'Bicameralism introduced at Centre (1919)', category: 'Act' },
        { fact: 'Separate electorates extended to Sikhs/Christians (1919)', category: 'Act' },
        { fact: 'High Commissioner for India office created (1919)', category: 'Body' },

        // 1935
        { fact: 'GOI Act 1935 proposed All-India Federation', category: 'Act' },
        { fact: 'Dyarchy abolished in provinces, Provincial Autonomy introduced (1935)', category: 'Act' },
        { fact: 'Residuary Powers vested in Viceroy (1935)', category: 'Act' },
        { fact: 'RBI and Federal Court established under 1935 Act', category: 'Body' },
        { fact: 'Separate electorates extended to SC/Women/Labor (1935)', category: 'Act' },

        // 1947
        { fact: 'Indian Independence Act 1947 declared India sovereign', category: 'Act' },
        { fact: 'Partition into India and Pakistan dominions (1947)', category: 'Act' },
        { fact: 'Offices of Viceroy and Secretary of State abolished (1947)', category: 'Act' },
        { fact: 'Princely States given freedom to join or remain independent (1947)', category: 'Act' },
    ],

    currentAffairs: [
        {
            id: 'ca-01-01',
            headline: '75th Anniversary of Constitution Adoption (Nov 26, 2024)',
            date: 'Nov 2024',
            source: 'PIB',
            teachingHook: 'Relate to 1947 Act empowering CA to frame constitution.',
        },
        {
            id: 'ca-01-02',
            headline: 'Samvidhan Sadan (Old Parliament)',
            date: '2024',
            source: 'Sansad TV',
            teachingHook: 'Relate to 1919 Act (Central Legislative Assembly) and Constituent Assembly venue.',
        }
    ],

    priority: 'High',
    lastUpdated: 'Jan 2026',
};
