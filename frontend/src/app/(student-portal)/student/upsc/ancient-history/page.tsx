import AncientHistoryDashboard from "@/components/upsc/subjects/history/AncientHistoryDashboard";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function AncientHistoryPage() {
    return (
        <SubjectAccessGate subject="history_ancient">
            <AncientHistoryDashboard />
        </SubjectAccessGate>
    );
}
