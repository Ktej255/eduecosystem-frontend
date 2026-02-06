import IrModuleViewer from "@/components/batch1/international-relations/IrModuleViewer";

export default function Page({ params }: { params: { moduleId: string } }) {
    return <IrModuleViewer moduleId={params.moduleId} />;
}
