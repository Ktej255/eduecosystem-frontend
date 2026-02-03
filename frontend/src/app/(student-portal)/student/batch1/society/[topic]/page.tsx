import GenericSocietyPage from "@/components/batch1/society/GenericSocietyPage";
import GlobalizationPage from "@/components/batch1/society/GlobalizationPage";
import PopulationPage from "@/components/batch1/society/PopulationPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    if (topic === 'globalization') return <GlobalizationPage />;
    if (topic === 'women-population') return <PopulationPage />;
    return <GenericSocietyPage topicId={topic} />;
}
