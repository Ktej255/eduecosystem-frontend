import React, { useState, useEffect } from "react";
import { 
  Activity, 
  Search, 
  Clock, 
  Globe, 
  AlertCircle,
  CheckCircle2,
  XCircle,
  ShieldAlert
} from "lucide-react";
import api from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface SSOAuditLog {
  id: number;
  event_type: string;
  event_status: string;
  provider_type: string;
  ip_address: string;
  user_agent: string;
  details: any;
  error_message: string;
  created_at: string;
  user_id: number;
}

interface SSOAuditLogsProps {
  organizationId: string | string[];
}

export const SSOAuditLogs: React.FC<SSOAuditLogsProps> = ({ organizationId }) => {
  const [logs, setLogs] = useState<SSOAuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (organizationId) {
      fetchLogs();
    }
  }, [organizationId]);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/organizations/${organizationId}/audit-logs`);
      setLogs(response.data);
    } catch (err) {
      console.error("Failed to fetch SSO logs", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "failure":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "error":
        return <ShieldAlert className="w-4 h-4 text-amber-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  const filteredLogs = logs.filter(log => 
    log.event_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (log.error_message && log.error_message.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search logs by event or error..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Source IP</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Loading activity logs...
                </TableCell>
              </TableRow>
            ) : filteredLogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No logs found matching your criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredLogs.map((log) => (
                <TableRow key={log.id} className="group">
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span className="capitalize">{log.event_type.replace('_', ' ')}</span>
                      {log.error_message && (
                        <span className="text-[10px] text-red-500 font-mono truncate max-w-xs">
                          {log.error_message}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(log.event_status)}
                      <Badge variant={log.event_status === 'success' ? 'secondary' : 'destructive'} className="text-[10px] py-0">
                        {log.event_status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="uppercase text-[10px]">
                      {log.provider_type || 'unkn'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Globe className="w-3 h-3" />
                      {log.ip_address || "N/A"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {new Date(log.created_at).toLocaleString()}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
      
      <p className="text-[10px] text-muted-foreground text-center">
        Showing last {filteredLogs.length} events. Logs are retained for 30 days.
      </p>
    </div>
  );
};
