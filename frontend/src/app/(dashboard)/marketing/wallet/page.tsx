"use client";

import React, { useState } from "react";
import {
  Wallet, Plus, ArrowUpRight, ArrowDownRight, CreditCard,
  DollarSign, TrendingUp, Calendar, Download, Filter,
  ArrowLeft, PieChart, BarChart3
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  id: string;
  description: string;
  type: 'credit' | 'debit';
  amount: number;
  date: string;
  category: string;
  status: 'completed' | 'pending' | 'failed';
}

const mockTransactions: Transaction[] = [
  { id: "1", description: "Course Revenue - Batch 1 Enrollment", type: "credit", amount: 15000, date: "Jan 11, 2026", category: "Revenue", status: "completed" },
  { id: "2", description: "Google Ads Campaign", type: "debit", amount: 5000, date: "Jan 10, 2026", category: "Advertising", status: "completed" },
  { id: "3", description: "Affiliate Commission Payout", type: "debit", amount: 2500, date: "Jan 9, 2026", category: "Affiliates", status: "completed" },
  { id: "4", description: "Course Revenue - RAS Module", type: "credit", amount: 8000, date: "Jan 8, 2026", category: "Revenue", status: "completed" },
  { id: "5", description: "Facebook Ads Campaign", type: "debit", amount: 3000, date: "Jan 7, 2026", category: "Advertising", status: "pending" },
];

export default function WalletPage() {
  const [transactions] = useState(mockTransactions);

  const stats = {
    balance: 125000,
    revenue: 45000,
    spent: 12500,
    pendingPayout: 8500
  };

  const budgetCategories = [
    { name: "Content Creation", allocated: 50000, spent: 35000 },
    { name: "Advertising", allocated: 30000, spent: 18000 },
    { name: "Affiliate Payouts", allocated: 20000, spent: 12500 },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Wallet className="h-8 w-8 text-green-600" />
            Wallet
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your marketing budget and transactions
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Funds
          </Button>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-80">Current Balance</p>
                <p className="text-2xl font-bold mt-1">₹{stats.balance.toLocaleString()}</p>
              </div>
              <Wallet className="h-8 w-8 opacity-30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">This Month Revenue</p>
                <p className="text-2xl font-bold text-green-600 mt-1">+₹{stats.revenue.toLocaleString()}</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">This Month Spent</p>
                <p className="text-2xl font-bold text-red-600 mt-1">-₹{stats.spent.toLocaleString()}</p>
              </div>
              <ArrowDownRight className="h-6 w-6 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Pending Payouts</p>
                <p className="text-2xl font-bold text-orange-600 mt-1">₹{stats.pendingPayout.toLocaleString()}</p>
              </div>
              <CreditCard className="h-6 w-6 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Allocation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              Budget Allocation
            </CardTitle>
            <CardDescription>Monthly budget breakdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {budgetCategories.map((cat, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{cat.name}</span>
                  <span className="text-gray-500">
                    ₹{cat.spent.toLocaleString()} / ₹{cat.allocated.toLocaleString()}
                  </span>
                </div>
                <Progress value={(cat.spent / cat.allocated) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Revenue vs Expenses chart</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activities</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell className="font-medium">{txn.description}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{txn.category}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-500">{txn.date}</TableCell>
                    <TableCell>
                      <Badge className={
                        txn.status === 'completed' ? 'bg-green-100 text-green-700' :
                          txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                      }>
                        {txn.status}
                      </Badge>
                    </TableCell>
                    <TableCell className={`text-right font-medium ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
