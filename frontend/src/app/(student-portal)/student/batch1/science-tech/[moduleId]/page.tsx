import ScienceModuleViewer from "@/components/batch1/science-tech/ScienceModuleViewer";

export default async function Page({ params }: { params: Promise<{ moduleId: string }> }) {
    const { moduleId } = await params;
    return <ScienceModuleViewer moduleId={moduleId} />;
}
