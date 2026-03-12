// Topic 45: Pressure Groups & Civil Society
// Role in Democracy, Types, Examples

import { PolityTopic } from '../polity-types';

export const topic45PressureGroups: PolityTopic = {
    id: 45,
    module: 'IX',
    title: 'Pressure Groups & Civil Society',
    syllabusTag: 'Module IX: Governance',

    staticFocus: 'Role in Democracy, Types of Pressure Groups, & Civil Society',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Pressure Groups',
            definition: 'Organized groups that seek to influence government policy without seeking political power. Also called interest groups or lobby groups. Use persuasion, lobbying, agitation.',
        },
        {
            term: 'Types of Pressure Groups',
            definition: 'Business Groups (FICCI, CII, ASSOCHAM). Trade Unions (INTUC, AITUC, BMS). Agrarian Groups (BKU, Kisan Sabha). Professional Groups (BCI, IMA). Caste/Community Groups. Religious Groups. NGOs.',
        },
        {
            term: 'Techniques of Pressure Groups',
            definition: 'Lobbying legislators. Media campaigns. Public protests. Litigation (PIL). Funding political parties. Providing expertise. Strike/Bandh. Gherao.',
        },
        {
            term: 'Civil Society',
            definition: 'Sphere of institutions, organizations, individuals between family and state. Includes: NGOs, voluntary organizations, religious institutions, professional associations, media. Promotes public interest, checks state power.',
        },
        {
            term: 'NGOs in India',
            definition: 'Registered under Societies Registration Act 1860, Trust Acts, Companies Act Section 8. FCRA regulates foreign funding. NITI Aayog Darpan portal for registration. Estimated 3+ million NGOs in India.',
        },
        {
            term: 'Issues with Pressure Groups',
            definition: 'May represent narrow interests. Can distort policy. Lack of accountability. Foreign funding concerns (FCRA). Unequal access (rich vs poor groups). May undermine democratic process.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-45-01',
            headline: 'FCRA Amendments & NGO Restrictions',
            date: '2020-24',
            source: 'MHA / SC',
            teachingHook: 'FCRA amendments (2020) restricted foreign funding to NGOs. Many organizations including Amnesty India faced action. SC examined proportionality of restrictions. Discuss the balance between national security and civil society freedom.',
        },
    ],

    prelimsPointers: [
        { fact: 'Pressure Groups: Influence policy without seeking power', category: 'Year', highlight: true },
        { fact: 'FICCI, CII, ASSOCHAM: Business associations', category: 'Year' },
        { fact: 'NGOs: Register under Societies Act 1860, Trust Acts, Companies Sec 8', category: 'Act' },
        { fact: 'FCRA 2010: Regulates foreign contributions to NGOs', category: 'Act', highlight: true },
        { fact: 'NITI Aayog Darpan: NGO registration portal', category: 'Year' },
        { fact: '3+ million estimated NGOs in India', category: 'Year' },
    ],

    priority: 'Low',
    lastUpdated: 'Dec 2025',
};
