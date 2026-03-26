"use client";

export const dynamic = "force-dynamic";


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Check, Edit, Trash2, Crown, Loader2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { teacherSettingsService } from "@/lib/services/teacherSettingsService";
import { toast } from "sonner";

interface MembershipPlan {
    id: number;
    name: string;
    description: string;
    status: string;
    price: number;
    interval: string;
    features: string[];
}

export default function MembershipsPage() {
    const [plans, setPlans] = useState<MembershipPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    
    const [newPlan, setNewPlan] = useState({
        name: "",
        description: "Access all PRO courses and exclusive content.",
        price: "",
        interval: "monthly",
        features: ["Access to all PRO courses"]
    });

    const [currentFeature, setCurrentFeature] = useState("");

    const fetchPlans = async () => {
        try {
            setLoading(true);
            const data = await teacherSettingsService.getMemberships();
            const local = JSON.parse(localStorage.getItem("teacher_memberships") || "[]");
            
            setPlans(data.length > 0 ? data : (local.length > 0 ? local : [
                {
                    id: 1,
                    name: "Pro Monthly",
                    status: "active",
                    price: 1999,
                    interval: "monthly",
                    description: "Our most popular plan for serious learners.",
                    features: [
                        "Access to all PRO courses",
                        "Exclusive community access",
                        "Downloadable resources",
                        "Priority support"
                    ]
                }
            ]));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlans();
    }, []);

    const handleAddFeature = () => {
        if (!currentFeature) return;
        setNewPlan({ ...newPlan, features: [...newPlan.features, currentFeature] });
        setCurrentFeature("");
    };

    const handleCreate = async () => {
        if (!newPlan.name || !newPlan.price) {
            toast.error("Please fill Name and Price");
            return;
        }
        setIsSaving(true);
        try {
            await teacherSettingsService.saveMembership({
                ...newPlan,
                price: Number(newPlan.price)
            });
            setShowCreateDialog(false);
            setNewPlan({ name: "", description: "Access all PRO courses and exclusive content.", price: "", interval: "monthly", features: ["Access to all PRO courses"] });
            fetchPlans();
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this plan?")) {
            await teacherSettingsService.deleteMembership(id);
            fetchPlans();
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Membership Plans
                        </h1>
                        <p className="text-muted-foreground">
                            Create and manage subscription tiers for your educational ecosystem.
                        </p>
                    </div>
                    <Button onClick={() => setShowCreateDialog(true)} className="bg-blue-600 hover:bg-blue-500">
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Plan
                    </Button>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div key={plan.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col group hover:border-blue-500/50 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <Crown className="h-5 w-5 text-blue-500" />
                                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                </div>
                                <Badge
                                    variant="secondary"
                                    className={plan.status === "active" ? "bg-blue-600 text-white" : "bg-gray-700 text-muted-foreground"}
                                >
                                    {plan.status}
                                </Badge>
                            </div>

                            <p className="text-muted-foreground text-sm mb-6 line-clamp-2 italic">
                                "{plan.description}"
                            </p>

                            <div className="flex items-baseline mb-6">
                                <span className="text-3xl font-bold text-white">â‚¹{plan.price.toLocaleString()}</span>
                                <span className="text-muted-foreground ml-1">/{plan.interval}</span>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-gray-800">
                                <Button variant="outline" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                </Button>
                                <Button 
                                    variant="outline" 
                                    onClick={() => handleDelete(plan.id)}
                                    className="flex-1 border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 hover:border-red-900/50 bg-red-950/10"
                                >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Create Dialog */}
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
                <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[450px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Crown className="h-5 w-5 text-blue-500" />
                            Create Membership Tier
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                            Define pricing and access rules for this membership plan.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="planName">Plan Name</Label>
                            <Input 
                                id="planName" 
                                value={newPlan.name}
                                onChange={e => setNewPlan({...newPlan, name: e.target.value})}
                                placeholder="e.g. Gold Access / Premium Monthly"
                                className="bg-gray-800 border-gray-700"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Price (â‚¹)</Label>
                                <Input 
                                    id="price" 
                                    type="number"
                                    value={newPlan.price}
                                    onChange={e => setNewPlan({...newPlan, price: e.target.value})}
                                    placeholder="999"
                                    className="bg-gray-800 border-gray-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Billing Interval</Label>
                                <Select 
                                    value={newPlan.interval} 
                                    onValueChange={v => setNewPlan({...newPlan, interval: v})}
                                >
                                    <SelectTrigger className="bg-gray-800 border-gray-700">
                                        <SelectValue placeholder="Monthly" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                        <SelectItem value="quarterly">Quarterly</SelectItem>
                                        <SelectItem value="yearly">Yearly</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Features Included</Label>
                            <div className="flex gap-2">
                                <Input 
                                    value={currentFeature}
                                    onChange={e => setCurrentFeature(e.target.value)}
                                    placeholder="Add a benefit..."
                                    className="bg-gray-800 border-gray-700"
                                    onKeyPress={e => e.key === 'Enter' && handleAddFeature()}
                                />
                                <Button size="icon" onClick={handleAddFeature} type="button">
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {newPlan.features.map((f, i) => (
                                    <Badge key={i} variant="secondary" className="bg-gray-800 flex items-center gap-1 group">
                                        {f}
                                        <X 
                                            className="h-3 w-3 cursor-pointer hover:text-red-400" 
                                            onClick={() => setNewPlan({...newPlan, features: newPlan.features.filter((_, idx) => idx !== i)})}
                                        />
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowCreateDialog(false)} className="border-gray-700">
                            Cancel
                        </Button>
                        <Button 
                            className="bg-blue-600 hover:bg-blue-500"
                            onClick={handleCreate}
                            disabled={isSaving}
                        >
                            {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Check className="h-4 w-4 mr-2" />}
                            Create Plan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

