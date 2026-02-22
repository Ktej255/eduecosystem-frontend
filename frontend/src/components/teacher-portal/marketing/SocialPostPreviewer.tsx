"use client";

import { useState } from "react";
import {
    Instagram,
    Linkedin,
    Image as ImageIcon,
    Send,
    Smartphone,
    MoreHorizontal,
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    ThumbsUp,
    Globe
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SocialPostPreviewer() {
    const [caption, setCaption] = useState("🚀 Excited to announce our new Geography Module! We've added 3D simulations for every major river system. #UPSC #EdTech #Geography");
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto h-[600px]">
            {/* Editor Panel */}
            <div className="lg:col-span-4 space-y-4">
                <Card className="h-full border-border">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Smartphone className="h-5 w-5 text-indigo-500" />
                            Content Studio
                        </CardTitle>
                        <CardDescription>Draft your post and see it live.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Upload Visual</Label>
                            <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted dark:hover:bg-slate-900 transition-colors relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleImageUpload}
                                />
                                {image ? (
                                    <img src={image} alt="Preview" className="h-32 object-cover rounded-md" />
                                ) : (
                                    <>
                                        <div className="h-10 w-10 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-2">
                                            <ImageIcon className="h-5 w-5" />
                                        </div>
                                        <span className="text-xs text-muted-foreground">Click to upload image</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Caption & Hashtags</Label>
                            <Textarea
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                className="h-32 resize-none text-sm"
                                placeholder="Write your caption here..."
                            />
                            <p className="text-xs text-right text-muted-foreground">
                                {caption.length} / 2200 characters
                            </p>
                        </div>

                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                            <Send className="h-4 w-4 mr-2" /> Schedule Post
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-8 h-full flex flex-col justify-center items-center bg-muted rounded-xl border border-border p-8">
                <Tabs defaultValue="instagram" className="w-full max-w-sm">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="instagram" className="flex items-center gap-2">
                            <Instagram className="h-4 w-4" /> Instagram
                        </TabsTrigger>
                        <TabsTrigger value="linkedin" className="flex items-center gap-2">
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </TabsTrigger>
                    </TabsList>

                    {/* Instagram Mockup */}
                    <TabsContent value="instagram">
                        <div className="bg-card text-black border border-border rounded-xl overflow-hidden shadow-xl max-w-sm mx-auto">
                            {/* Header */}
                            <div className="flex items-center justify-between p-3 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>E</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-semibold">eduecosystem_official</span>
                                </div>
                                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                            </div>

                            {/* Image */}
                            <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                                {image ? (
                                    <img src={image} alt="Post" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex flex-col items-center text-muted-foreground">
                                        <ImageIcon className="h-12 w-12 mb-2" />
                                        <span className="text-xs">Image Preview</span>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-4">
                                        <Heart className="h-6 w-6 hover:text-red-500 cursor-pointer" />
                                        <MessageCircle className="h-6 w-6 -rotate-90 hover:text-muted-foreground cursor-pointer" />
                                        <Send className="h-6 w-6 hover:text-muted-foreground cursor-pointer" />
                                    </div>
                                    <Bookmark className="h-6 w-6 hover:text-muted-foreground cursor-pointer" />
                                </div>
                                <p className="text-sm font-semibold mb-1">1,240 likes</p>
                                <div className="text-sm">
                                    <span className="font-semibold mr-2">eduecosystem_official</span>
                                    <span className="text-foreground whitespace-pre-wrap">{caption}</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground uppercase mt-2">2 HOURS AGO</p>
                            </div>
                        </div>
                    </TabsContent>

                    {/* LinkedIn Mockup */}
                    <TabsContent value="linkedin">
                        <div className="bg-card text-black border border-border rounded-xl overflow-hidden shadow-xl max-w-sm mx-auto">
                            {/* Header */}
                            <div className="flex items-center gap-3 p-3 pb-2">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>E</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="text-sm font-semibold leading-none">EduEcosystem</h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">15,420 followers</p>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                                        <span>2h •</span>
                                        <Globe className="h-3 w-3" />
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-muted-foreground">
                                    <MoreHorizontal className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Caption */}
                            <div className="px-3 pb-2">
                                <p className="text-sm text-foreground whitespace-pre-wrap">{caption}</p>
                            </div>

                            {/* Image */}
                            <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden border-y border-slate-100">
                                {image ? (
                                    <img src={image} alt="Post" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex flex-col items-center text-muted-foreground">
                                        <ImageIcon className="h-12 w-12 mb-2" />
                                        <span className="text-xs">Image Preview</span>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="px-3 py-2 flex items-center justify-between border-t border-slate-100">
                                <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground gap-1.5 h-10 hover:bg-muted">
                                    <ThumbsUp className="h-4 w-4" /> <span className="text-xs font-semibold">Like</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground gap-1.5 h-10 hover:bg-muted">
                                    <MessageCircle className="h-4 w-4" /> <span className="text-xs font-semibold">Comment</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground gap-1.5 h-10 hover:bg-muted">
                                    <Share2 className="h-4 w-4" /> <span className="text-xs font-semibold">Repost</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground gap-1.5 h-10 hover:bg-muted">
                                    <Send className="h-4 w-4" /> <span className="text-xs font-semibold">Send</span>
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
                <p className="text-xs text-muted-foreground mt-6 flex items-center gap-2">
                    <Smartphone className="h-3 w-3" />
                    Preview mode: Mobile Device
                </p>
            </div>
        </div>
    );
}
