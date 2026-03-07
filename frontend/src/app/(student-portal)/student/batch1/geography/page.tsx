import GeographyHome from "@/components/batch1/geography/GeographyHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function GeographyPage() {
    return (
        <SubjectAccessGate subject="geography">
            <GeographyHome />
        </SubjectAccessGate>
    );
}
