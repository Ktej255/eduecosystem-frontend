import UnifiedHistoryDashboard from "@/components/batch1/history/UnifiedHistoryDashboard";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function HistoryPhase2Page() {
    return (
        <SubjectAccessGate subject="history">
            <UnifiedHistoryDashboard />
        </SubjectAccessGate>
    );
}
