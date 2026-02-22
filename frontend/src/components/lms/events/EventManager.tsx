"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Video, Calendar as CalendarIcon, Clock, Users, Link2, Plus } from 'lucide-react';
import { toast } from 'sonner';

// Mock Events
const UPCOMING_EVENTS = [
    { id: 1, title: 'Polity Strategy: Prelims 2026', type: 'Workshop', date: 'Feb 10', time: '18:00', registrations: 145 },
    { id: 2, title: 'Live Doubt Clearing: Geography', type: 'Q&A', date: 'Feb 12', time: '19:30', registrations: 89 },
];

export default function EventManager() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [title, setTitle] = useState("");
    const [type, setType] = useState("webinar");
    const [link, setLink] = useState("");

    const handleSchedule = () => {
        if (!title || !link) {
            toast.error("Please provide title and meeting link");
            return;
        }
        toast.success("Event scheduled successfully!");
        setTitle("");
        setLink("");
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Calendar & List (Left) */}
            <Card className="md:col-span-1 border-neutral-200 dark:border-neutral-800 bg-card dark:bg-neutral-900">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 text-indigo-500" />
                        Upcoming Events
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border mx-auto"
                    />
                    <div className="space-y-3">
                        {UPCOMING_EVENTS.map(event => (
                            <div key={event.id} className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-lg border border-neutral-100 dark:border-neutral-700">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">{event.date} • {event.time}</span>
                                    <span className="text-[10px] uppercase tracking-wider font-bold bg-card dark:bg-black px-2 py-0.5 rounded border">{event.type}</span>
                                </div>
                                <h4 className="font-medium text-sm mb-2">{event.title}</h4>
                                <div className="flex items-center gap-1 text-xs text-neutral-500">
                                    <Users className="w-3 h-3" /> {event.registrations} Registered
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Scheduler Form (Right) */}
            <Card className="md:col-span-2 border-neutral-200 dark:border-neutral-800 bg-card dark:bg-neutral-900">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-rose-500">
                        <Video className="w-5 h-5" />
                        Schedule Live Session
                    </CardTitle>
                    <p className="text-xs text-neutral-500">Create a new Webinar, Workshop, or Live Class.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Event Title</Label>
                            <Input
                                placeholder="e.g. Mastering Map Work"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Event Type</Label>
                            <Select value={type} onValueChange={setType}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="webinar">Webinar</SelectItem>
                                    <SelectItem value="class">Live Class</SelectItem>
                                    <SelectItem value="workshop">Workshop</SelectItem>
                                    <SelectItem value="qa">Q&A Session</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Start Time</Label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                                <Input type="time" className="pl-9" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Duration (Minutes)</Label>
                            <Select defaultValue="60">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="30">30 Min</SelectItem>
                                    <SelectItem value="60">60 Min</SelectItem>
                                    <SelectItem value="90">90 Min</SelectItem>
                                    <SelectItem value="120">2 Hours</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Meeting Link (Zoom/YouTube)</Label>
                        <div className="relative">
                            <Link2 className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                            <Input
                                placeholder="https://zoom.us/j/..."
                                className="pl-9"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button onClick={handleSchedule} className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold h-12">
                            <Plus className="w-5 h-5 mr-2" /> Schedule Event
                        </Button>
                    </div>

                    {/* Quick Tips */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3 text-sm text-blue-700 dark:text-blue-300">
                        <div className="shrink-0 pt-1">💡</div>
                        <div>
                            <strong>Pro Tip:</strong> Events scheduled here will automatically appear on the Student Dashboard. Email reminders are sent 1 hour before the start time.
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
