import GenericSecurityPage from "@/components/upsc/subjects/security/GenericSecurityPage";
import BorderManagementPage from "@/components/upsc/subjects/security/BorderManagementPage";
import CyberSecurityPage from "@/components/upsc/subjects/security/CyberSecurityPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;

    if (topic === 'border-management') return <BorderManagementPage />;
    if (topic === 'cyber-security') return <CyberSecurityPage />;

    return <GenericSecurityPage topicId={topic} />;
}
