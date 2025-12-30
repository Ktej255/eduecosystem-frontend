// Topic 19: Vice-President
// Election, Removal, Role as Rajya Sabha Chairman

import { PolityTopic } from '../polity-types';

export const topic19VicePresident: PolityTopic = {
    id: 19,
    module: 'C',
    title: 'Vice-President',
    syllabusTag: 'Module C: The Executive',

    staticFocus: 'Election, Removal, & Role as Rajya Sabha Chairman',

    coreArticles: [
        { number: '63', title: 'Vice-President of India', description: 'There shall be a Vice-President of India.' },
        { number: '64', title: 'VP as Ex-Officio Chairman of RS', description: 'VP is ex-officio Chairman of the Council of States (Rajya Sabha).' },
        { number: '65', title: 'VP Acting as President', description: 'VP acts as President when office vacant or President absent/unable. Exercises all powers of President.' },
        { number: '66', title: 'Election of VP', description: 'Electoral College: Members of BOTH Houses of Parliament (elected + nominated). Secret ballot, proportional representation.' },
        { number: '67', title: 'Term & Removal', description: '5 years. Can resign to President. Removal by RS resolution passed by majority, agreed by LS. No ground specified.' },
    ],

    keyConcepts: [
        {
            term: 'VP\'s Electoral College',
            definition: 'Different from President. Includes: Elected MPs + Nominated MPs of both Houses. State legislators NOT included. Only Parliament members vote.',
        },
        {
            term: 'VP\'s Qualifications (Art 66)',
            definition: 'Citizen of India. 35 years of age. Qualified for Rajya Sabha membership. Not hold office of profit.',
        },
        {
            term: 'Removal of VP (Art 67)',
            definition: 'Resolution by RS passed by MAJORITY of all members (effective majority). LS must agree. No ground specified (unlike President\'s impeachment). 14 days notice required.',
        },
        {
            term: 'Role as RS Chairman',
            definition: 'Presides over RS proceedings. Casting vote in case of tie. No vote otherwise (similar to Speaker). Can be removed as Chairman by RS resolution. Cannot preside when acting as President.',
        },
        {
            term: 'VP Acting as President',
            definition: 'When President\'s office vacant (death, resignation, removal, etc.). Gets President\'s salary and powers. Max 6 months for new election. Cannot sign bills or address Parliament as "Vice-President". Draws President\'s salary.',
        },
        {
            term: 'Deputy Chairman of RS',
            definition: 'Elected from among RS members. Presides when Chairman absent. Can be removed by RS resolution. Not ex-officio like Chairman.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-19-01',
            headline: 'VP Dhankhar vs Judiciary/Legislature',
            date: '2024',
            source: 'Sansad TV / Indian Express',
            teachingHook: 'The VP (as RS Chairman) frequently criticized the "Basic Structure Doctrine" and asserted Parliamentary Supremacy. Discuss the Chairman\'s Powers. Can the Chairman criticize Supreme Court judgments from the Chair? (Art 121 restricts discussion on conduct of Judges, but general criticism of judgments is debatable).',
            relatedArticles: ['64', '121'],
        },
    ],

    comparisonTable: {
        title: 'President vs Vice-President Election',
        columnAHeader: 'President',
        columnBHeader: 'Vice-President',
        rows: [
            { aspect: 'Electoral College', columnA: 'Elected MPs + Elected MLAs', columnB: 'All MPs (Elected + Nominated)' },
            { aspect: 'State Legislators', columnA: 'Included (MLAs)', columnB: 'Not included' },
            { aspect: 'Nominated Members', columnA: 'Excluded', columnB: 'Included' },
            { aspect: 'Removal', columnA: 'Impeachment (2/3rd both Houses)', columnB: 'RS resolution (majority) + LS consent' },
            { aspect: 'Ground for Removal', columnA: 'Violation of Constitution', columnB: 'No ground specified' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 64: VP is Ex-officio Chairman of Rajya Sabha', category: 'Article', highlight: true },
        { fact: 'VP Electoral College: All MPs (Elected + Nominated) - No MLAs', category: 'Article', highlight: true },
        { fact: 'Removal: RS resolution by effective majority, LS consent', category: 'Article' },
        { fact: 'No ground specified for VP removal (unlike President)', category: 'Article', highlight: true },
        { fact: 'VP acts as President for max 6 months (new election within)', category: 'Article' },
        { fact: 'When acting as President, VP gets President\'s salary', category: 'Article' },
        { fact: 'Chairman has casting vote, no regular vote', category: 'Article' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
