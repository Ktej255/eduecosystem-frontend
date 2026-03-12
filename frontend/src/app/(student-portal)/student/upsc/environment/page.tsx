import EnvironmentHome from "@/components/upsc/subjects/environment/EnvironmentHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function EnvironmentPage() {
    return (
        <SubjectAccessGate subject="environment">
            <EnvironmentHome />
        </SubjectAccessGate>
    );
}
