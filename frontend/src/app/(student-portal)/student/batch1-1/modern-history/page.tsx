import ModernHistoryDashboard from "@/components/batch1/history/ModernHistoryDashboard";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function ModernHistoryPage() {
    return (
        <SubjectAccessGate subject="history">
            <ModernHistoryDashboard />
        </SubjectAccessGate>
    );
}
