import EnvironmentHome from "@/components/batch1/environment/EnvironmentHome";
import SubjectAccessGate from "@/components/common/SubjectAccessGate";

export default function EnvironmentPage() {
    return (
        <SubjectAccessGate subject="environment">
            <EnvironmentHome />
        </SubjectAccessGate>
    );
}
