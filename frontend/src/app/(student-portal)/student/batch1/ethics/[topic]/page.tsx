import GenericEthicsPage from "@/components/batch1/ethics/GenericEthicsPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    return <GenericEthicsPage topicId={topic} />;
}
