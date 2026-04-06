import DynastyAtlas from "@/components/batch1/history/DynastyAtlas";

export const metadata = {
    title: "Dynasty Atlas | History Revision",
    description: "Navigate 86 chapters of Ancient, Medieval, and Modern Indian History in a single visual timeline.",
};

export default function DynastyAtlasPage() {
    return (
        <main className="min-h-screen bg-stone-950 p-4 md:p-8">
            <DynastyAtlas />
        </main>
    );
}
