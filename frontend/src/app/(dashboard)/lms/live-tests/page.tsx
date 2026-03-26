"use client";

export const dynamic = "force-dynamic";


import { useEffect, useState } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { 
  Timer, Calendar, Users, ShieldCheck, Plus, 
  Loader2, MoreVertical, Eye, Trash2, Clock 
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { teacherSettingsService } from "@/lib/services/teacherSettingsService";
import { toast } from "sonner";

export default function LiveTestsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const [newTest, setNewTest] = useState({
    title: "",
    date: "",
    time: "",
    duration: "60",
    maxParticipants: "100",
    proctoring: true,
  });

  const fetchTests = async () => {
    try {
      setLoading(true);
      const tests = await teacherSettingsService.getLiveTests();
      // Combine with local storage for simulation
      const localTests = JSON.parse(localStorage.getItem("teacher_live_tests") || "[]");
      setData([...tests, ...localTests]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleSchedule = async () => {
    if (!newTest.title || !newTest.date) {
      toast.error("Please fill in the title and date");
      return;
    }
    setIsSaving(true);
    try {
      await teacherSettingsService.saveLiveTest({
        ...newTest,
        displayDate: `${newTest.date} ${newTest.time}`,
      });
      setShowScheduleDialog(false);
      fetchTests();
    } finally {
      setIsSaving(false);
    }
  };

  const columns = [
    { 
      key: "title", 
      label: "Test Name", 
      render: (val: string, row: any) => (
        <div className="flex flex-col">
          <span className="font-medium text-white">{val}</span>
          {row.proctoring && (
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> AI Proctoring Enabled
            </span>
          )}
        </div>
      )
    },
    { 
      key: "displayDate", 
      label: "Scheduled For",
      render: (val: string) => (
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-3 w-3 text-muted-foreground" />
          {val || "Not set"}
        </div>
      )
    },
    {
      key: "duration",
      label: "Duration",
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3 text-muted-foreground" />
          {value} mins
        </div>
      )
    },
    { 
      key: "participants", 
      label: "Registered",
      render: (val: number, row: any) => (
        <div className="flex items-center gap-2">
          <Users className="h-3 w-3 text-muted-foreground" />
          {val || 0} / {row.maxParticipants || "âˆž"}
        </div>
      )
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant="outline" className={
          value === "upcoming" ? "border-blue-500 text-blue-400 bg-blue-400/5" :
            "border-gray-500 text-muted-foreground"
        }>
          {(value || "Upcoming").toUpperCase()}
        </Badge>
      )
    }
  ];

  return (
    <>
      <StandardListPage
        title="Live Tests"
        description="Schedule high-stakes competitive tests with real-time AI proctoring and automated results."
        columns={columns}
        data={data}
        actionLabel="Schedule New Test"
        onAdd={() => setShowScheduleDialog(true)}
        onView={(row) => toast.info(`Viewing analytics for ${row.title}`)}
        onDelete={(row) => toast.error("Delete logic coming in Phase 4")}
      />

      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-blue-500" />
              Schedule Live Test
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Define the rules and timing for your upcoming competitive examination.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Test Title</Label>
              <Input 
                id="title" 
                placeholder="e.g. JEE Advance Mock 2024"
                value={newTest.title}
                onChange={e => setNewTest({...newTest, title: e.target.value})}
                className="bg-gray-800 border-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Start Date</Label>
                <Input 
                  id="date" 
                  type="date"
                  value={newTest.date}
                  onChange={e => setNewTest({...newTest, date: e.target.value})}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Start Time</Label>
                <Input 
                  id="time" 
                  type="time"
                  value={newTest.time}
                  onChange={e => setNewTest({...newTest, time: e.target.value})}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (Mins)</Label>
                <Input 
                  id="duration" 
                  type="number"
                  value={newTest.duration}
                  onChange={e => setNewTest({...newTest, duration: e.target.value})}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="limit">Max Seats</Label>
                <Input 
                  id="limit" 
                  type="number"
                  value={newTest.maxParticipants}
                  onChange={e => setNewTest({...newTest, maxParticipants: e.target.value})}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-emerald-400">AI Proctoring Mode</p>
                  <p className="text-[10px] text-muted-foreground">Detects tab switches and face movements</p>
                </div>
              </div>
              <Switch 
                checked={newTest.proctoring}
                onCheckedChange={(val) => setNewTest({...newTest, proctoring: val})}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowScheduleDialog(false)} className="border-gray-700">
              Cancel
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-500"
              onClick={handleSchedule}
              disabled={isSaving}
            >
              {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Calendar className="h-4 w-4 mr-2" />}
              Create Test Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

