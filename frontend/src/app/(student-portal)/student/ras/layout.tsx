export default function RASLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="ras-portal-root min-h-screen bg-[#050505]">
            {children}
        </div>
    );
}
