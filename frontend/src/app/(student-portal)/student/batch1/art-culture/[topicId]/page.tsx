import GenericArtCulturePage from "@/components/batch1/art-culture/GenericArtCulturePage";

export default async function Page({ params }: { params: Promise<{ topicId: string }> }) {
    const { topicId } = await params;
    return <GenericArtCulturePage topicId={topicId} />;
}
