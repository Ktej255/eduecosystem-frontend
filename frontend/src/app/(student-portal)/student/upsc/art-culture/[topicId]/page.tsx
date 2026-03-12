import GenericArtCulturePage from "@/components/upsc/subjects/art-culture/GenericArtCulturePage";

export default async function Page({ params }: { params: Promise<{ topicId: string }> }) {
    const { topicId } = await params;
    return <GenericArtCulturePage topicId={topicId} />;
}
