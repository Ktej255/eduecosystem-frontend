"use client";

import { useState } from "react";
import {
    MessageSquare,
    ClipboardCheck,
    AlertTriangle,
    Clock,
    Check,
    X,
    MoreHorizontal,
    Search,
    Mail,
    Smartphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Mock Data Types
type InboxItemType = 'query' | 'review' | 'alert';

interface InboxItem {
    id: string;
    type: InboxItemType;
    title: string;
    description: string;
    author: string;
    timestamp: string;
    priority: 'high' | 'medium' | 'low';
    isRead: boolean;
}

const MOCK_INBOX_ITEMS: InboxItem[] = [
    {
        id: '1',
        type: 'query',
        title: 'Polity: Emergency Provisions',
        description: 'Sir, I have a doubt regarding Article 356. Does judicial review apply to the President\'s satisfaction?',
        author: 'Rahul Verma (Batch 1)',
        timestamp: '10 mins ago',
        priority: 'high',
        isRead: false
    },
    {
        id: '2',
        type: 'review',
        title: 'Essay Review Pending',
        description: 'Philosophy of Constitution essay submitted for review.',
        author: 'Priya Sharma',
        timestamp: '2 hours ago',
        priority: 'medium',
        isRead: false
    },
    {
        id: '3',
        type: 'alert',
        title: 'System Security Alert',
        description: 'New login detected from unusual location (Mumbai).',
        author: 'System',
        timestamp: '5 hours ago',
        priority: 'high',
        isRead: false
    },
    {
        id: '4',
        type: 'query',
        title: 'Geography: Plate Tectonics',
        description: 'Is the mid-Atlantic ridge divergent or convergent?',
        author: 'Amit Kumar',
        timestamp: 'Yesterday',
        priority: 'low',
        isRead: true
    },
    {
        id: '5',
        type: 'review',
        title: 'Answer Writing: GS2',
        description: 'Governance model answer pending approval.',
        author: 'Sneha Gupta',
        timestamp: 'Yesterday',
        priority: 'medium',
        isRead: true
    }
];

import { useCommunicationStore, Message } from "@/store/communicationStore";

const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
        case 'high': return "border-rose-200 bg-rose-50 text-rose-700";
        case 'medium': return "border-amber-200 bg-amber-50 text-amber-700";
        case 'low': return "border-blue-200 bg-blue-50 text-blue-700";
        default: return "border-border bg-muted text-muted-foreground";
    }
};

const getIcon = (type: InboxItemType | Message['channel']) => {
    switch (type) {
        case 'query': return <MessageSquare className="h-4 w-4 text-blue-500" />;
        case 'review': return <ClipboardCheck className="h-4 w-4 text-emerald-500" />;
        case 'alert': return <AlertTriangle className="h-4 w-4 text-red-500" />;
        case 'whatsapp': return <MessageSquare className="h-4 w-4 text-green-500" />;
        case 'telegram': return <Smartphone className="h-4 w-4 text-blue-500" />;
        case 'email': return <Mail className="h-4 w-4 text-amber-500" />;
        default: return <MessageSquare className="h-4 w-4 text-muted-foreground" />;
    }
};

export default function PriorityInbox() {
    const { messages } = useCommunicationStore();
    const [activeTab, setActiveTab] = useState("all");
    const [items, setItems] = useState<InboxItem[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchInbox = async () => {
        try {
            const res = await api.get('/inbox/items');
            setItems(res.data.items || []);
        } catch (error) {
            console.error("Failed to fetch inbox");
            // Fallback for safety during transition
            setItems(MOCK_INBOX_ITEMS);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInbox();
    }, []);

    const markAsRead = async (id: string) => {
        try {
            await api.patch(`/inbox/items/${id}`, { isRead: true });
            setItems(prev => prev.map(item => item.id === id ? { ...item, isRead: true } : item));
            toast.success("Item marked as read");
        } catch (error) {
            toast.error("Action failed");
        }
    };

    const dismissItem = async (id: string) => {
        try {
            await api.delete(`/inbox/items/${id}`);
            setItems(prev => prev.filter(item => item.id !== id));
            toast.success("Item dismissed");
        } catch (error) {
            toast.error("Action failed");
        }
    };

    return (
        <Card className="col-span-1 md:col-span-2 shadow-md border-emerald-100/50">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                            <MessageSquare className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        Priority Inbox
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 ml-2">
                            {items.filter(i => !i.isRead).length} New
                        </Badge>
                    </CardTitle>
                    <div className="flex gap-2">
                        <div className="relative hidden md:block w-48">
                            <Search className="absolute left-2 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                            <Input placeholder="Search..." className="h-8 pl-8 text-xs bg-muted border-border" />
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
                    <div className="px-4 border-b border-border">
                        <TabsList className="bg-transparent h-10 p-0 space-x-4">
                            <TabsTrigger
                                value="all"
                                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-emerald-500 rounded-none px-2 pb-2 text-muted-foreground"
                            >
                                All Items
                            </TabsTrigger>
                            <TabsTrigger
                                value="query"
                                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-2 pb-2 text-muted-foreground"
                            >
                                Queries
                            </TabsTrigger>
                            <TabsTrigger
                                value="review"
                                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-emerald-500 rounded-none px-2 pb-2 text-muted-foreground"
                            >
                                Reviews
                            </TabsTrigger>
                            <TabsTrigger
                                value="alert"
                                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-500 rounded-none px-2 pb-2 text-muted-foreground"
                            >
                                Alerts
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="max-h-[400px] overflow-y-auto scrollbar-thin">
                        {filteredItems.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground">
                                <Check className="h-10 w-10 mx-auto mb-2 opacity-20" />
                                <p>All caught up! No pending items.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-50">
                                {filteredItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className={cn(
                                            "p-4 hover:bg-gray-50/50 transition-colors group relative",
                                            !item.isRead ? "bg-emerald-50/10" : "opacity-80"
                                        )}
                                    >
                                        <div className="flex gap-4">
                                            {/* Icon Column */}
                                            <div className="mt-1 flex-shrink-0">
                                                <div className={cn(
                                                    "h-8 w-8 rounded-full flex items-center justify-center border",
                                                    item.type === 'query' ? "bg-blue-50 border-blue-100" :
                                                        item.type === 'review' ? "bg-emerald-50 border-emerald-100" :
                                                            "bg-red-50 border-red-100"
                                                )}>
                                                    {getIcon(item.type)}
                                                </div>
                                            </div>

                                            {/* Content Column */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className={cn(
                                                        "text-sm font-semibold truncate pr-4",
                                                        !item.isRead ? "text-foreground" : "text-muted-foreground"
                                                    )}>
                                                        {item.title}
                                                    </h4>
                                                    <span className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                                                        <Clock className="h-3 w-3 mr-1" />
                                                        {item.timestamp}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                                                    {item.description}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0 h-5 font-normal", getPriorityColor(item.priority))}>
                                                        {item.priority} priority
                                                    </Badge>
                                                    <span className="text-xs text-muted-foreground">•</span>
                                                    <span className="text-xs font-medium text-muted-foreground">{item.author}</span>
                                                </div>
                                            </div>

                                            {/* Actions Column (Visible on Hover) */}
                                            <div className="flex flex-col gap-1 items-end opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-7 w-7 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                                                    onClick={() => markAsRead(item.id)}
                                                    title="Mark as Done"
                                                >
                                                    <Check className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-7 w-7 text-muted-foreground hover:text-red-500 hover:bg-red-50"
                                                    onClick={() => dismissItem(item.id)}
                                                    title="Dismiss"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Unread Indicator */}
                                        {!item.isRead && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Tabs>
            </CardContent>
        </Card>
    );
}
