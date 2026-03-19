"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

export default function AIPortalPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<{id: number, role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [topic, setTopic] = useState("Exploring UI/UX Design");
  const [isLoading, setIsLoading] = useState(false);
  
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

      const response = await fetch(`${apiUrl}/ai/tutor/portal-chat`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
         body: JSON.stringify({ 
             message: text, 
             topic: topic,
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
        <div className="text-sm text-muted-foreground font-medium hidden sm:block">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
        <button className="text-xs px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition">
          My Progress
        </button>
      </header>

      {/* SECTION 3 & 2 - CONVERSATION AREA */}
      <main className="flex-1 overflow-y-auto w-full max-w-3xl mx-auto p-6 flex flex-col pt-10">
        
        {/* Welcome Screen */}
        {showWelcome && (
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-semibold tracking-tight text-center">
              What do you want to learn today, {user?.full_name?.split(" ")[0] || "Student"}?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => sendMessage("Continue where I left off")} className="px-5 py-3 rounded-xl border bg-card hover:bg-accent focus:ring-2 focus:outline-none transition text-sm shadow-sm md:text-base">
                Continue where I left off
              </button>
              <button onClick={() => sendMessage("Start something new")} className="px-5 py-3 rounded-xl border bg-card hover:bg-accent focus:ring-2 focus:outline-none transition text-sm shadow-sm md:text-base">
                Start something new
              </button>
              <button onClick={() => sendMessage("Test my knowledge")} className="px-5 py-3 rounded-xl border bg-card hover:bg-accent focus:ring-2 focus:outline-none transition text-sm shadow-sm md:text-base">
                Test my knowledge
              </button>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {!showWelcome && (
          <div className="flex flex-col space-y-6 pb-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-br-none shadow-sm"
                    : "bg-muted rounded-bl-none text-muted-foreground shadow-sm leading-relaxed"
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
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
                   Current Topic: {topic}
                </span>
              </div>
          )}
          
          <div className="relative flex items-center bg-card border rounded-full shadow-sm focus-within:ring-1 focus-within:ring-primary/50 overflow-hidden w-full">
            <button className="p-3 text-muted-foreground hover:text-primary transition mx-1 focus:outline-none">
              <Mic className="h-5 w-5" />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Message your AI Tutor..." 
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
          <p className="text-[11px] text-muted-foreground mt-3 text-center">AI responses are generated to assist your learning and should be cross-verified.</p>
        </div>
      </div>
    </div>
  );
}
