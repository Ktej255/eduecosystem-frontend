"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Receipt,
  Download,
  Search,
  Calendar,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import api from "@/lib/api";

interface Purchase {
  id: number;
  course_title: string;
  amount: number;
  currency: string;
  status: string;
  payment_provider: string;
  created_at: string;
  succeeded_at: string | null;
}

export default function PurchaseHistoryPage() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const response = await api.get(
        "/earnings/instructor/transactions?limit=100",
      );
      setPurchases(response.data);
    } catch (error) {
      console.error("Failed to fetch purchases:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadInvoice = async (purchase: Purchase) => {
    // Simple CSV invoice
    const invoice = `
Invoice #${purchase.id}
Date: ${new Date(purchase.created_at).toLocaleDateString()}
Course: ${purchase.course_title}
Amount: ${purchase.currency} ${purchase.amount}
Payment Provider: ${purchase.payment_provider}
Status: ${purchase.status}
        `.trim();

    const blob = new Blob([invoice], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${purchase.id}.txt`;
    a.click();
  };

  const filteredPurchases = purchases.filter((p) =>
    p.course_title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalSpent = purchases
    .filter((p) => p.status === "succeeded")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <Receipt className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Purchase History
              </h1>
              <p className="text-muted-foreground mt-1">
                View all your course purchases and invoices
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-900/20 to-gray-900 border-blue-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Purchases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {purchases.filter((p) => p.status === "succeeded").length}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-gray-900 border-green-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Spent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                ₹{totalSpent.toLocaleString("en-IN")}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-gray-900 border-purple-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {
                  purchases.filter((p) => {
                    const date = new Date(p.created_at);
                    const now = new Date();
                    return (
                      date.getMonth() === now.getMonth() &&
                      date.getFullYear() === now.getFullYear()
                    );
                  }).length
                }
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Transaction History</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-muted-foreground">Loading...</div>
            ) : filteredPurchases.length === 0 ? (
              <div className="text-center py-12">
                <Receipt className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No purchases found</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800">
                    <TableHead className="text-muted-foreground">Date</TableHead>
                    <TableHead className="text-muted-foreground">Course</TableHead>
                    <TableHead className="text-muted-foreground">Amount</TableHead>
                    <TableHead className="text-muted-foreground">
                      Payment Method
                    </TableHead>
                    <TableHead className="text-muted-foreground">Status</TableHead>
                    <TableHead className="text-muted-foreground">Invoice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPurchases.map((purchase) => (
                    <TableRow key={purchase.id} className="border-gray-800">
                      <TableCell className="text-muted-foreground text-sm">
                        {new Date(purchase.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-white font-medium">
                        {purchase.course_title}
                      </TableCell>
                      <TableCell className="text-cyan-400 font-semibold">
                        {purchase.currency} {purchase.amount}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm capitalize">
                        {purchase.payment_provider}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            purchase.status === "succeeded"
                              ? "bg-green-500/20 text-green-400"
                              : purchase.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                          }
                        >
                          {purchase.status === "succeeded" && (
                            <CheckCircle className="h-3 w-3 mr-1 inline" />
                          )}
                          {purchase.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {purchase.status === "succeeded" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownloadInvoice(purchase)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
