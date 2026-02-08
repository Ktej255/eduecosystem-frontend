
import { PolityNode, PolityEdge, GraphData } from "../types";

export const INITIAL_NODES: PolityNode[] = [
    // --- UNION (Top) ---
    {
        id: 'N1',
        type: 'union',
        data: {
            label: 'President',
            description: 'Head of State. Has Veto Power, Pardoning Power, Emergency Power.',
            category: 'Executive',
            articleRange: 'Articles 52-62'
        },
        position: { x: 400, y: 50 },
    },
    {
        id: 'N3',
        type: 'union',
        data: {
            label: 'Parliament',
            description: 'Supreme Legislative Body. Controls Money. Can remove Govt.',
            category: 'Legislature',
            articleRange: 'Article 79'
        },
        position: { x: 400, y: 200 },
    },

    // --- JUDICIARY (Right) ---
    {
        id: 'N6',
        type: 'judiciary',
        data: {
            label: 'Supreme Court',
            description: 'Guardian of Constitution. Power of Judicial Review.',
            category: 'Judiciary',
            articleRange: 'Article 124'
        },
        position: { x: 700, y: 200 },
    },

    // --- STATE (Bottom Left) ---
    {
        id: 'S1',
        type: 'state',
        data: {
            label: 'Governor',
            description: 'State Head / Centre Agent. Has "Reservation" power (Art 200).',
            category: 'Executive',
            articleRange: 'Article 153'
        },
        position: { x: 100, y: 400 },
    },
    {
        id: 'S3',
        type: 'state',
        data: {
            label: 'State Assembly',
            description: 'Directly Elected. Powerful in Money Bills.',
            category: 'Legislature',
            articleRange: 'Article 170'
        },
        position: { x: 100, y: 550 },
    },

    // --- GUARDIAN NETWORK (Abstract) ---
    {
        id: 'C1',
        type: 'abstract',
        data: {
            label: 'Fundamental Rights',
            description: 'The Shield. Justiciable Rights (Part III).',
            category: 'Rights',
            articleRange: 'Articles 12-35'
        },
        position: { x: 700, y: 400 },
    },
    {
        id: 'C4',
        type: 'abstract',
        data: {
            label: 'Basic Structure',
            description: 'The Firewall. Unamendable Core of Constitution.',
            category: 'Core Principle',
            articleRange: 'Judicial Invention'
        },
        position: { x: 700, y: 50 },
    },
    {
        id: 'Cit',
        type: 'citizen',
        data: {
            label: 'Citizen',
            description: 'The Ultimate Sovereign.',
            category: 'Core Principle',
            articleRange: 'Preamble'
        },
        position: { x: 400, y: 550 },
    }
];

export const INITIAL_EDGES: PolityEdge[] = [
    {
        id: 'e1',
        source: 'S3',
        target: 'S1',
        label: 'Bill Passed',
        animated: true,
        type: 'smoothstep'
    },
    {
        id: 'e2',
        source: 'S1',
        target: 'N1',
        label: 'Reserved (Art 200)',
        animated: false,
        type: 'smoothstep',
        style: { strokeDasharray: '5,5' }, // Dotted line
        data: { relationType: 'Check & Balance' }
    },
    {
        id: 'e3',
        source: 'N3',
        target: 'S3',
        label: 'Override (Art 250)',
        type: 'straight',
        style: { stroke: 'red', strokeWidth: 2 },
        visible_during: 'EMERGENCY',
        animated: true
    },
    // Guardian Edges
    {
        id: 'e4',
        source: 'N3',
        target: 'C4',
        label: 'Amendment (Art 368)',
        type: 'smoothstep',
        style: { stroke: '#f59e0b' },
        animated: true
    },
    {
        id: 'e5',
        source: 'C4',
        target: 'N6',
        label: 'Judicial Review (Art 13)',
        type: 'smoothstep',
        style: { stroke: '#ef4444', strokeWidth: 2 },
        animated: true,
        data: { relationType: 'Check & Balance' }
    },
    {
        id: 'e6',
        source: 'S1', // State Executive
        target: 'Cit',
        label: 'Violation',
        type: 'smoothstep',
        style: { stroke: '#ef4444' },
        visible_during: 'EMERGENCY' // Just for demo, usually it's always possible
    },
    {
        id: 'e7',
        source: 'Cit',
        target: 'N6',
        label: 'Writ (Art 32)',
        type: 'smoothstep',
        style: { stroke: '#10b981', strokeWidth: 2 },
        animated: true
    }
];

export const INITIAL_GRAPH_DATA: GraphData = {
    nodes: INITIAL_NODES,
    edges: INITIAL_EDGES
};
