'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Tag, Search, Plus, Trash2, Video, FileText,
  BookOpen, CheckSquare, ArrowLeft, Zap, AlertCircle,
  ChevronDown, UploadCloud
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface ConceptNode {
  node_id: string;
  node_name: string;
}

interface ContentTag {
  id: number;
  content_type: string;
  content_id: string;
  node_id: string;
  weight: number;
  is_primary: boolean;
  tagged_by: string;
}

const CONTENT_TYPE_ICONS: Record<string, React.FC<any>> = {
  video: Video,
  mcq:   CheckSquare,
  pyq:   BookOpen,
  note:  FileText,
  pdf:   FileText,
};

const CONTENT_TYPE_COLORS: Record<string, string> = {
  video: '#6366f1',
  mcq:   '#22c55e',
  pyq:   '#f59e0b',
  note:  '#06b6d4',
  pdf:   '#ec4899',
};

// ─── Proxy routes ─────────────────────────────────────────────────────────────
// frontend/src/app/api/tagging/* — created inline below

async function fetchNodes(): Promise<ConceptNode[]> {
  const r = await fetch('/api/guided/knowledge-graph');
  const data = await r.json();
  return (data.nodes || []).map((n: any) => ({ node_id: n.node_id, node_name: n.node_name }));
}

async function fetchTags(content_type?: string): Promise<ContentTag[]> {
  const q = content_type ? `?content_type=${content_type}` : '';
  const r = await fetch(`/api/tagging/all-tags${q}`);
  const data = await r.json();
  return data.tags || [];
}

async function submitTag(payload: object): Promise<boolean> {
  const r = await fetch('/api/tagging/tag', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return r.ok;
}

async function deleteTag(id: number): Promise<boolean> {
  const r = await fetch(`/api/tagging/${id}`, { method: 'DELETE' });
  return r.ok;
}

async function autoTagClips(): Promise<number> {
  const r = await fetch('/api/tagging/auto-tag-clips', { method: 'POST' });
  const d = await r.json();
  return d.tags_created ?? 0;
}

async function autoTagText(payload: object): Promise<number> {
  const r = await fetch('/api/tagging/auto-tag-text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const d = await r.json();
  return d.tags_created ?? 0;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ConceptTaggingPage() {
  const router = useRouter();

  const [nodes, setNodes] = useState<ConceptNode[]>([]);
  const [tags, setTags] = useState<ContentTag[]>([]);
  const [filterType, setFilterType] = useState('');
  const [loading, setLoading] = useState(true);
  const [autoTagLoading, setAutoTagLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // New tag form
  const [form, setForm] = useState({
    content_type: 'mcq',
    content_id: '',
    node_id: '',
    weight: '1.0',
    is_primary: true,
  });

  // Auto-tag text form
  const [textForm, setTextForm] = useState({
    content_type: 'mcq',
    content_id: '',
    text_body: '',
  });
  const [showTextForm, setShowTextForm] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [n, t] = await Promise.all([fetchNodes(), fetchTags(filterType || undefined)]);
      setNodes(n);
      setTags(t);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, [filterType]);

  const handleSubmitTag = async () => {
    if (!form.content_id || !form.node_id) return;
    const ok = await submitTag({
      content_type: form.content_type,
      content_id: form.content_id,
      node_ids: [form.node_id],
      weights: { [form.node_id]: parseFloat(form.weight) },
      primary_node_id: form.is_primary ? form.node_id : undefined,
    });
    if (ok) {
      showToast('✅ Tag created successfully');
      setForm({ content_type: 'mcq', content_id: '', node_id: '', weight: '1.0', is_primary: true });
      loadData();
    } else {
      showToast('❌ Failed to create tag');
    }
  };

  const handleDelete = async (id: number) => {
    const ok = await deleteTag(id);
    if (ok) {
      showToast('🗑️ Tag deleted');
      setTags(prev => prev.filter(t => t.id !== id));
    }
  };

  const handleAutoTagClips = async () => {
    setAutoTagLoading(true);
    const count = await autoTagClips();
    showToast(`⚡ Auto-tagged ${count} clip→node relationships`);
    await loadData();
    setAutoTagLoading(false);
  };

  const handleAutoTagText = async () => {
    if (!textForm.content_id || !textForm.text_body) return;
    const count = await autoTagText(textForm);
    showToast(`🔍 Matched ${count} concept(s) from text`);
    setTextForm({ content_type: 'mcq', content_id: '', text_body: '' });
    setShowTextForm(false);
    loadData();
  };

  const nodeMap = Object.fromEntries(nodes.map(n => [n.node_id, n.node_name]));

  // Stats
  const typeGroups = tags.reduce<Record<string, number>>((acc, t) => {
    acc[t.content_type] = (acc[t.content_type] || 0) + 1;
    return acc;
  }, {});

  const styles = {
    page: {
      minHeight: '100vh' as const,
      background: '#0a0e1a',
      fontFamily: 'Inter, sans-serif',
      color: '#f1f5f9',
    },
    nav: {
      background: 'rgba(10,14,26,0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #1e293b',
      padding: '0 24px',
      height: 54,
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: 16,
      position: 'sticky' as const,
      top: 0,
      zIndex: 40,
    },
    body: { maxWidth: 1100, margin: '0 auto', padding: '28px 20px' },
    card: {
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid #1e293b',
      borderRadius: 16,
      overflow: 'hidden' as const,
    },
    input: {
      background: '#0f172a',
      border: '1px solid #1e293b',
      borderRadius: 8,
      padding: '8px 12px',
      color: '#f1f5f9',
      fontSize: 13,
      outline: 'none',
      width: '100%',
    },
    label: { color: '#64748b', fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: 0.8, marginBottom: 4, display: 'block' as const },
    btn: (color: string, ghost = false) => ({
      padding: '8px 16px',
      borderRadius: 8,
      border: ghost ? `1px solid ${color}44` : 'none',
      background: ghost ? `${color}18` : color,
      color: ghost ? color : '#fff',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: 6,
      transition: 'opacity 0.2s',
    }),
  };

  return (
    <div style={styles.page}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');*{box-sizing:border-box;}`}</style>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', top: 20, right: 20, zIndex: 999,
          background: '#1e293b', border: '1px solid #334155',
          borderRadius: 10, padding: '10px 18px',
          color: '#f1f5f9', fontSize: 13, fontWeight: 500,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          animation: 'slideIn 0.3s ease',
        }}>
          {toast}
        </div>
      )}

      {/* Nav */}
      <nav style={styles.nav}>
        <button
          onClick={() => router.back()}
          style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          <ArrowLeft size={15} /> Back
        </button>
        <Tag size={15} color="#6366f1" />
        <span style={{ fontWeight: 700 }}>Concept Tagging Manager</span>
        <span style={{ color: '#475569', fontSize: 12, marginLeft: 'auto' }}>
          {tags.length} tags · {nodes.length} concept nodes
        </span>
      </nav>

      <div style={styles.body}>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 24 }}>
          {['video','mcq','pyq','note','pdf'].map(type => {
            const Icon = CONTENT_TYPE_ICONS[type] || Tag;
            const color = CONTENT_TYPE_COLORS[type];
            return (
              <button
                key={type}
                onClick={() => setFilterType(filterType === type ? '' : type)}
                style={{
                  background: filterType === type ? `${color}18` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${filterType === type ? color + '44' : '#1e293b'}`,
                  borderRadius: 12, padding: '12px 14px',
                  display: 'flex', flexDirection: 'column', gap: 6,
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Icon size={13} color={color} />
                  <span style={{ color: '#64748b', fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                    {type}
                  </span>
                </div>
                <span style={{ color, fontSize: 20, fontWeight: 700 }}>
                  {typeGroups[type] || 0}
                </span>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>

          {/* Tags Table */}
          <div style={styles.card}>
            <div style={{
              padding: '14px 16px', borderBottom: '1px solid #1e293b',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <Tag size={14} color="#6366f1" />
              <span style={{ fontWeight: 700, fontSize: 14 }}>
                {filterType ? `${filterType.toUpperCase()} Tags` : 'All Content Tags'}
              </span>
              {filterType && (
                <button
                  onClick={() => setFilterType('')}
                  style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 12 }}
                >
                  Clear filter ×
                </button>
              )}
            </div>

            {/* Table header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '90px 130px 1fr 60px 70px 40px',
              padding: '8px 14px', background: '#0f172a',
              borderBottom: '1px solid #1e293b',
              color: '#475569', fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.8,
            }}>
              <span>Type</span>
              <span>Content ID</span>
              <span>Concept Node</span>
              <span>Weight</span>
              <span>Tagged By</span>
              <span></span>
            </div>

            <div style={{ maxHeight: 440, overflowY: 'auto' }}>
              {loading ? (
                <div style={{ padding: 24, textAlign: 'center', color: '#475569' }}>Loading…</div>
              ) : tags.length === 0 ? (
                <div style={{ padding: '32px 16px', textAlign: 'center' }}>
                  <AlertCircle size={28} color="#334155" style={{ margin: '0 auto 10px' }} />
                  <p style={{ color: '#475569', fontSize: 13 }}>No tags yet. Create the first one →</p>
                </div>
              ) : (
                tags.map((tag, idx) => {
                  const color = CONTENT_TYPE_COLORS[tag.content_type] || '#94a3b8';
                  const Icon = CONTENT_TYPE_ICONS[tag.content_type] || Tag;
                  return (
                    <div
                      key={tag.id}
                      style={{
                        display: 'grid', gridTemplateColumns: '90px 130px 1fr 60px 70px 40px',
                        padding: '10px 14px',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                        borderBottom: '1px solid #0f172a',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Icon size={11} color={color} />
                        <span style={{ color, fontSize: 11, fontWeight: 600 }}>
                          {tag.content_type}
                        </span>
                        {tag.is_primary && (
                          <span style={{
                            fontSize: 9, background: color + '22', color,
                            borderRadius: 3, padding: '1px 4px',
                          }}>primary</span>
                        )}
                      </div>
                      <span style={{ color: '#94a3b8', fontSize: 12, fontFamily: 'monospace' }}>
                        {tag.content_id}
                      </span>
                      <span style={{ color: '#f1f5f9', fontSize: 12 }}>
                        {nodeMap[tag.node_id] || tag.node_id}
                      </span>
                      <span style={{ color: '#64748b', fontSize: 12 }}>{tag.weight.toFixed(1)}</span>
                      <span style={{
                        fontSize: 10, color: tag.tagged_by === 'auto' ? '#f59e0b' : '#94a3b8',
                      }}>
                        {tag.tagged_by}
                      </span>
                      <button
                        onClick={() => handleDelete(tag.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                      >
                        <Trash2 size={13} color="#ef4444" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right sidebar — create + tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Create Tag */}
            <div style={styles.card}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Plus size={14} color="#22c55e" />
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Create Tag</span>
                </div>
              </div>
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Content Type */}
                <div>
                  <label style={styles.label}>Content Type</label>
                  <select
                    value={form.content_type}
                    onChange={e => setForm(f => ({ ...f, content_type: e.target.value }))}
                    style={{ ...styles.input, appearance: 'none' }}
                  >
                    {['video','mcq','pyq','note','pdf'].map(t => (
                      <option key={t} value={t}>{t.toUpperCase()}</option>
                    ))}
                  </select>
                </div>

                {/* Content ID */}
                <div>
                  <label style={styles.label}>Content ID</label>
                  <input
                    style={styles.input}
                    placeholder="e.g. MCQ_105 or M3C2"
                    value={form.content_id}
                    onChange={e => setForm(f => ({ ...f, content_id: e.target.value }))}
                  />
                </div>

                {/* Node */}
                <div>
                  <label style={styles.label}>Concept Node</label>
                  <select
                    value={form.node_id}
                    onChange={e => setForm(f => ({ ...f, node_id: e.target.value }))}
                    style={{ ...styles.input, appearance: 'none' }}
                  >
                    <option value="">— Select concept —</option>
                    {nodes.slice(0, 120).map(n => (
                      <option key={n.node_id} value={n.node_id}>
                        {n.node_id}: {n.node_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Weight */}
                <div>
                  <label style={styles.label}>Weight (0–1)</label>
                  <input
                    style={styles.input}
                    type="number" min="0" max="1" step="0.1"
                    value={form.weight}
                    onChange={e => setForm(f => ({ ...f, weight: e.target.value }))}
                  />
                  <p style={{ color: '#475569', fontSize: 11, marginTop: 4 }}>
                    1.0 = fully tests this concept · 0.5 = partially
                  </p>
                </div>

                {/* Primary */}
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={form.is_primary}
                    onChange={e => setForm(f => ({ ...f, is_primary: e.target.checked }))}
                    style={{ width: 14, height: 14, accentColor: '#6366f1' }}
                  />
                  <span style={{ color: '#94a3b8', fontSize: 12 }}>Primary concept for this content</span>
                </label>

                <button
                  onClick={handleSubmitTag}
                  style={{ ...styles.btn('#6366f1'), justifyContent: 'center', width: '100%' }}
                  disabled={!form.content_id || !form.node_id}
                >
                  <Plus size={14} />
                  Create Tag
                </button>
              </div>
            </div>

            {/* Auto-tag Tools */}
            <div style={styles.card}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Zap size={14} color="#f59e0b" />
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Auto-Tagging Tools</span>
                </div>
              </div>
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button
                  onClick={handleAutoTagClips}
                  disabled={autoTagLoading}
                  style={{ ...styles.btn('#f59e0b', true), justifyContent: 'center' }}
                >
                  <UploadCloud size={14} />
                  {autoTagLoading ? 'Running…' : 'Auto-tag Video Clips'}
                </button>
                <p style={{ color: '#475569', fontSize: 11, margin: 0 }}>
                  Reads guided_clips.node_ids and creates tags automatically
                </p>

                <div style={{ borderTop: '1px solid #1e293b', margin: '6px 0' }} />

                <button
                  onClick={() => setShowTextForm(!showTextForm)}
                  style={{ ...styles.btn('#06b6d4', true), justifyContent: 'space-between' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Search size={13} />
                    Fuzzy-Match Text
                  </span>
                  <ChevronDown size={13} style={{ transform: showTextForm ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>

                {showTextForm && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
                    <input
                      style={styles.input}
                      placeholder="Content ID (e.g. MCQ_999)"
                      value={textForm.content_id}
                      onChange={e => setTextForm(f => ({ ...f, content_id: e.target.value }))}
                    />
                    <select
                      value={textForm.content_type}
                      onChange={e => setTextForm(f => ({ ...f, content_type: e.target.value }))}
                      style={{ ...styles.input, appearance: 'none' }}
                    >
                      {['mcq','pyq','note','pdf'].map(t => (
                        <option key={t} value={t}>{t.toUpperCase()}</option>
                      ))}
                    </select>
                    <textarea
                      style={{ ...styles.input, minHeight: 80, resize: 'vertical' }}
                      placeholder="Paste the MCQ question text or PYQ body here…"
                      value={textForm.text_body}
                      onChange={e => setTextForm(f => ({ ...f, text_body: e.target.value }))}
                    />
                    <button
                      onClick={handleAutoTagText}
                      style={{ ...styles.btn('#06b6d4'), justifyContent: 'center' }}
                    >
                      <Search size={13} />
                      Match & Tag
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
