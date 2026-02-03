import GenericSecurityPage from "@/components/batch1/security/GenericSecurityPage";
import BorderManagementPage from "@/components/batch1/security/BorderManagementPage";
import CyberSecurityPage from "@/components/batch1/security/CyberSecurityPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;

    if (topic === 'border-management') return <BorderManagementPage />;
    if (topic === 'cyber-security') return <CyberSecurityPage />;

    return <GenericSecurityPage topicId={topic} />;
}
