import IrModuleViewer from "@/components/upsc/subjects/international-relations/IrModuleViewer";

export default async function Page({ params }: { params: Promise<{ moduleId: string }> }) {
    const { moduleId } = await params;
    return <IrModuleViewer moduleId={moduleId} />;
}
