export interface TreeLeaf {
    id: string;
    topicId: string;
    topicName: string;
    subjectId: string;
    retentionScore: number; // 0-100
    lastReviewed: Date;
    status: 'blooming' | 'withered' | 'healthy';
}

export interface TreeBranch {
    id: string;
    subjectId: string;
    subjectName: string;
    leaves: TreeLeaf[];
}

export const MOCK_TREE_DATA: TreeBranch[] = [
    {
        id: 'branch-polity',
        subjectId: 'polity',
        subjectName: 'Indian Polity',
        leaves: [
            { id: 'l1', topicId: '101', topicName: 'Fundamental Rights', subjectId: 'polity', retentionScore: 95, lastReviewed: new Date(), status: 'blooming' },
            { id: 'l2', topicId: '102', topicName: 'DPSP', subjectId: 'polity', retentionScore: 45, lastReviewed: new Date(Date.now() - 86400000 * 5), status: 'withered' },
            { id: 'l3', topicId: '103', topicName: 'Parliament', subjectId: 'polity', retentionScore: 70, lastReviewed: new Date(Date.now() - 86400000 * 2), status: 'healthy' }
        ]
    },
    {
        id: 'branch-history',
        subjectId: 'history',
        subjectName: 'Modern History',
        leaves: [
            { id: 'l4', topicId: '201', topicName: '1857 Revolt', subjectId: 'history', retentionScore: 20, lastReviewed: new Date(Date.now() - 86400000 * 10), status: 'withered' },
            { id: 'l5', topicId: '202', topicName: 'Gandhian Era', subjectId: 'history', retentionScore: 88, lastReviewed: new Date(), status: 'blooming' }
        ]
    }
];
