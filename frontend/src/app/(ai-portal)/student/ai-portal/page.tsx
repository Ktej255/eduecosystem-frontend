"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/language-context";

export default function AIPortalPage() {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<{id: number, role: string, content: string, debater?: string}[]>([]);
  const [input, setInput] = useState("");
  const [topic, setTopic] = useState("Exploring UI/UX Design");
  const [isLoading, setIsLoading] = useState(false);

  // Notes Feature
  const [showNoteBox, setShowNoteBox] = useState(false);
  const [noteContent, setNoteContent] = useState("");
  const [activeNoteMsg, setActiveNoteMsg] = useState<number | null>(null);

  const saveNote = async (shareWithTeacher: boolean) => {
    const token = localStorage.getItem("token");
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
    const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;
    
    await fetch(`${apiUrl}/ai/tutor/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        content: noteContent,
        topic: topic,
        source: 'ai_portal',
        share_with_teacher: shareWithTeacher
      })
    });
    setShowNoteBox(false);
    setNoteContent("");
  };
  
  // Debate Feature
  const [debateMode, setDebateMode] = useState(false);
  const [debateResult, setDebateResult] = useState<any>(null);

  // Feedback & Thought Capture Features
  const [thoughtMode, setThoughtMode] = useState(false);
  const [capturedThought, setCapturedThought] = useState<any>(null);

  // Section 2: Welcome State
  const [showWelcome, setShowWelcome] = useState(true);

  // Scroll to bottom on new message
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setShowWelcome(false);
    
    // Add user message to UI
    const newMsg = { id: Date.now(), role: "user", content: text };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // API call to the new /portal-chat endpoint
      const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
      const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;

      if (debateMode) {
        // Debate mode
        const response = await fetch(`${apiUrl}/ai/tutor/debate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({ topic: text })
        });
        const data = await response.json();
        setDebateResult(data);
        
        // Show both perspectives as messages
        setMessages(prev => [...prev,
          { id: Date.now() + 1, role: 'assistant', content: data.perspective_a, debater: 'A' },
          { id: Date.now() + 2, role: 'assistant', content: data.perspective_b, debater: 'B' },
          { id: Date.now() + 3, role: 'system', content: data.student_prompt }
        ]);
      } else {
        const response = await fetch(`${apiUrl}/ai/tutor/portal-chat`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
           body: JSON.stringify({ 
               message: text, 
               topic: topic,
               language: language,
               history: messages.map(m => ({ role: m.role, content: m.content })) 
           }),
        });
        
        const data = await response.json();
        
        // Add AI response to UI
        setMessages((prev) => [...prev, { 
            id: Date.now() + 1, 
            role: "assistant", 
            content: data.answer || "I'm sorry, I couldn't process that. Please try again."
        }]);
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages((prev) => [...prev, { 
          id: Date.now() + 1, 
          role: "assistant", 
          content: "Sorry, I encountered an error connecting to the knowledge base. Please try again."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const formData = new FormData();
        formData.append('audio', blob, 'voice.webm');
        
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
        const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;
        
        try {
          const response = await fetch(`${apiUrl}/ai/tutor/transcribe-voice`, {
            method: 'POST',
            body: formData,
            headers: { Authorization: `Bearer ${token}` }
          });
          const data = await response.json();
          if (data.text) {
             setInput(data.text);
          }
        } catch (err) {
          console.error("Transcribe error", err);
        } finally {
          setIsLoading(false);
        }
      };
      
      recorder.start();
      setTimeout(() => {
        if (recorder.state === "recording") {
            recorder.stop();
            stream.getTracks().forEach(t => t.stop());
        }
      }, 10000);
    } catch (err) {
      console.error("Microphone access error", err);
      alert("Microphone access is required for voice input.");
    }
  };

  const handleFeedbackVoice = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
        const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;
        
        try {
          // First transcribe
          const formData = new FormData();
          formData.append('audio', blob, 'feedback.webm');
          const transcribeRes = await fetch(`${apiUrl}/ai/tutor/transcribe-voice`, {
            method: 'POST', body: formData,
            headers: { Authorization: `Bearer ${token}` }
          });
          const transcribed = await transcribeRes.json();
          
          // Then submit as feedback ticket
          const ticketRes = await fetch(`${apiUrl}/ai/tutor/feedback-ticket`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ text: transcribed.text })
          });
          const ticket = await ticketRes.json();
          
          alert(`${t("portal.feedbackSent")} Category: ${ticket.category}`);
        } catch (err) {
          console.error("Feedback error", err);
        } finally {
          setIsLoading(false);
        }
      };
      
      recorder.start();
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
          stream.getTracks().forEach(t => t.stop());
        }
      }, 15000); // 15 seconds for feedback
    } catch (err) {
      console.error("Microphone access error", err);
      alert("Microphone access is required.");
    }
  };

  const handleThoughtCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
        const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;
        
        try {
          // Transcribe first
          const formData = new FormData();
          formData.append('audio', blob, 'thought.webm');
          const transcribeRes = await fetch(`${apiUrl}/ai/tutor/transcribe-voice`, {
            method: 'POST', body: formData,
            headers: { Authorization: `Bearer ${token}` }
          });
          const transcribed = await transcribeRes.json();
          
          // Structure the thought
          const thoughtRes = await fetch(`${apiUrl}/ai/tutor/capture-thought`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              text: transcribed.text,
              topic: topic
            })
          });
          const result = await thoughtRes.json();
          setCapturedThought(result);
        } catch (err) {
          console.error("Thought capture error", err);
        } finally {
          setIsLoading(false);
        }
      };
      
      recorder.start();
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
          stream.getTracks().forEach(t => t.stop());
        }
      }, 20000); // 20 seconds to speak thought
    } catch (err) {
      console.error("Microphone access error", err);
      alert("Microphone access is required.");
    }
  };

  const speakMessage = async (text: string) => {
    const token = localStorage.getItem("token");
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
    const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;
    
    const response = await fetch(
      `${apiUrl}/ai/tutor/speak`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ text })
      }
    );
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground antialiased font-sans">
      
      {/* SECTION 1 - TOP BAR */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-card">
        <div className="flex items-center space-x-4">
          <Link href="/student/dashboard" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-sm font-medium">{user?.full_name || "Student"}</h1>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setDebateMode(!debateMode)}
            className={`text-xs px-4 py-2 rounded-full font-medium transition ${
              debateMode 
                ? 'bg-purple-600 text-white shadow shadow-purple-500/20' 
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            {debateMode ? t('portal.debateOn') : t('portal.debateMode')}
          </button>
          <div className="text-sm text-muted-foreground font-medium hidden sm:block">
            {new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          <button className="text-xs px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition">
            {t('portal.myProgress')}
          </button>
        </div>
      </header>

      {/* SECTION 3 & 2 - CONVERSATION AREA */}
      <main className="flex-1 overflow-y-auto w-full max-w-3xl mx-auto p-6 flex flex-col pt-10">
        
        {/* Welcome Screen */}
        {showWelcome && (
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-semibold tracking-tight text-center">
              {t("portal.welcome")}, {user?.full_name?.split(" ")[0] || "Student"}?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => sendMessage("Continue where I left off")} className="px-5 py-3 rounded-xl border bg-card hover:bg-accent focus:ring-2 focus:outline-none transition text-sm shadow-sm md:text-base">
                {t("portal.continue")}
              </button>
              <button onClick={() => sendMessage("Start something new")} className="px-5 py-3 rounded-xl border bg-card hover:bg-accent focus:ring-2 focus:outline-none transition text-sm shadow-sm md:text-base">
                {t("portal.startNew")}
              </button>
              <button onClick={() => sendMessage("Test my knowledge")} className="px-5 py-3 rounded-xl border bg-card hover:bg-accent focus:ring-2 focus:outline-none transition text-sm shadow-sm md:text-base">
                {t("portal.testMe")}
              </button>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {!showWelcome && (
          <div className="flex flex-col space-y-6 pb-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : msg.role === "system" ? "justify-center" : "justify-start"}`}>
                {msg.role === "system" ? (
                  <div className="bg-muted text-muted-foreground p-4 rounded-xl text-center text-sm my-4 border shadow-sm max-w-[80%]">
                    <div className="font-semibold text-xs mb-1 uppercase tracking-wider text-muted-foreground/80">Your Turn</div>
                    {msg.content}
                  </div>
                ) : (
                  <div className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-br-none shadow-sm"
                      : msg.debater === "A"
                        ? "bg-blue-50 border border-blue-200 text-blue-900 rounded-bl-none shadow-sm dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100"
                        : msg.debater === "B"
                          ? "bg-orange-50 border border-orange-200 text-orange-900 rounded-bl-none shadow-sm dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-100"
                          : "bg-muted rounded-bl-none text-muted-foreground shadow-sm leading-relaxed"
                  }`}>
                    {msg.debater && (
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-2 ${msg.debater === "A" ? "bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200" : "bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200"}`}>
                        View {msg.debater}
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-2">
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.role !== "user" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => speakMessage(msg.content)}
                          className="text-gray-400 hover:text-gray-600 transition flex-shrink-0 mt-1"
                          title="Listen to this response"
                        >
                          🔊
                        </button>
                        <button
                          onClick={() => {
                            setActiveNoteMsg(msg.id);
                            setShowNoteBox(true);
                            setNoteContent("");
                          }}
                          className="text-gray-400 hover:text-gray-600 transition flex-shrink-0 mt-1"
                          title="Add a note"
                        >
                          📝
                        </button>
                      </div>
                    )}
                  </div>
                  {showNoteBox && activeNoteMsg === msg.id && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-black">
                      <textarea
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        placeholder="Write your thought here..."
                        className="w-full text-sm p-3 border rounded-lg resize-none bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                        rows={3}
                      />
                      <div className="flex flex-wrap gap-2 mt-3">
                        <button
                          onClick={() => saveNote(false)}
                          className="text-xs px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors"
                        >
                          Save Note
                        </button>
                        <button
                          onClick={() => saveNote(true)}
                          className="text-xs px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                        >
                          Share with Teacher
                        </button>
                        <button
                          onClick={() => setShowNoteBox(false)}
                          className="text-xs px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                   <div className="bg-muted rounded-2xl rounded-bl-none px-5 py-4 flex space-x-2 items-center h-12">
                       <span className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse"></span>
                       <span className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse delay-150"></span>
                       <span className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse delay-300"></span>
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* SECTION 4 - INPUT BAR */}
      <div className="bg-background pt-2 pb-6 px-4 w-full">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Current Topic Indicator */}
          {!showWelcome && (
              <div className="flex items-center justify-center mb-3">
                <span className="text-xs font-medium text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                   {t("portal.currentTopic")}: {topic}
                </span>
              </div>
          )}
          
          <div className="relative flex items-center bg-card border rounded-full shadow-sm focus-within:ring-1 focus-within:ring-primary/50 overflow-hidden w-full">
            <button
              onClick={handleThoughtCapture}
              className="p-3 text-purple-400 hover:text-purple-600 transition focus:outline-none"
              title="Capture your thought"
            >
              🧠
            </button>
            <button
              onClick={handleFeedbackVoice}
              className="p-3 text-red-400 hover:text-red-600 transition focus:outline-none"
              title="Send voice feedback to teacher"
            >
              🎤 Feedback
            </button>
            <button 
              onClick={handleVoiceInput}
              title="Click to speak (records for 10 seconds)"
              className="p-3 text-muted-foreground hover:text-primary transition mx-1 focus:outline-none"
            >
              <Mic className="h-5 w-5" />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder={t("portal.placeholder")} 
              className="flex-1 bg-transparent py-4 outline-none text-base"
            />
            <button 
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              className="p-3 m-1 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition disabled:opacity-50 focus:outline-none"
            >
              <Send className="h-4 w-4 ml-0.5" />
            </button>
          </div>
          <p className="text-[11px] text-muted-foreground mt-3 text-center">{t("portal.aiDisclaimer")}</p>
        </div>
      </div>
      
      {/* CAPTURED THOUGHT CONFIRMATION */}
      {capturedThought && (
        <div className="fixed bottom-24 left-0 right-0 mx-4 max-w-2xl md:mx-auto p-4 bg-purple-50 border border-purple-200 rounded-2xl shadow-lg z-50 dark:bg-purple-900/30 dark:border-purple-800">
          <p className="text-sm font-medium text-purple-800 mb-2 dark:text-purple-300">
            {t("portal.isThisRight")}
          </p>
          <p className="text-sm text-gray-700 whitespace-pre-line mb-4 dark:text-gray-300">
            {capturedThought.structured}
          </p>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const token = localStorage.getItem("token");
                const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://eduecosystem-backend-503001969959.us-central1.run.app";
                const apiUrl = baseUrl.endsWith("/api/v1") ? baseUrl : `${baseUrl}/api/v1`;
                await fetch(`${apiUrl}/ai/tutor/notes`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                  },
                  body: JSON.stringify({
                    content: capturedThought.structured,
                    topic: topic,
                    source: 'voice_thought'
                  })
                });
                setCapturedThought(null);
                alert(t("portal.noteSaved"));
              }}
              className="flex-1 py-2 bg-purple-600 text-white text-sm rounded-xl font-medium hover:bg-purple-700 transition"
            >
              {t("portal.yesSave")}
            </button>
            <button
              onClick={() => setCapturedThought(null)}
              className="flex-1 py-2 bg-gray-200 text-gray-700 text-sm rounded-xl hover:bg-gray-300 transition"
            >
              {t("portal.notQuite")}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
