import { NextResponse } from 'next/server';

// UPSC Polity chapter index — sent as context to Gemini
const POLITY_CHAPTER_INDEX = `
Indian Polity (UPSC Syllabus) — 95 Topics across 11 Parts:
Part I (Constitutional Framework): Historical Background, Making of the Constitution, Concept of Constitution, Salient Features, Preamble, Union and Territory, Citizenship, Fundamental Rights, DPSP, Fundamental Duties, Amendment, Basic Structure.
Part II (System of Government): Parliamentary System, Federal System, Centre-State Relations, Inter-State Relations, Emergency Provisions.
Part III (Central Government): President, Vice-President, Prime Minister, Council of Ministers, Cabinet Committees, Parliament, Parliamentary Committees, Supreme Court, Judicial Review, Judicial Activism, PIL.
Part IV (State Government): Governor, Chief Minister, State Council of Ministers, State Legislature, High Court, Subordinate Courts, Tribunals, Consumer Commissions, Lok Adalats.
Part V (Local Government): Panchayati Raj (Art 243, 73rd Amendment), Municipalities (Art 243P, 74th Amendment).
Part VI (UTs & Special Areas): Union Territories (Art 239-240), Scheduled & Tribal Areas (5th & 6th Schedules).
Part VII (Constitutional Bodies): Election Commission (Art 324), UPSC (Art 315), Finance Commission (Art 280), GST Council (Art 279A), NCSC (Art 338), NCST (Art 338A), CAG (Art 148), Attorney General (Art 76).
Part VIII (Non-Constitutional Bodies): NITI Aayog, NHRC, NCW, NCPCR, NCM, CIC, CVC, CBI, Lokpal, NIA, NDMA.
Part IX (Other Dimensions): Co-operative Societies, Official Language (Art 343-351, 8th Schedule), Public Services (Art 308-323).
Part X (Political Dynamics): Political Parties, Elections, Anti-Defection Law (10th Schedule), Electoral Reforms, Pressure Groups, Coalition Government.
Part XI (Working of Constitution): NCRWC, Landmark Judgements (Kesavananda, SR Bommai, Maneka Gandhi), Art 21 Expansions, Important Doctrines, World Constitutions.

Most tested topics (PYQ 2011-2024): Fundamental Rights, Parliament, Judiciary, Emergency Provisions, Constitutional Bodies, Federalism, Amendments, DPSP, Local Government, Governor.
`;

const HISTORY_CHAPTER_INDEX = `
UPSC History Syllabus — 86 Chapters:
Ancient History (IDs a1-a27): Prehistoric Times, Indus Valley Civilization, Vedic Age, Buddhism, Jainism, Mauryan Empire, Post-Mauryan, Gupta Empire, Sangam Age...
Medieval History (IDs m1-m20): Early Medieval India, Delhi Sultanate, Vijayanagara Empire, Bhakti & Sufi Movements, Mughal Empire, Marathas...
Modern History (IDs mod1-mod39): Advent of Europeans, British Expansion, Revolt of 1857, INC Formation, Swadeshi Movement, Gandhian Era, INA, Partition...

Most tested topics: Buddhism/Jainism, Indus Valley, Mauryan art, Bhakti/Sufi movements, Mughal administration, British socio-religious reforms, Gandhian era, 1857 revolt.
`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { query, mode = 'search', subject = 'polity' } = body;

        if (!query?.trim()) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
        }

        const isHistory = subject === 'history';
        const chapterIndex = isHistory ? HISTORY_CHAPTER_INDEX : POLITY_CHAPTER_INDEX;
        const persona = isHistory ? "Romila Thapar & Bipan Chandra (History Experts)" : "Dr. B.R. Ambedkar";
        const jsonIdFormat = isHistory ? '"<string ID e.g., a1, m5, mod12>"' : '<number 1-95>';
        const relatedIdFormat = isHistory ? '["<id1>", "<id2>"]' : '[<id1>, <id2>]';
        
        const systemPrompt = mode === 'search'
            ? `You are a UPSC ${isHistory ? 'History' : 'Polity'} expert and search engine for an educational platform. 
A student is searching for: "${query}"

Using the chapter index below, find the most relevant topic(s) and return EXACTLY this JSON (no markdown, no extra text):
{
  "topicId": ${jsonIdFormat},
  "topicTitle": "<exact topic title>",
  "answer": "<2-3 sentence direct answer to the query>",
  "keyArticles": ${isHistory ? '["Key Event 1", "Key Event 2"]' : '["Art XX", "Art YY"]'},
  "upscTip": "<one UPSC exam tip>",
  "relatedTopicIds": ${relatedIdFormat}
}

${chapterIndex}`
            : `You are ${persona}, AI Tutor for UPSC aspirants. Answer this question about Indian ${isHistory ? 'History' : 'Polity'} concisely: "${query}"

${chapterIndex}`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: query }] }],
                    systemInstruction: { role: 'user', parts: [{ text: systemPrompt }] },
                    generationConfig: {
                        temperature: 0.2,
                        maxOutputTokens: 600,
                    },
                }),
            }
        );

        if (!response.ok) {
            const err = await response.text();
            console.error('Gemini Brain Error:', err);
            return NextResponse.json({ error: 'AI search failed' }, { status: response.status });
        }

        const data = await response.json();
        const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Try to parse JSON response for search mode
        if (mode === 'search') {
            try {
                const jsonMatch = raw.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const parsed = JSON.parse(jsonMatch[0]);
                    return NextResponse.json({ result: parsed, raw });
                }
            } catch { }
        }

        return NextResponse.json({ result: null, raw });
    } catch (err) {
        console.error('Student Brain Error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
