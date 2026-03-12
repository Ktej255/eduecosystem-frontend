import GenericSocietyPage from "@/components/upsc/subjects/society/GenericSocietyPage";
import GlobalizationPage from "@/components/upsc/subjects/society/GlobalizationPage";
import PopulationPage from "@/components/upsc/subjects/society/PopulationPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    if (topic === 'globalization') return <GlobalizationPage />;
    if (topic === 'women-population') return <PopulationPage />;
    return <GenericSocietyPage topicId={topic} />;
}
