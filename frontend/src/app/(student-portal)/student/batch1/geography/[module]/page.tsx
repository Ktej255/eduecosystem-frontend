import GenericGeographyPage from "@/components/batch1/geography/GenericGeographyPage";

export default async function Page({ params }: { params: Promise<{ module: string }> }) {
    const { module } = await params;
    return <GenericGeographyPage moduleId={module} />;
}
