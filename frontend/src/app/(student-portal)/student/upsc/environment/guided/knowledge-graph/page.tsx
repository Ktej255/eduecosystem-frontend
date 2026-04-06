'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap, 
  Panel,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Position,
  NodeProps,
  Handle,
  OnNodesChange,
  OnEdgesChange,
  useReactFlow,
  ReactFlowProvider,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Clock, Zap, Play, MessageSquare, BookOpen, Search, Filter, Info, ChevronRight, X, BrainCircuit, Target, Sparkles, Map as MapIcon, LayoutDashboard } from 'lucide-react';
import './graph-styles.css';

// ─── API Response Types ──────────────────────────────────────────────────────

interface ApiNode {
  id: string;
  node_id: string;
  node_name: string;
  status: 'strong' | 'medium' | 'weak' | 'unstarted';
  mastery_score: number;
  global_difficulty: number; // 1-4
  last_activity_date: string;
  next_review_date: string;
  attempts_count: number;
  avg_time_to_answer: number;
  module_id: string;
  prerequisites?: string[];
  // Phase 6 LME Fields
  momentum_score?: number; // 0-100
  burnout_risk?: boolean;
  dropout_risk?: boolean;
  is_at_risk?: boolean;
}

interface ApiEdge {
  source: string;
  target: string;
  type: string;
}

interface ApiGraphResponse {
  nodes: ApiNode[];
  edges: ApiEdge[];
}

interface ApiVideoSegment {
  clip_id: string;
  start_time: number;
  title?: string;
  duration: number;
}

interface ApiNodeStats {
  mcq_attempts: number;
  mcq_accuracy: number;
}

interface ApiRevisionItem {
  node_id: string;
  node_name: string;
  estimated_minutes: number;
  type: 'LEARNING' | 'RECALL' | 'REINFORCEMENT' | 'REVISION';
}

interface ApiDecisionResponse {
  todays_plan: ApiRevisionItem[];
}

interface ApiRemediationResponse {
  weak_nodes: {
    node_id: string;
    node_name: string;
    mastery_score: number;
    suggestion_text: string;
  }[];
}

// ─── Internal Feature Types ──────────────────────────────────────────────────

interface WeakNodeData {
  node_id: string;
  node_name: string;
  mastery_score: number;
  suggestion_text: string;
}

interface RevisionItem {
  node_id: string;
  node_name: string;
  estimated_minutes: number;
  reason: 'spaced_repetition' | 'weak_concept';
}

// ─── Mock Data Registry (Mandatory Fallback) ──────────────────────────────────
// ─── Mock Data Registry (Mandatory Fallback) ──────────────────────────────────
const MOCK_ENVIRONMENT_GRAPH: ApiGraphResponse = {
  nodes: [
    // Module 1: Ecology Foundations (MOD_1)
      // Layer 5 & 6 simulation: Photosynthesis is now in BURNOUT + LOW MOMENTUM shading
      { id: '1', position: { x: 0, y: 0 }, data: { 
        node_id: '1', 
        label: 'Photosynthesis', 
        module_id: 'bio_1', 
        status: 'in_progress', 
        mastery_score: 42,
        isBurnout: true, 
        momentumScore: 15,
        isFragile: true,
        structuralRisk: true
      }, type: 'concept' } as any,
    { id: 'ENV_N_1_2', node_id: 'ENV-1.2', node_name: 'Ecosystem Dynamics', status: 'strong', mastery_score: 88, global_difficulty: 2, attempts_count: 12, avg_time_to_answer: 45, last_activity_date: '2024-03-25', next_review_date: '2024-04-05', module_id: 'MOD_1' },
    { id: 'ENV_N_1_3', node_id: 'ENV-1.3', node_name: 'Carbon & Nitrogen Cycles', status: 'weak', mastery_score: 45, global_difficulty: 3, attempts_count: 18, avg_time_to_answer: 65, last_activity_date: '2024-03-28', next_review_date: '2024-04-02', module_id: 'MOD_1' },
    
    // Module 2: Marine Systems (MOD_2)
    { id: 'ENV_N_2_1', node_id: 'ENV-2.1', node_name: 'Ocean Stratification', status: 'medium', mastery_score: 72, global_difficulty: 2, attempts_count: 8, avg_time_to_answer: 35, last_activity_date: '2024-03-30', next_review_date: '2024-04-10', module_id: 'MOD_2' },
    { id: 'ENV_N_2_2', node_id: 'ENV-2.2', node_name: 'Coral Reefs', status: 'weak', mastery_score: 32, global_difficulty: 4, attempts_count: 15, avg_time_to_answer: 85, last_activity_date: '2024-04-01', next_review_date: '2024-04-01', module_id: 'MOD_2' },
      { id: '3', position: { x: 800, y: 0 }, data: { 
        node_id: '3', 
        label: 'Ocean Acidification', 
        module_id: 'bio_2', 
        status: 'in_progress', 
        mastery_score: 12,
        isDropout: true,
        momentumScore: 0
      }, type: 'concept' } as any,
    
    // Module 3: Climate (MOD_3)
    { id: 'ENV_N_3_1', node_id: 'ENV-3.1', node_name: 'Greenhouse Effect', status: 'strong', mastery_score: 95, global_difficulty: 2, attempts_count: 5, avg_time_to_answer: 20, last_activity_date: '2024-03-30', next_review_date: '2024-04-20', module_id: 'MOD_3' },
    { id: 'ENV_N_3_2', node_id: 'ENV-3.2', node_name: 'Climate Forcing', status: 'strong', mastery_score: 86, global_difficulty: 3, attempts_count: 9, avg_time_to_answer: 50, last_activity_date: '2024-03-30', next_review_date: '2024-04-03', module_id: 'MOD_3' },
  ],
  edges: [
    { source: 'ENV_N_1_1', target: 'ENV_N_1_2', type: 'foundation' },
    { source: 'ENV_N_1_2', target: 'ENV_N_1_3', type: 'dependency' },
    { source: 'ENV_N_1_3', target: 'ENV_N_2_3', type: 'driver' },
    { source: 'ENV_N_2_3', target: 'ENV_N_2_2', type: 'impact' },
    { source: 'ENV_N_3_1', target: 'ENV_N_3_2', type: 'influence' },
  ]
};

const getFragility = (nextReview: string): GraphNodeData['fragility'] => {
  const diffInDays = (new Date(nextReview).getTime() - new Date().getTime()) / (1000 * 3600 * 24);
  if (diffInDays <= 0) return 'fragile';
  if (diffInDays < 2) return 'soon';
  return 'stable';
};

const calculateHybridDifficulty = (node: ApiNode): number => {
  const global = node.global_difficulty || 1;
  const normAttempts = Math.min(node.attempts_count / 5, 4);
  const normTime = Math.min(node.avg_time_to_answer / 30, 4);
  const personal = (normAttempts + normTime) / 2;
  // Blend: 60% Global, 40% Personal
  return (global * 0.6) + (personal * 0.4);
};

const checkStructuralRisk = (nodeId: string, edges: ApiEdge[], allNodes: ApiNode[]): boolean => {
  const prereqs = edges.filter(e => e.target === nodeId).map(e => e.source);
  return prereqs.some(pId => {
    const pNode = allNodes.find(n => n.id === pId);
    return pNode && pNode.mastery_score < 60;
  });
};

// ─── Utility: Recursive Path Tracing ──────────────────────────────────────────

const getRecursivePath = (targetId: string, edges: Edge[], mode: 'foundation' | 'gaps', apiNodes: ApiNode[]): { edgeIds: Set<string>, nodeIds: Set<string> } => {
  const visitedNodes = new Set<string>();
  const visitedEdges = new Set<string>();
  
  const traverse = (currentId: string) => {
    if (visitedNodes.has(currentId)) return;
    visitedNodes.add(currentId);
    
    // Find edges where currentId is the target (upstream traversal)
    edges.forEach(edge => {
       if (edge.target === currentId) {
          const sourceNode = apiNodes.find(n => n.id === edge.source);
          
          if (mode === 'foundation') {
             visitedEdges.add(edge.id);
             traverse(edge.source);
          } else if (mode === 'gaps') {
             // Only include if source node is below threshold (e.g. 80%)
             // This identifies the "Gap Chain"
             if (sourceNode && sourceNode.mastery_score < 80) {
                visitedEdges.add(edge.id);
                traverse(edge.source);
             }
          }
       }
    });
  };
  
  traverse(targetId);
  return { edgeIds: visitedEdges, nodeIds: visitedNodes };
};

interface GraphNodeData extends Record<string, unknown> {
  label: string;
  status: 'strong' | 'medium' | 'weak' | 'unstarted';
  mastery: number;
  node_id: string;
  module_id: string;
  isDimmed: boolean;
  difficulty: number;
  fragility: 'stable' | 'soon' | 'fragile';
  hasStructuralRisk: boolean;
  // Phase 6
  momentumScore: number;
  isBurnout: boolean;
  isDropout: boolean;
  isAtRisk: boolean;
}

type ConceptNodeProps = NodeProps<Node<GraphNodeData>>;

// ─── Constants & Config ────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<string, { bg: string; border: string; text: string; glow: string; dot: string; icon: string }> = {
  strong:    { bg: 'rgba(6,26,17,0.4)', border: '#10b981', text: '#10b981', glow: 'rgba(16,185,129,0.2)', dot: '#10b981', icon: '✅' },
  medium:    { bg: 'rgba(26,20,5,0.4)', border: '#f59e0b', text: '#f59e0b', glow: 'rgba(245,158,11,0.2)', dot: '#f59e0b', icon: '🚀' },
  weak:      { bg: 'rgba(26,5,5,0.4)', border: '#ef4444', text: '#ef4444', glow: 'rgba(239,68,68,0.2)', dot: '#ef4444', icon: '⚠️' },
  unstarted: { bg: 'rgba(15,23,42,0.4)', border: '#475569', text: '#94a3b8', glow: 'none', dot: '#475569', icon: '○' },
};

const nodeWidth = 220;
const nodeHeight = 80;

// ─── Custom Components ────────────────────────────────────────────────────────

const MasteryRing = ({ mastery, color }: { mastery: number; color: string }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (mastery / 100) * circumference;
  
  return (
    <div className="relative flex items-center justify-center w-10 h-10">
      <svg width="40" height="40" className="rotate-[-90deg]">
        <circle
          cx="20" cy="20" r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="3"
        />
        <circle
          cx="20" cy="20" r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="node-mastery-ring"
        />
      </svg>
    </div>
  );
};

const ConceptNode = React.memo(({ data, selected }: ConceptNodeProps) => {
  const status = data.status || 'unstarted';
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.unstarted;
  const { label, difficulty, fragility, hasStructuralRisk, isBurnout, momentumScore } = data;
  
  // Velocity Shading logic: 0-100 score determines brightness core
  const velocityOpacity = Math.max(0.1, momentumScore / 100);
  const velocityScale = 0.8 + (momentumScore / 100) * 0.4; // 0.8 to 1.2

  // Pulse intensity logic
  const getPulseClass = () => {
    if (data.isAtRisk) return 'pulse-red';
    if (status === 'weak' || data.mastery < 50) return 'pulse-strong';
    if (status === 'medium' || (data.mastery >= 50 && data.mastery < 85)) return 'pulse-soft';
    if (status === 'strong' || data.mastery >= 85) return 'static-glow';
    return '';
  };
  
  return (
    <div className="relative group">
      {/* Phase 6: Amber Halo (Burnout Risk) */}
      {isBurnout && (
        <motion.div
          className="burnout-halo absolute -inset-2 rounded-full border-2 border-amber-400/50"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Fragility Halo */}
      {data.fragility !== 'stable' && (
        <div className={`
          absolute -inset-2 rounded-[1.25rem] opacity-30 blur-md transition-all duration-700
          ${data.fragility === 'fragile' ? 'bg-[#3b82f6] animate-pulse' : 'bg-[#3b82f6]/40'}
        `} />
      )}

      <motion.div 
        className={`
          relative p-3 rounded-xl border transition-all duration-300 graph-glass-panel flex flex-col justify-center
          ${selected ? 'shadow-[0_0_25px_rgba(99,102,241,0.4)] scale-105 z-50' : ''}
          ${getPulseClass()}
          ${data.isDimmed ? 'dimmed-node' : ''}
        `} 
        style={{ 
          width: nodeWidth,
          height: nodeHeight,
          borderColor: selected ? '#6366f1' : (data.isAtRisk ? '#f43f5e' : cfg.border),
          borderWidth: selected ? 3 : Math.max(1, Math.min(4, Math.round(data.difficulty))),
          boxShadow: data.isAtRisk ? '0 0 20px rgba(244, 63, 94, 0.4)' : (isBurnout ? '0 0 15px rgba(251, 191, 36, 0.6)' : 'none')
        }}
        animate={{ scale: velocityScale }}
        tabIndex={0}
        aria-label={`Concept: ${data.label}. Mastery: ${data.mastery}%. Difficulty: ${data.difficulty.toFixed(1)}. Fragility: ${data.fragility}.`}
      >
        {/* Phase 6: Velocity Shading Core */}
        <div 
          className="absolute inset-0 bg-white/20 blur-xl pointer-events-none" 
          style={{ opacity: velocityOpacity }}
        />

        <Handle type="target" position={Position.Left} style={{ background: '#334155', width: 8, height: 8 }} />
        
        <div className="flex items-center gap-3 z-10">
          <div className="flex-shrink-0 relative">
            <MasteryRing mastery={data.mastery} color={cfg.border} />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
              {cfg.icon}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
               <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.dot }} />
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">
                    {data.node_id}
                  </span>
               </div>
               {data.hasStructuralRisk && (
                 <span title="Structural Risk: Foundation Weak" className="animate-bounce">⚠️</span>
               )}
               {data.isAtRisk && (
                 <span title="Critical Relapse: Healing Required" className="animate-pulse">🆘</span>
               )}
            </div>
            <div className="text-white text-[11px] font-bold leading-tight line-clamp-2">
              {data.label}
            </div>
          </div>
        </div>

        <Handle type="source" position={Position.Right} style={{ background: '#334155', width: 8, height: 8 }} />
      </motion.div>
    </div>
  );
});

ConceptNode.displayName = 'ConceptNode';

// ─── Hybrid Layout Engine ───────────────────────────────────────────────────

interface TutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNode: { id: string; name: string } | null;
  momentumState?: 'high' | 'normal' | 'burnout' | 'dropout';
}

const TutorModal = ({ isOpen, onClose, selectedNode, momentumState = 'normal' }: TutorModalProps) => {
  const getToneConfig = () => {
    switch(momentumState) {
      case 'burnout':
        return { 
          title: "Simplification Engine Active", 
          desc: "Let's break this down into smaller chunks.",
          tone: "Calm & Supportive",
          icon: <BrainCircuit className="w-5 h-5 text-amber-400" />
        };
      case 'dropout':
        return { 
          title: "Momentum Re-ignition", 
          desc: "You're so close to the finish line. One quick win is waiting!",
          tone: "Motivational Coach",
          icon: <Target className="w-5 h-5 text-indigo-400" />
        };
      case 'high':
        return { 
          title: "Elite Flow State", 
          desc: "Excellent pace. Ready for a deep-dive challenge?",
          tone: "Energetic Mentor",
          icon: <Zap className="w-5 h-5 text-emerald-400" />
        };
      default:
        return { 
          title: "AI Knowledge Tutor", 
          desc: "Ready to explore the next concept?",
          tone: "Neutral Educator",
          icon: <Sparkles className="w-5 h-5 text-indigo-400" />
        };
    }
  };

  const getDiagnosticMessage = () => {
    if (!selectedNode) return null;
    // We need the full node data here. For now, we'll use a simplified version 
    // or assume the parent passes mastery if needed. 
    // Since we only have {id, name} in the current prop, let's keep it safe.
    return { 
      title: "Cognitive Diagnostic Active", 
      body: `Analyzing mastery patterns for ${selectedNode.name}...` 
    };
  };

  const config = getToneConfig();
  const diag = getDiagnosticMessage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-white/10 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative"
          >
             <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    {config.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{config.title}</h2>
                    <p className="text-xs text-slate-400 font-medium">Tone: {config.tone}</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-all text-slate-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
             </div>
             
             <div className="p-8 space-y-6">
               <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl">
                 <h3 className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">{diag?.title}</h3>
                 <p className="text-slate-300 italic text-sm leading-relaxed mb-4">
                   "{config.desc}"
                 </p>
                 <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                   {diag?.body}
                 </p>
               </div>
               
               <div className="flex flex-col gap-4">
                 <p className="text-slate-400 text-sm">
                   Based on your current <strong>{momentumState}</strong> state, I suggest we focus on:
                 </p>
                 <div className="grid grid-cols-2 gap-3">
                   <button className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left transition-all group">
                     <div className="text-xs text-slate-500 mb-1">Recommended</div>
                     <div className="text-sm font-bold text-white group-hover:text-indigo-400">Concept Deep Dive</div>
                   </button>
                   <button className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left transition-all group">
                     <div className="text-xs text-slate-500 mb-1">Quick Win</div>
                     <div className="text-sm font-bold text-white group-hover:text-indigo-400">2-Min Recall</div>
                   </button>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

function getHybridLayout(nodes: Node<GraphNodeData>[], edges: Edge[]) {
  // Group nodes by module_id
  const modules: Record<string, Node<GraphNodeData>[]> = {};
  nodes.forEach(node => {
     const mid = node.data.module_id || 'unassigned';
     if (!modules[mid]) modules[mid] = [];
     modules[mid].push(node);
  });

  const sortedModuleIds = Object.keys(modules).sort();
  
  const layoutedNodes = nodes.map(node => {
    const mid = node.data.module_id || 'unassigned';
    const mIdx = sortedModuleIds.indexOf(mid);
    const nIdxWithinModule = modules[mid].indexOf(node);

    return {
      ...node,
      position: {
        x: mIdx * 400,
        y: nIdxWithinModule * 150,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });

  return { nodes: layoutedNodes, edges };
}

// ─── Side Panel ───────────────────────────────────────────────────────────────

interface NodePanelProps {
  node: ApiNode | null;
  onClose: () => void;
  onOpenTutor: (node: ApiNode) => void;
}

function NodePanel({ node, onClose, onOpenTutor }: NodePanelProps) {
  const router = useRouter();
  const [segments, setSegments] = useState<ApiVideoSegment[]>([]);
  const [stats, setStats] = useState<ApiNodeStats | null>(null);
  const [segLoading, setSegLoading] = useState(false);

  useEffect(() => {
    if (!node) return;
    setSegLoading(true);
    setSegments([]);
    setStats(null);
    
    Promise.all([
      fetch(`/api/v1/engine/node/${node.id}/video-segments`).then(r => r.ok ? r.json() as Promise<ApiVideoSegment[]> : []),
      fetch(`/api/v1/engine/node/${node.id}/stats`).then(r => r.ok ? r.json() as Promise<ApiNodeStats> : null),
    ]).then(([segData, statsData]) => {
      setSegments(segData || []);
      setStats(statsData);
    }).catch(() => {}).finally(() => setSegLoading(false));
  }, [node?.id, node]);

  if (!node) return null;
  const status = node.status ?? 'unstarted';
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.unstarted;

  const handleAction = (path: string) => {
    router.push(path);
  };

  return (
    <motion.div 
      initial={{ x: 400 }} animate={{ x: 0 }} exit={{ x: 400 }}
      className="absolute right-0 top-0 bottom-0 w-[400px] graph-glass-panel border-l border-white/10 z-[100] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <div className="p-8 border-b border-white/10 relative bg-slate-900/60">
        <button onClick={onClose} className="absolute right-6 top-6 p-2 hover:bg-white/10 rounded-full text-slate-500 transition-colors">
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-2 mb-3">
           <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ background: cfg.border, color: cfg.border }} />
           <span className="text-[#6366f1] text-[11px] font-black uppercase tracking-widest leading-none">{node.node_id}</span>
        </div>
        <h2 className="text-white text-2xl font-black mb-2 tracking-tight line-clamp-2">{node.node_name}</h2>
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-[#10b981] text-xs font-bold bg-[#10b981]/10 px-3 py-1 rounded-lg border border-[#10b981]/20">
            {node.mastery_score}% Mastery
          </div>
          <div className="text-[#3b82f6] text-[10px] uppercase font-black tracking-widest bg-[#3b82f6]/10 px-3 py-1 rounded-lg border border-[#3b82f6]/20">
            Diff: {calculateHybridDifficulty(node).toFixed(1)}
          </div>
          <div className={`
            text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-lg border
            ${getFragility(node.next_review_date) === 'fragile' ? 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse' : 'bg-slate-800 text-slate-400 border-white/10'}
          `}>
            Fragility: {getFragility(node.next_review_date)}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-10 scrollbar-hide bg-slate-950/20">
        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12 group-hover:scale-175 transition-transform">
                <Target size={40} className="text-white" />
             </div>
             <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 relative z-10">Total Drills</div>
             <div className="text-white text-2xl font-black relative z-10">{stats?.mcq_attempts || 0}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12 group-hover:scale-175 transition-transform">
                <Sparkles size={40} className="text-white" />
             </div>
             <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 relative z-10">Last Accuracy</div>
             <div className="text-white text-2xl font-black relative z-10">{stats?.mcq_accuracy || 0}%</div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-[#6366f1] rounded-full" /> Remediation Engine Clips
          </h3>
          {segLoading ? (
            <div className="flex items-center gap-3 text-slate-500 text-xs py-10 bg-white/[0.02] rounded-2xl border border-dashed border-white/5 justify-center">
               <div className="w-4 h-4 border-2 border-[#6366f1] border-t-transparent rounded-full animate-spin" />
               Querying Neural Database...
            </div>
          ) : segments.length > 0 ? (
            <div className="space-y-3">
              {segments.map((seg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAction(`/student/upsc/environment/clips?id=${seg.clip_id}&start=${seg.start_time}`)}
                  className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-[#6366f1]/40 transition-all text-left shadow-sm"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center shadow-inner group-hover:bg-[#6366f1]/20 transition-colors">
                    <Play size={16} className="text-[#6366f1] group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-bold truncate group-hover:text-[#6366f1] transition-colors">{seg.title || `Cognitive Drill ${idx + 1}`}</div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">{Math.floor(seg.duration / 60)}m {seg.duration % 60}s clip</div>
                  </div>
                  <ChevronRight size={16} className="text-slate-800 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl border border-dashed border-white/5 text-center bg-white/[0.01]">
               <p className="text-slate-600 text-xs font-medium">No automated recovery clips detected for this node yet.</p>
            </div>
          )}
        </div>

        {/* Intelligence Actions */}
        <div className="pt-4">
          <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.25em] mb-6">Execution Suite</h3>
          <div className="space-y-3">
            <button
              onClick={() => onOpenTutor(node)}
              className="w-full flex items-center justify-between p-5 rounded-2xl bg-[#6366f1] hover:bg-[#5850ec] transition-all text-white shadow-lg shadow-[#6366f1]/30 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/20 rounded-xl group-hover:rotate-12 transition-transform">
                  <BrainCircuit size={22} />
                </div>
                <div className="text-left">
                   <span className="block text-sm font-black tracking-tight">Summon AI Tutor</span>
                   <span className="block text-[10px] text-white/70 font-bold uppercase">Personalized Insight</span>
                </div>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleAction(`/student/upsc/environment/tests?node=${node.node_id}`)}
              className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[#6366f1]/50 transition-all text-slate-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  <Target size={22} className="text-[#6366f1]" />
                </div>
                <div className="text-left">
                   <span className="block text-sm font-black tracking-tight text-white">Full Mastery Test</span>
                   <span className="block text-[10px] text-slate-500 font-bold uppercase">Generate MCQ Batch</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-700 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Content Logic ──────────────────────────────────────────────────────

function KnowledgeGraphInner() {
  const { fitView } = useReactFlow();
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node<GraphNodeData>>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<Node<GraphNodeData> | null>(null);
  const [showTutor, setShowTutor] = useState(false);

  // Phase 6: Global Momentum Metrics
  const { avgMomentum, isGloballyBurnout, isGloballyDropout } = useMemo(() => {
    if (nodes.length === 0) return { avgMomentum: 70, isGloballyBurnout: false, isGloballyDropout: false };
    
    const momentumSum = nodes.reduce((acc, n) => acc + (n.data.momentumScore || 0), 0);
    const avg = momentumSum / nodes.length;
    const burnout = nodes.some(n => n.data.isBurnout);
    const dropout = nodes.some(n => n.data.isDropout);
    
    return { 
      avgMomentum: avg, 
      isGloballyBurnout: burnout, 
      isGloballyDropout: dropout 
    };
  }, [nodes]);

  const [weakNodes, setWeakNodes] = useState<WeakNodeData[]>([]);
  const [revisionPlan, setRevisionPlan] = useState<RevisionItem[]>([]);
  const [activeTab, setActiveTab] = useState<'graph' | 'weak' | 'plan'>('graph');
  const [apiNodesRef, setApiNodesRef] = useState<ApiNode[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'gaps' | 'foundation'>('gaps');
  const [focusedModuleId, setFocusedModuleId] = useState<string | null>(null);

  const nodeTypes = useMemo(() => ({ concept: ConceptNode }), []);

  useEffect(() => {
    async function load() {
      try {
        const [graphRes, remediationRes, decisionRes] = await Promise.allSettled([
          fetch('/api/v1/engine/knowledge-graph?subject_slug=environment'),
          fetch('/api/v1/engine/remediation?subject_slug=environment'),
          fetch('/api/v1/engine/decision?subject_slug=environment'),
        ]);

        let graphData: ApiGraphResponse;
        let remediationData: ApiRemediationResponse = { weak_nodes: [] };
        let decisionData: ApiDecisionResponse = { todays_plan: [] };

        if (graphRes.status === 'fulfilled' && graphRes.value.ok) {
           graphData = await graphRes.value.json();
        } else {
           console.warn('Backend graph API failed, using mandatory mock registry.');
           graphData = MOCK_ENVIRONMENT_GRAPH;
        }

        if (remediationRes.status === 'fulfilled' && remediationRes.value.ok) {
           remediationData = await remediationRes.value.json();
        }
        
        if (decisionRes.status === 'fulfilled' && decisionRes.value.ok) {
           decisionData = await decisionRes.value.json();
        }

        // Map graph data to React Flow elements
        const rflowNodes: Node<GraphNodeData>[] = (graphData.nodes || []).map((n: ApiNode) : Node<GraphNodeData> => {
          const difficulty = calculateHybridDifficulty(n);
          const fragility = getFragility(n.next_review_date);
          const hasStructuralRisk = checkStructuralRisk(n.id, graphData.edges || [], graphData.nodes || []);
          
          return {
            id: n.id,
            type: 'concept',
            data: { 
               label: n.node_name, 
               status: n.status || 'unstarted', 
               mastery: n.mastery_score || 0,
               node_id: n.node_id,
               module_id: n.module_id,
               isDimmed: false,
               difficulty,
               fragility,
               hasStructuralRisk,
               momentumScore: n.momentum_score || 50,
               isBurnout: n.burnout_risk || false,
               isDropout: n.dropout_risk || false,
               isAtRisk: n.is_at_risk || (n.mastery_score < 40 && n.attempts_count >= 3)
            },
            position: { x: 0, y: 0 }
          };
        });

        const rflowEdges: Edge[] = (graphData.edges || []).map((e: ApiEdge, idx: number) : Edge => ({
          id: `e${idx}`,
          source: e.source,
          target: e.target,
          type: 'default',
          animated: false,
          style: { stroke: 'rgba(71, 85, 105, 0.4)', strokeWidth: 1.5 },
          markerEnd: { type: MarkerType.ArrowClosed, color: 'rgba(71, 85, 105, 0.4)' },
        }));
        
        setApiNodesRef(graphData.nodes || []);

        const { nodes: layoutedNodes, edges: layoutedEdges } = getHybridLayout(rflowNodes, rflowEdges);
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
        setWeakNodes(remediationData.weak_nodes || []);
        
        setRevisionPlan((decisionData.todays_plan || []).map((p: ApiRevisionItem) : RevisionItem => ({
          node_id: p.node_id,
          node_name: p.node_name,
          estimated_minutes: p.estimated_minutes,
          reason: p.type === 'RECALL' ? 'spaced_repetition' : 'weak_concept',
        })));
      } catch (e) {
        console.error('Failed to load knowledge graph', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [setNodes, setEdges]);


  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    // Check if we need to highlight recursive path
    setSelectedNode(node as Node<GraphNodeData>);
    
    // Calculate path for highlighting
    const { edgeIds, nodeIds } = getRecursivePath(node.id, edges, viewMode, apiNodesRef);
    
    setEdges(prev => (prev as Edge[]).map(e => ({
      ...e,
      animated: edgeIds.has(e.id),
      style: { 
        ...e.style,
        stroke: edgeIds.has(e.id) ? '#6366f1' : 'rgba(71, 85, 105, 0.2)',
        strokeWidth: edgeIds.has(e.id) ? 3 : 1.5,
        opacity: edgeIds.has(e.id) ? 1 : 0.2,
      },
      className: edgeIds.has(e.id) ? 'energy-flow-path' : 'dimmed-edge'
    })));

    setNodes(prev => (prev as Node<GraphNodeData>[]).map(n => ({
      ...n,
      data: {
        ...n.data,
        isDimmed: Boolean((nodeIds.size > 0 && !nodeIds.has(n.id)) || (focusedModuleId && n.data.module_id !== focusedModuleId))
      }
    })));
  }, [apiNodesRef, edges, viewMode, focusedModuleId, setEdges, setNodes]);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setEdges(prev => (prev as Edge[]).map(e => ({
      ...e,
      animated: false,
      style: { ...e.style, stroke: 'rgba(71, 85, 105, 0.4)', strokeWidth: 1.5, opacity: 1 },
      className: ''
    })));
    setNodes(prev => (prev as Node<GraphNodeData>[]).map(n => ({
      ...n,
      data: { ...n.data, isDimmed: Boolean(focusedModuleId ? n.data.module_id !== focusedModuleId : false) }
    })));
  }, [focusedModuleId, setEdges, setNodes]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query) return;
    
    const target = nodes.find(n => n.data.label.toLowerCase().includes(query.toLowerCase()));
    if (target) {
      fitView({ nodes: [target], duration: 1000, padding: 0.5 });
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    fitView({ duration: 800, padding: 0.2 });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] text-slate-400 gap-6">
        <div className="w-16 h-16 border-4 border-[#6366f1] border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(99,102,241,0.3)]" />
        <div className="text-center">
           <p className="text-sm font-black uppercase tracking-[0.3em] text-white animate-pulse">Neural Mapping Active</p>
           <p className="text-xs text-slate-600 mt-2">Integrating Environment & Ecology Concept Space...</p>
        </div>
      </div>
    );
  }

  const containerStyle: React.CSSProperties = { height: '100vh', width: '100%', backgroundColor: '#020617', overflow: 'hidden', position: 'relative' };

  return (
    <div style={containerStyle} className="font-sans text-white">
      <Panel position="top-left" className="m-6 z-50">
        <div className="flex flex-col gap-5">
           <div className="flex items-center gap-3 p-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl pr-6 shadow-2xl">
             <button onClick={() => router.push('/student/upsc/environment/guided')} className="p-2.5 bg-[#6366f1] rounded-xl text-white hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#6366f1]/40">
               <LayoutDashboard size={20} />
             </button>
             <div className="h-8 w-px bg-white/10 mx-1" />
             <div className="relative group">
                <Search className="absolute left-3 top-2.5 text-slate-600 border-none group-focus-within:text-[#6366f1] transition-colors" size={16} />
                <input 
                  type="text"
                  placeholder="Search Concept..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleSearch(e);
                  }}
                  className="bg-transparent border-none text-white text-xs font-bold py-2.5 pl-10 pr-10 focus:ring-0 w-64 placeholder:text-slate-700 font-sans"
                />
                {searchQuery && (
                  <button onClick={clearSearch} className="absolute right-2 top-2.5 p-1 hover:bg-white/10 rounded-full text-slate-500">
                    <X size={14} />
                  </button>
                )}
             </div>
           </div>

           {/* View Mode Toggle */}
           <div className="flex items-center gap-2 p-1.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl w-fit shadow-xl">
              <button 
                onClick={() => setViewMode('gaps')}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'gaps' ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Gap Chain
              </button>
              <button 
                onClick={() => setViewMode('foundation')}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'foundation' ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Foundation View
              </button>
           </div>

           {/* Module Tabs (Focus Mode) */}
           <div className="flex flex-wrap gap-2 max-w-[400px]">
              {['MOD_1', 'MOD_2', 'MOD_3', 'MOD_4', 'MOD_5'].map((mid) => (
                <button
                  key={mid}
                  onClick={() => setFocusedModuleId(focusedModuleId === mid ? null : mid)}
                  className={`
                    px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-tighter border transition-all
                    ${focusedModuleId === mid 
                      ? 'bg-white/10 border-white/20 text-white shadow-lg' 
                      : 'bg-black/20 border-white/5 text-slate-600 hover:border-white/10'}
                  `}
                >
                  {mid.replace('_', ' ')}
                </button>
              ))}
           </div>
        </div>
      </Panel>


      <Panel position="top-right" className="m-6 z-50">
        <div className="flex p-1.5 rounded-2xl graph-glass-panel gap-1 shadow-2xl backdrop-blur-3xl">
          {[
            { id: 'graph', label: 'Atlas', icon: <MapIcon size={14} /> },
            { id: 'weak', label: 'Knowledge Gaps', icon: <Zap size={14} /> },
            { id: 'plan', label: 'Focus Path', icon: <Target size={14} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest
                ${activeTab === tab.id 
                  ? 'bg-[#6366f1] text-white shadow-xl shadow-[#6366f1]/30 scale-105' 
                  : 'text-slate-500 hover:text-white hover:bg-white/5'}
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </Panel>

      <div className="absolute inset-0 z-0">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          onPaneClick={onPaneClick}
          fitView
          minZoom={0.1}
          maxZoom={2.5}
          onlyRenderVisibleElements={true}
        >

          <Background color="rgba(71, 85, 105, 0.15)" gap={30} size={1.5} />
          <Controls className="!bg-slate-900 !border-white/10 !text-slate-400 !fill-slate-400 !shadow-2xl rounded-xl overflow-hidden" />
          <MiniMap 
            style={{ width: 180, height: 120, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }} 
            nodeColor={(n: any) => STATUS_CONFIG[n.data.status as string]?.border || '#334155'}
            maskColor="rgba(0, 0, 0, 0.5)"
          />
        </ReactFlow>
      </div>

      <AnimatePresence>
        {activeTab === 'weak' && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
            className="absolute right-6 top-32 bottom-8 w-[420px] z-[60] flex flex-col gap-4 pointer-events-none"
          >
             <div className="p-1 w-full flex-1 rounded-[2.5rem] bg-gradient-to-b from-[#ef4444]/20 to-transparent pointer-events-auto">
               <div className="p-8 rounded-[2.3rem] graph-glass-panel border-white/5 flex flex-col h-full overflow-hidden shadow-2xl backdrop-blur-3xl">
                  <div className="mb-8">
                    <h3 className="text-white font-black text-2xl mb-2 flex items-center gap-3">
                       <div className="p-2.5 bg-[#ef4444]/20 rounded-2xl text-[#ef4444]">
                          <Zap size={22} />
                       </div>
                       Knowledge Gaps
                    </h3>
                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                       Concepts below 40% mastery requiring immediate structural remediation.
                    </p>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
                     {weakNodes.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 opacity-30 grayscale">
                           <Target size={60} className="text-slate-600 mb-4" />
                           <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">No Gaps Detected</p>
                        </div>
                     ) : weakNodes.map((node, i) => (
                       <motion.div 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                          key={i} 
                          className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ef4444]/40 hover:bg-[#ef4444]/5 transition-all group cursor-pointer"
                          onClick={() => {
                             const n = nodes.find(gn => gn.data.node_id === node.node_id);
                             if (n) {
                               fitView({ nodes: [n], duration: 1000, padding: 0.5 });
                               setSelectedNode(n);
                             }
                          }}
                       >
                          <div className="flex justify-between items-center mb-3">
                             <span className="text-white text-sm font-black tracking-tight group-hover:text-[#ef4444] transition-colors">{node.node_name}</span>
                             <div className="px-3 py-1 bg-[#ef4444]/10 rounded-lg text-[#ef4444] text-[10px] font-black border border-[#ef4444]/20 uppercase">
                               {node.mastery_score}% Correct
                             </div>
                          </div>
                          <p className="text-slate-400 text-[11px] leading-relaxed font-medium">
                             {node.suggestion_text}
                          </p>
                       </motion.div>
                     ))}
                  </div>
               </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'plan' && (
           <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
            className="absolute right-6 top-32 bottom-8 w-[420px] z-[60] flex flex-col gap-4 pointer-events-none"
          >
             <div className="p-1 w-full flex-1 rounded-[2.5rem] bg-gradient-to-b from-[#6366f1]/20 to-transparent pointer-events-auto">
                <div className="p-8 rounded-[2.3rem] graph-glass-panel border-white/5 flex flex-col h-full overflow-hidden shadow-2xl backdrop-blur-3xl">
                   <div className="flex items-center justify-between mb-8">
                      <div>
                         <h3 className="text-white font-black text-2xl mb-2 flex items-center gap-3">
                            <div className="p-2.5 bg-[#6366f1]/20 rounded-2xl text-[#6366f1]">
                               <Clock size={22} />
                            </div>
                            Focus Path
                         </h3>
                         <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">Daily Intelligent Revision Plan</p>
                      </div>
                   </div>

                   <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-hide">
                      {revisionPlan.map((item, i) => (
                        <div key={i} className="relative pl-8 pb-6 before:content-[''] before:absolute before:left-[11px] before:top-6 before:bottom-0 before:w-px before:bg-white/5">
                           <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-lg flex items-center justify-center border border-white/10 z-10 ${item.reason === 'spaced_repetition' ? 'bg-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.3)]'}`}>
                              {item.reason === 'spaced_repetition' ? <Sparkles size={12} className="text-white" /> : <Zap size={12} className="text-white" />}
                           </div>
                           <div className="mb-2">
                              <span className="text-white text-base font-black tracking-tight">{item.node_name}</span>
                              <div className="inline-flex items-center gap-1.5 ml-3 px-2 py-0.5 bg-white/5 rounded-md border border-white/10">
                                 <Clock size={10} className="text-slate-500" />
                                 <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{item.estimated_minutes}m</span>
                              </div>
                           </div>
                           <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                              {item.reason === 'spaced_repetition' ? 'Dynamic Recall' : 'Gap Remediation'} session required
                           </div>
                        </div>
                      ))}
                   </div>

                   <button className="w-full mt-6 p-5 rounded-2xl bg-[#6366f1] text-white font-black text-sm uppercase tracking-widest shadow-2xl shadow-[#6366f1]/40 hover:scale-[1.02] hover:bg-[#5850ec] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                      Start Focused Session <ChevronRight size={18} />
                   </button>
                </div>
             </div>
          </motion.div>
        )}
       </AnimatePresence>

       <Panel position="bottom-left" className="m-6 z-50">
          <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4">
             <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1">Diagnostic Signal Guide</h4>
             <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-md border-2 border-[#6366f1] bg-[#6366f1]/10" />
                   <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Border · Concept Difficulty</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-md border border-white/10 shadow-[0_0_10px_#3b82f6] bg-[#3b82f6]/20" />
                   <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Halo · Fragility Alert (SM-2)</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-md border border-white/10 flex items-center justify-center text-[10px]">⚠️</div>
                   <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Icon · Structural Prereq Risk</span>
                </div>
             </div>
          </div>
       </Panel>

       {/* Phase 6: Global Momentum Panel (Top-Right) */}
      <Panel position="top-right" className="z-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl min-w-[200px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Learning Momentum</span>
            <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              avgMomentum > 75 ? 'bg-emerald-500/20 text-emerald-400' : 
              avgMomentum > 40 ? 'bg-amber-500/20 text-amber-400' : 'bg-rose-500/20 text-rose-400'
            }`}>
              {avgMomentum > 75 ? 'Optimal' : avgMomentum > 40 ? 'Stable' : 'Risk'}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white leading-none">{Math.round(avgMomentum)}</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase">Score</span>
              <div className="flex items-center gap-1">
                {avgMomentum > 70 ? (
                  <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                ) : (
                  <Clock className="w-3 h-3 text-slate-500" />
                )}
                <span className="text-[10px] text-slate-300">↑ improving</span>
              </div>
            </div>
          </div>

          {/* Mini Sparkline Visualization (Mock) */}
          <div className="flex items-end gap-1 h-6 mt-2 overflow-hidden">
            {[40, 55, 45, 60, 70, 65, 80, 75, 90].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-indigo-500/30 rounded-t-sm" 
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </Panel>

      {/* Phase 6: Intervention Sidebar (Soft Notifications) */}
      <div className="absolute top-24 right-4 z-10 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {isGloballyBurnout && (
            <motion.div 
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="bg-slate-900/90 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-xl pointer-events-auto max-w-[280px]"
            >
              <div className="flex gap-3">
                <div className="bg-amber-500/20 p-2 rounded-lg h-fit">
                  <BrainCircuit className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Mindfulness Break?</h4>
                  <p className="text-xs text-slate-400 mt-1">High effort detected. We suggest breaking this module into smaller chunks.</p>
                  <button className="mt-3 w-full bg-slate-800 hover:bg-slate-700 text-amber-400 text-[10px] font-bold py-1.5 rounded transition-all">
                    Try Simplified Flow
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {isGloballyDropout && (
            <motion.div 
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="bg-slate-900/90 border-l-4 border-indigo-500 p-4 rounded-r-xl shadow-xl pointer-events-auto max-w-[280px]"
            >
              <div className="flex gap-3">
                <div className="bg-indigo-500/20 p-2 rounded-lg h-fit">
                  <Target className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Momentum Boost</h4>
                  <p className="text-xs text-slate-400 mt-1">You're close to a milestone! Try a 2-min recall to get back on track.</p>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold py-1.5 rounded transition-all">
                      1 Quick Recall
                    </button>
                    <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold py-1.5 rounded transition-all">
                      2 MCQs
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       <NodePanel 
        node={selectedNode ? nodes.find(n => n.id === selectedNode.id)?.data as unknown as ApiNode : null} 
        onClose={() => setSelectedNode(null)} 
        onOpenTutor={(node) => setShowTutor(true)}
      />

      <AnimatePresence>
        {showTutor && selectedNode && (
          <TutorModal 
            isOpen={showTutor}
            selectedNode={{ id: selectedNode.id, name: selectedNode.data.label }}
            onClose={() => setShowTutor(false)}
            momentumState={avgMomentum > 75 ? 'high' : isGloballyBurnout ? 'burnout' : isGloballyDropout ? 'dropout' : 'normal'}
          />
        )}
      </AnimatePresence>

      <Panel position="bottom-center" className="mb-10">
         <div className="flex items-center gap-10 p-4 px-12 rounded-[2rem] graph-glass-panel shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-3 group cursor-help">
               <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]" />
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Strong (80%+)</span>
            </div>
            <div className="flex items-center gap-3 group cursor-help">
               <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b]" />
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Growing (40-80%)</span>
            </div>
            <div className="flex items-center gap-3 group cursor-help">
               <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-[0_0_10px_#ef4444]" />
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Critical (&lt;40%)</span>
            </div>
         </div>
      </Panel>
    </div>
  );
}

export default function KnowledgeGraphPage() {
  return (
    <ReactFlowProvider>
      <KnowledgeGraphInner />
    </ReactFlowProvider>
  );
}
