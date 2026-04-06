import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, context_context, history } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY in environment");
      return NextResponse.json(
        { error: "API key is not configured securely on server" },
        { status: 500 }
      );
    }

    // Prepare history format for Gemini API
    // Gemini roles: 'user' or 'model'
    const contents = [];
    
    // Add context to the first message if needed, or formulate system instruction
    const systemPrompt = `You are Dr. B.R. Ambedkar, the chief architect of the Indian Constitution, acting as an AI Tutor for UPSC aspirants. 
    You are highly knowledgeable about Indian Polity, the Constitution, and UPSC civil services exam patterns.
    Respond constructively, with relevant articles, case laws, and exact amendments. Help the student analyze issues from a civil servant's perspective.
    Current Context: ${context_context || 'General Indian Polity'}`;

    if (history && history.length > 0) {
      for (const msg of history) {
        contents.push({
          role: msg.role === 'ai' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        });
      }
    } else {
        // Initial context injection using system instruction
    }

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Make the native fetch call to Gemini
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: {
             role: "user", 
             parts: [{ text: systemPrompt }]
          },
          generationConfig: {
            temperature: 0.3, // accurate answers for studying
            maxOutputTokens: 1000,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", response.status, errorText);
      return NextResponse.json({ error: "Failed to generate AI response from upstream." }, { status: response.status });
    }

    const data = await response.json();
    const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am currently unable to draft an answer.";

    return NextResponse.json({
      answer: aiMessage,
      sources: [] 
    });

  } catch (error) {
    console.error("Internal Server Error in /api/ai-tutor:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
