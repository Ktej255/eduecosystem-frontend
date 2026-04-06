'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, Mic } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIConversationPanelProps {
  isOpen: boolean;
  pausePrompt?: string;
  clipId?: number;
  mode?: 'pause' | 'recall' | 'doubt';
  onClose: () => void;
  onResume?: () => void;
}

export default function AIConversationPanel({
  isOpen,
  pausePrompt,
  clipId,
  mode = 'pause',
  onClose,
  onResume,
}: AIConversationPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // When panel opens, send the initial system message
  useEffect(() => {
    if (isOpen && !hasInitialized && pausePrompt) {
      setHasInitialized(true);
      const systemMsg = pausePrompt || "Let's take a quick pause. What's your understanding of what we just covered?";
      setMessages([{ role: 'assistant', content: systemMsg }]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    if (!isOpen) {
      setHasInitialized(false);
      setMessages([]);
    }
  }, [isOpen, pausePrompt]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newUserMsg: Message = { role: 'user', content: text };
    const updatedHistory = [...messages, newUserMsg];
    setMessages(updatedHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/guided/ai/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          clip_id: clipId,
          pause_prompt: pausePrompt,
          history: messages,
          mode,
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();

      setMessages([...updatedHistory, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([
        ...updatedHistory,
        { role: 'assistant', content: "I'm having a moment — please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const modeLabel = {
    pause: '💡 Pause Check-in',
    recall: '🧠 Day Recall',
    doubt: '❓ Ask a Doubt',
  }[mode];

  return (
    <div
      className={`
        fixed right-0 top-0 bottom-0 w-full md:w-[400px] z-50
        bg-[#1F3864] text-white flex flex-col shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div>
          <div className="text-xs text-blue-300 font-medium uppercase tracking-wider mb-0.5">
            AI Tutor
          </div>
          <div className="font-semibold text-base">{modeLabel}</div>
        </div>
        <div className="flex items-center gap-2">
          {mode === 'pause' && onResume && (
            <button
              onClick={onResume}
              className="text-xs bg-[#2E75B6] hover:bg-blue-500 px-3 py-1.5 rounded-lg font-semibold transition-colors"
            >
              ▶ Resume
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === 'user'
                  ? 'bg-[#2E75B6] text-white rounded-br-sm'
                  : 'bg-white/10 text-white/90 rounded-bl-sm'
                }
              `}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 text-sm">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your response..."
            className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="w-8 h-8 bg-[#2E75B6] hover:bg-blue-500 disabled:bg-white/10 disabled:opacity-40 rounded-lg flex items-center justify-center transition-colors shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-white/30 text-[10px] text-center mt-2">
          Voice input — coming soon
        </p>
      </div>
    </div>
  );
}
