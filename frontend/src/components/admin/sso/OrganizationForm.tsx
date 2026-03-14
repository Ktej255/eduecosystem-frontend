import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import axios from "axios";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface OrganizationFormProps {
  isEdit?: boolean;
}

export const OrganizationForm: React.FC<OrganizationFormProps> = ({
  isEdit,
}) => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    slug: "",
    sso_enabled: false,
    logo_url: "",
    hero_text: "",
    theme_config: {
      primary_color: "#6366f1"
    }
  });

  useEffect(() => {
    if (isEdit && id) {
      fetchOrganization();
    }
  }, [isEdit, id]);

  const fetchOrganization = async () => {
    try {
      const response = await api.get(`/organizations/${id}`);
      const data = response.data;
      setFormData({
        ...data,
        theme_config: data.theme_config || { primary_color: "#6366f1" }
      });
    } catch (err) {
      setError("Failed to load organization details");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      sso_enabled: checked,
    }));
  };

  const handleColorChange = (color: string) => {
    setFormData((prev) => ({
      ...prev,
      theme_config: {
        ...prev.theme_config,
        primary_color: color
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isEdit) {
        await api.patch(`/organizations/${id}`, formData);
      } else {
        await api.post("/organizations", formData);
      }
      router.push("/admin/organizations");
    } catch (err) {
      let message = "Failed to save organization";
      if (axios.isAxiosError(err) && err.response?.data?.detail) {
        message = err.response.data.detail;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>
            {isEdit ? "Edit Organization" : "New Organization"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Organization Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL identifier)</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="domain">Domain (e.g., acme.com)</Label>
              <Input
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-muted-foreground">
                Used for auto-discovery of organization during login
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-sm font-semibold mb-3">Enterprise Branding</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo_url">Logo URL</Label>
                  <Input
                    id="logo_url"
                    name="logo_url"
                    value={formData.logo_url}
                    onChange={handleChange}
                    placeholder="https://example.com/logo.png"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hero_text">Hero Text (Headline)</Label>
                  <Input
                    id="hero_text"
                    name="hero_text"
                    value={formData.hero_text}
                    onChange={handleChange}
                    placeholder="Welcome to Acme Learning Portal"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primary_color">Primary Brand Color</Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="primary_color"
                      type="color"
                      value={formData.theme_config.primary_color}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="w-12 h-10 p-1 rounded cursor-pointer"
                    />
                    <Input
                      value={formData.theme_config.primary_color}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="font-mono"
                      placeholder="#6366f1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t">
              <Switch
                id="sso_enabled"
                checked={formData.sso_enabled}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="sso_enabled">Enable SSO</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/organizations")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse bg-green-500" />
          Live Preview
        </h3>
        
        {/* Branding Preview Card */}
        <Card className="overflow-hidden border-2 border-dashed border-muted bg-muted/30">
          <div className="p-4 bg-background border-b flex items-center justify-between">
            <div className="h-6 w-24 bg-muted rounded animate-pulse" />
            <div className="flex gap-2">
              <div className="h-4 w-12 bg-muted rounded" />
              <div className="h-4 w-12 bg-muted rounded" />
            </div>
          </div>
          
          <div className="p-8 text-center space-y-6 min-h-[400px] flex flex-col justify-center bg-white dark:bg-slate-950 transition-colors">
            {formData.logo_url ? (
              <img 
                src={formData.logo_url} 
                alt="Org Logo" 
                className="h-16 mx-auto object-contain mb-4"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mx-auto flex items-center justify-center mb-4">
                <span className="text-slate-400 text-xs font-bold">{formData.name?.substring(0, 2).toUpperCase() || "EC"}</span>
              </div>
            )}
            
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              {formData.hero_text || "Welcome to Eduecosystem"}
            </h2>
            
            <p className="text-slate-500 max-w-sm mx-auto">
              Please log in to your organization's secure portal to continue.
            </p>
            
            <div className="pt-4">
              <Button 
                style={{ backgroundColor: formData.theme_config.primary_color }}
                className="w-full max-w-xs shadow-lg hover:opacity-90 transition-opacity text-white"
              >
                {formData.sso_enabled ? `Log in with ${formData.name || 'SSO'}` : "Portal Access Restricted"}
              </Button>
            </div>
            
            <div className="pt-8 flex flex-col items-center">
              <div className="h-10 w-64 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center px-4 justify-between">
                <span className="text-[10px] font-mono text-slate-400">https://{formData.slug || 'tenant'}.eduecosystem.com</span>
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-muted/20 text-center text-[10px] text-muted-foreground uppercase tracking-widest">
            Tenant Branding Mockup
          </div>
        </Card>
      </div>
    </div>
  );
};
