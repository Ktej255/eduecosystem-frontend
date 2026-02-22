"use client";

import React, { useState } from "react";
import {
  Palette, Layout, Type, Image, Layers, Settings,
  Monitor, Smartphone, Tablet, Save, Eye, Undo, Redo,
  ArrowLeft, Sun, Moon, Paintbrush
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WebsiteBuilderPage() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState({
    primaryColor: "#3B82F6",
    secondaryColor: "#8B5CF6",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937",
    fontFamily: "Inter"
  });

  return (
    <div className="min-h-screen bg-muted">
      {/* Top Bar */}
      <div className="bg-card border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
          <div className="h-6 w-px bg-gray-300"></div>
          <h1 className="font-semibold flex items-center gap-2">
            <Palette className="h-5 w-5 text-purple-600" />
            Website Builder
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {/* Device Preview Buttons */}
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={activeDevice === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveDevice('desktop')}
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={activeDevice === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveDevice('tablet')}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={activeDevice === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveDevice('mobile')}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          <Button variant="ghost" size="sm">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Redo className="h-4 w-4" />
          </Button>

          <div className="h-6 w-px bg-gray-300"></div>

          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar - Tools */}
        <div className="w-64 bg-card border-r p-4 overflow-y-auto">
          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="design" className="space-y-6 mt-4">
              {/* Colors */}
              <div>
                <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
                  <Paintbrush className="h-4 w-4" />
                  Colors
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Primary Color</Label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="color"
                        value={theme.primaryColor}
                        onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <Input
                        value={theme.primaryColor}
                        onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Secondary Color</Label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="color"
                        value={theme.secondaryColor}
                        onChange={(e) => setTheme({ ...theme, secondaryColor: e.target.value })}
                        className="w-10 h-10 rounded border cursor-pointer"
                      />
                      <Input
                        value={theme.secondaryColor}
                        onChange={(e) => setTheme({ ...theme, secondaryColor: e.target.value })}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div>
                <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Typography
                </h3>
                <div>
                  <Label className="text-xs text-muted-foreground">Font Family</Label>
                  <select
                    className="w-full mt-1 p-2 border rounded-md text-sm"
                    value={theme.fontFamily}
                    onChange={(e) => setTheme({ ...theme, fontFamily: e.target.value })}
                  >
                    <option value="Inter">Inter</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Poppins">Poppins</option>
                    <option value="Open Sans">Open Sans</option>
                  </select>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Layout className="h-4 w-4 mr-2" />
                    Change Layout
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Image className="h-4 w-4 mr-2" />
                    Add Image
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Sun className="h-4 w-4 mr-2" />
                    Toggle Theme
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6 mt-4">
              <div>
                <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Site Settings
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Site Title</Label>
                    <Input className="mt-1" defaultValue="EduEcosystem" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Tagline</Label>
                    <Input className="mt-1" defaultValue="Learn. Grow. Succeed." />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Main Preview Area */}
        <div className="flex-1 p-8 overflow-y-auto flex items-start justify-center">
          <div
            className={`bg-card shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ${activeDevice === 'desktop' ? 'w-full max-w-5xl' :
                activeDevice === 'tablet' ? 'w-[768px]' : 'w-[375px]'
              }`}
            style={{ minHeight: '600px' }}
          >
            {/* Preview Header */}
            <div
              className="p-6 text-white"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <h1 className="text-2xl font-bold" style={{ fontFamily: theme.fontFamily }}>
                Your Website Preview
              </h1>
              <p className="opacity-80 mt-1">This is how your website will look</p>
            </div>

            {/* Preview Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground" />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button style={{ backgroundColor: theme.primaryColor }} className="text-white">
                  Primary Button
                </Button>
                <Button variant="outline" style={{ borderColor: theme.secondaryColor, color: theme.secondaryColor }}>
                  Secondary Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
