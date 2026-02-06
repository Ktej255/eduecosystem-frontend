import ScienceModuleViewer from "@/components/batch1/science-tech/ScienceModuleViewer";

export default function Page({ params }: { params: { moduleId: string } }) {
    return <ScienceModuleViewer moduleId={params.moduleId} />;
}
