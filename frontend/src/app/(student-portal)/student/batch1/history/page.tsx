import HistoryHome from "@/components/batch1/history/HistoryHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function HistoryPage() {
    return (
        <SubjectAccessGate subject="history">
            <HistoryHome />
        </SubjectAccessGate>
    );
}
