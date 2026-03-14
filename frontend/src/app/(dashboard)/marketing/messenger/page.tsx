"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare, Search, Send, Plus, MoreVertical,
  User, Users, Star, Archive, Trash2, Check, CheckCheck,
  Paperclip, Smile, ArrowLeft, Loader2
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fetchConversations, fetchMessages, sendMessage } from "@/lib/services/teacherAnalyticsService";
import { toast } from "sonner";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  type: 'direct' | 'group';
}

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isMe: boolean;
  read: boolean;
}

const mockConversations: Conversation[] = [
  { id: "1", name: "Rahul Sharma", lastMessage: "When is the next mock test?", time: "2 min", unread: 2, online: true, type: 'direct' },
  { id: "2", name: "Priya Gupta", lastMessage: "Thank you for the notes!", time: "15 min", unread: 0, online: true, type: 'direct' },
  { id: "3", name: "Batch 1 - General", lastMessage: "Amit: Can someone help with...", time: "1 hr", unread: 5, online: false, type: 'group' },
  { id: "4", name: "Vikram Patel", lastMessage: "Got it, will check.", time: "3 hr", unread: 0, online: false, type: 'direct' },
  { id: "5", name: "Course Support", lastMessage: "Your query has been resolved", time: "1 day", unread: 0, online: false, type: 'group' },
];

const mockMessages: Message[] = [
  { id: "1", sender: "Rahul Sharma", content: "Hello sir, I have a doubt about Constitutional Amendments", time: "10:30 AM", isMe: false, read: true },
  { id: "2", sender: "Me", content: "Hi Rahul! Sure, what's your doubt?", time: "10:32 AM", isMe: true, read: true },
  { id: "3", sender: "Rahul Sharma", content: "What's the difference between Article 368 and basic structure doctrine?", time: "10:35 AM", isMe: false, read: true },
  { id: "4", sender: "Me", content: "Great question! Article 368 provides the procedure for amending the constitution, while the Basic Structure doctrine limits that power.", time: "10:40 AM", isMe: true, read: true },
  { id: "5", sender: "Rahul Sharma", content: "When is the next mock test?", time: "10:45 AM", isMe: false, read: false },
];

export default function MessengerPage() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchConversations();
      setConversations(data.conversations);
      if (data.conversations.length > 0) {
        setSelectedConversation(data.conversations[0]);
      }
      setLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      const loadMessages = async () => {
        const msgs = await fetchMessages(selectedConversation.id);
        setMessages(msgs);
      };
      loadMessages();
    }
  }, [selectedConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim() || !selectedConversation) return;
    const content = newMessage;
    setNewMessage("");
    setSending(true);

    const optimisticMsg = {
      id: `temp-${Date.now()}`,
      sender: "Me", content, isMe: true, read: false,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages(prev => [...prev, optimisticMsg]);

    try {
      await sendMessage(selectedConversation.id, content);
    } catch {
      // Optimistic update already in place
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const filteredConversations = conversations.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-muted-foreground mb-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Link>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <MessageSquare className="h-7 w-7 text-blue-600" />
          Messenger
        </h1>
        <p className="text-muted-foreground text-sm">Manage direct messages with students</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Conversations Sidebar */}
        <div className="w-80 border-r flex flex-col bg-card">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`p-4 border-b cursor-pointer hover:bg-muted dark:hover:bg-gray-700 transition ${selectedConversation?.id === conv.id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500' : ''
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={conv.type === 'group' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}>
                        {conv.type === 'group' ? <Users className="h-5 w-5" /> : conv.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm truncate">{conv.name}</span>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <Badge className="bg-blue-600 text-white text-xs">{conv.unread}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-muted">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-card border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {selectedConversation.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{selectedConversation.name}</h3>
                    <p className="text-xs text-green-500">{selectedConversation.online ? 'Online' : 'Offline'}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm"><Star className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Archive className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><MoreVertical className="h-4 w-4" /></Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${msg.isMe
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-card rounded-bl-md shadow-sm'
                      }`}>
                      <p className="text-sm">{msg.content}</p>
                      <div className={`flex items-center justify-end gap-1 mt-1 ${msg.isMe ? 'text-blue-100' : 'text-muted-foreground'}`}>
                        <span className="text-xs">{msg.time}</span>
                        {msg.isMe && (msg.read ? <CheckCheck className="h-3 w-3" /> : <Check className="h-3 w-3" />)}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 bg-card border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm"><Paperclip className="h-5 w-5" /></Button>
                  <Input
                    placeholder="Type a message..."
                    className="flex-1"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <Button variant="ghost" size="sm"><Smile className="h-5 w-5" /></Button>
                  <Button className="bg-blue-600" onClick={handleSend} disabled={sending || !newMessage.trim()}>
                    {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
