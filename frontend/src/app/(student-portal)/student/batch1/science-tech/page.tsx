import ScienceTechHome from "@/components/batch1/science-tech/ScienceTechHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function ScienceTechPage() {
    return (
        <SubjectAccessGate subject="scitech">
            <ScienceTechHome />
        </SubjectAccessGate>
    );
}
