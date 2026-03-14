"use client";

import { useEffect, useState } from "react";
import StandardListPage from "@/components/scaffold/StandardListPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Loader2, Ticket } from "lucide-react";
import api from "@/lib/api";
import { toast } from "sonner";

export default function PromoCodesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create Dialog State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [discountType, setDiscountType] = useState("percentage");
  const [discountValue, setDiscountValue] = useState("");
  const [usageLimit, setUsageLimit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  // Delete Dialog State
  const [deleteTarget, setDeleteTarget] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/coupons/");
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch coupons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async () => {
    if (!newCode.trim()) { toast.error("Coupon code is required."); return; }
    if (!discountValue) { toast.error("Discount value is required."); return; }

    setIsCreating(true);
    try {
      await api.post("/coupons/", {
        code: newCode.toUpperCase().replace(/\s/g, ''),
        discount_type: discountType,
        discount_value: parseFloat(discountValue),
        usage_limit: usageLimit ? parseInt(usageLimit) : null,
        expiry_date: expiryDate || null,
        is_active: true,
      });
      toast.success(`Coupon "${newCode.toUpperCase()}" created!`);
      setIsCreateOpen(false);
      resetCreateForm();
      fetchData();
    } catch (err) {
      toast.error("Failed to create coupon.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await api.delete(`/coupons/${deleteTarget.id}/`);
      toast.success(`Coupon "${deleteTarget.code}" deleted.`);
      setDeleteTarget(null);
      fetchData();
    } catch (err) {
      toast.error("Failed to delete coupon.");
    } finally {
      setIsDeleting(false);
    }
  };

  const resetCreateForm = () => {
    setNewCode("");
    setDiscountType("percentage");
    setDiscountValue("");
    setUsageLimit("");
    setExpiryDate("");
  };

  const columns = [
    {
      key: "code",
      label: "Code",
      render: (val: string) => <span className="font-mono font-bold text-yellow-500 dark:text-yellow-400">{val}</span>
    },
    {
      key: "discount_value",
      label: "Discount",
      render: (val: number, row: any) => (
        <span className="font-semibold">{val}{row.discount_type === "percentage" ? "%" : " ₹"}</span>
      )
    },
    {
      key: "usage_count",
      label: "Usage",
      render: (val: number, row: any) => (
        <span className="text-muted-foreground">
          {val} / {row.usage_limit || "∞"}
        </span>
      )
    },
    {
      key: "is_active",
      label: "Status",
      render: (val: boolean) => (
        <Badge variant="outline" className={val ? "border-green-500/50 text-green-500 bg-green-500/10" : "border-red-500/50 text-red-500 bg-red-500/10"}>
          {val ? "Active" : "Inactive"}
        </Badge>
      )
    }
  ];

  return (
    <>
      <StandardListPage
        title="Promo Codes"
        description="Create and manage discount codes for your courses."
        columns={columns}
        data={data}
        actionLabel="Create Coupon"
        onAdd={() => setIsCreateOpen(true)}
        onDelete={(row) => setDeleteTarget(row)}
      />

      {/* Create Coupon Dialog */}
      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-yellow-500" /> Create New Coupon
            </DialogTitle>
            <DialogDescription>
              Set up a discount code for your students.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Coupon Code</Label>
              <Input
                value={newCode}
                onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                placeholder="e.g. WELCOME20"
                className="font-mono uppercase"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Discount Type</Label>
                <Select value={discountType} onValueChange={setDiscountType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (%)</SelectItem>
                    <SelectItem value="fixed">Fixed Amount (₹)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Value</Label>
                <Input
                  type="number" min={0}
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  placeholder={discountType === "percentage" ? "e.g. 20" : "e.g. 500"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Usage Limit</Label>
                <Input
                  type="number" min={1}
                  value={usageLimit}
                  onChange={(e) => setUsageLimit(e.target.value)}
                  placeholder="Unlimited"
                />
              </div>
              <div className="space-y-2">
                <Label>Expiry Date</Label>
                <Input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
            <Button
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
              onClick={handleCreate}
              disabled={isCreating}
            >
              {isCreating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Create Coupon
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Coupon</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the coupon <strong className="text-foreground">{deleteTarget?.code}</strong>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeleteTarget(null)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

