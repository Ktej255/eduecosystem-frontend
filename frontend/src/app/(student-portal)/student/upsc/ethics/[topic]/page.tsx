import GenericEthicsPage from "@/components/upsc/subjects/ethics/GenericEthicsPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    return <GenericEthicsPage topicId={topic} />;
}
