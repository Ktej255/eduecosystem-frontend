import { NextRequest, NextResponse } from 'next/server';

const MODE_INSTRUCTIONS: Record<string, string> = {
  pause:
    'You are pausing a student mid-video to check understanding. Engage in a focused 2–3 turn dialogue based on the pause prompt. Be encouraging.',
  recall:
    'You are conducting a Day 2 recall session. Test the student\'s memory of concepts from the previous session. Ask one follow-up question after their answer.',
  doubt:
    'You are an always-available AI tutor. The student has a doubt. Answer clearly and concisely under 120 words, then ask if they need clarification.',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, pause_prompt, history = [], mode = 'pause' } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const systemPrompt = `You are an expert Environment studies tutor for UPSC exam preparation. 
Teaching style: Clear, structured, encouraging, and Socratic.
Current mode: ${mode}
${MODE_INSTRUCTIONS[mode] || ''}
${pause_prompt ? `Pause prompt: ${pause_prompt}` : ''}
Keep responses under 150 words unless the student asks for more detail.`;

    const contents = [];

    // Build conversation history
    for (const msg of history) {
      contents.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      });
    }

    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            role: 'user',
            parts: [{ text: systemPrompt }],
          },
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 400,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Gemini error:', err);
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Guided AI conversation error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
