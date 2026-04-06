import MedievalHistoryDashboard from "@/components/batch1/history/MedievalHistoryDashboard";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function MedievalHistoryPage() {
    return (
        <SubjectAccessGate subject="history">
            <MedievalHistoryDashboard />
        </SubjectAccessGate>
    );
}
