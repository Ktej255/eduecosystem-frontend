'use client';

/**
 * RemediationPanel.tsx
 * ─────────────────────
 * Shows the student's weak concepts (from /api/tagging/weak-concepts) with
 * one-click drill-through to video segments, MCQ practice, and AI explanation.
 *
 * Consumed inside the Learning Dashboard page (dashboard/page.tsx).
 * Connects to: /api/tagging/weak-concepts  (GET, auth required)
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertTriangle, ChevronRight, PlayCircle, Brain,
  Target, RefreshCw, TrendingDown, BookOpen, Sparkles,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RemediationStep {
  step_type: string;   // video | ai_chat | mcq | recall
  title: string;
  description: string;
  clip_id?: number;
  timestamp_start?: number;
  timestamp_end?: number;
  node_id?: string;
}

interface WeakConcept {
  node_id: string;
  node_name: string;
  mastery_score: number;
  attempt_count: number;
  difficulty_level: string;
  remediation_plan: RemediationStep[];
}

interface WeakConceptsResponse {
  student_id: number;
  weak_concepts: WeakConcept[];
  total_weak: number;
}

// ─── Step Icon Map ────────────────────────────────────────────────────────────

const STEP_ICON: Record<string, React.FC<any>> = {
  video:   PlayCircle,
  ai_chat: Brain,
  mcq:     Target,
  recall:  RefreshCw,
};

const STEP_COLOR: Record<string, string> = {
  video:   '#6366f1',
  ai_chat: '#06b6d4',
  mcq:     '#f59e0b',
  recall:  '#22c55e',
};

// ─── Mastery Bar ──────────────────────────────────────────────────────────────

function MasteryBar({ value }: { value: number }) {
  const color = value >= 60 ? '#f59e0b' : value >= 40 ? '#f97316' : '#ef4444';
  return (
    <div style={{ height: 4, background: '#1e293b', borderRadius: 2, overflow: 'hidden', marginTop: 4 }}>
      <div style={{
        height: '100%', width: `${value}%`,
        background: color, borderRadius: 2,
        transition: 'width 0.8s ease',
      }} />
    </div>
  );
}

// ─── Concept Card ─────────────────────────────────────────────────────────────

function ConceptCard({
  concept,
  expanded,
  onToggle,
  onActionClick,
}: {
  concept: WeakConcept;
  expanded: boolean;
  onToggle: () => void;
  onActionClick: (step: RemediationStep, concept: WeakConcept) => void;
}) {
  const masteryColor = concept.mastery_score >= 60 ? '#f59e0b'
    : concept.mastery_score >= 40 ? '#f97316' : '#ef4444';

  return (
    <div style={{
      background: 'rgba(239,68,68,0.04)',
      border: `1px solid ${expanded ? 'rgba(239,68,68,0.3)' : '#1e293b'}`,
      borderRadius: 12,
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      {/* Header row */}
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 14px', background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <TrendingDown size={16} color="#ef4444" />
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ color: '#f1f5f9', fontSize: 13, fontWeight: 600, margin: '0 0 2px' }}>
            {concept.node_name}
          </p>
          <MasteryBar value={concept.mastery_score} />
          <p style={{ color: masteryColor, fontSize: 11, margin: '3px 0 0' }}>
            {concept.mastery_score.toFixed(0)}% mastery · {concept.attempt_count} attempts
          </p>
        </div>

        <ChevronRight
          size={16} color="#475569"
          style={{ transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}
        />
      </button>

      {/* Expanded remediation steps */}
      {expanded && (
        <div style={{ borderTop: '1px solid #0f172a', padding: '10px 14px 14px' }}>
          <p style={{ color: '#64748b', fontSize: 11, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.8 }}>
            Remediation Path
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {concept.remediation_plan.map((step, idx) => {
              const StepIcon = STEP_ICON[step.step_type] || BookOpen;
              const stepColor = STEP_COLOR[step.step_type] || '#94a3b8';
              return (
                <button
                  key={idx}
                  onClick={() => onActionClick(step, concept)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: `${stepColor}0d`,
                    border: `1px solid ${stepColor}22`,
                    borderRadius: 8, padding: '9px 12px',
                    cursor: 'pointer', textAlign: 'left',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = `${stepColor}1a`)}
                  onMouseLeave={e => (e.currentTarget.style.background = `${stepColor}0d`)}
                >
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                    background: `${stepColor}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <StepIcon size={12} color={stepColor} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#f1f5f9', fontSize: 12, fontWeight: 600, margin: 0 }}>
                      {step.title}
                    </p>
                    <p style={{ color: '#64748b', fontSize: 10, margin: '1px 0 0' }}>
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight size={12} color={stepColor} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Panel ───────────────────────────────────────────────────────────────

export function RemediationPanel() {
  const router = useRouter();
  const [data, setData] = useState<WeakConceptsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/tagging/weak-concepts')
      .then(r => r.ok ? r.json() : null)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  function handleActionClick(step: RemediationStep, concept: WeakConcept) {
    const base = '/student/upsc/environment/guided';
    switch (step.step_type) {
      case 'video':
        if (step.clip_id) {
          const ts = step.timestamp_start ? `?t=${step.timestamp_start}` : '';
          router.push(`${base}/module/${step.clip_id}${ts}`);
        } else {
          router.push(`${base}`);
        }
        break;
      case 'ai_chat':
        router.push(`${base}?ai_context=${encodeURIComponent(concept.node_name)}`);
        break;
      case 'mcq':
      case 'recall':
        router.push(`${base}/knowledge-graph?focus=${concept.node_id}`);
        break;
      default:
        router.push(`${base}/knowledge-graph`);
    }
  }

  if (loading) {
    return (
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid #1e293b', borderRadius: 16, padding: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <AlertTriangle size={15} color="#ef4444" />
          <span style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>Concepts Needing Attention</span>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            height: 56, background: '#0f172a',
            borderRadius: 10, marginBottom: 8,
            animation: 'pulse 1.5s infinite',
          }} />
        ))}
      </div>
    );
  }

  const concepts = data?.weak_concepts ?? [];

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px', borderBottom: '1px solid #1e293b',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <AlertTriangle size={15} color="#ef4444" />
          <span style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>
            Concepts Needing Attention
          </span>
          {concepts.length > 0 && (
            <span style={{
              background: 'rgba(239,68,68,0.15)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 999, padding: '2px 8px',
              color: '#ef4444', fontSize: 11, fontWeight: 700,
            }}>
              {concepts.length}
            </span>
          )}
        </div>
        <button
          onClick={() => router.push('/student/upsc/environment/guided/knowledge-graph?tab=weak')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#64748b', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4,
          }}
        >
          View all <ChevronRight size={12} />
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {concepts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <Sparkles size={32} color="#22c55e" style={{ margin: '0 auto 8px' }} />
            <p style={{ color: '#22c55e', fontWeight: 700, fontSize: 14, margin: '0 0 4px' }}>
              All concepts strong!
            </p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>
              No weak nodes detected. Keep it up! 🔥
            </p>
          </div>
        ) : (
          concepts.slice(0, 5).map(concept => (
            <ConceptCard
              key={concept.node_id}
              concept={concept}
              expanded={expandedId === concept.node_id}
              onToggle={() => setExpandedId(
                expandedId === concept.node_id ? null : concept.node_id
              )}
              onActionClick={handleActionClick}
            />
          ))
        )}
      </div>
    </div>
  );
}
