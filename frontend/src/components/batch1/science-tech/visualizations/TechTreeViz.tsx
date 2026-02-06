"use client";

import { useRouter } from "next/navigation";

// ... (Existing Imports)

// Include "link" property in data
const TECHNOLOGIES = [
    { id: 'biotech', name: 'Biotechnology', icon: Dna, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30', x: 200, y: 100, requires: [], link: 'biotech' },
    { id: 'nano', name: 'Nanotech', icon: Atom, color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30', x: 500, y: 100, requires: [], link: 'nano' },
    { id: 'space', name: 'Space Tech', icon: Rocket, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30', x: 350, y: 250, requires: ['biotech', 'nano'], link: 'space-tech' },
    { id: 'ai', name: 'Artificial Intelligence', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30', x: 200, y: 400, requires: ['space'], link: 'it-comms' },
    { id: 'energy', name: 'Clean Energy', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', x: 500, y: 400, requires: ['space'], link: 'energy' },
];

// ... (TechNode and TechConnection stay same)

export default function TechTreeViz() {
    const router = useRouter(); // Hook
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    // ...

    // ...

    // In Detail Modal Overlay
    // ...
    <button
        onClick={() => router.push(`/student/batch1/science-tech/${selectedTech.link}`)}
        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
    >
        <FileText className="w-5 h-5" />
        Start Revision for {selectedTech.name}
    </button>
                    </div >
                </div >
            )
}
        </Card >
    );
}
