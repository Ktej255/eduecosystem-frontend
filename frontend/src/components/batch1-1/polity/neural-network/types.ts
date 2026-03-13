
export interface PolityNode {
    id: string;
    type: 'union' | 'state' | 'judiciary' | 'independent' | 'abstract' | 'citizen' | 'default';
    data: {
        label: string;
        description?: string;
        category?: 'Legislature' | 'Executive' | 'Judiciary' | 'Constitutional Body' | 'Rights' | 'Core Principle';
        articleRange?: string; // e.g., "Articles 52-78"
    };
    position: { x: number; y: number };
}

export interface PolityEdge {
    id: string;
    source: string;
    target: string;
    label?: string;
    animated?: boolean;
    type?: 'smoothstep' | 'straight' | 'default';
    data?: {
        relationType?: 'Appoints' | 'Removes' | 'Vetoes' | 'Consults' | 'Reports To' | 'Check & Balance';
        description?: string;
    };
    style?: React.CSSProperties;
    visible_during?: 'EMERGENCY' | 'ELECTION';
}

export interface GraphData {
    nodes: PolityNode[];
    edges: PolityEdge[];
}
