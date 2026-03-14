"use client";

import React from "react";
import { useParams } from "next/navigation";
import { OrganizationForm } from "@/components/admin/sso/OrganizationForm";
import { SSOConfigForm } from "@/components/admin/sso/SSOConfigForm";
import { SSOAuditLogs } from "@/components/admin/sso/SSOAuditLogs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, ShieldCheck, History } from "lucide-react";

export default function EditOrganizationPage() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Organization Settings</h1>
        <p className="text-muted-foreground">Manage branding, SSO, and security logs for this tenant.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general" className="gap-2">
            <Building2 className="w-4 h-4" />
            General & Branding
          </TabsTrigger>
          <TabsTrigger value="sso" className="gap-2">
            <ShieldCheck className="w-4 h-4" />
            SSO Configuration
          </TabsTrigger>
          <TabsTrigger value="logs" className="gap-2">
            <History className="w-4 h-4" />
            Activity Logs
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-0">
          <OrganizationForm isEdit={true} />
        </TabsContent>
        
        <TabsContent value="sso" className="mt-0">
          <SSOConfigForm orgId={id} />
        </TabsContent>
        
        <TabsContent value="logs" className="mt-0">
          <SSOAuditLogs organizationId={id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
