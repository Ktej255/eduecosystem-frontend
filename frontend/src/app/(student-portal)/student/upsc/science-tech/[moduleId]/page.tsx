import ScienceModuleViewer from "@/components/upsc/subjects/science-tech/ScienceModuleViewer";

export default async function Page({ params }: { params: Promise<{ moduleId: string }> }) {
    const { moduleId } = await params;
    return <ScienceModuleViewer moduleId={moduleId} />;
}
