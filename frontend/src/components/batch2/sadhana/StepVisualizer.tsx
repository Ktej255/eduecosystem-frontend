"use client";

import React, { useMemo } from 'react';
import {
    ReactFlow,
    Controls,
    Background,
    Node,
    Edge,
    Handle,
    Position,
    BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { StepData } from './data/step-nodes';
import { Languages } from 'lucide-react';

interface StepVisualizerProps {
    stepData: StepData;
    language: 'en' | 'hi';
}

const CustomNode = ({ data }: any) => {
    return (
        <div className="px-5 py-4 shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-amber-200 min-w-[250px] max-w-[320px] relative overflow-hidden group hover:border-amber-400 transition-colors">
            <Handle type="target" position={Position.Top} className="!bg-amber-400 !w-3 !h-3 !border-white" />

            <div className="relative z-10">
                <h3 className="text-sm font-bold text-amber-950 mb-1.5 leading-snug">
                    {data.language === 'hi' ? data.titleHi : data.titleEn}
                </h3>
                <p className="text-xs text-amber-900/70 font-medium leading-relaxed">
                    {data.language === 'hi' ? data.descHi : data.descEn}
                </p>
            </div>

            <Handle type="source" position={Position.Bottom} className="!bg-amber-400 !w-3 !h-3 !border-white" />
        </div>
    );
};

const nodeTypes = {
    custom: CustomNode,
};

export default function StepVisualizer({ stepData, language }: StepVisualizerProps) {
    // Inject language into each node's data
    const nodes: Node[] = useMemo(() => {
        return stepData.nodes.map(node => ({
            ...node,
            data: {
                ...node.data,
                language: language
            }
        }));
    }, [stepData.nodes, language]);

    const edges: Edge[] = useMemo(() => stepData.edges, [stepData.edges]);

    return (
        <div className="w-full h-full min-h-[600px] flex-1 relative rounded-3xl overflow-hidden border-2 border-amber-100 bg-[#FDF8F0] shadow-inner">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                proOptions={{ hideAttribution: true }}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
            >
                <Background
                    variant={BackgroundVariant.Dots}
                    gap={24}
                    size={2}
                    color="#fcd34d"
                    className="opacity-50"
                />
                <Controls className="!bg-white !border-amber-200 !shadow-sm !rounded-xl overflow-hidden [&>button]:!border-b-amber-100 [&>button]:!text-amber-700 hover:[&>button]:!bg-amber-50" />
            </ReactFlow>
        </div>
    );
}
