import EconomyHome from "@/components/batch1/economy/EconomyHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function EconomyPage() {
    return (
        <SubjectAccessGate subject="economy">
            <EconomyHome />
        </SubjectAccessGate>
    );
}
