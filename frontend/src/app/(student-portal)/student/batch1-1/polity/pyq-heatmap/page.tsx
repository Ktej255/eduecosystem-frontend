import PYQYearHeatmap from "@/components/batch1/polity/PYQYearHeatmap";

export const metadata = {
    title: "PYQ Year Heatmap | Polity | UPSC Prep",
    description: "Year-wise frequency heatmap of all UPSC Polity questions 2011–2024. Color-coded by topic and count.",
};

export default function PYQHeatmapPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#070809" }}>
            <PYQYearHeatmap />
        </div>
    );
}
