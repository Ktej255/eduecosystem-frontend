"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  cn
} from "@/lib/utils";
import {
  LayoutDashboard,
  Map,
  FileText,
  Settings,
  LogOut,
  BrainCircuit,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  {
    label: "Journey Map",
    icon: Map,
    href: "/graphotherapy-dashboard",
    color: "text-sky-500",
  },
  {
    label: "My Analysis",
    icon: BrainCircuit,
    href: "/graphotherapy-dashboard/analysis",
    color: "text-violet-500",
  },
  {
    label: "Reports",
    icon: FileText,
    href: "/graphotherapy-dashboard/reports",
    color: "text-pink-700",
  },
  {
    label: "Achievements",
    icon: Award,
    href: "/graphotherapy-dashboard/achievements",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/graphotherapy-dashboard/settings",
  },
];

export default function GraphoSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/graphotherapy-dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold">G</div>
          </div>
          <h1 className={cn("text-2xl font-bold")}>
            Grapho<span className="text-purple-400">Therapy</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-card/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-card/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="bg-slate-800 p-4 rounded-xl mb-4">
          <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase">Your Streak</h4>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
              🔥
            </div>
            <div>
              <div className="text-lg font-bold text-white">0 Days</div>
              <div className="text-xs text-muted-foreground">Keep it up!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
