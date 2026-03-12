"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}
    >
      <Link
        href="/student"
        className="hover:text-foreground transition-colors flex items-center gap-1"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link
            href={item.href}
            className={cn(
              "hover:text-foreground transition-colors",
              item.active ? "text-foreground font-bold" : ""
            )}
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
